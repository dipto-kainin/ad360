import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function PartnershipPlatforms() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="bg-blue-100 text-gray-900 flex items-center px-10 rounded-full text-xl mb-8 h-20 text-center">
                        Our Partnership Platforms
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 max-w-5xl">
                        Connecting You With Leading Media Platforms
                    </h2>
                    <p className="max-w-3xl text-lg">
                        Working seamlessly with major social media platforms, we
                        provide enterprise-tier solutions for businesses of all
                        sizes. Wave goodbye to advertising limitations,
                        restrictions, and campaigns that are not sustainable.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <Card className="rounded-3xl border shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-8">
                            <div className="mb-6">
                                <Image
                                    src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/metaicon.svg"
                                    alt="Meta logo"
                                    width={120}
                                    height={40}
                                    className="h-50"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Meta Agency Accounts
                            </h3>
                            <p className="text-muted-foreground">
                                Unleash the complete power of your brand through
                                Meta Advertising, connecting with billions of
                                users on platforms like Facebook, Instagram,
                                WhatsApp, and beyond.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-3xl border shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-8">
                            <div className="mb-6">
                                <Image
                                    src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/googleicon.svg"
                                    alt="Google logo"
                                    width={120}
                                    height={40}
                                    className="h-10"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Google Agency Accounts
                            </h3>
                            <p className="text-muted-foreground">
                                Unlock the potential of Google's extensive
                                network and boost your brand's online visibility
                                with our specialized advertising campaigns,
                                strategically crafted to engage your target
                                audience effectively.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
