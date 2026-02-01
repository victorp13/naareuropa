import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
    const packages = [
        {
            name: "Kickstart",
            description: "Voor kleine teams en freelancers zonder complexe data.",
            price: "Vanaf € 950",
            features: [
                "Tot 5 gebruikers",
                "Basis mail en drive migratie",
                "Geen OAuth complexiteit",
                "Standaard inrichting Proton"
            ]
        },
        {
            name: "Standaard",
            description: "Voor MKB met een groeiende organisatie.",
            price: "Vanaf € 2.450",
            highlight: true,
            features: [
                "Tot 25 gebruikers",
                "Volledige mail en drive migratie",
                "Shared Drives migratie",
                "Agenda synchronisatie",
                "Gebruikersinstructie sessie"
            ]
        },
        {
            name: "Complex",
            description: "Maatwerk voor grotere of complexe organisaties.",
            price: "Op aanvraag",
            features: [
                "25+ gebruikers",
                "Complexe OAuth afhankelijkheden",
                "Hybride cloud setups",
                "Uitgebreide risicoanalyse",
                "Nazorg SLA mogelijk"
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="mb-6 text-4xl font-bold font-heading text-slate-900 md:text-5xl">Tarieven</h1>
                    <p className="mx-auto max-w-xl text-xl text-slate-600">
                        Transparante prijzen, geen verborgen kosten. Omdat elke omgeving uniek is, werken we vaak met een vaste prijs na inventarisatie.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {packages.map((pkg, i) => (
                            <div key={i} className={`relative rounded-2xl p-8 border ${pkg.highlight ? 'border-blue-600 shadow-lg scale-105 bg-white z-10' : 'border-slate-200 bg-slate-50'}`}>
                                {pkg.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                        Meest gekozen
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                <p className="text-slate-500 text-sm mb-6">{pkg.description}</p>
                                <div className="text-3xl font-bold text-slate-900 mb-8">{pkg.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feat, j) => (
                                        <li key={j} className="flex items-start text-sm text-slate-700">
                                            <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Button asChild className={`w-full ${pkg.highlight ? '' : 'bg-slate-900 text-white hover:bg-slate-800'}`} variant={pkg.highlight ? 'default' : 'outline'}>
                                    <Link href="/contact">Offerte aanvragen</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center text-sm text-slate-500 max-w-2xl mx-auto">
                        * Prijzen zijn indicatief en exclusief BTW. Licentiekosten voor Proton of andere diensten worden rechtstreeks met de aanbieder verrekend.
                        Complexiteitstoeslagen kunnen gelden voor o.a. grote datahoeveelheden (&gt;1TB), complexe OAuth-structuren of spoedaanvragen.
                    </div>
                </div>
            </section>
        </div>
    )
}
