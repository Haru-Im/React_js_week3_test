import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (newTodo, thunkAPI) => {
    await waitTwoSeconds();
    return newTodo;
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (id, thunkAPI) => {
    await waitTwoSeconds();
    return id;
  }
);

const initialState = {
  entities: [],
  loading: "idle",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addToDo.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(__addToDo.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.loading = "idle";
      })
      .addCase(__addToDo.rejected, (state) => {
        state.loading = "idle";
      })
      .addCase(__deleteTodo.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.entities = state.entities.filter(
          (todo) => todo.id !== action.payload
        );
        state.loading = "idle";
      })
      .addCase(__deleteTodo.rejected, (state) => {
        state.loading = "idle";
      });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
