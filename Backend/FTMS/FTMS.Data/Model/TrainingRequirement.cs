using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Data.Model
{
    public class TrainingRequirement:Training
    {
        public bool IsActive { get; set; }
    }
}
