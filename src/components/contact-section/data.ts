import { Phone, Mail, MapPin } from "lucide-react";

export const contactData = {
  description:
    "Come and visit - let's create something special, personal and really cool.",
  contactInfo: [
    {
      id: 1,
      icon: Phone,
      label: "(+371) 22484996",
      href: "tel:+37122484996",
      ariaLabel: "Call us",
    },
    {
      id: 2,
      icon: Mail,
      label: "murzajeva.lisa@inbox.lv",
      href: "mailto:murzajeva.lisa@inbox.lv",
      ariaLabel: "Email us",
    },
    {
      id: 3,
      icon: MapPin,
      label: "Mazā Monētu iela 2, Rīga",
      href: "https://www.google.com/maps/search/?api=1&query=Mazā+Monētu+iela+2,+Rīga",
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
      linkHref: "/privacy-policy",
    },
    submitButton: "Send message",
  },
};
