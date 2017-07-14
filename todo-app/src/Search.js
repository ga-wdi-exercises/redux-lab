import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <input type="search"/>
                <input type="submit" value="Add Todo" onClick={(e)=>this.props.addSubmit(e)}/>
            </div>
        );
    }
}