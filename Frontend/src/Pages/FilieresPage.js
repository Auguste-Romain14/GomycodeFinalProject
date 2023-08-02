import React, { useState } from 'react';
import FiliereList from '../Components/Filieres/FiliereList';
import FiliereForm from '../Components/Filieres/FiliereForm';

const FilieresPage = () => {
    const [activeForm, setACtiveForm] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setACtiveForm(true)
    }
    return (
        <div>
            <div className='text-end'>
                <button className='btn btn-primary shadow' onClick={handleClick}>Ajouter <i class="fa-solid fa-user-plus"></i></button>
            </div>
            <FiliereList/>
            {activeForm && <FiliereForm formVisibility={() => setACtiveForm(false)}/>}
        </div>
    );
}

export default FilieresPage;
