"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { submitContactForm } from "@/app/actions/contact";
import { useToast } from "@/components/ui/use-toast"; // Assuming toast exists, if not we'll use simple state

export function useContactForm() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            collegeOrOrg: "",
            interest: "",
            helpTopics: [],
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setError(null);
            const result = await submitContactForm(data);

            if (result.success) {
                setSuccess(true);
                form.reset();
            } else {
                setError(result.error || "Something went wrong.");
            }
        } catch (err) {
            setError("An unexpected error occurred.");
        }
    };

    return {
        form,
        onSubmit,
        isSubmitting: form.formState.isSubmitting,
        success,
        error,
    };
}
