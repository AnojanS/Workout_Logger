import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import WorkoutsList from "./components/workouts-list.component";
import EditWorkout from "./components/edit-workout.component";
import CreateWorkout from "./components/create-workout.component";
import CreateExercise from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={WorkoutsList} />
      <Route path="/edit/:id" component={EditWorkout} />
      <Route path="/create" component={CreateWorkout} />
      <Route path="/exercise" component={CreateExercise} />
      </div>
    </Router>
  );
}

export default App;
