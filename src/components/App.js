import "../styles/App.css"
import React, { useState } from 'react';
import Tabs from "./Tabs"

function App(){

  //const tabNames = ["Home","About", "Features"]
  const [tabNames,setTabNames] = useState(["Home","About", "Features"])

    return (
      <div className='app'>
          <div className='browser'>
            <Tabs tabNames={tabNames}/>
            <div className="viewport">Pages Go Here</div>
          </div> 
      </div>
    );
}

export default App;