using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Data.Model
{
    public class BaseEntity
    {
        public int Id { get; set; }
       // public string Name { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreateAt { get; set; }= DateTime.Now;   
        public DateTime UpdateAt { get; set; }


    }
}
