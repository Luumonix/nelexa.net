// Import images
import phoenixImage from '@/assets/img/iron_mountain_phoenix_az.webp';
import chicagoImage from '@/assets/img/equinix_ch3.jpg';
import miamiImage from '@/assets/img/365dc_bc1.png';
import londonImage from '@/assets/img/telehouse_london.jpg';

export interface Region {
  name: string;
  slug: string;
  facility: string;
  hero: {
    image: string;
  };
  infrastructure: {
    tier: string;
    sqft: string;
    power: string;
    security: string[];
    certifications: string[];
  };
}

export const regions: Record<string, Region> = {
  phoenix: {
    name: 'Phoenix, AZ',
    slug: 'phoenix',
    facility: 'Iron Mountain AZS-1',
    hero: {
      image: phoenixImage.src
    },
    infrastructure: {
      tier: 'Tier 3+',
      sqft: '121,000',
      power: '5.8MW capacity',
      security: [
        '24/7 on-site security',
        'Biometric access control',
        'CCTV surveillance',
        'Mantrap entry systems'
      ],
      certifications: [
        'NIST 800-53',
        'FISMA HIGH',
        'FedRAMP',
        'CMMC',
        'SOC 1 Type II',
        'PCI-DSS',
        'HIPAA',
        'HITRUST',
        'ISO 9001',
        'ISO 27001',
        'ISO 50001',
        'ISO 14001',
        'ISO 22301'
      ]
    }
  },
  chicago: {
    name: 'Chicago, IL',
    slug: 'chicago',
    facility: 'Equinix CH3',
    hero: {
      image: chicagoImage.src
    },
    infrastructure: {
      tier: 'Tier 3+',
      sqft: '445,000',
      power: '42MW critical load',
      security: [
        '24/7 security personnel',
        'Multi-factor authentication',
        'Vehicle inspection',
        'Perimeter fencing'
      ],
      certifications: ['SOC 2 Type II', 'ISO 27001', 'PCI-DSS', 'SSAE 18']
    }
  },
  miami: {
    name: 'Miami, FL',
    slug: 'miami',
    facility: '365 Datacenters BC1',
    hero: {
      image: miamiImage.src
    },
    infrastructure: {
      tier: 'Tier 3+',
      sqft: '49,850',
      power: '1200A / 480V critical load',
      security: [
        '24/7 armed security',
        'Biometric scanners',
        'Vehicle barriers',
        'Hurricane-rated structure'
      ],
      certifications: ['SOC 2 Type II', 'ISO 27001', 'PCI-DSS', 'HIPAA']
    }
  },
  london: {
    name: 'London, UK',
    slug: 'london',
    facility: 'Telehouse North',
    hero: {
      image: londonImage.src
    },
    infrastructure: {
      tier: 'Tier 3+',
      sqft: '435,000',
      power: '40MW critical load',
      security: [
        '24/7 security team',
        'Anti-tailgating systems',
        'CCTV with analytics',
        'Secure loading bays'
      ],
      certifications: ['ISO 27001', 'ISO 9001', 'PCI-DSS', 'SOC 2', 'GDPR Compliant']
    }
  }
};

export function getRegionBySlug(slug: string): Region | undefined {
  return regions[slug];
}

export function getAllRegions(): Region[] {
  return Object.values(regions);
}
