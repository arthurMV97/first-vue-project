const express = require('express')
const Mongoose = require('mongoose')
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Mongoose.set('useFindAndModify', false);
Mongoose.connect("mongodb://localhost:27017/todo-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const TodoModel = Mongoose.model("todos", {
    name: String, 
    id: Number, 
    createdAt: String,
    todo: Boolean
})

app.post("/todo", async (req, res) => {
  try {
  let newTodo = new TodoModel(req.body);
  console.log(req.body);
 newTodo.save(function (err, result) {
    if (err) throw err;
    res.send(result);
  });
  

  } catch (error) {
  res.status(500).send(error);
}
})

app.get("/todo", async (req, res) => {
  try {
    const result = await TodoModel.find();
    res.send(result)
  } catch (error) {
    res.status(500).send(error);

  }
})

app.get("/todo/:id", async (req, res) => {
  try {
    let id = req.params.id
    console.log(id)
    const result = await TodoModel.find({id: id});
    console.log(result)

    res.send(result)
  } catch (error) {
    res.status(500).send(error);

  }
})

app.put("/todo/:id", async (req, res) =>{
  try {
    let id = req.params.id
    const result = await TodoModel.find({id: id});
    const result2 = await TodoModel.findOneAndUpdate({id: id}, {$set:{todo:!result[0].todo}}, {new: true})
    res.send(result2)

  } catch (error) {
    
  }
})
  app.listen(3000, () => {
    console.log("http://localhost:3000/");
    console.log("!==> Success <==! all is good");
  });