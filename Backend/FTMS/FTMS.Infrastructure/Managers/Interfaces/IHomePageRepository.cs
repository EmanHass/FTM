using FTMS.Core.DTOS.DataHomePage;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface IHomePageRepository
    {
        Task<AllDataDto> GetAllData();
    }
}