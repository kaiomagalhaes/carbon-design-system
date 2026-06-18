import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { ToastProvider, useToast } from "./toast";
import { Button } from "./button";

i18n.addResourceBundle(
  "en",
  "toast",
  {
    defaultToast: "Default toast",
    chargePostedTitle: "Charge posted",
    chargePostedDescription: "Rent of $1,850.00 posted to Lease #L-2049.",
    successToast: "Success toast",
    paymentRecordedTitle: "Payment recorded",
    paymentRecordedDescription: "$1,850.00 applied to open charges (FIFO).",
    errorToast: "Error toast",
    postingFailedTitle: "Posting failed",
    postingFailedDescription: "Accounting period is CLOSED and rejects new entries.",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "toast",
  {
    defaultToast: "Notificación predeterminada",
    chargePostedTitle: "Cargo registrado",
    chargePostedDescription: "Renta de $1,850.00 registrada en el contrato #L-2049.",
    successToast: "Notificación de éxito",
    paymentRecordedTitle: "Pago registrado",
    paymentRecordedDescription: "$1,850.00 aplicados a cargos abiertos (FIFO).",
    errorToast: "Notificación de error",
    postingFailedTitle: "Error al registrar",
    postingFailedDescription:
      "El período contable está CLOSED y rechaza nuevos asientos.",
  },
  true,
  true,
);

/**
 * Transient notifications. Mount a `ToastProvider` once near the app root, then
 * call `useToast().toast({ title, description?, variant? })` from anywhere.
 * Variants: "default" | "success" | "error". Toasts auto-dismiss after ~4s.
 */
const meta: Meta = {
  title: "Components/Overlays/Toast",
  tags: ["autodocs"],
};
export default meta;

function ToastDemo() {
  const { t } = useTranslation("toast");
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: t("chargePostedTitle"),
            description: t("chargePostedDescription"),
          })
        }
      >
        {t("defaultToast")}
      </Button>
      <Button
        onClick={() =>
          toast({
            variant: "success",
            title: t("paymentRecordedTitle"),
            description: t("paymentRecordedDescription"),
          })
        }
      >
        {t("successToast")}
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            variant: "error",
            title: t("postingFailedTitle"),
            description: t("postingFailedDescription"),
          })
        }
      >
        {t("errorToast")}
      </Button>
    </div>
  );
}

export const Default: StoryObj = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
