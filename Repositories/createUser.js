import bcrypt from "bcrypt";
import connection from "../src/database.js";

async function createDBUser({email, name, password}){
    const hashedPassword = bcrypt.hashSync(password, 12);
    const result = await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );
      return result;
}
export { createDBUser };