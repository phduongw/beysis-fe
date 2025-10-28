'use client';

import React, {FC} from 'react';
import {IoCloseOutline, IoSearchSharp} from "react-icons/io5";
import {motion} from "framer-motion";

interface Props {
    onClose: () => void;
    animationKey: string;
}

const NavSearch: FC<Props> = ({ onClose, animationKey }) => {
    return (
        <motion.div
            key={animationKey}
            className={'w-full'}
            initial={{
                width: 0,
                opacity: 0
            }}
            animate={{
                width: '100%',
                opacity: 1
            }}
            exit={{
                width: 0,
                opacity: 0
            }}
            transition={{
                duration: 0.2,
                ease: 'easeOut',
            }}
        >
            <div className={'w-full flex items-center justify-center'}>
                <div className={'w-full flex justify-between border p-3 rounded-sm'}>
                    <input type="text" placeholder="Search..." className={'flex-1 outline-none'} />
                    <IoSearchSharp className={'text-[20px] cursor-pointer text-[#b96955]'}/>
                </div>
                <IoCloseOutline onClick={onClose} className={'text-[#b96955] cursor-pointer flex-1/10 text-2xl hover:text-3xl transform duration-150'} />
            </div>
        </motion.div>
    );
};

export default NavSearch;