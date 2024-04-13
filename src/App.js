import logo from './logo.svg';
import './App.css';
// import {useDispath, useSelector} from 'react-redux';
// import {increaseCounter, decreaseCounter} from './redux/action/counterAction';
import MyComponent from './components/MyComponent'
import React from 'react';


const App=() => {
  return(
    <div>
      Hello Anh Vũ
      <MyComponent></MyComponent>
    </div>
  );
} 
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//           Hello Anh Vũ
//           <MyComponent></MyComponent>
//       </div>

//     );
//   }
// }
// const App = ()=>{
//   const count=useSelector(state=>state.counter.count);
//   const dispatch= useDispatch();
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//         <p>
//           Hello Anh Vu
//         </p>
//         <div>Count= {count}</div>
//         <button onClick={()=>dispatch(increaseCounter())}>Increase</button>
//         <button onClick={()=>dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }


export default App;
