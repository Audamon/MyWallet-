import connection from "../src/database.js";

async function getFinancialEventsDB({user}){
    const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
      );
      return events;
}
export { getFinancialEventsDB };