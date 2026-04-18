export interface Region {
  name: string;
  slug: string;
  facility: string;
  hero: {
    image?: string;
  };
  infrastructure: {
    tier: string;
    power: string;
    security: string[];
    certifications: string[];
  };
}

export const regions: Record<string, Region> = {
  dallas: {
    name: 'Dallas, TX',
    slug: 'dallas',
    facility: 'DFW Metroplex',
    hero: {},
    infrastructure: {
      tier: 'Tier III+',
      power: 'N+1 redundant A/B feeds',
      security: [
        '24/7 on-site security',
        'Biometric access control',
        'CCTV surveillance',
        'Mantrap entry systems',
      ],
      certifications: ['SOC 2 Type II', 'ISO 27001', 'PCI-DSS', 'HIPAA'],
    },
  },
  'new-york': {
    name: 'New York, NY',
    slug: 'new-york',
    facility: 'NYC Metro',
    hero: {},
    infrastructure: {
      tier: 'Tier III+',
      power: 'N+1 redundant A/B feeds',
      security: [
        '24/7 on-site security',
        'Biometric access control',
        'CCTV surveillance',
        'Mantrap entry systems',
      ],
      certifications: ['SOC 2 Type II', 'ISO 27001', 'PCI-DSS', 'HIPAA'],
    },
  },
};

export function getRegionBySlug(slug: string): Region | undefined {
  return regions[slug];
}

export function getAllRegions(): Region[] {
  return Object.values(regions);
}
