import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Badge } from "./badge";

i18n.addResourceBundle(
  "en",
  "badge",
  {
    currentResident: "Current Resident",
    draft: "Draft",
    featured: "Featured",
    paid: "Paid",
    pending: "Pending",
    pastDue: "Past Due",
    partiallyPaid: "Partially Paid",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "badge",
  {
    currentResident: "Residente actual",
    draft: "Borrador",
    featured: "Destacado",
    paid: "Pagado",
    pending: "Pendiente",
    pastDue: "Vencido",
    partiallyPaid: "Pago parcial",
  },
  true,
  true,
);

/**
 * Badge renders a small pill-shaped label. Use it for inline status hints,
 * counts, and categorical tags throughout the property-management UI.
 */
const meta: Meta<typeof Badge> = {
  title: "Components/Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => {
    const { t } = useTranslation("badge");
    return <Badge>{t("currentResident")}</Badge>;
  },
};

const variants = [
  { variant: "default", key: "draft" },
  { variant: "accent", key: "featured" },
  { variant: "success", key: "paid" },
  { variant: "warning", key: "pending" },
  { variant: "error", key: "pastDue" },
  { variant: "info", key: "partiallyPaid" },
] as const;

export const AllVariants: Story = {
  render: () => {
    const { t } = useTranslation("badge");
    return (
      <div className="flex flex-wrap items-center gap-2">
        {variants.map(({ variant, key }) => (
          <Badge key={variant} variant={variant}>
            {t(key)}
          </Badge>
        ))}
      </div>
    );
  },
};
