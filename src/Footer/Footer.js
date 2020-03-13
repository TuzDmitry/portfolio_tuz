import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div>Туз Дмитрий</div>
            <div className={styles.social}>
                <a href=""><img src="https://toy-boy.ru/images/vkontakte.png" alt="VK"/></a>
                <a href=""><img src="https://zberovski.ru/wp-content/uploads/2018/11/Facebook-logo-icon-vectorcopy-big_copy-1020x1024.png" alt="FaceBook"/></a>
                <a href=""><img src="https://www.clipartmax.com/png/full/62-624588_linkedin-help-linkedin-logo-2018-png.png" alt="Linkedin"/></a>
            </div>
            <div className={styles.copyright}>© 2020, All Rights Reserved</div>
        </div>
    </div>
  );
}

export default Footer;
