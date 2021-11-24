import connection from "../src/database.js";

async function checkEmail({email}){
    const result = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
      return result;
}
export { checkEmail };