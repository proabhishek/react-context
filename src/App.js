import logo from './logo.svg';
import './App.css';
import context from './Context/Context';
import Provider from './Context/Provider';


const Smile=()=>{
     return(
        <context.Consumer>
          {
              (value)=>{
                 return(
                   <div>
                        <h1>Name is : {value.data.name}</h1> 
                        <h1>age is : {value.data.age}</h1> 
                        <h1>Role is : {value.data.role}</h1> 
                   </div>
                 )
              }
          }
        </context.Consumer>
     )
}



function App() {
  return (
    <div>
      <h1> Hello1 </h1>
      <Provider> 
        <Smile/>
      </Provider>

    </div>
    
  );
}

export default App;
