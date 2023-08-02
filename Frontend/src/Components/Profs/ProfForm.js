import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProf } from '../../Reduxs/ProfSlice';

const ProfForm = ({formVisibility}) => {
    const [teacherForm, setTeacherForm] = useState({
        id:'',
        nom:'',
        prenom:'',
        email:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTeacherForm({...teacherForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addProf(teacherForm))
        setTeacherForm({
            id:"",
            nom:"",
            prenom:'',
            email:''
        })
        formVisibility()
    }

    return (
        <>
            <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
                <div className='modalFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Ajouter un Professeur</h2>

                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="nom" value={teacherForm.nom} name='nom' onChange={handleChange} required />
                            <label htmlFor="nom" className="form-label">Nom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="prenom" value={teacherForm.prenom} name='prenom' onChange={handleChange} required />
                            <label htmlFor="prenom" className="form-label">Prenom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="email" className="form-control" id="email" value={teacherForm.email} name='email' onChange={handleChange} required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit">Ajouter</button>
                            <button className="btn btn-secondary" onClick={() => formVisibility()}>Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProfForm;
