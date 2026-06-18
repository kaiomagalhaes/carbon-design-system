import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Input } from "./input";

i18n.addResourceBundle(
  "en",
  "input",
  {
    fullNamePlaceholder: "Tenant full name",
    nameValue: "Jordan Rivera",
    unitDisabled: "Maple Court — Unit 204",
    namePlaceholder: "Tenant name",
    emailPlaceholder: "tenant@example.com",
    unitNumberPlaceholder: "Unit number",
    emailLabel: "Email address",
    emailHelper: "Used for rent reminders and receipts.",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "input",
  {
    fullNamePlaceholder: "Nombre completo del inquilino",
    nameValue: "Jordan Rivera",
    unitDisabled: "Maple Court — Unidad 204",
    namePlaceholder: "Nombre del inquilino",
    emailPlaceholder: "inquilino@ejemplo.com",
    unitNumberPlaceholder: "Número de unidad",
    emailLabel: "Correo electrónico",
    emailHelper: "Se usa para recordatorios de renta y recibos.",
  },
  true,
  true,
);

/**
 * Input is the base single-line text field used throughout forms — tenant
 * names, emails, unit numbers. It forwards all native input props and a ref.
 */
const meta: Meta<typeof Input> = {
  title: "Components/Forms/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj<typeof Input> = {
  render: () => {
    const { t } = useTranslation("input");
    return (
      <div className="w-72">
        <Input placeholder={t("fullNamePlaceholder")} />
      </div>
    );
  },
};

export const WithValue: StoryObj<typeof Input> = {
  render: () => {
    const { t } = useTranslation("input");
    return (
      <div className="w-72">
        <Input defaultValue={t("nameValue")} />
      </div>
    );
  },
};

export const Disabled: StoryObj<typeof Input> = {
  render: () => {
    const { t } = useTranslation("input");
    return (
      <div className="w-72">
        <Input defaultValue={t("unitDisabled")} disabled />
      </div>
    );
  },
};

export const Types: StoryObj<typeof Input> = {
  render: () => {
    const { t } = useTranslation("input");
    return (
      <div className="flex w-72 flex-col gap-3">
        <Input type="text" placeholder={t("namePlaceholder")} />
        <Input type="email" placeholder={t("emailPlaceholder")} />
        <Input type="number" placeholder={t("unitNumberPlaceholder")} />
      </div>
    );
  },
};

export const WithLabel: StoryObj<typeof Input> = {
  render: () => {
    const { t } = useTranslation("input");
    return (
      <div className="flex w-72 flex-col gap-1.5">
        <label htmlFor="tenant-email" className="text-sm font-medium text-text-primary">
          {t("emailLabel")}
        </label>
        <Input id="tenant-email" type="email" placeholder={t("emailPlaceholder")} />
        <p className="text-xs text-text-muted">{t("emailHelper")}</p>
      </div>
    );
  },
};
