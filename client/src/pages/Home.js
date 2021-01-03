import React from 'react';
import ContentBanner from '../Components/Content-banner';
import ContentBottom from '../Components/Content-bottom';
import ContentCenter from '../Components/Content-center';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Home() {
    return (
        <div>
            <Header />
            <ContentCenter />
            <ContentBottom />
            <ContentBanner />
            <Footer />
        </div>
    );
}

export default Home;