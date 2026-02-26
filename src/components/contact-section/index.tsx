import { Separator } from "@/components/ui/separator";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section
      className="bg-background py-16 md:py-0"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        <ContactInfo />
        <Separator className="block md:hidden" />
        <ContactForm />
      </div>
    </section>
  );
}
