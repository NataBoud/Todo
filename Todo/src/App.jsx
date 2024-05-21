import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {

  const [tasks, setTasks] = useState([]);

  // Loal Storage
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskDescription) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        description: taskDescription,
        isCompleted: false
      }
    ]);

  };
  console.log(tasks);

  function toggleTaskComletedBuId(taskId) {
    const newArrayTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasksAndSave(newArrayTasks);
  }

  function deleteTaskById(taskId) {
    const newArrayTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newArrayTasks)
  }


  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasksProp={tasks}
        onCompleteProp={toggleTaskComletedBuId}
        onDeleteProp={deleteTaskById}
      />
    </>
  )
}

export default App
