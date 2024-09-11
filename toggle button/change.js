const button=document.querySelector(".button");
let button2="light";
button.addEventListener("click",mode);
function mode(){
    if(button2=="light"){
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        document.querySelector(".button").style.borderColor="white";
        button2="dark";
    }
    else if(button2=="dark")
    {
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        document.querySelector(".button").style.borderColor="black";
        button2="light";
    }
}
