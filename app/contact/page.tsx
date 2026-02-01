import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="mb-6 text-4xl font-bold font-heading md:text-5xl">Plan een intake</h1>
                    <p className="mx-auto max-w-xl text-xl text-blue-100">
                        Benieuwd wat een migratie voor uw organisatie betekent? Wij denken graag vrijblijvend mee.
                    </p>
                </div>
            </section>

            <section className="py-20 -mt-20">
                <div className="container">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Info Side */}
                        <div className="lg:col-span-2 space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-fit">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Direct contact</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center text-slate-600">
                                        <Mail className="h-5 w-5 text-blue-600 mr-3" />
                                        <a href="mailto:info@naareuropa.nl" className="hover:text-blue-600 transition-colors">info@naareuropa.nl</a>
                                    </li>
                                    <li className="flex items-center text-slate-600">
                                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                                        <span>+31 (0)20 123 4567</span>
                                    </li>
                                    <li className="flex items-start text-slate-600">
                                        <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                                        <span>Amsterdam, Nederland</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-8 border-t border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Veelgestelde vragen</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Heeft u een algemene vraag over onze werkwijze? Bekijk eerst onze FAQ.
                                </p>
                                <a href="/faq" className="text-sm font-semibold text-blue-600 hover:underline">
                                    Naar de FAQ &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
