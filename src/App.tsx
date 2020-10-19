import React from 'react';
import './App.css';
import ConnectedCampaigns from "./components/compaignlist/connectedcampaignlist";
import ConnectedSearchBlock from "./components/searchblock/connectedsearchblock";
import ConnectedPagination from "./components/pagination/connectedpagination";


function App() {

    return (
        <div>
            <div className="app-header">
                <h4>Search for campaigns</h4>
            </div>
            <ConnectedSearchBlock/>
            <ConnectedCampaigns/>
            <ConnectedPagination/>
        </div>
    );
}

export default App;
