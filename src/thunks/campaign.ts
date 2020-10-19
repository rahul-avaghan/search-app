import {
  initiateSearchCampaign,
  onCampaignPageChange,
  onCampaignSearchResultsReady
} from "../actions/campaignactions";
import campaigns from "../data.json";
import { Dispatch } from "redux";

const pageSize = 10;
function filterCampaignsByName(searchQuery: string) {
  return campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export const onSearchCampaign = (query: string) => (dispatch: Dispatch) => {
  if (!query || query.trim().length === 0) {
    dispatch(onCampaignSearchResultsReady(query, []));
    dispatch(onCampaignPageChange(1, 0));
    return;
  }
  dispatch(initiateSearchCampaign());

  const foundCampaigns = filterCampaignsByName(query);

  dispatch(onCampaignSearchResultsReady(query, foundCampaigns.slice(0, 10)));
  dispatch(
    onCampaignPageChange(1, Math.ceil(foundCampaigns.length / pageSize))
  );
};

export const onPageChangeHandler = (pageNumber: number) => (
  dispatch: Dispatch,
  getState: any
) => {
  const state = getState();
  const begin = (pageNumber - 1) * pageSize;
  const end = begin + pageSize;
  const { searchQuery } = state.campaign;
  const foundCampaigns = filterCampaignsByName(searchQuery);
  const campaignsForPage = foundCampaigns.slice(begin, end);
  dispatch(onCampaignSearchResultsReady(searchQuery, campaignsForPage));
  dispatch(
    onCampaignPageChange(
      pageNumber,
      Math.ceil(foundCampaigns.length / pageSize)
    )
  );
};
