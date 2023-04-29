let b = document.getElementById("but2");
b.addEventListener('click', names);

function names() {
    let names = prompt('Enter Your Name')
    document.getElementById("i_but2").innerHTML = `<p>The Enterd name is: ${names} </p>`
}