import Footer from "../components/footer/footer";
import RightSideBar from "../components/navbar/motionRightSideNavbar/rightSideBar/rightSideBar";
import Variants from "../components/navbar/moitonSideNavbar/variants/variant";

import { ReactNode } from 'react';
import Navbar from "../components/navbar/navbar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <Variants />
        <Navbar />
        <RightSideBar />
        {children}
        <Footer />
      </>
    );
};