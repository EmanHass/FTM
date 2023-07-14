namespace FTMS.Core.DTOS.TrainingAgenda
{
    public class TrainingAgendaDto
    {
        public int Id { get; set; }
        public string NameSemester { get; set; }
        public string AcademicYear { get; set; }
        public bool StatusSemester { get; set; }
        public string StartTraining { get; set; }
        public string EndTraining { get; set; }
        public string StartStudentRegistration { get; set; }
        public string EndStudentRegistration { get; set; }
        public string StartTrainingReport { get; set; }
        public string EndTrainingReport { get; set; }
    }
}
