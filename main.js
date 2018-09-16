var panelArray; 
var sideArticleCont;
var topic;

window.onload = onLoad;


function onLoad(){
    panelArray = document.getElementsByClassName("panel");
    sideArticleCont = document.getElementById("side-article-cont");
    randomizeColor();
    setEventListeners();
}

function setEventListeners(){
    //Event listeners for panels. When clicked, will open side article
    for (var i=0; i<panelArray.length; i++){
        panelArray[i].addEventListener("click", openSideArticle);
    }
    //Event listener for side article. When clicked, will close side article
    sideArticleCont.addEventListener("click", closeSideArticle);
}

//Randomize colors of the panels
function randomizeColor(){
    var colorArray=["#e6b8b8", "#62e6bc", "#81e642", "#7281e6", "#e64d33"];
    var colorArrayIndex = 0;
    var prevColorIndex = 0;
    
    for (var i=0; i<panelArray.length; i++){
        //if previous panel has the same color, choose another color for this panel
        while(colorArrayIndex == prevColorIndex){
            colorArrayIndex = randomInt(colorArray.length);
        }
        prevColorIndex = colorArrayIndex;
        panelArray[i].style.backgroundColor = colorArray[colorArrayIndex];
    }
}

//helper function for randomizeColor()
function randomInt(max){
    var num = Math.floor(Math.random() * Math.floor(max));
    return num;
}

function openSideArticle(e){
    //slide out side article
    document.getElementById("side-article-cont").style.width = "90%";
    //populate the article with corresponding info
    topic = getArticleTopic(e);
    populateArticle(topic);

}

function closeSideArticle(){
    document.getElementById("side-article-cont").style.width = "0";
}

function getArticleTopic(e){
    var topic;
    if (e.target.className === "panel"){
        topic = e.target.getElementsByClassName("panel-header")[0].innerHTML;
    }else{
        topic = e.target.closest(".panel").getElementsByClassName("panel-header")[0].innerHTML;
    }
    console.log(topic);
    return topic;
}

function populateArticle(t){
    document.querySelector("#article-header").innerHTML = t;
}

