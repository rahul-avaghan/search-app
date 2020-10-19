import {connect} from "react-redux";
import CampaignList from "./CompaignList";

export default connect(
    (state: any): React.ComponentProps<typeof CampaignList> => ({
       campaigns: state.campaign.campaigns,
        searchQuery: state.campaign.searchQuery
    })
)(CampaignList);
