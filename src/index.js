document.addEventListener("DOMContentLoaded", () => {
  
  //Definitions
  let to_do_list = document.getElementById('tasks')
  let input = document.querySelector('input#new-task-description')
  let create = document.querySelector('input#new-task-description + input')

  //Event Handlers
  function add_item(){
    let item = document.createElement('li')
    item.textContent = input.value
    to_do_list.appendChild(item)
    x = document.createElement('button')
    x.textContent = "x"
    x.className = "delete"
    document.querySelector('ul li:last-child').appendChild(x)
    add_x_event_listener()
    input.value = ""
  }
  function delete_task(item){
    item.parentNode.remove()
  }

  //Event Listeners
  create.addEventListener('click', function(e){
    e.preventDefault()
    add_item()
  })

  function add_x_event_listener() {
    let delete_button = document.querySelector('ul li:last-child button')
    delete_button.addEventListener('click', function(e) {
        delete_task(e.target)
    })
  }
})
