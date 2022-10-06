import { Name } from "../types";
/**
 * sayHello
 * 
 * Say Hello to the name passed in argument
 * 
 * @param {Name} name
 * @returns {string}
 */
export function sayHello(name: Name): string {
  return `Hello ${name} !`;
}