export const SET_AGE = "set_age";
export const SET_NAME = "set_name";

export const setAge = (age: number) => {
  return {
    type: SET_AGE,
    age,
  };
};

export const setName = (name: string) => {
  return {
    type: SET_NAME,
    name,
  };
};
