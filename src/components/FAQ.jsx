"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <section className="py-16 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Frequently asked questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                        value="item-1"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left">
                            How many domains, pixels and pages can be used in
                            the Account?
                        </AccordionTrigger>
                        <AccordionContent>
                            Contact our support team for detailed information
                            about account limits and capabilities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left">
                            What if the ad360.ai ad accounts get disabled? Will
                            the funds be transferred?
                        </AccordionTrigger>
                        <AccordionContent>
                            We have measures in place to protect your funds and
                            ensure business continuity. Contact support for
                            specific details.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border rounded-lg px-4"
                    >
                        <AccordionTrigger className="text-left">
                            Do you provide multiple ad accounts?
                        </AccordionTrigger>
                        <AccordionContent>
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
