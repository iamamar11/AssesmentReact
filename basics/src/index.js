import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Container/App';
import MyRender from './RenderPropsComponent/MyRender';
import Click from './RenderPropsComponent/Click';

const RenderProps = (countValue, Increment) => {
  return ( 
    <Click count = {countValue} Increment = {Increment}></Click>
  )
}

ReactDOM.render(
    // <App title='lifeCycle Model' />,
    <MyRender
      topic ='This is Render Component form Render Props Topic'
      render = {RenderProps}
    />,
  document.getElementById('root')
);

