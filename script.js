
let btn_ajout=document.getElementById("ajout");
let inputTodo=document.getElementById("inputTodo");
let ulOutput=document.querySelector("ul")
let created=false;

btn_ajout.onclick=function(){
    created=true;
    if (inputTodo.value!=""){
        let li = document.createElement("li");
            let div = document.createElement("div");
            let check = document.createElement("input"); check.type="checkbox"; check.classList="inputcheck"; 
            let textOutput = document.createElement("input"); textOutput.value=inputTodo.value; textOutput.style.border="none"; textOutput.classList="textOutput"; textOutput.readOnly= true; let disabled=true;
            let btn_supp = document.createElement("button"); btn_supp.innerText="delete"; btn_supp.id="supp"
            let btn_save = document.createElement("button"); btn_save.innerText="save"; btn_save.id="save"
            div.appendChild(check);
            div.appendChild(textOutput);
            div.appendChild(btn_save);
            div.appendChild(btn_supp);
        li.appendChild(div);
    ulOutput.appendChild(li)
    inputTodo.value=""
        }
    }
if(created){
let check=document.querySelectorAl(".inputcheck")
check.forEach(element => {
    element.onclick=()=>{
        this.parent.querySelector(".textOutput").style.text.decoration="line-through"
    }
});
}

