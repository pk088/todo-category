import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CategoryForm.css'

const CategoryForm = (props) => {

  const [newCategory, setNewCategory] = useState("");

  const navigate = useNavigate();

  const CategoryFormHandler = (e) => {
    e.preventDefault();
    alert("Category Added")
    props.setCategory([...props.category,newCategory])
    setNewCategory("")
    navigate("/Category")
  }

  return (
    <div className='form_container'>
        <form onSubmit={CategoryFormHandler}>
            <label htmlFor="">Enter New Category</label>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CategoryForm