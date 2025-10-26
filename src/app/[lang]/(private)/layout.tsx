import React, {FC, ReactNode} from 'react';

const Layout: FC<{ children: ReactNode, }> = ({ children }) => {
    return (
        <div>
            Đây là trang được bảo mật
            {children}
        </div>
    );
};

export default Layout;