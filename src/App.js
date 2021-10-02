import React from 'react';
import Profile from './profile/profile.js'
import NavBar from './Navbar.js';

function App() {
  
  const handleName = (fullName) => alert(` And your Name is: ${fullName}`);
  return(
      <div className="App" >
        <NavBar />
        <Profile  
        fullName="Nouha Hamrouni" 
        bio="Hi, Iam a beginner!" 
        profession="Web Developper Beginner"
        handleName={handleName} 
        />
        <footer>
          <div class="text-center p-4" >
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="*">Certain School.com</a>
          </div>
          </footer>
          
        </div>
    )
  
}

export default App;