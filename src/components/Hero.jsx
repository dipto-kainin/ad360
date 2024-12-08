import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";

export function Hero() {
    return (
        <div className="relative bg-white">
            <div className="container flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-24 lg:px-32 md:px-11 px-5">
                <div className="flex-1 space-y-6">
                    <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                        <span className="text-blue-500">Break Free</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            From Ad Restrictions
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Effortlessly Restart Meta and Google Ads in a Snap!
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/demo">Book a Demo</Link>
                    </Button>
                    <div className="flex items-center gap-6 pt-4">
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/update_meta.svg"
                            alt="Meta Tech Provider"
                            width={100}
                            height={40}
                            className="h-10 object-contain"
                        />
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/update_snapchat.svg"
                            alt="Snapchat Agency Partner"
                            width={100}
                            height={40}
                            className="h-10 object-contain"
                        />
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/update_google_partner.svg"
                            alt="Google Partner"
                            width={100}
                            height={40}
                            className="h-10 object-contain"
                        />
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image
                        src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Ad360MainSectionImg.webp"
                        alt="Hero Image"
                        width={600}
                        height={500}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="container py-10 flex flex-col gap-4 bg-[#080c3d]">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="flex lg:flex-row justify-evenly flex-col">
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/greenTickCircle.svg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <div>
                            <h3 className="font-semibold text-xl text-white">
                                No limits in daily ad spends from Day 1
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Start with a bang
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/greenTickCircle.svg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <div>
                            <h3 className="font-semibold text-xl text-white">
                                24*7 ad account top up
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                No more waiting for days
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/greenTickCircle.svg"
                            alt="Hero Image"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <div>
                            <h3 className="font-semibold text-xl text-white">
                                Custom dashboard access
                            </h3>
                            <p className="text-lg text-muted-foreground">
                                Monitor your ads effectively
                            </p>
                        </div>
                    </div>
                </div>
                <Image
                    src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/ProductShowCaseImage.webp"
                    alt="Hero Image"
                    width={1242}
                    height={578}
                    className="object-contain w-full h-full col-span-3"
                />
            </div>
        </div>
    );
}