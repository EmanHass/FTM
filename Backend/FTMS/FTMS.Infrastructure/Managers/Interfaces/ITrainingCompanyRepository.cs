using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Data.Model;
using FTMS.Infrastructure.Extensions;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface ITrainingCompanyRepository
    {
        Task<TrainingCompany> Add(CreateTrainingCompanyDto companyDto);
        Task<bool> Delete(int id);
        Task<PaginatedList<TrainingCompany>> GetPaginatedDataAsync(int pageNumber, int pageSize);
        Task<List<TrainingCompanyDto>> GetTrainingCompany();
        Task<TrainingCompany> Update(UpdateTrainingCompanyDto updateTrainingCompany);
    }
}