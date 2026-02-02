import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { SITE_CONFIG, FOOTER } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-white">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">{FOOTER.description}</p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://linkedin.com/${SITE_CONFIG.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              {FOOTER.links.product.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {FOOTER.links.company.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER.links.legal.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
