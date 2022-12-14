import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor, sit amet consectetur',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam tenetur, et laborum at deleniti accusamus, laboriosam nobis eligendi accusantium voluptatum sequi animi? Exercitationem atque quos nostrum tenetur repudiandae temporibus velit.',
      img: 'https://images.pexels.com/photos/13996057/pexels-photo-13996057.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    },
  ];

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
