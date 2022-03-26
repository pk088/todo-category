import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./TaskForm.css"

const TaskForm = (props) => {

  
  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState(props.category[0])
  
  // const [obj, setObj] = useState()
  
  const navigate = useNavigate()

  const TaskFormHandler = (e) => {
    e.preventDefault();
    alert(`Task Added in ${category} Category`)
    const data = {
      taskName: taskInput,
      category: category,
      status: "uncomplete"
    }
    props.setWorkData([...props.workData, data])

    setTaskInput("")
    setCategory("")

    navigate("/")
  }

  // const opt = ['Hello','Hello','Hello','Hello','Hello','Hello']


  return (
    <div className='form_container'>
      <form onSubmit={TaskFormHandler}>
        <label htmlFor="">Enter Task</label>
        <input required type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <label htmlFor="">Category</label>
        <select required={true} onChange={(e) => setCategory(e.target.value)}>
          {/* <option selected disabled hidden>Choose here...</option> */}
          {
            props.category.map((item, index) => {
              return <option key={index}>{item}</option>
            })
          }
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm;