import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
import { SEO } from '../components/SEO';
import labels from '../../contents/labels.yml';
import { ModalUpdates } from '../components/modal/ModalUpdates';
import { GlobalStateContextProvider } from '../context/globalContext';
import { Header } from './Header';
import { Footer } from './Footer';

const { goToMainContent, goToFooter } = labels;

const useStyles = createUseStyles({
  '@global': {
    ':focus:not(:focus-visible)': {
      borderColor: 'initial',
      boxShadow: 'none',
    },
    // override text-primary color
    '.text-primary': {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      color: ['var(--primary)', '!important'],
    },
    '.text-info': {
      color: ['#33485C', '!important'],
    },
    '.text-info-title': {
      color: ['#455A64', '!important'],
    },
    '.focus-a11y-contrast:focus': {
      border: '2px solid #ff9900', // This is used for a11y high contrast compliance
    },
  },
});

export const Layout = ({ children }) => {
  useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <SEO />
      <a className="sr-only sr-only-focusable" href="#content">
        {goToMainContent}
      </a>
      <a className="sr-only sr-only-focusable" href="#footer">
        {goToFooter}
      </a>
      <GlobalStateContextProvider>
        <Header toggleModal={toggleModal} />
        <main className="text-info text-break" id="content">
          {children}
          <ModalUpdates initialState={modalIsOpen} handleToggle={toggleModal} />
        </main>
        <Footer />
      </GlobalStateContextProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};