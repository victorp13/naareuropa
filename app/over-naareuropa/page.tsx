import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container max-w-4xl">
                    <h1 className="mb-8 text-4xl font-bold font-heading text-slate-900 md:text-5xl">IT en data onder Europees recht</h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-6">
                        Naar Europa is opgericht met een duidelijke missie: Nederlandse organisaties helpen hun digitale soevereiniteit terug te winnen.
                        In een tijd waarin geopolitieke spanningen en surveillance-wetgeving (zoals de US Cloud Act) risico's vormen voor bedrijfsvoering en privacy,
                        bieden wij een veilige weg naar Europese alternatieven.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">Onze Principes</h2>
                    <div className="space-y-8 prose prose-slate">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">1. Volledig Onafhankelijk</h3>
                            <p className="text-slate-600">
                                Wij verkopen geen licenties en ontvangen geen commissies van leveranciers.
                                Of u nu overstapt naar Proton, Nextcloud, mailbox.org of een andere Europese speler: ons advies is gebaseerd op techniek en recht, niet op marge.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">2. Juridisch Nuchter</h3>
                            <p className="text-slate-600">
                                Wij zijn geen activisten. Wij zijn nuchtere adviseurs die begrijpen dat compliance en risicomanagement cruciaal zijn voor continuïteit.
                                Privacy is voor ons geen ideologie, maar een kwaliteitskenmerk.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">3. Technisch Gedegen</h3>
                            <p className="text-slate-600">
                                Een migratie mag nooit ten koste gaan van de productiviteit. Wij snappen hoe belangrijk e-mail, agenda's en bestanden zijn voor uw dagelijkse operatie.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Het Team</h2>
                        <p className="text-slate-600 mb-8">
                            Naar Europa is een initiatief van ervaren IT- en privacy-professionals die de markt voor secure hosting door en door kennen.
                        </p>
                        {/* Founder placeholder */}
                        <div className="flex items-center space-x-4">
                            <div className="h-16 w-16 bg-slate-200 rounded-full flex-none"></div>
                            <div>
                                <div className="font-bold text-slate-900">Oprichter</div>
                                <div className="text-sm text-slate-500">Privacy & Migration Specialist</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
