using AutoMapper;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.Helpers;
using FTMS.Data.DataLayer;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;
using FTMS.Infrastructure.HelperServices.ImageHelper;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class TImportanceRepository : ITImportanceRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        private readonly IImageService _imageService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public TImportanceRepository(FTMSDbContext context,
            IMapper mapper,
            IImageService imageService,
            IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _mapper = mapper;
            _imageService = imageService;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PaginatedList<TrainingImportance>> GetPaginatedDataAsync(int pageNumber, int pageSize)
        {
            var query = _context.TrainingImportances.AsQueryable();
            //var totalCount = await query.CountAsync();
            var pageData = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            var itemes = await PaginatedList<TrainingImportance>.CreateAsync(query, pageNumber, pageSize);
            return itemes;
        }

        public async Task<List<TrainingImportance>> GetAllAPI(PaginationDTO paginationDTO)
        {
            

            var queryable = _context.TrainingImportances.AsQueryable();
            await _httpContextAccessor.HttpContext.InsertParametersPaginationHeaders(queryable);
            return await queryable.OrderBy(x => x.Description).Paginate(paginationDTO).ToListAsync();
        }
        public async Task<List<TrainingImportanceDto>> GetTImportance()
        {
            var allTImportance = await _context.TrainingImportances.ToListAsync();
            return _mapper.Map<List<TrainingImportanceDto>>(allTImportance);

        }

        public async Task<TrainingImportance> AddTImportance(CreateTrainingImportanceDto importanceDto)
        {

            var trainingImportance = _mapper.Map<TrainingImportance>(importanceDto);
            if (importanceDto.Image != null)
            {
                trainingImportance.Image = await _imageService.SaveImage(importanceDto.Image, "Images");
            }
            await _context.TrainingImportances.AddAsync(trainingImportance);
            await _context.SaveChangesAsync();
            return trainingImportance;
        }

        public async Task<TrainingImportance> Update(UpdateTrainingImportanceDto updateTraining)
        {
            var training = await _context.TrainingImportances.FindAsync(updateTraining.Id);
            _mapper.Map(updateTraining, training);
            if (updateTraining.NewImage != null)
            {
                training.Image = await _imageService.SaveImage(updateTraining.NewImage, "Images");
            }
            await _context.SaveChangesAsync();
            return training;

        }

        public async Task<bool> Delete(int id)
        {
            var training = await _context.TrainingImportances.FindAsync(id);
            if (training == null)
                return false;
            else
            {
                _context.TrainingImportances.Remove(training);
                await _context.SaveChangesAsync();
                return true;
            }
        }
    }
}
