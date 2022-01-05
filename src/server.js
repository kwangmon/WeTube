import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
//sandwich

//middleware


//middleware

//app.get("/", () => console.log("Somebody is trying to go home.")); or
const home = (req, res) => {
    return res.send("hello");
  };
  
const login = (req, res) => {
    return res.send("login");
  };


app.use(logger);

app.get("/", handleHome);
app.get("/login", handleLogin);

//sandwich
const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT}!`);

app.listen(PORT, handleListening);