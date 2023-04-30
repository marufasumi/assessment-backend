
const users = require("./user")
const { v4: uuidv4 } = require("uuid");
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["All the troubles you have will pass away very quickly.", "All the effort you are making will ultimately pay off.", "Any decision you have to make tomorrow is a good decision.","Allow compassion to guide your decisions","Believe in yourself and others will too."];
      
        // choose random Fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        console.log("request received and sending response")
 
        res.status(200).send(randomFortune);
        
    },
    getPlace: (req, res) => {
        const places = ["Grand Canyon National Park", "Yellowstone National Park.", "Yosemite National Park","Niagra Falls","Olympic National Park"];
      
        // choose random Place
        let randomIndex = Math.floor(Math.random() * places.length);
        let randomPlace = places[randomIndex];
        console.log("request received and sending response")
 
        res.status(200).send(randomPlace);
        
    },
    getFood: (req, res) => {
        const foods = ["Chicken Biriyani", "Kacchi Biriyani", "Pizza ","Butter Chicken","Ice Cream","Dosa","Golabjamun"];
      
        // choose random Food
        let randomIndex = Math.floor(Math.random() * foods.length);
        let randomFood = foods[randomIndex];
        console.log("request received and sending response")
 
        res.status(200).send(randomFood);
        
    },

    getPerson: (req, res) => {
        const persons = ["Dad", "Mom", "Grandpa","Grandma","Siblings","Friends","Teachers"];
      
        // choose random person
        let randomIndex = Math.floor(Math.random() * persons.length);
        let randomPerson = persons[randomIndex];
        console.log("request received and sending response")
 
        res.status(200).send(randomPerson);


},
   getForm: (req, res) => {

    res.status(200).send(`request received and sending response `);
},
 // REST API
 // GET user
 getAllUsers :(req,res)=>{
    res.status(200).json({users})
   
   },

   //create user
  createUser :(req,res)=>{
    const newUser ={
        id:uuidv4(),
        username: req.body.username,
        email: req.body.email

    }

    users.push(newUser);

    res.status(200).json({users})
    
   },

   // Update users
   updateUser :(req,res)=>{
    // to get the id to update
    const userid = req.params.id;

    // update data
    const {username,email}=req.body;
    // filter all ids to match id
    users.filter((user)=>user.id===userid).map(
        (selecteduser)=>{
            selecteduser.username=username;
            selecteduser.email=email;
        }
    )
    
 
    res.status(200).json({users})
    
   },

   //Delete User
   deleteUser :(req,res)=>{
    // to get the id to delete
    const userid = req.params.id;
    const filterusers =users.filter((user)=> user.id !== userid)  // get all ids except the id to be deleted
    
 
    res.status(200).json({filterusers});
    
   }



}