const express = require("express");
const cors = require("cors");
const bodyParser=require('body-parser');
const users = require("./user")
const app = express();


app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));// REST API
app.use(bodyParser.json());

const { getCompliment,getFortune,getPlace,getFood , getPerson,getForm,getAllUsers, createUser,updateUser,deleteUser} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/place", getPlace);
app.get("/api/food", getFood);
app.get("/api/person", getPerson);
app.get("/api/form", getForm);


//  REST API
// used thunder client to test GET,POST,PUT and DELETE Method

app.get("/users",getAllUsers);

// check the link to see the data : http://localhost:4000/users

app.post("/users",createUser);
app.put("/users/:id",updateUser);
app.delete("/users/:id",deleteUser);

//listen server

app.listen(4000, () => console.log("Server running on 4000"));
