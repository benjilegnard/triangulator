import {Component,PropTypes} from 'react';

export default class Triangle extends Component {
    render() {
        return (<polygon
            id=""
            style='fill:{this.props.color};stroke:0;'
            points=""
        />)
    }
}

Triangle.propTypes = {
    color:PropTypes.string,
    points:PropTypes.array,
    onTriangleClicked :PropTypes.func
};
