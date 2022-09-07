import * as React from 'react';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const changeValue = darkMode ? themes.dark : themes.light;

  console.log(changeValue);
  return (
    <ThemeContext.Provider value={changeValue}>
      <Content changeTheme={setDarkMode} Theme={darkMode} />
    </ThemeContext.Provider>
  );
}
function Content({ changeTheme, Theme }) {
  const toggleTheme = () => {
    changeTheme(!Theme);
  };
  const theme = React.useContext(ThemeContext);
  return (
    <div
      style={{
        padding: '10rem 9rem',
        width: '100%',
        height: '100vh',
        background: theme.background,
        color: theme.foreground,
      }}
    >
      <button onClick={toggleTheme}>change Setting </button>
    </div>
  );
}
