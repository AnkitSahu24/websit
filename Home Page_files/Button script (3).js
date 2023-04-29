let c = document.getElementById("but3");

c.addEventListener("click", time);

function time() {
    let hours;
    let year;
    setInterval(() => {
        a = new Date();
        year = a.getDate() + "-" + a.getMonth() + "-" + a.getFullYear();
        hours = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
        document.getElementById("i_but3").innerHTML = `<p> The time is "${hours}" <br> And year is "${year}"</p>`;
    }, 1000);
}