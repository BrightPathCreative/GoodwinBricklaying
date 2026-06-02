"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const projectTypes = [
  "Heritage & Restoration",
  "Architectural Masonry",
  "Chimneys & Fireplaces",
  "Structural & Commercial",
  "Tuck Pointing",
  "Other",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Enquiry form. Submits to the BrightPath CRM (GoHighLevel) pipeline once the
 * endpoint is supplied — set NEXT_PUBLIC_ENQUIRY_ENDPOINT to wire it up. Until
 * then it validates client-side and shows the success state so the flow can be
 * reviewed end to end. Floating-label pattern per design.md §10.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) {
      next.name = "Please enter your name.";
    }
    if (!String(data.get("phone") ?? "").trim()) {
      next.phone = "Please enter a phone number.";
    }
    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      next.email = "Please enter your email.";
    } else if (!emailPattern.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!String(data.get("message") ?? "").trim()) {
      next.message = "Please tell us a little about your project.";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[aria-invalid="true"]`)?.focus();
      return;
    }

    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
    try {
      if (endpoint) {
        const payload = Object.fromEntries(new FormData(form).entries());
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No CRM endpoint configured yet — simulate a successful submission so
        // the success state can be reviewed. Replace by setting the env var.
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successMark} aria-hidden="true" />
        <h3 className={styles.successHeading}>Thank you.</h3>
        <p className={styles.successText}>
          David will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.input}
          placeholder=" "
          autoComplete="name"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        {errors.name ? (
          <span id="name-error" className={styles.error}>
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder=" "
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          {errors.phone ? (
            <span id="phone-error" className={styles.error}>
              {errors.phone}
            </span>
          ) : null}
        </div>

        <div className={styles.field}>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder=" "
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          {errors.email ? (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <select
            id="projectType"
            name="projectType"
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="projectType" className={styles.labelStatic}>
            Project Type
          </label>
        </div>

        <div className={styles.field}>
          <input
            id="suburb"
            name="suburb"
            type="text"
            className={styles.input}
            placeholder=" "
            autoComplete="address-level2"
          />
          <label htmlFor="suburb" className={styles.label}>
            Suburb
          </label>
        </div>
      </div>

      <div className={styles.field}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.textarea}
          placeholder=" "
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <label htmlFor="message" className={styles.label}>
          Message / Project Description
        </label>
        {errors.message ? (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        ) : null}
      </div>

      {status === "error" ? (
        <p className={styles.formError} role="alert">
          Something went wrong sending your enquiry. Please try again, or call
          David directly.
        </p>
      ) : null}

      <button
        type="submit"
        className={`btn btn--dark ${styles.submit}`}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
