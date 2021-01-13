document.addEventListener("DOMContentLoaded", () => {

  //Definitions
  let to_do_list = document.getElementById('tasks')
  let input = document.querySelector('input#new-task-description')
  let create = document.querySelector('select + input')
  let select_box = document.querySelector('select')

  //Change DOM Elements
  function textColor(list_element, index){
    if (index === 0) {
        list_element.style.color = "red"
        list_element.value = "1"
      } else if (index === 1) {
        list_element.style.color = "yellow"
        list_element.value = "2"
      } else {
        list_element.style.color = "green"
        list_element.value = "3"
      }
  }

  //Event Handlers
  function add_item(i){
    let item = document.createElement('li')
    item.textContent = input.value
    textColor(item, i)
    to_do_list.appendChild(item)
    x = document.createElement('button')
    x.textContent = "x"
    x.className = "delete"
    document.querySelector('ul li:last-child').appendChild(x)
    add_x_event_listener()
    input.value = ""
    // Sort li elements by value 
  }

  function delete_task(item){
    item.parentNode.remove()
  }

  //Event Listeners
  create.addEventListener('click', function(e){
    e.preventDefault()
    i = select_box.selectedIndex
    add_item(i)
  })

  function add_x_event_listener() {
    let delete_button = document.querySelector('ul li:last-child button')
    delete_button.addEventListener('click', function(e) {
        delete_task(e.target)
    })
  }
})
