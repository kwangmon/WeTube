import express from "express";

const PORT = 4000;

const app = express();
//sandwich

//app.get("/", () => console.log("Somebody is trying to go home.")); or
const handleHome = (req, res) => {
    return res.send("i still love you!");
};

const handleLogin = (req, res) => {
    return res.send("Login here!")
};

app.get("/", handleHome);
app.get("/login", handleLogin);

//sandwich
const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}!`);

app.listen(PORT, handleListening);