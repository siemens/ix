
export const toggleTheme = () => {
  const lightTheme = 'theme-light';
  const darkTheme = 'theme-dark';

  if (!document.body.classList.contains(lightTheme) && !document.body.classList.contains(darkTheme)) {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.toggle(lightTheme);
    document.body.classList.toggle(darkTheme);
  }
};
