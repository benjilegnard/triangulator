import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Triangle from '../components/Triangle'

class Svg extends Component {
    constructor(props) {
        super(props);
        this.selectTriangle = this.selectTriangle.bind(this);
    }
    render() {
        const {width=640,height=480, store, triangles} = this.props;
        return (<svg
                version="1.1"
                xmlns="http://www.w3.org"
                viewBox="0 0 640 480">
                {triangles.map((triangle)=><Triangle />)}
            </svg>)

    }
}

Svg.propTypes = {
    selectTriangle : PropTypes.func.isRequired,
    triangles : PropTypes.array,
    width : PropTypes.number,
    height : PropTypes.number
};

function mapStateToProps(state){

}

export default connect(mapStateToProps)(Svg)
