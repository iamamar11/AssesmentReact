import React, { useState } from 'react';
import './App.css';
import Person from '../Components/Component/person';
import UsingRef from '../Components/Component/UsingRef';
import FocusInput from '../Components/Component/Refs/FocusInput';
import ThemeContext , {MyProvider} from '../Context/MyContext'; 
import Heading from '../Components/Component/contextComponents/heading';

const App = () => {

  const [count , setCount] = useState(0);

  const style = {
    background : 'salmon',
    display : 'flex',
    alignItems : 'center',

  }
  
  return (
    <div>
      <div style = { style }>
        <Person countState = {count} title = {"AMARJIT"} name = {"Click Me"} />
        <div>
          <button onClick = {()=> setCount(count+1)}>Counter</button>
        </div>
      </div>
      <div>
        <h3>using Ref ( MAX'S Ways )</h3>
        <UsingRef/>
      </div>
      <hr/>
      <div>
          <FocusInput/>
      </div>
      <div>
        <MyProvider value={{Title : "Context", Type : "Provider"}}>
          <Heading/>
        </MyProvider>
      </div>
    </div>
  ); 
}

export default App;
