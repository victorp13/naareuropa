import { ShieldAlert, Gavel, Server } from "lucide-react"

export function WhySection() {
    const reasons = [
        {
            title: "Amerikaanse Jurisdictie",
            description: "Data bij US providers valt onder de Cloud Act, wat betekent dat Amerikaanse inlichtingendiensten er altijd bij kunnen, ongeacht waar de server staat.",
            icon: Gavel,
        },
        {
            title: "GDPR & Schrems II",
            description: "Sinds het Schrems II-arrest is data-uitwisseling met de VS juridisch complex en risicovol voor Europese organisaties die privacy serieus nemen.",
            icon: ShieldAlert,
        },
        {
            title: "Vendor Lock-in",
            description: "Dominante marktspelers maken het technisch en contractueel lastig om weg te gaan. Wij doorbreken die afhankelijkheid.",
            icon: Server,
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold font-heading text-slate-900 md:text-4xl">Waarom Naar Europa?</h2>
                    <p className="mx-auto max-w-2xl text-slate-600">
                        De afhankelijkheid van niet-Europese techreuzen vormt een groeiend risico voor continuïteit en compliance.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div key={index} className="rounded-lg border border-slate-100 bg-slate-50 p-8 shadow-sm transition-shadow hover:shadow-md">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
