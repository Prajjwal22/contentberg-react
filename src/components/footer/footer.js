import React from 'react'
import '../footer/footer.css'

function Footer() {
    return (
        <footer>
            <div className='footerWrap container'>
                <ul className='socialIcons'>
                    <li>Facbook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>Mix</li>
                    <li>Instagram</li>
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