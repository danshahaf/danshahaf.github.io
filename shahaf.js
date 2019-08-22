var f18c = ["Multivariable Calculues", "Thermodynamics and Optical Physics", "English 7", "Computing Fundamentals II", "Swimming", "Diving"];
var f18g = ['A', 'B', 'A','A', 'A', 'A'];

var su18c = ["English 1"];
var su18g = ['A'];

var sp19c = ["C++ Data Structures", "Electricity and Magnetism Physics", "Philosophy of Ethics", "Dive Team Practices Class", "Internship Experience", "Linear Algebda"];
var sp19g = ['A', 'B', 'A', 'A', 'A', 'B'];

var su19c = ["Intro to American Government - Political Science", ""]
var su19g = ['A', 'A', 'A'];

function sortAlphabetically()
{
    var allClasses = su18c.concat(f18c, sp19c, su19c);
    allClasses.sort();
    for(var i = 0; i < allClasses.length; i++)
    {
        var p = document.createElement("p");
        var text = document.createTextNode(allClasses[i]);
        p.appendChild(text);
        document.getElementById("classInfo").appendChild(p);
    }
}
function sortByGrade()
{

}