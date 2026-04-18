// Sitemap configuration for enhanced SEO
export const sitemapConfig = {
  // Page-specific metadata
  pageMetadata: {
    '/': {
      title: 'Charged IT Solutions - VPS Hosting, Dedicated Servers & Colocation',
      description: 'Affordable VPS hosting starting at $5/mo. Enterprise cloud infrastructure, dedicated servers, colocation, and DDoS protection in Phoenix, Miami, Chicago & London datacenters.',
      keywords: 'VPS hosting, cheap VPS, dedicated servers, colocation, DDoS protection, Phoenix datacenter, homelab VPS, developer VPS, small business hosting',
      priority: 1.0,
      changefreq: 'daily'
    },
    '/solutions/colocation': {
      title: 'Colocation Services - Phoenix Datacenter Starting at $70/mo',
      description: 'Premium colocation services in Phoenix with redundant power, cooling, and network connectivity. 24/7 support included.',
      keywords: 'Phoenix colocation, datacenter colocation, server hosting, rack space',
      priority: 0.9,
      changefreq: 'weekly'
    },
    '/solutions/ddos-protection': {
      title: 'DDoS Protection - Enterprise-Grade Network Security',
      description: 'Advanced DDoS protection with global scrubbing centers, real-time threat detection, and 24/7 monitoring.',
      keywords: 'DDoS protection, network security, cyber security, threat mitigation',
      priority: 0.9,
      changefreq: 'weekly'
    },
    '/solutions/dedicated-metal': {
      title: 'Dedicated Servers - High-Performance Bare Metal Solutions',
      description: 'Enterprise-grade dedicated servers with customizable configurations, full root access, and 24/7 support.',
      keywords: 'dedicated servers, bare metal servers, server hosting, dedicated hosting',
      priority: 0.9,
      changefreq: 'weekly'
    },
    '/block-storage': {
      title: 'Block Storage - Scalable Cloud Storage Solutions',
      description: 'High-performance block storage with SSD and NVMe options. Scalable, redundant, and fully managed.',
      keywords: 'block storage, cloud storage, SSD storage, NVMe storage',
      priority: 0.9,
      changefreq: 'weekly'
    },
    '/managed-services': {
      title: 'Managed IT Services - Expert Infrastructure Management',
      description: 'Comprehensive managed services including monitoring, maintenance, security, and 24/7 technical support.',
      keywords: 'managed IT services, infrastructure management, IT support, managed hosting',
      priority: 0.9,
      changefreq: 'weekly'
    },
    '/regions/phoenix': {
      title: 'Phoenix Datacenter - Premium Colocation & Cloud Services',
      description: 'State-of-the-art datacenter facility in Phoenix, Arizona with tier 3+ infrastructure and global connectivity.',
      keywords: 'Phoenix datacenter, Arizona colocation, Phoenix cloud services',
      priority: 0.8,
      changefreq: 'monthly'
    },
    '/regions/chicago': {
      title: 'Chicago Datacenter - Enterprise Infrastructure Solutions',
      description: 'Premium datacenter services in Chicago with low-latency connectivity to major markets.',
      keywords: 'Chicago datacenter, Illinois colocation, Chicago cloud services',
      priority: 0.8,
      changefreq: 'monthly'
    },
    '/regions/miami': {
      title: 'Miami Datacenter - Gateway to Latin America',
      description: 'Strategic datacenter location in Miami with excellent connectivity to Latin America and the Caribbean.',
      keywords: 'Miami datacenter, Florida colocation, Latin America connectivity',
      priority: 0.8,
      changefreq: 'monthly'
    },
    '/regions/london': {
      title: 'London Datacenter - European Cloud Infrastructure',
      description: 'Enterprise datacenter services in London with premium connectivity across Europe.',
      keywords: 'London datacenter, UK colocation, European cloud services',
      priority: 0.8,
      changefreq: 'monthly'
    },
    '/for-developers': {
      title: 'VPS Hosting for Developers - Developer-Friendly Cloud Infrastructure',
      description: 'Developer-focused VPS hosting with full root access, API integration, and pre-installed dev tools. Deploy Node.js, Python, Ruby, Go apps instantly.',
      keywords: 'developer VPS, VPS for developers, developer hosting, cloud hosting for developers',
      priority: 0.8,
      changefreq: 'weekly'
    },
    '/for-homelabbers': {
      title: 'Homelab Hosting - VPS & Colocation for Homelab Enthusiasts',
      description: 'Professional hosting for homelabbers. Affordable VPS and colocation perfect for Proxmox, pfSense, TrueNAS, Docker, and more.',
      keywords: 'homelab hosting, homelab VPS, homelab colocation, homelab server hosting',
      priority: 0.8,
      changefreq: 'weekly'
    },
    '/for-small-business': {
      title: 'Small Business Hosting - Managed IT Solutions',
      description: 'Enterprise-grade hosting for small businesses. Managed VPS, dedicated servers, DDoS protection, and 24/7 support.',
      keywords: 'small business hosting, SMB hosting, business VPS, managed hosting small business',
      priority: 0.8,
      changefreq: 'weekly'
    },
    '/solutions/virtual-machines': {
      title: 'VPS Hosting - Affordable Virtual Machines',
      description: 'High-performance VPS hosting for developers and businesses. Linux & Windows VPS with SSD storage and DDoS protection.',
      keywords: 'VPS hosting, virtual private server, cloud VPS, Linux VPS, Windows VPS',
      priority: 0.9,
      changefreq: 'weekly'
    }
  },
  
  // Image sitemap entries (for better image SEO)
  images: [
    {
      loc: '/img/365dc_bc1.png',
      title: '365 Data Centers Phoenix Facility',
      caption: 'Our primary datacenter facility in Phoenix, Arizona'
    },
    {
      loc: '/img/equinix_ch3.jpg',
      title: 'Equinix Chicago CH3 Datacenter',
      caption: 'Premium colocation space at Equinix Chicago'
    },
    {
      loc: '/img/equinix_ch4.jpg',
      title: 'Equinix Chicago CH4 Datacenter',
      caption: 'Additional capacity at Equinix Chicago CH4'
    },
    {
      loc: '/img/telehouse_london.jpg',
      title: 'Telehouse London Datacenter',
      caption: 'European presence at Telehouse London'
    },
    {
      loc: '/img/miami_florida.jpg',
      title: 'Miami Datacenter Facility',
      caption: 'Strategic location in Miami for Latin American connectivity'
    }
  ],
  
  // Additional sitemap options
  options: {
    // Exclude patterns (pages that shouldn't be in sitemap)
    exclude: [
      '/api/*',
      '/admin/*',
      '/_*',
      '/404',
      '/500'
    ],
    
    // Custom namespace for additional features
    xmlns: {
      news: false,
      xhtml: true,
      image: true,
      video: false
    }
  }
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string) {
  return (sitemapConfig.pageMetadata as Record<string, any>)[pathname] || {};
}

// Helper function to check if a URL should be excluded
export function shouldExclude(url: string): boolean {
  return sitemapConfig.options.exclude.some(pattern => {
    if (pattern.endsWith('*')) {
      return url.startsWith(pattern.slice(0, -1));
    }
    return url === pattern;
  });
}
