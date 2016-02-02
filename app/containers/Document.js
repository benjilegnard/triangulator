import React, { Component, PropTypes } from 'react'
import Svg from '../containers/Svg'
import Image from '../containers/Image'
import ControlPoints from '../containers/ControlPoints'

class Document extends Component {
    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>
                {' '}
                (<a href="#"
                    onClick={this.handleDismissClick}>
                Dismiss
            </a>)
            </p>
        )
    }
    render() {
        const {triangles,points} = this.props;
    return (
        <div id="document">
            <Image/>
            <Svg>{triangles}</Svg>
            <ControlPoints>{points}</ControlPoints>
            {this.renderErrorMessage()}
        </div>
        )
    }
}