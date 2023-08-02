import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../Reduxs/NoteSlice';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({formVisibility}) => {
    const [noteForm, setNoteForm] = useState({
        id:'',
        note: '',
        matiereId:'',
        filiereId: ''
    })

    const filieres = useSelector(state => state.filiere).slice(1)

    const matieres = useSelector(state => state.matiere).slice(1)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setNoteForm({...noteForm, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addNote(noteForm));
        setNoteForm({
            id:'',
            note: '',
            matiereId:'',
            filiereId: ''
        })
        
        formVisibility()
    }

    return (
        <>
            <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
                <div className='modalFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Ajouter une Note</h2>

                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col form-floating">
                            <input type="number" min={0} className="form-control" id="note" value={noteForm.note} placeholder='0' name='note' onChange={handleChange} required />
                            <label htmlFor="note" className="form-label">Note</label>
                        </div>
                        <div className="col-12">
                            <label htmlFor="matiereId" className="form-label">Matiere Id</label>
                            <select className="form-select" id="matiereId" name='matiereId' onChange={handleChange} required>
                                <option selected disabled >Choose...</option>
                                {matieres && matieres.map((item, index) => {return <option key={item.id} value={item.libelle}>{item.libelle}</option>} )}
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="filiereId" className="form-label">Filiere Id</label>
                            <select className="form-select" id="filiereId" name='filiereId' onChange={handleChange} required>
                                <option selected disabled >Choose...</option>
                                {filieres && filieres.map((item, index) => {return <option key={item.id} value={item.libelle}>{item.libelle}</option> })}
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit">Ajouter</button>
                            <button className='btn btn-secondary' onClick={() => formVisibility()}>Annuler</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default NoteForm;
