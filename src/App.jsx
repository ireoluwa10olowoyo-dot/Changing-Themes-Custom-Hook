import { useState } from 'react';
import useThemes,{ThemeProvider} from './hooks/useThemes';


function App() {
  
  return(
 <ThemeProvider>
  <MainLayout/>
 </ThemeProvider>
  )
}

function MainLayout(){
  const {theme,toggleTheme} = useThemes();

  return (
    <nav className={`${theme} flex items-center justify-center h-screen`}>
    <p className=" mt-50 text-lg">Hey</p>
    <p className=" mb-50 text-lg">Sup</p>
    <button onClick={toggleTheme} className="text-xl text-center  border rounded-lg text-white bg-black cursor-pointer hover:opacity-0.7">Switch to opposite theme</button>
    <p className="mt-50 text-lg">Wassup</p>
    <p className="mb-50 text-lg">How you doing</p>
  </nav>
    
  )
}

export default App
