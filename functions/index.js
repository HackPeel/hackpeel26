const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { google } = require('googleapis');
const { Resend } = require('resend');

admin.initializeApp();

// Initialize Resend
const resend = new Resend(functions.config().resend.key);

// Google Sheets auth
const getAuthClient = () => {
  const keyBase64 = functions.config().google.key;
  const credentials = JSON.parse(Buffer.from(keyBase64, 'base64').toString());
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
};

// Charge-proof Cloud Function
exports.syncToSheets = functions.database.ref('/registrations/{pushId}')
  .onCreate(async (snapshot, context) => {
    const registration = snapshot.val();
    const sheetId = functions.config().sheets.id;

    try {
      // Check if already synced to Sheets / email sent
      if (registration.synced) {
        console.log('Already synced / email sent. Skipping.');
        return null; // prevent double charges
      }

      // 1. Sync to Google Sheets
      const auth = await getAuthClient();
      const sheets = google.sheets({ version: 'v4', auth });
      const timestamp = new Date(registration.timestamp).toLocaleString();

      const values = [[
        timestamp,
        registration.firstName || '',
        registration.lastName || '',
        registration.email || '',
        registration.school || '',
        registration.grade || '',
        registration.role || '',
        registration.teamName || '',
        registration.dietary || '',
        registration.tshirtSize || '',
        registration.emergencyName || '',
        registration.emergencyPhone || '',
        registration.codeOfConduct ? 'Yes' : 'No',
        registration.photoRelease ? 'Yes' : 'No',
        registration.status || 'pending'
      ]];

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A:O',
        valueInputOption: 'USER_ENTERED',
        resource: { values }
      });

      console.log('Successfully synced to Google Sheets');

      // 2. Send confirmation email via Resend
      const emailData = await resend.emails.send({
        from: 'hack::peel <onboarding@resend.dev>',
        to: registration.email,
        subject: '🎉 Registration Confirmed - hack::peel 2025',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>hack::peel Registration</title>
            <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
            <style>
              :root {
                --background: hsl(0, 0%, 4%);
                --foreground: hsl(0, 0%, 98%);
                --card: hsl(0, 0%, 7%);
                --card-foreground: hsl(0, 0%, 98%);
                --accent: hsl(195, 100%, 50%);
                --accent-foreground: hsl(0, 0%, 0%);
                --accent-alt: hsl(180, 100%, 50%);
              }

              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              body {
                margin: 0;
                padding: 40px 20px;
                background-color: var(--background);
                color: var(--foreground);
                font-family: 'JetBrains Mono', monospace;
                line-height: 1.6;
              }

              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: var(--background);
              }

              .header {
                background: linear-gradient(135deg, var(--accent), var(--accent-alt));
                text-align: center;
                padding: 40px 30px;
                border-radius: 12px 12px 0 0;
                color: var(--background);
              }

              .header h1 {
                margin: 0 0 10px 0;
                font-size: 32px;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 700;
              }

              .header p {
                margin: 0;
                font-size: 16px;
                opacity: 0.9;
              }

              .content {
                background-color: var(--card);
                color: var(--card-foreground);
                padding: 40px 30px;
                border-radius: 0 0 12px 12px;
              }

              h2 {
                color: var(--accent);
                font-family: 'Space Grotesk', sans-serif;
                margin-bottom: 20px;
              }

              h3 {
                color: var(--accent);
                font-family: 'Space Grotesk', sans-serif;
                margin-top: 30px;
                margin-bottom: 15px;
              }

              p {
                margin: 15px 0;
              }

              .info-box {
                background-color: hsl(0,0%,10%);
                border-left: 4px solid var(--accent);
                padding: 25px;
                margin: 25px 0;
                border-radius: 8px;
              }

              .info-box h3 {
                margin-top: 0;
                margin-bottom: 15px;
                color: var(--accent);
              }

              .info-box p {
                margin: 10px 0;
                color: var(--foreground);
              }

              .info-box strong {
                color: var(--accent);
              }

              .info-box em {
                color: hsl(0,0%,70%);
              }

              .button-container {
                text-align: center;
                margin: 30px 0;
              }

              .button {
                display: inline-block;
                padding: 14px 28px;
                background-color: var(--accent);
                color: var(--accent-foreground);
                text-decoration: none;
                border-radius: 8px;
                font-weight: 700;
                font-family: 'Space Grotesk', sans-serif;
                margin: 8px;
                transition: all 0.3s ease;
              }

              .button-devpost {
                background-color: var(--accent-alt);
                color: var(--accent-foreground);
              }

              ul {
                padding-left: 25px;
                margin: 20px 0;
              }

              ul li {
                margin: 12px 0;
                color: var(--foreground);
              }

              ul li strong {
                color: var(--accent);
              }

              .footer {
                text-align: center;
                padding: 30px 20px;
                color: hsl(0,0%,50%);
                font-size: 13px;
              }

              .footer p {
                margin: 8px 0;
              }

              .signature {
                margin-top: 30px;
                color: var(--foreground);
              }

              @media only screen and (max-width: 600px) {
                body {
                  padding: 20px 10px;
                }
                
                .header {
                  padding: 30px 20px;
                }
                
                .header h1 {
                  font-size: 24px;
                }
                
                .content {
                  padding: 30px 20px;
                }
                
                .info-box {
                  padding: 20px;
                }
                
                .button {
                  display: block;
                  margin: 10px 0;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 You're Registered!</h1>
                <p>Welcome to hack::peel 2026</p>
              </div>

              <div class="content">
                <h2>Hi ${registration.firstName}!</h2>
                <p>We're thrilled to have you join us for 24 hours of hacking, workshops, mentorship, and collaboration with 100+ students!</p>

                <div class="info-box">
                  <h3>📋 Your Registration Details</h3>
                  <p><strong>Name:</strong> ${registration.firstName} ${registration.lastName}</p>
                  <p><strong>Email:</strong> ${registration.email}</p>
                  <p><strong>School:</strong> ${registration.school}</p>
                  <p><strong>Grade:</strong> ${registration.grade}</p>
                  <p><strong>Role:</strong> ${registration.role}</p>
                  ${registration.teamName ? `<p><strong>Team:</strong> ${registration.teamName}</p>` : `<p><em>No team assigned yet — you can form one at the event!</em></p>`}
                  <p><strong>T-Shirt Size:</strong> ${registration.tshirtSize}</p>
                </div>

                <h3>🚀 Next Steps (Mandatory!)</h3>
                <ul>
                  <li><strong>Join our Discord</strong> for updates, team formation, and announcements</li>
                  <li><strong>Sign up on Devpost</strong> — all submissions must be uploaded there</li>
                  <li><strong>Mark your calendar</strong> for the event</li>
                  <li><strong>Start brainstorming</strong> your project ideas</li>
                </ul>

                <div class="button-container">
                  <a href="https://discord.com/invite/8k56jfr22u" class="button">Join Discord</a>
                  <a href="YOUR_DEVPOST_LINK" class="button button-devpost">Sign Up on Devpost</a>
                </div>

                <div class="info-box">
                  <h3>📍 Event Info</h3>
                  <p><strong>Date:</strong> May idk, 2026</p>
                  <p><strong>Location:</strong> The Woodlands Secondary School, 3225 Erindale Station Rd, Mississauga, ON L5C 1Y5</p>
                  <p><strong>Duration:</strong> 24 hours</p>
                </div>

                <p>If you have any questions, reply to this email or reach out on Discord.</p>
                <p>We can't wait to see what you'll build! 💙</p>
                <p class="signature"><strong>- the hack::peel team</strong></p>
              </div>

              <div class="footer">
                <p>© 2026 hack::peel</p>
                <p>Questions? Email us at contact@hackpeel.com</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      console.log('Confirmation email sent:', emailData);
    await snapshot.ref.update({ synced: true });

      return null;
    } catch (error) {
      console.error('Error in syncToSheets function:', error);
      return null; // don’t throw, prevents repeated execution attempts
    }
  });