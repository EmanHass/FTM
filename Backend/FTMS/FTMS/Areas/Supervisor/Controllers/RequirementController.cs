using FTMS.Core.DTOS.Training;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Infrastructure.Managers.Interfaces;
using FTMS.Infrastructure.Managers.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FTMS.Areas.Supervisor.Controllers
{

    public class RequirementController : BaseController
    {
        private readonly ITrainingRequirementRepository _trainingRequirementRepository;
        public RequirementController(ITrainingRequirementRepository trainingRequirementRepository)
        {
            _trainingRequirementRepository = trainingRequirementRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetTrainingRequirement()
        {
            return Ok(await _trainingRequirementRepository.GetTrainingRequirement());
        }

        [HttpPost]
        public async Task<IActionResult> AddRequirement([FromForm]CreateTrainingRequirementDto createTrainingRequirement)
        {
            return Ok(await _trainingRequirementRepository.Add(createTrainingRequirement));
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequirement([FromForm] UpdateTrainingRequirementDto updateTrainingRequirement)
        {
            return Ok(await _trainingRequirementRepository.Update(updateTrainingRequirement));

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _trainingRequirementRepository.Delete(id));
        }

    }
}
