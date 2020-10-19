import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../thunks/campaign";
import SearchBlock from "./SearchBlock";

export default connect(
    () => {},
    (dispatch) => bindActionCreators(actions, dispatch),
)(SearchBlock);
