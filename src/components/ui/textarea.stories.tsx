import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Textarea } from "./textarea";

i18n.addResourceBundle(
  "en",
  "textarea",
  {
    notePlaceholder: "Add a note about this tenant…",
    noteValue:
      "Tenant requested a payment plan after a late rent notice. Promise-to-pay agreed for the 15th.",
    leaseMemoDisabled: "Lease memo locked after period close.",
    evictionNotesLabel: "Eviction case notes",
    evictionNotesPlaceholder: "Document the timeline and any communications…",
    evictionNotesHelper: "Visible to staff with case access only.",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "textarea",
  {
    notePlaceholder: "Añadir una nota sobre este inquilino…",
    noteValue:
      "El inquilino solicitó un plan de pago tras un aviso de renta atrasada. Se acordó una promesa de pago para el día 15.",
    leaseMemoDisabled: "Memo del contrato bloqueado tras el cierre del período.",
    evictionNotesLabel: "Notas del caso de desalojo",
    evictionNotesPlaceholder: "Documente la cronología y cualquier comunicación…",
    evictionNotesHelper: "Visible solo para el personal con acceso al caso.",
  },
  true,
  true,
);

/**
 * Textarea is the multi-line field for longer free-form text — eviction notes,
 * lease memos, maintenance descriptions. It forwards all native textarea props.
 */
const meta: Meta<typeof Textarea> = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj<typeof Textarea> = {
  render: () => {
    const { t } = useTranslation("textarea");
    return (
      <div className="w-96">
        <Textarea placeholder={t("notePlaceholder")} />
      </div>
    );
  },
};

export const WithValue: StoryObj<typeof Textarea> = {
  render: () => {
    const { t } = useTranslation("textarea");
    return (
      <div className="w-96">
        <Textarea defaultValue={t("noteValue")} />
      </div>
    );
  },
};

export const Disabled: StoryObj<typeof Textarea> = {
  render: () => {
    const { t } = useTranslation("textarea");
    return (
      <div className="w-96">
        <Textarea defaultValue={t("leaseMemoDisabled")} disabled />
      </div>
    );
  },
};

export const WithLabel: StoryObj<typeof Textarea> = {
  render: () => {
    const { t } = useTranslation("textarea");
    return (
      <div className="flex w-96 flex-col gap-1.5">
        <label htmlFor="eviction-notes" className="text-sm font-medium text-text-primary">
          {t("evictionNotesLabel")}
        </label>
        <Textarea id="eviction-notes" placeholder={t("evictionNotesPlaceholder")} />
        <p className="text-xs text-text-muted">{t("evictionNotesHelper")}</p>
      </div>
    );
  },
};
