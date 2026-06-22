import { useState, useEffect } from "react"
import { LAUNCH_DATE } from "../config"

function useCountdown(target: Date) {
    function calc() {
        const diff = Math.max(0, target.getTime() - Date.now())
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            done: diff === 0,
        }
    }
    const [time, setTime] = useState(calc)
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000)
        return () => clearInterval(id)
    }, [])
    return time
}

function Pad(n: number) {
    return String(n).padStart(2, "0")
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div
                className="relative flex items-center justify-center border border-white/20 bg-white/10"
                style={{
                    width: "clamp(58px, 17vw, 130px)",
                    height: "clamp(58px, 17vw, 130px)",
                }}
            >
                <span
                    className="text-white tabular-nums"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.4rem, 7vw, 3.25rem)",
                        fontWeight: 600,
                        lineHeight: 1,
                    }}
                >
                    {Pad(value)}
                </span>
            </div>
            <span
                className="mt-2 text-white/50 uppercase tracking-widest"
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                }}
            >
                {label}
            </span>
        </div>
    )
}

export function ComingSoonPage() {
    const { days, hours, minutes, seconds, done } = useCountdown(LAUNCH_DATE)

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: "#502d7f" }}
        >
            {/* Subtle texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `url(https://www.nelson.edu/wp-content/uploads/2026/06/Klyde-9-1-scaled.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
                {/* Wordmark */}
                <div className="mb-16">
                    <img
                        src="https://www.nelson.edu/wp-content/uploads/2026/06/Horizontal-One-Line_Inverse-White-1.png"
                        alt="Nelson University"
                        className="h-10 object-contain"
                    />
                </div>

                {/* Pre-launch label */}
                <p
                    className="text-white/50 uppercase tracking-widest mb-5"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                    }}
                >
                    Something significant is coming
                </p>

                {/* Campaign name */}
                <h1
                    className="text-white mb-4"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                        fontWeight: 600,
                        lineHeight: 1.15,
                    }}
                >
                    The Nehemiah Project
                </h1>

                {/* Goal line */}
                <p
                    className="mb-4"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                        color: "#c5c0e0",
                        fontStyle: "italic",
                    }}
                >
                    A $100 Million Campaign for Nelson University
                </p>

                <p
                    className="text-white/60 max-w-xl mb-14 leading-relaxed"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                    }}
                >
                    Named for the biblical builder who rallied a community
                    around an audacious goal, the Nehemiah Project will
                    transform Nelson's capacity to fulfill its mission —
                    equipping students, empowering faculty, and strengthening
                    the institution for the next century of Kingdom work.
                </p>

                {/* Countdown */}
                <div className="mb-4">
                    <p
                        className="text-white/40 uppercase tracking-widest mb-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.18em",
                        }}
                    >
                        {done
                            ? "The campaign has launched"
                            : "Public launch begins in"}
                    </p>
                    {/* Single row at all sizes — fluid sizing prevents overflow */}
                    <div
                        className="flex items-start justify-center"
                        style={{ gap: "clamp(4px, 1.5vw, 24px)" }}
                    >
                        <CountdownUnit value={days} label="Days" />
                        <span
                            className="text-white/30 flex-shrink-0"
                            style={{
                                fontSize: "clamp(1rem, 4vw, 2.5rem)",
                                fontFamily: "'Playfair Display', serif",
                                marginTop: "clamp(10px, 3.5vw, 28px)",
                            }}
                        >
                            :
                        </span>
                        <CountdownUnit value={hours} label="Hours" />
                        <span
                            className="text-white/30 flex-shrink-0"
                            style={{
                                fontSize: "clamp(1rem, 4vw, 2.5rem)",
                                fontFamily: "'Playfair Display', serif",
                                marginTop: "clamp(10px, 3.5vw, 28px)",
                            }}
                        >
                            :
                        </span>
                        <CountdownUnit value={minutes} label="Minutes" />
                        <span
                            className="text-white/30 flex-shrink-0"
                            style={{
                                fontSize: "clamp(1rem, 4vw, 2.5rem)",
                                fontFamily: "'Playfair Display', serif",
                                marginTop: "clamp(10px, 3.5vw, 28px)",
                            }}
                        >
                            :
                        </span>
                        <CountdownUnit value={seconds} label="Seconds" />
                    </div>
                    <p
                        className="text-white/30 mt-6"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                        }}
                    >
                        January 9, 2027
                    </p>
                </div>

                {/* Divider */}
                <div
                    className="w-24 h-px my-14"
                    style={{ backgroundColor: "#a1a8ae", opacity: 0.4 }}
                />

                {/* Early giving section */}
                <div className="max-w-2xl w-full">
                    <p
                        className="uppercase tracking-widest mb-4"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                            letterSpacing: "0.18em",
                            color: "#c5c0e0",
                        }}
                    >
                        Give Early
                    </p>
                    <h2
                        className="text-white mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                        }}
                    >
                        You Don't Have to Wait
                    </h2>
                    <p
                        className="text-white/60 leading-relaxed mb-10"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
                        }}
                    >
                        Gifts made before the public launch count toward our
                        momentum — and early donors play a vital role in
                        demonstrating the community's commitment. Contact the
                        Advancement Office to make a gift today or to explore
                        pledge and planned giving options.
                    </p>

                    {/* Contact cards */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_max-content] gap-4 text-left">
                        {[
                            {
                                label: "Visit Us",
                                lines: [
                                    "University Advancement",
                                    "Farmer Administration Bldg",
                                    "1200 Sycamore St.",
                                    "Waxahachie, TX 75165",
                                ],
                                href: null,
                            },
                            {
                                label: "Call Us",
                                lines: ["(972) 825-4639"],
                                href: "tel:+19728254639",
                            },
                            {
                                label: "Email Us",
                                lines: ["advancementoffice@nelson.edu"],
                                href: "mailto:advancementoffice@nelson.edu",
                            },
                        ].map(({ label, lines, href }) => (
                            <div
                                key={label}
                                className="border border-white/15 bg-white/5 p-5 hover:bg-white/10 transition-colors"
                            >
                                <p
                                    className="uppercase tracking-widest mb-3"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "9px",
                                        letterSpacing: "0.18em",
                                        color: "#c5c0e0",
                                    }}
                                >
                                    {label}
                                </p>
                                {lines.map((line) =>
                                    href ? (
                                        <a
                                            key={line}
                                            href={href}
                                            className="block text-white hover:text-white/80 transition-colors whitespace-nowrap"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "13px",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            {line}
                                        </a>
                                    ) : (
                                        <p
                                            key={line}
                                            className="text-white/70 whitespace-nowrap"
                                            style={{
                                                fontFamily:
                                                    "'Inter', sans-serif",
                                                fontSize: "13px",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            {line}
                                        </p>
                                    ),
                                )}
                            </div>
                        ))}
                    </div>

                    <p
                        className="text-white/30 mt-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                        }}
                    >
                        Office hours: Monday – Friday, 8:00 am – 5:00 pm CST
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div
                className="relative border-t text-center py-5 px-6"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
                <p
                    className="text-white/25"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                    }}
                >
                    © 2026 Nelson University · All rights reserved
                </p>
            </div>
        </div>
    )
}
