import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Main-Logo.png'

const Footer = () => {
    return (  
        <footer className="text-center lg:text-left text-gray-300 bg-gray-800 pt-10">
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <Link to="/home">
                                <img className="w-52 mb-4" src={logo} alt="footer logo" />
                            </Link>
                            <p className="w-80 mx-auto cursor-pointer"> Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="w-80 mx-auto cursor-pointer"> Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            About Us
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Food Items </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Student List </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Privacy Policy </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Sitemap </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Useful links
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> How to Join Our Hostel </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Guidelines and how to </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Hostel rules </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Help </Link>
                            </p>
                        </div>
                        <div className="contact-area">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Contact
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-home mr-2 text-orange-500"></i>
                                Jhenaidah, Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-envelope mr-2 text-orange-500"></i>
                                contact.ashraful1@gmail.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-phone mr-2 text-orange-500"></i>
                                + 88-01764238487
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-fax mr-2 text-orange-500"></i>
                                + 88-01974238487
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-orange-500 font-semibold" href="https://ashrafulislambd.com"> ashrafulislambd.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;