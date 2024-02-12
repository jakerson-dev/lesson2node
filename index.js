
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 4000;

//Route
//GET
//2 params (path, callback function (req,res))
app.get('/user', (_, response) => {

    const user = {
        id: 1,
        email: "johndoe@gmail.com"
    };


    response.status(200).json(user.id);
});

//POST
app.post('/user/create',(request,response) => {
    console.log(request.body);
    response.status(200).json({
        success: true,
        status: 200
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});