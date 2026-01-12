import type { Metadata } from "next";
import DatesContactPageClient from "./DatesContactPageClient";

export const metadata: Metadata = {
  title: "Important Dates & Contact | Olympus – The HR League",
  description:
    "View the event timeline, recognition details, and contact information for Olympus – The HR League.",
};

export default function DatesContactPage() {
  return <DatesContactPageClient />;
}
