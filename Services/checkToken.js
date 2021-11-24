import jwt from "jsonwebtoken";

async function checkToken({token}){
    let user;
    
      user = jwt.verify(token, process.env.JWT_SECRET);
      return user;

}
export { checkToken };