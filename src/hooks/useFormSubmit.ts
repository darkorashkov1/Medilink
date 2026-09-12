import { useState } from "react";

interface UseFormSubmitProps<T> {
  endpointId: string;
  initialValues: T;
  onSuccess?: () => void;
}

export function useFormSubmit<T extends Record<string, any>>({
  endpointId,
  initialValues,
  onSuccess,
}: UseFormSubmitProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent, customPayload?: Record<string, any>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const payload = customPayload || formData;
      const response = await fetch(`https://formspree.io/f/${endpointId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialValues);
        if (onSuccess) onSuccess();

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage("Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  }

  return {
    formData,
    setFormData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
  };
}