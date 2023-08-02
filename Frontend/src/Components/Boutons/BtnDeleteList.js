import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../../Reduxs/StudentSlice';


const BtnDeleteList = ({id}) => {
    const dispatch= useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:3001/students/${id}`).then(() => {
                console.log();
                dispatch(deleteStudent(id))
            }).catch(err => console.log(err))
    }
    return (
        <>
            <button className='btn btn-danger mx-2 shadow' 
            // onClick={() => dispatch(actionReducer)}
            onClick={handleDelete}
            // onClick={() => {
            //     axios.delete(`http://localhost:3001/students`).then((response) => {
            //     console.log(response);
            //     dispatch(actionReducer(response.data.id))
            // }).catch(err => console.log(err))
            // }}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </>
    );
}

export default BtnDeleteList;
