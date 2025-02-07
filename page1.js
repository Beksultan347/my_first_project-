let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must add something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTime();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveTime();
    }else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTime();
    }else if(e.target.classList.contains("checked")){
        e.target.classList.remove("checked");
    }

}, false);

function saveTime(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function saveTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
saveTask();

