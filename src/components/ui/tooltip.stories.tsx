import type { Meta, StoryObj } from "@storybook/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip";
import { Button } from "./button";
import { Info } from "lucide-react";

i18n.addResourceBundle(
  "en",
  "tooltip",
  {
    hoverForDetails: "Hover for details",
    postsTo5790: "Posts to GL account 5790 during the month",
    vacancyLossLabel: "Vacancy loss info",
    vacancyLossFormula: "Vacancy Loss = GPR − Loss to Lease − actual rent charged",
    top: "Top",
    right: "Right",
    bottom: "Bottom",
    leaseStarts: "Lease starts Jul 1",
    openBalance: "Open balance $0.00",
    periodOpen: "Period is OPEN",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "tooltip",
  {
    hoverForDetails: "Pase el cursor para ver detalles",
    postsTo5790: "Se registra en la cuenta 5790 del libro mayor durante el mes",
    vacancyLossLabel: "Información de pérdida por vacancia",
    vacancyLossFormula:
      "Pérdida por vacancia = GPR − Pérdida por contrato − renta real cobrada",
    top: "Arriba",
    right: "Derecha",
    bottom: "Abajo",
    leaseStarts: "El contrato comienza el 1 de julio",
    openBalance: "Saldo pendiente $0.00",
    periodOpen: "El período está OPEN",
  },
  true,
  true,
);

/**
 * Hover/focus hint built on Radix Tooltip. Usage MUST be wrapped in a
 * `TooltipProvider`, and the trigger should use `asChild` so the tooltip
 * attaches to a real focusable element.
 */
const meta: Meta = {
  title: "Components/Overlays/Tooltip",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const { t } = useTranslation("tooltip");
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">{t("hoverForDetails")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("postsTo5790")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const OnIconButton: StoryObj = {
  render: () => {
    const { t } = useTranslation("tooltip");
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={t("vacancyLossLabel")}>
              <Info size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t("vacancyLossFormula")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const Sides: StoryObj = {
  render: () => {
    const { t } = useTranslation("tooltip");
    return (
      <TooltipProvider>
        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{t("top")}</Button>
            </TooltipTrigger>
            <TooltipContent side="top">{t("leaseStarts")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{t("right")}</Button>
            </TooltipTrigger>
            <TooltipContent side="right">{t("openBalance")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{t("bottom")}</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{t("periodOpen")}</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  },
};
