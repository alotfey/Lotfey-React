import React from 'react';

function Resume() {
  return (
    <div id='resume' className='container'>
      <div className="mb-4"></div>
      <h2>Resume</h2>
      <p>download my  <a href="/resume.pdf">Resume</a></p>
      <h3>Front-end proficient</h3>
      <ul className='frontend'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end proficient</h3>
      <ul className='backend'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>REST</li>
        <li>GraphQl</li>
      </ul>

    </div>
  );
}

export default Resume;
