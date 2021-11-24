import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sigInDB } from "../Repositories/signInDB.js";

async function signInUser({email, password}){
    const user = await sigInDB({email});
    if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
        return null;
    }
    const token = jwt.sign({
        id: user.rows[0].id
      }, process.env.JWT_SECRET);
      return {token};
}
export { signInUser };