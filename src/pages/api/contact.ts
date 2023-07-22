import type { APIRoute } from "astro";
import { createTransport } from "nodemailer";

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const { name, email, subject, message } = Object.fromEntries(formData.entries()) as Record<string, string>;

  const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mail = {
    from: { name, address: process.env.SMTP_USER! },
    to: process.env.CONTACT_EMAIL,
    subject,
    text: `New message from ${name} <${email}>\n\n${message}`
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(mail, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          body: "Success"
        });
      }
    });
  });
};
