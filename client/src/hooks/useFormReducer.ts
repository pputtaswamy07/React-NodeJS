import { useReducer } from "react";

export type FormState = {
  name: string;
  email: string;
  phone: string;
  /* date: string;
  time: string; */
};

export type FormAction =
  | { type: "FIELD_CHANGE"; field: string; value: string }
  | { type: "RESET_FORM" };

export const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  /*   date: "",
  time: "", */
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "FIELD_CHANGE":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialFormState;
    default:
      return state;
  }
};

export const useFormReducer = () => {
  return useReducer(formReducer, initialFormState);
};
