import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        id: 1,
        name: "Nitin Mittal",
        title: "Founder, Dress Sexy",
        text: "Ad360 transformed our ad strategy! Our Meta campaigns are now running smoothly, with no more ad blocks. Truly a game-changer!",
        logo: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/dresssexy.svg",
        bg: "#FFF0F0",
    },
    {
        id: 2,
        name: "Sameer Achan",
        title: "Co-Founder, Right4Paws",
        text: "Since using Ad360, our Google ads have been unstoppable. The automated top-ups are a lifesaver for our fast-paced business.",
        logo: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/Right4paws.svg",
        bg: "#F1ECDE",
    },
    {
        id: 3,
        name: "Aravindhan",
        title: "Founder, Shrathyas",
        text: "The analytics dashboard from Ad360 is a revelation - intuitive and insightful. It's simplified our ad tracking immensely.",
        logo: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/shrathyas.svg",
        bg: "#f0faff",
    },
    {
        id: 4,
        name: "Gagan Manchanda",
        title: "CEO/Co-Founder, PositiveGems",
        text: "Ad360's 24/7 support is phenomenal. They're always there, helping us navigate through every ad challenge.",
        logo: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/positivegems.svg",
        bg: "#FAF5FF",
    },
    {
        id: 5,
        name: "Kameshwaran Elangovan",
        title: "COO, Guardian Link",
        text: "Ad360's expert consultations have been crucial. They helped us align with Meta and Google policies, ensuring smooth ad campaigns.",
        logo: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/guardianlink.svg",
        bg: "#DBCECE",
    },
];

export const Testimonials = () => {
    return (
        <div className="w-full">
            <h1 className="text-center text-5xl m-6 container">
                This is why customer love us
            </h1>
            <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="fast"
                pauseOnHover={true}
                className={"mb-5"}
            />
        </div>
    );
};
