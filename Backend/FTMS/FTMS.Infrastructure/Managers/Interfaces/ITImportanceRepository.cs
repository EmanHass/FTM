using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.Helpers;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface ITImportanceRepository
    {
        Task<TrainingImportance> AddTImportance(CreateTrainingImportanceDto importanceDto);
        Task<PaginatedList<TrainingImportance>> GetPaginatedDataAsync(int pageNumber, int pageSize);
        Task<List<TrainingImportance>> GetAllAPI(PaginationDTO paginationDTO);
        Task<bool> Delete(int id);
        Task<List<TrainingImportanceDto>> GetTImportance();
         Task<TrainingImportance> Update(UpdateTrainingImportanceDto updateTraining);
    }
}