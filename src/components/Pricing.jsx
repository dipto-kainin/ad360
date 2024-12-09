"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Popup from "reactjs-popup";
import OverageCharges from "./popup";

const pricingTiers = [
    { maxSpend: 4500, price: 199 },
    { maxSpend: 10000, price: 299 },
    { maxSpend: 20000, price: 499 },
    { maxSpend: 50000, price: 999 },
    { maxSpend: 50001, price: 0 },
];

export default function VolumePricing() {
    const [spend, setSpend] = React.useState(4500);

    const currentTier = React.useMemo(() => {
        return (
            pricingTiers.find((tier) => spend <= tier.maxSpend) ||
            pricingTiers[pricingTiers.length - 1]
        );
    }, [spend]);

    const maxValue = 50001;
    const sliderValue = Math.min(spend, maxValue);
    const sliderPercentage = (sliderValue / maxValue) * 100;

    return (
        <div className="w-full mx-auto space-y-8 bg-gradient-to-br to-pink-200 via-yellow-100 from-blue-200  p-5 rounded-lg">
            <div className="p-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Pick the right plan for your ad budget
                    </h2>
                    <p className="text-xl">
                        My monthly ad spend is{" "}
                        {spend >= maxValue ? "above" : "up to"}{" "}
                        <span className="text-blue-600 font-medium">
                            ${spend.toLocaleString()}
                        </span>
                    </p>
                </div>

                <div className="relative py-4">
                    <SliderPrimitive.Root
                        className="relative flex items-center select-none touch-none w-full h-5"
                        value={[sliderValue]}
                        max={maxValue}
                        step={100}
                        onValueChange={([value]) => setSpend(value)}
                    >
                        <SliderPrimitive.Track className="relative h-2 grow rounded-full bg-slate-100">
                            <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-600" />
                        </SliderPrimitive.Track>
                        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-orange-400 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
                    </SliderPrimitive.Root>
                </div>

                <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6 lg:px-80">
                    {/* Standard Plan Card */}
                    <Card
                        className={cn(
                            "relative overflow-hidden",
                            currentTier.price === 0 &&
                                "opacity-50 pointer-events-none"
                        )}
                    >
                        <CardContent className="p-6 bg-blue-100 border-blue-600">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="font-medium">Plan</h3>
                                    <div className="text-3xl font-bold">
                                        ${currentTier.price}
                                        <span className="text-sm font-normal text-muted-foreground">
                                            /month
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    <Popup
                                        trigger={
                                            <button className="underline">
                                                {" "}
                                                Overages{" "}
                                            </button>
                                        }
                                        position="right center"
                                    >
                                        {(close) => (
                                            <OverageCharges close={close} />
                                        )}
                                    </Popup>{" "}
                                    apply if ad spend limit is exceeded
                                </p>
                                <Button
                                    className="w-full bg-blue-600 rounded-lg hover:bg-blue-400"
                                    size="lg"
                                >
                                    Proceed with this
                                </Button>
                                <p className="text-xs text-muted-foreground text-right">
                                    *Excluding GST
                                </p>
                            </div>
                            {currentTier.price > 0 && (
                                <div className="absolute top-4 right-4">
                                    <div className="rounded-full bg-blue-500 p-1">
                                        <Check className="h-4 w-4 text-slate-300" />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Custom Price Card */}
                    <Card>
                        <CardContent className="p-6  bg-blue-100 border-blue-600">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="font-medium">
                                        Higher ad spends ?
                                    </h3>
                                    <div className="text-3xl font-bold">
                                        Custom Price
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    <br />
                                </p>
                                <Button
                                    className="w-full bg-blue-600 rounded-lg hover:bg-blue-400"
                                    size="lg"
                                    variant="default"
                                >
                                    Talk to us
                                </Button>
                                <p className="text-xs text-muted-foreground text-right">
                                    *Excluding GST
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
