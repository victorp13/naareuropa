import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32 lg:py-40">
            <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                        Focus op continuïteit en soevereiniteit
                    </div>
                    <h1 className="font-heading mb-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Breng je IT en data <span className="text-primary">Naar Europa</span>.
                    </h1>
                    <p className="mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
                        Naar Europa helpt Nederlandse organisaties migreren van Amerikaanse service providers naar Europese alternatieven. Verminder juridische risico's en herwin controle.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button asChild size="lg" className="text-base">
                            <Link href="/contact">Plan een intake</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-base">
                            <Link href="/aanpak">Bekijk onze aanpak</Link>
                        </Button>
                    </div>
                </div>

                {/* Hero Graphic */}
                <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                    <Image
                        src="/hero-graphic.jpg"
                        alt="Illustratie van een pijl die van Amerika naar Europa wijst op een wereldkaart"
                        width={600}
                        height={600}
                        className="object-contain rounded-3xl shadow-2xl" // Rounded corners and shadow
                        priority
                    />
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-[100px]" />
        </section>
    )
}
