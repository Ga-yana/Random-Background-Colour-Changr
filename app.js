let back=document.querySelector("#canvas")

function change(){
    let list="1234567890ABCDEF";
    let code="#";
    for(let i=0;i<6;i++){
        code=code+list[Math.floor(Math.random() * 16)];
    }
    back.style.backgroundColor=code;
}

let btn=document.querySelector("#button");
btn.addEventListener("click",change);