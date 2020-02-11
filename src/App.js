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
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import InlineStyling from './components/InlineStyling'
import Form from './components/Form'
import LifeCycle from './components/LifeCycle'
import FragmentDemo from './components/FragmentDemo'
import FragementTable from './components/FragementTable'
 
//import {Greet} from './components/Greet'
import './appStyles.css'
import styles from './appStyles.module.css'


function App() {
  return ( 
    <div className="App">

    ____________________________________________________________

      <h1 className ='error'>Error</h1>
      <h1 className = {styles.success} >Success</h1>

      ____________________________________________________________

      <InlineStyling></InlineStyling>

      ____________________________________________________________

       <Stylesheet primary={true}></Stylesheet>

       ____________________________________________________________
       
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

       <NameList></NameList>

       ____________________________________________________________

      <Form></Form>

      ____________________________________________________________

      <LifeCycle></LifeCycle>

      ____________________________________________________________

      <FragmentDemo></FragmentDemo>
      <FragementTable></FragementTable>
      ____________________________________________________________
    </div>
  );
}

export default App;
