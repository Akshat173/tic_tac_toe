// Getting some HTML elements
let playbox = document.getElementById("cell");
let s1 = document.getElementById("d1");
let s2 = document.getElementById("d2");
let s3 = document.getElementById("d3");
let s4 = document.getElementById("d4");
let s5 = document.getElementById("d5");
let s6 = document.getElementById("d6");
let s7 = document.getElementById("d7");
let s8 = document.getElementById("d8");
let s9 = document.getElementById("d9");

// Alt function to add 'X' and 'O' to indi alternatively
let count_play_alt = 0;
let alt = (a, b) => {
    if (count_play_alt % 2 == 0) {
        count_play_alt++;
        return a
    }
    else {
        count_play_alt++;
        return b
    }
}

// Add score-board
let score_count_x = 0;
let score_count_o = 0;
let addScore = ()=>{
    document.getElementById("x-sc").innerHTML = `'X' - ${score_count_x}`
    document.getElementById("o-sc").innerHTML = `'O' - ${score_count_o}`
}
addScore();

// addAnimation function
let addAnimation = () =>{
    document.getElementById("animation").style.animation = "animation1 2s ease-in-out";
    setTimeout(() => {
        s1.innerHTML = ""
        s2.innerHTML = ""
        s3.innerHTML = ""
        s4.innerHTML = ""
        s5.innerHTML = ""
        s6.innerHTML = ""
        s7.innerHTML = ""
        s8.innerHTML = ""
        s9.innerHTML = ""
        document.getElementById("animation").style = ""
    }, 2000);
}

// Win lose function which also update the score board
let winLose =()=>{
    if(s1.innerHTML != "" && s2.innerHTML != "" && s3.innerHTML != "" && s1.innerHTML == s2.innerHTML && s2.innerHTML == s3.innerHTML){
        if(s1.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s4.innerHTML = ""
        s5.innerHTML = ""
        s6.innerHTML = ""
        s7.innerHTML = ""
        s8.innerHTML = ""
        s9.innerHTML = ""
    }
    if(s4.innerHTML != "" && s5.innerHTML && s6.innerHTML!="" && s4.innerHTML == s5.innerHTML && s5.innerHTML == s6.innerHTML){
        if(s4.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s1.innerHTML = ""
        s2.innerHTML = ""
        s3.innerHTML = ""
        s7.innerHTML = ""
        s8.innerHTML = ""
        s9.innerHTML = ""
    }
    if(s7.innerHTML != "" && s8.innerHTML!="" && s9.innerHTML!="" && s7.innerHTML == s8.innerHTML && s8.innerHTML == s9.innerHTML){
        if(s7.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s1.innerHTML = ""
        s2.innerHTML = ""
        s3.innerHTML = ""
        s4.innerHTML = ""
        s5.innerHTML = ""
        s6.innerHTML = ""
    }
    if(s1.innerHTML != "" && s1.innerHTML == s4.innerHTML && s4.innerHTML == s7.innerHTML){
        if(s1.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s2.innerHTML = ""
        s3.innerHTML = ""
        s5.innerHTML = ""
        s6.innerHTML = ""
        s8.innerHTML = ""
        s9.innerHTML = ""
    }
    if(s2.innerHTML != "" && s2.innerHTML == s5.innerHTML && s5.innerHTML == s8.innerHTML){
        if(s2.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s1.innerHTML = ""
        s3.innerHTML = ""
        s4.innerHTML = ""
        s6.innerHTML = ""
        s7.innerHTML = ""
        s9.innerHTML = ""
    }
    if(s3.innerHTML != "" && s3.innerHTML == s6.innerHTML && s6.innerHTML == s9.innerHTML){
        if(s3.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s1.innerHTML = ""
        s2.innerHTML = ""
        s4.innerHTML = ""
        s5.innerHTML = ""
        s7.innerHTML = ""
        s8.innerHTML = ""
    }
    if(s1.innerHTML != "" && s1.innerHTML == s5.innerHTML && s5.innerHTML == s9.innerHTML){
        if(s1.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s2.innerHTML = ""
        s3.innerHTML = ""
        s4.innerHTML = ""
        s6.innerHTML = ""
        s7.innerHTML = ""
        s8.innerHTML = ""
    }
    if(s3.innerHTML != "" && s3.innerHTML == s5.innerHTML && s5.innerHTML == s7.innerHTML){
        if(s3.innerHTML.slice(28, 29) == "X"){
            score_count_x++
            document.getElementById("animation").innerHTML = "X Wins"
        }
        else{
            score_count_o++
            document.getElementById("animation").innerHTML = "O Wins"
        }
        addAnimation();
        s1.innerHTML = ""
        s2.innerHTML = ""
        s4.innerHTML = ""
        s6.innerHTML = ""
        s8.innerHTML = ""
        s9.innerHTML = ""
    }
    if(s1.innerHTML!= "" && s2.innerHTML!= "" && s3.innerHTML!= "" && s4.innerHTML!= "" && s5.innerHTML!= "" && s6.innerHTML!= "" && s7.innerHTML!= "" && s8.innerHTML!= "" && s9.innerHTML!= "" ){
        document.getElementById("animation").innerHTML = "Draw!!!"
        addAnimation();
    }
}

// Add text
s1.onclick = () => {
    if (s1.innerHTML == "") {
        s1.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 15);
}
s2.onclick = () => {
    if (s2.innerHTML == "") {
        s2.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s3.onclick = () => {
    if (s3.innerHTML == "") {
        s3.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s4.onclick = () => {
    if (s4.innerHTML == "") {
        s4.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s5.onclick = () => {
    if (s5.innerHTML == "") {
        s5.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s6.onclick = () => {
    if (s6.innerHTML == "") {
        s6.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s7.onclick = () => {
    if (s7.innerHTML == "") {
        s7.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s8.onclick = () => {
    if (s8.innerHTML == "") {
        s8.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}
s9.onclick = () => {
    if (s9.innerHTML == "") {
        s9.innerHTML = `
        <p class="XO-logo">${alt("X", "O")}</p>
        `
    }
    setTimeout(() => {
        winLose();
    }, 20);
    setTimeout(() => {
        addScore();
    }, 25);
}

// Play again button
let btn = document.getElementById("btn")
let count_restart = (count_play_alt) => {
    count_play_alt = 0;
}
btn.onclick = () => {
    document.getElementById("animation").innerHTML = ""
    document.getElementById("animation").style = ""
    count_restart(count_play_alt);
    for (let i = 0; i < 9; i++){
        document.getElementsByClassName("indi")[i].innerHTML = "";
    }
}

// Reset score board button
let btn2 = document.getElementById("btn2")
let score_reset =()=>{
    score_count_x = 0;
    score_count_o = 0;
}
btn2.onclick =()=>{
    score_reset()
    addScore();
}
