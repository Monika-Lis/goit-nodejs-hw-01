// const argv = require("yargs").argv;
// const {
//   listContacts,
//   getContactbyId,
//   removeContact,
//   addContact,
// } = require("./contacts");

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       console.table(await listContacts());
//       break;

//     case "get":
//       console.log(await getContactbyId(id));
//       break;

//     case "add":
//       console.log(await addContact(name, email, phone));
//       break;

//     case "remove":
//       console.log(await removeContact(id));
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);

const { Command } = require("commander");
const program = new Command();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type", "user email")
  .option("-p, --phone <type", "user phone");

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      console.table(await listContacts());
      break;

    case "remove":
      console.log(await removeContact(id));
      console.table(await listContacts());
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
