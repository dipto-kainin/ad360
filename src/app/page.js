"use client";

import { DiverseBusinesses } from "@/components/DiverseBusinesses";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Pricing } from "@/components/Pricing";
import { WhyChooseAd360 } from "@/components/WhyChooseUs";
import React, { useState } from "react";

const AdHero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="container m-auto">
            <Navigation />
            <Hero />
            <WhyChooseAd360 />
            <DiverseBusinesses />
            <Pricing />
            <FAQ />
        </div>
    );
};

export default AdHero;
