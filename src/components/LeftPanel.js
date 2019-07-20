import React, { Component } from 'react'
import Notes from './Notes'
import ControlPanel from './ControlPanel'

export default class LeftPanel extends Component {
    render() {
        return (
            <div style={pnlStyle}>
                <div className="input-group mb-3" style={{ marginBottom: '0px'}}>
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Find</button>
                        </div>
                </div>
                <div style={cntrlStyle}>
                    <ControlPanel onDeleteClick={this.props.onDeleteClick} onAddClick={this.props.onAddClick}/>
                </div>
                <Notes onHandleClick={this.props.onHandleClick} notes={this.props.notes}/>
            </div>
        )
    }
}

const pnlStyle = {
    background: '#f4f4f4',
    flexBasis: '20%',
    borderRight: '1px solid #bababa',
    borderTop: '1px solid #bababa',
}

const cntrlStyle = {
    background: '#abc3ea',
    padding: '2px',
    marginTop: '0px'
}