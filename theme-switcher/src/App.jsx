import React, {useEffect} from 'react'
import './index.css'
import {ThemeProvider} from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  // yha pr bhi functions ko define kr skte hai. 
  const setDark = () => {
    setCurrentTheme("dark");
  }
  const setLight = () => {
    setCurrentTheme("light");
  }
  // but theme change toh khud hi krni padthi hai, React can't help here so
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(currentTheme);
  }, [currentTheme])

  return (
    <ThemeProvider value={{currentTheme, setDark, setLight}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
