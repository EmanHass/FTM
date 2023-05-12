using FTMS.Core.DTOS.Training;
using FTMS.Data.Model;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface ITrainingRepository
    {
        Task<FieldTraining> Add(CreateTrainingDto trainingDto);
        Task<bool> Delete(int id);
        Task<List<TrainingDto>> GetTraining();
        Task<FieldTraining> Update(UpdateTrainingDto updateTraining);
    }
}