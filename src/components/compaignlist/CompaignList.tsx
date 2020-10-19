import React from "react";
import {RawCampaign} from "../../models/RawCampaign";
import Campaign from "../campaign/Campaign";
import './campainlist.css';

type Props = {
    campaigns: Array<RawCampaign> | undefined,
    searchQuery: string,
    children?: React.ReactNode
};
const CampaignList = ({campaigns, searchQuery}: Props) => {
    if (!campaigns || !searchQuery || searchQuery.trim().length === 0) {
        return null;
    }
    return (
        <div className="campaign-container">
            {
                campaigns.length === 0
                && <div className="warning-message">
                    No campaigns for the selected query.
                </div>
            }
            {campaigns.map(campaign =>
                <Campaign
                    key={campaign._id}
                    name={campaign.name}
                    type={campaign.type}
                    company={campaign.company}
                />)}
        </div>
    )
};

export default CampaignList;
