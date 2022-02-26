import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function PageManger() {
  const [currentPage, setCurrentPage] = useState('About');


  const changeTitle = () => {
    if (currentPage === 'About') {
      return (document.title = 'About');
    } if (currentPage ==='Portfolio') {
      return (document.title = 'Portfolio');
    } if (currentPage === 'Contact') {
      return (document.title = 'Contact');
    }
    if (currentPage === 'Resume') {
      return (document.title = 'Resume');
    }
  };

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {changeTitle()}
    </div>
  );
}

export default PageManger;
