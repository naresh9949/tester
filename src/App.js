import React,{ Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner';
import NavBar from "./components/NavBar";

const RabbitMQ = React.lazy(() => import('./components/RabbitMq/RabbitMQ'));

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/rabbitMq" element={<RabbitMQ/>} /> 
         
           
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
