import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
  const allContacts = await getAllContacts();
  return allContacts.length;
};

console.log(await countContacts());
