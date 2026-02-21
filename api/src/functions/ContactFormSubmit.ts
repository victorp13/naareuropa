import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { EmailClient } from "@azure/communication-email";

export async function ContactFormSubmit(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
        return { status: 204, headers: corsHeaders };
    }

    if (request.method !== "POST") {
        return { status: 405, body: "Method Not Allowed", headers: corsHeaders };
    }

    try {
        const body: any = await request.json();

        const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
        if (!connectionString) {
            context.error("Communication Services connection string is missing.");
            return { status: 500, body: "Server configuration error." };
        }

        const emailClient = new EmailClient(connectionString);

        // Read sender address from environment variables or use a default if missing
        const senderAddress = process.env.COMMUNICATION_SERVICES_SENDER_ADDRESS || "donotreply@your-azure-domain.azurecomm.net";

        const htmlContent = `
            <h2>Nieuwe Contactaanvraag: Naar Europa</h2>
            <p><strong>Bedrijfsnaam:</strong> ${body.company}</p>
            <p><strong>Contactpersoon:</strong> ${body.name}</p>
            <p><strong>E-mailadres:</strong> ${body.email}</p>
            <p><strong>Telefoon:</strong> ${body.phone || "-"}</p>
            <p><strong>Aantal gebruikers:</strong> ${body.users}</p>
            <p><strong>Huidige provider:</strong> ${body.current}</p>
            <p><strong>Bericht:</strong></p>
            <p>${body.message}</p>
        `;

        const message = {
            senderAddress: senderAddress,
            content: {
                subject: `Nieuwe aanvraag van ${body.name} (${body.company})`,
                html: htmlContent,
            },
            recipients: {
                to: [{ address: "info@naareuropa.nl" }],
            },
            replyTo: [{ address: body.email }]
        };

        const poller = await emailClient.beginSend(message);
        const response = await poller.pollUntilDone();

        context.log("Email sent successfully", response);

        return {
            status: 200,
            body: JSON.stringify({ message: "Success" }),
            headers: { "Content-Type": "application/json", ...corsHeaders }
        };
    } catch (error: any) {
        context.error("Error sending email:", error);
        return {
            status: 500,
            body: JSON.stringify({ error: "Could not send email." }),
            headers: { "Content-Type": "application/json", ...corsHeaders }
        };
    }
};

app.http('ContactFormSubmit', {
    methods: ['POST', 'OPTIONS'],
    authLevel: 'anonymous',
    handler: ContactFormSubmit
});
