"use client";

import { DiverseBusinesses } from "@/components/DiverseBusinesses";
import { FAQ } from "@/components/FAQ";
import Footer from "@/components/footer";
import { Hero } from "@/components/Hero";
import LastDiv from "@/components/LastDiv";
import { Navigation } from "@/components/Navigation";
import { PartnershipPlatforms } from "@/components/PartnershipPlatform";
import VolumePricing, { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseAd360 } from "@/components/WhyChooseUs";
import React, { useState } from "react";

const AdHero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="container p-0 m-auto">
            <Navigation />
            <Hero />
            <WhyChooseAd360 />
            <DiverseBusinesses />
            <PartnershipPlatforms />
            <VolumePricing />
            <Testimonials />
            <FAQ />
            <LastDiv />
            <Footer />
        </div>
    );
};

export default AdHero;
