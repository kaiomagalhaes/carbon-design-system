import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Checkbox } from "./checkbox";

i18n.addResourceBundle(
  "en",
  "checkbox",
  {
    selectTenant: "Select tenant",
    selectedTenant: "Selected tenant",
    disabledUnchecked: "Disabled unchecked",
    disabledChecked: "Disabled checked",
    emailReceiptLabel: "Email payment receipt to tenant",
    enrollAutopayLabel: "Enroll tenant in autopay",
    autopayState: "Autopay is {{state}}.",
    enabled: "enabled",
    disabled: "disabled",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "checkbox",
  {
    selectTenant: "Seleccionar inquilino",
    selectedTenant: "Inquilino seleccionado",
    disabledUnchecked: "Desactivado sin marcar",
    disabledChecked: "Desactivado marcado",
    emailReceiptLabel: "Enviar recibo de pago al inquilino por correo electrónico",
    enrollAutopayLabel: "Inscribir al inquilino en pago automático",
    autopayState: "El pago automático está {{state}}.",
    enabled: "activado",
    disabled: "desactivado",
  },
  true,
  true,
);

/**
 * Checkbox is a Radix-based binary toggle used for opt-ins and bulk selection —
 * "send receipt", "include in rent roll", row selection in tables.
 */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  render: () => {
    const { t } = useTranslation("checkbox");
    return <Checkbox aria-label={t("selectTenant")} />;
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    const { t } = useTranslation("checkbox");
    return <Checkbox defaultChecked aria-label={t("selectedTenant")} />;
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    const { t } = useTranslation("checkbox");
    return (
      <div className="flex items-center gap-4">
        <Checkbox disabled aria-label={t("disabledUnchecked")} />
        <Checkbox disabled defaultChecked aria-label={t("disabledChecked")} />
      </div>
    );
  },
};

export const WithLabel: StoryObj<typeof Checkbox> = {
  render: () => {
    const { t } = useTranslation("checkbox");
    return (
      <div className="flex items-center gap-2">
        <Checkbox id="email-receipt" defaultChecked />
        <label htmlFor="email-receipt" className="text-sm text-text-primary">
          {t("emailReceiptLabel")}
        </label>
      </div>
    );
  },
};

export const Controlled: StoryObj<typeof Checkbox> = {
  render: () => {
    const { t } = useTranslation("checkbox");
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Checkbox
            id="autopay"
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          <label htmlFor="autopay" className="text-sm text-text-primary">
            {t("enrollAutopayLabel")}
          </label>
        </div>
        <p className="text-xs text-text-muted">
          {t("autopayState", { state: checked ? t("enabled") : t("disabled") })}
        </p>
      </div>
    );
  },
};
