type Task =  {
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector("#list") as HTMLUListElement
const form = document.querySelector("#new-task-form") as HTMLFormElement
const input = document.querySelector("#new-task-title") as HTMLInputElement
const tasks: Task[] = []

form.addEventListener('submit', e => {
  e.preventDefault()


  if ( input.value === "" || input.value === null ) return

  const newTask: Task = {
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)

  
  tasks.push(newTask)
  input.value = ""
})

function addListItem(task: Task) {
  const item = document.createElement("li")

  const label = document.createElement("label")

  const checkbox = document.createElement("input")

  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked
  })

  checkbox.type = "checkbox"

  checkbox.checked = task.completed
  
  label.append(checkbox, task.title)
  item.append(label)
  list.append(item)
}