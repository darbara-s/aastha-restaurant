import { NextRequest, NextResponse } from "next/server";

const RESTAURANT_EMAIL = process.env.RESTAURANT_EMAIL || "ux.darbara@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER || "info@aastha-restaurant.de";

function buildReservationEmailHTML(data: {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  seating: string;
  notes: string;
  submittedAt: string;
}): string {
  const seatingLabel: Record<string, string> = {
    egal: "Kein Wunsch (Egal)",
    innen: "Innenbereich",
    terrasse: "Terrasse",
  };

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#fdf9f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

    <!-- Header -->
    <div style="background:#c0392b;border-radius:16px;padding:28px 24px;text-align:center;margin-bottom:20px;">
      <h1 style="color:#fff;font-size:22px;margin:0 0 4px 0;font-weight:800;">📅 Neue Tischreservierung — Aastha Restaurant</h1>
    </div>

    <!-- Reservation Details -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 16px 0;">Reservierungsdetails</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#2d1a0e;">
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;color:#888;width:140px;">Gäste</td>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;font-weight:700;">${data.guests} Personen</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;color:#888;">Datum</td>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;font-weight:700;">${data.date}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;color:#888;">Uhrzeit</td>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;font-weight:700;">${data.time} Uhr</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;color:#888;">Sitzplatzwunsch</td>
          <td style="padding:8px 0;border-bottom:1px solid #f5f0ea;">${seatingLabel[data.seating] || data.seating}</td>
        </tr>
        ${data.notes ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Anmerkungen</td><td style="padding:8px 0;">${data.notes}</td></tr>` : ""}
      </table>
    </div>

    <!-- Customer Info -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Gast</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#2d1a0e;">
        <tr><td style="padding:4px 0;color:#888;width:140px;">Name</td><td style="padding:4px 0;font-weight:700;">${data.name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Telefon</td><td style="padding:4px 0;font-weight:600;">${data.phone}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">E-Mail</td><td style="padding:4px 0;"><a href="mailto:${data.email}" style="color:#c0392b;">${data.email}</a></td></tr>
      </table>
    </div>

    <!-- Footer -->
    <p style="text-align:center;font-size:12px;color:#999;margin-top:16px;">
      Eingegangen: ${new Date(data.submittedAt).toLocaleString("de-DE")} · Aastha Restaurant, Parkaue 35, 10367 Berlin
    </p>
  </div>
</body>
</html>`;
}

function buildCustomerReservationEmailHTML(data: {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  seating: string;
  notes: string;
  submittedAt: string;
}): string {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#fdf9f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

    <!-- Header -->
    <div style="background:#059669;border-radius:16px;padding:28px 24px;text-align:center;margin-bottom:20px;">
      <h1 style="color:#fff;font-size:22px;margin:0 0 6px 0;font-weight:800;">Reservierungsbestätigung</h1>
      <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0;">Aastha Restaurant Berlin</p>
    </div>

    <!-- Greeting -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <p style="font-size:15px;font-weight:700;color:#065f46;margin:0 0 6px 0;">Hallo ${data.name},</p>
      <p style="font-size:14px;color:#555;margin:0;line-height:1.5;">
        vielen Dank für Ihre Tischreservierung. Wir haben Ihren Tisch für ${data.guests} Person(en) am ${data.date} um ${data.time} Uhr vorgemerkt.
      </p>
    </div>

    <!-- Details -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Ihre Reservierungsdaten</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#2d1a0e;">
        <tr><td style="padding:4px 0;color:#888;width:140px;">Datum & Zeit</td><td style="padding:4px 0;font-weight:700;">${data.date} um ${data.time} Uhr</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Personen</td><td style="padding:4px 0;font-weight:700;">${data.guests} Gäste</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Adresse</td><td style="padding:4px 0;">Parkaue 35, 10367 Berlin</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Telefon</td><td style="padding:4px 0;">030 / 515 247 68</td></tr>
      </table>
    </div>

    <!-- Footer -->
    <p style="text-align:center;font-size:12px;color:#999;margin-top:16px;">
      Falls Sie stornieren oder Ihre Reservierung ändern möchten, rufen Sie uns gerne an unter 030 / 515 247 68.
    </p>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.phone || !data.date || !data.time) {
      return NextResponse.json({ error: "Invalid reservation data" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const restaurantHTML = buildReservationEmailHTML({ ...data, submittedAt });
    const customerHTML = buildCustomerReservationEmailHTML({ ...data, submittedAt });

    const restaurantSubject = `📅 Tischreservierung: ${data.guests} Personen am ${data.date} um ${data.time} – ${data.name}`;
    const customerSubject = `Tischreservierung Bestätigung – ${data.date} um ${data.time} Uhr (Aastha Restaurant)`;

    const isPlaceholderPass = !SMTP_PASS || SMTP_PASS.includes("YOUR_EMAIL");

    if (!isPlaceholderPass && SMTP_HOST && SMTP_USER) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
          from: `"Aastha Reservierung" <${SMTP_FROM}>`,
          to: RESTAURANT_EMAIL,
          subject: restaurantSubject,
          html: restaurantHTML,
        });

        await transporter.sendMail({
          from: `"Aastha Restaurant" <${SMTP_FROM}>`,
          to: data.email,
          subject: customerSubject,
          html: customerHTML,
        });
      } catch (emailError) {
        console.error("Reservation SMTP failed, falling back to test account:", emailError);
        await sendFallbackEtherealRes(data, restaurantSubject, restaurantHTML, customerSubject, customerHTML);
      }
    } else {
      await sendFallbackEtherealRes(data, restaurantSubject, restaurantHTML, customerSubject, customerHTML);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json({ error: "Failed to process reservation" }, { status: 500 });
  }
}

async function sendFallbackEtherealRes(
  data: any,
  restaurantSubject: string,
  restaurantHTML: string,
  customerSubject: string,
  customerHTML: string
) {
  try {
    const nodemailer = await import("nodemailer");
    const testAccount = await nodemailer.default.createTestAccount();
    const transporter = nodemailer.default.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const infoRest = await transporter.sendMail({
      from: '"Aastha Restaurant System" <no-reply@aastha-restaurant.de>',
      to: RESTAURANT_EMAIL,
      subject: restaurantSubject,
      html: restaurantHTML,
    });

    const infoCust = await transporter.sendMail({
      from: '"Aastha Restaurant" <no-reply@aastha-restaurant.de>',
      to: data.email,
      subject: customerSubject,
      html: customerHTML,
    });

    console.log("\n=======================================================");
    console.log("📬 TEST RESERVATION EMAIL GENERATED (Ethereal Preview Links):");
    console.log(`Restaurant Email (${RESTAURANT_EMAIL}):`);
    console.log(`👉 ${nodemailer.default.getTestMessageUrl(infoRest)}`);
    console.log(`Customer Email (${data.email}):`);
    console.log(`👉 ${nodemailer.default.getTestMessageUrl(infoCust)}`);
    console.log("=======================================================\n");
  } catch (err) {
    console.log("\n=== RESERVATION RECEIVED (CONSOLE FALLBACK) ===");
    console.log("Target Restaurant:", RESTAURANT_EMAIL);
    console.log("Target Customer:", data.email);
    console.log("===============================================\n");
  }
}
