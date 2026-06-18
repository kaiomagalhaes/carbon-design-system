import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "./dropdown-menu";
import { Button } from "./button";
import { Eye, Pencil, Copy, FileText, Ban, Trash2 } from "lucide-react";

i18n.addResourceBundle(
  "en",
  "dropdownMenu",
  {
    actions: "Actions",
    viewTenant: "View tenant",
    editDetails: "Edit details",
    delete: "Delete",
    leaseActions: "Lease actions",
    openLease: "Open lease",
    createAmendment: "Create amendment",
    ledger: "Ledger",
    postCharge: "Post charge",
    recordPayment: "Record payment",
    chargeActions: "Charge actions",
    viewCharge: "View charge",
    edit: "Edit",
    duplicate: "Duplicate",
    viewJournalEntry: "View journal entry",
    voidCharge: "Void charge",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "dropdownMenu",
  {
    actions: "Acciones",
    viewTenant: "Ver inquilino",
    editDetails: "Editar detalles",
    delete: "Eliminar",
    leaseActions: "Acciones del contrato",
    openLease: "Abrir contrato",
    createAmendment: "Crear enmienda",
    ledger: "Libro mayor",
    postCharge: "Registrar cargo",
    recordPayment: "Registrar pago",
    chargeActions: "Acciones del cargo",
    viewCharge: "Ver cargo",
    edit: "Editar",
    duplicate: "Duplicar",
    viewJournalEntry: "Ver asiento contable",
    voidCharge: "Anular cargo",
  },
  true,
  true,
);

/**
 * Contextual action menu built on Radix. Common for table row actions
 * (view / edit / delete) in tenant, lease, and charge lists.
 */
const meta: Meta = {
  title: "Components/Overlays/DropdownMenu",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const { t } = useTranslation("dropdownMenu");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{t("actions")}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>{t("viewTenant")}</DropdownMenuItem>
          <DropdownMenuItem>{t("editDetails")}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-400 focus:text-red-300">
            {t("delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithLabelAndGroups: StoryObj = {
  render: () => {
    const { t } = useTranslation("dropdownMenu");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Lease #L-2049</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[12rem]">
          <DropdownMenuLabel>{t("leaseActions")}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>{t("openLease")}</DropdownMenuItem>
            <DropdownMenuItem>{t("createAmendment")}</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>{t("ledger")}</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>{t("postCharge")}</DropdownMenuItem>
            <DropdownMenuItem>{t("recordPayment")}</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithIcons: StoryObj = {
  render: () => {
    const { t } = useTranslation("dropdownMenu");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{t("chargeActions")}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[12rem]">
          <DropdownMenuItem>
            <Eye size={14} /> {t("viewCharge")}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pencil size={14} /> {t("edit")}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy size={14} /> {t("duplicate")}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText size={14} /> {t("viewJournalEntry")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-amber-400 focus:text-amber-300">
            <Ban size={14} /> {t("voidCharge")}
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-400 focus:text-red-300">
            <Trash2 size={14} /> {t("delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
