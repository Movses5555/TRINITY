import React from 'react';
import MenuModal from "../Components/MenuModal/MenuModal";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const Layout = ({children}) => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  return (
    <main className={'main'} style={menuStatus ? {height: '100vh', overflow: 'hidden'} : null}>
      {menuStatus ? <MenuModal/> : null}
      <div className="container">
        <Header setMenuStatus={setMenuStatus} menuStatus={menuStatus}/>
        {children}
        <Footer/>
      </div>
    </main>
  );
}
