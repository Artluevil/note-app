import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Note extends Component {
    state = {

    }

    render() {
        const { id, description, text} = this.props.note
        const ntStyle = this.props.note.clicked ? noteStyleClicked : noteStyle 
        return (
            <div onClick={this.props.onHandleClick.bind(this, id)} style={ntStyle}>
                <p>{description.substr(0, 30)}</p>
                <p>{text.substr(0, 40)}</p>
            </div>
        )
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired
}

const noteStyle = {
    background: '#e2e2e2',
    padding: '5px',
    textAlign: 'center',
    borderBottom: '1px solid black',
    cursor: 'pointer',
}

const noteStyleClicked = {
    background: '#d6e5ff',
    padding: '5px',
    textAlign: 'center',
    borderBottom: '1px solid black',
    cursor: 'pointer',
    paddingBottom: '40px'
}
