using System.ComponentModel.DataAnnotations.Schema;

namespace FTMS.Data.Model
{
    public class TrainingAgenda:BaseEntity
    {
        public string NameSemester { get; set; }
        public string AcademicYear { get; set; }
        public bool StatusSemester {get; set; }
        public DateTime StartTraining  { get; set; }
        public DateTime EndTraining  { get; set; }
        public DateTime StartStudentRegistration { get; set; }
        public DateTime EndStudentRegistration { get; set;}
        public DateTime StartTrainingReport { get; set;}
        public DateTime EndTrainingReport { get; set; }


    }
}
