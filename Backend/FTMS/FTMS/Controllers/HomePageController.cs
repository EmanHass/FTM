using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FTMS.Controllers
{

    public class HomePageController : BaseController
    {
        IHomePageRepository _homePageRepository;
        public HomePageController(IHomePageRepository homePageRepository)
        {
            _homePageRepository = homePageRepository;   
            
        }

        [HttpGet]
        public async Task<IActionResult> TraningData()
        {
            return Ok(await _homePageRepository.GetAllData());
        }
    }
}
