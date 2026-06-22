const stories = [
    {
        id: 1,
        name: "Name",
        role: "Role",
        title: "Story Title 1",
        body: "Sed sollicitudin pellentesque dictum. Suspendisse fermentum accumsan purus quis varius. Suspendisse sapien metus, cursus id tristique nec, placerat vitae lacus. Integer at augue dui. Vestibulum tortor sapien, ultrices tincidunt lacinia id, suscipit at leo. Quisque a lacinia turpis, sed tempus tortor. Sed risus ex, congue eget posuere euismod, tincidunt sed quam. Aenean consequat molestie lorem non ultrices. Sed pharetra lorem quis turpis lacinia faucibus.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        tag: "Tag",
    },
    {
        id: 2,
        name: "Name",
        role: "Role",
        title: "Story Title 2",
        body: 'Nulla in nisl euismod, fermentum libero eu, scelerisque massa. Integer finibus dignissim elit, nec sollicitudin ligula eleifend tincidunt. Vestibulum interdum et erat quis pretium. Cras laoreet pharetra quam vitae tincidunt. Etiam finibus, urna eu mollis interdum, ipsum tortor suscipit urna, vitae blandit neque nibh ut felis. Phasellus ullamcorper sem eget lacus interdum, euismod blandit sem gravida. Maecenas consequat diam vel libero rutrum euismod. Maecenas lobortis arcu turpis, sed volutpat enim feugiat sed. Nullam maximus rhoncus massa in rhoncus. Nulla dolor augue, porta in enim vel, rhoncus iaculis felis.',
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        tag: "Tag",
    },
    {
        id: 3,
        name: "Name",
        role: "Role",
        title: "Story Title 3",
        body: "Nullam eleifend nibh vitae fermentum aliquam. Nam eu nulla ac ipsum iaculis ornare. Fusce feugiat risus ac efficitur suscipit. Donec maximus nunc quis risus auctor, vitae tempor nisi pretium. Aenean ac ullamcorper leo. Sed vitae ultricies lacus, mattis facilisis est. Aliquam mollis velit a ipsum elementum, vel pretium est porttitor. Ut posuere, metus et blandit mollis, purus risus pellentesque felis, non pharetra nunc felis nec est. Ut vehicula lectus eleifend finibus mollis. Fusce auctor justo at lacinia mattis.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        tag: "Tag",
    },
]

export function StoriesPage() {
    return (
        <div>
            {/* Header */}
            <section className="bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p
                        className="text-secondary text-xs uppercase tracking-widest mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Impact Stories
                    </p>
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                    >
                        Stories of Impact
                    </h1>
                    <p className="text-white/60 mt-4 max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci. Maecenas quis dui placerat, faucibus lectus quis, volutpat leo. Nulla efficitur nisi nec mauris porttitor mattis. 
                    </p>
                </div>
            </section>
            <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

            <div className="max-w-7xl mx-auto px-6 py-14 space-y-12">
                {stories.map((story, i) => (
                    <article
                        key={story.id}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors ${
                            i % 2 === 1 ? "lg:[direction:rtl]" : ""
                        }`}
                    >
                        {/* Image */}
                        <div
                            className="bg-muted overflow-hidden"
                            style={{ minHeight: "340px", direction: "ltr" }}
                        >
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full h-full object-cover"
                                style={{ minHeight: "340px" }}
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="p-8 md:p-10 flex flex-col justify-center"
                            style={{ direction: "ltr" }}
                        >
                            <span
                                className="self-start text-xs px-2 py-1 uppercase tracking-wide mb-5"
                                style={{
                                    backgroundColor: "#c5c0e0",
                                    color: "#000010",
                                    fontFamily: "'Inter', sans-serif",
                                }}
                            >
                                {story.tag}
                            </span>
                            <h2
                                className="mb-3"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
                                    lineHeight: "1.35",
                                }}
                            >
                                {story.title}
                            </h2>
                            <p
                                className="mb-5"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "14px",
                                    color: "#502d7f",
                                    fontStyle: "italic",
                                }}
                            >
                                {story.name} · {story.role}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {story.body}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
