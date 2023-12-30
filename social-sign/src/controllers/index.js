import path from "path"

function httpHomePage (req, res) {
    const filePath = path.resolve(process.cwd(), "src/public/index.html");
    res.sendFile(filePath);
};

function httpLogin(req, res){
    console.log(req.user)
    console.log("USER DETAILS IN LOGIN CONTROLLER")
}

function httpFailure(req, res){
    res.send("unable to login")
}
export {
    httpHomePage,
    httpLogin,
    httpFailure
}