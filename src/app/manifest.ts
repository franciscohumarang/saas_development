import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Build With AI - AI-Powered Development for Non-Tech Founders',
    short_name: 'Build With AI',
    description: 'Transform your idea into a MicroSaaS in 4-5 weeks. Done-for-you development using AI tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 