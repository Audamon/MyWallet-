import { postFinancialEvents } from "../Services/postFinancialEvents.js";
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
    
        const { value, type } = req.body;
    
        if (!value || !type) {
          return res.sendStatus(400);
        }
    
        if (!['INCOME', 'OUTCOME'].includes(type)) {
          return res.sendStatus(400);
        }
    
        if (value < 0) {
          return res.sendStatus(400);
        }
        postFinancialEvents({user, value, type});
    
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}
export { financialEvents };