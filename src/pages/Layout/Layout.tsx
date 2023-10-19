import React, { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { SideBar } from '../../Component/SideBar/SideBar';
import { Header } from '../../Component/Header/Header';
import { LayputWrapper } from './Layout.styled';
import { UserAuth, UserAuthSelector } from '../../Store/Slice/User.slice';

interface LayoutProps {
  className?: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  className,
}) => {
  const userAuth: UserAuth = useSelector(UserAuthSelector);
  return (
    <LayputWrapper className={`layput-wrapper ${className}`}>
      <Header />
      <div className="body">
        <SideBar />
        {/* {userAuth?.accessToken ? <SideBar /> : null} */}
        <div className="body-children">{children}</div>
      </div>
    </LayputWrapper>
  );
};

export default Layout;
