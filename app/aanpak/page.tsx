import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Settings, Database, Mail, Lock, CheckCircle, ArrowRight } from "lucide-react"
import { ApproachIllustration } from "@/components/illustrations/approach-illustration"

const phases = [
    {
        number: 1,
        title: "Onderzoek",
        icon: Search,
        summary:
            "Voordat we iets migreren, brengen we in kaart hoe uw huidige omgeving er in de praktijk uitziet. Dat gaat verder dan alleen een lijst met accounts.",
        details: [
            {
                heading: "Technisch",
                items: [
                    "Wie beheert het domein en de DNS-instellingen?",
                    "Welke admin-rechten zijn er en wie heeft toegang?",
                ],
            },
            {
                heading: "Mail & agenda",
                items: [
                    "Hoeveel mail staat er per gebruiker?",
                    "Zijn er aliassen, groepsadressen of doorstuurregels?",
                    "Welke gedeelde agenda's en terugkerende afspraken bestaan er?",
                ],
            },
            {
                heading: "Bestanden & opslag",
                items: [
                    "Hoe is de mappenstructuur ingericht?",
                    "Zijn er gedeelde mappen met externe partijen?",
                    "Wie is eigenaar van welke bestanden?",
                ],
            },
            {
                heading: "Gebruikers & apps",
                items: [
                    "Op welke apparaten werken medewerkers (desktop, mobiel, tablet)?",
                    "Welke externe apps zijn gekoppeld via 'Log in met Google' of andere SSO?",
                    "Wat is het huidige beveiligingsniveau (2FA, wachtwoordbeheer)?",
                ],
            },
        ],
        outcome:
            "U heeft een compleet overzicht van uw huidige omgeving, inclusief afhankelijkheden en risico's die vooraf zijn besproken.",
    },
    {
        number: 2,
        title: "Voorbereiding",
        icon: Settings,
        summary:
            "We richten de nieuwe omgeving volledig in, zodat alles klaarstaat voor de daadwerkelijke migratie. Tegelijkertijd bereiden we de data-export voor.",
        details: [
            {
                heading: "Nieuwe omgeving inrichten",
                items: [
                    "Accounts aanmaken voor alle gebruikers",
                    "Domein koppelen en verifiëren",
                    "Tweefactorauthenticatie (2FA) instellen",
                    "Beveiligingsinstellingen configureren",
                ],
            },
            {
                heading: "Data-export voorbereiden",
                items: [
                    "Export van alle bestaande data aanvragen",
                    "Gebruikers informeren dat er tijdelijk geen wijzigingen gemaakt moeten worden",
                ],
            },
        ],
        outcome:
            "De nieuwe omgeving is volledig ingericht en getest. De data-export is aangevraagd en klaar om verwerkt te worden.",
    },
    {
        number: 3,
        title: "Data migratie",
        icon: Database,
        summary:
            "Alle bestanden, contacten en agenda-items worden overgezet naar de nieuwe omgeving. Uw bestaande mail blijft in deze fase gewoon werken.",
        details: [
            {
                heading: "Mail, contacten & agenda",
                items: [
                    "Mailgeschiedenis importeren in de nieuwe omgeving",
                    "Tijdelijke doorstuurregels instellen zodat u niets mist",
                    "Contactpersonen en agenda-items overzetten",
                    "Labels en gedeelde agenda's opnieuw aanmaken",
                ],
            },
            {
                heading: "Bestanden",
                items: [
                    "Geëxporteerde data controleren op volledigheid",
                    "Bestanden uploaden naar de nieuwe opslagomgeving",
                    "Mappenstructuur en toegangsrechten opnieuw inrichten",
                ],
            },
        ],
        outcome:
            "Uw bestanden en agenda staan in de nieuwe omgeving. De oude mail werkt nog gewoon door, zodat er geen onderbrekingen zijn.",
    },
    {
        number: 4,
        title: "Mail switch",
        icon: Mail,
        summary:
            "Dit is het moment waarop de mailstroom wordt omgezet. Nieuwe mail komt voortaan binnen in de nieuwe omgeving. We doen dit zorgvuldig, zodat er geen berichten verloren gaan.",
        details: [
            {
                heading: "DNS-aanpassingen",
                items: [
                    "MX-records omzetten zodat mail naar de nieuwe omgeving gaat",
                    "Beveiligingsinstellingen (SPF, DKIM, DMARC) correct configureren",
                    "Controle dat alle mail correct afgeleverd wordt",
                ],
            },
            {
                heading: "Gewenning",
                items: [
                    "Medewerkers werken primair in de nieuwe omgeving",
                    "Oude omgeving blijft beschikbaar als archief en vangnet",
                    "Eventuele problemen worden direct opgepakt en opgelost",
                ],
            },
        ],
        outcome:
            "Alle mail loopt via de nieuwe omgeving. De oude omgeving is alleen nog beschikbaar ter referentie.",
    },
    {
        number: 5,
        title: "Afbouwen",
        icon: Lock,
        summary:
            "Als alles stabiel draait, sluiten we de oude omgeving definitief af. Dit doen we pas nadat we samen hebben vastgesteld dat alles naar behoren werkt.",
        details: [
            {
                heading: "Definitieve afronding",
                items: [
                    "Laatste controle: zijn alle apps en logins losgekoppeld van de oude omgeving?",
                    "Definitieve offline backup maken van alle oude data",
                    "Oude abonnementen opzeggen",
                    "Data verwijderen conform de AVG",
                ],
            },
        ],
        outcome:
            "De migratie is volledig afgerond. U werkt uitsluitend in de nieuwe omgeving, zonder afhankelijkheden van het oude systeem.",
    },
]

export default function ApproachPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-white py-16 md:py-24 border-b border-slate-100 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-2xl">
                            <h1 className="mb-6 text-4xl font-bold font-heading text-slate-900 md:text-5xl lg:text-6xl leading-tight">
                                Onze <span className="text-primary">Aanpak</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Een migratie naar een privacy-vriendelijke omgeving lijkt op het eerste gezicht eenvoudig.
                                In de praktijk zitten de risico's juist in de onverwachte details. Daarom werken wij in vijf heldere fases,
                                zodat u altijd weet waar u aan toe bent en de continuïteit van uw werk gewaarborgd blijft.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button asChild size="lg">
                                    <Link href="/contact">Vraag een adviesgesprek aan</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 transform scale-125"></div>
                            <ApproachIllustration />
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-16 border-b border-slate-100">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Gefaseerd",
                                text: "Geen 'big bang'. We pakken de migratie stap voor stap aan, zodat de impact op uw dagelijkse werk minimaal blijft.",
                            },
                            {
                                title: "Parallelle omgevingen",
                                text: "Tijdens de overgang draaien oud en nieuw naast elkaar. De oude omgeving blijft beschikbaar als vangnet.",
                            },
                            {
                                title: "Heldere communicatie",
                                text: "Uw medewerkers weten precies wat er wanneer verandert. Geen verrassingen, geen verwarring.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="rounded-xl bg-slate-50 p-6">
                                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5 Phases */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading text-slate-900 md:text-4xl mb-4">
                            Vijf fases, geen verrassingen
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Elke migratie doorloopt dezelfde vijf fases. Per fase bespreken we de
                            voortgang en gaan we pas verder als alles in orde is.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <div key={phase.number} className="relative">
                                {/* Connector line */}
                                {index !== phases.length - 1 && (
                                    <div className="absolute left-7 top-16 bottom-[-48px] hidden w-0.5 bg-slate-200 md:block" />
                                )}

                                <div className="flex gap-6 md:gap-10">
                                    {/* Number circle */}
                                    <div className="flex-none">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-sm">
                                            {phase.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-4">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {phase.title}
                                            </h3>
                                            <phase.icon className="h-5 w-5 text-slate-400" />
                                        </div>

                                        <p className="text-slate-600 mb-6">{phase.summary}</p>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            {phase.details.map((detail, i) => (
                                                <div key={i}>
                                                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                                                        {detail.heading}
                                                    </h4>
                                                    <ul className="space-y-1.5">
                                                        {detail.items.map((item, j) => (
                                                            <li
                                                                key={j}
                                                                className="flex items-start text-sm text-slate-600"
                                                            >
                                                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-blue-400" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Outcome */}
                                        <div className="mt-6 flex items-start gap-3 rounded-lg bg-green-50 p-4">
                                            <CheckCircle className="h-5 w-5 flex-none text-green-600 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-semibold text-green-900">
                                                    Resultaat:{" "}
                                                </span>
                                                <span className="text-sm text-green-800">
                                                    {phase.outcome}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Benieuwd hoe dit er voor uw organisatie uitziet?</h2>
                    <p className="max-w-2xl mx-auto mb-10 text-slate-300">
                        In een vrijblijvend gesprek brengen we uw situatie in kaart en laten we zien welke stappen voor u van toepassing zijn.
                    </p>
                    <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                        <Link href="/contact">
                            Plan een intake
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
