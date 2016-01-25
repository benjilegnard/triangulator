import React, { Component, PropTypes } from 'react'
import Svg from '../containers/Svg'
import Image from '../containers/Image'
import ControlPoints from '../containers/ControlPoints'

export default class Document extends Component {
    render() {
        const {triangles,points} = this.props;
    return (
        <div id="document">
            <Image/>
            <Svg>{triangles}</Svg>
            <ControlPoints>{points}</ControlPoints>
        </div>
        )
    }
}