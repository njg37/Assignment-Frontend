'use client';

import {
  Globe,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white mt-12 pt-8 pb-4 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Filters Column */}
        <div>
          <h4 className="font-semibold mb-2">Filters</h4>
          <ul className="space-y-1">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
          </ul>
        </div>

        {/* About Us Column */}
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-white mt-1">
            <Globe className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-gray-300">
        © 2024 American
      </div>
    </footer>
  );
}
