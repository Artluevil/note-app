import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MiddlePanel extends Component {
    render() {
        const index = this.props.clicked
        return(
            <div style={mdlPanel}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Max. 30 letters</span>
                    </div>
                        <input 
                        maxLength="30" 
                        onChange={this.props.onHandleDescription} 
                        value={this.props.notes[index].description} 
                        type="text" 
                        className="form-control" 
                        placeholder="Type here..." 
                        aria-describedby="basic-addon1"/>
                    </div>
                    <div class="form-group">
                        <label style={{marginLeft: '10px'}} for="exampleFormControlTextarea1">Your notes:</label>
                        <textarea onChange={this.props.onHandleText} value={this.props.notes[index].text}  className="form-control" id="exampleFormControlTextarea1" rows="30"></textarea>
                    </div>
            </div>
        )
    }
}

MiddlePanel.propTypes = {
    notes: PropTypes.array.isRequired
}

const mdlPanel = {
    background: '#f4f4f4',
    flexBasis: '80%',
    borderTop: '1px solid #bababa',
    paddingBottom: '40%'
}