import React, { Component, PropTypes } from 'react';
import Tool from '../components/Tool'

export default class ToolBar extends Component{
    render(){
        const {tools = [], selectedTool} = this.props;

        return (<nav>
            <ul>
                {tools.map((tool)=> (<Tool title={tool.title} action={tool.action}/>))}
            </ul>
        </nav>)
    }
}

ToolBar.propTypes = {
  tools : PropTypes.array
};