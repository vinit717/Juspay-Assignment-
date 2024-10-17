import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
      document.body.classList.add(savedTheme === 'dark' ? 'bg-custom-black' : 'bg-white');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    document.body.classList.remove(theme === 'dark' ? 'bg-custom-black' : 'bg-white');
    document.body.classList.add(newTheme === 'dark' ? 'bg-custom-black' : 'bg-white');

    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

