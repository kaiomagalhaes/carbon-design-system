import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

i18n.addResourceBundle(
  "en",
  "tabs",
  {
    overview: "Overview",
    ledger: "Ledger",
    documents: "Documents",
    overviewBody:
      "Ava Thompson — Unit 204B. Lease active through Dec 2026. Current balance:",
    ledgerBodyBefore: "Last payment of",
    ledgerBodyAfter: "applied to RENT on Jun 1, 2026. No open charges.",
    documentsBody:
      "Signed lease, move-in inspection report, and renters insurance COI.",
    summary: "Summary",
    charges: "Charges",
    payments: "Payments",
    deposits: "Deposits",
    screenings: "Screenings",
    evictions: "Evictions",
    summaryBody: "Tenant summary and lease term details.",
    chargesBody: "Recurring and one-time charges posted to the ledger.",
    paymentsBody: "Payment history with FIFO application breakdown.",
    depositsBody: "Security deposit of $1,450.00 held; no dispositions.",
    screeningsBody: "Background and credit screening: APPROVED.",
    evictionsBody: "No eviction cases on record.",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "tabs",
  {
    overview: "Resumen",
    ledger: "Movimientos",
    documents: "Documentos",
    overviewBody:
      "Ava Thompson — Unidad 204B. Contrato activo hasta diciembre de 2026. Saldo actual:",
    ledgerBodyBefore: "Último pago de",
    ledgerBodyAfter:
      "aplicado a RENT el 1 de junio de 2026. Sin cargos abiertos.",
    documentsBody:
      "Contrato firmado, informe de inspección de entrada y póliza de seguro del inquilino.",
    summary: "Resumen",
    charges: "Cargos",
    payments: "Pagos",
    deposits: "Depósitos",
    screenings: "Verificaciones",
    evictions: "Desalojos",
    summaryBody: "Resumen del inquilino y detalles del plazo del contrato.",
    chargesBody:
      "Cargos recurrentes y puntuales registrados en los movimientos.",
    paymentsBody: "Historial de pagos con desglose de aplicación FIFO.",
    depositsBody: "Depósito de garantía de $1,450.00 retenido; sin disposiciones.",
    screeningsBody: "Verificación de antecedentes y crédito: APPROVED.",
    evictionsBody: "No hay casos de desalojo registrados.",
  },
  true,
  true,
);

/**
 * Tabs is a Radix-based tab set. `Tabs` takes a `defaultValue`; each
 * `TabsTrigger`/`TabsContent` pair is matched by `value`. Used here to organize
 * a tenant detail view into Overview, Ledger, and Documents.
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Data Display/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const { t } = useTranslation("tabs");
    return (
      <Tabs defaultValue="overview" className="w-[480px]">
        <TabsList>
          <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
          <TabsTrigger value="ledger">{t("ledger")}</TabsTrigger>
          <TabsTrigger value="documents">{t("documents")}</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-sm text-text-secondary">
          <p>
            {t("overviewBody")}{" "}
            <span className="text-text-primary">$0.00</span>.
          </p>
        </TabsContent>
        <TabsContent value="ledger" className="text-sm text-text-secondary">
          <p>
            {t("ledgerBodyBefore")}{" "}
            <span className="text-text-primary">$1,450.00</span> {t("ledgerBodyAfter")}
          </p>
        </TabsContent>
        <TabsContent value="documents" className="text-sm text-text-secondary">
          <p>{t("documentsBody")}</p>
        </TabsContent>
      </Tabs>
    );
  },
};

export const ManyTabs: Story = {
  render: () => {
    const { t } = useTranslation("tabs");
    return (
      <Tabs defaultValue="summary" className="w-[640px]">
        <TabsList>
          <TabsTrigger value="summary">{t("summary")}</TabsTrigger>
          <TabsTrigger value="charges">{t("charges")}</TabsTrigger>
          <TabsTrigger value="payments">{t("payments")}</TabsTrigger>
          <TabsTrigger value="deposits">{t("deposits")}</TabsTrigger>
          <TabsTrigger value="screenings">{t("screenings")}</TabsTrigger>
          <TabsTrigger value="evictions">{t("evictions")}</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="text-sm text-text-secondary">
          {t("summaryBody")}
        </TabsContent>
        <TabsContent value="charges" className="text-sm text-text-secondary">
          {t("chargesBody")}
        </TabsContent>
        <TabsContent value="payments" className="text-sm text-text-secondary">
          {t("paymentsBody")}
        </TabsContent>
        <TabsContent value="deposits" className="text-sm text-text-secondary">
          {t("depositsBody")}
        </TabsContent>
        <TabsContent value="screenings" className="text-sm text-text-secondary">
          {t("screeningsBody")}
        </TabsContent>
        <TabsContent value="evictions" className="text-sm text-text-secondary">
          {t("evictionsBody")}
        </TabsContent>
      </Tabs>
    );
  },
};
