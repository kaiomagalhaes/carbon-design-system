import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Switch } from "./switch";

i18n.addResourceBundle(
  "en",
  "switch",
  {
    toggleSetting: "Toggle setting",
    settingEnabled: "Setting enabled",
    disabledOff: "Disabled off",
    disabledOn: "Disabled on",
    lateFeeLabel: "Auto-apply late fees after grace period",
    statementsLabel: "Email monthly statements",
    statementsState: "Statements are {{state}}.",
    on: "on",
    off: "off",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "switch",
  {
    toggleSetting: "Alternar ajuste",
    settingEnabled: "Ajuste activado",
    disabledOff: "Desactivado apagado",
    disabledOn: "Desactivado encendido",
    lateFeeLabel: "Aplicar recargos por mora automáticamente tras el período de gracia",
    statementsLabel: "Enviar estados de cuenta mensuales por correo electrónico",
    statementsState: "Los estados de cuenta están {{state}}.",
    on: "activados",
    off: "desactivados",
  },
  true,
  true,
);

/**
 * Switch is a Radix-based on/off control for immediate settings toggles —
 * autopay, late-fee waivers, statement delivery preferences.
 */
const meta: Meta<typeof Switch> = {
  title: "Components/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj<typeof Switch> = {
  render: () => {
    const { t } = useTranslation("switch");
    return <Switch aria-label={t("toggleSetting")} />;
  },
};

export const Checked: StoryObj<typeof Switch> = {
  render: () => {
    const { t } = useTranslation("switch");
    return <Switch defaultChecked aria-label={t("settingEnabled")} />;
  },
};

export const Disabled: StoryObj<typeof Switch> = {
  render: () => {
    const { t } = useTranslation("switch");
    return (
      <div className="flex items-center gap-4">
        <Switch disabled aria-label={t("disabledOff")} />
        <Switch disabled defaultChecked aria-label={t("disabledOn")} />
      </div>
    );
  },
};

export const WithLabel: StoryObj<typeof Switch> = {
  render: () => {
    const { t } = useTranslation("switch");
    return (
      <div className="flex items-center gap-2">
        <Switch id="late-fee" defaultChecked />
        <label htmlFor="late-fee" className="text-sm text-text-primary">
          {t("lateFeeLabel")}
        </label>
      </div>
    );
  },
};

export const Controlled: StoryObj<typeof Switch> = {
  render: () => {
    const { t } = useTranslation("switch");
    const [enabled, setEnabled] = useState(true);
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Switch id="statements" checked={enabled} onCheckedChange={setEnabled} />
          <label htmlFor="statements" className="text-sm text-text-primary">
            {t("statementsLabel")}
          </label>
        </div>
        <p className="text-xs text-text-muted">
          {t("statementsState", { state: enabled ? t("on") : t("off") })}
        </p>
      </div>
    );
  },
};
