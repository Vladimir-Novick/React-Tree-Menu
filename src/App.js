import React, { Component ,useRef, useCallback, useState} from 'react';
import './App.css';
import TreeExplorer from './components/TaskPanel/TreeExplorer';
import LeftBarExplorer from './components/LeftBar/LeftBarExplorer.js';
import {  Route,  withRouter,Switch } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,

  Drawer,
  List,
  IconButton,
  
  Divider,

 
} from "@material-ui/core";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(6),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '48px',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
      paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    tableRoot: {
      height: '100%',
      width: '100%',
    },

    fixedIconWidth:{
      width: '54px',
      height:'100%',
      padding: '0'
    },
    fixedTree:{
      width: '300px',
      height:'100%',
      padding: '0'
    },
    content_1: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      //New data
      accountAvatar: {
        backgroundColor: theme.palette.secondary.main,
        height: 24,
        width: 24,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
          marginLeft: theme.spacing(1.5),
          marginRight: theme.spacing(1.5),
        },
      },

  }));

  function NavBar(props) {
   const  classess = useStyles();  
   const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
     setOpen(true);
   };
   const handleDrawerClose = () => {
     setOpen(false);
   };

   return (
  
    <List>
    <Table className = {classess.tableRoot}>
<TableBody >
<TableRow>
<TableCell className = {classess.fixedIconWidth}>
<LeftBarExplorer />
</TableCell>     
<TableCell className = {classess.fixedTree}>

<TreeExplorer />

</TableCell>  
  </TableRow>
  </TableBody>
  </Table>
  </List>

   );

  };

class App extends Component {

  render() {
    return (
      <div className="App">
 
        <NavBar/>
  
    
        </div>
      
    );
  }
}

export default App;