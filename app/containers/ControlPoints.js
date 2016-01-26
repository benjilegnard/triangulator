import React, { Component, PropTypes } from 'react'
import Point from '../components/Point'

export default class ControlPoints extends Component {

    render() {
        const {points} = this.props;

        return (<svg
                version="1.1"
                xmlns="http://www.w3.org"
                viewBox="0 0 640 480">
            </svg>);
        // {points.map((point)=>(<circle r="2" cx={point.x} cy={point.y} />))}


    }

}
ControlPoints.propTypes = {
    points : PropTypes.array
};

