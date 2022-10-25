import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single_post = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/7235676/pexels-photo-7235676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/10320674/pexels-photo-10320674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMgtiAwrIsEj7HYUbAhDgZMsPMZ_9AcuWSAHXXL21lA&s'
                alt=''
              />
            </Link>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLimPuILYbWutOA3cFLlzV7GNnLEg2MdWymmdwp-E&s'
              alt=''
            />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos
          laudantium consequatur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quas dolorum cum, at error hic! Fugit numquam voluptate excepturi
          consequatur incidunt doloribus, quo voluptas autem vero assumenda
          mollitia ipsum harum inventore cum vel eius similique earum odit dicta
          distinctio beatae itaque sed repellendus? Repellendus nulla ipsa
          veritatis magnam hic. Quas soluta ad, tenetur accusamus nesciunt atque
          exercitationem eum dolore vel? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas rerum reprehenderit maiores. Voluptatibus
          ducimus laborum aliquid itaque ea tenetur fugiat! At ut nesciunt nobis
          doloribus tenetur omnis, consequuntur laudantium odit illo dolores
          maiores maxime corrupti eum minus sequi excepturi eligendi. Evenie t
          velit, facere sunt nam voluptatibus debitis maiores libero omnis,
          aspernatur ratione autem laudantium ad voluptatem fuga at similique,
          consequuntur reiciendis. Officiis cum soluta tempore! Sit aliquam
          culpa neque, maxime odio quas accusamus repudiandae labore beatae
          consectetur dolores eveniet soluta? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic autem rem corporis id sit? Vel odit
          aliquid nihil necessitatibus nobis beatae aperiam sapiente officiis
          laborum mollitia alias doloremque enim quo iste veritatis debitis, cum
          facilis sit voluptatum, exercitationem pariatur ipsum.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single_post;
