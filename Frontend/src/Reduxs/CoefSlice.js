import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    coefficient:'',
    matiereId:'',
    filiereId: ''
}]

export const CoefSlice = createSlice({
    name:'coefficient',
    initialState,
    reducer: {
        addCoef:(state, action) => {
            state.push(action.payload)
        },
        deleteCoef:(state, action) => {
            state = state.filter(c => c.id !== action.payload)
            return state;
        },
        modifCoef:(state, action) => {
            const {id, coefficient, matiereId, filiereId} = action.payload;
            const getCoef = state.find(item => item.id === id);
            if(getCoef){
                getCoef.coefficient = coefficient;
                getCoef.matiereId = matiereId;
                getCoef.filiereId = filiereId
            }
        }
    }
})

export const {addCoef, deleteCoef, modifCoef} = CoefSlice.actions;