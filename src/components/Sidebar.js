import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import StoreFrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ExpandMoreOutLined from '@mui/icons-material/ExpandMoreOutlined'


const Sidebar = () => {
    return (
      <div className="sidebar">
        <SidebarRow
          src="https://avatars.githubusercontent.com/u/9919?s=40&v=4"
          title="Raage Diriye"
        />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutLined} title="Marketplace" />
      </div>
    );
}

export default Sidebar
