import React from "react"

const timeline = [
    {
        year: "1927",
        title: "A Vision Begins",
        body: "Southwestern Bible School was established in Enid, Oklahoma, under the leadership of Reverend P.C. Nelson. This foundational school laid the groundwork for what would become a legacy of Spirit-led education.",
    },
    {
        year: "1931",
        title: "Expansion and Growth",
        body: "Two additional schools were established: Southern Bible Institute, operating in conjunction with the Richey Evangelistic Temple, began in Goose Creek, Texas, under the direction of Reverend J.T. Little, later relocating to Houston in 1933. Shield of Faith Bible School in Amarillo, Texas, founded by Reverend Guy Shields, offering education from grade school to Bible school.",
    },
    {
        year: "1954",
        title: "Joint Leadership",
        body: "Several Assemblies of God districts, including Arkansas, Louisiana, New Mexico, North Texas, Oklahoma, South Texas, and West Texas, took ownership of the institution, ensuring its continued growth and stability.",
    },
    {
        year: "1963",
        title: "Southwestern Assemblies of God College (SAGC)",
        body: "The institution adopted the name Southwestern Assemblies of God College (SAGC) to reflect its expanded mission.",
    },
    {
        year: "1968-1987",
        title: "Academic Expansion and Accreditation",
        body: "During this time, the school identified part of its curriculum as Southwestern Junior College of the Assemblies of God alongside SAGC. This era marked the institution’s commitment to academic excellence, culminating in achieving full regional accreditation by 1989.",
    },
    {
        year: "1982-1984",
        title: "The March of Bibles",
        body: "In the 1980s, the university borrowed federal funds to complete a major renovation in the Farmer’s Administration Building. While the improvements were vital, the loan’s terms prohibited Bible-related classes from being held in the building, restricting its use to non-religious purposes. When Dr. Delmer Guynes became president in 1982, he led the effort to repay the federal debt years ahead of schedule. This achievement paved the way for a defining moment in the university’s history. During Homecoming 1984, representatives from the university’s founding schools marched the Bible back into the administration building in a powerful ceremony. Singing as they processed, participants signed four historic Bibles as a commitment to keeping God’s Word central to Nelson University’s mission. These Bibles remain on display today.",
    },
    {
        year: "1994",
        title: "Becoming a University",
        body: "Recognizing its growth and expanded mission, the institution was renamed Southwestern Assemblies of God University (SAGU). Graduate programs were introduced in 1996 under the Harrison Graduate School (now Nelson Graduate School).",
    },
    {
        year: "2004-2015",
        title: "Restructuring for the Future",
        body: "To meet the needs of its growing student population, the university underwent significant academic restructuring: The College of Music and Communication Arts. In 2004, two colleges were established under the university umbrella: The College of Bible and Church Ministries and The College of Arts and Professions. In 2013, The College of Business and Education was added expanding the University into three colleges. In 2015, the university received approval from regional accreditation as a Level V institution with authorization to offer doctoral programs, awarding its first doctorate in 2019.",
    },
    {
        year: "2024",
        title: "Honoring the Founder",
        body: "In 2024, the institution was renamed Nelson University after members of the Board of Regents enthusiastically voted to change the name in honor of the founder, P.C. Nelson. Nelson’s vision and values inspired and guided the institution for nearly a century. The name change was deemed appropriate as the university prepares to carry this same vision into the next hundred years. The university’s core identity and dedication to the Assemblies of God fellowship remain unchanged, and the university continues to be committed to empowering students in a Spirit-led learning environment to pursue their God-given callings.",
    },
    {
        year: "2027",
        title: "The Nehemiah Project",
        body: "The most ambitious campaign in the university's history is publicly launched, with a $100 million goal to honor the past but also look forward into the future.",
    },
]

export function HistoryPage() {
    return (
        <div>
            {/* Page header */}
            <section className="bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className="text-secondary text-xs uppercase tracking-widest mb-3 font-sans">
                        Our Story
                    </p>
                    <h1 className="font-serif text-[clamp(2rem,5vw,3rem)]">
                        100 Years of Excellence
                    </h1>
                    <p className="text-white/60 mt-4 max-w-2xl leading-relaxed">
                        For nearly a century, Nelson University has been
                        dedicated to combining academic excellence with
                        Spirit-led education. Our story is one of growth and
                        unwavering commitment to our mission: equipping students
                        to pursue their God-given callings. Join us as we look
                        at the journey that has shaped who we are today.
                    </p>
                </div>
            </section>
            <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

            {/* Hero image */}
            <div className="w-full bg-muted h-[340px] overflow-hidden">
                <img
                    src="https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg"
                    alt="Nelson University historic campus"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Intro */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] mb-5">
                        A Foundation Built on Bold Vision
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum malesuada turpis nec arcu tempor,
                            non convallis tortor viverra.
                        </p>
                        <p>
                            Maecenas volutpat pellentesque velit ac interdum.
                            Nullam consequat bibendum augue, nec molestie nisl
                            vulputate sed.
                        </p>
                        <p>
                            Suspendisse fermentum accumsan purus quis varius.
                            Suspendisse sapien metus, cursus id tristique nec,
                            placerat vitae lacus.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    {[
                        { label: "Founded", value: "1927" },
                        { label: "Living Alumni", value: "xx" },
                        { label: "Countries Represented", value: "xx" },
                        { label: "Annual Research Funding", value: "$xx" },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="border-b border-border pb-4 flex justify-between items-baseline"
                        >
                            <span className="text-muted-foreground text-sm">
                                {label}
                            </span>
                            <span className="text-primary font-serif text-[22px] font-semibold">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline Section */}
            <section
                className="border-y border-border py-16"
                style={{ backgroundColor: "#f2f2f3" }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-primary text-xs uppercase tracking-widest mb-2 font-sans">
                        Milestones
                    </p>
                    <h2 className="mb-12 font-serif text-[clamp(1.5rem,3vw,2rem)]">
                        Key Moments in Our History
                    </h2>

                    <div className="relative">
                        {/* 1. DESKTOP HORIZONTAL SCROLL (Hidden on mobile) */}
                        <div className="hidden md:block overflow-x-auto pb-10 -mb-10 relative">
                            <div className="absolute top-[31px] left-0 w-[2750px] h-px bg-border z-0" />
                            <div className="flex relative min-w-[2000px] pt-6">
                                {timeline.map((item) => (
                                    <div
                                        key={item.year}
                                        className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
                                    >
                                        {/* Dot */}
                                        <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary mb-4" />
                                        <div className="w-[240px]">
                                            <span className="text-primary block mb-2 font-serif font-semibold text-[14px]">
                                                {item.year}
                                            </span>
                                            <h3 className="mb-2 font-serif text-[17px]">
                                                {item.title}
                                            </h3>
                                            <p
                                                className="text-muted-foreground text-sm leading-relaxed"
                                                style={{ textAlign: "justify" }}
                                            >
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. MOBILE VERTICAL TIMELINE (Visible on mobile, hidden on desktop) */}
                        <div className="md:hidden relative pt-6">
                            {/* The vertical line is now explicitly visible on mobile */}
                            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border z-0" />

                            <div className="space-y-12">
                                {timeline.map((item) => (
                                    <div
                                        key={item.year}
                                        className="relative pl-10"
                                    >
                                        {/* The Dot (aligned with the vertical line) */}
                                        <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-primary border-2 border-primary z-10" />

                                        <div>
                                            <span className="text-primary block mb-1 font-serif font-semibold text-[14px]">
                                                {item.year}
                                            </span>
                                            <h3 className="mb-2 font-serif text-[17px]">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
