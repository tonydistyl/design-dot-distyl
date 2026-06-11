"use client";

import { Database, Folder, GitBranch, Settings, Users } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";

// Lucide icons are component references (functions), which cannot cross the
// server -> client boundary as props. Defining the option list here, inside a
// client component, keeps the icon refs on the client.
const resources = [
  { value: "datasets", label: "Datasets", icon: Database },
  { value: "projects", label: "Projects", icon: Folder },
  { value: "branches", label: "Branches", icon: GitBranch },
  { value: "members", label: "Members", icon: Users },
  { value: "settings", label: "Settings", icon: Settings },
];

export function IconCombobox() {
  return <Combobox options={resources} placeholder="Resource..." />;
}
