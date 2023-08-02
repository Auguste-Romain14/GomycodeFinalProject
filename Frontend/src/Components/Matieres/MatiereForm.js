import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMatiere } from '../../Reduxs/MatiereSlice';

const MatiereForm = ({formVisibility}) => {
    const [matForm, setMatForm] = useState({
        id: '',
        libelle: ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setMatForm({...matForm, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addMatiere(matForm))
        setMatForm({
            id: '',
            libelle: ''
        })

        formVisibility()
    }

    return (
        <>
            <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
                <div className='modalFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Ajouter une Matière</h2>

                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col form-floating">
                            <input type="text" className="form-control" id="libelle" value={matForm.libelle} name='libelle' onChange={handleChange} required />
                            <label htmlFor="libelle" className="form-label">Libelle</label>
                        </div>
                        <div class="col-12 d-flex justify-content-around">
                            <button class="btn btn-primary" type="submit">Ajouter</button>
                            <button class="btn btn-secondary" onClick={() => formVisibility()} >Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MatiereForm;
