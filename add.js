function generateRandomNumber(min, max) {
    //let max = 10;
    //let min = 1;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

function newround() {
    num1 = generateRandomNumber(0, 9);
    num2 = generateRandomNumber(0, 9);
    sum2 = num1 + num2;
    labelNumber1.innerHTML = num1;
    labelNumber2.innerHTML = num2;
    btnmostrar.style.display = "none";
    btncheck.style.display = "inline";
    displayMessage.style.display = "none";

}

function check() {
    displayMessage.style.display = "block";
    let answer = document.getElementById("answer").value
    btnmostrar.style.display = "none";
    btncheck.style.display = "inline";
    if (answer == sum2) {
        //alert("ok")
        displayMessage.classList.remove("alert-danger");
        displayMessage.classList.add("alert-success");
        displayMessage.innerHTML = "Yu uh";
        btnmostrar.style.display = "inline";
        stk = stk + 1;
        labelstreak.innerHTML = stk
        scn = scn + 1;
        labelscore.innerHTML = scn
        console.log(scn)
        console.log(labelscore)
    }
    else {
        //alert("nu uh")}
        displayMessage.classList.add("alert-danger");
        displayMessage.classList.remove("alert-success");
        displayMessage.innerHTML = "NOOOOOOOOOOOOOOOOOOOOO AAAAAAAAAAAHHHHHHHHHHHHHHH";
        er = er + 1;
        labelerror.innerHTML = er;
        stk = 0;
        labelstreak.innerHTML = stk;

    }




}
let num1 = generateRandomNumber(0, 9);
let num2 = generateRandomNumber(0, 9);
let labelNumber1 = document.getElementById("Number1");
let labelNumber2 = document.getElementById("Number2");
let labelResult = document.getElementById("Result");
let sum2 = num1 + num2;
let btncheck = document.getElementById("btncheck");
let btnmostrar = document.getElementById("btnmostrar");
let correct = document.getElementById("correct");
let displayMessage = document.getElementById("message");
let labelscore = document.getElementById("score");
let labelstreak = document.getElementById("streak")
let labelerror = document.getElementById("error")
let scn = 0;
labelscore.innerHTML = scn;
let stk = 0;
labelstreak.innerHTML = stk;
let er = 0;
labelerror.innerHTML = er;

//console.log(sum)
console.log(answer);
console.log(sum2);
//console.log(labelNumber1)
//console.log(labelNumber2)
//console.log(labelResult)
//console.log(labelnumber1.innerHTML)

//labelNumber1.innerHTML = generateRandomNumber(0, 9);
//labelNumber2.innerHTML = generateRandomNumber(0, 9);

labelNumber1.innerHTML = num1;
labelNumber2.innerHTML = num2;


//labelResult.innerHTML = ;
btnmostrar.style.display = "none";
btncheck.addEventListener("click", check)
btnmostrar.addEventListener("click", newround)
displayMessage.style.display = "none";
