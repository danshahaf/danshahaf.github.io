var f18c = ["Multivariable Calculues", "Thermodynamics and Optical Physics", "English 7", "Computing Fundamentals II", "Swimming", "Diving"];
var f18g = ['A', 'B', 'A','A', 'A', 'A'];
var f18s = ["Math", "Science", "General Education", "Computer Science", "Sports"];

var su18c = ["English 1"];
var su18g = ['A'];
var su18s = ["General Education"];

var sp19c = ["C++ Data Structures", "Electricity and Magnetism Physics", "Philosophy of Ethics", "Dive Team Practices Class", "Internship Experience", "Linear Algebda"];
var sp19g = ['A', 'B', 'A', 'A', 'A', 'B'];
var sp19s = ["Computer Science", "Science", "General Education", "Sports", "Sports", "General Education", "Math"];

var su19c = ["Intro to American Government - Political Science", "Intro to Personal Health", "Object Oriented Programming in Java"]
var su19g = ['A', 'A', 'A'];
var su19s = ["General Education", "General Education", "Computer Science"];


var f19c = ["Assembly Language", "Intro to Psychology", "Dicrete Mathematical Structures", "Professional Communications", "C++ Data Structures"];
var f19g = ["N/A", "N/A", "N/A", "N/A", "N/A"];
var f19s = ["Computer Science", "General Education", "Math", "General Education", "Computer Science"];


var found = true;
var allSubjects = su18s.concat(f18s, sp19s,su19s, f19s);
var distAllSubjects = [];
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
    if(!($('.classInfo').is(':empty'))) //check if the div of classInfo is empry using JQuery
    {
        document.getElementById("classInfo").innerHTML = ""; // clean everything from that div
    }

    

    distAllSubjects.sort(); //sorting the distict list of all subjects alphabetically
}