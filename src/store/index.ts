import { createStore } from "redux";
import { SET_AGE, SET_NAME } from "./action";

interface User {
  name: string;
  age: number;
}

const initialState = {
  name: "张三",
  age: 18,
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_AGE: {
      return {
        ...state,
        age: state.age + action.age,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);
export default store;
