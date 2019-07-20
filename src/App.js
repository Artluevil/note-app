import React, { Component } from 'react'
import Header from './components/Header'
import LeftPanel from './components/LeftPanel'
import MiddlePanel from './components/MiddlePanel'


export default class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        number: 1,
        description: "Meetings",
        text: "+ Meeting with boss, + Dinner with wife",
        clicked: true
      },
      {
        id: 1,
        number: 2,
        description: "Stuff i need work at",
        text: "+ Learning proggraming",
        clicked: false
      },
    ],
    noteClicked: 0
  }


  onHandleClick = (id) => {
    this.setState({notes: this.state.notes.map(note => {
      if(note.clicked === true) {
        note.clicked = false
      }
      else if(note.id === id) {
        note.clicked = !note.clicked
      }
      return note;
    }) });
    this.setState({ noteClicked: id})
  }

  onAddClick = () => {
    const newNote = {
      id: this.state.notes[this.state.notes.length - 1].id + 1,
      number: this.state.notes[this.state.notes.length - 1].id + 1,
      description: "Your Description...",
      text: "Your Notes...",
      clicked: false
    }
    const newNotes = this.state.notes.slice()
    newNotes.push(newNote)
    this.setState({ notes: newNotes})
  }

  onHandleDescription = (event) => {
    this.state.notes.filter(note => {
      if(note.clicked === true) {
        note.description = event.target.value
        this.setState({
          note: note
        })
        console.log(note)
      }return note
    })
  }

  onHandleText = (event) => {
    this.state.notes.filter(note => {
      if(note.clicked === true) {
        note.text = event.target.value
        this.setState({
          note: note
        })
        console.log(note)
      }return note
    })

  }

  render() {
    return (
      <div>
        <meta charset="utf-8" />
        <Header />
        <div style={pnlsStyle}>
          <LeftPanel onDeleteClick={this.onDeleteClick} onAddClick={this.onAddClick} onHandleClick={this.onHandleClick} notes={this.state.notes} />
          <MiddlePanel clicked={this.state.noteClicked} onHandleDescription={this.onHandleDescription} onHandleText={this.onHandleText} notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

const pnlsStyle = {
    display: 'flex'
}

