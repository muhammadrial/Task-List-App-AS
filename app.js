document.addEventListener("DOMContentLoaded", () => {
  const taskAdd = document.getElementById("id-01");
  const addPress = document.getElementById("addPressid");
  const taskContainer = document.getElementById("task-con");

  function createTask() {
    const task = taskAdd.value.trim(); // Get the input value and trim whitespace
    if (task) {
      console.log(task); // Log the task to the console
      taskAdd.value = ""; // Clear the input field after adding the task

      const taskdiv = document.createElement("div");
      // taskdiv.innerText = "new div";
      taskdiv.classList.add("task-container");
      taskContainer.appendChild(taskdiv);

      const listDiv = document.createElement("div");
      listDiv.classList.add("task-list-container");
      taskdiv.appendChild(listDiv);

      const listWrite = document.createElement("label");

      listWrite.classList.add("label-cl");
      listDiv.appendChild(listWrite);

      const listName = document.createElement("h1");
      listName.innerHTML = task;

      // const listName = document.createElement("input");
      // listName.value = task;
      listWrite.appendChild(listName);

      const buttonGroups = document.createElement("div");
      buttonGroups.classList.add("buttonGroups");
      listDiv.appendChild(buttonGroups);

      const editbtn = document.createElement("button");
      editbtn.innerHTML = "Edit";
      editbtn.classList.add("btn-cl");
      buttonGroups.appendChild(editbtn);

      const deletebtn = document.createElement("button");
      deletebtn.innerHTML = "Delete";
      deletebtn.classList.add("btn-cl");
      buttonGroups.appendChild(deletebtn);
    } else {
      alert("Please Enter a Task"); // Handle empty input
    }
  }

  // Add event listener to the button
  addPress.addEventListener("click", createTask);
});
