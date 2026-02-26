import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { contactData } from "./data";

export function ContactForm() {
  return (
    <div className="bg-secondary/60 border-light/90 border-[1px] flex flex-1 flex-col items-center justify-center px-6 py-8 md:py-24">
      <form
        className="flex w-full max-w-md flex-col"
        onSubmit={(e) => e.preventDefault()}
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
                placeholder={contactData.form.fields.name.placeholder}
                required
                aria-required="true"
                className="bg-background"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={contactData.form.fields.email.id}>
                {contactData.form.fields.email.label}
              </FieldLabel>
              <Input
                id={contactData.form.fields.email.id}
                type={contactData.form.fields.email.type}
                placeholder={contactData.form.fields.email.placeholder}
                required
                aria-required="true"
                className="bg-background"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor={contactData.form.fields.message.id}>
                {contactData.form.fields.message.label}
              </FieldLabel>
              <Textarea
                id={contactData.form.fields.message.id}
                placeholder={contactData.form.fields.message.placeholder}
                className="bg-background min-h-[106px]"
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
              <Button type="submit" className="w-full">
                {contactData.form.submitButton}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}
