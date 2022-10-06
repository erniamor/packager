import { Name } from "../types";
/**
 * sayGoodbye
 * 
 * Say Goodbye to the name passed in argument
 * 
 * @param {Name} name
 * @returns {string}
 */
export function sayGoodbye(name: Name): string {
  return `Goodbye ${name} !`;
}