import {CAMPAIGN_SEARCH_RESULTS_READY, INITIATE_CAMPAIGN_SEARCH, ON_CAMPAIGN_PAGE_CHANGE} from "./campaignaction.type";
import {Action} from "redux";
import {RawCampaign} from "../models/RawCampaign";

export type CampaignAction = Action<string> & {
    campaigns: Array<RawCampaign>,
    searchQuery: string,
    totalCampaigns: number;
    currentPage: number;
}

export const initiateSearchCampaign = () => ({
    type: INITIATE_CAMPAIGN_SEARCH,
});


export const onCampaignSearchResultsReady = (searchQuery: string, campaigns: Array<RawCampaign>) => ({
    type: CAMPAIGN_SEARCH_RESULTS_READY,
    searchQuery,
    campaigns,
});


export const onCampaignPageChange = (currentPage: number, totalCampaigns: number) => ({
    type: ON_CAMPAIGN_PAGE_CHANGE,
    totalCampaigns,
    currentPage
});
