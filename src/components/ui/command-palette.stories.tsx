import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { CommandPalette, CommandGroup, CommandItem } from "./command-palette";
import { Button } from "./button";
import { Home, Users, FileText, Receipt, CreditCard, Plus } from "lucide-react";

i18n.addResourceBundle(
  "en",
  "commandPalette",
  {
    openButton: "Open command palette (or press {{hint}})",
    navigation: "Navigation",
    goToDashboard: "Go to dashboard",
    goToTenants: "Go to tenants",
    goToLeases: "Go to leases",
    actions: "Actions",
    newApplication: "New application",
    postACharge: "Post a charge",
    recordAPayment: "Record a payment",
  },
  true,
  true,
);
i18n.addResourceBundle(
  "es",
  "commandPalette",
  {
    openButton: "Abrir paleta de comandos (o presione {{hint}})",
    navigation: "Navegación",
    goToDashboard: "Ir al panel",
    goToTenants: "Ir a inquilinos",
    goToLeases: "Ir a contratos",
    actions: "Acciones",
    newApplication: "Nueva solicitud",
    postACharge: "Registrar un cargo",
    recordAPayment: "Registrar un pago",
  },
  true,
  true,
);

/**
 * Command palette (cmdk) for fast navigation and actions. It binds ⌘K / Ctrl+K
 * globally to toggle `open`, so once mounted you can press ⌘K to open it as well
 * as using the button below. `open` is fully controlled by the parent.
 */
const meta: Meta = {
  title: "Components/Overlays/CommandPalette",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    function Demo() {
      const { t } = useTranslation("commandPalette");
      const [open, setOpen] = useState(false);
      return (
        <div className="flex flex-col items-start gap-3">
          <Button variant="outline" onClick={() => setOpen(true)}>
            {t("openButton", { hint: "⌘K" })}
          </Button>
          <CommandPalette open={open} onOpenChange={setOpen}>
            <CommandGroup heading={t("navigation")}>
              <CommandItem icon={<Home size={16} />} onSelect={() => setOpen(false)}>
                {t("goToDashboard")}
              </CommandItem>
              <CommandItem icon={<Users size={16} />} onSelect={() => setOpen(false)}>
                {t("goToTenants")}
              </CommandItem>
              <CommandItem icon={<FileText size={16} />} onSelect={() => setOpen(false)}>
                {t("goToLeases")}
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading={t("actions")}>
              <CommandItem icon={<Plus size={16} />} onSelect={() => setOpen(false)}>
                {t("newApplication")}
              </CommandItem>
              <CommandItem icon={<Receipt size={16} />} onSelect={() => setOpen(false)}>
                {t("postACharge")}
              </CommandItem>
              <CommandItem icon={<CreditCard size={16} />} onSelect={() => setOpen(false)}>
                {t("recordAPayment")}
              </CommandItem>
            </CommandGroup>
          </CommandPalette>
        </div>
      );
    }
    return <Demo />;
  },
};
