const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customise yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
     handler(argv) {
        notes.removeNote(argv.title, argv.body)
    }
})

// challenge: add two new commands
yargs. command({
    command: 'list' ,
    describe: 'list in order' ,
    handler() {
        notes.listnotes()
    }
})

yargs.command({
    command: 'read' ,
    describe: 'rad the content',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readnote(argv.title)
    }
})

yargs.parse()





//add, remove, read, list

//console.log(yargs.argv)