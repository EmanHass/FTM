using FTMS.Core.DTOS.TrainingAgenda;
using FTMS.Data.Model;

namespace FTMS.Infrastructure.Managers.Interfaces
{
    public interface IAgendaRepository
    {
        Task<TrainingAgenda> Add(CreateTrainingAgendaDto createTrainingAgendaDto);
        Task<bool> Delete(int id);
        Task<List<TrainingAgendaDto>> GetAgenda();
        Task<TrainingAgenda> Update(UpdateTrainingAgendaDto updateTrainingAgendaDto);
    }
}