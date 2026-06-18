// utils.ts
import { BookOpen, Ghost, Heart, Rocket, ScrollText, Sword } from "lucide-react";

export const guiaDeEstiloStatus = {
  Fantasia: {
    backgroundColor: "bg-purple-500/20",
    textColor: "text-purple-500 dark:text-purple-400",
    backgroundColorSpan: "bg-purple-500",
    icon: Sword,
  },

  Romance: {
    backgroundColor: "bg-pink-500/20",
    textColor: "text-pink-500 dark:text-pink-400",
    backgroundColorSpan: "bg-pink-500",
    icon: Heart,
  },

  Terror: {
    backgroundColor: "bg-red-500/20",
    textColor: "text-red-500 dark:text-red-400",
    backgroundColorSpan: "bg-red-500",
    icon: Ghost,
  },

  Ficção: {
    backgroundColor: "bg-blue-500/20",
    textColor: "text-blue-500 dark:text-blue-400",
    backgroundColorSpan: "bg-blue-500",
    icon: Rocket,
  },

  Drama: {
    backgroundColor: "bg-orange-500/20",
    textColor: "text-orange-500 dark:text-orange-400",
    backgroundColorSpan: "bg-orange-500",
    icon: ScrollText,
  },

  Aventura: {
    backgroundColor: "bg-green-500/20",
    textColor: "text-green-500 dark:text-green-400",
    backgroundColorSpan: "bg-green-500",
    icon: BookOpen,
  },
};
