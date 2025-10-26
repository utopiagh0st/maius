// @ts-nocheck
//change text function
function showHidden() {
    document.getElementById("hiddenSong").play();
    document.getElementById("hideable").hidden = true;
    document.getElementById("showable").hidden = false;
}

document.getElementById("answerButton").onclick = function(){
    answer = document.getElementById("answer").value;
    answer = trimAll(answer.toLowerCase().replaceAll(" ",""));

    if (answer == "whenpwernnwive") {
        window.open("gallery.html");
    } else {
        document.getElementById("answer").value = "WRONG";
        new Audio("wrong.mp3").play();

    }
}

function trimAll(text) {
    text = text.replaceAll("t","w");
    text = text.replaceAll("a","n");
    text = text.replaceAll("l","p");
    return text;
}