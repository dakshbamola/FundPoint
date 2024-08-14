import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, dashboard, profile, createCampaign, thirdweb } from '../assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className='flex md:flex-row flex-col-reverse justify-end mb-[35px] gap-6 '>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? `Connected ${address}` : 'Connect'}
          styles={address ? 'bg-[#1dc071] truncate w-[190px] cursor-default' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if (!address) connect();
          }}
        />

        <Link to="/profile">
          <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
            <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain ' />
          </div>
        </Link>
      </div>
      <div className='sm:hidden flex justify-between items-center relative '>
        <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer '>
          <img src={logo} alt="user" className='w-[60%] h-[60%] object-contain ' />
        </div>
        <img src={menu} alt="menu" className='w-[34px] h-[34px] object-contain cursor-pointer ' onClick={() => setToggleDrawer((e) => !e)} />
      </div>

      <div className={`absolute top-[60px] right-2 left-2 rounded-[10px] bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
        <ul className='mb-4 '>
          <li
            className={`flex p-4 ${isActive === 'dashboard' && 'bg-[#3a3a43]'} cursor-pointer`}
            onClick={() => {
              setIsActive('dashboard');
              setToggleDrawer(false);
              navigate('/');
            }}
          >
            <img
              src={dashboard}
              alt="dashboard"
              className={`w-[24px] h-[24px] object-contain ${isActive === 'dashboard' ? 'grayscale-0' : 'grayscale'}`}
            />
            <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === 'dashboard' ? 'text-[#1dc071]' : 'text-[#808191]'} `}>
              Dashboard
            </p>
          </li>
          <li
            className={`flex p-4 ${isActive === 'campaign' && 'bg-[#3a3a43]'} cursor-pointer`}
            onClick={() => {
              setIsActive('campaign');
              setToggleDrawer(false);
              navigate('/create-campaign');
            }}
          >
            <img
              src={createCampaign}
              alt="campaign"
              className={`w-[24px] h-[24px] object-contain ${isActive === 'campaign' ? 'grayscale-0' : 'grayscale'}`}
            />
            <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === 'campaign' ? 'text-[#1dc071]' : 'text-[#808191]'} `}>
              Campaign
            </p>
          </li>
          <li
            className={`flex p-4 ${isActive === 'profile' && 'bg-[#3a3a43]'} cursor-pointer`}
            onClick={() => {
              setIsActive('profile');
              setToggleDrawer(false);
              navigate('/profile');
            }}
          >
            <img
              src={profile}
              alt="profile"
              className={`w-[24px] h-[24px] object-contain ${isActive === 'profile' ? 'grayscale-0' : 'grayscale'}`}
            />
            <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === 'profile' ? 'text-[#1dc071]' : 'text-[#808191]'} `}>
              Profile
            </p>
          </li>
        </ul>
        <div className="flex mx-4">
          <CustomButton
            btnType="button"
            title={address ? `Connected ${address}` : 'Connect'}
            styles={address ? 'bg-[#1dc071] truncate w-[190px]' : 'bg-[#8c6dfd]'}
            handleClick={() => {
              if (!address) connect();
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Navbar