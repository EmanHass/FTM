using System.ComponentModel.DataAnnotations;

namespace FTMS.Core.DTOS.TrainingCompany
{
    public class TrainingCompanyDto
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

        public int CompanyCapacity { get; set; }
        [StringLength(250)]
        public string FieldsOfTrainings { get; set; }
        //   public bool IsActive { get; set; }
    }
}
