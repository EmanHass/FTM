using FTMS.Core.DTOS.TrainingCompany;
using FTMS.Core.DTOS.TrainingRequirement;
using FTMS.Infrastructure.Managers.Interfaces;
using FTMS.Infrastructure.Managers.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FTMS.Areas.Supervisor.Controllers
{
   
    public class CompaniesController : BaseController
    {

        private readonly ITrainingCompanyRepository _trainingCompanyRepository;

        public CompaniesController(ITrainingCompanyRepository trainingCompanyRepository)
        {
            _trainingCompanyRepository = trainingCompanyRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetTrainingCompany()
        {
            return Ok(await _trainingCompanyRepository.GetTrainingCompany());
        }

        [HttpPost]
        public async Task<IActionResult> AddCompany([FromForm] CreateTrainingCompanyDto dto)
        {
            return Ok(await _trainingCompanyRepository.Add(dto));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequirement([FromForm] UpdateTrainingCompanyDto dto)
        {
            return Ok(await _trainingCompanyRepository.Update(dto));

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _trainingCompanyRepository.Delete(id));
        }


    }
}
