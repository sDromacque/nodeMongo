var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo');

// Create a schema
var TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now },
});
// Create a model based on the schema
var Todo = mongoose.model('Todo', TodoSchema);

var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
// Save it to database
todo.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(todo);
});