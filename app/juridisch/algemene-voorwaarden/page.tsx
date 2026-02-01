export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-50 py-16">
                <div className="container">
                    <h1 className="text-3xl font-bold font-heading text-slate-900 mb-4">Algemene Voorwaarden</h1>
                </div>
            </section>

            <section className="py-12">
                <div className="container max-w-3xl prose prose-slate">
                    <p className="lead">
                        Op alle diensten van Naar Europa zijn de Algemene Voorwaarden van toepassing.
                    </p>
                    <p>
                        Omdat Naar Europa een fictief consultancybureau is voor deze demo, zijn er geen daadwerkelijke juridische voorwaarden.
                        In een echte situatie zouden hier bepalingen staan over:
                    </p>
                    <ul>
                        <li>Offertes en totstandkoming van de overeenkomst</li>
                        <li>Uitvoering van de dienstverlening</li>
                        <li>Wijziging van de opdracht (meerwerk)</li>
                        <li>Geheimhouding en AVG</li>
                        <li>Intellectueel eigendom</li>
                        <li>Aansprakelijkheid</li>
                        <li>Toepasselijk recht (Nederlands recht)</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
