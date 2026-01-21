import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import MainContent from "./components/MainContent/MainContent";
import './App.css';

import TaskList  from "./components/TaskList/TaskList";
import AddTask from "./components/AddTask/AddTask";



interface Task {
  id:number;
  name:string;

}

function App(){
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName:string) => {
    setTasks([...tasks, {id: tasks.length + 1, name: taskName}]);
  };

  const removeTask = (taskId:number) =>{
    setTasks(tasks.filter(task => task.id !==taskId));
  }
  return(
  <div className="app-container"> 
 
 <Header />

 <MainContent>

  <h1>Pendências</h1>
  <AddTask onAddTask={addTask}/>
    <TaskList tasks={tasks} onRemoveTask={removeTask} />
 </MainContent>
 <Footer/>
  </div>


  );
}
export default App;