"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)

        // Simulate server delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        // In a real app, bind to server action
        console.log("Form submitted")

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-green-800">Bedankt!</h3>
                <p className="text-green-700">
                    Uw aanvraag is ontvangen. We nemen binnen 1 werkdag contact op.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setIsSuccess(false)}>
                    Nog een bericht sturen
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium leading-none text-slate-700">Bedrijfsnaam</label>
                        <input
                            id="company"
                            name="company"
                            required
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="Uw bedrijf"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none text-slate-700">Contactpersoon</label>
                        <input
                            id="name"
                            name="name"
                            required
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="Naam"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none text-slate-700">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="naam@bedrijf.nl"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none text-slate-700">Telefoon (optioneel)</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                            placeholder="06 12345678"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="users" className="text-sm font-medium leading-none text-slate-700">Aantal gebruikers</label>
                        <select
                            id="users"
                            name="users"
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        >
                            <option value="1-5">1 - 5</option>
                            <option value="6-20">6 - 20</option>
                            <option value="21-50">21 - 50</option>
                            <option value="50+">50+</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="current" className="text-sm font-medium leading-none text-slate-700">Huidige Provider</label>
                        <select
                            id="current"
                            name="current"
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        >
                            <option value="google">Google Workspace</option>
                            <option value="microsoft">Microsoft 365</option>
                            <option value="other">Overig / On-premise</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none text-slate-700">Uw vraag of uitdaging</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                        placeholder="Beschrijf kort uw situatie of wat u wilt bereiken..."
                    />
                </div>

                <div className="flex items-start">
                    <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-slate-500">
                        Ik ga akkoord met het bewaren van mijn gegevens voor contactdoeleinden zoals omschreven in de <a href="/juridisch/privacy" className="underline hover:text-slate-800">privacyverklaring</a>.
                    </label>
                </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Versturen...
                    </>
                ) : (
                    "Aanvraag versturen"
                )}
            </Button>
        </form>
    )
}
