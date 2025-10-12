import jwt from "jsonwebtoken";

const generateToken = ( userId, res) => {
    const {JWT_SECRET} = process.env;
    if(!JWT_SECRET) { 
        throw new Error("JWT_SECRET is not defined in environment variables");
    };

    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "7d"});

    res.cookie('jwt', token, {
        maxAge: 7*24*60*60*1000,
        httpOnly: true, //prevent xss attacks
        sameSite: "strict", // csrf attacks
        secure: process.env.NODE_ENV === "development" ? false : true, //https 
    });

    return token
}

export { generateToken };