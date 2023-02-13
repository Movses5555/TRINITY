import React from 'react';
import styles from './Ask.module.scss';
import Iframe from "react-iframe";

function Ask() {
    return (
        <section className={styles.ask}>
            <div className={styles.askWrap}>
                <div className={styles.mapWrapper} data-aos="slide-right" >
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.301202552!2d54.947301872904966!3d25.076381466900905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2sru!4v1675610731306!5m2!1sru!2sru"
                        width={'1100px'}
                        height={'860px'} style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </Iframe>
                </div>
                <div className={styles.askForm}  data-aos="slide-left">
                    <p className={styles.title}>Ask us anything</p>
                    <input type="text" placeholder={'Name'} className={styles.input}/>
                    <input type="email" placeholder={'E-mail'} className={styles.input}/>
                    <input type="tel" placeholder={'+7 (999) 999 - 99 - 99'} className={styles.input}/>
                    <textarea placeholder={'Message'}></textarea>
                    <button className={styles.formSend}>Send the request</button>
                </div>
            </div>
        </section>
    );
}

export default Ask;