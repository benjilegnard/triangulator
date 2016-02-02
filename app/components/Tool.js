import {Component, PropTypes} from 'react';
import { connect } from 'react-redux'

/**
 * A button entry in the toolbar.
 * Created by jibhaine on 24/01/16.
 */
class Tool extends Component {
    render() {
        const {actionName, text, toolClicked } = this.props;

        return (<li><a title={actionName} onclick={toolClicked}>{text}</a></li>)
    }
}

Tool.propTypes = {
    actionName:PropTypes.string,
    toolClicked:PropTypes.func,
    text:PropTypes.string
};

function mapStateToProps(state) {
    return {
        selected: state.selectedTool,
        inputValue: state.routing.location.pathname.substring(1)
    }
}

export default connect(mapStateToProps)(Tool);