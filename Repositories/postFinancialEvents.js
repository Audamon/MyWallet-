import connection from "../src/database.js";

async function postFinancialEventsDB({user, value, type}){
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [user.id, value, type]
      );
}
export { postFinancialEventsDB };