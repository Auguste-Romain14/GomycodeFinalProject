import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifStudent } from '../../Reduxs/StudentSlice';
import axios from 'axios';


const EleveUpdate = () => { 
    const {id} = useParams()
    const eleves = useSelector(state => state.student.students);

    const eleveFinder = eleves.find(item => item._id == id);

    const {nom, prenom, matricule, age, sexe} = eleveFinder;

    const [unom, setNom] = useState(nom);
    const [uprenom, setprenom] = useState(prenom);
    const [umatricule, setmatricule] = useState(matricule);
    const [uage, setage] = useState(age);
    const [usexe, setsexe] = useState(sexe);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
       
        const studentForm = {
            id: id,
            nom: unom,
            prenom: uprenom,
            matricule: umatricule,
            sexe: usexe,
            age: uage
        }
        axios.put(`http://localhost:3001/students/${id}`, studentForm).then((response) => {
            console.log(response);
            dispatch(modifStudent(studentForm))
            navigate('/student')
        }).catch(err => console.log(err))
    }
    
    return (
        <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
            <div className='modalFormContainer bg-white col-4 p-5 '>
                <h2 className='text-center pt-2 pb-5 fw-bold'>Formulaire de modification</h2>
                <div className="container ">
                    <form className="row g-3" onSubmit={handleUpdate}>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="nom" value={unom} name='nom' onChange={(e) => setNom(e.target.value)} required />
                            <label htmlFor="nom" className="form-label">Nom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="prenom" value={uprenom} name='prenom' onChange={(e) => setprenom(e.target.value)} required />
                            <label htmlFor="prenom" className="form-label">Prenom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="number" min='1' className="form-control" id="matricule" value={umatricule} name='matricule' onChange={(e) => setmatricule(e.target.value)} required />
                            <label htmlFor="matricule" className="form-label">Matricule</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="number" min='1' className="form-control" id="age" value={uage} name='age' onChange={(e) => setage(e.target.value)} required />
                            <label htmlFor="age" className="form-label">Age</label>
                        </div>
                        <div className="input-group" required>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sexe" value='Masculin' onChange={(e) => setsexe(e.target.value)} id="masculin" />
                                <label className="form-check-label" htmlFor="masculin">
                                    Masculin
                                </label>
                            </div>
                            <div className="form-check mx-3">
                                <input className="form-check-input" type="radio" name="sexe" value='Feminin' onChange={(e) => setsexe(e.target.value)} id="feminin" />
                                <label className="form-check-label" htmlFor="feminin">
                                    Feminin
                                </label>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-around">
                            <button class="btn btn-primary shadow" type="submit">Modifier</button>
                            <button className='btn btn-secondary shadow' >Annuler</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EleveUpdate;

