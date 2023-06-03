const btn = document.querySelector('.btn');
const cl_btn = document.querySelector('.close-btn');
const inputvalue = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");

btn.addEventListener("click", () => {
    if (inputvalue.value === '') {
        alert("You must write something!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputvalue.value;
        let span = document.createElement("span");
        span.classList.add("close-btn");
        listConatiner.appendChild(li).appendChild(span);
    }
    inputvalue.value = "";
    saveTask();

});

listConatiner.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("done");
        saveTask();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask(){
    localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}

showTask();