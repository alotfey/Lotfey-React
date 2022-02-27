import React from 'react';
import profilePhoto from '../../assets/profile.png'
function About() {
  return (
    <div id='about' className='container'>
      <div className="mb-4"></div>
      <h2>About Me</h2>
      <img src={profilePhoto} alt="Profile"  className='mb-4'/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At laudantium excepturi quisquam quis nemo animi quidem cumque eos odio quia in, distinctio fugiat sunt voluptatibus! Temporibus eum animi rem impedit.
      Sequi ipsum quaerat perspiciatis itaque quasi ipsa quo provident possimus incidunt maxime consequatur ut nihil est fugit doloribus, architecto at libero porro quia cum tempora id corrupti asperiores. Assumenda, itaque?
      Nam error illum nisi nihil, nesciunt repellendus dolore sunt velit minus provident porro eum aut obcaecati repellat quas cum sed illo sint rerum exercitationem assumenda a eos dolores? Totam, consequuntur.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore obcaecati expedita culpa quia sed asperiores deserunt voluptatem est laboriosam corporis adipisci nihil suscipit, quas vel quasi rem nemo cum.
    Aspernatur accusantium omnis labore nostrum blanditiis maxime soluta? Ab earum natus cumque culpa? Adipisci incidunt odit, quas voluptatem at impedit autem fuga quis magnam officia temporibus in, praesentium deleniti cumque.</p>
    </div>
  );
}

export default About;
