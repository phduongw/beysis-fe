import React from 'react';
import BeysisLogo from "./BeysisLogo";
import {Link} from "../../i18n/navigation";

const HomeHeader = () => {
    return (
        <div className={'w-[300px] h-[300px]'}>
            <Link href={"/"}><BeysisLogo /></Link>
        </div>
    );
};

export default HomeHeader;
