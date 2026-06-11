document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        document.getElementById("message").innerHTML =
        "Please fill all fields";
        return;
    }

    document.getElementById("message").innerHTML =
    "Form Submitted Successfully!";
});

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    taskText +
    ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}