"use client";

import { useTheme } from "next-themes";
import { Sun } from "../ui/icons/sun";
import { Moon } from "../ui/icons/moon";

export default function ChangeTheme() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <div className="absolute right-0 top-0 *:size-10 *:cursor-pointer aspect-square p-4">
            {resolvedTheme === "dark" ? (
                <Moon onClick={() => setTheme("light")} />
            ) : (
                <Sun onClick={() => setTheme("dark")} />
            )}
        </div>
    );
}
