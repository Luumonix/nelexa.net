import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const menuItems = [
    {
      name: "Solutions",
      content: (
        <div className="w-full bg-black border-y border-white/10 shadow-2xl py-8 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 flex justify-evenly items-start gap-8">
            <a href="/solutions/ddos-protection" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">DDoS Protection</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Advanced L4-L7 DDoS protection with always-on mitigation alongside 17+ Tbps of edge capacity.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/solutions/virtual-machines" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Virtual Machines</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Scalable cloud VMs with high performance and flexible configurations for any workload.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/solutions/dedicated-metal" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Dedicated Servers</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Bare metal servers with enterprise-grade hardware for maximum performance and complete control.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/solutions/colocation" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Colocation</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Secure datacenter space with redundant power, cooling, and connectivity for your hardware.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      name: "Services",
      content: (
        <div className="w-full bg-black border-y border-white/10 shadow-2xl py-8 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 flex justify-evenly items-start gap-8">
            <a href="/managed-services" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Managed IT</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Complete IT management and support for your day-to-day business operations.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/services/cloud-management" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Cloud Management</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Expert cloud platform optimization, administration, and cost repatriation services.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/services/security-services" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Security Services</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Comprehensive cybersecurity solutions, compliance management, and threat protection services.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/services/monitoring-support" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Monitoring & Support</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                24/7 system monitoring, proactive maintenance, and expert technical support for your infrastructure.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      name: "Regions",
      content: (
        <div className="w-full bg-black border-y border-white/10 shadow-2xl py-8 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 flex justify-evenly items-start gap-8">
            <a href="/regions/phoenix" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Phoenix, AZ</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Our primary hub with low-latency connections to the West Coast and robust disaster recovery options.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/regions/chicago" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Chicago, IL</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Central location with low-latency connections nationwide and comprehensive DR solutions.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/regions/miami" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Miami, FL</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Gateway to Latin America with international connectivity & hurricane-resistant infrastructure.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/regions/london" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">London, UK</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Western European presence with GDPR compliance with low-latency connectivity to mainland Europe.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      ),
    },
    {
      name: "Resources",
      content: (
        <div className="w-full bg-black border-y border-white/10 shadow-2xl py-8 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-16 xl:px-24 flex justify-evenly items-start gap-8">
            <a href="/#about" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">About Us</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Learn about our mission, team, and commitment to excellence.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="/blog" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Blog</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Industry insights, updates, and technical guides.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="https://lg.chargeditsolutions.com" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Looking Glass</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Network diagnostics and connectivity testing tools.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="https://status.chargeditsolutions.com" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-xs p-4 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
              <h3 className="text-white font-semibold text-base mb-2">Status Page</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Real-time service status and incident updates.
              </p>
              <div className="flex items-center text-white/70 group-hover:text-white transition-colors duration-200">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <nav className="relative z-50" ref={menuRef}>
      <ul className="flex items-center space-x-2">
        {menuItems.map((item) => (
          <li key={item.name} className="relative">
            <button
              onClick={() => toggleMenu(item.name)}
              className={cn(
                "relative inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors",
                "text-white/90 hover:text-white focus:outline-none",
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
            
            {/* Dropdown Content */}
            {activeMenu === item.name && (
              <>
                {/* Active indicator bar on navbar border */}
                <div className="absolute bottom-[-1.125rem] left-0 right-0 h-[2px] bg-secondary transition-all duration-300" />
                <div className="fixed left-0 right-0 w-screen top-[4.5rem] z-50">
                  {item.content}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
