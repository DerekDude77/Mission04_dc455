$("#btnSend").click(function () {
    /*Here I declare all my variables and set them equal to the user inputs*/
    var assignments = $("#assignments").val() * 0.5;
    var group = $("#group").val() * 0.1;
    var quizzes = $("#quizzes").val() * 0.1;
    var midterm = $("#midterm").val() * 0.1;
    var final = $("#final").val() * 0.1;
    var intex = $("#intex").val() * 0.1;

    /*Here I set grade equal to the adjusted values of the inputs*/
    var grade = assignments + group + quizzes + midterm + final + intex;

   /* Here I use an if statement to determine the letter grade based off of the grade percentage*/
    if (grade >= 94) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: A");
    } else if (grade >= 90) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: A-");
    } else if (grade >= 87) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: B+");
    } else if (grade >= 84) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: B");
    } else if (grade >= 80) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: B-");
    } else if (grade >= 77) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: C+");
    } else if (grade >= 74) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: C");
    } else if (grade >= 70) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: C-");
    } else if (grade >= 67) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: D+");
    } else if (grade >= 64) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: D");
    } else if (grade >= 60) {
        $("#finalGrade").text("Final Percentage: " + grade + " Final Grade: D-");
    } else {
        $("#finalGrade").text("Final Percentage: " + grade + " E");
    }
})