import { useEffect } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './features/tasks/taskSlice';

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();

  // -----Local Storage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const savedTasks = JSON.parse(saved);
        savedTasks.forEach(task => {
          dispatch(addTask(task));
        });
      } catch (e) {
        console.error("Error parsing saved tasks from localStorage:", e);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskDescription) => {
    dispatch(addTask({
      id: crypto.randomUUID(),
      description: taskDescription,
      isCompleted: false
    }));
  };

  return (
    <>
      <Header onAddTask={handleAddTask} />
      <Tasks />
    </>
  );
}

export default App;
