import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import ActivityFeed from './Components/ActivityFeed/ActivityFeed.jsx';
import CallDetail from './Pages/CallDetail.jsx';
import call_list from './Components/Assets/call_list_object.js';
import ArchievedFeed from './Components/ArchivedFeed/ArchievedFeed.jsx';

const App = () => {

  //Get the API
  const url = "https://aircall-backend.onrender.com/activities/";

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json()).then(json =>{
      console.log("jsoonnnnn", json);
      setCalls(json);
    }).catch(e => { 
      console.log("e", e)
    })
  }, [])
  
  //Function to Archive Call with Specific IDs
  const archiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, is_archived: true } : call));
  };

  //Function to Unarchive Call with Specific IDs
  const unarchiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, is_archived: false } : call));
  };

  //Function to Archive all Calls 
  const archiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, is_archived: true })));
  };

  //Function to Unarchive all Calls
  const unarchiveAllCalls = () => {
    setCalls(calls.map(call => ({ ...call, is_archived: false })));
  };

  //Active and Archive Calls Wrapper
  const CallList = () => (
    <div className='call-list-tabs-wrapper'>
      <Tabs>
        <TabList>
          <Tab>Activity Feed</Tab>
          <Tab>Archived Calls</Tab>
        </TabList>

        <TabPanel>
          <ActivityFeed calls={calls} archiveCall={archiveCall} archiveAllCalls={archiveAllCalls} />
        </TabPanel>
        <TabPanel>
          <ArchievedFeed calls={calls} unarchiveCall={unarchiveCall} unarchiveAllCalls={unarchiveAllCalls} />
        </TabPanel>
      </Tabs>
      
    </div>
  );

  //Returning app structure and paths to components
  return (
    <div className='container call-section-wrapper my-5'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<CallList/>} />
          <Route path='/call-detail/:callId' element={<CallDetail calls={calls} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
