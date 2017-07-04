function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");
   
    for(var i = 0, len = navA.length; i < len; i++){
        navA[i].addEventListener("focus",function(event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if(innerUl) innerUl.style.display = "block";
        }, true);
    }
      
    for(var i = 0, len = navInner.length; i < len; i++){
        if(navInner[i].parentElement.nextElementSibling === null){
            navInner[i].addEventListener("blur",function(event) {
                event.target.parentElement.parentElement.style.display = "none"
            },true);
        }
    }
}

function accessible() {

    $("div#changeContrastButton").click(function () {
        $("body").toggleClass("contrast");  // adding or removing the contrast class to the body
        saveDataToLocalStorate();
    });

    getDataFromLocalStorate(); // running a function responsible to save the body class data to the local storage (which is a memory unit that saves data between pages)
}

// This function run when the page is ready, and it retrieve the data from the local storage and set it as a class to the body
function getDataFromLocalStorate() {
    var bodyClass = localStorage.getItem("bodyClass");
    if (bodyClass) {
        $("body").attr("class", bodyClass);
    }
}

function saveDataToLocalStorate() {
    var bodyClass = $("body").attr("class");
    localStorage.setItem("bodyClass", bodyClass);
}

function myWhy1() {
    document.getElementById("why1").style.display = "block";
    document.getElementById("why2").style.display = "none";
    document.getElementById("usage").style.display = "none";
    document.getElementById("whysoc1").style.color = "#298D9C";
    document.getElementById("whysoc2").style.color = "black";
    document.getElementById("whysoc3").style.color = "black";
    document.getElementById("whysoca1").style.color = "#298D9C";
    document.getElementById("whysoca2").style.color = "black";
    document.getElementById("whysoca3").style.color = "black"
    ;
}
function myWhy2() {
    document.getElementById("why1").style.display = "none";
    document.getElementById("why2").style.display = "block";
    document.getElementById("usage").style.display = "none";
    document.getElementById("whysoc1").style.color = "black";
    document.getElementById("whysoc2").style.color = "#298D9C";
    document.getElementById("whysoc3").style.color = "black";
    document.getElementById("whysoca1").style.color = "black";
    document.getElementById("whysoca2").style.color = "#298D9C";
    document.getElementById("whysoca3").style.color = "black";
}

function myWhy3() {
    document.getElementById("why1").style.display = "none";
    document.getElementById("why2").style.display = "none";
    document.getElementById("usage").style.display = "block";
    document.getElementById("whysoc1").style.color = "black";
    document.getElementById("whysoc2").style.color = "black";
    document.getElementById("whysoc3").style.color = "#298D9C";
    document.getElementById("whysoca1").style.color = "black";
    document.getElementById("whysoca2").style.color = "black";
    document.getElementById("whysoca3").style.color = "#298D9C";
}

function myWhich1() {
    document.getElementById("which1").style.display = "block";
    document.getElementById("which2").style.display = "none";
    document.getElementById("which3").style.display = "none";
    document.getElementById("which4").style.display = "none";
    document.getElementById("fadiv").style.color = "#298D9C";
    document.getElementById("insdiv").style.color = "black";
    document.getElementById("twidiv").style.color = "black";
    document.getElementById("lidiv").style.color = "black";
    document.getElementById("fadiva").style.color = "#298D9C";
    document.getElementById("insdiva").style.color = "black";
    document.getElementById("twidiva").style.color = "black";
    document.getElementById("lidiva").style.color = "black";
}
function myWhich2() {
    document.getElementById("which1").style.display = "none";
    document.getElementById("which2").style.display = "block";
    document.getElementById("which3").style.display = "none";
    document.getElementById("which4").style.display = "none";
    document.getElementById("fadiv").style.color= "black";
    document.getElementById("insdiv").style.color = "#298D9C";
    document.getElementById("twidiv").style.color = "black";
    document.getElementById("lidiv").style.color = "black";
    document.getElementById("fadiva").style.color = "black";
    document.getElementById("insdiva").style.color = "#298D9C";
    document.getElementById("twidiva").style.color = "black";
    document.getElementById("lidiva").style.color = "black";

}
function myWhich3() {
    document.getElementById("which1").style.display = "none";
    document.getElementById("which2").style.display = "none";
    document.getElementById("which3").style.display = "block";
    document.getElementById("which4").style.display = "none";
    document.getElementById("fadiv").style.color = "black";
    document.getElementById("insdiv").style.color = "black";
    document.getElementById("twidiv").style.color = "#298D9C";
    document.getElementById("lidiv").style.color = "black";
    document.getElementById("fadiva").style.color = "black";
    document.getElementById("insdiva").style.color = "black";
    document.getElementById("twidiva").style.color = "#298D9C";
    document.getElementById("lidiva").style.color = "black";
}
function myWhich4() {
    document.getElementById("which1").style.display = "none";
    document.getElementById("which2").style.display = "none";
    document.getElementById("which3").style.display = "none";
    document.getElementById("which4").style.display = "block";
    document.getElementById("fadiv").style.color = "black";
    document.getElementById("insdiv").style.color = "black";
    document.getElementById("twidiv").style.color = "black";
    document.getElementById("lidiv").style.color = "#298D9C";
    document.getElementById("fadiva").style.color = "black";
    document.getElementById("insdiva").style.color = "black";
    document.getElementById("twidiva").style.color = "black";
    document.getElementById("lidiva").style.color = "#298D9C";
}