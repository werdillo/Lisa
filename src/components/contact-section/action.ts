import { contactData } from "./data";

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface SendMailRequest {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface MailResponse {
  success: boolean;
  id?: string;
  error?: any;
  sent_to?: string;
  overridden?: boolean;
}

export async function submitContactForm(
  e: React.FormEvent<HTMLFormElement>,
  setStatus: (status: FormStatus) => void,
) {
  e.preventDefault();
  setStatus("loading");

  const formData = new FormData(e.currentTarget);
  const name = formData.get(contactData.form.fields.name.id) as string;
  const email = formData.get(contactData.form.fields.email.id) as string;
  const message = formData.get(contactData.form.fields.message.id) as string;

  // Use PUBLIC_ prefix for client-side environment variables in Astro
  const mailApi = import.meta.env.PUBLIC_MAIL_API || "http://localhost:8787";

  const requestBody: SendMailRequest = {
    name,
    email,
    message,
    subject: `New Message from ${name} (Lisa Contact Form)`,
  };

  try {
    const response = await fetch(`${mailApi}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const result: MailResponse = await response.json();

    if (response.ok && (result.success || result.id)) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      console.error("Mail API Error:", result.error || "Unknown error");
      setStatus("error");
    }
  } catch (error) {
    console.error("Connection Error:", error);
    setStatus("error");
  }
}
