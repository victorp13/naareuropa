import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, RefreshCw, Layers } from "lucide-react"

export default function ApproachPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="mb-6 text-4xl font-bold font-heading text-slate-900 md:text-5xl">Onze Aanpak</h1>
                    <p className="mx-auto max-w-2xl text-xl text-slate-600">
                        Migreren zonder risico's bestaat niet. Migreren met beheerste risico's wel.
                        Wij geloven in een methodische, technisch gedreven aanpak.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-3">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
                                <Layers className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Gefaseerde migratie</h3>
                            <p className="text-slate-600">
                                Geen "big bang". We knippen de migratie op in behapbare stukken. Eerst de data, dan de mail, dan pas de afsluiting.
                                Zo blijft de impact op de werkvloer minimaal en houden we grip op het proces.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
                                <RefreshCw className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Parallelle omgevingen</h3>
                            <p className="text-slate-600">
                                Tijdens de transitie houden we beide omgevingen (oud en nieuw) tijdelijk in de lucht.
                                Mocht er onverhoopt iets missen, dan is de oude data altijd direct toegankelijk als back-up.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-6">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Controle & Communicatie</h3>
                            <p className="text-slate-600">
                                Techniek is belangrijk, maar mensen maken het verschil. Wij zorgen voor heldere instructies voor uw medewerkers
                                en duidelijke communicatie over wat er wanneer verandert.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Klaar voor een veilige overstap?</h2>
                    <p className="max-w-2xl mx-auto mb-10 text-slate-300">
                        Wij bespreken graag uw specifieke situatie en wensen in een vrijblijvend gesprek.
                    </p>
                    <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                        <Link href="/contact">Plan een intake</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
