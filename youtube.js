let body = document.querySelector("body");
let theme = "light";
let change = document.querySelector("#switch-theme");
change.addEventListener("click", function(){
    if(theme==="light"){
        theme="black";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#header").style.backgroundColor = "black";
    }
    else{
        theme="light"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#header").style.backgroundColor = "white";
    }
})