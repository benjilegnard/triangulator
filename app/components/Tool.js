import {Component, PropTypes} from 'react';

/**
 * A button entry in the toolbar.
 * Created by jibhaine on 24/01/16.
 */
export default class Tool extends Component {
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