import jwt from "jsonwebtoken"


function createToken(id:string, email:string, expiresIn) {
    const payload = { id , email}
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token
}




export {
    createToken
}