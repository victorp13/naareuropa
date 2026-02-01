import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    const faqs = [
        {
            q: "Hoe lang duurt een migratie?",
            a: "Een standaard migratie naar Proton Business duurt doorgaans 2 tot 4 weken, afhankelijk van de complexiteit en de hoeveelheid data. De kritieke 'switch' gebeurt in één dag, maar de voorbereiding en nazorg nemen tijd in beslag."
        },
        {
            q: "Is er sprake van downtime?",
            a: "Nee, de e-mail blijft continu werken. Tijdens de nachtelijke MX-switch (het omzetten van de mailstroom) kan er hooguit een vertraging van enkele minuten optreden, maar er gaan geen berichten verloren."
        },
        {
            q: "Verliezen we data?",
            a: "Nee. Ons proces is ontworpen om nul data te verliezen. We maken een volledige kopie van e-mail en bestanden. De oude Google omgeving blijft bovendien nog minimaal 3 maanden beschikbaar als read-only archief."
        },
        {
            q: "Wat gebeurt er met gedeelde drives?",
            a: "Google Shared Drives hebben geen directe 1-op-1 equivalent in alle systemen, maar in Proton Drive kunnen we een vergelijkbare structuur opzetten. We inventariseren vooraf alle rechten en mappen om dit goed in te richten."
        },
        {
            q: "Wat met 'Inloggen met Google'?",
            a: "Dit is een belangrijk punt. Accounts die hierop leunen, zullen niet meer werken als we het Google account verwijderen. In fase 1 inventariseren we deze koppelingen en helpen we u ze om te zetten naar een inlog met e-mail/wachtwoord."
        },
        {
            q: "Kunnen we Google behouden als archief?",
            a: "Ja, dat kan. U kunt licenties afschalen naar goedkopere 'Archived User' licenties (indien beschikbaar) of de data exporteren en lokaal bewaren. Wij adviseren de Google omgeving na de migratie nog een tijd aan te houden voor referentie."
        },
        {
            q: "Wat verandert er voor medewerkers?",
            a: "Zij krijgen een nieuwe inbox en agenda omgeving. De interface van Proton lijkt erg op die van andere webmail diensten, dus de leercurve is laag. Wij verzorgen instructies en handleidingen."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container text-center">
                    <h1 className="mb-6 text-4xl font-bold font-heading text-slate-900 md:text-5xl">Veelgestelde Vragen</h1>
                    <p className="mx-auto max-w-xl text-xl text-slate-600">
                        Antwoorden op de meest voorkomende vragen over migraties en onze dienstverlening.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-base">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    )
}
