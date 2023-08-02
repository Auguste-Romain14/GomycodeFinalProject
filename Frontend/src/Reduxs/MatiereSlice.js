import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id: '',
    libelle: ''
}]

export const MatiereSlice = createSlice({
    name: 'matiere',
    initialState,
    reducers: {
        addMatiere : (state, action) => {
            state.push(action.payload)
        },
        deleteMatiere : (state, action) => {
            state = state.filter(m => m.id !== action.payload)
            return state
        },
        modifMatiere : (state, action) => {
            const {id, libelle} = action.payload;
            const getMatiere = state.find(item => item.id == id);
            if(getMatiere){
                getMatiere.libelle = libelle
            }
        }
    }
})

export const {addMatiere, deleteMatiere, modifMatiere} = MatiereSlice.actions;