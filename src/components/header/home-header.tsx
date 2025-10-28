'use client';

import React, {useState} from 'react';
import NavSearch from "./nav-search";
import {AnimatePresence} from "framer-motion";

import SideBar from "./side-bar";
import Navigation from "./navigation";

const HomeHeader = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)


    return (
        <header className={`w-full ${isVisibleMenu ? 'h-full' : 'h-[84px]' }  bg-white  fixed`}>
            <AnimatePresence mode="wait">
                { isSearch ? <NavSearch
                    onClose={() => setIsSearch(false)}
                    animationKey='nav-search'
                /> : (
                    <div key="normal-header" className={'w-full h-full flex flex-col'}>
                        <Navigation onSearchClick={() => setIsSearch(true)} isVisibleMenu={isVisibleMenu} onOpenMenu={(value) => setIsVisibleMenu(value)} />
                         { isVisibleMenu ? <SideBar /> : null}
                    </div>
                ) }
            </AnimatePresence>
        </header>
    );
};

export default HomeHeader;
