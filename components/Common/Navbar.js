import React, { useContext, useEffect, useState, useRef } from 'react';
import styles from './Navbar.module.scss';
import { CSSTransition } from 'react-transition-group';
import Industries from './NavigationTypes/Industries';

import Services from './NavigationTypes/Services';
import InsightsEvents from './NavigationTypes/InsightsEvents';
import About from './NavigationTypes/About';
import Careers from './NavigationTypes/Careers';
import Contact from './NavigationTypes/Contact';

import LogoDarkIcon from '../../public/logoDark.svg';
import LogoIcon from '../../public/logo.svg';
import { NavbarStateContext } from '../../state/navbarState';
function Navbar() {
  const { navbarThemeIsLight, setNavbarTheme } = useContext(NavbarStateContext);
  const [selectingLanguage, setSelectingLanguage] = useState(false);
  const [activeChild, setActiveChild] = useState();
  const [prevActiveChild, setPrevActiveChild] = useState();
  const [showNavbar, setShowNavbar] = useState(true);
  const [navFixed, setNavFixed] = useState(false);
  useEffect(() => {
    window.onscroll = (e) => {
      // console.log(e);
      // console.log(window.scrollY);
      if (window.scrollY > 900) {
        setNavFixed(true);
        setNavbarTheme('light');
        setShowNavbar(true);
      } else if (window.scrollY > 500) {
        setShowNavbar(false);
      } else {
        setNavFixed(false);
        setNavbarTheme('dark');
        setShowNavbar(true);
      }
    };
  }, []);
  const properties = (index) => ({
    onMouseEnter: () =>
      setActiveChild(() => {
        switch (index) {
          case 0:
            return <Industries />;
          case 1:
            return <Services />;
          case 2:
            return <InsightsEvents />;
          case 3:
            return <About />;
          case 4:
            return <Careers />;
          case 5:
            return <Contact />;
          default:
            return null;
        }
      }),
    onMouseLeave: () => setActiveChild(null),
  });
  useEffect(() => {
    if (activeChild) {
      setPrevActiveChild(activeChild);
    }
  }, [activeChild]);
  return (
    <CSSTransition
      classNames={`navbar`}
      timeout={300}
      in={showNavbar}
      unmountOnExit
    >
      <div
        className={[
          styles.container,
          navbarThemeIsLight ? styles.light : styles.dark,
        ].join(' ')}
        style={{
          position: navFixed ? 'fixed' : 'absolute',
        }}
      >
        <nav className={styles.nav} onClick={() => setSelectingLanguage(false)}>
          <div className={styles.logo}>
            {navbarThemeIsLight ? <LogoDarkIcon /> : <LogoIcon />}
          </div>
          <div
            className={styles.line}
            style={{
              backgroundColor: navbarThemeIsLight
                ? 'var(--color-light-gray)'
                : 'white',
            }}
          ></div>
          <div className={styles.rest}>
            <p {...properties(0)}>industries</p>

            <p {...properties(1)}>services</p>
            <p {...properties(2)}>insights & events</p>
            <p className={styles.spacer}></p>
            <p {...properties(3)}>about</p>
            <p {...properties(4)}>careers</p>
            <p {...properties(5)}>contact us</p>
            <div className={styles.language}>
              <div
                className={styles.languageSelect}
                onClick={(e) => {
                  setSelectingLanguage(true);
                  e.stopPropagation();
                }}
              >
                en
              </div>

              <CSSTransition
                classNames="language-select"
                timeout={300}
                in={selectingLanguage}
                unmountOnExit
              >
                <div className={styles.languageOptions}>
                  <p className={styles.option}>en</p>
                  <p className={styles.divider}></p>
                  <p className={styles.option}>de</p>
                </div>
              </CSSTransition>
            </div>
          </div>
        </nav>

        <CSSTransition
          classNames="modal"
          timeout={300}
          in={!!activeChild}
          unmountOnExit
        >
          <div className={styles.modal}>{prevActiveChild}</div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}

export default Navbar;
