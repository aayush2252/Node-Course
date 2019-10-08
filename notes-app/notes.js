const fs = require("fs");
const chalk = require("chalk");

const getNotes = function(title) {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);
  if (findNote) {
    const { title, body } = findNote;
    console.log(chalk.blue(title));
    console.log(body);
  } else {
    console.log(chalk.red("No note found"));
  }
};

const addNote = function(title, body) {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter(function(note) {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken");
  }
};

const removeNotes = function(title) {
  const notes = loadNotes();
  const filteredNotes = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notes.length !== filteredNotes.length) {
    console.log(chalk.green("Removed Notes"));
  } else {
    console.log(chalk.red("No note Found"));
  }
  saveNotes(filteredNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes: "));
  notes.forEach(element => {
    console.log(chalk.blue(`Title: ${element.title}`));
  });
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  saveNotes,
  removeNotes,
  listNotes
};
