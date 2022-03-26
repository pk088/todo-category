import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoDiffAdded } from 'react-icons/go'
import './Schedule.css'
import TodoItem from './Items/TodoItem'

const Schedule = (props) => {

    const navigate = useNavigate()
    
    return (
        <div className='schedule'>
            <h1>Schedule
            <span><button className='add' onClick={() => navigate("/TaskForm")}><GoDiffAdded /></button></span>
            </h1>
            {
                props.workData.map((item,index) => {
                    return <TodoItem key={index} index = {index} item = {item} workData = {props.workData} setWorkData = {props.setWorkData} />
                })
            }
        </div>
    )
}

export default Schedule