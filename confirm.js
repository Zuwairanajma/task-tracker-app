const confirmEl = document.querySelector(".confirm"),
closeEl = document.querySelector(".close"),
title = document.querySelector(".title"),
content = document.querySelector(".content"),
btnOk = document.querySelector(".btn-ok"),
btnCancel = document.querySelector(".btn-cancel");

// Custom Confirm Box class

class ShowConfirm {
    constructor(title, content, ok, cancel) {
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancel = cancel;
    }
    //Show confirm box
    trigger(callbackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOk.innerText = this.ok;
        btnCancel.innerText = this.cancel;

    confirmEl.classList.remove("close-modal")

    closeEl.addEventListener("click", this.closeModal);
    btnCancel.addEventListener("click", this.closeModal);

    btnOk.addEventListener("click", () => {
        callbackFn();
        this.closeModal();
    });
    }

    //Close  Modal Method

    closeModal() {
        confirmEl.classList.add("close-modal");
    }
    
}
// Delete a single Task
const deleteThisTask = new ShowConfirm("Delete Task", 
"You are about to delete a task!",
 "Delete", 
 "Cancel");

 // Delete all Tasks
 const deleteAllTasks = new ShowConfirm("Delete all Task", 
 "You are about to delete all tasks!",
  "Delete", 
  "Cancel");
 