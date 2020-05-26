var found = true;


// ================ JSON FOR CLASSES ================= //
class Course
{
    constructor(subject, number, name, grade, term, year)
    {
        this.id = subject + " [ " + number + " ]";
        this.name = name;
        this.grade = grade;
        this.academic = term + " " + year;
    }
}

// define courses data in javascript classes form:
const course01 = new Course('Computer Science','20','Advanced Programming with Data Structures','A','Fall','2019');
const course02 = new Course('Computer Science','21','Assembly Programming and Computer Architecture','B','Fall','2019');
const course03 = new Course('Computer Science','47','Capstone Project','A','Spring','2020');
const course04 = new Course('Computer Science','1','Computing Fundamentals I','B','Spring','2020');
const course05 = new Course('Computer Science','2','Computing Fundamentals II','A','Fall','2018');
const course06 = new Course('English','1A','Critical Reading and Composition','A','Summer','2018');
const course07 = new Course('English','7','Critical Thinking and Wirintg Literature','A','Fall','2018');
const course08 = new Course('Computer Science','45','Database Programming','A','Spring','2020');
const course09 = new Course('Computer Science','17','Discrete Mathematical Structures','A','Fall','2018');
const course10 = new Course('Physics','1C','Electricity and Magnetism','A','Spring','2019');
const course11 = new Course('Mathematics','7','Elementary Linear Algebra','B','Spring','2019');
const course12 = new Course('Work Experience','94','Internship Work Experience','A','Spring','2019');
const course13 = new Course('Political Science','7','Introduction to American Government','A','Summer','2019');
const course14 = new Course('Psychology','1','introduction to General Psychology','A','Fall','2019');
const course15 = new Course('Health','1A','Introduction to Personal Health','A','Summer','2019');
const course16 = new Course('Physics','1D','Introduction to Quantum Mechanics','A','Spring','2020');
const course17 = new Course('Computer Science','19A','Java Programming and Development','A','Summer','2019');
const course18 = new Course('Computer Science','41','Linux Programming and Certification','A','Spring','2020');
const course19 = new Course('Mathematics','3','Multivariable Calculus','A','Fall','2018');
const course20 = new Course('Physics','1B','Optics and Thermodynamics','A','Fall','2018');
const course21 = new Course('Mathematics','5','Differental Equations','A','Spring','2020');
const course22 = new Course('Philosophy','3','Philosophy of Arts and Aesthetics','A','Spring','2019');
const course23 = new Course('Computer Science','43','Professional Communications','A','Fall','2019');
const course24 = new Course('Kinesiology','DIV','Spring Board Diving','A','Fall','2018');
const course25 = new Course('Kinesiology','50','Swim and Dive Team','A','Spring','2019');
const course26 = new Course('Kinesiology','SW1','Introduction to Swimming','A','Fall','2018');

var courses = [course01, course02, course03, course04, course05, course06, course07, course08, course09, course10, course11, course12, course13, course14, course15, course16, course17, course18, course19, course20, course21, course22, course23, course24, course24, course25];
// ============== END OF JSON CLASSES =================//

function coursesAlphabetically()
{
    // ---------- preparations: ---------------
    var thead = document.getElementById("classesTableHead");
    var tbody = document.getElementById("classesTableBody");
    thead.deleteRow(0);
    for(var z = 0; z < 0; z++)
    {
        tbody.deleteRow(z);
    }

    console.log("called");


    // ---------- sorting: ---------------
    var coursesCopy = courses;
    var coursesAlphabetically = new Array(coursesCopy.length);
    for (var x = 0; x < coursesAlphabetically.length; x++)
    {
        var counter = 0;
        var biggerAlphaBet = coursesCopy[counter];
        while(biggerAlphaBet == null)
        {
            counter++;
            biggerAlphaBet = coursesCopy[counter];
        }
        for(var i = counter; i < courses.length - 1; i++)
        {
            if(coursesCopy[i] < biggerAlphaBet && coursesCopy[i] != null)
            {
                var index = i;
                biggerAlphaBet = coursesCopy[i];
            }
        }
        coursesAlphabetically[x] = biggerAlphaBet;
        console.log(coursesCopy[index]);
        delete coursesCopy[index];
        console.log(coursesCopy[index]);

    }
    console.log("sorted");


    // ---------- populating: ---------------
    var row = thead.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "Name";
    var cell = row.insertCell(1);
    cell.innerHTML = "Subject";
    var cell = row.insertCell(2);
    cell.innerHTML = "Grade";
    var cell = row.insertCell(3);
    cell.innerHTML = "Academic Term";
    console.log("thead");
    for(var i = 0; i < coursesAlphabetically.length; i++)
    {
        var row = tbody.insertRow(0);    
        var cell = row.insertCell(0);
        cell.innerHTML = coursesAlphabetically[i].name;
        var cell = row.insertCell(1);
        cell.innerHTML = coursesAlphabetically[i].id;
        var cell = row.insertCell(2);
        cell.innerHTML = coursesAlphabetically[i].grade;
        var cell = row.insertCell(3);
        cell.innerHTML = coursesAlphabetically[i].academic;
    }
    console.log("tbody");

    return;
}

function classesBySubject()
{

    return;
}

function coursesByGrade()
{

    return;
}

function coursesChronologically()
{

    return;
}




/// ----------------- COURSES AND CLASSES ORDERING FUNCTIONS -----------------------
function orderBySubject()
{
    document.getElementById("classBySubject").style.border = "1px solid #00cc00";
    document.getElementById("classByName").style.border = "1px solid white";
    document.getElementById("classByGrade").style.border = "1px solid white";
    //---------------------------------------------------------------------//

}
function orderByName()
{
    document.getElementById("classByName").style.border = "1px solid #00cc00";
    document.getElementById("classByGrade").style.border = "1px solid white";
    document.getElementById("classBySubject").style.border = "1px solid white";
    //---------------------------------------------------------------------//

}
function orderByGrade()
{
    document.getElementById("classByGrade").style.border = "1px solid #00cc00";
    document.getElementById("classByName").style.border = "1px solid white";
    document.getElementById("classBySubject").style.border = "1px solid white";
    //---------------------------------------------------------------------//
}