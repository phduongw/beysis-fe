import React, {FC, ReactNode} from 'react';
import HomeHeader from "../../../components/header/home-header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={'w-full h-full'}>
            <HomeHeader />
            Đây là trang được công khai
            {children}
        </div>
    );
};

export default Layout;