import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sidebar from './Components/Navigation/Sidebar';
import StudentsPage from './Pages/StudentsPage';
import CoefPage from './Pages/CoefPage';
import FilieresPage from './Pages/FilieresPage';
import MatieresPage from './Pages/MatieresPage';
import NotesPage from './Pages/NotesPage';
import TeachersPage from './Pages/TeachersPage';
import Header from './Components/Navigation/Header';
import EleveUpdate from './Components/Eleves/EleveUpdate';
import CoefUpdate from './Components/Coefficients/CoefUpdate';
import FiliereUpdate from './Components/Filieres/FiliereUpdate';
import MatiereUpdate from './Components/Matieres/MatiereUpdate';
import NoteUpdate from './Components/Notes/NoteUpdate';
import ProfUpdate from './Components/Profs/ProfUpdate';

const App = () => {
  return (
      <div className='d-flex'>

        <div className="col-2">
          <Sidebar/>
        </div>
        
        <div className="col app">
          <div className='enteteApp mb-4 bg-white'>
            <Header/>
          </div>
          <div className='px-5 mt-5'>
            <Routes>
              <Route index element={<Home/>} />
              <Route path='/'element={<Home/>} />
              <Route path='student' element={<StudentsPage/>} >
                <Route path=':id' element={<EleveUpdate/>}/>
              </Route>
              <Route path='coefficient' element={<CoefPage/>}>
                <Route path=':id' element={<CoefUpdate/>}/>
              </Route>
              <Route path='filiere' element={<FilieresPage/>} >
                <Route path=':id' element={<FiliereUpdate/>}/>
              </Route>
              <Route path='matiere' element={<MatieresPage/>}>
                <Route path=':id' element={<MatiereUpdate/>}/>
              </Route>
              <Route path='note' element={<NotesPage/>} >
                <Route path=':id' element={<NoteUpdate/>}/>
              </Route>
              <Route path='teacher' element={<TeachersPage/>} >
                <Route path=':id' element={<ProfUpdate/>}/>
              </Route>
            </Routes>
          </div>
        </div>

      </div>
  );
}

export default App;
