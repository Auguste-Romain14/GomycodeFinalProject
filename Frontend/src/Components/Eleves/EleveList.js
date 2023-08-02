import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, deleteStudent } from '../../Reduxs/StudentSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';
import { Link, Outlet, useParams } from 'react-router-dom';

import axios from 'axios';

const StudentList = () => {
    const student = useSelector(state => state.student.students)
    const dispatch = useDispatch()
    console.log(student);

    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3001/students').then((response) => {
            console.log(response);
            dispatch(addStudent(response.data))
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='w-100'>
            <ul className="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Nom</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Prenom</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Age</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Sexe</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Matricule</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
            </ul>
            {student && student.map((s, index) => (index % 2 == 0) ? 
                ( <ul className="list-group list-group-horizontal ligne shadow mb-1" key={s.id}>
                    <li className="list-group-item w-100  border-0 ">{s.nom}</li>
                    <li className="list-group-item w-100 border-0 ">{s.prenom}</li>
                    <li className="list-group-item w-100 border-0 ">{s.age}</li>
                    <li className="list-group-item w-100 border-0 ">{s.sexe}</li>
                    <li className="list-group-item w-100 border-0 ">{s.matricule}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/student/${s._id}`} />
                        {/* <Link to={`/student/${s._id}`}>
                            <button className='btn btn-warning mx-2 shadow text-white'><i className="fa-solid fa-pen"></i></button>
                        </Link> 
                        <Outlet/> */}
                        <BtnDeleteList id={s._id}/>
                        {/* <button className='btn btn-secondary mx-2' onClick={(e) => {e.preventDefault(); handleDelete(s._id)}}>Delete</button> */}
                    </li>
                </ul>) : 
                <ul className="list-group list-group-horizontal ligne shadow mb-1" key={s.id}>
                    <li className="list-group-item w-100 border-0 ">{s.nom}</li>
                    <li className="list-group-item w-100 border-0 ">{s.prenom}</li>
                    <li className="list-group-item w-100 border-0 ">{s.age}</li>
                    <li className="list-group-item w-100 border-0 ">{s.sexe}</li>
                    <li className="list-group-item w-100 border-0 ">{s.matricule}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/student/${s._id}`} />
                        {/* <BtnDeleteList actionReducer={()=> handleDelete(s.id)}/> */}
                        <BtnDeleteList id={s._id}/>
        
                        {/* <button className='btn btn-secondary mx-2' onClick={(e) => {e.preventDefault(); handleDelete(s._id)}}>Delete</button> */}
                    </li>
                </ul>)}

            <div className='text-center pt-5'>
            {/* Vous avez {student.length} Etudiant(s) */}
            </div>
            <Outlet/>
        </div>        
    );

}

export default StudentList;
