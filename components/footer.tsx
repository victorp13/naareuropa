import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-50 py-12">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2 space-y-4">
                    <h2 className="font-bold text-xl tracking-tight">Naar Europa</h2>
                    <p className="text-slate-300 text-sm max-w-sm">
                        Wij helpen Nederlandse organisaties hun IT, data en digitale infrastructuur onder Europees recht te brengen.
                        Onafhankelijk, juridisch nuchter en technisch gedegen.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">Diensten</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>
                            <Link href="/diensten/google-naar-proton" className="hover:text-white transition-colors">
                                Google Workspace naar Proton
                            </Link>
                        </li>
                        <li className="text-slate-500">Microsoft 365 exit (binnenkort)</li>
                        <li className="text-slate-500">Cloud migraties (binnenkort)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-4">Bedrijf</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li><Link href="/over-naareuropa" className="hover:text-white transition-colors">Over ons</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link href="/juridisch/privacy" className="hover:text-white transition-colors">Privacyverklaring</Link></li>
                        <li><Link href="/juridisch/algemene-voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
                <p>&copy; {new Date().getFullYear()} Naar Europa. Alle rechten voorbehouden.</p>
                <p className="mt-2 text-slate-600">
                    Naar Europa is een onafhankelijk adviesbureau en heeft geen commerciële banden met Proton, Google of andere leveranciers.
                    Merknamen worden enkel gebruikt ter identificatie van diensten.
                </p>
            </div>
        </footer>
    )
}
