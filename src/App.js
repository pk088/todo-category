import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Schedule from './Components/Schedule';
import Category from './Components/Category';
import Navbar from './Components/Navbar/Navbar';
import TaskForm from './Components/Forms/TaskForm';
import CategoryForm from './Components/Forms/CategoryForm';
import { useEffect, useState } from 'react';

function App() {

  
  const [category, setCategory] = useState(["Personal", "Shopping", "Event", "Sports", "Work"])
  
  const [workData, setWorkData] = useState([
    {
      taskName: "Walk with dog",
      category: "Personal",
      status: "uncomplete"
    },
    {
      taskName: "Buy Apple, Milk",
      category: "Shopping",
      status: "uncomplete"
    },
    {
      taskName: "Art Exibition",
      category: "Event",
      status: "uncomplete"
    },
    {
      taskName: "Training in the Gym",
      category: "Sports",
      status: "uncomplete"
    },
    {
      taskName: "Going to office",
      category: "Work",
      status: "complete"
    },
    {
      taskName: "Going to office",
      category: "Work",
      status: "complete"
    },
  ])
  
  
  // localStorage.setItem("localworkdata" , JSON.stringify(workData))

  // const localData = localStorage.getItem("localworkdata")
  // const newlocalData = JSON.parse(localData)
  // console.log(workData);
  // console.log(newlocalData);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Schedule workData={workData} setWorkData = {setWorkData} />} />
          <Route path="/Category" element={<Category category={category} setCategory = {setCategory} workData = {workData} />} />
          <Route path="/TaskForm" element={<TaskForm category={category} setWorkData = {setWorkData} workData = {workData}  />} />
          <Route path="/CategoryForm" element={<CategoryForm setCategory={setCategory} category={category} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
