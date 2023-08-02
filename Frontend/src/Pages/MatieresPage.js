import React, { useState } from 'react';
import MatiereList from '../Components/Matieres/MatiereList';
import BtnAddNew from '../Components/Boutons/BtnAddNew';
import MatiereForm from '../Components/Matieres/MatiereForm';

const MatieresPage = () => {

    const [activeForm, setActiveForm] = useState(false);

    return (
        <div>
            <div className="text-end">
                <BtnAddNew enableForm={() => setActiveForm(true)}/>
            </div>
            <MatiereList/>
            {activeForm && <MatiereForm formVisibility={() => setActiveForm(false)}/>}
        </div>
    );
}

export default MatieresPage;
