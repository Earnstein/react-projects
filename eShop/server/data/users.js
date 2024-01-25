import bcrypt from "bcrypt";

const users = [
    {
        name: "Earnstein damilola",
        email:"admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Jazzy onuegbu",
        email:"jazzy@email.com",
        password: bcrypt.hashSync("123456", 10),
     
    },
    {
        name: "Jacob oluwole",
        email:"jacob@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
]

export default users