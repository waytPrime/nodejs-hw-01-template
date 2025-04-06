import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { getAllContacts } from "./getAllContacts.js";

export const addOneContact = async () => {
  const allSong = await getAllContacts();
  const newContact = createFakeContact();
  allSong.push(newContact);
  await writeContacts(allSong);
};

addOneContact();
