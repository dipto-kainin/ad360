import React from "react";

const AdAccountRestart = () => {
    return (
        <div className="flex justify-center items-center">
            <div
                className="bg-cover bg-center rounded-3xl flex flex-col justify-center items-center shadow-lg w-[90%] p-60 "
                style={{
                    backgroundImage: `url('https://drbgg29kvmub6.cloudfront.net/assets/ad360/AdAccountBg.webp')`,
                }}
            >
                <h2 className="text-7xl font-bold text-white mb-8 text-center">
                    Ad Account Worries?
                    <br /> Not Anymore!
                </h2>
                <p className="text-2xl text-white mb-8 text-center">
                    Effortlessly Restart Meta and Google Ads in a Snap!
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold py-3 w-60 px-6 rounded-full "
                    style={{ border: "solid 5px #86A6EE" }}
                >
                    Book a Demo
                </button>
            </div>
        </div>
    );
};

export default AdAccountRestart;
