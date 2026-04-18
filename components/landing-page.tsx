"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { CreativePricing } from "@/components/ui/creative-pricing";
import type { PricingTier } from "@/components/ui/creative-pricing";
import { Zap, BarChart2, TrendingUp, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const CALENDLY = "https://calendly.com/g-randrianarison/30min";

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    icon: <Zap className="w-5 h-5" />,
    price: 1490,
    description: "Pour tester et obtenir vos premières opportunités outbound.",
    features: [
      "1 campagne cold email active",
      "150 prospects ciblés / mois",
      "Copywriting et séquences inclus",
      "Configuration technique complète",
      "Rapport mensuel de performance",
    ],
    ctaHref: CALENDLY,
  },
  {
    name: "Pro",
    icon: <BarChart2 className="w-5 h-5" />,
    price: 2490,
    description: "Pour construire un pipeline régulier et prévisible.",
    popular: true,
    features: [
      "2 campagnes multicanal (email + LinkedIn)",
      "300 prospects ciblés / mois",
      "A/B testing des messages",
      "Optimisation continue des séquences",
      "Reporting hebdomadaire",
      "Tableau de bord en temps réel",
    ],
    ctaHref: CALENDLY,
  },
  {
    name: "Scale",
    icon: <TrendingUp className="w-5 h-5" />,
    price: 3990,
    description: "Pour les cabinets qui veulent industrialiser leur développement commercial.",
    features: [
      "3 campagnes simultanées",
      "600 prospects ciblés / mois",
      "Account manager dédié",
      "Stratégie personnalisée mensuelle",
      "Reporting hebdomadaire + calls",
      "Intégration CRM incluse",
    ],
    ctaHref: CALENDLY,
  },
];

const faqs = [
  {
    q: "Je suis recruteur, je sais déjà prospecter. Pourquoi vous choisir ?",
    a: "Vous savez prospecter des candidats — c'est votre cœur de métier. La prospection clients, c'est une autre mécanique : ciblage d'entreprises, cold email outbound, relances automatisées, copywriting B2B. Et surtout, vous n'avez pas le temps de le faire sérieusement quand vous êtes tête dans le guidon sur vos mandats. C'est exactement là qu'on intervient.",
  },
  {
    q: "En combien de temps je vois des résultats ?",
    a: "Les premières réponses arrivent généralement dans les 7 à 14 jours suivant le lancement d'une campagne. Les premiers RDV qualifiés dans les 2 à 4 semaines. Nous garantissons un résultat dans les 30 jours — sinon remboursement intégral.",
  },
  {
    q: "Combien de temps ça me prend de mon côté ?",
    a: "Très peu. Un appel de 30 minutes pour le cadrage initial, 30 minutes de validation des séquences avant lancement, puis vous n'avez plus qu'à gérer les RDV entrants. Tout le reste — ciblage, rédaction, technique, relances — c'est nous.",
  },
  {
    q: "Est-ce que mes emails vont finir en spam ?",
    a: "Non, si la configuration est faite correctement. Nous gérons intégralement le paramétrage technique (SPF, DKIM, DMARC), le warm-up du domaine d'envoi et les volumes d'envoi progressifs. Nos taux de délivrabilité dépassent 95%.",
  },
  {
    q: "Je peux arrêter quand je veux ?",
    a: "Oui. Pas d'engagement sur la durée. Vous pouvez arrêter à la fin de n'importe quel mois, avec un préavis de 15 jours. Aucun frais caché, aucune pénalité.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Mensuelle, en début de mois. Virement bancaire ou carte. Facture émise le 1er de chaque mois.",
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="font-sans bg-white text-zinc-900">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            className="text-white font-semibold tracking-[0.18em] uppercase text-sm"
          >
            Cadencia
          </a>
          <ButtonColorful
            label="Réserver un appel"
            href={CALENDLY}
            target="_blank"
          />
        </div>
      </nav>

      {/* ── HERO ── */}
      <AuroraBackground className="dark" showRadialGradient>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        >
          <span className="block text-xs font-medium tracking-[0.22em] uppercase text-white/35 mb-8">
            Prospection B2B pour recruteurs indépendants
          </span>

          <h1 className="mb-6 leading-[1.08]">
            <span className="block font-serif italic text-[clamp(2rem,5.5vw,3.6rem)] text-white/60 mb-1">
              Vous placez des candidats.
            </span>
            <span className="block font-bold text-[clamp(2.2rem,5.5vw,3.8rem)] text-white tracking-tight">
              On trouve vos clients.
            </span>
          </h1>

          <p className="text-base md:text-lg font-light text-white/40 max-w-lg mx-auto mb-10 leading-relaxed">
            Cadencia gère votre prospection outbound clé en main — cold emails,
            ciblage, relances — pour que vous ne dépendiez plus du
            bouche-à-oreille.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <ButtonColorful
              label="Réserver un appel de 30 min →"
              href={CALENDLY}
              target="_blank"
              className="text-base"
            />
            <a
              href="#comment"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors px-4 py-[11px] border border-white/10 rounded-[6px] hover:border-white/25"
            >
              Voir comment ça marche
            </a>
          </div>

          <p className="flex items-center justify-center gap-2 text-xs text-white/25">
            <span className="text-emerald-400 font-semibold">✓</span>
            Garantie résultats — remboursement intégral si aucun RDV qualifié en 30 jours
          </p>
        </motion.div>
      </AuroraBackground>

      {/* ── PAIN ── */}
      <section className="py-28 bg-zinc-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-14"
          >
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mb-3">
              <span className="font-serif italic text-zinc-400 font-normal">Vous savez recruter.</span>
              <br />
              La prospection clients, c&apos;est une autre histoire.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              2 recruteurs indépendants sur 3 citent la prospection comme leur
              principal frein à la croissance.
            </p>
          </motion.div>

          {/* Bento asymétrique */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Grande carte — col-span-2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="md:col-span-2 bg-white border border-zinc-200 rounded-2xl p-8 group hover:border-zinc-900 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="block font-serif italic text-zinc-200 text-[5rem] leading-none mb-4 select-none">
                01
              </span>
              <h3 className="text-xl font-bold mb-3">Pas le temps</h3>
              <p className="text-zinc-500 leading-relaxed">
                Entre les mandats en cours, les entretiens et le sourcing, la
                prospection clients passe toujours après. Et les semaines sans
                nouveau mandat créent de l&apos;anxiété.
              </p>
            </motion.div>

            {/* Deux petites cartes empilées */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.1, ease: EASE } } }}
                className="bg-white border border-zinc-200 rounded-2xl p-7 group hover:border-zinc-900 hover:-translate-y-1 transition-all duration-300 flex-1"
              >
                <span className="block font-serif italic text-zinc-200 text-[4rem] leading-none mb-3 select-none">
                  02
                </span>
                <h3 className="text-lg font-bold mb-2">Trop dépendant du bouche-à-oreille</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Le réseau, ça fonctionne — jusqu&apos;au jour où ça
                  s&apos;assèche. Sans pipeline actif, vous n&apos;avez aucun
                  levier pour prévoir votre activité à 3 mois.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: 0.2, ease: EASE } } }}
                className="bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-300 flex-1"
              >
                <span className="block font-serif italic text-white/10 text-[4rem] leading-none mb-3 select-none">
                  03
                </span>
                <h3 className="text-lg font-bold mb-2">Vous savez pas par où commencer</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Les outils outbound (lemlist, Clay, Sales Nav) sont puissants
                  mais complexes. Les apprendre prend des semaines que vous
                  n&apos;avez pas.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="py-28 bg-white px-6" id="comment">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold mb-3">
              Comment ça marche
            </h2>
            <p className="text-zinc-400 text-lg">
              Un service opérationnel en moins de 2 semaines, sans que vous
              n&apos;ayez rien à faire techniquement.
            </p>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "On définit ensemble votre cible idéale",
                body: "Un appel de 30 minutes pour comprendre votre positionnement, vos secteurs de prédilection et le profil des entreprises que vous voulez adresser.",
              },
              {
                n: "02",
                title: "On construit et lance vos campagnes",
                body: "Création des listes de prospects qualifiés, rédaction des séquences d'emails personnalisés, configuration technique et mise en ligne. Vous validez, on lance.",
              },
              {
                n: "03",
                title: "Vous recevez des RDV qualifiés",
                body: "Les réponses positives atterrissent directement dans votre agenda. Vous n'avez plus qu'à mener la discussion et closer le mandat.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.7, delay: i * 0.1, ease: EASE } } }}
                className={cn(
                  "grid grid-cols-[80px_1fr] gap-8 py-10",
                  i < 2 && "border-b border-zinc-100"
                )}
              >
                <div className="font-serif italic text-[3.5rem] text-zinc-100 leading-none select-none pt-1">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 bg-zinc-50 px-6" id="tarifs">
        <CreativePricing
          tag="Tarifs"
          title="Des offres claires, sans surprise"
          description="Pas d'engagement longue durée. Résultats garantis dès le premier mois."
          tiers={pricingTiers}
        />
      </section>

      {/* ── GARANTIE ── */}
      <section className="py-24 bg-zinc-950 px-6 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-xl mx-auto"
        >
          <div className="w-10 h-[2px] bg-white/20 mx-auto mb-8" />
          <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold mb-5">
            Garantie résultats 30 jours
          </h2>
          <p className="text-white/45 text-lg leading-relaxed">
            Si vous n&apos;obtenez{" "}
            <span className="text-emerald-400 font-medium">
              aucun rendez-vous qualifié
            </span>{" "}
            dans les 30 premiers jours suivant le lancement de votre campagne,
            nous vous remboursons intégralement. Pas de question posée.
          </p>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-white px-6" id="faq">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold mb-14 text-center"
          >
            Questions fréquentes
          </motion.h2>

          <div className="divide-y divide-zinc-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-6 py-5 text-left group"
                >
                  <span className="font-medium text-[0.95rem] group-hover:text-zinc-600 transition-colors">
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      "w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-300",
                      openFaq === i && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openFaq === i ? "max-h-96 pb-5" : "max-h-0"
                  )}
                >
                  <p className="text-zinc-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-zinc-950 px-6 text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-lg mx-auto"
        >
          <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-bold mb-4 tracking-tight">
            Prêt à avoir un pipeline prévisible ?
          </h2>
          <p className="text-white/40 text-lg mb-10 leading-relaxed">
            Réservez un appel de 30 minutes. On regarde ensemble si Cadencia est
            fait pour vous — sans engagement.
          </p>
          <ButtonColorful
            label="Réserver mon appel gratuit →"
            href={CALENDLY}
            target="_blank"
            className="text-base"
          />
          <p className="mt-5 text-xs text-white/20">
            Disponible sous 48h · Appel 100% gratuit et sans engagement
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-zinc-950 border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/25 text-xs tracking-[0.15em] uppercase">
          Cadencia — Prospection B2B pour recruteurs indépendants
        </p>
        <p className="text-white/15 text-xs mt-2">contact@getcadencia.fr</p>
      </footer>
    </div>
  );
}
