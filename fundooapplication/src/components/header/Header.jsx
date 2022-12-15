import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase} from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';
import FundooIcon from "../FundooIcon";
import "./Header.css";

const Header=(props)=>{
    const openDrawer=()=>{
        props.listenToHeader();
    }
    return(
            <div className='header'>
                <div className='mainMenu'>
                    <div className='menu'><MenuIcon onClick={openDrawer} /></div>
                    <div className='keep'><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" /></div>
                    <div className="fundooIcon"><FundooIcon /></div>
                </div>
                <div className='searchHeader'>
                    <Search className='search'></Search>
                    <InputBase className='searchInput' id='search' placeholder='Search'></InputBase>
                </div>
                <div className='refreshHeader'>
                    <RefreshIcon></RefreshIcon>
                    <ListOutlinedIcon></ListOutlinedIcon>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                </div>
                <div className='account'>
                    <AppsIcon></AppsIcon>
                    <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                </div>
            </div>
    )
}
export default Header;