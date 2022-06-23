import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Form = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

const initialState: Form = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLevel: (state, action: PayloadAction<0 | 1>) => {
      state.level = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setGithub: (state, action: PayloadAction<string>) => {
      state.github = action.payload;
    },
  },
});

export const { setCurrentStep, setName, setLevel, setEmail, setGithub } =
  counterSlice.actions;

export default counterSlice.reducer;
