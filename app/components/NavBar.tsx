'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/where-we-work', label: 'Where we work' },
  { href: '/institutional', label: 'Institutionalization' }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="header-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ fontWeight: 900, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="globe">
            🌐
          </span>
          <span>AWO Solutions</span>
        </div>
      </div>
      <nav className="nav">
        {routes.map((route) => (
          <Link key={route.href} href={route.href} className={pathname === route.href ? 'active' : ''}>
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
