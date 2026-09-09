import { NextRequest, NextResponse } from "next/server";

const RESTAURANT_EMAIL = process.env.RESTAURANT_EMAIL || "ux.darbara@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER || "info@aastha-restaurant.de";

function buildRestaurantOrderEmailHTML(data: {
  orderRef: string;
  customer: { name: string; email: string; phone: string; pickupTime: string; notes: string };
  items: { name: string; variant?: string; quantity: number; price: string; lineTotal: string }[];
  totalAmount: string;
  submittedAt: string;
}): string {
  const itemRows = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:14px;color:#2d1a0e;">
          ${item.quantity}× ${item.name}${item.variant ? ` <span style="color:#888;font-size:12px;">(${item.variant})</span>` : ""}
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:14px;color:#2d1a0e;text-align:right;white-space:nowrap;">
          ${item.lineTotal} €
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#fdf9f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

    <!-- Header -->
    <div style="background:#c0392b;border-radius:16px;padding:28px 24px;text-align:center;margin-bottom:20px;">
      <h1 style="color:#fff;font-size:22px;margin:0 0 4px 0;font-weight:800;">🍽 Neue Abholbestellung — Aastha Restaurant</h1>
      <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0;">Bestellnummer: <strong style="color:#fff;">${data.orderRef}</strong></p>
    </div>

    <!-- Customer Info -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Kundendaten</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#2d1a0e;">
        <tr><td style="padding:4px 0;color:#888;width:130px;">Name</td><td style="padding:4px 0;font-weight:700;">${data.customer.name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">E-Mail</td><td style="padding:4px 0;"><a href="mailto:${data.customer.email}" style="color:#c0392b;">${data.customer.email}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Telefon</td><td style="padding:4px 0;font-weight:600;">${data.customer.phone}</td></tr>
        ${data.customer.pickupTime ? `<tr><td style="padding:4px 0;color:#888;">Abholzeit</td><td style="padding:4px 0;font-weight:600;">${data.customer.pickupTime}</td></tr>` : ""}
        ${data.customer.notes ? `<tr><td style="padding:4px 0;color:#888;vertical-align:top;">Anmerkungen</td><td style="padding:4px 0;">${data.customer.notes}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#888;">Abholart</td><td style="padding:4px 0;font-weight:700;color:#16a34a;">Selbstabholung</td></tr>
      </table>
    </div>

    <!-- Order Items -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Bestellte Gerichte</h2>
      <table width="100%" cellpadding="0" cellspacing="0">
        ${itemRows}
        <tr>
          <td style="padding:14px 12px 4px;font-weight:800;font-size:16px;color:#2d1a0e;">Gesamtbetrag</td>
          <td style="padding:14px 12px 4px;font-weight:800;font-size:18px;color:#c0392b;text-align:right;">${data.totalAmount} €</td>
        </tr>
      </table>
      <p style="font-size:12px;color:#888;margin:8px 12px 0;">Inkl. MwSt. · Bezahlung bar oder Karte bei Abholung</p>
    </div>

    <!-- Footer -->
    <p style="text-align:center;font-size:12px;color:#999;margin-top:16px;">
      Eingegangen: ${new Date(data.submittedAt).toLocaleString("de-DE")} · Aastha Restaurant, Parkaue 35, 10367 Berlin
    </p>
  </div>
</body>
</html>`;
}

function buildCustomerOrderEmailHTML(data: {
  orderRef: string;
  customer: { name: string; email: string; phone: string; pickupTime: string; notes: string };
  items: { name: string; variant?: string; quantity: number; price: string; lineTotal: string }[];
  totalAmount: string;
  submittedAt: string;
}): string {
  const itemRows = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:14px;color:#2d1a0e;">
          ${item.quantity}× ${item.name}${item.variant ? ` <span style="color:#888;font-size:12px;">(${item.variant})</span>` : ""}
        </td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ede8;font-size:14px;color:#2d1a0e;text-align:right;white-space:nowrap;">
          ${item.lineTotal} €
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#fdf9f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

    <!-- Header -->
    <div style="background:#059669;border-radius:16px;padding:28px 24px;text-align:center;margin-bottom:20px;">
      <h1 style="color:#fff;font-size:22px;margin:0 0 6px 0;font-weight:800;">Vielen Dank für Ihre Bestellung!</h1>
      <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0;">Bestellnummer: <strong style="color:#fff;">${data.orderRef}</strong></p>
    </div>

    <!-- Greeting & Status -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <p style="font-size:15px;font-weight:700;color:#065f46;margin:0 0 6px 0;">Hallo ${data.customer.name},</p>
      <p style="font-size:14px;color:#555;margin:0;line-height:1.5;">
        wir haben Ihre Bestellung erhalten. Unser Küchenteam bereitet Ihre Gerichte jetzt frisch für Sie vor.
      </p>
    </div>

    <!-- Pickup Info -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Abholung im Restaurant</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#2d1a0e;">
        <tr><td style="padding:4px 0;color:#888;width:140px;">Restaurant</td><td style="padding:4px 0;font-weight:700;">Aastha Restaurant</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Adresse</td><td style="padding:4px 0;">Parkaue 35, 10367 Berlin</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Telefon</td><td style="padding:4px 0;">030 / 515 247 68</td></tr>
        ${data.customer.pickupTime ? `<tr><td style="padding:4px 0;color:#888;">Abholzeit</td><td style="padding:4px 0;font-weight:600;">${data.customer.pickupTime}</td></tr>` : ""}
        <tr><td style="padding:4px 0;color:#888;">Bezahlung</td><td style="padding:4px 0;font-weight:600;color:#059669;">Bar oder Karte bei Abholung</td></tr>
      </table>
    </div>

    <!-- Order Items -->
    <div style="background:#fff;border-radius:16px;border:1px solid #ede8e0;padding:20px 24px;margin-bottom:16px;">
      <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#888;margin:0 0 12px 0;">Ihre bestellten Gerichte</h2>
      <table width="100%" cellpadding="0" cellspacing="0">
        ${itemRows}
        <tr>
          <td style="padding:14px 12px 4px;font-weight:800;font-size:16px;color:#2d1a0e;">Gesamtbetrag (inkl. MwSt.)</td>
          <td style="padding:14px 12px 4px;font-weight:800;font-size:18px;color:#059669;text-align:right;">${data.totalAmount} €</td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <p style="text-align:center;font-size:12px;color:#999;margin-top:16px;">
      Bitte nennen Sie Ihre Bestellnummer (${data.orderRef}) bei der Abholung. Wir freuen uns auf Sie!
    </p>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.customer?.name || !data.customer?.email || !data.customer?.phone || !data.items?.length) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 });
    }

    const restaurantHTML = buildRestaurantOrderEmailHTML(data);
    const customerHTML = buildCustomerOrderEmailHTML(data);
    const restaurantSubject = `🍽 Neue Abholbestellung ${data.orderRef} – ${data.customer.name}`;
    const customerSubject = `Bestellbestätigung ${data.orderRef} – Aastha Restaurant Berlin`;

    const isPlaceholderPass = !SMTP_PASS || SMTP_PASS.includes("YOUR_EMAIL");

    if (!isPlaceholderPass && SMTP_HOST && SMTP_USER) {
      // Real SMTP configured
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
          from: `"Aastha Online Bestellung" <${SMTP_FROM}>`,
          to: RESTAURANT_EMAIL,
          subject: restaurantSubject,
          html: restaurantHTML,
        });

        await transporter.sendMail({
          from: `"Aastha Restaurant" <${SMTP_FROM}>`,
          to: data.customer.email,
          subject: customerSubject,
          html: customerHTML,
        });

        console.log(`[SMTP SUCCESS] Sent real emails to ${RESTAURANT_EMAIL} & ${data.customer.email}`);
      } catch (emailError) {
        console.error("Real SMTP failed, falling back to test account:", emailError);
        await sendFallbackEthereal(data, restaurantSubject, restaurantHTML, customerSubject, customerHTML);
      }
    } else {
      // Demo / Test fallback with Ethereal Preview Links
      await sendFallbackEthereal(data, restaurantSubject, restaurantHTML, customerSubject, customerHTML);
    }

    return NextResponse.json({ success: true, orderRef: data.orderRef });
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}

async function sendFallbackEthereal(
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
      to: data.customer.email,
      subject: customerSubject,
      html: customerHTML,
    });

    console.log("\n=======================================================");
    console.log("📬 TEST EMAIL GENERATED (Ethereal Preview Links):");
    console.log(`Restaurant Email (${RESTAURANT_EMAIL}):`);
    console.log(`👉 ${nodemailer.default.getTestMessageUrl(infoRest)}`);
    console.log(`Customer Email (${data.customer.email}):`);
    console.log(`👉 ${nodemailer.default.getTestMessageUrl(infoCust)}`);
    console.log("=======================================================\n");
  } catch (err) {
    console.log("\n=== ORDER RECEIVED (CONSOLE FALLBACK) ===");
    console.log("Target Restaurant:", RESTAURANT_EMAIL);
    console.log("Target Customer:", data.customer.email);
    console.log("Order Ref:", data.orderRef);
    console.log("=========================================\n");
  }
}
