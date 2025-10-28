import React, { FC } from 'react';
import {motion} from "framer-motion";
import {IoBagOutline, IoCloseOutline, IoMenuOutline, IoSearchSharp} from "react-icons/io5";
import {Link} from "../../i18n/navigation";
import BeysisLogo from "./beysis-logo";

interface Props {
    onSearchClick: () => void;
    isVisibleMenu: boolean;
    onOpenMenu: (value: boolean) => void;
}

const Navigation: FC<Props> = ({ onSearchClick, onOpenMenu, isVisibleMenu }) => {

    return (
        <div className={'flex items-center justify-between px-4 py-3'}>
            <div  className={'flex gap-4 items-center justify-center text-[#b96955]'}>
                { isVisibleMenu ?
                    <motion.div
                        key={'close-icon'}
                        initial={{
                            opacity: 0,
                            rotate: -90,
                            scale: -0.5
                        }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <IoCloseOutline onClick={() => onOpenMenu(false)} className={'text-[30px] cursor-pointer'} />
                    </motion.div> :
                    <motion.div
                        key={'menu-icon'}
                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <IoMenuOutline onClick={() => onOpenMenu(true)} className={'text-[30px] cursor-pointer'} />
                    </motion.div>
                }
                <IoSearchSharp className={'text-[20px] cursor-pointer'} onClick={onSearchClick}/>
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
        </div>
    );
};

export default Navigation;