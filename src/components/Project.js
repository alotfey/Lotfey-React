import React from 'react';
import stockTicker from '../assets/image/stockTicker.jpg';
import horiseon from '../assets/image/horiseon.jpg';
import jarOKids from '../assets/image/jar-o-kids.jpg';
import profileReact from '../assets/image/profile-react.jpg'
import runbuddy from '../assets/image/runbuddy.jpg'
import budgetguard from '../assets/image/budgetguard.jpg'
import { FaGithub } from 'react-icons/fa';

function Project() {
  return (
    <div className="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={stockTicker} alt="stockTicker" />
            <div class="overlay">
                <h2>Stock Ticker</h2>
				<p>
        <a href="https://github.com/ening6649/project1"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={horiseon} alt="horiseon"/>
            <div class="overlay">
                <h2>Horiseon</h2>
				<p>
        <a href="https://github.com/alotfey/horiseon"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={jarOKids} alt="jarOKids"/>
            <div class="overlay">
                <h2>jar O Kids</h2>
				<p>
        <a href="https://github.com/98smrav6/Jar-O-Kids"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>
<div className="mb-4"></div>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={profileReact} alt="profileReact"/>
            <div class="overlay">
                <h2>Profile React</h2>
				<p>
        <a href="https://github.com/alotfey/Lotfey-React"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={runbuddy} alt="runbuddy"/>
            <div class="overlay">
                <h2>Runbuddy</h2>
				<p>
        <a href="https://github.com/alotfey/runbuddy"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img className="img-responsive" width="400px" height="160" src={budgetguard} alt="budgetguard"/>
            <div class="overlay">
                <h2>budgetguard</h2>
				<p>
        <a href="https://github.com/alotfey/budget-guard"><FaGithub /></a>
				</p>
            </div>
    </div>
</div>

    </div>
  );
}

export default Project;
