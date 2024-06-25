import {useState} from 'react';

const useMode = () => {
    const [mode, setMode] = useState("dark");

    const toggleMode = (mode) => {
        // (mode==="light") ? setMode("dark"): setMode("light");
        if(mode==='light'){
            setMode('dark')
        }else{
            setMode('light');
        }
    }

    return {mode, toggleMode};
}

export default useMode;