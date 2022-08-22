document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const  form = document.querySelector('#create-task-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const list = document.createElement('li') 
      const tasks = document.getElementById("tasks")
      const input = document.getElementById("new-task-description")
      list.textContent = input.value
      tasks.appendChild(list)
      return e.target.input.value
    })

})
   





