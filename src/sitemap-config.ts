// Sitemap configuration for enhanced SEO
export const sitemapConfig = {
  pageMetadata: {
    '/': {
      title: 'Nelexa — Enterprise Infrastructure Solutions',
      description: 'Nelexa delivers dedicated servers, colocation, hardware solutions, and IP transit from our Dallas and New York data centers.',
      keywords: 'dedicated servers, colocation, IP transit, hardware solutions, Dallas data center, New York data center, Nelexa',
      priority: 1.0,
      changefreq: 'weekly',
    },
    '/dedicated': {
      title: 'Dedicated Servers — HPC & EVC Bare Metal | Nelexa',
      description: 'HPC and EVC bare-metal dedicated servers in Dallas and New York with dual 10Gbps networking.',
      keywords: 'dedicated servers, bare metal, HPC servers, AMD Ryzen 9950X, Intel Xeon Gold 6138, Dallas, NYC',
      priority: 0.9,
      changefreq: 'weekly',
    },
    '/colocation': {
      title: 'Colocation — Dallas & New York | Nelexa',
      description: 'Carrier-neutral colocation in Dallas and New York. 1U to full-rack with instant transparent pricing.',
      keywords: 'colocation, Dallas colocation, NYC colocation, rack space, half rack, full rack',
      priority: 0.9,
      changefreq: 'weekly',
    },
    '/hardware': {
      title: 'Hardware Solutions — Procurement & Lifecycle | Nelexa',
      description: 'Custom server builds, enterprise procurement, and complete lifecycle management.',
      keywords: 'hardware procurement, rack servers, blade systems, storage arrays, network equipment, custom builds',
      priority: 0.9,
      changefreq: 'weekly',
    },
    '/ip-transit': {
      title: 'IP Transit — Clean & DDoS Protected | Nelexa',
      description: 'Carrier-diverse clean, DDoS-protected, and mixed IP transit on 10GE, 40GE, and 100GE ports.',
      keywords: 'IP transit, clean transit, DDoS protected transit, BGP, peering, 10GE, 40GE, 100GE',
      priority: 0.9,
      changefreq: 'weekly',
    },
    '/case-studies': {
      title: 'Case Studies | Nelexa',
      description: 'Real deployments, real outcomes from Nelexa customers.',
      keywords: 'Nelexa case studies, Waterfall Technologies, Lagless.gg',
      priority: 0.7,
      changefreq: 'monthly',
    },
    '/contact': {
      title: 'Contact Sales | Nelexa',
      description: 'Talk to a real engineer about your infrastructure needs.',
      keywords: 'contact Nelexa, sales, infrastructure quote',
      priority: 0.8,
      changefreq: 'monthly',
    },
    '/locations/dallas': {
      title: 'Dallas, TX Data Center | Nelexa',
      description: 'Nelexa Dallas: carrier-neutral data center in the DFW Metroplex.',
      keywords: 'Dallas data center, DFW colocation, Texas hosting',
      priority: 0.8,
      changefreq: 'monthly',
    },
    '/locations/new-york': {
      title: 'New York, NY Data Center | Nelexa',
      description: 'Nelexa New York: carrier-neutral data center in the NYC metro.',
      keywords: 'New York data center, NYC colocation, Northeast hosting',
      priority: 0.8,
      changefreq: 'monthly',
    },
  },

  images: [] as { loc: string; title: string; caption: string }[],

  options: {
    exclude: ['/api/*', '/admin/*', '/_*', '/404', '/500'],
    xmlns: {
      news: false,
      xhtml: true,
      image: true,
      video: false,
    },
  },
};

export function getPageMetadata(pathname: string) {
  return (sitemapConfig.pageMetadata as Record<string, any>)[pathname] || {};
}

export function shouldExclude(url: string): boolean {
  return sitemapConfig.options.exclude.some((pattern) => {
    if (pattern.endsWith('*')) {
      return url.startsWith(pattern.slice(0, -1));
    }
    return url === pattern;
  });
}
