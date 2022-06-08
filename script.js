//clicker

let bigbtn = document.getElementById("cherbtn");
let cherval = document.getElementById("nofcher");
let cherval1 = document.getElementById("nofcher1");
let storebtn = document.getElementById("store");
let autobtn = document.getElementById("divbtn1");
let betterbtn = document.getElementById("divbtn2");
let tooxbtn = document.getElementById("divbtn3");
let endbtn = document.getElementById("divbtn4");
let autobtncont = document.getElementById("auto");
let betterbtncont = document.getElementById("better");
let toobtncont = document.getElementById("2x");
let inst = document.getElementById("instruct");
let kakgif = document.getElementById("photend");

let val = 0, autopurval = 50, buyval = 0, cherincval = 1, betterpurval = 10, toopurval = 200, twomod = 1;
let code = [];

bigbtn.addEventListener("click", increase);
storebtn.addEventListener("click", store);
inst.addEventListener("click", storeleave);
autobtn.addEventListener("click", autopur)
betterbtn.addEventListener("click", betterpur)
tooxbtn.addEventListener("click", toopur)
endbtn.addEventListener("click", endpur)
document.addEventListener("keydown", keyd)




function increase() {
    val += cherincval * twomod;
}
function store() {
    inst.style.display = "block";
}
function storeleave(e) {
    if (e.target === inst) {
        inst.style.display = "none";
    }
}
function autopur() {
    if (val >= autopurval) {
        buyval++
        val = val - autopurval;
        autopurval = autopurval * 2;
        autobtncont.innerHTML = autopurval;
        setInterval(auto, 1000);
    }
}
requestAnimationFrame(loop);
function loop() {
    cherval1.innerHTML = val;
    cherval.innerHTML = val;
if (code.join() === ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight"].join()){
        val += 1000000
    }
    requestAnimationFrame(loop);
}
function auto() {
    val += 1 * twomod
}
function betterpur() {
    if (val >= betterpurval) {
        val -= betterpurval
        betterpurval *= 2;
        betterbtncont.innerHTML = betterpurval;
        cherincval++;
    }
}
function toopur() {
    if (val >= toopurval) {
        val -= toopurval;
        toopurval *= 2;
        toobtncont.innerHTML = toopurval;
        twomod *= 2;
    }
}
function endpur() {
    if (val >= 1000000) {
        val = 0;
        inst.style.display = "none";
        kakgif.style.display = "block";
    }
}
function keyd(event) {

    code.push(event.code);
    if (code.length >8){
        code.shift();
    }

    //if(code.join("Arrow") === "Up","Up","Down","Down","Left","Right"){

    //}






    /*if (event.code === "ArrowUp"){
        if (code === 0){
            code = 1;
        } else if (code === 1){
            code = 2;
        } else {code = 0}
        console.log("h")
    }
    if (event.code === "ArrowDown"){
        if (code === 2){
            code = 3;
        } else if (code === 3){
            code = 4;
        } else {code = 0}
    }
    if (event.code === "ArrowLeft"){
        if (code === 4){
            code = 5;
        } else if (code === 6){
            code = 7;
        } else {code = 0}
    }
    if (event.code === "ArrowRight"){
        if (code === 5){
            code = 6;
        } else if (code === 7){
            code = 8;
        } else {code = 0}
    }*/
}