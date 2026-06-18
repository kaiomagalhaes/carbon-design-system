import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Separator } from "./separator";

i18n.addResourceBundle(
  "en",
  "separator",
  {
    lease: "Lease #L-2041",
    unitTenant: "Unit 204B — Ava Thompson",
    balanceDue: "Balance due:",
    occupied: "Occupied",
    vacant: "Vacant",
    notice: "Notice",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "separator",
  {
    lease: "Contrato n.º L-2041",
    unitTenant: "Unidad 204B — Ava Thompson",
    balanceDue: "Saldo a pagar:",
    occupied: "Ocupadas",
    vacant: "Vacías",
    notice: "Aviso",
  },
  true,
  true,
);

/**
 * Separator is a Radix divider. It defaults to a horizontal rule; pass
 * `orientation="vertical"` (inside a flex container with a defined height) to
 * divide inline items such as account summary metrics.
 */
const meta: Meta<typeof Separator> = {
  title: "Components/Data Display/Separator",
  component: Separator,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => {
    const { t } = useTranslation("separator");
    return (
      <div className="w-80">
        <div className="text-sm text-text-primary">{t("lease")}</div>
        <p className="text-xs text-text-muted">{t("unitTenant")}</p>
        <Separator className="my-3" />
        <div className="text-sm text-text-secondary">
          {t("balanceDue")} <span className="text-text-primary">$0.00</span>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const { t } = useTranslation("separator");
    return (
      <div className="flex h-10 items-center gap-4 text-sm">
        <div className="text-text-secondary">
          {t("occupied")} <span className="text-text-primary">142</span>
        </div>
        <Separator orientation="vertical" />
        <div className="text-text-secondary">
          {t("vacant")} <span className="text-text-primary">8</span>
        </div>
        <Separator orientation="vertical" />
        <div className="text-text-secondary">
          {t("notice")} <span className="text-text-primary">3</span>
        </div>
      </div>
    );
  },
};
