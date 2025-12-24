import express from "express";

const app = express();

app.post("/", (req, res) => {
    

});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});