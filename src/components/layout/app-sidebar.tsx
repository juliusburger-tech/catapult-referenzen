"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [{ href: "/", label: "Referenzen" }] as const;

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden min-h-screen w-[220px] shrink-0 self-stretch flex-col border-r bg-[var(--color-surface)] lg:flex"
      style={{ borderColor: "var(--color-border-token)" }}
    >
      <div className="flex h-14 items-center px-5">
        <span className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
          catapult.
        </span>
      </div>
      <div className="mx-4 border-t" style={{ borderColor: "var(--color-border-token)" }} />
      <nav className="flex flex-1 flex-col gap-0.5 px-2 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]",
              )}
            >
              {active ? (
                <span
                  className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-[var(--color-primary)]"
                  aria-hidden
                />
              ) : null}
              <span className={cn("pl-2", active && "pl-3")}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
