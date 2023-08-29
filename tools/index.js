/*
import a, { b, c } from "./my-js02.js";
import Person, { data } from "./person.js";

export { Person, data, a, b, c};
*/

export { default as Person, data } from "./person.js";
export { default as a, b, c } from "./my-js02.js";