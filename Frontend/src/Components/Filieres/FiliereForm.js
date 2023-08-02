import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFiliere } from '../../Reduxs/FiliereSlice';
import { useNavigate } from 'react-router-dom';

const FiliereForm = ({formVisibility}) => {
    const [filiereForm, setFiliereForm] = useState({
        id:"",
        libelle:"",
        description:''
    })

    const dispatch= useDispatch();

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setFiliereForm({...filiereForm, [e.target.name]: e.target.value, id: Date.now()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addFiliere(filiereForm))
        setFiliereForm({
            id:"",
            libelle:"",
            description:''
        })
        formVisibility()
    }

    return (
        <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
            <div className='modalFormContainer bg-white col-4 p-5 '>
                <h2 className='text-center pb-5'>Ajouter une filière</h2>

                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col form-floating">
                        <input type="text" className="form-control" id="libelle" value={filiereForm.libelle} name='libelle' onChange={handleChange} required />
                        <label htmlFor="libelle" className="form-label">Libelle</label>
                    </div>
                    <div className="col form-floating">
                        <textarea type="text" className="form-control" id="description" value={filiereForm.description} name='description' onChange={handleChange} required />
                        <label htmlFor="description" className="form-label">Description</label>
                    </div>
                    <div className="col-12 d-flex justify-content-around">
                        <button className="btn btn-primary" type="submit">Ajouter</button>
                        <button className="btn btn-secondary" onClick={() => formVisibility()} >Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FiliereForm;
