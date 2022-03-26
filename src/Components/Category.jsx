import React, { createFactory, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoDiffAdded } from 'react-icons/go'
import './Category.css'
import CatagoryItem from './Items/CategoryItem'

const Category = (props) => {

    const navigate = useNavigate()
    

    

    return (
        <div className='category'>
            <h1>Category
            <span><button className='add' onClick={() => navigate("/CategoryForm")}><GoDiffAdded /></button></span>
            </h1>
            {
                props.category.map((item,index) => {
                    return <CatagoryItem key={index} index={index} item = {item} category = {props.category} setCategory = {props.setCategory}  workData = {props.workData} />
                })
            }
        </div>
    )
}

export default Category