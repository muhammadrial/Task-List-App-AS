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
      taskdiv.classList.add("task-container");
      taskContainer.appendChild(taskdiv);

      const listDiv = document.createElement("div");
      listDiv.classList.add("task-list-container");
      taskdiv.appendChild(listDiv);

      const listWrite = document.createElement("label");
      listWrite.classList.add("label-cl");
      listDiv.appendChild(listWrite);

      const listName = document.createElement("h1");
      listName.innerText = task;
      listWrite.appendChild(listName);

      const buttonGroups = document.createElement("div");
      buttonGroups.classList.add("buttonGroups");
      listDiv.appendChild(buttonGroups);

      // Create Edit button
      const editbtn = document.createElement("button");
      editbtn.innerText = "Edit";
      editbtn.classList.add("btn-cl");
      buttonGroups.appendChild(editbtn);

      // Create Delete button
      const deletebtn = document.createElement("button");
      deletebtn.innerText = "Delete";
      deletebtn.classList.add("btn-cl");
      buttonGroups.appendChild(deletebtn);

      // Attach delete functionality
      deletebtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove(); // Remove the task container from the DOM
      });

      editbtn.addEventListener("click", () => {
        if (editbtn.innerText === "Edit") {
          // Change button to "Save"
          editbtn.innerText = "Save";

          // Convert task name to an input field for editing
          const inputField = document.createElement("input");
          inputField.type = "text";
          inputField.value = listName.innerText;
          inputField.classList.add("edit-input");
          listWrite.replaceChild(inputField, listName);
        } else {
          // Save the changes
          const inputField = listWrite.querySelector(".edit-input");
          listName.innerText = inputField.value.trim();
          listWrite.replaceChild(listName, inputField);

          // Change button back to "Edit"
          editbtn.innerText = "Edit";
        }
      });
    } else {
      alert("Please Enter a Task"); // Handle empty input
    }
  }

  // Add event listener to the Add button
  addPress.addEventListener("click", createTask);
});
