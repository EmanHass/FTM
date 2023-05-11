using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace FTMS.Core.DTOS.TrainingCompany
{
    public class UpdateTrainingCompanyDto
    {
        public int Id { get; set; }
        [StringLength(250)]
        public string Name { get; set; } = string.Empty;
        [StringLength(500)]
        public string Description { get; set; } = string.Empty;
        [StringLength(55)]
        public string Email { get; set; } = string.Empty;
        [StringLength(10)]
        public string PhoneNumber { get; set; } = string.Empty;
        [StringLength(300)]
        public string LinkCompany { get; set; } = string.Empty;
        [StringLength(250)]
        public string Address { get; set; } = string.Empty;
        [StringLength(250)]
        public string LogoCompany { get; set; } = string.Empty;

        public IFormFile? NewLogo { get; set; }
        public int FieldsOfTrainings { get; set; }
    }
}
