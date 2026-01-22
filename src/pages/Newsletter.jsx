import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // simulate success
    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="mt-20 bg-base-200 rounded-xl p-8 md:p-12 shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3">
          Join Our Gamehub Newsletter
        </h2>

        <p className="text-accent mb-8 text-sm">
          Get updates on new indie games, exclusive releases, and developer
          stories. No spam. Ever.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full sm:w-[320px] bg-base-100 text-base-content"
          />

          <button
            type="submit"
            className="btn btn-secondary px-8"
          >
            Subscribe
          </button>
        </form>

        {success && (
          <p className="text-green-400 mt-4 text-sm">
            ✅ Thanks for subscribing! Check your inbox.
          </p>
        )}

        <p className="text-xs text-accent mt-4">
          By subscribing, you agree to receive occasional emails from Gamehub.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
