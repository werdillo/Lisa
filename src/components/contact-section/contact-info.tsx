import { Tagline } from "@/components/tagline";
import { contactData } from "./data";

export function ContactInfo() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-0 md:py-24">
      <div className="flex max-w-md flex-col gap-8">
        <h2 >{contactData.description}</h2>
        <div className="flex flex-col gap-4">
          {contactData.contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={contact.id}
                href={contact.href}
                className="flex items-start gap-3 hover:underline"
                aria-label={contact.ariaLabel}
              >
                <div className="pt-0.5">
                  <IconComponent className="text-secondary/60 h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  {contact.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
