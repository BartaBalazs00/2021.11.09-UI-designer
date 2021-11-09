
function szovegMegvaltoztat() {
    let szoveg = document.getElementById("szoveg").value.trim();
    if(szoveg == ""){
        document.getElementById("szovegError").classList.add("error");
        document.getElementById("szovegError").innerHTML="A szoveg nem lehet üres";
    } else {
        document.getElementById("szovegError").classList.remove("error");
        document.getElementById("szovegError").innerHTML="";
    }
    document.getElementById("elonezet").innerHTML = szoveg;
}

function betumeretMegvaltoztat() {
    let betumeret = document.getElementById("betumeret").value;
    if(betumeret == ""){
        document.getElementById("betumeretError").classList.add("error");
        document.getElementById("betumeretError").innerHTML="A betüméretet meg kell adni!";
    }else if(betumeret <= 0){
        document.getElementById("betumeretError").classList.add("error");
        document.getElementById("betumeretError").innerHTML="A betüméret nem lehet kisebb mint nulla!";
    }  else {
        document.getElementById("betumeretError").classList.remove("error");
        document.getElementById("betumeretError").innerHTML="";
    }
    document.getElementById("elonezet").style.fontSize = betumeret+"pt";
}

function szovegszinMegvaltoztat() {
    let szovegszin = document.getElementById("szovegszin").value;
    document.getElementById("elonezet").style.color = szovegszin;
}

function hatterszinMegvaltozat() {
    let szovegszin = document.getElementById("hatterszin").value;
    document.getElementById("elonezet").style.backgroundColor = szovegszin;
}

function alaphelyzetbeAllitas() {
    document.getElementById("szoveg").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeret").value = 12;
    document.getElementById("szovegszin").value = "#000000";
    document.getElementById("hatterszin").value = "#ffffff";
    szovegMegvaltoztat();
    betumeretMegvaltoztat();
    szovegszinMegvaltoztat();
    hatterszinMegvaltozat();
}
function init(){
    alaphelyzetbeAllitas();
    document.getElementById("szoveg").addEventListener("keyup", szovegMegvaltoztat);
    document.getElementById("betumeret").addEventListener("keyup", betumeretMegvaltoztat);
    document.getElementById("szovegszin").addEventListener("change", szovegszinMegvaltoztat);
    document.getElementById("hatterszin").addEventListener("change", hatterszinMegvaltozat);
    document.getElementById("alaphelyzet").addEventListener("click", alaphelyzetbeAllitas);
}

document.addEventListener("DOMContentLoaded", init);