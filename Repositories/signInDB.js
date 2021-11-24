import connection from "../src/database.js";

async function sigInDB({email}){
    const user = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
      return user;
}
export { sigInDB };