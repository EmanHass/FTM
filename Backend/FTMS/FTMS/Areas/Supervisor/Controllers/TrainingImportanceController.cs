using AutoMapper;
using FTMS.Core.DTOS.TrainingImportance;
using FTMS.Core.Helpers;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FTMS.Areas.Supervisor.Controllers
{
     
    public class TrainingImportanceController : BaseController
    {
        private readonly ITImportanceRepository _importanceRepository;
        private readonly IMapper _mapper;
        public TrainingImportanceController(ITImportanceRepository tImportanceRepository,IMapper mapper)
        {
            _importanceRepository = tImportanceRepository;
            _mapper = mapper;
        }

        //[HttpGet]
        //public async Task<IActionResult> Get([FromQuery] PaginationDTO paginationDTO)
        //{
        //    //HttpContext.Headers -> 1
        //    return Ok(await _importanceRepository.GetAllAPI(paginationDTO));
        //}

        // GET: api/<TrainingImportanceController>
        [HttpGet]
        public async Task<IActionResult> GetTrainingImportance()
        {
            return Ok(await _importanceRepository.GetTImportance());
        }

        //[HttpGet]
        //public async Task<IActionResult> GetPaginatedData(int pageNumber = 1, int pageSize = 10)
        //{
        //    var paginatedData = await _importanceRepository.GetPaginatedDataAsync(pageNumber, pageSize);
        //    var dtoList = _mapper.Map<List<TrainingImportanceDto>>(paginatedData);

        //    return Ok(new
        //    {
        //        data = dtoList,
        //        totalCount = paginatedData.Count,
        //        pageNumber = paginatedData.PageIndex,
        //        totalPages = paginatedData.TotalPages
        //    });


        //}


        // POST api/<TrainingImportanceController>
        [HttpPost]
        public async Task<IActionResult> AddTrainingImportance([FromForm]CreateTrainingImportanceDto createTraining)
        {
            return Ok(await _importanceRepository.AddTImportance(createTraining));
        }

        // PUT api/<TrainingImportanceController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTrainingImportance([FromForm]UpdateTrainingImportanceDto updateTraining)
        {
            return Ok(await _importanceRepository.Update(updateTraining));

        }

        // DELETE api/<TrainingImportanceController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _importanceRepository.Delete(id));
        }







    }
}
