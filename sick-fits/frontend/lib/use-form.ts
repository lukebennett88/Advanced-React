import * as React from "react";

type Key = string | number;
type Value = string | number | readonly string[];
type State = Record<Key, Value>;
type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type UseForm = {
  state: State;
  handleChange: HandleChange;
  resetForm: () => void;
  clearForm: () => void;
};

export function useForm(initial = {}): UseForm {
  const [state, setState] = React.useState(initial);

  function handleChange(event): void {
    let { value, name, type } = event.target;
    if (type === "number") {
      value = Number(value);
    }
    if (type === "file") {
      value[0] = event.target.files;
    }
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function resetForm() {
    setState(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(state).map(([key]) => [key, ""])
    );
    setState(blankState);
  }

  return {
    state,
    handleChange,
    resetForm,
    clearForm,
  };
}
