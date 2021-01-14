document.addEventListener("DOMContentLoaded", () => {
  //Definitions
  let create = document.querySelector('form #submit')
  let select_box = document.querySelector('select')

  //Change DOM Elements
  function textColor(list_element, priority){
    if (priority === "high") {
        list_element.style.color = "red"
      } else if (priority === "medium") {
        list_element.style.color = "#948b26"
      } else {
        list_element.style.color = "green"
      }
  }
  
  //Event Handlers
  function add_item(priority, task, duration, due){
    let item = document.createElement('li')
    item.textContent = `${task.value}  -  will take ${duration.value} hr  -  finish by ${due.value}   `
    textColor(item, priority)
    document.querySelector(`ul#tasks #${priority}`).appendChild(item)
    x = document.createElement('button')
    x.textContent = "x"
    x.className = "delete"
    x.style = "margin-left:10px"
    document.querySelector(`ul#tasks #${priority} li:last-child`).appendChild(x)
    add_x_event_listener(priority)
    edit = document.createElement('button')
    edit.textContent = "edit"
    edit.className = "edit"
    edit.style = "margin-left:10px"
    document.querySelector(`ul#tasks #${priority} li:last-child`).appendChild(edit)
    add_edit_event_listener(priority)
    task.value = ""
    duration.value = ""
    due.value = ""
  }

  function delete_task(item){
    item.parentNode.remove()
    if (document.querySelector('div#edit').style.display === "") {
      document.querySelector('div#edit').style.display = "none"
    }
  }
  
  function edit_task(){
    
  }

  //Event Listeners
  create.addEventListener('click', function(e){
    e.preventDefault()
    let task = document.querySelector('input#new-task-description')
    let dur = document.querySelector('input#duration')
    let due = document.querySelector('input#dueDate')
    p = select_box.value
    add_item(p, task, dur, due)
  })

  function add_x_event_listener(priority) {
    let delete_button = document.querySelector(`ul div#${priority} li:last-child button.delete`)
    delete_button.addEventListener('click', function(e) {
        delete_task(e.target)
    })
  }

  function add_edit_event_listener(priority) {
    let edit_button = document.querySelector(`ul div#${priority} li:last-child button.edit`)
    edit_button.addEventListener('click', function(){
      document.querySelector('div#edit').style.display = ""
    })
  }

  document.querySelector('#editSubmit').addEventListener('click', function(e){
    e.preventDefault()
    edit_task()
    document.querySelector('div#edit').style.display = "none"
  })

})
