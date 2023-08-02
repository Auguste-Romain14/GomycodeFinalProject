import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifProf } from '../../Reduxs/ProfSlice';

const ProfUpdate = ({formVisibility}) => {
    const {id} = useParams()
    const profs = useSelector(state => state.professeur);

    const profFinder = profs.find(item => item.id == id)

    const {nom, prenom, email} = profFinder;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [unom, setNom] = useState(nom)
    const [uprenom, setPrenom] = useState(prenom)
    const [uemail, setEmail] = useState(email)

    const handleUpdate = (e) => {
        e.preventDefault()
        
        dispatch(modifProf({
            id:id,
            nom: unom,
            prenom:uprenom,
            email:uemail
        }))
        navigate('/teacher')
    }

    return (
        <>
            <div className='studentFormGolbal d-flex justify-content-center align-items-center'>
                <div className='studentFormContainer bg-white col-4 p-5 '>
                    <h2 className='text-center pb-5'>Modifier ce Professeur</h2>
                    <form className="row g-3" onSubmit={handleUpdate}>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="nom" value={unom} name='nom' onChange={(e) => setNom(e.target.value) } required />
                            <label htmlFor="nom" className="form-label">Nom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="text" className="form-control" id="prenom" value={uprenom} name='prenom' onChange={(e) => setPrenom(e.target.value) } required />
                            <label htmlFor="prenom" className="form-label">Prenom</label>
                        </div>
                        <div className="col-12 form-floating">
                            <input type="email" className="form-control" id="email" value={uemail} name='email' onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button className="btn btn-primary" type="submit">Modifier</button>
                            <button className="btn btn-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProfUpdate;
