import { getFinancialEventsDB } from "../Repositories/getFinancialEvents";

async function getFinancialEvents({user}) {
    const events = await getFinancialEventsDB({user});
    return events;
}
export { getFinancialEvents };