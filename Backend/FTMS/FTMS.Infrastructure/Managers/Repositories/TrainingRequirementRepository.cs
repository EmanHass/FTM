using AutoMapper;
using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Data.DataLayer;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;
using FTMS.Infrastructure.HelperServices.ImageHelper;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class TrainingRequirementRepository : ITrainingRequirementRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        private readonly IImageService _imageService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public TrainingRequirementRepository(FTMSDbContext context,
            IMapper mapper,
            IImageService imageService,
            IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _mapper = mapper;
            _imageService = imageService;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PaginatedList<TrainingRequirement>> GetPaginatedDataAsync(int pageNumber, int pageSize)
        {
            var query = _context.TrainingRequirements.AsQueryable();
            //var totalCount = await query.CountAsync();
            var pageData = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            var itemes = await PaginatedList<TrainingRequirement>.CreateAsync(query, pageNumber, pageSize);
            return itemes;
        }
        public async Task<List<TrainingRequirementDto>> GetTrainingRequirement()
        {
            var training = await _context.TrainingRequirements.ToListAsync();
            return _mapper.Map<List<TrainingRequirementDto>>(training);

        }


        public async Task<TrainingRequirement> Add(CreateTrainingRequirementDto trainingRequirementDto)
        {

            var training = _mapper.Map<TrainingRequirement>(trainingRequirementDto);
            if (trainingRequirementDto.Image != null)
            {
                training.Image = await _imageService.SaveImage(trainingRequirementDto.Image, "Images");
            }
            await _context.TrainingRequirements.AddAsync(training);
            await _context.SaveChangesAsync();
            return training;
        }

        public async Task<TrainingRequirement> Update(UpdateTrainingRequirementDto updateRequirement)
        {
            var training = await _context.TrainingRequirements.FindAsync(updateRequirement.Id);
            _mapper.Map(updateRequirement, training);
            if (updateRequirement.NewImage != null)
            {
                training.Image = await _imageService.SaveImage(updateRequirement.NewImage, "Images");
            }
            await _context.SaveChangesAsync();
            return training;

        }

        public async Task<bool> Delete(int id)
        {
            var training = await _context.TrainingRequirements.FindAsync(id);
            if (training == null)
                return false;
            else
            {
                _context.TrainingRequirements.Remove(training);
                await _context.SaveChangesAsync();
                return true;
            }
        }

    }
}
