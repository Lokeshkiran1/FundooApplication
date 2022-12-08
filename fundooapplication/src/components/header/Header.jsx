import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import FundooIcon from "../FundooIcon";
import "./Header.css"
const Header=()=>{
    return(
        <div>
            <div className='header'>
                <div className='mainMenu'>
                    <div className='menu'><MenuIcon></MenuIcon></div>
                    <div className='keep'><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" /></div>
                    <div className="fundooIcon"><FundooIcon /></div>
                </div>
                <div className='searchHeader'>
                    <Search className='search'></Search>
                    <InputBase className='searchInput' id='search' placeholder='Search'></InputBase>
                </div>
                <div className='refreshHeader'>
                    <RefreshIcon></RefreshIcon>
                    <ViewListIcon></ViewListIcon>
                    <SettingsIcon></SettingsIcon>
                </div>
                <div className='account'>
                    <AppsIcon></AppsIcon>
                    <AccountCircleIcon></AccountCircleIcon>
                </div>
            </div>
        </div>
    )
}
export default Header;