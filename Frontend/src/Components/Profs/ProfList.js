import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProf } from '../../Reduxs/ProfSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import { useParams } from 'react-router-dom';

const ProfList = () => {
    const prof = useSelector(state => state.professeur).slice(1);
    const {id} = useParams()

    const dispatch = useDispatch()
    return (
        <div className='w-100'>
            <h2 className='text-center pb-5'>Liste des Professeurs</h2>

            <ul className="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Nom</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Prenom</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Email</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
            </ul>

            {prof && prof.map((p, index) => (index % 2 == 0) ? 
                ( <ul className="list-group list-group-horizontal ligne shadow mb-1" key={p.id}>
                    <li className="list-group-item w-100 border-0 ">{p.nom}</li>
                    <li className="list-group-item w-100 border-0 ">{p.prenom}</li>
                    <li className="list-group-item w-100 border-0 ">{p.email}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/teacher/${p.id}`}/>
                        <BtnDeleteList actionReducer={deleteProf(p.id)}/>
                    </li>
                </ul>) : 
                <ul className="list-group list-group-horizontal ligne shadow mb-1" key={p.id}>
                    <li className="list-group-item w-100 border-0 ">{p.nom}</li>
                    <li className="list-group-item w-100 border-0 ">{p.prenom}</li>
                    <li className="list-group-item w-100 border-0 ">{p.email}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/teacher/${p.id}`}/>
                        <BtnDeleteList actionReducer={deleteProf(p.id)}/>
                    </li>
                </ul>)}

            <div className='text-center pt-5'>
            Vous avez {prof.length} Profs(s)
            </div>
        </div>
    );
}

export default ProfList;
