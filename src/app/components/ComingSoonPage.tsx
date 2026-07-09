import { useState, useEffect } from "react"
import { LAUNCH_DATE } from "../config"
import { motion } from "motion/react"

export function StructuralGridlines() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
            {/* Horizontal architectural line */}
            <motion.div
                initial={{ scaleX: 0, left: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                }}
                className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent origin-left"
            />
            {/* Vertical alignment axis */}
            <motion.div
                initial={{ scaleY: 0, top: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.5,
                }}
                className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent origin-top"
            />
            {/* Secondary vertical alignment axis */}
            <motion.div
                initial={{ scaleY: 0, bottom: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.7,
                }}
                className="absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent origin-bottom"
            />
        </div>
    )
}

export function LightSweep() {
    return (
        <motion.div
            initial={{ backgroundPosition: "-200% -200%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ duration: 6.0, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay overflow-hidden"
            style={{
                backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%)",
                backgroundSize: "200% 200%", // Extends the background grid internally
            }}
        />
    )
}

export function GoldLeafDrift() {
    // Self-contained coordinates that won't exceed bounds
    const particles = [
        { left: "12%", delay: 0, size: 8 },
        { left: "28%", delay: 1.2, size: 12 },
        { left: "45%", delay: 0.4, size: 6 },
        { left: "72%", delay: 2.1, size: 14 },
        { left: "88%", delay: 0.8, size: 10 },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    initial={{ y: "110vh", opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.4, 0.4, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 12 + i * 2, // Varied speeds
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                    className="absolute rounded-sm mix-blend-screen"
                    style={{
                        left: p.left,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: "linear-gradient(135deg, #c5c0e0, #c5c0e0)", // Warm gold palette
                        filter: "blur(0.5x)",
                    }}
                />
            ))}
        </div>
    )
}

export function ArchitecturalPillars() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
            {/* Left Pillar */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                // Keyframes: Rise up & fade in to 0.5, hold it, then fade completely out
                animate={{
                    y: ["100%", "20%", "20%", "20%"],
                    opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                    duration: 7, // Total sequence length
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2,
                    // Controls percentage positioning of the timeline (0 to 1)
                    // 0.0: Start -> 0.4: Fully visible -> 0.8: Hold complete -> 1.0: Faded out
                    times: [0, 0.4, 0.8, 1],
                }}
                className="absolute bottom-0 left-0 w-[15vw] h-[100vh]"
                style={{
                    background:
                        "linear-gradient(to top, rgba(255,255,255,0.2), rgba(197,192,224,0.7), rgba(255,255,255,0))",
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                    filter: "blur(4px)",
                }}
            />

            {/* Right Pillar */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                    y: ["100%", "20%", "20%", "20%"],
                    opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                    duration: 7.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3, // Keeps your elegant asymmetrical stagger
                    times: [0, 0.4, 0.8, 1],
                }}
                className="absolute bottom-0 right-0 w-[15vw] h-[100vh]"
                style={{
                    background:
                        "linear-gradient(to top, rgba(255,255,255,0.2), rgba(197,192,224,0.7), rgba(255,255,255,0))",
                    clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    filter: "blur(4px)",
                }}
            />
        </div>
    )
}

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
                    fontSize: "14px",
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
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `url(https://www.nelson.edu/wp-content/uploads/2026/06/Klyde-9-1-scaled.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* ADD THE ANIMATION LAYER HERE: */}
            {/* <StructuralGridlines /> */}
            <LightSweep />
            {/* <GoldLeafDrift /> */}
            <ArchitecturalPillars />

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
                    className="text-white/90 uppercase tracking-widest mb-5"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
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
                        color: "#ffffff",
                        fontStyle: "italic",
                    }}
                >
                    A Capital Campaign for Nelson University
                </p>

                <p
                    className="text-white/80 max-w-xl mb-14 leading-relaxed"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
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
                        className="text-white/80 uppercase tracking-widest mb-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
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
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "60px",
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        1.9.27
                    </p>
                </div>

                {/* Divider */}
                <div
                    className="w-24 h-px my-14"
                    style={{ backgroundColor: "#a1a8ae", opacity: 0.6 }}
                />

                {/* Early giving section */}
                <div className="max-w-2xl w-full">
                    <p
                        className="uppercase tracking-widest mb-4"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
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
                            fontSize: "16px",
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
                                        fontSize: "12px",
                                        letterSpacing: "0.18em",
                                        color: "#ffffff",
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
                                            className="text-white/100 whitespace-nowrap"
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
                        className="text-white/100 mt-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
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
                    className="text-white/60"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                    }}
                >
                    © {new Date().getFullYear()} Nelson University · All rights
                    reserved
                </p>
            </div>
        </div>
    )
}
