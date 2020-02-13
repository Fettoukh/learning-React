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
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

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
       
       <Greet name ="Amine">
       </Greet>

       <Greet>
         <p>This is a children props</p>
       </Greet>

       ____________________________________________________________

       <Welcome name="Amine"></Welcome>
       <Welcome name="Fettoukh"></Welcome>
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
      
      <ParentComp></ParentComp>
      ____________________________________________________________
      
      <RefsDemo></RefsDemo>
       ____________________________________________________________
       
      <FocusInput></FocusInput>
       ____________________________________________________________

      <PortalDemo></PortalDemo>

      ____________________________________________________________
      {/* <ErrorBoundary>
      <Hero heroName ='Batman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ='Superman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ='Joker'></Hero>
      </ErrorBoundary>  */}

      ____________________________________________________________

      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      ____________________________________________________________
    </div>
  );
}

export default App;

