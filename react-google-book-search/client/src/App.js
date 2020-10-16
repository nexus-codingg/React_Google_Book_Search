import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import SearchBooksPage from './pages/SearchBooksPage';
import SavedBooksPage from './pages/SavedBooksPage';
import './App.css';



function App() {
  return (
    <Router>
//       <NavBar />
//       <Banner />
//       <Switch>
//         <Route exact path={"/"}>
//           <SearchBooksPage />
//         </Route>
//         <Route exact path={"/saved"}>
//           <SavedBooksPage />
//         </Route>
//       </Switch>
//     </Router>
  );
}

export default App;

