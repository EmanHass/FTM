using AutoMapper;
using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Data.DataLayer;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;
using FTMS.Infrastructure.HelperServices.ImageHelper;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class TrainingCompanyRepository : ITrainingCompanyRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        private readonly IImageService _imageService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public TrainingCompanyRepository(FTMSDbContext context,
            IMapper mapper,
            IImageService imageService,
            IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _mapper = mapper;
            _imageService = imageService;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PaginatedList<TrainingCompany>> GetPaginatedDataAsync(int pageNumber, int pageSize)
        {
            var query = _context.TrainingCompanys.AsQueryable();
            //var totalCount = await query.CountAsync();
            var pageData = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            var itemes = await PaginatedList<TrainingCompany>.CreateAsync(query, pageNumber, pageSize);
            return itemes;
        }
        public async Task<List<TrainingCompanyDto>> GetTrainingCompany()
        {
            var training = await _context.TrainingCompanys.ToListAsync();
            return _mapper.Map<List<TrainingCompanyDto>>(training);

        }


        public async Task<TrainingCompany> Add(CreateTrainingCompanyDto companyDto)
        {

            var training = _mapper.Map<TrainingCompany>(companyDto);
            if (companyDto.LogoCompany != null)
            {
                training.LogoCompany = await _imageService.SaveImage(companyDto.LogoCompany, "Images");
            }
            await _context.TrainingCompanys.AddAsync(training);
            await _context.SaveChangesAsync();
            return training;
        }

        public async Task<TrainingCompany> Update(UpdateTrainingCompanyDto updateTrainingCompany)
        {
            var training = await _context.TrainingCompanys.FindAsync(updateTrainingCompany.Id);
            _mapper.Map(updateTrainingCompany, training);
            if (updateTrainingCompany.NewLogo != null)
            {
                training.LogoCompany = await _imageService.SaveImage(updateTrainingCompany.NewLogo, "Images");
            }
            await _context.SaveChangesAsync();
            return training;

        }

        public async Task<bool> Delete(int id)
        {
            var training = await _context.TrainingCompanys.FindAsync(id);
            if (training == null)
                return false;
            else
            {
                _context.TrainingCompanys.Remove(training);
                await _context.SaveChangesAsync();
                return true;
            }
        }

    }
}
