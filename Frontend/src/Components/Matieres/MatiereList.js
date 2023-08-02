import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMatiere } from '../../Reduxs/MatiereSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import { Outlet } from 'react-router-dom';

const MatiereList = () => {
    const matieres = useSelector(state => state.matiere).slice(1);

    const dispatch = useDispatch();


    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50 '>
                <h2 className='text-center pb-5'>Liste des Matière</h2>

                <div>
                    <ul className="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                        <li className="list-group-item w-100 mb-1 fs-5 border-0">Libelle</li>
                        <li className="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
                    </ul>

                    {matieres && matieres.map((m, index) => (index % 2 == 0) ? 
                        ( <ul className="list-group list-group-horizontal ligne shadow mb-1" key={m.id}>
                            <li className="list-group-item w-100  border-0 ">{m.libelle}</li>
                            <li className="list-group-item w-100 border-0 ">
                                <BtnModifList lien={`/matiere/${m.id}`} />
                                <BtnDeleteList actionReducer={deleteMatiere(m.id)}/>
                            </li>
                        </ul>) : 
                        <ul className="list-group list-group-horizontal ligne shadow mb-1" key={m.id}>
                            <li className="list-group-item w-100  border-0 ">{m.libelle}</li>
                            <li className="list-group-item w-100 border-0 ">
                                <BtnModifList lien={`/matiere/${m.id}`} />
                                <BtnDeleteList actionReducer={deleteMatiere(m.id)}/>
                            </li>
                        </ul>)}
                </div>

                <div className='text-center pt-5'>
                Vous avez {matieres.length} Matière(s)
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default MatiereList;
