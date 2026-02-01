import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Cloud, Shield } from "lucide-react"

export function ServicesTeaser() {
    return (
        <section id="diensten" className="py-20 bg-slate-50">
            <div className="container">
                <div className="mb-16">
                    <h2 className="mb-4 text-3xl font-bold font-heading text-slate-900 md:text-4xl">Onze Diensten</h2>
                    <p className="max-w-2xl text-slate-600">
                        Wij begeleiden de volledige transitie. Van strategisch advies tot de technische 'knop die om gaat'.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Active Service */}
                    <div className="relative flex flex-col rounded-xl border border-blue-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
                        <div className="absolute top-0 right-0 rounded-bl-xl rounded-tr-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                            Nu beschikbaar
                        </div>
                        <div className="mb-6 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900">Google Workspace naar Proton</h3>
                        <p className="mb-6 flex-1 text-slate-600">
                            Complete migratie van mail, agenda en drive naar Proton Business. Inclusief veilige data-overdracht en gebruikerstraining.
                        </p>
                        <Button asChild variant="outline" className="w-full justify-between group">
                            <Link href="/diensten/google-naar-proton">
                                Bekijk aanbod <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Placeholder 1 */}
                    <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm opacity-75">
                        <div className="mb-6 h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                            <Cloud className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-700">Microsoft 365 Exit</h3>
                        <p className="mb-6 flex-1 text-slate-500">
                            Strategie en uitvoering voor het verlaten van het Microsoft ecosysteem naar alternatieven zoals Nextcloud en OnlyOffice.
                        </p>
                        <div className="mt-auto text-sm font-medium text-slate-400">Binnenkort beschikbaar</div>
                    </div>

                    {/* Placeholder 2 */}
                    <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm opacity-75">
                        <div className="mb-6 h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                            <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-700">Cloud naar EU Hosting</h3>
                        <p className="mb-6 flex-1 text-slate-500">
                            Verplaats applicaties en databases van AWS/Azure naar Europese cloud providers (Hetzner, Scaleway, Leaseweb).
                        </p>
                        <div className="mt-auto text-sm font-medium text-slate-400">Binnenkort beschikbaar</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
