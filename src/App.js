import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Destructuring_props_state from './components/Destructuring_Props_state'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ConditionRendering from './components/ConditionalRendering'
//import {Greet} from './components/Greet'


function App() {
  return ( 
    <div className="App">

       <Greet name ="Harmless">
       <button>Log In</button>
       </Greet>

       <Greet name>
         <p>This is a children props</p>
       </Greet>

       ____________________________________________________________

       <Welcome name="Amine"></Welcome>
       <Welcome name="Harmless"></Welcome>

       ____________________________________________________________

       <Hello></Hello>

       ____________________________________________________________

       <Message></Message>

       ____________________________________________________________

       <Counter></Counter>

       ____________________________________________________________

       <Destructuring_props_state name="Amine" lastname="Fettoukh"></Destructuring_props_state>

       ____________________________________________________________

       <FunctionClick></FunctionClick>

       ____________________________________________________________

       <ClassClick></ClassClick>

       ____________________________________________________________

       <EventBind></EventBind>

       ____________________________________________________________

       <ParentComponent></ParentComponent>

       ____________________________________________________________

       <ConditionRendering></ConditionRendering>

       ____________________________________________________________

    </div>
  );
}

export default App;
