import React, { useState } from 'react';
import NoteList from '../Components/Notes/NoteList';
import BtnAddNew from '../Components/Boutons/BtnAddNew';
import NoteForm from '../Components/Notes/NoteForm';

const NotesPage = () => {
    const [activeForm, setACtiveForm] = useState(false)
    return (
        <div>
            <div className='text-end'>
                <BtnAddNew enableForm={()=> setACtiveForm(true)}/>
            </div>
            <NoteList/>
            {activeForm && <NoteForm formVisibility={()=> setACtiveForm(false)}/>}
        </div>
    );
}

export default NotesPage;
