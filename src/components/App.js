// import React, { useEffect, useState } from 'react'
// import '../styles/App.css';


// const getData =  () =>{
//   const rawData =  fetch('https://jsonplaceholder.typicode.com/todos')
//   const data =  rawData.json()
//   return data
// }
// const App = () => {
//   const [todos,setTodos] = useState([])
//   useEffect(()=>{
//     getData().then(data=> setTodos(data) )
//   },[])
//   return (
//     <div id="main">
//       {todos.map(todo=> <div id={`todo-${todo.id}`}>{todo.title}</div>)}
//     </div>
//   )
// }


// export default App;
import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const getData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const App = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    getData().then(data=> setTodos(data) )
  },[])
  return (
    <div id="main">
      {todos.map(todo=> <div id={`todo-${todo.id}`}>{todo.title}</div>)}
    </div>
  )
}


export default App;
