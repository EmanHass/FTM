using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Core.DTOS.TrainingImportance
{
    public class CreateTrainingImportanceDto
    {
        // public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;

        public IFormFile Image { get; set; }
    }
}
