import React , {useState} from "react";
import {styles} from './App.css';
import Parser from 'html-react-parser';
import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import {examples} from './data.js';

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<About/>}>
            {/* <About /> */}
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Dashboard /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <CodeOutput/>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


function ExampleList(){
  var [exampleIndex, setExampleIndex] = useState(0);

  return (
    <div className="example-list">
          <div class='next-prev'>
            <button onClick={e=>setExampleIndex(i => i<examples.length-1?i+1: i)}>
              Next
            </button>
            <button onClick={e=>setExampleIndex(i => i>0?i-1:0)}>
              Previous
            </button>
          </div>
          <Example {...examples[exampleIndex]} />
    </div>
  );
}


function Example({filename, title, htmlProp}){

  var [code, setCode] = useState(htmlProp);
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);

  return (
    <div className="example">
      <h3>Title: {title}</h3>

      {/* <div class="code-output-inner">
        <div style={{float:'left', width: '40%', boxSizing:'border-box'}}>
          <CodeMirror
            value={code}
            height="200px"
            // width="300px"
            theme="dark"
            // extensions={[javascript({ jsx: true }), html]}
            extensions={[html()]}
            onChange={onChange}
          />
        </div>

        <div id="output"  
          style={{ float:'left', 
            marginLeft: '50px', 
            width:'50%', 
            boxSizing:'border-box'}}
          >
          {Parser(code)}
        </div>

      </div> */}
    </div>
  );
}
export  function App3(){
  return (
    <div>
      <ExampleList/>
    </div>
  );
}
export function CodeOutput() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);

  var [code, setCode] = useState(`
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>
  `);

  const selectOnChange=  (e) =>{
    console.log("inside select onchange e:", e);
    var filename = e.target.value;
    var example = examples.find(ex => ex.filename == filename);
    console.log('example:', example);
    var exampleHtml = example.html;
    setCode(exampleHtml);
  }
  return (
    <div>

      <div className="example-selector-wrapper">
          Select examples : 
          <select className="example-select"
             onChange={selectOnChange}>
            {examples.map((e,i) =>
                <option  key={i} value={e.filename}>{e.title}</option>  
            )}
          </select>
      </div>

      <div style={{float:'left', width: '45%', boxSizing:'border-box', marginTop:'5px'}}>
        <CodeMirror
          value={code}
          height="200px"
          // width="300px"
          theme="dark"
          // extensions={[javascript({ jsx: true }), html]}
          extensions={[html()]}
          onChange={onChange}
        />
      </div>

      <div id="output"  
        style={{ float:'left', 
          marginLeft: '50px', 
          width:'45%', 
          boxSizing:'border-box'}}
        >
        {Parser(code)}
      </div>
    </div>
  );
}
