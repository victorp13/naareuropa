import { Search, Settings, Database, Mail, Lock } from "lucide-react"

export function MigrationTimeline() {
    const phases = [
        {
            id: 1,
            title: "Onderzoek",
            duration: "2 dagen",
            icon: Search,
            items: [
                "Analyse huidige Google Workspace inrichting",
                "Inventarisatie Mail, Drive, Agenda & Aliassen",
                "In kaart brengen OAuth-koppelingen (Log in met Google)",
                "Risicoanalyse en randvoorwaarden vaststellen"
            ]
        },
        {
            id: 2,
            title: "Voorbereiding",
            duration: "1 dag",
            icon: Settings,
            items: [
                "Proton Business omgeving inrichten",
                "Domein- en DNS-voorbereiding (DKIM/DMARC/SPF)",
                "Gebruikersstructuur en wachtwoorden aanmaken",
                "Testaccounts en validatie functionaliteit"
            ]
        },
        {
            id: 3,
            title: "Data migratie",
            duration: "1 dag",
            icon: Database,
            items: [
                "Google Drive naar Proton Drive overzetten",
                "Structuur en eigendomsverschillen oplossen",
                "Beperkingen expliciet in kaart brengen en delen",
                "Training/instructie voor sleutelgebruikers"
            ]
        },
        {
            id: 4,
            title: "Mail overzetten",
            duration: "1 dag (1-2 weken later)",
            icon: Mail,
            items: [
                "IMAP-migratie van alle mailboxen",
                "Labels, filters en mappenstructuur meenemen",
                "MX-switch (omzetten mailstroom) met minimale downtime",
                "Nazorg tijdens de eerste kritieke uren"
            ]
        },
        {
            id: 5,
            title: "Afbouwen Google",
            duration: "1 dag (±3 maanden later)",
            icon: Lock,
            items: [
                "Google omgeving 'read-only' maken",
                "OAuth-checks per gebruiker en op admin-niveau",
                "Verplicht alternatief inloggen instellen voor gekoppelde diensten",
                "Definitieve afsluiting Google contract"
            ]
        },
    ]

    return (
        <div className="space-y-8">
            {phases.map((phase, index) => (
                <div key={phase.id} className="relative flex gap-6 md:gap-10">
                    {/* Timeline Line */}
                    {index !== phases.length - 1 && (
                        <div className="absolute left-[28px] md:left-[32px] top-12 bottom-[-32px] w-0.5 bg-slate-200" />
                    )}

                    <div className="flex-none">
                        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm ring-1 ring-slate-200">
                            <phase.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                        </div>
                    </div>

                    <div className="flex-1 pb-4">
                        <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Fase {phase.id}: {phase.title}</h3>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                                {phase.duration}
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {phase.items.map((item, i) => (
                                <li key={i} className="flex items-start text-slate-600">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
