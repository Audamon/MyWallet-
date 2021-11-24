
import { createUser } from "../Services/createUser.js";

async function signUp(req, res) {
    try {
        const { name, email, password } = req.body;
    
        if (!name || !email || !password) {
          return res.sendStatus(400);
        }
        const user = await createUser({name, email, password});
        if(!user){
          return res.sendStatus(409);
        }
        return res.sendStatus(201);
      } catch (err) {
        console.error(err);
        return res.sendStatus(500);
      }
}
export { signUp };