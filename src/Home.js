import React from 'react'
import './App.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  document.title = 'Hill | Home'

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Totam
          sapiente ad laboriosam.
        </h1>
        <div className=''>
          <img src='/images/pasta.jpeg' id='img-1' alt='Pasta' />
        </div>
        <div className='flex'>
          <div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              alias consequuntur dignissimos? Incidunt dolorum numquam veritatis
              ut officia. Enim recusandae, fugiat error nemo dolorem sit
              consectetur. Fuga, ea ex officiis expedita iure voluptatibus illum
              quo beatae tempore necessitatibus consequuntur eum ipsa temporibus
              veniam? Vel, quibusdam ad nihil molestias assumenda nostrum.
            </p>
          </div>
          <img src='/images/pasta2.jpeg' id='img-2' alt='Pasta' />
        </div>
        <div className='flex reverse p-3'>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At non
              dolorem quos temporibus optio totam id, maiores culpa tempora?
              Labore, assumenda! Aperiam facere unde inventore quia quas
              eligendi in reprehenderit sit, distinctio laborum, perferendis
              ipsam aspernatur iusto. Incidunt, dignissimos odit.
            </p>
          </div>
          <img src='images/pasta3.jpeg' id='img-3' alt='Pasta' />
        </div>
        <div className='book-table'>
          <div className='content'>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <br />
            <Link to='/reservation' className='btn-1'>
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
