// const { execFile } = require("child_process");

// ================ EDUCATION TAB BUTTONS ROTATION ON CLICK ================= // 
$("#lpc-more-btn").click(function() {
    $("#lpc-more-btn").toggleClass('flip'); //180 rotation
});
$("#ghs-more-btn").click(function() {
    $("#ghs-more-btn").toggleClass('flip'); //180 rotation
});
$("#mor-more-btn").click(function() {
    $("#mor-more-btn").toggleClass('flip'); //180 rotation
});
$("#bu-more-btn").click(function() {
    $("#bu-more-btn").toggleClass('flip'); //180 rotation
});


// ================ JS FOR NAV-BAR & SIDE_BAR & ACTIVITIES_BAR & PROJECTS MENU================= // 
function responsiveNavBar(val) {
    var divs = ["about", "history", "education", "knowledge", "projects"];
    for(var i = 0; i < divs.length; i++) {
        document.getElementById(divs[i] + "_div").style.display = "none";
    }
    document.getElementById(val).style.display = "block";
    if(screen.width < 481) {
        var checker = val.substring(0,val.length-4);
        var nbt = document.getElementById("navbar-text"); //nbt = Nav Bar Text
        if(checker == "about") nbt.innerHTML = "Shahaf Dan";
        else if(checker == "history") nbt.innerHTML = "Experience";
        else if(checker == "education") nbt.innerHTML = "Education";
        else if(checker == "knowledge") nbt.innerHTML = "Skills";
        else if(checker == "projects") nbt.innerHTML = "Projects";
    }
}

function showAProject(x) {
    for(var i = 1; i < 6; i++){
        document.getElementById("projects-div-"+i).style.display = "none";
        document.getElementById("projects-btn-"+i).className = "projects-btn inline";
    }
    document.getElementById("projects-div-"+x).style.display = "block";
    document.getElementById("projects-btn-"+x).className = "projects-btn-clicked inline";

}
// ================ JS FOR PHOTOS ================= //
var picPaths = ['shahaf-pics/AC.JPG', 'shahaf-pics/AA.JPG', 'shahaf-pics/AN.JPG', 'shahaf-pics/AB.JPG', 'shahaf-pics/AD.JPG'];            

// ================ JS FOR CLASSES ================= //
class Course
{
    constructor(subject, number, name, grade, term, year, units)
    {
        this.units = units;
        this.term = term;
        this.year = year;
        this.id = subject + " :" + number;
        this.name = name;
        this.grade = grade;
        this.academic = year + " | " + term;
    }
}

// define courses data in javascript classes form:
const course01 = new Course('Computer Science','20','Advanced Programming with Data Structures','A','Fall','2019C', 4);
const course02 = new Course('Computer Science','21','Assembly Programming and Computer Architecture','B','Fall','2019C', 4);
const course03 = new Course('Computer Science','47','Capstone Project','A','Spring','2020A', 3);
const course04 = new Course('Computer Science','1','Computing Fundamentals I','B','Spring','2020A', 4);
const course05 = new Course('Computer Science','2','Computing Fundamentals II','A','Fall','2018C', 4);
const course06 = new Course('English','1A','Critical Reading and Composition','A','Summer','2018B', 3);
const course07 = new Course('English','7','Critical Thinking and Wirintg Literature','A','Fall','2018C', 3);
const course08 = new Course('Computer Science','45','Database Programming','A','Spring','2020A', 4);
const course09 = new Course('Computer Science','17','Discrete Mathematical Structures','A','Fall','2019C', 4);
const course10 = new Course('Physics','1C','Electricity and Magnetism','A','Spring','2019A', 5);
const course11 = new Course('Mathematics','7','Elementary Linear Algebra','B','Spring','2019A', 3.5);
const course12 = new Course('Work Experience','94','Internship Work Experience','A','Spring','2019A', 0.5);
const course13 = new Course('Political Science','7','Introduction to American Government','A','Summer','2019B', 4);
const course14 = new Course('Psychology','1','introduction to General Psychology','A','Fall','2019C', 3);
const course15 = new Course('Health','1A','Introduction to Personal Health','A','Summer','2019B', 3);
const course16 = new Course('Physics','1D','Introduction to Quantum Mechanics','B','Spring','2020A', 3);
const course17 = new Course('Computer Science','19A','Java Programming and Development','A','Summer','2019B', 4);
const course18 = new Course('Computer Science','41','Linux Programming and Certification','A','Spring','2020A', 3);
const course19 = new Course('Mathematics','3','Multivariable Calculus','A','Fall','2018C', 5);
const course20 = new Course('Physics','1B','Optics and Thermodynamics','A','Fall','2018C', 5);
const course21 = new Course('Mathematics','5','Differental Equations','A','Spring','2020A', 3.5);
const course22 = new Course('Philosophy','3','Philosophy of Arts and Aesthetics','A','Spring','2019A', 3);
const course23 = new Course('Computer Science','43','Professional Communications','A','Fall','2019C', 3);
const course24 = new Course('Kinesiology','DIV','Spring Board Diving','A','Fall','2018C', 1);
const course25 = new Course('Kinesiology','50','Swim and Dive Team','A','Spring','2019A', 3);
const course26 = new Course('Kinesiology','SW1','Introduction to Swimming','A','Fall','2018C', 1);

var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course25, course26];
// ============== END OF JSON CLASSES =================//


