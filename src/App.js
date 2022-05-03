import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { DarkTheme, LightTheme, GlobalStyle } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import "./index.css";
import TodoApp from "./Pages/TodoApp";
import Funny from "./Pages/Funny";
import Hentai from "./Pages/Hentai";

function App() {
  const [hideSideNavs, setHideSideNavs] = useState(false);
  const [theme, setTheme] = useState("light");
  const [themeIcons, setThemeIcons] = useState(true);
  const [sideNavTheme, setSideNavTheme] = useState(false);
  const [themetext, setThemeText] = useState("Light Mode");
  const [isToggle, setIsToggle] = useState(false);

  const themeToggler = () => {
    if (theme === "light") {
      // const currentTheme =
      setTheme("dark");
      setThemeIcons(false);
      setSideNavTheme(true);
      setIsToggle(true);
      setThemeText("Dark mode ");
    } else {
      setTheme("light");
      setThemeIcons(true);
      setSideNavTheme(false);
      setThemeText("Light Mode ");
      setIsToggle(false);
    }
  };

  const showSideNav = () => {
    setHideSideNavs(!hideSideNavs);
  };

  useEffect(() => {
    setThemeIcons(themeIcons);
    setThemeText(themetext);
    setIsToggle(isToggle);
    setSideNavTheme(sideNavTheme);
    setHideSideNavs(hideSideNavs);
  }, [sideNavTheme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <Router>
          <GlobalStyle />
          <Navbar
            showSideNav={showSideNav}
            themeToggler={themeToggler}
            themeIcons={themeIcons}
            themetext={themetext}
            theme={theme}
            isToggle={isToggle}
          />
          <Sidebar
            show={hideSideNavs}
            showSideNav={showSideNav}
            themeToggler={themeToggler}
            theme={theme}
            sideNavTheme={sideNavTheme}
          />

          <Switch>
            <Route
              path="/projects/todo-app"
              component={TodoApp}
              themeToggler={themeToggler}
              theme={theme}
            />
            <Route
              path="/hentai"
              exact={false}
              render={(props) => <Hentai {...props} theme={theme} />}
              themeToggler={themeToggler}
            />
            <Route
              path="/funny"
              exact={false}
              render={(props) => <Funny {...props} theme={theme} />}
              themeToggler={themeToggler}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
