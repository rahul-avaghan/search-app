import {CampaignAction} from "../actions/campaignactions";
import {
    CAMPAIGN_SEARCH_RESULTS_READY,
    INITIATE_CAMPAIGN_SEARCH,
    ON_CAMPAIGN_PAGE_CHANGE
} from "../actions/campaignaction.type";
import initialState from "../store/initialstate";

function campaignReducer(state = initialState, action: CampaignAction) {
    switch (action.type) {
        case INITIATE_CAMPAIGN_SEARCH:
            return {
                ...state
            };
        case CAMPAIGN_SEARCH_RESULTS_READY:
            return {
                ...state,
                campaigns: action.campaigns,
                searchQuery: action.searchQuery
            };
        case ON_CAMPAIGN_PAGE_CHANGE:
            return {
                ...state,
                totalCampaigns: action.totalCampaigns,
                currentPage: action.currentPage
            };
        default:
            return {
                ...state
            };
    }
}

export default campaignReducer;
