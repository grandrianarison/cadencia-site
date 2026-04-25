import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

function CreativePricing({
  tag = "Tarifs",
  title = "Des offres claires, sans surprise",
  description = "Pas d'engagement longue durée. Résultats garantis dès le premier mois.",
  tiers,
}: {
  tag?: string;
  title?: string;
  description?: string;
  tiers: PricingTier[];
}) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/30">
          {tag}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-white/35 text-lg max-w-md mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={cn(
              "relative group transition-all duration-300",
              index === 0 && "-rotate-1",
              index === 1 && "rotate-1",
              index === 2 && "-rotate-2"
            )}
          >
            {/* card shadow layer */}
            <div
              className={cn(
                "absolute inset-0 rounded-xl border-2 border-zinc-900",
                "shadow-[5px_5px_0px_0px_#18181b]",
                "transition-all duration-300",
                "group-hover:shadow-[8px_8px_0px_0px_#18181b]",
                "group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]",
                tier.popular && "bg-zinc-900"
              )}
            />

            <div className={cn("relative p-7", tier.popular && "text-white")}>
              {tier.popular && (
                <div className="absolute -top-3 -right-3 bg-amber-400 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full rotate-6 border-2 border-zinc-900 whitespace-nowrap">
                  Le plus populaire
                </div>
              )}

              <div className="mb-6">
                <div
                  className={cn(
                    "w-11 h-11 rounded-full mb-4 flex items-center justify-center border-2",
                    tier.popular
                      ? "border-white/30 text-white"
                      : "border-zinc-900 text-zinc-700"
                  )}
                >
                  {tier.icon}
                </div>
                <h3
                  className={cn(
                    "text-xl font-bold mb-1",
                    tier.popular ? "text-white" : "text-zinc-900"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    tier.popular ? "text-zinc-300" : "text-zinc-500"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                        tier.popular ? "border-white/40" : "border-zinc-900"
                      )}
                    >
                      <Check
                        className={cn(
                          "w-3 h-3",
                          tier.popular ? "text-white" : "text-zinc-900"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-sm leading-relaxed",
                        tier.popular ? "text-zinc-200" : "text-zinc-700"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref ?? "https://calendly.com/g-randrianarison/30min"}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block w-full text-center py-3 rounded-lg text-sm font-semibold border-2",
                  "transition-all duration-200",
                  "shadow-[3px_3px_0px_0px] hover:shadow-[5px_5px_0px_0px]",
                  "hover:-translate-x-[2px] hover:-translate-y-[2px]",
                  tier.popular
                    ? "bg-amber-400 text-zinc-900 border-white/20 shadow-amber-300/50 hover:bg-amber-300"
                    : "bg-white text-zinc-900 border-zinc-900 shadow-zinc-900 hover:bg-zinc-50"
                )}
              >
                {tier.ctaLabel ?? "Réserver un appel découverte"}
              </a>
              <p className={cn("text-xs text-center mt-3", tier.popular ? "text-white/30" : "text-zinc-400")}>
                Sans engagement — résiliable à tout moment
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CreativePricing };
export type { PricingTier };
