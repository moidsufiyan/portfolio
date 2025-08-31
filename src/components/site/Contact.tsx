import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { toast } from "sonner";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_17iv4zy",
        "template_jwu58et",
        form.current,
        "zp8DRv1mcRNsGKHHR"
      )
      .then(
        () => {
          toast.success(
            "✅ Message sent successfully! I'll get back to you soon."
          );
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="container py-16 md:py-24">
      <h2 className="mb-6 font-heading text-2xl font-bold md:text-3xl swing-in">
        Contact
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <form
          ref={form}
          onSubmit={onSubmit}
          className="surface-card p-6 space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              name="from_name"
              placeholder="Name"
              required
              className="focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
            />
            <Input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
          />
          <div>
            <Button
              type="submit"
              className="relative overflow-hidden"
              disabled={isSubmitting}
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </Button>
          </div>
        </form>
        <div className="surface-card p-6">
          <p className="text-sm text-foreground/80">
            Prefer email or socials? Reach me here:
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="mailto:mmoidsufiyan4151@gmail.com"
            >
              <Mail className="opacity-80" /> mmoidsufiyan4151@gmail.com
            </a>
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="https://www.linkedin.com/in/mohammed-moid-sufiyan-296a30302/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="opacity-80" /> linkedin.com/in/mdmoidsufiyan
            </a>
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="https://github.com/moidsufiyan"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="opacity-80" /> github.com/moidsufiyan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
