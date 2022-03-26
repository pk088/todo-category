import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './TodoItem.css'
import { BsRecordCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const CategoryItem = (props) => {
    
    const navigate = useNavigate();
    const [taskCount, setTaskCount] = useState(0)

    useEffect(() => {
        if(props.workData.category == "Personal"){
            setTaskCount(taskCount + 1)
        }
    },[])

    // const [red, setRed] = useState(256)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const random_color = { color: `rgb(${red},${green},${blue})` }


    // const showTasks = () => {

    //     // props.workData.filter((item) => {
    //     //      if(item.category = props.item){
    //     //         return <h1>{props.item}</h1>
    //     //     }
    //     // })

    //     // console.log(props.workData.category)

    //     // navigate("/")
    // }

    const deleteCategoryHandler = () =>{
        alert("Are you really Want to Delete Selected Category??")
        // console.log("deleted " + props.index);
        
        props.category.splice(props.index, 1)
        props.setCategory(() => {
            
            return [...props.category]
            
        })
        // console.log(props.category);


        // navigate("/")
    }

    return (

        <div className='TodoItem' >
            <div className='time_title'>
                <div className='logo'>
                    <BsRecordCircleFill style={random_color} />
                </div>
                <div className='title'>
                    <h3>{props.item}</h3>
                    <h5 style={random_color}>{taskCount}</h5>
                </div>
            </div>
            <div className='buttons'>
                {/* <button className='done'><GrFormAdd /></button> */}
                <button className='delete' onClick={deleteCategoryHandler} ><MdDelete /></button>
            </div>
        </div>

    )
}

export default CategoryItem