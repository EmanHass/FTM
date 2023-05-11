using AutoMapper;
using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Infrastructure.AutoMapper
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {


            #region Training
            CreateMap<Training,TrainingDto>();
            CreateMap<CreateTrainingDto,Training>().ForMember(x => x.Image, x => x.Ignore());
            CreateMap<Training,UpdateTrainingDto>().ReverseMap();

            #endregion

            #region TrainingImportance
            CreateMap<TrainingImportance,TrainingImportanceDto>();
            CreateMap<CreateTrainingImportanceDto,TrainingImportance>().ForMember(x => x.Image, x => x.Ignore());
            CreateMap<TrainingImportance,UpdateTrainingImportanceDto>().ReverseMap();

            #endregion

            #region TrainingRequirement
            CreateMap<TrainingRequirement, TrainingRequirementDto>();
            CreateMap<CreateTrainingRequirementDto, TrainingRequirement>().ForMember(x => x.Image, x => x.Ignore());
            CreateMap<TrainingRequirement, UpdateTrainingRequirementDto>().ReverseMap();

            #endregion



            #region User
            //Map User (Student,Supervisor)

            #endregion

            #region Training Company

            CreateMap<TrainingCompany, TrainingCompanyDto>();
            CreateMap<CreateTrainingCompanyDto, TrainingCompany>().ForMember(x=>x.LogoCompany,x=>x.Ignore());
            CreateMap<TrainingCompany, UpdateTrainingCompanyDto>().ReverseMap();


            #endregion


            #region Agenda
            //Map Agenda 

            #endregion


        }

    }
}
