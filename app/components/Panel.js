import {Component, PropTypes} from 'react';

/**
 * Created by jibhaine on 24/01/16.
 */
export default class Panel extends Component {
    render(){

    }
}

Panel.propTypes = {
  title : PropTypes.string,
  opened : PropTypes.boolean,
  content : PropTypes.string
};