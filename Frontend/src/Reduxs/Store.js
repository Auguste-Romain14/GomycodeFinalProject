import { configureStore } from "@reduxjs/toolkit";
import { StudentSlice } from "./StudentSlice";
import { FiliereSlice } from "./FiliereSlice";
import { MatiereSlice } from "./MatiereSlice";
import { NoteSlice } from "./NoteSlice";
import { CoefSlice } from "./CoefSlice";
import { ProfSlice } from "./ProfSlice";

export const Store = configureStore({
    reducer: {
        student : StudentSlice.reducer,
        filiere : FiliereSlice.reducer,
        matiere : MatiereSlice.reducer,
        note : NoteSlice.reducer,
        coefficient : CoefSlice.reducer,
        professeur : ProfSlice.reducer
    }
})