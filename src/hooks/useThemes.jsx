import React,{useState,useEffect, useContext, createContext} from 'react';

const ThemeContext = createContext();


export function ThemeProvider({children}){

const [theme,setTheme] = useState(()=>{
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark' || currentTheme == 'light'){
        return currentTheme
    }
    else{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
            return 'dark'
        }
    }
    return 'light'
})
 useEffect(()=>{
    localStorage.setItem('theme',theme);
    document.documentElement.setAttribute('data-theme',theme);
 },[theme])

 const toggleTheme = () =>{
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
 }

 return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
 );
}


export default function useThemes(){
    return useContext(ThemeContext);
}