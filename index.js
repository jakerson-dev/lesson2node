
const express = require("express");
const app = express();

const PORT = 4000;

app.get('/', (request, response) => {
    const student = {
        id: 134,
        firstName: "Joe",
        lastName: "Doe",
    };
    return response.status(200).json(student);
});

app.post('/postRequest', (request, response) => {

    return response.send('Hello This is POST');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});