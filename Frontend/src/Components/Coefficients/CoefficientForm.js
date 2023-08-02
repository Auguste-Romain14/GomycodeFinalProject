import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoef } from '../../Reduxs/CoefSlice';

const CoefficientForm = () => {
    const [coefficientForm, setCoefficientForm] = useState({
        id:'',
        coefficient:'',
        matiereId:'',
        filiereId: ''
    })

    const dispatch = useDispatch();

    const filiere = useSelector(state => state.filiere).slice(1)
    const matiere = useSelector(state => state.matiere).slice(1)

    const handleChange = (e) => {
        setCoefficientForm({...coefficientForm, [e.target.name]: e.target.value, id: Date.now()})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCoef(coefficientForm));
        setCoefficientForm({
            id:'',
            note: '',
            coefficient:'',
            filiereId: ''
        })
    }

    return (
        <div>
            <h2 className='text-center pb-5'>Ajouter un Coefficient</h2>

            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col form-floating">
                    <input type="number" min={0} class="form-control" id="coefficient" name='coefficient' value={coefficientForm.coefficient} onChange={handleChange} required />
                    <label for="coefficient" class="form-label">Coefficient</label>
                </div>
                <div class="col-md-3 form-floating">
                    <label for="matiereId" class="form-label">Matiere Id</label>
                    <select class="form-select" id="matiereId" onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        {matiere && matiere.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                    </select>
                </div>
                <div class="col-md-3 form-floating">
                    <label for="filiereId" class="form-label">Filiere Id</label>
                    <select class="form-select" id="filiereId" onChange={handleChange} required>
                    <option selected disabled value="">Choose...</option>
                    {filiere && filiere.map((item, index) => <option key={item.id} value={item.libelle}>{item.libelle}</option> )}
                    </select>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Valider</button>
                </div>
            </form>
        </div>
    );
}

export default CoefficientForm;
