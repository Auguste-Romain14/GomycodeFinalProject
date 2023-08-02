import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifNote } from '../../Reduxs/NoteSlice';

const NoteUpdate = ({formVisibility}) => {

    const notes = useSelector(state => state.note)

    const matieres = useSelector(state => state.matiere)
    const filieres = useSelector(state => state.filiere)
    const {id} = useParams();

    const filterNote = notes.map(item => item.id == id)

    const {note, matiereId, filiereId} = filterNote;

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [unote, setNote] = useState(note)
    const [umatiereId, setmatiereId] = useState(matiereId)
    const [ufiliereId, setfiliereId] = useState(filiereId)


    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(modifNote({
            id : id,
            note : unote,
            filiereId : ufiliereId,
            matiereId : umatiereId
        }))

        navigate('/note')
    }
    return (
        <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
                <div className='modalFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Modifier la Note</h2>

                    <form className="row g-3" onSubmit={handleUpdate}>
                        <div className="col form-floating">
                            <input type="number" min={0} className="form-control" id="note" value={unote} name='note' onChange={(e) => setNote(e.target.value)} required />
                            <label htmlFor="note" className="form-label">Note</label>
                        </div>
                        <div className="col-12">
                            <label htmlFor="matiereId" className="form-label">Matiere Id</label>
                            <select className="form-select" id="matiereId" name='matiereId' onChange={(e)=> setmatiereId(e.target.value)} required>
                                <option selected disabled value="">Choose...</option>
                                {matieres && matieres.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="filiereId" className="form-label">Filiere Id</label>
                            <select className="form-select" id="filiereId" name='filiereId' onChange={(e)=> setfiliereId(e.target.value)} required>
                                <option selected disabled value="">Choose...</option>
                                {filieres && filieres.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit">Ajouter</button>
                            <button className='btn btn-secondary' onClick={() => formVisibility()}>Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default NoteUpdate;
