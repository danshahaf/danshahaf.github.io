// ================ JS FOR NAV-BAR SCROLLING ================= // 
//Make Navigation Bar Responsive
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop':$target.offset().top
        }, 1000, 'swing');
        
    });
});

function responsiveNavBar(val) {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") x.className += " responsive";
    else x.className = "nav-bar";
    var divs = ["about", "history", "education", "knowledge", "contact"];
    for(var i = 0; i < divs.length; i++) {
        document.getElementById(divs[i] + "_div").style.padding = "0.25% 0px 0.75% 0rem";
    }
    if(val != "contact_div") document.getElementById(val).style.padding = "6% 0px 0.75% 0rem";

}


// ================ JS FOR PHOTOS ================= //
var picPaths = ['shahaf-pics/AL.JPG', 'shahaf-pics/AQ.JPG', 'shahaf-pics/AC.JPG', 'shahaf-pics/AY.JPG', 'shahaf-pics/AE.JPG', 'shahaf-pics/AH.JPG', 'shahaf-pics/AG.JPG', 'shahaf-pics/AF.JPG', 'shahaf-pics/AI.JPG', 'shahaf-pics/AU.JPG', 'shahaf-pics/AO.JPG', 'shahaf-pics/AA.JPG', 'shahaf-pics/AM.JPG', 'shahaf-pics/AN.JPG', 'shahaf-pics/AK.JPG', 'shahaf-pics/AP.JPG', 'shahaf-pics/AB.JPG', 'shahaf-pics/AR.JPG', 'shahaf-pics/AS.JPG', 'shahaf-pics/AT.JPG', 'shahaf-pics/AJ.JPG', 'shahaf-pics/AV.JPG', 'shahaf-pics/AW.JPG', 'shahaf-pics/AX.JPG', 'shahaf-pics/AD.JPG'];            
var curPic = -1;
var img0 = new Array();

for(var i = 0; i < picPaths.length; i++) {
    img0[i] = new Image();
    img0[i].src = picPaths[i];
}

function swapImage() {
    curPic = (++curPic > picPaths.length - 1)? 0: curPic;
    imgCont.src = img0[curPic].src;
    setTimeout(swapImage, 3500);
}

window.onload = function(){
    imgCont = document.getElementById('imgBanner');
    swapImage();
}

// ================ JS FOR CLASSES ================= //
class Course
{
    constructor(subject, number, name, grade, term, year, units)
    {
        this.units = units;
        this.term = term;
        this.year = year;
        this.id = subject + " [ " + number + " ]";
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

var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
// ============== END OF JSON CLASSES =================//

// ================ POPULATE ORIGINAL TABLE ================= //
var thead = document.getElementById("classesTableHead");
var tbody = document.getElementById("classesTableBody");
// ---------- populating: ---------------
var row = thead.insertRow(0);    
var cell = row.insertCell(0);
cell.innerHTML = "<strong>Name</strong>";
var cell = row.insertCell(1);
cell.innerHTML = "<strong>Subject</strong>";
var cell = row.insertCell(2);
cell.innerHTML = "<strong>Grade</strong>";
var cell = row.insertCell(3);
cell.innerHTML = "<strong>Academic Term</strong>";
for(var i = courses.length - 1; i > -1; i--)
{
    var row = tbody.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = courses[i].name;
    var cell = row.insertCell(1);
    cell.innerHTML = courses[i].id;
    var cell = row.insertCell(2);
    cell.innerHTML = "<strong>" + courses[i].grade + "</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = courses[i].academic.substring(0,4) + courses[i].academic.substring(5, courses[i].academic.length);
}

// ============= FUCTIONS =============:::
function coursesAlphabetically()
{
    // ---------- preparations: ---------------
    var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
    cleanPrevTable();
    // ---------- sorting: ---------------
    var coursesAlphabetically = new Array(courses.length);
    for (var x = 0; x < coursesAlphabetically.length; x++)
    {
        var counter = 0;
        var index = counter;
        while(courses[counter] == null) {counter++}
        index = counter;
        for(var i = counter; i < courses[i].length; i++)
        {
            if(courses[i] != null)
            {
                if(courses[i].name > courses[index].name) index = i;
            }
        }
        coursesAlphabetically[x] = courses[index];
        delete courses[index];
    }
    // ---------- populating: ---------------
    var row = thead.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Name</strong>";
    var cell = row.insertCell(1);
    cell.innerHTML = "<strong>Subject</strong>";
    var cell = row.insertCell(2);
    cell.innerHTML = "<strong>Grade</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Academic Term</strong>";
    for(var i = 0; i < coursesAlphabetically.length; i++)
    {
        var row = tbody.insertRow(i);    
        var cell = row.insertCell(0);
        cell.innerHTML = coursesAlphabetically[i].name;
        var cell = row.insertCell(1);
        cell.innerHTML = coursesAlphabetically[i].id;
        var cell = row.insertCell(2);
        cell.innerHTML = "<strong>" + coursesAlphabetically[i].grade + "</strong>";
        var cell = row.insertCell(3);
        cell.innerHTML = coursesAlphabetically[i].academic.substring(0,4) + coursesAlphabetically[i].academic.substring(5, coursesAlphabetically[i].academic.length);
    }

    return;
}

function coursesBySubject()
{
    // ---------- preparations: ---------------
    var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
    cleanPrevTable();
    // ---------- sorting: ---------------
    var subjectiveCourses = new Array(courses.length);
    for (var x = 0; x < subjectiveCourses.length; x++)
    {
        var counter = 0;
        var index = counter;
        while(courses[counter] == null) {counter++}
        index = counter;
        for(var i = counter; i < courses.length; i++)
        {
            if(courses[i] != null)
            {
                if(courses[i].id < courses[index].id) index = i;
            }
        }
        subjectiveCourses[x] = courses[index];
        delete courses[index];
    }
    subjectiveCourses.reverse();
    // ---------- populating: ---------------
    var row = thead.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Subject</strong>";
    var cell = row.insertCell(1);
    cell.innerHTML = "<strong>Name</strong>";
    var cell = row.insertCell(2);
    cell.innerHTML = "<strong>Grade</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Academic Term</strong>";
    for(var i = 0; i < subjectiveCourses.length; i++)
    {
        var row = tbody.insertRow(0);    
        var cell = row.insertCell(0);
        cell.innerHTML = subjectiveCourses[i].id;
        var cell = row.insertCell(1);
        cell.innerHTML = subjectiveCourses[i].name;
        var cell = row.insertCell(2);
        cell.innerHTML = "<strong>" + subjectiveCourses[i].grade + "</strong>";
        var cell = row.insertCell(3);
        cell.innerHTML = subjectiveCourses[i].academic.substring(0,4) + subjectiveCourses[i].academic.substring(5, subjectiveCourses[i].academic.length);
    }
    return;
}

function coursesByGrade()
{
     // ---------- preparations: ---------------
    var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
    cleanPrevTable();
    // ---------- sorting: ---------------
    var courses = courses;
    var coursesg = new Array(courses.length);
    for (var x = 0; x < coursesg.length; x++)
    {
        var counter = 0;
        var index = counter;
        while(courses[counter] == null) {counter++;}
        index = counter;
        for(var i = counter; i < courses.length; i++)
        {
            if(courses[i] != null)
            {
                if(courses[i].grade > courses[index].grade) index = i;
            }
        }
        coursesg[x] = courses[index];
        delete courses[index];
    }
    // ---------- populating: ---------------
    var row = thead.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Grade</strong>";
    var cell = row.insertCell(1);
    cell.innerHTML = "<strong>Name</strong>";
    var cell = row.insertCell(2);
    cell.innerHTML = "<strong>Subject</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Academic Term</strong>";
    for(var i = 0; i < coursesg.length; i++)
    {
        var row = tbody.insertRow(0);    
        var cell = row.insertCell(0);
        cell.innerHTML = "<strong>" + coursesg[i].grade + "</strong>";
        var cell = row.insertCell(1);
        cell.innerHTML = coursesg[i].name;
        var cell = row.insertCell(2);
        cell.innerHTML = coursesg[i].id;
        var cell = row.insertCell(3);
        cell.innerHTML = coursesg[i].academic.substring(0,4) + coursesg[i].academic.substring(5, coursesg[i].academic.length);
    }
    return;
}

function coursesChronoligically()
{
    // ---------- preparations: ---------------
    var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
    cleanPrevTable();
    // ---------- sorting: ---------------
    var coursesChron = new Array(courses.length);
    for (var x = 0; x < coursesChron.length; x++)
    {
        var counter = 0;
        var index = counter;
        while(courses[counter] == null) {counter++}
        index = counter;
        for(var i = 0; i < courses.length; i++) 
        {
            if(courses[i] != null)
            {
                if(courses[i].academic > courses[index].academic) index = i;
            }
        }
        coursesChron[x] = courses[index];
        delete courses[index];
    }
    // ---------- populating: ---------------
    var row = thead.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<strong>Academic Term</strong>";
    var cell = row.insertCell(1);
    cell.innerHTML = "<strong>Name</strong>";
    var cell = row.insertCell(2);
    cell.innerHTML = "<strong>Subject</strong>";
    var cell = row.insertCell(3);
    cell.innerHTML = "<strong>Grade </strong>";
    for(var i = 0; i < coursesChron.length; i++)
    {
        var row = tbody.insertRow(i);    
        var cell = row.insertCell(0);
        cell.innerHTML = coursesChron[i].academic.substring(0,4) + coursesChron[i].academic.substring(5, coursesChron[i].academic.length);
        cell = row.insertCell(1);
        cell.innerHTML = coursesChron[i].name;
        cell = row.insertCell(2);
        cell.innerHTML = coursesChron[i].id;
        cell = row.insertCell(3);
        cell.innerHTML = "<strong>" + coursesChron[i].grade + "</strong>";
    }
    return;
}

function cleanPrevTable()
{
    thead.deleteRow(0);
    for(var z = courses.length - 1; z > -1; z--) {tbody.deleteRow(z);}
    return;
}







