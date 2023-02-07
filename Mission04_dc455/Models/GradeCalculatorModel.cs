using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_dc455.Models
{
    public class GradeCalculatorModel
    {
        // This makes it so that none of the fields can be blank
        [Required]
        //This makes it so that the input has to be a number between 0 and 100
        [Range(0.0, 100.0)]
        public float assignments{get; set;}
        [Range(0.0, 100.0)]
        public float group { get; set; }
        [Range(0.0, 100.0)]
        public float quizzes { get; set; }
        [Range(0.0, 100.0)]
        public float midterm { get; set; }
        [Range(0.0, 100.0)]
        public float final { get; set; }
        [Range(0.0, 100.0)]
        public float intex { get; set; }

    }
}
