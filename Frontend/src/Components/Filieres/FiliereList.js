import React from 'react';
import { useSelector } from 'react-redux';
import { deleteFiliere } from '../../Reduxs/FiliereSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';

const FiliereList = () => {
    const filiere = useSelector(state => state.filiere).slice(1);

    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Filieres</h2>

            <ul className="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Libelle</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Description</li>
                <li className="list-group-item w-50 mb-1 fs-5 border-0">Action</li>
            </ul>
            {filiere && filiere.map((f, index) => (index % 2 == 0) ? 
                ( <ul className="list-group list-group-horizontal ligne shadow mb-1" key={f.id}>
                    <li className="list-group-item w-100 border-0 ">{f.libelle}</li>
                    <li className="list-group-item w-100 border-0 ">{f.description}</li>
                    <li className="list-group-item w-50 border-0 ">
                        <BtnModifList lien={`/filiere/${f.id}`} />
                        <BtnDeleteList actionReducer={deleteFiliere(f.id)}/>
                    </li>
                </ul>) : 
                <ul className="list-group list-group-horizontal ligne shadow mb-1" key={f.id}>
                    <li className="list-group-item w-100 border-0 ">{f.libelle}</li>
                    <li className="list-group-item w-100 border-0 ">{f.description}</li>
                    <li className="list-group-item w-50 border-0 ">
                        <BtnModifList lien={`/filiere/${f.id}`} />
                        <BtnDeleteList actionReducer={deleteFiliere(f.id)}/>
                    </li>
                </ul>)}

            <div className='text-center pt-5'>
            Vous avez {filiere.length} Filière(s)
            </div>
        </div>
    )

}

export default FiliereList;
