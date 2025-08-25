import React from 'react';

const Footer = () => (
    <footer className="footer-area bg-white">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-4">
                        {/* Copyright */}
                        <div className="copyright">&copy;2025 YSK, All Rights Reserved By <a href="https://themeforest.net/user/theme_land" target="_blank" rel="noopener noreferrer">Yashvanth S K</a></div>
                        {/* Scroll To Top */}
                        <div id="scroll-to-top" className="scroll-to-top mt-3 mt-sm-0">
                            <a href="#header" className="smooth-anchor">Scroll to Top</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;