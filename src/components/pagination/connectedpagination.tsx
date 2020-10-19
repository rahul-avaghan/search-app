import {connect} from "react-redux";
import {Pagination} from "./Pagination";
import {Store} from "../../store/store";
import {bindActionCreators} from "redux";
import * as actions from "../../thunks/campaign";

export default connect(
    (state: any): Partial<React.ComponentProps<typeof Pagination>> => (
        {
        totalPages: state.campaign.totalCampaigns || 0,
        currentPage: state.campaign.currentPage || 1
    }),
    (dispatch) => bindActionCreators(actions, dispatch),
)(Pagination);
