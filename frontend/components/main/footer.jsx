import React from 'react';

const Footer = () => {
    return (
        < footer id="footer" >
            <ul>
                <li className="copyright">&copy; Marc Schlossberg, 2019</li>
                <li> | </li>
                <li><a href="https://www.appacademy.io/">App Academy</a></li>
                <li> | </li>
                <li><a href="www.audible.com">Audible</a></li>
                <li> | </li>
                <li><a href="www.amazon.com">Amazon</a></li>
                <li> | </li>
                <li className="copyright">Amazon Stuff:</li>
                <li>
                    <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
                        Conditions of Use
                        </a>
                </li>
                <li> | </li>
                <li>
                    <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
                        Privacy Notice
                    </a>
                </li>
            </ul>
        </footer >
    )
}

export default Footer;