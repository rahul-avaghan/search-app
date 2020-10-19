import {RawCampaign} from "../models/RawCampaign";

export interface Store {
    campaigns: Array<RawCampaign>;
    searchQuery: string;
    totalCampaigns: number;
    currentPage: number;
}

