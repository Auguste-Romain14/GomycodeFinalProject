import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoef } from '../../Reduxs/CoefSlice';
import BtnDeleteList from '../Boutons/BtnDeleteList';
import BtnModifList from '../Boutons/BtnModifList';

const CoefficientList = () => {
    const coef = useSelector(state => state.coefficient).slice(1);

    const dispatch = useDispatch()
    return (
        <div>
            <h2 className='text-center pb-5'>Liste des Coefficients</h2>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Coefficient</th>
                    <th scope="col">MatiereId</th>
                    <th scope="col">FiliereId</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {coef && coef.map((c, index) =>
                        <tr key={c.id}>
                            <th scope="row">{index+1}</th>
                            <td>{c.coefficient}</td>
                            <td>{c.matiereId}</td>
                            <td>{c.filiereId}</td>
                            <td className='d-flex justify-content-around'>
                                <BtnDeleteList actionReducer={deleteCoef(c.id)}/>
                                <BtnModifList/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CoefficientList;
