import express from "express";
import cors from "cors";

import * as signUpController from '../Controllers/signUpController.js';
import * as signInController from '../Controllers/signInController.js';
import * as financialEventsPostController from '../Controllers/financialEventsPostController.js';
import * as financialEventsGetController from '../Controllers/financialEventsGetController.js';
import * as financialEventsSumController from '../Controllers/financialEventsSumController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", signUpController.signUp);

app.post("/sign-in", signInController.signIn);

app.post("/financial-events", financialEventsPostController.financialEvents);

app.get("/financial-events", financialEventsGetController.financialEvents);

app.get("/financial-events/sum", financialEventsSumController.financialEventsSum);

export default app;
