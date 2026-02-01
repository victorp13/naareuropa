import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardList, Settings, Database, Mail } from "lucide-react"

export function ApproachSummary() {
    const steps = [
        { number: "1", title: "Onderzoek", desc: "Inventarisatie van data, apps en risico's." },
        { number: "2", title: "Voorbereiding", desc: "Inrichting van de nieuwe omgeving." },
        { number: "3", title: "Data migratie", desc: "Veilige overdracht van bestanden." },
        { number: "4", title: "Mail switch", desc: "Omzetten van MX-records en mail." },
        { number: "5", title: "Afbouwen", desc: "Oude omgeving op slot en archiveren." },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-3xl font-bold font-heading text-slate-900 md:text-4xl">Onze Aanpak</h2>
                    <p className="mx-auto max-w-2xl text-slate-600">
                        Een gecontroleerd proces in vijf stappen. Geen verrassingen, geen dataverlies.
                    </p>
                </div>

                <div className="relative mb-12">
                    {/* Connector line for large screens */}
                    <div className="absolute top-8 left-0 hidden w-full h-0.5 bg-slate-100 lg:block -z-10" />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        {steps.map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center bg-white p-4">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-xl font-bold text-white shadow-sm ring-1 ring-slate-100">
                                    {step.number}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                                <p className="text-center text-sm text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/aanpak">Bekijk details van de aanpak</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
