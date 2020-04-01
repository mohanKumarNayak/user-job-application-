import React from 'react';
import ApplicationList from './component/ApplicationList'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import ApplictaionForm from './component/ApplicationForm';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      
      <Route path="/" component={ApplictaionForm} exact={true}/>
      <Route path="/admin" component={ApplicationList} />
    </div>
    </BrowserRouter>
  );
}

export default App;
