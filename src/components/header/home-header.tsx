'use client';

import React, {useState} from 'react';
import BeysisLogo from "./beysis-logo";
import {Link} from "../../i18n/navigation";
import {IoBagOutline, IoMenuOutline, IoSearchSharp} from "react-icons/io5";
import NavSearch from "./nav-search";
import {AnimatePresence} from "framer-motion";

const HomeHeader = () => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        <header className={'w-full h-[84px] fixed bg-white flex items-center justify-between px-4 py-3'}>
            <AnimatePresence>
                { isSearch ? <NavSearch
                    onClose={() => setIsSearch(false)}
                /> : (
                    <>
                        <div className={'flex gap-4 items-center justify-center text-[#b96955]'}>
                            <IoMenuOutline className={'text-[30px] cursor-pointer'} />
                            <IoSearchSharp className={'text-[20px] cursor-pointer'} onClick={() => setIsSearch(!isSearch)}/>
                        </div>
                        <div className={'flex-1 flex items-center justify-center'}>
                            <Link href={'/'}>
                                <BeysisLogo />
                            </Link>
                        </div>
                        <div className={'text-[#b96955] text-[24px] relative cursor-pointer'}>
                            <IoBagOutline />
                            <p className={'absolute top-[6px] text-[12px] left-2'}>0</p>
                        </div>
                    </>
                ) }
            </AnimatePresence>
        </header>
    );
};

export default HomeHeader;
