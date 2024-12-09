import Image from "next/image";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#041332] to-[#47074c] text-white py-16 px-10 rounded-2xl">
            <div className="container ml-12 px-4 sm:px-6 lg:px-8 gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between items-center ">
                <div>
                    <Image
                        src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Ad360_Footer.svg"
                        alt="Ad360 logo"
                        width={150}
                        height={40}
                    />
                    <p className="text-sm mt-4">
                        Break Free From Ad Restrictions
                    </p>
                    <li className="flex items-center mt-4">
                        <FaFacebookF className="mr-2" />
                        <FaInstagram className="mr-2" />
                        <FaLinkedinIn className="mr-2" />
                        <FaYoutube />
                    </li>
                </div>
                <div>
                    <h1 className="text-2xl">About</h1>
                    <br />
                    <div>
                        <a href="#">FAQs </a>
                        <br />
                        <br />
                        <a href="#">our customers</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl">Resources</h1>
                    <br />
                    <div>
                        <a href="#">Contact us</a>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl">Security & terms</h1>
                    <br />
                    <div>
                        <a href="#">privacy policy</a>
                        <br />
                        <br />
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
