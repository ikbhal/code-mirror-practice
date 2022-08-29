import React , {useState} from "react";
import Parser from 'html-react-parser';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);

  var [code, setCode] = useState('');
  return (
    <div>
      <div style={{float:'left'}}>
        <CodeMirror
          value=""
          height="200px"
          width="300px"
          theme="dark"
          // extensions={[javascript({ jsx: true }), html]}
          extensions={[html()]}
          onChange={onChange}
        />
      </div>

      <div id="output"  style={{ float:'left', marginLeft: '50px'}}>
        {Parser(code)}
      </div>
    </div>
  );
}
