import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h2 style ={notieStyle}>Notie</h2>
            </div>
        )
    }
}

const headerStyle = {
    background: '#f4f4f4',
    padding: '10px 20px'
}

const notieStyle = {
    color: '#777777',
    marginLeft: '15px',
    fontFamily: 'Verdana'
}
