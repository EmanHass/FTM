using AutoMapper;
using FTMS.Core.DTOS.DataHomePage;
using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Data.DataLayer;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class HomePageRepository : IHomePageRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        public HomePageRepository(FTMSDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        public async Task<AllDataDto> GetAllData()
        {

            //Training
            var getTraining = _context.Informations.FirstOrDefault(x => x.Id == 1);
            var trainings = _mapper.Map<TrainingDto>(getTraining);

            var Importances = await _context.TrainingImportances.AsNoTracking().ToListAsync();
            var trainingImportance = _mapper.Map<List<TrainingImportanceDto>>(Importances);

            var companies = await _context.TrainingCompanys.AsNoTracking().ToListAsync();
            var trainingCompany = _mapper.Map<List<TrainingCompanyDto>>(companies);

            var requirements = await _context.TrainingRequirements.AsNoTracking().ToListAsync();
            var trainingRequirement = _mapper.Map<List<TrainingRequirementDto>>(requirements);




            return (new AllDataDto()
            {
                trainingDtos = trainings,
                trainingImportanceDtos = trainingImportance,
                companyDtos = trainingCompany,
                trainingRequirementDtos = trainingRequirement,

            });
        }
    }
}
