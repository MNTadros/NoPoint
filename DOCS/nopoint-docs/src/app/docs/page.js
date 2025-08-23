"use client";

import { useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function DocsHomePage() {
  const BACKEND_URL = "https://nopoint-backend.onrender.com";

  // wake backend when docs page loads
  useEffect(() => {
    fetch(`${BACKEND_URL}/health`).catch(() => {
      console.log("Backend is sleeping, waking up...");
    });
  }, []);

  // Handler for playground form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loading = document.getElementById("loading");
    const output = document.getElementById("output");
    loading.classList.remove("hidden");
    output.textContent = "";
    const code = document.getElementById("codeInput").value;

    try {
      const res = await fetch(`${BACKEND_URL}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        if (res.status >= 500) {
          output.textContent =
            "⚠️ Backend is waking up (Render free plan). Please retry in ~30s.";
        } else {
          output.textContent = `Error: ${res.statusText}`;
        }
        return;
      }

      const data = await res.json();
      output.textContent = data.output || "No output.";
    } catch (err) {
      output.textContent =
        "⚠️ Backend is likely waking up. Please retry in ~30s.";
    }

    loading.classList.add("hidden");
  };

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
              <p className="text-sm">Welcome to the documentation for NoPoint.</p>
              <p className="text-sm mt-4">
                Have you ever had your pinky hurt from tapping and untapping
                shift to get symbols for your code? Now, worry no longer
                (mostly)! With this new language, all you need to do is tap CAPS
                once, type out your operators/punctuation, and never (not
                really) type a semicolon again with the keyword <code>END</code>!
              </p>
              <p className="text-sm mt-2">
                Here you will find everything there is to know and to learn
                about NoPoint!
              </p>
            </section>

            {/* Syntax Preview */}
            <section id="syntax" className="mb-12">
              <h2 className="text-xl font-bold mb-2">Syntax</h2>
              <p className="text-sm">
                The syntax of NoPoint is impeccable and perfect and there will
                be no more discussion on this point!
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
                Check out examples of NoPoint code in action.
              </p>
              <a href="/docs/examples">
                <button className="bg-purple-600 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition duration-300">
                  Explore examples →
                </button>
              </a>
            </section>

            {/* Playground Section */}
            <section id="playground" className="mb-12">
              <h2 className="text-xl font-bold mb-2">Playground</h2>
              <p className="text-sm mb-4">
                Write your NoPoint code below and run it:
              </p>
              <form onSubmit={handleSubmit}>
                <textarea
                  name="code"
                  id="codeInput"
                  className="w-full h-40 p-4 border rounded bg-purple-100 text-purple-900 text-sm font-mono"
                  placeholder="Write your NoPoint code here..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                >
                  Run Code
                </button>
                <span
                  id="loading"
                  className="ml-2 text-sm text-purple-600 hidden"
                >
                  Running...
                </span>
              </form>
              <pre
                id="output"
                className="bg-purple-900 text-white p-4 rounded text-sm mt-4 overflow-x-auto min-h-16"
              >
                Click "Run Code" to see output here...
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
