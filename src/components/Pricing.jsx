"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export function Pricing() {
    const [adSpend, setAdSpend] = React.useState(10000);

    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold">
                        Pick the right plan for your ad budget
                    </h2>
                    <p className="text-xl">
                        My monthly ad spend is up to{" "}
                        <span className="text-blue-500 font-semibold">
                            ${adSpend}
                        </span>
                    </p>
                    <Slider
                        value={[adSpend]}
                        onValueChange={(value) => setAdSpend(value[0])}
                        max={100000}
                        step={1000}
                        className="max-w-md mx-auto"
                    />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Plan</h3>
                                <div className="text-4xl font-bold">
                                    $299
                                    <span className="text-lg font-normal">
                                        /month
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Overages apply if ad spend limit is exceeded
                                </p>
                                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                                    Proceed with this
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    *Excluding GST
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Higher ad spends?
                                </h3>
                                <div className="text-4xl font-bold">
                                    Custom Price
                                </div>
                                <Button variant="outline" className="w-full">
                                    Talk to us
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    *Excluding GST
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
