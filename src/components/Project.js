import React from 'react';
// import photo from '../assets/caniff'
function Project(props) {
  const images = [
    {
      id: 1,
      src: '../assets/caniff.jpg',
      title: 'caniff',
      github: 'https://github.com/caniff',
    },
    {
      id: 2,
      src: '../assets/horiseon.jpg',
      title: 'horiseon',
      github: 'https://github.com/horiseon',
    },
    {
      id: 3,
      src: '../assets/jar-o-kids.jpg',
      title: 'jar-o-kids',
      github: 'https://github.com/jar-o-kids',
    },
    {
      id: 4,
      src: '../assets/oiacademy.jpg',
      title: 'oiacademy',
      github: 'https://github.com/oiacademy',
    },
    {
      id: 5,
      src: '../assets/runbuddy.jpg',
      title: 'runbuddy',
      github: 'https://github.com/runbuddy',
    },
  ];

  // images.map(({ id, src, title, description }) => (
  //   <img key={id} src={src} title={title} alt={description} />
  // ));
  return (
    <div className='col-4'>
      
      
        {
          images.map((img) => (
            <img key={img.id} src={img.src} alt={img.title} />
          ))
        }
      
      <p>test</p>
    </div>
  );
}

export default Project;
