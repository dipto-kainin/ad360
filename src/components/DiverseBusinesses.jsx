import { Card, CardContent } from "@/components/ui/card";

const businesses = [
    "Brands",
    "E-Commerce",
    "Marketing Agencies",
    "Local Business",
    "Freelancers",
    "Affiliates",
    "Dropshippers",
    "Influencers",
];

export function DiverseBusinesses() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#0B2545]">
                    Comprehensive Support for Diverse Businesses
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
                    Tailored to fit businesses of every type and size, our
                    expert teams offer bespoke solutions, empowering growth and
                    success in the digital realm.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                    {businesses.map((business, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-transform hover:scale-105"
                        >
                            <Card className="rounded-2xl border-0">
                                <CardContent className="p-6 text-center bg-white rounded-2xl">
                                    <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                        {business}
                                    </h3>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
