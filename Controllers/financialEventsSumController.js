import { getFinancialEvents } from "../Repositories/getFinancialEvents.js";
import { checkToken } from "../Services/checkToken.js";
import { sumFinancialEvents } from "../Services/sumFinancialEvents.js";

async function financialEventsSum(req, res) {
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
    
        const sum = await sumFinancialEvents({events});
    
        res.send({ sum });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}
export { financialEventsSum };