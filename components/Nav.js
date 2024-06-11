import React from 'react';
//import icons
import { BiHomeALt, BiUSer } from 'react-icons/Bs';
import { BsBriefcase, BsCalendar, BsChatLeftText } from 'react-icons/bs;
import { link } from 'react-scroll';



const Nav = () => {
  return <nav clasName='fixed bottom-2 lg:bottom-8'>
    <div className='container mx-auto'>
      {/*nav-inner*/}
      <div>
        <link>
          <BiHomeALt />
        </link>
      </div>
    </div>
  </nav>;
};

export default Nav;
