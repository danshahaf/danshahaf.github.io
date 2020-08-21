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
function responsiveNavBar(val, navLinker) {
    
    //change div seens on screen
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
    else  {
        var checker = val.substring(0,val.length-4);
        var nbt = document.getElementById("navbar-text"); //nbt = Nav Bar Text
        if(checker == "about") nbt.innerHTML = "Shahaf Dan";
        else if(checker == "history") nbt.innerHTML = "Jobs & Work Experience";
        else if(checker == "education") nbt.innerHTML = "Schools & Education";
        else if(checker == "knowledge") nbt.innerHTML = "Technical Knowledge & Skills";
        else if(checker == "projects") nbt.innerHTML = "Personal Projects";
    }
}

function showAProject(x) {
    for(var i = 1; i < 8; i++){
        document.getElementById("projects-div-"+i).style.display = "none";
        document.getElementById("projects-btn-"+i).className = "projects-linker";
    }
    document.getElementById("projects-div-"+x).style.display = "block";
    document.getElementById("projects-btn-"+x).className = "projects-linker-clicked";

}
// ================ JS FOR CLASSES ================= //



