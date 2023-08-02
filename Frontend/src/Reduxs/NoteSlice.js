import { createSlice } from "@reduxjs/toolkit"

const initialState = [{
    id:'',
    note: '',
    matiereId:'',
    filiereId: ''
}]

export const NoteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            state = state.filter(n => n.id !== action.payload)
            return state
        },
        modifNote: (state, action) => {
            const {id, matiereId, note, filiereId} = action.payload
            const getNote = state.find(item => item.id == id)
            if(getNote){
                getNote.note = note;
                getNote.filiereId = filiereId;
                getNote.matiereId = matiereId;
            }
        }
    }
})

export const {addNote, deleteNote, modifNote} = NoteSlice.actions