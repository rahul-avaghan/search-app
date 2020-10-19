import { combineReducers } from 'redux';
import campaignReducer from "./campaignreducer";
export default combineReducers({
    campaign: campaignReducer,
});
