import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Contact } from "./Contact.jsx"

export const App = () => (
  <div>
    <h1>Devika Vijayaraghavan</h1>
    <div className = "boxLayout">
      <div className = "header">
        <h2>About me:</h2>
      </div>
        <div className = "paragraph">
	  <p>Hello! I'm Devika. I'm a Junior at UW-Madison pursuing a Data Science BS and Computer Science Certificate. My interests include...</p>
        </div>
    </div>
    <Hello/>
    <Info/>
  </div>
);
