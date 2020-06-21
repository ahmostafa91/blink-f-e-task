import React from 'react';
import { Grid } from "@material-ui/core";
import SideNav from '../components/sideNav/SideNav';
import Contacts from '../components/contacts/Contacts';
import './App.scss';
import Chatbox from '../components/chatbox/ChatBox';

function App() {
  return (
    <>
    <main>
      
        <Grid container>
          <Grid item xs={1}>
            <SideNav />
          </Grid>
          <Grid item xs={3}>
            <Contacts />
          </Grid>
          <Grid item xs={8}>
            <Chatbox />
          </Grid>
        </Grid>
      
    </main>
    </>
  );
}

export default App;
