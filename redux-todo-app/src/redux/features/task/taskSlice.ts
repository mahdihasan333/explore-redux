import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    task: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low';
}

const initialState = {
  tasks: [
    {
      id: "adkjadkfja",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    }
  ],
  filter: 'all'
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
}


export const selectFilter = (state: RootState) => {
  return state.todo.filter;
}

export default taskSlice.reducer;
