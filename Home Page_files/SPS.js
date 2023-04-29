console.log("hi");

let a = document.getElementById("stone");
let b = document.getElementById("paper");
let c = document.getElementById("siser");

setTimeout(() => {
    document.getElementById("opt").style.display = "none";
}, 6000);

let m = 0;
let bo = 0;

function sps(me) {
    let bot = Math.floor(Math.random() * (1 - (-1) + 1)) + (-1);
    if (me == bot) {
        console.log("Both are equl");
        document.getElementById("do").style.display = "block";
                setTimeout(() => {
                    document.getElementById("do").style.display = "none";
                }, 1700);
    }
    else {

        if (me == -1) {
            if (bot == 0) {
                console.log("you lose");
                bo++;
                document.getElementById("b").innerText = bo;
                document.getElementById("bo").style.display = "block";
                setTimeout(() => {
                    document.getElementById("bo").style.display = "none";
                }, 1700);

            }
            else {
                console.log("You win");
                m++;
                document.getElementById("m").innerText = m;
                document.getElementById("pl").style.display = "block";
                setTimeout(() => {
                    document.getElementById("pl").style.display = "none";
                }, 1700);
            }
        }
        if (me == 0) {
            if (bot == 1) {
                console.log("you lose");
                bo++;
                document.getElementById("b").innerText = bo;
                document.getElementById("bo").style.display = "block";
                setTimeout(() => {
                    document.getElementById("bo").style.display = "none";
                }, 1700);
            }
            else {
                console.log("You win");
                m++;
                document.getElementById("m").innerText = m;
                document.getElementById("pl").style.display = "block";
                setTimeout(() => {
                    document.getElementById("pl").style.display = "none";
                }, 1700);
            }
        }
        if (me == 1) {
            if (bot == -1) {
                console.log("you lose");
                bo++;
                document.getElementById("b").innerText = bo;
                document.getElementById("bo").style.display = "block";
                setTimeout(() => {
                    document.getElementById("bo").style.display = "none";
                }, 1700);
            }
            else {
                console.log("You win");
                m++;
                document.getElementById("m").innerText = m;
                document.getElementById("pl").style.display = "block";
                setTimeout(() => {
                    document.getElementById("pl").style.display = "none";
                }, 1700);
            }
        }
    }
}