import React, { useState } from 'react';
import StudentList from '../Components/Eleves/EleveList';
import EleveForm from '../Components/Eleves/EleveForm';
import BtnAddNew from '../Components/Boutons/BtnAddNew';
// import '../Styles/student.css'

const StudentsPage = () => {
    const [activeForm, setACtiveForm] = useState(false);
    return (
        <div>
            <div className="text-end">
                <BtnAddNew enableForm = {() => setACtiveForm(true)}/>
                {/* <button className='btn btn-primary shadow mb-5' onClick={() => setACtiveForm(true)}>Ajouter <span className=''><i class="fa-solid fa-user-plus"></i></span></button> */}
            </div>
            <div className=''>
                <StudentList/>
            </div>
            {activeForm && <EleveForm formVisibility={() => setACtiveForm(false)} />}
        </div>
    );
}

export default StudentsPage;
