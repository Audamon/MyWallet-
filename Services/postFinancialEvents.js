import {postFinancialEventsDB} from '../Repositories/postFinancialEvents.js'
async function postFinancialEvents({user, type, value}){
    postFinancialEventsDB({user, type, value});

}
export {postFinancialEvents};