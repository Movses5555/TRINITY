import React, { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import {NavLink} from "react-router-dom";
import logo1 from '../../assets/img/logo1.svg';
import logo2 from '../../assets/img/logo2.svg';
import logo3 from '../../assets/img/logo3.svg';
import logo4 from '../../assets/img/logo4.svg';
import logo5 from '../../assets/img/logo5.svg';
import logo6 from '../../assets/img/logo6.svg';
import logo7 from '../../assets/img/logo7.svg';
import logo8 from '../../assets/img/logo8.svg';
import logo9 from '../../assets/img/logo9.svg';
import logo10 from '../../assets/img/logo10.svg';
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import { RentModal } from './RentModal';
import Aos from 'aos';

function Footer() {
    const scrollTop = GetScrollPosition();
    const screenWidth = GetScreenWidth();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        let footer = document.getElementById('footer');
        if(!!footer && scrollTop > footer?.offsetTop ) {
            Aos.init();
        }
    }, [scrollTop])
    

    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10
    ]

    let isMobile = !!(screenWidth < 1024);

    return (
        <footer className={styles.footer} id='footer'>
            <div className={styles.info}>
                <div className={styles.leftSide} data-aos={ isMobile ? "" : "slide-right"} >
                    <div className={styles.nav}>
                        <div className={styles.navCol} id='for_customers'>
                            <p 
                                className={styles.title} 
                                data-aos={ isMobile ? "slide-down" : ""}
                                data-aos-anchor="#for_customers" 
                            >For Customers</p>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""} 
                                data-aos-anchor="#for_customers" 
                            ><p>About Us</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""} 
                                data-aos-anchor="#for_customers" 
                            ><p>Conditions</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""}
                                data-aos-anchor="#for_customers" 
                             ><p>Testimonials</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""} 
                                data-aos-anchor="#for_customers" 
                            ><p>Articles</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""} 
                                data-aos-anchor="#for_customers" 
                            ><p>Contacts</p></NavLink>
                        </div>
                        <div className={styles.navCol} id='car_list'>
                            <p 
                                className={styles.title} 
                                data-aos={ isMobile ? "slide-down" : ""} 
                                data-aos-anchor="#car_list" 
                            >Car List</p>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""} 
                                data-aos-anchor="#car_list" 
                            ><p>SUVs</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""}
                                data-aos-anchor="#car_list" 
                                data-aos-offset="50px"
                            ><p>Convertibles</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""}
                                data-aos-anchor="#car_list" 
                                data-aos-offset="50px"
                            ><p>Sports Cars</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""}
                                data-aos-anchor="#car_list" 
                            ><p>Premium</p></NavLink>
                            <NavLink
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""}
                                data-aos-anchor="#car_list" 
                            ><p>Coupe</p></NavLink>
                        </div>
                        <div className={styles.navCol} id='service'>
                            <p 
                                className={styles.title} 
                                data-aos={ isMobile ? "slide-down" : ""} 
                                data-aos-anchor="#service" 
                            >Service</p>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""} 
                                data-aos-anchor="#service" 
                            ><p>Car List</p></NavLink>
                            <NavLink 
                                to={'/'} 
                                data-aos={ isMobile ? "slide-right" : ""} 
                                data-aos-anchor="#service" 
                            > <p>Yacht list</p></NavLink>
                            <NavLink
                                to={'/'} 
                                data-aos={ isMobile ? "slide-left" : ""} 
                                data-aos-anchor="#service" 
                            > <p>Chauffeur</p> </NavLink>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide} data-aos={ isMobile ? "" : "slide-left"}>
                    <div className={styles.socials} data-aos={ isMobile ? "slide-down" : ""} >
                        <a href="tel:971585907875" className={styles.tel}>+971 58 590 7875</a>
                        <div className={styles.socialLinks}>
                            <a href="/#" className={`${styles.link} ${styles.telegram}`}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.76107 17.1052L2.9366 14.5911C2.3249 14.3265 1.93606 13.7159 1.9558 13.0497C1.97669 12.3834 2.40035 11.7973 3.02714 11.5709C7.27884 10.0318 20.1384 5.37502 23.8643 4.02511C24.4284 3.82199 25.0586 3.94502 25.5044 4.34547C25.9501 4.74708 26.1381 5.36109 25.9953 5.94377C25.1666 9.29592 22.6038 19.6704 21.8214 22.8368C21.6856 23.3882 21.2713 23.8281 20.7304 23.9975C20.1883 24.1681 19.5975 24.0428 19.1715 23.6679L15.2193 20.1962L12.126 23.1618C11.6814 23.5878 11.0361 23.7259 10.4557 23.5205C9.87651 23.3139 9.46331 22.7985 9.38787 22.188L8.76107 17.1052ZM19.9759 21.5948L23.7575 6.28618L4.84019 13.1367L9.83358 15.2933C10.3629 15.522 10.732 16.0141 10.8028 16.5864L11.3483 21.0133L13.6337 18.8231L13.4318 18.649C13.0824 18.3506 12.877 17.9189 12.8642 17.4604C12.8503 17.0019 13.0325 16.5597 13.3633 16.2416C14.6041 15.0519 17.9144 11.8797 17.9144 11.8797C18.3311 11.4804 18.9928 11.4943 19.392 11.911C19.7902 12.3265 19.7762 12.9881 19.3607 13.3874L15.1798 17.3954L15.8681 17.985L19.9759 21.5948Z" fill="white"/>
                                </svg>
                            </span>
                                    </a>
                                    <a href="/#" className={`${styles.link} ${styles.whatsapp}`}>
                            <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M20.75 17.5C20.5 17.375 18.875 16.625 18.625 16.5C18.375 16.375 18.125 16.375 17.875 16.625C17.625 16.875 17.125 17.625 16.875 17.875C16.75 18.125 16.5 18.125 16.25 18C15.375 17.625 14.5 17.125 13.75 16.5C13.125 15.875 12.5 15.125 12 14.375C11.875 14.125 12 13.875 12.125 13.75C12.25 13.625 12.375 13.375 12.625 13.25C12.75 13.125 12.875 12.875 12.875 12.75C13 12.625 13 12.375 12.875 12.25C12.75 12.125 12.125 10.625 11.875 10C11.75 9.125 11.5 9.125 11.25 9.125H10.625C10.375 9.125 10 9.375 9.875 9.5C9.125 10.25 8.75 11.125 8.75 12.125C8.875 13.25 9.25 14.375 10 15.375C11.375 17.375 13.125 19 15.25 20C15.875 20.25 16.375 20.5 17 20.625C17.625 20.875 18.25 20.875 19 20.75C19.875 20.625 20.625 20 21.125 19.25C21.375 18.75 21.375 18.25 21.25 17.75L20.75 17.5ZM23.875 6.125C19 1.25 11.125 1.25 6.25 6.125C2.25 10.125 1.5 16.25 4.25 21.125L2.5 27.5L9.125 25.75C11 26.75 13 27.25 15 27.25C21.875 27.25 27.375 21.75 27.375 14.875C27.5 11.625 26.125 8.5 23.875 6.125ZM20.5 23.625C18.875 24.625 17 25.25 15 25.25C13.125 25.25 11.375 24.75 9.75 23.875L9.375 23.625L5.5 24.625L6.5 20.875L6.25 20.5C3.25 15.5 4.75 9.25 9.625 6.125C14.5 3 20.75 4.625 23.75 9.375C26.75 14.25 25.375 20.625 20.5 23.625Z" fill="white"/>
                                </svg>
                            </span>
                            </a>
                        </div>
                    </div>
                    <button
                        className={styles.reqCall}
                        data-aos={ isMobile ? "slide-right" : ""}
                        onClick={() => setOpenModal(true)}
                    >REQUEST A CALLBACK</button>
                    <p className={styles.adress} data-aos={ isMobile ? "slide-up" : ""}>
                        24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
                    </p>
                    <div className={styles.inputWrap}>
                        <input type="email" placeholder={'Write your E-mail'}/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div >
                <div className={styles.partners}>
                    {logos.map((logo, i) => {
                        return (
                            <img key={i} src={logo} alt=""/>
                        )
                    })}
                </div>
                <div className={styles.bottom}>
                    <a href="/#">Privacy Policy</a>
                    <p>©2023 TRINITY. All rights reserved</p>
                    <div className={styles.links}>
                        <a href="/#" data-aos={ isMobile ? "slide-right" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M16.3803 5.76336H18.417V2.31836C17.4309 2.21581 16.4401 2.16519 15.4486 2.16669C12.502 2.16669 10.487 3.96502 10.487 7.25836V10.0967H7.16113V13.9534H10.487V23.8334H14.4736V13.9534H17.7886L18.287 10.0967H14.4736V7.63752C14.4736 6.50002 14.777 5.76336 16.3803 5.76336Z" fill="#33B7BC"/>
                            </svg>
                        </a>
                        <a href="/#" data-aos={ isMobile ? "slide-up" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <g clipPath="url(#clip0_115_26)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4062 2.4379C13.2985 2.4379 13.1952 2.4807 13.119 2.55688C13.0428 2.63307 13 2.7364 13 2.84415V17.4691C13 18.5904 12.09 19.5004 10.9688 19.5004C9.8475 19.5004 8.9375 18.5904 8.9375 17.4691C8.9375 16.3479 9.8475 15.4379 10.9688 15.4379C11.0765 15.4379 11.1798 15.3951 11.256 15.3189C11.3322 15.2427 11.375 15.1394 11.375 15.0316V11.7816C11.375 11.6739 11.3322 11.5706 11.256 11.4944C11.1798 11.4182 11.0765 11.3754 10.9688 11.3754C7.605 11.3754 4.875 14.1058 4.875 17.4691C4.875 20.8329 7.605 23.5629 10.9688 23.5629C14.3321 23.5629 17.0625 20.8329 17.0625 17.4691V9.95108C17.9559 10.3555 18.9256 10.5641 19.9062 10.5629H20.7188C20.8265 10.5629 20.9298 10.5201 21.006 10.4439C21.0822 10.3677 21.125 10.2644 21.125 10.1566V6.90665C21.125 6.7989 21.0822 6.69557 21.006 6.61939C20.9298 6.5432 20.8265 6.5004 20.7188 6.5004H19.9062C18.3369 6.5004 17.0625 5.22599 17.0625 3.65665V2.84415C17.0625 2.7364 17.0197 2.63307 16.9435 2.55688C16.8673 2.4807 16.764 2.4379 16.6562 2.4379H13.4062Z" fill="#33B7BC"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_115_26">
                                        <rect width="26" height="26" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="/#" data-aos={ isMobile ? "slide-down" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M25.241 7.90832C25.241 7.69166 24.916 5.95832 24.1577 5.19999C23.1827 4.11666 22.0993 4.00832 21.5577 4.00832H21.4493C18.091 3.79166 13.1077 3.79166 12.9993 3.79166C12.9993 3.79166 7.90768 3.79166 4.54935 4.00832H4.44102C3.89935 4.00832 2.81602 4.11666 1.84102 5.19999C1.08268 6.06666 0.757682 7.79999 0.757682 8.01666C0.757682 8.12499 0.541016 10.075 0.541016 12.1333V13.975C0.541016 16.0333 0.757682 17.9833 0.757682 18.0917C0.757682 18.3083 1.08268 20.0417 1.84102 20.8C2.70768 21.775 3.79102 21.8833 4.44102 21.9917H4.76602C6.71602 22.2083 12.6743 22.2083 12.891 22.2083C12.891 22.2083 17.9827 22.2083 21.341 21.9917H21.4493C21.991 21.8833 23.0743 21.775 24.0493 20.8C24.8077 19.9333 25.1327 18.2 25.1327 17.9833C25.1327 17.875 25.3493 15.925 25.3493 13.8667V12.025C25.4577 10.075 25.241 8.01666 25.241 7.90832ZM17.2243 13.2167L10.7243 16.6833C10.616 16.6833 10.616 16.7917 10.5077 16.7917C10.3993 16.7917 10.291 16.7917 10.291 16.6833C10.1827 16.575 10.0743 16.4667 10.0743 16.25V9.20832C10.0743 8.99166 10.1827 8.88332 10.291 8.77499C10.3993 8.66666 10.616 8.66666 10.8327 8.77499L17.3327 12.2417C17.5493 12.35 17.6577 12.4583 17.6577 12.675C17.6577 12.8917 17.441 13.1083 17.2243 13.2167Z" fill="#33B7BC"/>
                            </svg>
                        </a>
                        <a href="/#" data-aos={ isMobile ? "slide-left" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clipPath="url(#clip0_99_144)">
                                    <path d="M15.125 0H6.875C5.05164 0 3.30295 0.724328 2.01364 2.01364C0.724328 3.30295 0 5.05164 0 6.875L0 15.125C0 16.9484 0.724328 18.697 2.01364 19.9864C3.30295 21.2757 5.05164 22 6.875 22H15.125C16.9484 22 18.697 21.2757 19.9864 19.9864C21.2757 18.697 22 16.9484 22 15.125V6.875C22 5.05164 21.2757 3.30295 19.9864 2.01364C18.697 0.724328 16.9484 0 15.125 0V0ZM19.9375 15.125C19.9375 17.7787 17.7787 19.9375 15.125 19.9375H6.875C4.22125 19.9375 2.0625 17.7787 2.0625 15.125V6.875C2.0625 4.22125 4.22125 2.0625 6.875 2.0625H15.125C17.7787 2.0625 19.9375 4.22125 19.9375 6.875V15.125Z" fill="#33B7BC"/>
                                    <path d="M11 5.5C9.54131 5.5 8.14236 6.07946 7.11091 7.11091C6.07946 8.14236 5.5 9.54131 5.5 11C5.5 12.4587 6.07946 13.8576 7.11091 14.8891C8.14236 15.9205 9.54131 16.5 11 16.5C12.4587 16.5 13.8576 15.9205 14.8891 14.8891C15.9205 13.8576 16.5 12.4587 16.5 11C16.5 9.54131 15.9205 8.14236 14.8891 7.11091C13.8576 6.07946 12.4587 5.5 11 5.5ZM11 14.4375C10.0887 14.4364 9.21495 14.0739 8.57053 13.4295C7.92611 12.7851 7.56359 11.9113 7.5625 11C7.5625 9.10388 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10388 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375Z" fill="#33B7BC"/>
                                    <path d="M16.9126 5.81991C17.3173 5.81991 17.6454 5.49179 17.6454 5.08703C17.6454 4.68228 17.3173 4.35416 16.9126 4.35416C16.5078 4.35416 16.1797 4.68228 16.1797 5.08703C16.1797 5.49179 16.5078 5.81991 16.9126 5.81991Z" fill="#33B7BC"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_99_144">
                                        <rect width="22" height="22" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {
                openModal && (
                    <RentModal
                        openModal={openModal}
                        onClose={() => setOpenModal(false)}
                    />
                )
            }
        </footer>
    );
}

export default Footer;