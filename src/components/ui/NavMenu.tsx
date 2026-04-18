import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  type Item = { title: string; href: string; description: string; external?: boolean };
  type Menu = { name: string; href?: string; items?: Item[] };

  const menuItems: Menu[] = [
    {
      name: "Dedicated",
      href: "/dedicated",
      items: [
        {
          title: "Dedicated Servers",
          href: "/dedicated",
          description: "Purpose-built HPC & EVC bare-metal platforms in Dallas and New York.",
        },
        {
          title: "HPC Series",
          href: "/dedicated#hpc",
          description: "AMD Ryzen 9000-series single-socket performance for demanding workloads.",
        },
        {
          title: "EVC Series",
          href: "/dedicated#evc",
          description: "Dual-socket Intel Xeon for enterprise virtualization and memory-heavy apps.",
        },
        {
          title: "Custom Builds",
          href: "/hardware",
          description: "Need something specific? We'll spec, procure, and deploy it for you.",
        },
      ],
    },
    {
      name: "Colocation",
      href: "/colocation",
      items: [
        {
          title: "Instant Quote",
          href: "/colocation#quote",
          description: "Configure 1U–42U and get transparent pricing in real time.",
        },
        {
          title: "Half Rack",
          href: "/colocation",
          description: "21U, 2.5kW, 1Gbps — ideal for growing deployments.",
        },
        {
          title: "Full Rack",
          href: "/colocation",
          description: "42U, 6kW, 1Gbps — full-cabinet solutions with room to expand.",
        },
        {
          title: "Remote Hands",
          href: "/colocation",
          description: "24/7 on-site technicians for installation, swaps, and troubleshooting.",
        },
      ],
    },
    {
      name: "Hardware Solutions",
      href: "/hardware",
      items: [
        {
          title: "Rack Servers",
          href: "/hardware",
          description: "1U–4U enterprise rack-mounted servers with flexible configurations.",
        },
        {
          title: "Blade Systems",
          href: "/hardware",
          description: "High-density blade chassis for compute-intensive environments.",
        },
        {
          title: "Storage Arrays",
          href: "/hardware",
          description: "All-flash, hybrid, and high-capacity storage solutions.",
        },
        {
          title: "Procurement & Lifecycle",
          href: "/hardware",
          description: "Sourcing, assembly, testing, delivery, and installation — end to end.",
        },
      ],
    },
    {
      name: "IP Transit",
      href: "/ip-transit",
      items: [
        {
          title: "Clean Transit",
          href: "/ip-transit",
          description: "$100/Gbps 95th percentile across a carrier-diverse global backbone.",
        },
        {
          title: "DDoS Protected",
          href: "/ip-transit",
          description: "$160/Gbps always-on L3–L7 mitigation with no minimum commit.",
        },
        {
          title: "Mixed Transit",
          href: "/ip-transit",
          description: "Combine clean and protected bandwidth on the same port.",
        },
        {
          title: "Port Options",
          href: "/ip-transit",
          description: "10GE, 40GE, and 100GE single or dual-port configurations.",
        },
      ],
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
  ];

  return (
    <nav className="relative z-50" ref={menuRef}>
      <ul className="flex items-center space-x-1">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            {item.items ? (
              <button
                onClick={() => toggleMenu(item.name)}
                className={cn(
                  "relative inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors",
                  "text-white/80 hover:text-white focus:outline-none",
                  activeMenu === item.name && "text-white"
                )}
                aria-expanded={activeMenu === item.name}
                aria-haspopup="true"
              >
                {item.name}
                <ChevronDown
                  className={cn(
                    "relative top-[1px] ml-1 h-3 w-3 transition duration-300",
                    activeMenu === item.name && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <a
                href={item.href}
                className="relative inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none"
              >
                {item.name}
              </a>
            )}

            {activeMenu === item.name && item.items && (
              <>
                <div className="absolute bottom-[-1.125rem] left-0 right-0 h-[2px] bg-primary-500 transition-all duration-300" />
                <div className="fixed left-0 right-0 w-screen top-[4.5rem] z-50">
                  <div className="w-full bg-black border-y border-white/10 shadow-2xl py-8 overflow-hidden">
                    <div className="container mx-auto px-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {item.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="group p-5 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all duration-200"
                          >
                            <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary-300 transition-colors">
                              {sub.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">{sub.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
