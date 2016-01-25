import {Component,PropTypes} from 'react';

export default class Point extends Component {
    render() {
        const {points} = this.props;
        return (<polygon
            id=""
            style='fill:{this.props.color};stroke:0;'
            points={points}
        />)
    }
}

Point.propTypes = {
    x:PropTypes.number,
    y:PropTypes.number,
    color:PropTypes.string,
    triangles:PropTypes.array,
    onDrag :PropTypes.func,
    onDrop :PropTypes.func,
    onClick :PropTypes.func
};
