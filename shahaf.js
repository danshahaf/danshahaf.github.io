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

for(var p = 0; p < allSubjects.length; p++)
    {
    found = false;
    for(var j = 0; j < distAllSubjects.length; j++)
    {
        if(distAllSubjects[j] == allSubjects[p])
        {
            found = true;
        }
            
    }
    if(!found)
    {
        distAllSubjects.push(allSubjects[p]);
    }
}

//later use node.js to populate this arrays from a solid and organized database
function sortAlphabetically()
{
    if(!($('.classInfo').is(':empty')))
    {
        document.getElementById("classInfo").innerHTML = ""; // clean everything from that div
    }
    

    var allClasses = su18c.concat(f18c, sp19c, su19c, f19c);
    allClasses.sort();

    for(var i = 0; i < allClasses.length; i++)
    {
        var p = document.createElement("p");
        var text = document.createTextNode(allClasses[i]);
        p.appendChild(text);
        document.getElementById("classInfo").appendChild(p);
    }
}
function orderByGrade()
{
    if(!($('.classInfo').is(':empty')))
    {
        document.getElementById("classInfo").innerHTML = ""; // clean everything from that div
    }
    var allClasses = su18c.concat(f18c, sp19c, su19c, f19c);
    var allGrades = su18g.concat(f18g, sp19g,su19g, f19g);
    for(var j = 0; j < allGrades.length; j++) //check for A grades
    {
        if(allGrades[j] == 'A')
        {
            var p = document.createElement("p");
            var text = document.createTextNode(allClasses[j] + "  -  " + allGrades[j]);
            p.appendChild(text);
            document.getElementById("classInfo").appendChild(p);
        }
    }
    for(var j = 0; j < allGrades.length; j++) //check for B grades
    {
        if(allGrades[j] == 'B')
        {
            var p = document.createElement("p");
            var text = document.createTextNode(allClasses[j] + "  -  " + allGrades[j]);
            p.appendChild(text);
            document.getElementById("classInfo").appendChild(p);
        }
    }
    for(var j = 0; j < allGrades.length; j++) //check for C grades
    {
        if(allGrades[j] == 'C')
        {
            var p = document.createElement("p");
            var text = document.createTextNode(allClasses[j] + "  -  " + allGrades[j]);
            p.appendChild(text);
            document.getElementById("classInfo").appendChild(p);
        }
    }
}

function sortBySubject()
{
    var allClasses = su18c.concat(f18c, sp19c, su19c, f19c);
    var allGrades = su18g.concat(f18g, sp19g,su19g, f19g);
    if(!($('.classInfo').is(':empty'))) //check if the div of classInfo is empry using JQuery
    {
        document.getElementById("classInfo").innerHTML = ""; // clean everything from that div
    }
    for(var j = 0; j < distAllSubjects.length; j++)
    {
        for(var k = 0; k < allClasses.length; k++)
        {
            
        }
    }
    

    distAllSubjects.sort(); //sorting the distict list of all subjects alphabetically
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