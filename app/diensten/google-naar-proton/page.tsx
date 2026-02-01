import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MigrationTimeline } from "@/components/services/migration-timeline"
import { AlertTriangle, CheckCircle, FileText } from "lucide-react"

export default function GoogleToProtonPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="mb-6 text-4xl font-bold font-heading text-slate-900 md:text-5xl lg:text-6xl">
                            Google Workspace naar <span className="text-primary">Proton Business</span>
                        </h1>
                        <p className="mb-8 text-xl text-slate-600">
                            Stap over naar de 'gouden standaard' in privacyvriendelijke mail en opslag.
                            Wij verzorgen een geruisloze migratie met oog voor details die vaak vergeten worden.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Vraag een offerte aan</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="#werkwijze">Bekijk de fases</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem / Intro */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Meer dan alleen nieuwe mail</h2>
                        <div className="prose prose-slate text-slate-600">
                            <p>
                                Veel organisaties denken bij de overstap vooral aan e-mail. Dat is een misvatting.
                                Google Workspace is diep geworteld in uw organisatie via Agenda's, Google Drive bestanden (die niet zomaar te exporteren zijn)
                                en de "Log in met Google" knoppen die uw medewerkers op talloze websites gebruiken.
                            </p>
                            <p className="mt-4">
                                Een onzorgvuldige migratie leidt tot dataverlies, kapotte accounts en frustratie.
                                Onze aanpak is gericht op het ontzenuwen van deze risico's.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                        <div className="flex items-start mb-4">
                            <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1" />
                            <h3 className="text-lg font-bold text-amber-900">Kritieke aandachtspunten</h3>
                        </div>
                        <ul className="space-y-3 text-amber-800/80">
                            <li className="flex items-start">
                                <span className="mr-2 font-bold">•</span>
                                <span><strong>OAuth & "Log in met Google":</strong> Als we Google uitzetten, werken deze accounts elders niet meer. Wij inventariseren dit vooraf.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 font-bold">•</span>
                                <span><strong>Gedeelde data:</strong> Eigendom van bestanden in Google Drive en Shared Drives werkt anders dan in traditionele systemen.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 font-bold">•</span>
                                <span><strong>Agendabeheer:</strong> Terugkerende afspraken en gedeelde agenda's vereisen specifieke aandacht bij export.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Phases */}
            <section id="werkwijze" className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Gefaseerde Migratie</h2>
                        <p className="text-slate-600">Onze aanpak in detail.</p>
                    </div>
                    <MigrationTimeline />
                </div>
            </section>

            {/* Deliverables & Requirements */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Wat wij opleveren</h3>
                        <ul className="space-y-4">
                            {[
                                "Volledig ingerichte Proton Business omgeving",
                                "Werkende e-mail migratie (historie + nieuwe mail)",
                                "Data migratie van Drive naar Proton Drive",
                                "Beheerdersdocumentatie en gebruikershandleiding",
                                "Nazorg en ondersteuning voor eindgebruikers",
                                "Fallback-plan voor noodgevallen"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Wat wij nodig hebben</h3>
                        <ul className="space-y-4">
                            {[
                                "Toegang tot Google Workspace Admin Console (Super Admin)",
                                "Toegang tot DNS beheer (bijv. TransIP, Vimexx, Cloudflare)",
                                "Lijst van huidige medewerkers en gewenste e-mailadressen",
                                "Inventarisatie van kritische externe accounts (SaaS diensten)",
                                "Beschikbaarheid van een intern contactpersoon"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <FileText className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om de stap te zetten?</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                            Laat uw gegevens achter voor een vrijblijvend intakegesprek. We bespreken uw situatie en maken direct een inschatting van de doorlooptijd.
                        </p>
                        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                            <Link href="/contact">Plan een intake</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
