import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BackToTop from "../Scroll/Back_to_top";
import ScrollToTop from "../Scroll/Scroll_to_top";
import MainFooter from "../Footer/MainFooter";
import BottomNav from "../Footer/BottomNav";

const AdminLayout = () => {
    return (
        <>
            <Header />
            <BackToTop />
            <ScrollToTop />
            <>
                <Outlet />
            </>

            <MainFooter />
            <BottomNav/>
        </>
    );
};

export default AdminLayout;
