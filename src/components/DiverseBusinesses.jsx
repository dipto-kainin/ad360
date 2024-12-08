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
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Comprehensive Support for Diverse Businesses
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tailored to fit businesses of every type and size, our
                    expert teams offer bespoke solutions, empowering growth and
                    success in the digital realm.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {businesses.map((business, index) => (
                        <Card key={index}>
                            <CardContent className="p-4 text-center">
                                <h3 className="font-semibold">{business}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
