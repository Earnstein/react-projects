import app from "./src/app.js";


const PORT = 3000;

async function startServer(){
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    })
}

startServer();

