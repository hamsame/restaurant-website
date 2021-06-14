import React from 'react'
import Navbar from './Navbar'

const Reservation = () => {
  document.title = 'Hill | Reservations'

  return (
    <div>
      <Navbar />
      <div className='reservation'>
        <div>
          <h2>Make a reservation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            semper eget duis at tellus at urna. At elementum eu facilisis sed
            odio morbi quis commodo. Lorem mollis aliquam ut porttitor leo a
            diam. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Duis ultricies lacus sed turpis tincidunt id.
          </p>
          <form>
            <div className='custom-select' style={{ width: '200px' }}>
              <select>
                <option value='0' selected>
                  1 Person
                </option>
                <option value='1'>2 People</option>
                <option value='2'>3 People</option>
                <option value='3'>4 People</option>
                <option value='4'>5 People</option>
                <option value='5'>6 People</option>
                <option value='6'>7 People</option>
                <option value='7'>8 People</option>
                <option value='8'>9 People</option>
                <option value='9'>10 People</option>
                <option value='10'>Larger Party</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservation
