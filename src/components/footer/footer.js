import { faFacebook, faInstagram, faMixcloud, faPinterest, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../footer/footer.css'

function Footer() {
    return (
        <footer>
            <div className='footerWrap container'>
                <ul className='socialIcons'>
                    <li><a href='#'><FontAwesomeIcon
                        color='white'
                        size="lg" 
                        icon={faFacebook}/></a>
                        </li>
                    <li>
                    <FontAwesomeIcon 
                        color='white'
                        size="lg"
                        icon={faTwitter}/>
                    </li>
                    <li><FontAwesomeIcon 
                        color='white'
                        size="lg"
                        icon={faMixcloud}/>
                        </li>
                    <li><FontAwesomeIcon
                        color='white'
                        size="lg"
                        icon={faPinterest}/>
                        </li>
                    <li><FontAwesomeIcon
                        color='white'
                        size="lg"
                        icon={faInstagram}/>
                        </li>
                </ul>
                <ul className='footerMenu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Gadgets</li>
                    <li>Learning</li>
                    <li>Groceries</li>
                </ul>
                <p className='copyright'>
                © {new Date().getFullYear()} <strong>Contentberg ReactJS Theme.</strong> All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer