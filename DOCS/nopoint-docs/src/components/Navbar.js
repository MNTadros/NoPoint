"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <aside className="bg-purple-200 w-56 p-6 overflow-y-auto font-sans text-purple-900">
      <nav>
        <h2 className="text-lg font-bold mb-4">Contents</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <Link
              href="/docs"
              className={
                isActive("/docs")
                  ? "text-purple-900 font-bold hover:underline"
                  : "text-purple-600 hover:underline"
              }
              prefetch={true}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              href="/docs/syntax"
              className={
                isActive("/docs/syntax")
                  ? "text-purple-900 font-bold hover:underline"
                  : "text-purple-600 hover:underline"
              }
            >
              Syntax
            </Link>
          </li>
          <li>
            <Link
              href="/docs/examples"
              className={
                isActive("/docs/examples")
                  ? "text-purple-900 font-bold hover:underline"
                  : "text-purple-600 hover:underline"
              }
            >
              Examples
            </Link>
          </li>
          <li>
            <Link
              href="/docs/reference"
              className={
                isActive("/docs/reference")
                  ? "text-purple-900 font-bold hover:underline"
                  : "text-purple-600 hover:underline"
              }
            >
              Reference
            </Link>
          </li>
          <li>
            <a href="/docs" className="text-purple-600 hover:underline">
              Playground
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
