/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "../../components/Navbar";

export default function DocsHomePage() {
  const [code, setCode] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleRun(e) {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("put render link here", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const text = await res.text();
      setOutput(text);
    } catch (err) {
      setOutput("Error running code. Please try again.");
    }
    setLoading(false);
  }

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
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 py-10 px-0 overflow-y-auto">
          <div className="max-w-full mx-auto px-10">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-sm">
                Welcome to the documentation for NoPoint.
              </p>
              <p className="text-sm mt-4">
                Have you ever had your pinky hurt from tapping and untapping
                shift to get symbols for your code? Now, worry no longer
                (mostly)! With this new language, all you need to do is tap CAPS
                once, type out your operators/punctuation, and never (not
                really) type a semicolon again with the keyword <code>END</code>!
              </p>
              <p className="text-sm mt-2">
                Here you will find everything there is to know and to learn about NoPoint!
              </p>
            </section>

            {/* Syntax Preview */}
            <section id="syntax" className="mb-12">
              <h2 className="text-xl font-bold mb-2">Syntax</h2>
              <p className="text-sm">
                The syntax of NoPoint is impeccable and perfect and there will be no more discussion on this point!
              </p>
              <a href="/docs/syntax">
                <button className="bg-purple-600 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition duration-300 mt-4">
                  Explore more syntax →
                </button>
              </a>
            </section>

            {/* Examples Preview */}
            <section id="examples" className="mb-12">
              <h2 className="text-xl font-bold mb-2">Examples</h2>
              <p className="text-sm mb-4">
                Here are some simple examples to get you started:
              </p>

              {/* Example 1 */}
              <div className="example mb-6">
                <h3 className="text-md font-semibold mb-1">Example 1: Print a string</h3>
                <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
{`COMMENT This prints Hello, World! END
PRINT QUOTE Hello, World! QUOTE END`}
                </pre>
                <p className="text-sm mt-2">Output:</p>
                <pre className="bg-purple-900 text-white p-3 rounded text-sm mt-1">
Hello, World!
                </pre>
              </div>

              {/* Example 2 */}
              <div className="example mb-6">
                <h3 className="text-md font-semibold mb-1">Example 2: Variables and math</h3>
                <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
{`integer x EQUALS 5 END
double y EQUALS 3.5 END
PRINT x END
PRINT y END`}
                </pre>
                <p className="text-sm mt-2">Output:</p>
                <pre className="bg-purple-900 text-white p-3 rounded text-sm mt-1">
5
3.5
                </pre>
              </div>

              {/* Example 3 */}
              <div className="example mb-6">
                <h3 className="text-md font-semibold mb-1">Example 3: Using functions</h3>
                <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
{`function sayHi SEMICOLON
    PRINT QUOTE Hi there! QUOTE END
sayHi SEMICOLON`}
                </pre>
                <p className="text-sm mt-2">Output:</p>
                <pre className="bg-purple-900 text-white p-3 rounded text-sm mt-1">
Hi there!
                </pre>
              </div>

              <p className="text-sm mb-4">
                These examples demonstrate the basic syntax and functionality of NoPoint. You can create variables, define functions, and print output easily.
              </p>
              <a href="/docs/examples">
                <button className="bg-purple-600 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition duration-300">
                  Explore more examples →
                </button>
              </a>
            </section>

            {/* Playground Section */}
            <section id="playground" className="mb-12">
              <h2 className="text-xl font-bold mb-2">Playground</h2>
              <p className="text-sm mb-4">Write your NoPoint code below and run it:</p>
              <form>
                <form onSubmit={handleRun}>
                  <textarea
                    name="code"
                    id="codeInput"
                    className="w-full h-40 p-4 border rounded bg-purple-100 text-purple-900 text-sm font-mono"
                    placeholder="Write your NoPoint code here..."
                    value={code}
                    onChange={e => setCode(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                    disabled={loading}
                  >
                    {loading ? "Running..." : "Run Code"}
                  </button>
                </form>
                <pre
                  id="output"
                  className="bg-purple-900 text-white p-4 rounded text-sm mt-4 overflow-x-auto min-h-16"
                >
                  {output || "Click 'Run Code' to see output here..."}
                </pre>
            </section>
          </div>
        </main>
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center pb-6 bg-purple-100">
        <a
          href="/docs"
          className="bg-purple-600 text-white text-xl font-semibold py-4 px-8 rounded-2xl shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Learn more about NoPoint!
        </a>
      </div>
    </>
  );
}
