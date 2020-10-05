import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Containers/App';
import RenderProps from './Components/propsRender/RenderProps';
import Click from './Components/propsRender/Click';

ReactDOM.render(
  <>
    <App />
    {/* <RenderProps render = {(count , increment) => (
      <>
        <p>you clicked {count} Times</p>
        <Click increment={increment} count={count}/>
      </>
      )}/> */}
  </>,
  document.getElementById('root')
);


