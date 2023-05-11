using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.DTOS.TrainingRequirement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Core.DTOS.DataHomePage
{
    public class AllDataDto
    {
        public TrainingDto? trainingDtos { get; set; }
        public List<TrainingImportanceDto>? trainingImportanceDtos { get; set; }
        public List<TrainingCompanyDto>? companyDtos { get; set; }
        public List<TrainingRequirementDto>? trainingRequirementDtos { get; set; }
    }
}
