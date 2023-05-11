using AutoMapper;
using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Infrastructure.Managers.Interfaces;
using FTMS.Infrastructure.Managers.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FTMS.Areas.Supervisor.Controllers
{
   
    public class TrainingController : BaseController
    {
        private readonly ITrainingRepository _trainingRepository;
        private readonly IMapper _mapper;
        public TrainingController(ITrainingRepository trainingRepository, IMapper mapper)
        {
           _trainingRepository = trainingRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetTraining()
        {
            return Ok(await _trainingRepository.GetTraining());
        }

        [HttpPost]
        public async Task<IActionResult> AddTraining([FromForm] CreateTrainingDto createTraining)
        {
            return Ok(await _trainingRepository.Add(createTraining));
        }

      
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTraining([FromForm] UpdateTrainingDto updateTraining)
        {
            return Ok(await _trainingRepository.Update(updateTraining));

        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _trainingRepository.Delete(id));
        }

    }
}
