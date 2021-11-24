import { getFinancialEvents } from "../Services/getFinancialEvents.js";
import { checkToken } from "../Services/checkToken.js";

async function financialEvents(req, res) {
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.split('Bearer ')[1];
    
        if (!token) {
          return res.sendStatus(401);
        }
    
        let user;
    
        try {
          user = await checkToken({token});
        } catch {
          return res.sendStatus(401);
        }
    
        const events = await getFinancialEvents({user});
        res.send(events.rows);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}
export { financialEvents };