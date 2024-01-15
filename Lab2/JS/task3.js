$(function () {
  loadTasks();

  $("#addTask").on("click", function () {
    let taskText = $("#taskInput").val();
    if (taskText.trim() !== "") {
      hideErrorMessage();
      addTask(taskText);
      saveTasks();
      $("#taskInput").val("");
    } else {
      showErrorMessage("Please, enter a task.");
    }
  });

  $("#taskList").on("click", ".done", function () {
    let listItem = $(this).closest("li");
    let taskId = listItem.data("task-id");

    let isCompleted = listItem.hasClass("completed");
    listItem.toggleClass("completed", !isCompleted);

    let doneButton = listItem.find(".done");
    doneButton.text(isCompleted ? "Done" : "Undo");

    updateTaskStatus(taskId, !isCompleted);
    saveTasks();
  });

  $("#taskList").on("click", ".remove", function () {
    let listItem = $(this).closest("li");
    let taskId = listItem.data("task-id");

    listItem.remove();
    removeTask(taskId);
    saveTasks();
  });
/* -------------------------------- Add task -------------------------------- */
  function addTask(taskText, isCompleted = false) {
    let taskId = $("#taskList li").length;
    let listItem = $("<li>").data("task-id", taskId);

    let taskContainer = $("<div>").addClass("task-container");

    let taskTextElement = $("<p>").addClass("task-text").text(taskText);
    taskContainer.append(taskTextElement);

    if (isCompleted) {
      listItem.addClass("completed");
    }

    let doneButton = $("<button>")
      .addClass("done")
      .text(isCompleted ? "Undo" : "Done");
    let removeButton = $("<button>").addClass("remove").text("Remove");

    let buttonContainer = $("<div>").addClass("task-buttons");
    buttonContainer.append(doneButton, removeButton);
    taskContainer.append(buttonContainer);

    listItem.append(taskContainer);
    $("#taskList").append(listItem);
  }
/* ----------------------- Save tasks in localStorage ----------------------- */
  function saveTasks() {
    let tasks = [];

    $("#taskList li").each(function (index) {
      let taskId = index;
      let taskText = $(this).find(".task-text").text();
      let isCompleted = $(this).hasClass("completed");

      tasks.push({
        id: taskId,
        text: taskText,
        completed: isCompleted,
      });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
/* ------------------------------- Load tasks from localStorage ------------------------------- */
  function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      let tasks = JSON.parse(storedTasks);

      $.each(tasks, function (index, task) {
        addTask(task.text, task.completed);
      });
    }
  }
/* ------------------------------- Update task ------------------------------ */
  function updateTaskStatus(taskId, isCompleted) {
    let listItem = $("#taskList li[data-task-id='" + taskId + "']");
    listItem.toggleClass("completed", isCompleted);
  }
/* ------------------------------- Remove task ------------------------------ */
  function removeTask(taskId) {
    $("#taskList li[data-task-id='" + taskId + "']").remove();
  }
/* --------------------------- Show error message --------------------------- */
  function showErrorMessage(message) {
    $("#errorMessage").text(message).show();
  }
/* --------------------------- Hide error message --------------------------- */
  function hideErrorMessage() {
    $("#errorMessage").hide();
  }
});
