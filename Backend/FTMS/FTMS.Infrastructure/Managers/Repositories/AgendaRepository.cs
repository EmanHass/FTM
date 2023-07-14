using AutoMapper;
using FTMS.Core.DTOS.TrainingAgenda;
using FTMS.Data.DataLayer;
using FTMS.Data.Model;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class AgendaRepository : IAgendaRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        public AgendaRepository(FTMSDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

        }

        //public async Task<List<TrainingAgendaDto>> GetAgenda()
        //{
        //    var agenda = await _context.TrainingAgendas
        //        .OrderByDescending(a => a.CreateAt)
        //        .ToListAsync();

        //    return _mapper.Map<List<TrainingAgendaDto>>(agenda);
        //}
        public async Task<List<TrainingAgendaDto>> GetAgenda()
        {
            var agenda = await _context.TrainingAgendas
                .OrderByDescending(a => a.CreateAt)
                .ToListAsync();

            var agendaDtoList = new List<TrainingAgendaDto>();

            foreach (var item in agenda)
            {
                var agendaDto = _mapper.Map<TrainingAgendaDto>(item);

                // Format dates to "MM-dd-yyyy"
                agendaDto.StartTraining = item.StartTraining.ToString("MM-dd-yyyy");
                agendaDto.EndTraining = item.EndTraining.ToString("MM-dd-yyyy");
                agendaDto.StartStudentRegistration = item.StartStudentRegistration.ToString("MM-dd-yyyy");
                agendaDto.EndStudentRegistration = item.EndStudentRegistration.ToString("MM-dd-yyyy");
                agendaDto.StartTrainingReport = item.StartTrainingReport.ToString("MM-dd-yyyy");
                agendaDto.EndTrainingReport = item.EndTrainingReport.ToString("MM-dd-yyyy");

                agendaDtoList.Add(agendaDto);
            }

            return agendaDtoList;
        }



        public async Task<TrainingAgenda> Add(CreateTrainingAgendaDto createTrainingAgendaDto)
        {

            var agenda = _mapper.Map<TrainingAgenda>(createTrainingAgendaDto);

            await _context.TrainingAgendas.AddAsync(agenda);
            await _context.SaveChangesAsync();
            return agenda;
        }

        public async Task<TrainingAgenda> Update(UpdateTrainingAgendaDto updateTrainingAgendaDto)
        {
            var agenda = await _context.TrainingAgendas.FindAsync(updateTrainingAgendaDto.Id);
            _mapper.Map(updateTrainingAgendaDto, agenda);

            await _context.SaveChangesAsync();
            return agenda;

        }

        public async Task<bool> Delete(int id)
        {
            var agenda = await _context.TrainingAgendas.FindAsync(id);
            if (agenda == null)
                return false;
            else
            {
                _context.TrainingAgendas.Remove(agenda);
                await _context.SaveChangesAsync();
                return true;
            }
        }

    }
}
