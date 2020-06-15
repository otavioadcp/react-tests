import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


function App() {

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <AppBar position='fixed'>
      <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <List style={{width: '240px'}}>
          {['Fardão','Fardinho','Usuário'].map((name, index) => (
            <ListItem button key={name}>
            <ListItemIcon> {index > 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
          ))}
        </List>
      </Drawer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>
        <Button variant="contained" color="secondary">
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
