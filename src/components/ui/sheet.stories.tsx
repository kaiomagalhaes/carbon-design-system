import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetBody,
  SheetFooter,
} from "./sheet";
import { Button } from "./button";
import { Input } from "./input";

i18n.addResourceBundle(
  "en",
  "sheet",
  {
    tenantDetails: "Tenant details",
    tenantTitle: "Jordan Avery · Unit 4B",
    email: "Email",
    phone: "Phone",
    status: "Status",
    cancel: "Cancel",
    saveChanges: "Save changes",
    openFromRight: "Open from right",
    leaseLedger: "Lease ledger",
    leaseLedgerBody: "Open balance: $0.00. All charges current through Jun 2026.",
    close: "Close",
    openFromLeft: "Open from left",
    filters: "Filters",
    property: "Property",
    allProperties: "All properties",
    anyStatus: "Any status",
    reset: "Reset",
    apply: "Apply",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "sheet",
  {
    tenantDetails: "Detalles del inquilino",
    tenantTitle: "Jordan Avery · Unidad 4B",
    email: "Correo electrónico",
    phone: "Teléfono",
    status: "Estado",
    cancel: "Cancelar",
    saveChanges: "Guardar cambios",
    openFromRight: "Abrir desde la derecha",
    leaseLedger: "Libro mayor del contrato",
    leaseLedgerBody:
      "Saldo pendiente: $0.00. Todos los cargos al día hasta junio de 2026.",
    close: "Cerrar",
    openFromLeft: "Abrir desde la izquierda",
    filters: "Filtros",
    property: "Propiedad",
    allProperties: "Todas las propiedades",
    anyStatus: "Cualquier estado",
    reset: "Restablecer",
    apply: "Aplicar",
  },
  true,
  true,
);

/**
 * Slide-over panel built on Radix Dialog. `SheetContent` accepts a `side` prop
 * that supports only `"right"` (default) and `"left"`. Used for detail views and
 * quick-edit panels (e.g. tenant details) that should not interrupt the page.
 */
const meta: Meta = {
  title: "Components/Overlays/Sheet",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const { t } = useTranslation("sheet");
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>{t("tenantDetails")}</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{t("tenantTitle")}</SheetTitle>
          </SheetHeader>
          <SheetBody className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("email")}</label>
              <Input defaultValue="jordan.avery@example.com" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("phone")}</label>
              <Input defaultValue="(555) 014-9920" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("status")}</label>
              <Input defaultValue="CURRENT_RESIDENT" readOnly />
            </div>
          </SheetBody>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">{t("cancel")}</Button>
            </SheetClose>
            <Button>{t("saveChanges")}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Right: StoryObj = {
  render: () => {
    const { t } = useTranslation("sheet");
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>{t("openFromRight")}</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>{t("leaseLedger")}</SheetTitle>
          </SheetHeader>
          <SheetBody>
            <p className="text-sm text-text-secondary">{t("leaseLedgerBody")}</p>
          </SheetBody>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">{t("close")}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Left: StoryObj = {
  render: () => {
    const { t } = useTranslation("sheet");
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>{t("openFromLeft")}</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>{t("filters")}</SheetTitle>
          </SheetHeader>
          <SheetBody className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("property")}</label>
              <Input placeholder={t("allProperties")} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-muted">{t("status")}</label>
              <Input placeholder={t("anyStatus")} />
            </div>
          </SheetBody>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">{t("reset")}</Button>
            </SheetClose>
            <Button>{t("apply")}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
