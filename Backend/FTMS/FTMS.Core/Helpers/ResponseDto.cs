using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Core.Helpers
{
    public class Meta
    {
        public int page { get; set; }
        public int pages { get; set; }
        public int perpage { get; set; }
        public int total { get; set; }
        public string sort { get; set; }
        public string field { get; set; }
    }

    public class ResponseDto
    {
        public Meta meta { get; set; }
        public object data { get; set; }
    }
}
