import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTaskCompleted: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
});

// Choisir une tache par ID
export const selectTaskById = (state, taskId) => state.tasks.taskList.find(task => task.id === taskId);

export const { addTask, deleteTask, toggleTaskCompleted } = taskSlice.actions;
export default taskSlice.reducer;
