import React, { Component } from 'react'

export default class ControlPanel extends Component {
    render() {
        return (
            <div style={{display: 'flex', alignItems: 'right', justifyContent: 'right'}}>
                <h2 onClick={this.props.onAddClick} style={addBtn}>+</h2>
            </div>
        )
    }
}

const addBtn = {
    display: 'inline-flex', 
    marginRight: '20px', 
    cursor: 'pointer'
}
