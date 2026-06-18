import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";

i18n.addResourceBundle(
  "en",
  "dialog",
  {
    viewLeaseSummary: "View lease summary",
    leaseSummaryTitle: "Lease #L-2049 · Unit 4B",
    leaseSummaryDescription:
      "12-month lease for Jordan Avery, $1,850/mo. Starts Jul 1, 2026.",
    leaseSummaryBody:
      "The tenant is a current resident in good standing with no open balance.",
    close: "Close",
    recordPayment: "Record payment",
    recordPaymentDescription: "Payments apply FIFO to the tenant's open charges.",
    amount: "Amount",
    reference: "Reference / check #",
    referencePlaceholder: "e.g. 100482",
    cancel: "Cancel",
    postPayment: "Post payment",
    openViaExternalState: "Open via external state",
    activateLeaseTitle: "Activate lease",
    activateLeaseDescription:
      "Activation moves Unit 4B to OCCUPIED and the tenant to CURRENT_RESIDENT.",
    activate: "Activate",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "dialog",
  {
    viewLeaseSummary: "Ver resumen del contrato",
    leaseSummaryTitle: "Contrato #L-2049 · Unidad 4B",
    leaseSummaryDescription:
      "Contrato de 12 meses para Jordan Avery, $1,850/mes. Comienza el 1 de julio de 2026.",
    leaseSummaryBody:
      "El inquilino es un residente actual en buena situación y sin saldo pendiente.",
    close: "Cerrar",
    recordPayment: "Registrar pago",
    recordPaymentDescription:
      "Los pagos se aplican por orden FIFO a los cargos abiertos del inquilino.",
    amount: "Importe",
    reference: "Referencia / n.º de cheque",
    referencePlaceholder: "p. ej. 100482",
    cancel: "Cancelar",
    postPayment: "Registrar pago",
    openViaExternalState: "Abrir mediante estado externo",
    activateLeaseTitle: "Activar contrato",
    activateLeaseDescription:
      "La activación mueve la Unidad 4B a OCCUPIED y al inquilino a CURRENT_RESIDENT.",
    activate: "Activar",
  },
  true,
  true,
);

/**
 * Modal dialog built on Radix. Compose `DialogTrigger` with a `Button asChild`,
 * then `DialogContent` containing a header, body, and footer. Used across the
 * product for confirmations and short forms (e.g. recording a payment).
 */
const meta: Meta = {
  title: "Components/Overlays/Dialog",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const { t } = useTranslation("dialog");
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{t("viewLeaseSummary")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("leaseSummaryTitle")}</DialogTitle>
            <DialogDescription>{t("leaseSummaryDescription")}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-text-secondary">{t("leaseSummaryBody")}</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("close")}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const WithForm: StoryObj = {
  render: () => {
    const { t } = useTranslation("dialog");
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{t("recordPayment")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("recordPayment")}</DialogTitle>
            <DialogDescription>{t("recordPaymentDescription")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("amount")}</label>
              <Input type="number" placeholder="1850.00" defaultValue="1850.00" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("reference")}</label>
              <Input placeholder={t("referencePlaceholder")} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("cancel")}</Button>
            </DialogClose>
            <Button>{t("postPayment")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Controlled: StoryObj = {
  render: () => {
    function Demo() {
      const { t } = useTranslation("dialog");
      const [open, setOpen] = useState(false);
      return (
        <div className="flex flex-col items-start gap-3">
          <Button variant="outline" onClick={() => setOpen(true)}>
            {t("openViaExternalState")}
          </Button>
          <p className="text-xs text-text-muted">open = {String(open)}</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t("activateLeaseTitle")}</DialogTitle>
                <DialogDescription>{t("activateLeaseDescription")}</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  {t("cancel")}
                </Button>
                <Button onClick={() => setOpen(false)}>{t("activate")}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    }
    return <Demo />;
  },
};
