import { useState } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemeProvider = ({ children }) => {

    const [color, setColor] = useState(false);

    // BG CHANGE FUNCTION
    const changeBg = () => {
        setColor(!color)
    }

    const themeInfo = {
        changeBg,
        color,
        setColor,
    }


    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;