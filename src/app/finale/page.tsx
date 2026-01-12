import type { Metadata } from "next";
import FinalePageClient from "./FinalePageClient";

export const metadata: Metadata = {
  title: "Offline Finale | Olympus – The HR League",
  description:
    "Experience the Olympus Offline Finale - a full-day immersive leadership experience with treasure hunts, CSR programs, mock interviews, and more.",
};

export default function FinalePage() {
  return <FinalePageClient />;
}
