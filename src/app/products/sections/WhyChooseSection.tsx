'use client';

import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

interface Benefit {
    id: string;
    text: string;
}

interface WhyChooseSectionProps {
    title: string; // Left-side small title above FAQs
    benefits: Benefit[]; // FAQ-style bullet points
    image: string; // Image shown below FAQs on the left
    imageAlt: string;
    rightTitle?: string; // Large marketing headline on the right
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
    title,
    benefits,
    image,
    imageAlt,
    rightTitle,
}) => {
    return (
        <section className="pb-20 mb-24 pt-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-12 items-start">
                    {/* Left Side - Title + FAQs, then Image */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-medium text-white">{title}</h3>
                            <div className="space-y-3">
                                {benefits.map((benefit) => (
                                    <div key={benefit.id} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 size-3 mt-1">
                                            <svg
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.04848 6.45135L4.81191 11.2443C7.67583 6.6575 10.8915 2.63762 13.8056 0.318463C14.4588 -0.299979 15.4637 0.0607789 14.7603 0.730758C11.4944 4.18373 8.98217 8.10053 6.41972 14.2334C5.41484 14.9549 4.25922 15.3157 3.70654 14.6457L0.0889576 7.99746C-0.413484 7.17287 1.34506 5.266 2.04848 6.45135Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-white/80 leading-relaxed">{benefit.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={imageAlt}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="flex flex-col gap-6 items-start justify-between h-full">
                                <h2 className="text-5xl md:text-7xl text-primary/80">
                                    {rightTitle}
                                </h2>
                                <p className="text-lg text-white leading-relaxed flex justify-start items-center gap-2">
                                    Contact Us for Trade Inquiries
                                    <BsArrowRight />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
