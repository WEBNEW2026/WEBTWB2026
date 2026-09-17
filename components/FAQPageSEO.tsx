import React, { useEffect } from 'react';
import { SEOHead } from './ui/SEOHead';
import { createFAQSchema, StructuredData } from './ui/StructuredData';
import { trackPageView } from '../utils/analytics';
import { FAQAccordion } from './ui/FAQAccordion';
import { useTranslation } from 'react-i18next';

export function FAQPageSEO() {
    const { t } = useTranslation();

    useEffect(() => {
        trackPageView('/faq', 'FAQ | Taman Wisata Bougenville');
    }, []);

    // Sample FAQs for structured data
    const faqs = [
        {
            question: "What is the check-in and check-out time?",
            answer: "Check-in is at 2:00 PM and check-out is at 12:00 PM noon."
        },
        {
            question: "Do you provide breakfast?",
            answer: "Yes, all villa bookings include complimentary breakfast for all guests."
        },
        {
            question: "Is there a minimum stay requirement?",
            answer: "During weekdays, minimum stay is 1 night. During weekends and holidays, minimum stay is 2 nights."
        },
        {
            question: "Can I bring pets?",
            answer: "Unfortunately, pets are not allowed in our villas to ensure the comfort of all guests."
        }
    ];

    return (
        <>
            <SEOHead
                title="Frequently Asked Questions | Taman Wisata Bougenville - Villa Booking Guide"
                description="Find answers to common questions about booking villas at Taman Wisata Bougenville. Learn about check-in times, facilities, booking policies, and more."
                keywords="faq taman wisata bougenville, villa booking questions, bandung resort faq, villa rental guide"
                ogImage="https://tamanwisatabougenville.com/images/og-faq.jpg"
                ogUrl="https://tamanwisatabougenville.com/faq"
            />
            <StructuredData type="FAQPage" data={createFAQSchema(faqs)} />
        </>
    );
}
