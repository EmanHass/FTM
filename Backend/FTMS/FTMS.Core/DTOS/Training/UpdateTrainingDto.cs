using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Core.DTOS.Training
{
    public class UpdateTrainingDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;

        public string Image { get; set; }
        public IFormFile NewImage { get; set; }
    }
}
