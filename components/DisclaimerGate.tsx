'use client';
import { useEffect, useState } from "react";


export default function DisclaimerGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("disclaimerAccepted");
    setAccepted(consent === "true");
  }, []);

   const acceptDisclaimer = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setAccepted(true);
  };

// Prevent render until we check localStorage
  if (accepted === null) return null;

  if (!accepted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white px-6">
        <div className="max-w-2xl border border-[rgb(var(--color-accent))] p-10">
          <h1 className="text-2xl mb-6">Disclaimer</h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {/* Placeholder — final legal text will go here */}
            The Bar Council of India does not permit solicitation or
            advertisement by legal practitioners. By accessing this website,
            you acknowledge that you are seeking information voluntarily and
            that no form of solicitation has been made.
          </p>

          <label className="flex items-start gap-3 text-sm mb-6">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1"
            />
            <span>
              I have read and understood the above disclaimer and wish to
              proceed.
            </span>
          </label>

          <button
            onClick={acceptDisclaimer}
            disabled={!checked}
            className="
              w-full py-3
              bg-[rgb(var(--color-primary))]
              text-white
              disabled:opacity-50
              disabled:cursor-not-allowed
              hover:bg-black
              transition-colors
            "
          >
            Proceed
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}