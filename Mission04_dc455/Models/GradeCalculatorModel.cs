using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_dc455.Models
{
    public class GradeCalculatorModel
    {

        [Required]
        public float assignments{get; set;}
        public float group { get; set; }
        public float quizzes { get; set; }
        public float midterm { get; set; }
        public float final { get; set; }
        public float intex { get; set; }

    }
}
