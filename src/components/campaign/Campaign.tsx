import React from "react";
import './campaign.css';
type Props = {
    name: string,
    type: string
    company: string
};

export default function Campaign({name, type, company}: Props) {
    return (
        <div className="campaign">
            <h1 className="name">{name}</h1>
            <h4 className="type truncated-text">Type: {type}</h4>
            <p className="company">Company: {company}</p>
        </div>
    )
}
