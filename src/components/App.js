import React, { useState } from 'react';
import Sidebar from './Sidebar';
// import styles from './App.css';

export default function App() {
  // hmmm what is this?
  // We've been using classes to hold state,
  // but we can use functional components
  // look up React Hooks if interested https://reactjs.org/docs/hooks-reference.html
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'I am home',
    about: 'About me',
    blog: 'Not up yet',
    contact: 'No thanks!'
  };

  return (
    <section>
      <Sidebar select={updateSelected}>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}
