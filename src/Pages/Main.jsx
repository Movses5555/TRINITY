import React from 'react';
import MainScreen from "../Components/MainScreen/MainScreen";
import MenuModal from "../Components/MenuModal/MenuModal";
import Slider from "../Components/Slider/Slider";
import Offers from "../Components/Offers/Offers";
import About from "../Components/About/About";
import FullPageImage from "../Components/FullPageImage/FullPageImage";
import Reviews from "../Components/Reviews/Reviews";
import Advantages from "../Components/Adventages/Advantages";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import Footer from "../Components/Footer/Footer";

function Main() {

    const [menuStatus, setMenuStatus] = React.useState(false);

    return (
        <main className={'main'} style={menuStatus ? {height: '100vh', overflow: 'hidden'} : null}>
            {menuStatus ? <MenuModal/> : null}
            <div className="container">
                <MainScreen setMenuStatus={setMenuStatus} menuStatus={menuStatus}/>
                <Slider/>
                <Offers/>
                <About/>
                <FullPageImage/>
                <Reviews/>
                <Advantages/>
                <Ask/>
                <Discount/>
                <Row/>
                <Footer/>
            </div>
        </main>
    );
}

export default Main;