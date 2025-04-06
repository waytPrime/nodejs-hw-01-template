import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { getAllContacts } from "./getAllContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const songList = await getAllContacts();
  const newSongList = Array(number).fill(0).map(createFakeContact);

  songList.push(...newSongList);
  await writeContacts(songList);
};
generateContacts(5);
