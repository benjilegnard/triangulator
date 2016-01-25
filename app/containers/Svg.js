import React, { Component, PropTypes } from 'react'
import Triangle from '../components/Triangle'

export default class Svg extends Component {
    render() {
        const {triangles} = this.props;
        return (<svg
                version="1.1"
                xmlns="http://www.w3.org"
                viewbox="0 0 {width} {height}">
            {triangles.map((triangle)=><Triangle />)}
            </svg>)
    }
}
Svg.propTypes = {
    triangles : PropTypes.array
};

