const fs = require("fs");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// yargs add command

yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Add the body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note!",
  handler: function(argv) {
    notes.removeNotes(argv.title);
  },
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string"
    }
  }
});

yargs.command({
  command: "list",
  describe: "List of all notes",
  handler: function() {
    notes.listNotes();
  }
});

yargs.command({
  command: "getNote",
  describe: "Find the note",
  handler: function(argv) {
    notes.getNotes(argv.title);
  }
});

yargs.parse();
// console.log(yargs.argv);

// console.log(getNotes());

// console.log(chalk.inverse.green("Success!"));

// fs.writeFileSync("notes.txt", "My Name is Aaayush");

// fs.appendFileSync("notes.txt", "I am FrontEnd Developer");
