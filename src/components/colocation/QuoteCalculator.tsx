import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Preset = "custom" | "half" | "full";

// Pricing constants (editable)
const PRICE_PER_RU = 10; // $/RU/mo
const PRICE_PER_KW = 350; // $/kW/mo (implied by RU 1 + 0.2 kW => $81.5 total; base included 10/RU so power = 71.5 for 0.2 kW = $357.5/kW — round to $350)
const POWER_BASE_FEE = 1.5; // small base fee so 0.2 kW => 71.5
const PRICE_PER_GBPS_OVER_1 = 125; // $/Gbps/mo beyond included 1Gbps
const SETUP_FEE_RATE = 0.35;

function parsePower(raw: string): number {
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed) return 0;
  const num = parseFloat(trimmed);
  if (isNaN(num)) return 0;
  if (trimmed.includes("kw")) return num * 1000;
  return num; // default watts
}

function parseNetwork(raw: string): number {
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed) return 0;
  const num = parseFloat(trimmed);
  if (isNaN(num)) return 0;
  if (trimmed.includes("gbps")) return num;
  return num / 1000; // default mbps -> gbps
}

export function QuoteCalculator() {
  const [location, setLocation] = useState<"dallas" | "nyc">("dallas");
  const [preset, setPreset] = useState<Preset>("custom");
  const [ru, setRu] = useState<number>(1);
  const [powerInput, setPowerInput] = useState<string>("200");
  const [networkInput, setNetworkInput] = useState<string>("1Gbps");

  const applyPreset = (p: Preset) => {
    setPreset(p);
    if (p === "half") {
      setRu(21);
      setPowerInput("2.5kW");
      setNetworkInput("1Gbps");
    } else if (p === "full") {
      setRu(42);
      setPowerInput("6kW");
      setNetworkInput("1Gbps");
    }
  };

  const watts = useMemo(() => parsePower(powerInput), [powerInput]);
  const gbps = useMemo(() => parseNetwork(networkInput), [networkInput]);

  const ruCost = ru * PRICE_PER_RU;
  const kw = watts / 1000;
  const powerCost = watts > 0 ? kw * PRICE_PER_KW + POWER_BASE_FEE : 0;
  const overGbps = Math.max(0, gbps - 1);
  const networkCost = overGbps * PRICE_PER_GBPS_OVER_1;

  const monthly = ruCost + powerCost + networkCost;
  const setupFee = monthly * SETUP_FEE_RATE;
  const firstMonth = monthly + setupFee;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Configurator */}
      <div className="lg:col-span-3 glass-card p-6 md:p-8">
        <h3 className="text-xl font-semibold text-white mb-6">Configure your rack</h3>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-xs uppercase tracking-wider text-white/50 mb-3">Location</label>
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { id: "dallas", label: "Dallas" },
                { id: "nyc", label: "New York (NYC)" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                onClick={() => setLocation(opt.id)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium border transition-colors",
                  location === opt.id
                    ? "bg-primary-600/20 border-primary-500 text-white"
                    : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.06]"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Preset */}
        <div className="mb-6">
          <label className="block text-xs uppercase tracking-wider text-white/50 mb-3">Configuration Type</label>
          <div className="grid grid-cols-3 gap-2">
            {(
              [
                { id: "custom", label: "Custom", sub: "Build your own" },
                { id: "half", label: "Half Rack", sub: "21U · 2.5kW · 1Gbps" },
                { id: "full", label: "Full Rack", sub: "42U · 6kW · 1Gbps" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                onClick={() => applyPreset(opt.id)}
                className={cn(
                  "px-3 py-3 rounded-lg text-left border transition-colors",
                  preset === opt.id
                    ? "bg-primary-600/20 border-primary-500"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.06]"
                )}
              >
                <div className="text-sm font-semibold text-white">{opt.label}</div>
                <div className="text-[11px] text-white/50 mt-0.5">{opt.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* RU */}
        <div className="mb-6">
          <div className="flex justify-between items-end mb-3">
            <label className="text-xs uppercase tracking-wider text-white/50">Rack Units (RU)</label>
            <span className="text-sm font-mono text-primary-300">{ru}U</span>
          </div>
          <input
            type="range"
            min={1}
            max={42}
            value={ru}
            onChange={(e) => { setRu(parseInt(e.target.value)); setPreset("custom"); }}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary-500"
          />
          <div className="flex justify-between text-[10px] text-white/40 mt-1.5">
            <span>1U</span><span>21U</span><span>42U</span>
          </div>
        </div>

        {/* Power */}
        <div className="mb-6">
          <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Power (W or kW)</label>
          <input
            type="text"
            value={powerInput}
            onChange={(e) => { setPowerInput(e.target.value); setPreset("custom"); }}
            placeholder="200"
            className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:border-primary-500 focus:outline-none"
          />
          <p className="text-[11px] text-white/40 mt-1.5">Defaults to watts if no unit specified.</p>
        </div>

        {/* Network */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Network (Mbps or Gbps)</label>
          <input
            type="text"
            value={networkInput}
            onChange={(e) => { setNetworkInput(e.target.value); setPreset("custom"); }}
            placeholder="1Gbps"
            className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder:text-white/30 focus:border-primary-500 focus:outline-none"
          />
          <p className="text-[11px] text-white/40 mt-1.5">Defaults to Mbps if no unit specified. First 1Gbps included.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="lg:col-span-2">
        <div className="glass-card p-6 md:p-8 sticky top-24">
          <h3 className="text-xl font-semibold text-white mb-6">Quote Summary</h3>

          <div className="space-y-3 pb-5 border-b border-white/10">
            <Line label={`RU (${ru}U)`} value={ruCost} />
            <Line label={`Power (${kw ? kw.toFixed(2) : 0}kW)`} value={powerCost} />
            <Line label={`Network (${gbps ? gbps.toFixed(2) : 0}Gbps)`} value={networkCost} />
          </div>

          <div className="flex justify-between items-center py-5">
            <span className="text-white/70 text-sm">Monthly Total</span>
            <span className="text-2xl font-bold text-white">${monthly.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-dashed border-white/10">
            <span className="text-xs text-white/50">Setup Fee (one-time)</span>
            <span className="text-sm font-semibold text-white/80">${setupFee.toFixed(2)}</span>
          </div>

          <div className="mt-5 p-4 rounded-lg bg-primary-900/30 border border-primary-500/30">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">First Month Total</span>
              <span className="text-xl font-bold text-primary-200">${firstMonth.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-white/50 mt-1">Includes setup fee</p>
          </div>

          <a
            href={`/contact?type=colocation&location=${location}&ru=${ru}&power=${encodeURIComponent(powerInput)}&network=${encodeURIComponent(networkInput)}`}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-lg transition-colors"
          >
            Request This Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Line({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="text-white font-medium">${value.toFixed(2)}/mo</span>
    </div>
  );
}
