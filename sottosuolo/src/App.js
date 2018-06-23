import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Content from './Content'


const styles = {
  appBar:{
    boxShadow: 'none',
    backgroundColor:'white',
    minHeight:'95px'
  },
  visible:{ 
    boxShadow: 'none',
    backgroundColor:'#1d1c1a',
    animation: 'fadeMe 0.5s'
  },
  leftAppbar:{
    color:'#1d1c1a'
  },
  leftAppbarVisible:{
    color:'white'
  }
}

class App extends Component {
  state = {
    isTop: true,
  }

  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      } 
    })
  }

  render () {
    const {isTop}=this.state
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="fixed"  className={isTop ? classes.appBar : classes.visible}>
        <div className="App-bar-contents-container">
        <div>
        { !isTop &&<Typography variant="title" color="inherit" >
             <img src='./images/sottosuolo.jpg' className= "App-logo" width="50"/>
          </Typography>}
          </div>
         <Tabs className={isTop? classes.leftAppbar : classes.leftAppbarVisible}>
            <Tab label="About" />
            <Tab label="Events" />
            <Tab label="Contact us" href="#basic-tabs" />
         </Tabs>
         </div> 
        </AppBar>
        <Content/>
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>   
      </div>)
    
  }
}
export default withStyles(styles)(App);