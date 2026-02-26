import { Phone, Mail, MapPin } from "lucide-react";

export const contactData = {
  tagline: "Contact Section",
  heading: "Get in touch",
  description:
    "Write one or two welcoming sentences that encourage contact and include your response time commitment.",
  contactInfo: [
    {
      id: 1,
      icon: Phone,
      label: "(406) 555-0120",
      href: "#",
      ariaLabel: "Call us",
    },
    {
      id: 2,
      icon: Mail,
      label: "hello@example.com",
      href: "#",
      ariaLabel: "Email us",
    },
    {
      id: 3,
      icon: MapPin,
      label: "192 Griffin Street, Gilbert, AZ 32521",
      href: "#",
      ariaLabel: "Our location",
    },
  ],
  form: {
    fields: {
      name: {
        id: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      email: {
        id: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
      },
      message: {
        id: "message",
        label: "Message",
        placeholder: "Type your message",
      },
    },
    privacy: {
      id: "privacy",
      text: "By selecting this you agree to our",
      linkText: "Privacy Policy",
      linkHref: "#",
    },
    submitButton: "Send message",
  },
};
