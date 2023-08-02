import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifMatiere } from '../../Reduxs/MatiereSlice';

const MatiereUpdate = () => {
    const {id} = useParams();
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const matieres = useSelector(state => state.matiere);
    const filterMatiere = matieres.find(item => item.id == id);

    const {libelle} = filterMatiere;

    const [ulibelle, setLibelle] = useState(libelle);

    const handleUpdateMatiere = (e) => {
        e.preventDefault();
        dispatch(modifMatiere({
            id: id,
            libelle : ulibelle
        }))
        navigate('/matiere')
    }
    return (
        <>
            <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
                <div className='modalFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Modifier la Matière</h2>

                    <form className="row g-3" onSubmit={handleUpdateMatiere}>
                        <div className="col form-floating">
                            <input type="text" className="form-control" id="libelle" value={ulibelle} name='libelle' onChange={(e) => setLibelle(e.target.value)} required />
                            <label htmlFor="libelle" className="form-label">Libelle</label>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit">Modifier</button>
                            <button className="btn btn-secondary" >Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MatiereUpdate;
