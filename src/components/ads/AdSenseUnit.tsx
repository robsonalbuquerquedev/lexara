"use client";

import { useEffect } from "react";

type AdSenseUnitProps = {
    slot: string;
    format?: "auto" | "rectangle" | "horizontal";
};

export function AdSenseUnit({
    slot,
    format = "auto",
}: AdSenseUnitProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.warn("AdSense initialization failed", error);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle block"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
        />
    );
}
