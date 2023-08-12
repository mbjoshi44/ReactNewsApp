import React from 'react';
import Navbaar from './components/Navbaar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from "react-router-dom"



const App=()=> {
   const pageSize = 6;
    return (
      <>
      <BrowserRouter>
      
   <Navbaar/>
   
      <Routes>
   <Route exact path= "/" element ={<News  key ="general"  pageSize ={pageSize} country="in" category="general"/>}/>
   <Route exact path= "sports" element ={<News  key ="sports" pageSize ={pageSize} country="in" category="sports"/>}/>
   <Route exact path= "business" element ={<News  key="business" pageSize ={pageSize} country="in" category="business"/>}/>
   <Route exact path= "entertainment" element ={<News  key="enternainment" pageSize ={pageSize} country="in" category="enternainment"/>}/>
   <Route exact path= "general" element ={<News  key ="general" pageSize ={pageSize} country="in" category="general"/>}/>
   <Route exact path= "health" element ={<News  key="health" pageSize ={pageSize} country="in" category="health"/>}/>
   <Route exact path= "science" element ={<News  key="science" pageSize ={pageSize} country="in" category="science"/>}/>
   <Route exact path= "technology" element ={<News  key="technology" pageSize ={pageSize} country="in" category="technology"/>}/>
      
</Routes>
</BrowserRouter>
      </>
    );
  
}

export default App;