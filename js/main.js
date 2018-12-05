var todo = [];

function init() {

    createBasicHTML();

    if(localStorage.tdRecord) {
        var listItem = JSON.parse(localStorage.tdRecord);
        for(var i=0; i<listItem.length; i++) {
            todo.push(listItem[i]);
        }
    }
    showTasks();
}

function createBasicHTML() {
    createHeader();
    createInputField();
    createAddButton();
    createList();
}

function createHeader() {
    debugger
    var tdHeader = document.createElement("HEADER");
    tdHeader.setAttribute("id","td-header");
    tdHeader.setAttribute("class","td-header");

    var headerSpan = document.createElement("SPAN");
    var spanI = document.createElement("I");
    spanI.setAttribute("class","far fa-check-square");
    headerSpan.appendChild(spanI);
    tdHeader.appendChild(headerSpan);

    var headerH1 = document.createElement("H1");
    var ht = document.createTextNode("To Do App");

    headerH1.appendChild(ht);
    tdHeader.appendChild(headerH1);

    // var b = document.getElementById("body");
    // b.appendChild(tdHeader);

    document.body.appendChild(tdHeader);

    var s = document.createElement("SECTION");
    s.setAttribute("id", "td-wrapper");
    s.setAttribute("class", "td-wrapper");
    document.body.appendChild(s);

}

function createInputField() {

    var inpt = document.createElement("INPUT");
    inpt.setAttribute("type", "text");
    inpt.setAttribute("placeholder", "type task");
    inpt.setAttribute("id", "td-task-input");
    document.getElementById("td-wrapper").appendChild(inpt);
}

function createAddButton() {
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("Add Task");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.getElementById("td-wrapper").appendChild(btn);
    btn.addEventListener("click", addTask); 
}

function createList() {
    var listdesign = document.createElement("UL");
    listdesign.setAttribute("id", "td-tasks-list");
    document.getElementById("td-wrapper").appendChild(listdesign);

    // var y = document.createElement("LI");
    // var t = document.createTextNode("Tea");
    // y.appendChild(t);
    // document.getElementById("td-tasks-list").appendChild(y);
}

function addTask() {
    console.log("Add Task");
    var task= document.getElementById("td-task-input").value;
    console.log(task);

    var tdObj = {
        "to-do-task": task
    };

    todo.push(tdObj);

    localStorage.tdRecord = JSON.stringify(todo);
    showTasks();
}

function showTasks() {
    document.getElementById("td-tasks-list").innerHTML="";
    var list = document.getElementById("td-tasks-list");
    if(localStorage.tdRecord) {
        var listItem = JSON.parse(localStorage.tdRecord);
        //console.log(listItem[0]["to-do-task"]);
        for(var i=0; i<listItem.length; i++) {
            var x = document.createElement("LI");
            
            console.log("Hello");
            var t = document.createTextNode(listItem[i]["to-do-task"]);
            x.appendChild(t);
            document.getElementById("td-tasks-list").appendChild(x);
        }
    }
}