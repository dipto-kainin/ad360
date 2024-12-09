import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

export function WhyChooseAd360() {
    return (
        <section className="bg-white py-16">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why choose Ad360?
                </h2>
                <div className="flex flex-col gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-20 rounded-3xl"
                            style={{
                                backgroundColor: feature.bg,
                                border: `1px solid ${feature.border}`,
                            }}
                        >
                            <CardContent className="p-6 flex flex-col justify-center items-center">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    width={300}
                                    height={200}
                                    className={`object-cover rounded-lg`}
                                />
                                <h3 className="text-center text-3xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-center text-muted-foreground text-2xl">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
