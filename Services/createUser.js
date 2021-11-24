import { checkEmail } from "../Repositories/checkEmail.js";
import { createDBUser } from "../Repositories/createUser.js";

async function createUser({email, name, password}){
    const existingUserWithGivenEmail = await checkEmail({email});
      if (existingUserWithGivenEmail.rows[0]) {
        return null;
      }
  
     const result = await createDBUser({email, name, password});
      return result.rowCount;
}
export {createUser};