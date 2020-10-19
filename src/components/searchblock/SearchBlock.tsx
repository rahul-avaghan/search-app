import React, {ChangeEvent} from "react";
import './searchblock.css';
import {RawCampaign} from "../../models/RawCampaign";

type Props = {
    onSearchCampaign(searchQuery: string): void,
    children?: React.ReactNode
};
export default function SearchBlock({onSearchCampaign}: Props) {

    const handleChange = (changeEvent: any) => {
        changeEvent.preventDefault();

        onSearchCampaign(changeEvent.target.value);
    };

    return (
        <div className="search-box-wrapper">
            <input onChange={handleChange} placeholder="Search for campaigns" className="text-input"/>
        </div>
    )
}
