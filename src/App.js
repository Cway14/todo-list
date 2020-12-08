import React, {useState, useEffect} from 'react';
import './css/tailwind.output.css';

//TODO: read from cookies, add show completed, fix button location, add mobile support, compartnemntalise

function App() {
  const [todolist, updateTodoList] = useState([]);
  const [completedList, updatedCompletedList] = useState([]);
  let newTodo = "";

  useEffect(() => {
    let decodedCookie = decodeURIComponent(document.cookie);
    let array = decodedCookie.split(';');
    const newlist = [];
    console.log(array);
    if(array[0] !== ""){
      for(let i =0; i < array.length; i++){
      let value = array[i].substring(6);
      const newTodoObject = {
        value: value,
      }
      newlist.push(newTodoObject);
    }
    updateTodoList([...newlist]);
  }
  }, [])
  
  return (
    <div>
      <header className="h-24 bg-green-500 rounded-b-lg w-screen items-center flex">
        <input className="h-12 w-3/4 mx-12 bg-transparent text-white placeholder-white outline-none" placeholder="Enter Something..." onChange={(event)=>{newTodo=event.target.value}}></input>
        <button onClick={()=>{
          if(newTodo !== ""){
            const newTodoObject = {
              value: newTodo,
            }
            todolist.push(newTodoObject)
            updateTodoList([...todolist])
            document.cookie = "todo" + (todolist.length+1) + "=" + newTodo;
            console.log(todolist.length+1);
          }
        }}>
          <svg className="h-12 w-12 stroke-current text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </header>

      <ul className="m-4">
        {todolist.map((todo, index) => (
            <li className="m-2 h-16 rounded-lg bg-gray-200 flex justify-between items-center" key={todo.value}>
            <span className="mx-12 text-2xl">{todo.value}</span>
            <div>
              {/* DONE button */}
              <button className="m-2"
              onClick={()=>{
                const item = todolist.splice(index, 1);
                completedList.push(item[0])
                updatedCompletedList([...completedList]);
                updateTodoList([...todolist]);
              }}>
                  <svg className="h-8 w-8 stroke-current text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
               {/* DELETE button */}
              <button className=" h-8 m-2 mr-8 stroke-current text-red-500" onClick={()=>{
                todolist.splice(index, 1);
                updateTodoList([...todolist]);
                document.cookie = "todo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              }}>
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
      
  );
}

export default App;
