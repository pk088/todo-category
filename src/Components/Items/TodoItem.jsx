import React, { useEffect, useState } from 'react'
import Time from './Time/Time'
import './TodoItem.css'
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// import { TiPen } from "react-icons/ti";
// import { BsPenFill } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";

const TodoItem = (props) => {

    //classes states
    const [btnbg, setBtnbg] = useState("")

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const random_color = { color: `rgb(${red},${green},${blue})` }

    // useEffect(() => {
    //     props.item.status == "complete" && setBtnbg("greenyellow")
    // }, [])


    const donebtnHandler = () => {
        props.item.status = "complete"
        setBtnbg("greenyellow")
        // console.log(props.item.status)


    }

    const deleteTaskHandler = () => {

        props.workData.splice(props.index, 1)
        props.setWorkData(() => {

            return [...props.workData]

        })
        // console.log(props.workData);
    }


    return (
        <div className='TodoItem'>
            <div className='time_title'>
                <div className='penlogo'>
                    {/* <Time /> */}
                    {/* <TiPen />
                    <TiPen /> */}
                    {/* <BsPenFill /> */}
                    {/* <BsPenFill /> */}
                    <RiTodoFill style={random_color} />
                </div>
                <div className='title'>
                    <h3>{props.item.taskName}</h3>
                    <h5 style={random_color}>{props.item.category}</h5>
                </div>
            </div>
            <div className='buttons'>
                <button style={{ backgroundColor: btnbg }} onClick={donebtnHandler} className='done'><MdOutlineDoneOutline /></button>
                <button onClick={deleteTaskHandler} className="delete"><MdDelete /></button>
            </div>
        </div>
    )
}

export default TodoItem