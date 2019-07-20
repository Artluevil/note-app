import React, { Component } from 'react'
import Note from './Note'
import PropTypes from 'prop-types'

export default class Notes extends Component {
    render() {
        return this.props.notes.map(note => (
            <Note onHandleClick={this.props.onHandleClick} key={note.id} note={note}/>
        ))
    }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired
}
