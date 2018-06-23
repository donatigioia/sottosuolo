import React, { Component } from 'react'
import './Content.css'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  appbar: {
    backgroundColor: 'white',
    boxShadow: 'none'
  }
}

function Content (props) {
  return (
    <div className='container'>
      <img src='./images/sottosuolo.jpg' />
    </div>
  )
}

export default withStyles(styles)(Content)  