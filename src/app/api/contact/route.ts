// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, organization, intent, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "NsanaPay Website <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL_RECEIVER || "officialnsanapay@gmail.com"],
            replyTo: email, // <-- CHANGED FROM reply_to TO replyTo
            subject: `[${intent}] New Website Inquiry from ${name}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #00A86B;">New Lead / Inquiry from NsanaPay Website</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Organization:</strong> ${organization || "Individual / Not specified"}</p>
          <p><strong>Category / Intent:</strong> ${intent}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; padding: 14px; border-left: 4px solid #00A86B; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || "Internal server error" },
            { status: 500 }
        );
    }
}