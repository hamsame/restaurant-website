import React from 'react'
import Navbar from './Navbar'

const About = () => {
  document.title = 'Hill | About'
  return (
    <div>
      <Navbar />
      <h1 className='center'>Our Story</h1>
      <div className='text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          semper eget duis at tellus at urna. At elementum eu facilisis sed odio
          morbi quis commodo. Lorem mollis aliquam ut porttitor leo a diam.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
        </p>
        <img src='/images/served-food.jpeg' className='center' id='img-4' />
      </div>
      <div className='text'>
        <p>
          Tristique sollicitudin nibh sit amet. Morbi non arcu risus quis varius
          quam. Consequat interdum varius sit amet. Rhoncus aenean vel elit
          scelerisque mauris pellentesque. Blandit cursus risus at ultrices mi
          tempus imperdiet nulla malesuada. Magnis dis parturient montes
          nascetur ridiculus mus mauris vitae ultricies. Ut lectus arcu bibendum
          at varius. Vivamus arcu felis bibendum ut tristique et. Elit
          ullamcorper dignissim cras tincidunt. Justo donec enim diam vulputate
          ut. At ultrices mi tempus imperdiet nulla malesuada. Pharetra et
          ultrices neque ornare aenean euismod elementum nisi quis.
        </p>
        <p>
          Id venenatis a condimentum vitae sapien pellentesque. Mauris sit amet
          massa vitae tortor. Quis hendrerit dolor magna eget est lorem ipsum.
          Felis imperdiet proin fermentum leo. Nibh tellus molestie nunc non
          blandit massa. Diam sollicitudin tempor id eu nisl nunc mi ipsum
          faucibus. In arcu cursus euismod quis viverra nibh cras. Adipiscing
          commodo elit at imperdiet dui accumsan sit amet nulla. Arcu cursus
          vitae congue mauris rhoncus. Erat pellentesque adipiscing commodo elit
          at imperdiet dui. Commodo viverra maecenas accumsan lacus. Placerat
          orci nulla pellentesque dignissim enim sit amet venenatis urna. Hac
          habitasse platea dictumst vestibulum. Laoreet non curabitur gravida
          arcu ac tortor dignissim. Arcu cursus euismod quis viverra nibh.
          Eleifend donec pretium vulputate sapien nec sagittis aliquam
          malesuada. Mauris augue neque gravida in fermentum et.
        </p>
        <p>
          Eu volutpat odio facilisis mauris sit. Turpis in eu mi bibendum neque.
          Erat imperdiet sed euismod nisi porta lorem mollis. Lacus luctus
          accumsan tortor posuere ac ut consequat semper. Non sodales neque
          sodales ut etiam sit amet nisl. Arcu non odio euismod lacinia at quis
          risus. Nullam vehicula ipsum a arcu. Donec adipiscing tristique risus
          nec feugiat in fermentum posuere. Morbi tincidunt ornare massa eget.
          Ultricies leo integer malesuada nunc vel.
        </p>
      </div>
    </div>
  )
}

export default About
