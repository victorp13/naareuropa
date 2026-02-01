import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function TrustSection() {
    const features = [
        "Volledig onafhankelijk advies",
        "Gefaseerde, omkeerbare migratie",
        "Parallelle omgevingen tijdens overgang",
        "Fallback scenario's voor kritieke processen",
        "Transparante all-in tarieven",
        "Persoonlijke begeleiding en nazorg",
    ]

    return (
        <section className="py-20 bg-slate-900 text-slate-50">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold font-heading text-white md:text-4xl">
                            Zekerheid en risicobeperking
                        </h2>
                        <p className="mb-8 text-lg text-slate-300">
                            Migreren van platform is ingrijpend. Wij begrijpen de zorgen rondom downtime, dataverlies en gebruikersadoptie als geen ander. Onze methodiek is ontworpen om deze risico's te minimaliseren.
                        </p>
                        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                            <Link href="/contact">Plan een vrijblijvende intake</Link>
                        </Button>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                        <ul className="space-y-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                                    <span className="text-slate-200">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
