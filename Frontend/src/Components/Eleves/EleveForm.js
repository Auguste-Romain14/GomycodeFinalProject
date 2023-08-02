import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../Reduxs/StudentSlice';
import axios from 'axios';

const EleveForm = ({formVisibility}) => {
    const [studentForm, setStudentForm] = useState({
        id:"",
        nom:"",
        prenom:'',
        matricule:'',
        age:'',
        sexe:''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setStudentForm({...studentForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(studentForm.sexe !== "Masculin" && studentForm.sexe !== "Feminin"){
            e.stopPropagation();
            alert('Verifiez les informations')
        } else{
        // dispatch(addStudent(studentForm))
        axios.post('http://localhost:3001/students', studentForm).then((response) => {
            console.log(response);
            dispatch(addStudent(response.data))
        }).catch(err => console.log(err))

        // alert('Eleve Ajouté')
        setStudentForm({
            id:"",
            nom:"",
            prenom:'',
            matricule:'',
            age:'',
            sexe:''
        })};
        formVisibility();
    }

    return (
        <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
            <div className='modalFormContainer bg-white col-4 p-5 '>
                <h2 className='text-center pt-2 pb-5 fw-bold'>Formulaire d'ajout</h2>
                <div className="container ">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="nom" value={studentForm.nom} name='nom' onChange={handleChange} required />
                            <label htmlFor="nom" className="form-label">Nom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="prenom" value={studentForm.prenom} name='prenom' onChange={handleChange} required />
                            <label htmlFor="prenom" className="form-label">Prenom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="number" min='1' className="form-control" id="matricule" value={studentForm.matricule} name='matricule' onChange={handleChange} required />
                            <label htmlFor="matricule" className="form-label">Matricule</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="number" min='1' className="form-control" id="age" value={studentForm.age} name='age' onChange={handleChange} required />
                            <label htmlFor="age" className="form-label">Age</label>
                        </div>
                        <div className="input-group" required>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sexe" value='Masculin' onChange={handleChange} id="masculin" />
                                <label className="form-check-label" htmlFor="masculin">
                                    Masculin
                                </label>
                            </div>
                            <div className="form-check mx-3">
                                <input className="form-check-input" type="radio" name="sexe" value='Feminin' onChange={handleChange} id="feminin" />
                                <label className="form-check-label" htmlFor="feminin">
                                    Feminin
                                </label>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary shadow" type="submit">Ajouter</button>
                            <button className='btn btn-secondary shadow' onClick={() => !formVisibility()}>Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EleveForm;
