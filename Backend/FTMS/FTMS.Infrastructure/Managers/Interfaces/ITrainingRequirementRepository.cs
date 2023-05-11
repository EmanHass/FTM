using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface ITrainingRequirementRepository
    {
        Task<TrainingRequirement> Add(CreateTrainingRequirementDto trainingRequirementDto);
        Task<bool> Delete(int id);
        Task<PaginatedList<TrainingRequirement>> GetPaginatedDataAsync(int pageNumber, int pageSize);
        Task<List<TrainingRequirementDto>> GetTrainingRequirement();
        Task<TrainingRequirement> Update(UpdateTrainingRequirementDto updateRequirement);
    }
}