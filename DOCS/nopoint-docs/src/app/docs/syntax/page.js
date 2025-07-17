/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function SyntaxPage() {
  return (
    <>
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

      <div className="flex min-h-screen bg-purple-100 text-purple-900 font-sans">
        {/* Sidebar Navbar */}
        <Navbar />

        {/* Main Content (spacing removed) */}
        <main className="flex-1 py-10 px-0 overflow-y-auto">
          <div className="max-w-full mx-auto px-10">
            <h2 id="basics" className="text-3xl font-bold mb-6">
              NoPoint Esolang Syntax Documentation
            </h2>

            <section id="variables" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">1. Variable Declarations</h3>
              <p className="mb-2 font-semibold">Integer/Double:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`integer varname EQUALS <expression> END
double varname EQUALS <expression> END`}
              </pre>
              <p className="mb-2">
                <code>{`<expression>`}</code> can be a number, math operation, or a special calculation (see below).
              </p>
              <p className="mb-4">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`integer x EQUALS 5 END
double y EQUALS x PLUS 3 END`}
              </pre>

              <p className="mb-2 font-semibold">String:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`string varname QUOTE <text> QUOTE`}
              </pre>
              <p className="mb-4">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`string greeting QUOTE Hello World QUOTE`}
              </pre>
            </section>

            <section id="constants" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">2. Constants</h3>
              <p>
                Predefined constants:
                <br />
                <code>
                  PI, EULER, TAU, INFINITY, NEGATIVEINFINITY, SQRT2, SQRT3, DEGREESTORADIANS, NOTANUMBER, TRUE, FALSE
                </code>
              </p>
            </section>

            <section id="calculations" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">3. Volume and Area Calculations</h3>

              <p className="mb-2 font-semibold">Volume:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`VOLUME <shape> <arg1> <arg2> <arg3> <unit>`}
              </pre>
              <p className="mb-2">Shapes: <code>CUBE, SPHERE, CYLINDER, PYRAMID</code></p>
              <p className="mb-4">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`integer v EQUALS VOLUME CUBE 2 2 2 METERS END`}
              </pre>

              <p className="mb-2 font-semibold">Area:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`AREA <shape> <arg1> <arg2> <unit>`}
              </pre>
              <p className="mb-2">Shapes: <code>RECTANGLE, SQUARE, TRIANGLE, CIRCLE, TRAPEZOID</code></p>
              <p className="mb-4">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`double a EQUALS AREA RECTANGLE 3 4 METERS END`}
              </pre>
            </section>

            <section id="functions" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">4. Functions</h3>

              <p className="mb-2 font-semibold">Definition:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`function <name>
    <body lines, indented>
<name> SEMICOLON`}
              </pre>
              <p className="mb-4">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`function main
    integer x EQUALS 5 END
    PRINT x END
main SEMICOLON`}
              </pre>

              <p className="mb-2 font-semibold">Calling a function:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`<name> SEMICOLON`}
              </pre>
            </section>

            <section id="printing" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">5. Printing</h3>

              <p className="mb-2 font-semibold">Print string:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`PRINT QUOTE <text> QUOTE`}
              </pre>

              <p className="mb-2 font-semibold">Print variable:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`PRINT <varname> END`}
              </pre>

              <p className="mb-2 font-semibold">Print calculation:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`PRINT VOLUME <shape> <args> <unit> END
PRINT AREA <shape> <args> <unit> END`}
              </pre>

              <p className="mb-2 font-semibold">Print expression:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`PRINT <expression> END`}
              </pre>
            </section>

            <section id="boolean" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">6. Boolean Checks</h3>

              <p className="mb-2 font-semibold">Does:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`DOES <left> <operator> <right> END`}
              </pre>

              <p>Operators: <code>EQUALS, NOTEQUALS, GREATER, LESS</code></p>
              <p>Returns: <code>TRUE</code> (1) or <code>FALSE</code> (0)</p>
              <p className="mt-2">Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`DOES x GREATER 5 END`}
              </pre>
            </section>

            <section id="math" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">7. Math Expressions</h3>

              <p>Supported operators in expressions:</p>
              <ul className="list-disc list-inside mb-4">
                <li>PLUS</li>
                <li>SUBTRACT</li>
                <li>MULTIPLY</li>
                <li>DIVIDE</li>
                <li>POWER</li>
                <li>MOD</li>
                <li>SQRT</li>
              </ul>

              <p>Example:</p>
              <pre className="bg-purple-800 text-white p-4 rounded mb-6 overflow-x-auto">
{`integer z EQUALS x MULTIPLY 2 END`}
              </pre>
            </section>

            <section id="misc" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">8. Miscellaneous</h3>
              <ul className="list-disc list-inside">
                <li><strong>SPACE:</strong> Prints a blank line.</li>
                <li><strong>COMMENT:</strong> No operation (ignored).</li>
                <li><strong>SEMICOLON:</strong> Used to mark the end of a function or to call a function.</li>
              </ul>
            </section>

            <section id="units" className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">9. Units</h3>
              <p>
                Supported units for area/volume:{" "}
                <code>MILLIMETERS, CENTIMETERS, METERS, INCHES, FEET</code>
              </p>
              <p>Units are suffixed with their exponent (e.g., <code>m^2</code> for area, <code>m^3</code> for volume).</p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
