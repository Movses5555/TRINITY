import React, { useEffect, useState } from 'react';
import styles from './Ask.module.scss';
import Iframe from "react-iframe";
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import { sendAsk } from '../../api';
import toaster from '../../helpers/toast'
import Aos from 'aos';


function Ask() {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [isAskButtonDisable, setIsAskButtonDisable] = useState(false);

    const scrollTop = GetScrollPosition();
    useEffect(() => {
        let askSection = document.getElementById('ask-section');
        if(!!askSection && scrollTop > askSection?.offsetTop ) {
            Aos.init();
        }
    }, [scrollTop])

    const screenWidth = GetScreenWidth();
    let isMobile = !!(screenWidth < 1024);

    const onChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const onFocus = (key) => {
        setErrors({
            ...errors,
            [key]: null,
        })
    }

    const onSend = () => {
        setIsAskButtonDisable(true)
        sendAsk(data)
          .then((res) => {
            setIsAskButtonDisable(false);
            toaster.success('Thank you! Your request has been accepted.');
          })
          .catch((err) => {
            setErrors(err?.response?.data?.errors || {})
            setIsAskButtonDisable(false)
            toaster.error(err?.response?.data?.message || 'Something went wrong')
          })
    }

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
                <div className={styles.askForm} data-aos={ !!isMobile ? '' : "zoom-in"}>
                    <p className={styles.title} data-aos={ !!isMobile ? "slide-up" : "" } >Ask us anything</p>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            name='name'
                            placeholder={'Name'}
                            className={!!errors?.name ? `${styles.input} ${styles.inputError}` : styles.input}
                            data-aos={ !!isMobile ? "slide-up" : "" } 
                            onChange={(e) => onChange('name', e.target.value)}
                            onFocus={() => onFocus('name')}
                        />
                        {
                            !!errors?.name && (
                                <span className={styles.errorMessage}>{errors?.name?.[0]}</span>
                            )
                        }
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            type="email"
                            name='email'
                            placeholder={'E-mail'}
                            className={!!errors?.email ? `${styles.input} ${styles.inputError}` : styles.input}
                            data-aos={ !!isMobile ? "slide-up" : "" }
                            onChange={(e) => onChange('email', e.target.value)}
                            onFocus={() => onFocus('email')}
                        />
                        {
                            !!errors?.email && (
                                <span className={styles.errorMessage}>{errors?.email?.[0]}</span>
                            )
                        }
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            type="tel" 
                            name='phone'
                            placeholder={'+(xxx) - xxx - xxx - xxx'}
                            pattern="[0-9]+"
                            className={!!errors?.phone ? `${styles.input} ${styles.inputError}` : styles.input}
                            data-aos={ !!isMobile ? "slide-up" : "" }
                            value={data.phone}
                            onFocus={() => onFocus('phone')}
                            onChange={(e) => {
                                let value = e.target.value;
                                const regex = /^\+?\d+$/;
                                if (value === "" || value === "+" || regex.test(value)) {
                                    onChange('phone', value)
                                }
                            }}
                        />
                        {
                            !!errors?.phone && (
                                <span className={styles.errorMessage}>{errors?.phone?.[0]}</span>
                            )
                        }
                    </div>
                    <div className={styles.inputWrapper}>
                        <textarea 
                            placeholder={'Message'}
                            name='message'
                            data-aos={ !!isMobile ? "slide-up" : "" }
                            className={!!errors?.message && `${styles.inputError}`}
                            onChange={(e) => onChange('message', e.target.value)}
                            onFocus={() => onFocus('message')}
                        ></textarea>
                        {
                            !!errors?.message && (
                                <span className={styles.errorMessage}>{errors?.message?.[0]}</span>
                            )
                        }
                    </div>
                    <button 
                        className={styles.formSend}
                        data-aos={ !!isMobile ? "slide-up" : "" }
                        disabled={!!isAskButtonDisable}
                        onClick={onSend}
                    >Send the request</button>
                </div>
            </div>
        </section>
    );
}

export default Ask;