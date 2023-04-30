const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const placeBtn= document.getElementById("placeBtn")
const foodBtn= document.getElementById("foodBtn")
const gratitudeBtn = document.getElementById("gratitudeBtn")

//find the form elements
const form = document.querySelector('form')
const name = form.querySelector("#name")
const email = form.querySelector("#email")
const password = form.querySelector("#password")
//console.log(name)
//console.log(email)
//console.log(password)


//add the listener with form 

form.addEventListener('submit',formHandler)
function formHandler(e) {
    e.preventDefault(); // to prevent auto refresh
    console.log("successfully submitted")
    //console.log(name.value);
    //console.log(email.value);
    //console.log(password.value);


    const userInfo ={
        name : name.value,
        email : email.value,
        password: password.value


    }

 
    // after submit to clear the value
    name.value="";
    email.value="";
    password.value="";
    console.log(userInfo);

 
}

//POST 
const getForm = () => {
axios.get("http://localhost:4000/api/form/")
.then((res) => {
    const data = res.data;
    alert(data);
});

};


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune= () => {
    console.log("Sending Request....");
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getPlace= () => {
    console.log("Sending Request....");
    axios.get("http://localhost:4000/api/place/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFood= () => {
    console.log("Sending Request....");
    axios.get("http://localhost:4000/api/food/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getPerson= () => {
    console.log("Sending Request....");
    axios.get("http://localhost:4000/api/person/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};





complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', getFortune)

placeBtn.addEventListener('click', getPlace)

foodBtn.addEventListener('click', getFood)
gratitudeBtn.addEventListener('click', getPerson)

