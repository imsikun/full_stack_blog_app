import React from 'react';

const Menu = () => {
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
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={post.img} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
