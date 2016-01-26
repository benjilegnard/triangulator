import React, { Component, PropTypes } from 'react'
import Triangle from '../components/Triangle'

export default class Svg extends Component {
    render() {
        const {width=640,height=480} = this.props;
        return (<svg
                version="1.1"
                xmlns="http://www.w3.org"
                viewBox="0 0 640 480">
            </svg>)
        //{triangles.map((triangle)=><Triangle />)}

    }
}
Svg.propTypes = {
    triangles : PropTypes.array,
    width : PropTypes.number,
    height : PropTypes.number
};

