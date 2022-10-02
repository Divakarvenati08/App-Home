import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiOutlineHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Wi-Fi',
    path: '/wifi',
    icon: <FaIcons.FaWifi />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Wifi Submenu 1',
        path: '/wifi',      
        cName: 'sub-nav'
      },
      {
        title: 'Wifi Submenu 1',
        path: '/wifi',       
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Devices',
    // path: '/devices',
    icon: <FaIcons.FaLaptop/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Devices',
        path: '/devices',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Parental Controls',
    path: '/parentalcontrols',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Status',
    path: '/status',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Status Submenu 1',
        path: '/status'
      },
      {
        title: 'Status Submenu 2',
        path: '/status'
      }
    ]
  }
];
