import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    nom:'',
    prenom:'',
    email:''
}]

export const ProfSlice = createSlice({
    name:'professeur',
    initialState,
    reducers: {
        addProf:(state, action) => {
            state.push(action.payload)
        },
        deleteProf:(state, action) => {
            state = state.filter(e => e.id !== action.payload)
            return state;
        },
        modifProf:(state, action) => {
            const {id, nom, prenom, email} = action.payload;
            const newProf = state.find(item => item.id == id);
            if(newProf) {
                newProf.nom = nom;
                newProf.prenom = prenom;
                newProf.email = email;
            }
        }
    }
})

export const {addProf, deleteProf, modifProf} = ProfSlice.actions;