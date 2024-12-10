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
        <section className="py-16 w-full">
            <div className="w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#0B2545]">
                    Comprehensive Support for Diverse Businesses
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
                    Tailored to fit businesses of every type and size, our
                    expert teams offer bespoke solutions, empowering growth and
                    success in the digital realm.
                </p>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 w-11/12 m-auto">
                    {businesses.map((business, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 text-center via-purple-500 to-pink-500 transition-transform hover:scale-105"
                        >
                            <Card className="rounded-2xl border-0 text-center flex items-center justify-center">
                                <CardContent className="bg-white rounded-2xl text-center flex items-center justify-center p-4">
                                    <h3 className="font-semibold text-base bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
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
