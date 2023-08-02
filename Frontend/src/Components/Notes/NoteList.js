import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../Reduxs/NoteSlice';
import BtnModifList from '../Boutons/BtnModifList';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import { Outlet, useParams } from 'react-router-dom';

const NoteList = () => {

    const notes = useSelector(state => state.note).slice(1)
    const dispatch = useDispatch();

    console.log(notes)

    return (
        <div className='w-100'>
            <h2 className='text-center pb-5'>Liste des Notes</h2>

            <ul className="list-group tableEntete bg-white fw-bold ligne list-group-horizontal mb-1 shadow">
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Note</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Matière</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Filière</li>
                <li className="list-group-item w-100 mb-1 fs-5 border-0">Action</li>
            </ul>

            {notes && notes.map((n, index) => (index % 2 == 0) ? 
                ( <ul className="list-group list-group-horizontal ligne shadow mb-1" key={n.id}>
                    <li className="list-group-item w-100  border-0 ">{n.note}</li>
                    <li className="list-group-item w-100 border-0 ">{n.matiereId}</li>
                    <li className="list-group-item w-100 border-0 ">{n.filiereId}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/note/${n.id}`} />
                        <BtnDeleteList actionReducer={deleteNote(n.id)}/>
                    </li>
                </ul>) : 
                <ul className="list-group list-group-horizontal ligne shadow mb-1" key={n.id}>
                    <li className="list-group-item w-100  border-0 ">{n.note}</li>
                    <li className="list-group-item w-100 border-0 ">{n.matiereId}</li>
                    <li className="list-group-item w-100 border-0 ">{n.filiereId}</li>
                    <li className="list-group-item w-100 border-0 ">
                        <BtnModifList lien={`/note/${n.id}`} />
                        <BtnDeleteList actionReducer={deleteNote(n.id)}/>
                    </li>
                </ul>)}

            <div className='text-center pt-5'>
            {(notes.length <=0) ? 'Aucune note au tableau' : `Votre tableau contient ${notes.length} note(s)`}
            </div>
            <Outlet/>
        </div>
    );
}

export default NoteList;
