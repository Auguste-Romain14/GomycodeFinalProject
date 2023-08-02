import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students : [],
}

export const StudentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent:(state, action) => {
            if (Array.isArray(action.payload) ) {
                state.students = action.payload;
            }else{
                state.students.push(action.payload)
            }
        },
        deleteStudent:(state, action) => {

            state.students = state.students.filter(e => {
                console.log(e, action.payload)
                return e._id !== action.payload
            })
            // console.log(state);
            //return state.students;
        },
        modifStudent:(state, action) => {
            const {id, nom, prenom, age, sexe, matricule} = action.payload;
            const newStudent = state.students.find(item => item._id == id);

            if(newStudent) {
                newStudent.nom = nom;
                newStudent.prenom = prenom;
                newStudent.age = age;
                newStudent.matricule = matricule;
                newStudent.sexe = sexe;
            }
        }
    }
})

export const {addStudent, deleteStudent, modifStudent} = StudentSlice.actions;

