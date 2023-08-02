import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifFiliere } from '../../Reduxs/FiliereSlice';

const FiliereUpdate = () => {

    const {id} = useParams();
    const filieres = useSelector(state =>state.filiere);
    const filterFiliere = filieres.find(item => item.id == id);
    const {libelle, description} = filterFiliere;

    const [ulibelle, setLibelle] = useState(libelle);
    const [udescription, setDescription] = useState(description);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUpdateFiliere = (e) => {
        e.preventDefault();
        dispatch(modifFiliere({
            id: id,
            libelle: ulibelle,
            description: udescription
        }));
        navigate('/filiere')
    }



    return (
        <div className='modalFormGolbal d-flex justify-content-center align-items-center'>
            <div className='modalFormContainer bg-white col-4 p-5 '>
                <h2 className='text-center pb-5'>Modifier cette filière</h2>

                <form className="row g-3" onSubmit={handleUpdateFiliere}>
                    <div className="col form-floating">
                        <input type="text" className="form-control" id="libelle" value={ulibelle} name='libelle' onChange={(e) => setLibelle(e.target.value)} required />
                        <label htmlFor="libelle" className="form-slabel">Libelle</label>
                    </div>
                    <div className="col form-floating">
                        <textarea type="text" className="form-control" id="description" value={udescription} name='description' onChange={(e) => setDescription(e.target.value)} required />
                        <label htmlFor="description" className="form-label">Description</label>
                    </div>
                    <div className="col-12 d-flex justify-content-around">
                        <button className="btn btn-primary" type="submit">Modifier</button>
                        <button className="btn btn-secondary" onClick={() => navigate('/filiere')} >Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FiliereUpdate;
