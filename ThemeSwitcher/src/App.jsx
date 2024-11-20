import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <Header /> 

        {/* Main content */}
        <div className="w-full px-4 lg:px-16 mt-4">
          <Layout />
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </ThemeProvider>



    
   /*  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full"> 
        <Header/>
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          
        </div>

        <div className="w-full px-4 lg:px-16">
          <Layout/>
        </div>
      </div>
    </div>
    </ThemeProvider> */
  );
}

export default App;
