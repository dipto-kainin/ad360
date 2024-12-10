import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
        title: "Instant Account Top-Up",
        img: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose1.webp",
        bg: "#FAF5FF",
        border: "#E9CEFF",
        description:
            "Our automated top-up system is a game-changer compared to the manual, time-consuming process used by our competitors. With Ad360, your account is recharged in seconds, ensuring continuous ad campaign momentum.",
    },
    {
        title: "Advanced Analytics Dashboard",
        img: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose2.webp",
        bg: "#FFFAEB",
        border: "#ECD89A",
        description:
            "While others lack efficient monitoring tools, Ad360 provides a comprehensive analytics dashboard. Gain valuable insights into your Meta and Google ads easily, making data-driven decisions without the complexity.",
    },
    {
        title: "Expert Marketing Guidance",
        img: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose3.webp",
        bg: "#F0FAFF",
        border: "#BAE8FF",
        description:
            "Ad360 offers expert consultations to navigate ad policies, a service often absent in competitors' offerings. We guide you in maintaining policy compliance, ensuring your ads run smoothly without policy infringements.",
    },
    {
        title: "Transparent and Economical Pricing",
        img: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose4.webp",
        bg: "#FFF0F0",
        border: "#FFBABA",
        description:
            "Stand out with our transparent pricing model. Unlike competitors who charge a percentage of ad spend, Ad360's fixed fee structure makes it a more budget-friendly and predictable option for your advertising needs.",
    },
    {
        title: "Reliable and Innovative Solutions",
        img: "https://drbgg29kvmub6.cloudfront.net/assets/ad360/whyChoose5.webp",
        bg: "#F0FFF1",
        border: "#BAEAFA",
        description:
            "Ad360, a professionally managed startup and a technology partner with Meta, offers more than just a temporary solution, unlike smaller competitors. Our established partnerships and startup vigor ensure cutting-edge, reliable services.",
    },
];

export default function WhyChooseSection() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
                Why choose Ad360?
            </h2>

            <div className="flex flex-col md:flex-row gap-8 relative">
                {/* Feature Image */}
                <div className="w-full md:w-1/2">
                    <div className="sticky top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-[calc(100vh-6rem)] relative rounded-lg overflow-hidden border-4"
                                style={{
                                    borderColor: features[activeFeature].border,
                                    backgroundColor: features[activeFeature].bg,
                                }}
                            >
                                <img
                                    src={features[activeFeature].img}
                                    alt={features[activeFeature].title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Feature Descriptions */}
                <div className="w-full md:w-1/2 space-y-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start flex-row"
                            onMouseEnter={() => setActiveFeature(index)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: index === activeFeature ? 1 : 0.3,
                                    y: index === activeFeature ? 0 : 50,
                                }}
                                transition={{ duration: 0.5 }}
                                className="max-w-xl p-4 border-2 rounded-lg"
                                style={{
                                    borderColor: feature.border,
                                    backgroundColor: feature.bg,
                                }}
                            >
                                <h3 className="text-3xl font-bold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
