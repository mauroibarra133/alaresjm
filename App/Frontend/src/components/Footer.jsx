import '../styles/footer.css'
import emailIcon from '../assets/images/envelope-regular.svg'
import igIcon from '../assets/images/instagram.svg'
import fbIcon from '../assets/images/facebook.svg'
import phoneIcon from '../assets/images/phone.svg'
import locationIcon from '../assets/images/location.svg'

function Footer() {
    return ( 

        <div className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <svg width="281" height="76" viewBox="0 0 281 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.2559 4.57727L47.2421 4.58606L47.2278 4.59394C46.9752 4.73294 46.8816 4.83839 46.842 4.92092C46.8055 4.99688 46.7748 5.13724 46.8491 5.44003C46.9244 5.7472 47.0929 6.16191 47.3837 6.74194C47.6716 7.3163 48.0656 8.02635 48.5761 8.91942C49.9952 11.2981 51.2214 13.0549 52.0788 14.0131C52.292 14.2514 52.4745 14.4313 52.6246 14.5565C52.625 14.5568 52.6254 14.5571 52.6257 14.5574C52.5949 13.9577 52.4266 13.055 52.159 11.9918C51.8654 10.8254 51.4637 9.50851 51.0335 8.27089C50.6028 7.03157 50.1477 5.88376 49.7497 5.05219C49.5495 4.63387 49.3716 4.31231 49.2259 4.10216C49.1754 4.02922 49.1346 3.9783 49.104 3.94458C48.9037 3.96198 48.6101 4.0226 48.2831 4.12534C47.8965 4.24677 47.5181 4.40982 47.2559 4.57727ZM49.0524 3.89558C49.0524 3.89585 49.055 3.89802 49.0602 3.90125C49.0549 3.89692 49.0524 3.8953 49.0524 3.89558Z" fill="#FFC692" stroke="black"/>
                    <path d="M239.502 7.42007C235.317 8.29583 229.172 11.7989 225.878 15.1427C217.329 23.8207 216.706 36.0017 224.275 46.1127C226.501 49.0585 228.727 50.6507 233.803 53.1188C239.591 55.8257 241.015 56.2238 246.358 56.2238C256.776 56.2238 266.482 50.81 271.38 42.3708C274.051 37.594 274.585 29.4733 272.537 23.6614C270.4 17.2127 262.03 9.64927 255.174 7.89775C250.276 6.54431 244.221 6.38508 239.502 7.42007ZM259.448 17.9292C260.694 23.5022 259.27 24.2983 256.42 19.5215C254.105 15.7 254.283 13.7892 256.865 13.7892C258.112 13.7892 258.735 14.7446 259.448 17.9292ZM254.372 27.7218L254.817 36.4794L258.201 36.7182C260.961 36.957 261.496 37.2755 261.496 38.8678C261.496 40.4601 260.961 40.7785 258.201 41.0174C255.263 41.2562 254.728 41.5747 254.372 43.6447C254.016 45.5554 253.482 46.0331 251.701 46.0331C249.92 46.0331 249.386 45.5554 249.208 43.6447C249.029 42.2912 248.317 40.9378 247.605 40.6193C246.002 39.7436 246.002 37.7532 247.694 37.1959C248.762 36.7978 249.029 35.3648 248.94 30.986C248.94 27.881 248.673 25.8906 248.406 26.5275C247.872 27.7218 238.789 40.062 235.495 44.1224C233.358 46.5904 228.549 47.4662 228.549 45.3166C228.549 44.6797 228.905 44.0427 229.262 43.8835C229.618 43.7243 231.755 41.2562 233.803 38.2309C235.94 35.2851 238.077 32.8967 238.433 32.8967C238.878 32.8967 239.235 32.4986 239.235 32.0209C239.235 31.5433 241.461 28.2791 244.221 24.776C248.584 19.2826 249.564 18.4865 251.612 18.7253L253.927 18.9642L254.372 27.7218Z" fill="#FFC692"/>
                    <path d="M29.4449 21.5118C25.616 26.6868 22.2323 31.2248 21.7871 31.7025C21.0747 32.4986 8.16321 49.1381 7.27276 50.4119C6.91658 50.8896 8.25225 51.208 10.2112 51.208H13.684L25.616 35.2851C32.2053 26.5275 37.8151 19.3622 38.1713 19.3622C38.6165 19.3622 38.8837 23.8206 38.8837 29.314V39.2659H36.5685C34.6095 39.2659 34.3424 39.5843 34.6095 41.4155C34.7876 43.0077 35.4109 43.7243 36.9247 43.8835C38.6165 44.1223 38.8837 44.6 38.8837 47.705C38.8837 51.208 38.8837 51.208 42.0002 51.208C45.1168 51.208 45.1168 51.208 45.1168 47.6254V44.0427H50.0143C54.8227 44.0427 54.9117 44.0427 54.9117 41.6543C54.9117 39.2659 54.8227 39.2659 50.0143 39.2659H45.1168V25.7314V12.1969H40.7536H36.4795L29.4449 21.5118Z" fill="#FFC692"/>
                    <path d="M59.0968 30.2694C59.1858 40.3009 59.3639 49.0584 59.3639 49.775C59.3639 51.0488 60.4325 51.208 69.6041 51.208H79.8442V48.8196V46.4312H72.2754H64.7066V29.314V12.1969H61.8572H58.9187L59.0968 30.2694Z" fill="#FFC692"/>
                    <path d="M83.8513 25.4926V38.8678L76.4605 39.1066L69.0698 39.3455L69.337 41.4951C69.6041 43.565 69.7822 43.6447 76.7277 44.0427L83.8513 44.4408L84.1184 47.7846C84.3855 50.81 84.6527 51.208 86.6117 51.208C88.5706 51.208 88.7487 50.8896 88.7487 47.705C88.7487 45.5554 89.194 44.0427 89.9063 43.8835C91.331 43.4058 91.4201 39.2659 89.9063 39.2659C89.0159 39.2659 88.7487 36.957 88.7487 29.314C88.7487 23.8206 89.1049 19.3622 89.4611 19.3622C89.9063 19.3622 94.1805 24.6168 98.9889 31.0656C103.886 37.594 109.229 44.7593 110.921 46.9885C113.681 50.6507 114.483 51.208 116.976 51.208C118.579 51.208 119.914 50.8896 119.914 50.4119C119.914 49.8546 104.599 29.314 100.592 24.5372C100.146 24.0595 97.9203 21.1138 95.5161 17.9292C91.331 12.3562 91.1529 12.1969 87.5021 12.1969H83.8513V25.4926Z" fill="#FFC692"/>
                    <path d="M125.079 31.7025L125.346 51.208H127.928H130.6L130.778 33.8521L131.045 16.5757L135.942 16.3369C146.094 15.7796 151.08 18.4069 151.08 24.1391C151.08 28.6771 147.429 31.3044 140.484 31.8617C136.032 32.2598 135.052 32.5782 135.497 33.5336C135.764 34.2501 138.881 38.4697 142.443 43.0077C148.676 50.8896 148.943 51.208 152.238 51.208C156.067 51.208 156.245 50.81 153.395 47.6254C148.943 42.6893 144.847 37.6736 144.847 37.0367C144.847 36.7182 146.717 35.7628 148.943 34.9667C154.731 32.8171 156.601 29.8714 156.245 23.5818C155.889 18.168 154.019 14.9834 150.101 13.2319C148.765 12.595 143.778 12.1969 136.388 12.1969H124.812L125.079 31.7025Z" fill="#FFC692"/>
                    <path d="M159.985 31.7025V51.208H171.56H183.136V48.8196V46.4312H174.677C167.91 46.4312 166.218 46.1923 166.218 45.3166C166.218 44.4408 167.553 44.0427 170.937 43.8835C175.211 43.6447 175.567 43.4854 175.835 41.4155C176.102 39.2659 176.013 39.2659 171.204 39.2659H166.218V27.7218V16.1777H174.677C183.136 16.1777 183.136 16.1777 183.136 14.1873V12.1969H171.56H159.985V31.7025Z" fill="#FFC692"/>
                    <path d="M191.952 13.3911C188.568 14.9834 186.342 19.6011 186.965 23.6614C187.589 27.8014 191.774 31.2248 198.63 33.1355C205.219 35.0463 207 38.3901 204.329 43.6447C203.171 46.0331 201.836 46.3516 193.376 46.5904C187.321 46.8292 187.143 46.9089 186.876 48.9788L186.609 51.208H193.555C205.754 51.1284 210.74 47.705 210.74 39.2659C210.74 34.3298 208.603 31.4636 203.349 29.2344C200.767 28.1994 198.274 27.3237 197.74 27.3237C197.294 27.3237 195.692 26.2887 194.356 25.0149C192.486 23.2633 192.041 22.308 192.575 20.6361C193.465 17.2126 196.137 16.1777 203.795 16.1777C210.651 16.1777 210.74 16.1777 210.74 14.1873C210.74 12.1969 210.74 12.1969 202.548 12.1969C197.116 12.2765 193.465 12.6746 191.952 13.3911Z" fill="#FFC692"/>
                    </svg>
                    <div className="footer__logo-under">
                        <p>R E S T O</p><p>B A R</p>
                    </div>
                </div>
                <div className="footer__info">
                    <div className="footer-info__wrapper">
                        <h4>CONTACTO COMERCIAL</h4>
                        <div className="footer-info__text">
                            <img src={emailIcon} alt="" />
                            <a href="mailto: mauroibarra133@gmail.com" rel='noreferrer' target='_blank'><p>alares@gmail.com</p></a>
                        </div>
                    </div>
                    <div className="footer-info__wrapper">
                        <h4>SEGUINOS</h4>
                        <div className="footer-info__text">
                            <img src={igIcon} alt="" />
                            <a href="https://www.instagram.com/alaresjm/" rel='noreferrer' target='_blank'><p>alaresjm</p></a>
                        </div>
                        <div className="footer-info__text">
                            <img src={fbIcon} alt="" />
                            <a href="https://www.facebook.com/profile.php?id=100063529871342" rel='noreferrer' target='_blank'><p>alaresjm</p></a>

                        </div>
                        <div className="footer-info__text">
                            <img src={phoneIcon} alt="" />
                            <a href="tel:+543525431002" rel='noreferrer' target='_blank'><p>3525-431002</p></a>
                        </div>
                    </div>
                    <div className="footer-info__wrapper">
                        <h4>DONDE ESTAMOS</h4>
                        <div className="footer-info__text">
                            <img src={locationIcon} alt="" />
                           <a href="https://goo.gl/maps/zjHeALeiZ6j4BMA28" rel='noreferrer' target='_blank'><p>Castulo Peña 582, Jesus Maria</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyright-text">© 2023 Mauro Ibarra. Todos los derechos reservados.</p>
            </div>
        </div>

     );
}

export default Footer;