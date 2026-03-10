import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { contactData } from "./data";
import { submitContactForm, type FormStatus } from "./action";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    submitContactForm(e, setStatus);
  };

  return (
    <div className="bg-secondary/60 border-light/90 border-[1px] flex flex-1 flex-col items-center justify-center px-6 py-8 md:py-24">
      <form
        className="flex w-full max-w-md flex-col"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor={contactData.form.fields.name.id}>
                {contactData.form.fields.name.label}
              </FieldLabel>
              <Input
                id={contactData.form.fields.name.id}
                name={contactData.form.fields.name.id}
                placeholder={contactData.form.fields.name.placeholder}
                required
                aria-required="true"
                className="bg-background focus-visible:border-primary focus-visible:ring-0"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={contactData.form.fields.email.id}>
                {contactData.form.fields.email.label}
              </FieldLabel>
              <Input
                id={contactData.form.fields.email.id}
                name={contactData.form.fields.email.id}
                type={contactData.form.fields.email.type}
                placeholder={contactData.form.fields.email.placeholder}
                required
                aria-required="true"
                className="bg-background focus-visible:border-primary focus-visible:ring-0"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={contactData.form.fields.message.id}>
                {contactData.form.fields.message.label}
              </FieldLabel>
              <Textarea
                id={contactData.form.fields.message.id}
                name={contactData.form.fields.message.id}
                placeholder={contactData.form.fields.message.placeholder}
                className="bg-background min-h-[106px] focus-visible:border-primary focus-visible:ring-0"
                required
                aria-required="true"
              />
            </Field>

            <Field orientation="horizontal">
              <Checkbox
                id={contactData.form.privacy.id}
                required
                aria-required="true"
                className="bg-background"
              />
              <FieldLabel
                htmlFor={contactData.form.privacy.id}
                className="text-muted-foreground inline leading-tight font-normal"
              >
                {contactData.form.privacy.text}{" "}
                <a
                  href={contactData.form.privacy.linkHref}
                  className="text-foreground underline"
                >
                  {contactData.form.privacy.linkText}
                </a>
                .
              </FieldLabel>
            </Field>

            <Field>
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending..."
                  : contactData.form.submitButton}
              </Button>
            </Field>

            {status === "success" && (
              <p className="mt-4 text-center text-sm text-green-500">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}
