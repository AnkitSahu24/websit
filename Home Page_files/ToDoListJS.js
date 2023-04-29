function clearLS() {
    localStorage.clear();
    sowNotes();
};
let notesObj;

sowNotes();

let addText = document.getElementById("addText");
addText.addEventListener("click", () => {
    let ting = document.getElementById("addli").value;
    if(ting == ""){
        ting = "Enter Some thing on the input area"
    };
    let dis = document.getElementById("dis").value;
    if(dis == ""){
        dis = "You did not provide any description"
    };
    let notes = localStorage.getItem("notes");
    let disc = localStorage.getItem("notes2");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (disc == null) {
        discArr = [];
    }
    else {
        discArr = JSON.parse(disc);
    }

    notesObj.push(ting);
    discArr.push(dis);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("notes2", JSON.stringify(discArr));
    document.getElementById("addli").value = "";
    document.getElementById("dis").value = "";

    sowNotes();
})

function sowNotes() {
    let notes = localStorage.getItem("notes");
    let disc = localStorage.getItem("notes2");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (disc == null) {
        discArr = [];
    }
    else {
        discArr = JSON.parse(disc);
    }
    let html = "";
    for (let i = 0; i < notesObj.length; i++) {
        // notesObj.forEach(function (element, index) {
        html += `<div class="card">
        <h1>list ${i + 1}</h1>
        <h3>${notesObj[i]}</h3>
        <p>${discArr[i]}</p>
        <button id = "${i}" class="but2" onclick="deleteMe(this.id)">Delete</button>
    </div>`
    };

    let canternor = document.getElementById("canternor");
    if (notesObj.length != 0) {
        canternor.innerHTML = html;
    } else {
        canternor.innerHTML = `<p class = "pera">Please create a list</p>`
    }
}


function deleteMe(i) {
    let notes = localStorage.getItem("notes");
    let disc = localStorage.getItem("notes2");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (disc == null) {
        discArr = [];
    }
    else {
        discArr = JSON.parse(disc);
    }
    notesObj.splice(i, 1);
    discArr.splice(i, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("notes2", JSON.stringify(discArr));
    sowNotes();
}



let search = document.getElementById('sbar');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h3")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})