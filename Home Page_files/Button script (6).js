f=document.getElementById("but6")
f.addEventListener("click", salaidar);

function salaidar(){
    document.getElementById("demon").style.display= "block";
    f.style.display= "none";

}


let salaiderindex=1;
    salaider(salaiderindex)

    function plusSlides(n){
        salaider(salaiderindex += n);
    }

function salaider(n){
    let i;
    let salaids=document.getElementsByClassName("salaiders");
    if ( n > salaids.length ) {salaiderindex=1}
    if ( n < 1 ) {salaiderindex=salaids.length}
        for (i = 0; i < salaids.length; i++) {
        salaids[i].style.display = "none";
    }
    salaids[salaiderindex-1].style.display= "block"
}
