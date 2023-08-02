import React, { useState } from 'react';
import ProfList from '../Components/Profs/ProfList';
import BtnAddNew from '../Components/Boutons/BtnAddNew';
import ProfForm from '../Components/Profs/ProfForm';

const TeachersPage = () => {
    const [activeForm, setACtiveForm] = useState(false)
    return (
        <div>
            <div className='text-end'>
                <BtnAddNew enableForm={() => setACtiveForm(true)}/>
            </div>

            <ProfList/>
            {activeForm && <ProfForm formVisibility={()=> setACtiveForm(false)}/>} 
        </div>
    );
}

export default TeachersPage;
