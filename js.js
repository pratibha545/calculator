let calculator=document.querySelector(".calculator");
let input=document.querySelector(".input");
let btn=document.querySelectorAll("button");
let output=document.querySelector(".output");

let str1="";

Array.from(btn).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="AC"){
            str1="";
            output.innerHTML=str1;
        }else if(e.target.innerHTML=="="){
            str1=eval(str1);
            output.innerHTML=str1;
        }else if(e.target.innerHTML=="del"){
            str1=str1.substring(0,str1.length-1);
            output.innerHTML=str1;
        }else{
            str1+=e.target.innerHTML;
            output.innerHTML=str1;
        }

    });
});