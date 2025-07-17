"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function ReferencePage() {
  return (
    <>
      {/* Header */}
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <img
            src="/DOCS/imgs/NoPoint.png"
            alt="NoPoint Logo"
            className="h-10 w-10 mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">NoPoint Documentation</h1>
            <p className="text-sm">
              A Python esolang with <strong>no point!</strong>
            </p>
          </div>
        </div>
      </header>

      {/* Page Layout */}
      <div className="flex min-h-screen bg-purple-100 text-purple-900 font-sans">
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-0 py-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Reference</h2>
            <p className="mb-8 text-sm">
              This reference covers all built-in features, keywords, operators,
              constants, and functions available in the NoPoint esolang.
            </p>

            {/* Keywords */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Keywords</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>integer</code>, <code>double</code>, <code>string</code> — Variable types</li>
                <li><code>EQUALS</code> — Assignment operator</li>
                <li><code>END</code> — Statement terminator</li>
                <li><code>QUOTE</code> — String delimiter</li>
                <li><code>function</code> — Function definition</li>
                <li><code>SEMICOLON</code> — Function end/call</li>
                <li><code>PRINT</code> — Output command</li>
                <li><code>DOES</code> — Boolean check</li>
                <li><code>SPACE</code> — Print blank line</li>
                <li><code>COMMENT</code> — No operation (ignored)</li>
              </ul>
            </section>

            {/* Constants */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Constants</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 text-sm">
                <div>PI — 3.141592653589793</div>
                <div>EULER — 2.718281828459045</div>
                <div>TAU — 6.283185307179586</div>
                <div>INFINITY — ∞</div>
                <div>NEGATIVEINFINITY — -∞</div>
                <div>SQRT2 — 1.4142135623730951</div>
                <div>SQRT3 — 1.7320508075688772</div>
                <div>DEGREESTORADIANS — 0.017453292519943295</div>
                <div>NOTANUMBER — NaN</div>
                <div>TRUE — 1</div>
                <div>FALSE — 0</div>
              </div>
            </section>

            {/* Math Operators */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Math Operators</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>PLUS</code>, <code>SUBTRACT</code>, <code>MULTIPLY</code>, <code>DIVIDE</code></li>
                <li><code>POWER</code>, <code>MOD</code>, <code>SQRT</code></li>
              </ul>
            </section>

            {/* Boolean Operators */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Boolean Operators</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>EQUALS</code>, <code>NOTEQUALS</code></li>
                <li><code>GREATER</code>, <code>LESS</code></li>
              </ul>
            </section>

            {/* Volume Formulas */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Volume Formulas</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>VOLUME CUBE a b c &lt;unit&gt;</code> — a × b × c</li>
                <li><code>VOLUME SPHERE r &lt;unit&gt;</code> — (4/3) × π × r³</li>
                <li><code>VOLUME CYLINDER r h &lt;unit&gt;</code> — π × r² × h</li>
                <li><code>VOLUME PYRAMID b h d &lt;unit&gt;</code> — (1/3) × b × h × d</li>
              </ul>
            </section>

            {/* Area Formulas */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Area Formulas</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>AREA RECTANGLE a b &lt;unit&gt;</code> — a × b</li>
                <li><code>AREA SQUARE a &lt;unit&gt;</code> — a²</li>
                <li><code>AREA TRIANGLE b h &lt;unit&gt;</code> — 0.5 × b × h</li>
                <li><code>AREA CIRCLE r &lt;unit&gt;</code> — π × r²</li>
                <li><code>AREA TRAPEZOID a b h &lt;unit&gt;</code> — 0.5 × (a + b) × h</li>
              </ul>
            </section>

            {/* Units */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Units</h3>
              <ul className="list-disc list-inside text-sm">
                <li>MILLIMETERS / MILIMETERS — mm</li>
                <li>CENTIMETERS — cm</li>
                <li>METERS — m</li>
                <li>INCHES — in</li>
                <li>FEET — ft</li>
              </ul>
              <p className="text-sm mt-2">
                Area units use <code>^2</code>, volume units use <code>^3</code> (e.g., <code>m^2</code>, <code>cm^3</code>).
              </p>
            </section>

            {/* Functions */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Functions</h3>
              <p className="text-sm mb-2">Define with:</p>
              <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto mb-2">
{`function sayHi
    PRINT QUOTE Hi! QUOTE END
sayHi SEMICOLON`}
              </pre>
              <p className="text-sm">Call with:</p>
              <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
{`sayHi SEMICOLON`}
              </pre>
            </section>

            {/* Print Statements */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Print Statements</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>PRINT QUOTE &lt;text&gt; QUOTE END</code></li>
                <li><code>PRINT &lt;varname&gt; END</code></li>
                <li><code>PRINT VOLUME ... END</code>, <code>PRINT AREA ... END</code></li>
                <li><code>PRINT &lt;expression&gt; END</code></li>
              </ul>
            </section>

            {/* Boolean Checks */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Boolean Checks</h3>
              <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
{`DOES x LESS y END`}
              </pre>
              <p className="text-sm mt-1">Returns <code>TRUE</code> (1) or <code>FALSE</code> (0).</p>
            </section>

            {/* Miscellaneous */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Miscellaneous</h3>
              <ul className="list-disc list-inside text-sm">
                <li><code>SPACE</code> — Prints a blank line</li>
                <li><code>COMMENT ... END</code> — Ignored by interpreter</li>
              </ul>
            </section>

            {/* Example */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Example Reference Usage</h3>
              <pre className="bg-purple-900 text-white p-4 rounded text-sm overflow-x-auto">
{`integer x EQUALS 5 END
integer y EQUALS 10 END
PRINT x PLUS y END
DOES x LESS y END
PRINT VOLUME SPHERE 3 METERS END`}
              </pre>
            </section>

            <Link
              href="/docs/examples"
              className="inline-block text-purple-700 hover:underline text-sm mt-4"
            >
              ← Back to Examples
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
