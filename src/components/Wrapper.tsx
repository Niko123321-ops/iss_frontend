import React from "react";
import Footer from './Footer';
import Nav from './Nav';

type Props = {
    children: JSX.Element,
};

const Wrapper = ({ children }: Props) => {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Wrapper;