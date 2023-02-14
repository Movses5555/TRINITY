import React, { useEffect } from 'react';
import styles from './Ask.module.scss';
import Iframe from "react-iframe";
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import Aos from 'aos';


function Ask() {
    const scrollTop = GetScrollPosition();
    useEffect(() => {
        let askSection = document.getElementById('ask-section');
        if(!!askSection && scrollTop > askSection?.offsetTop ) {
            Aos.init();
        }
    }, [scrollTop])

    const screenWidth = GetScreenWidth();
    let isMobile = !!(screenWidth < 1024);

    return (
        <section className={styles.ask} id='ask-section'>
            <div className={styles.askWrap}>
                <div className={styles.mapWrapper} data-aos="slide-right" >
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.301202552!2d54.947301872904966!3d25.076381466900905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sru!4v1675610731306!5m2!1sru!2sru"
                        width={'1100px'}
                        height={'860px'} style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </Iframe>
                </div>
                <div className={styles.askForm} 
                    data-aos={ !!isMobile ? '' : "slide-left"}
                >
                    <p className={styles.title}>Ask us anything</p>
                    <input type="text" placeholder={'Name'} className={styles.input} 
                        data-aos={ !!isMobile ? "slide-left" : "" }
                    />
                    <input type="email" placeholder={'E-mail'} className={styles.input} 
                        data-aos={ !!isMobile ? "slide-right" : "" }
                    />
                    <input type="tel" placeholder={'+7 (999) 999 - 99 - 99'} className={styles.input} 
                        data-aos={ !!isMobile ? "slide-left" : "" } 
                    />
                    <textarea placeholder={'Message'} 
                        data-aos={ !!isMobile ? "slide-right" : "" } 
                    ></textarea>
                    <button className={styles.formSend} 
                        data-aos={ !!isMobile ? "slide-left" : "" } 
                    >Send the request</button>
                </div>
            </div>
        </section>
    );
}

export default Ask;