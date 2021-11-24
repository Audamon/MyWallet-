import { signInUser } from "../Services/sigInUser.js";

async function signIn(req, res) {
    try {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.sendStatus(400);
        }
        const user = await signInUser({email, password});

        if (!user) {
          return res.sendStatus(401);
        }
    
        res.send({
          token: user.token
        });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}
export { signIn };