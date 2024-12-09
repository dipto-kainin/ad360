"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <section className="py-16 bg-white flex-1 justify-center">
            <div className="container max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-8">
                    Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                        value="item-1"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left text-2xl hover:no-underline">
                            How many domains, pixels and pages can be used in
                            the Account?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Contact our support team for detailed information
                            about account limits and capabilities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left text-2xl hover:no-underline">
                            What if the ad360.ai ad accounts get disabled? Will
                            the funds be transferred?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl">
                            We have measures in place to protect your funds and
                            ensure business continuity. Contact support for
                            specific details.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left text-2xl hover:no-underline">
                            Do you provide multiple ad accounts?
                        </AccordionTrigger>
                        <AccordionContent className="text-xl">
                            Yes, we can support multiple ad accounts based on
                            your business needs and requirements.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">
                        Didn&apos;t find the answer you looking for?
                    </p>
                    <a
                        href="#"
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Please contact support
                    </a>
                </div>
            </div>
        </section>
    );
}
