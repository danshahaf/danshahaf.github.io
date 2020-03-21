
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