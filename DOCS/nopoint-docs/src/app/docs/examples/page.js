"use client";

import Navbar from "../../../components/Navbar";

export default function ExamplesPage() {
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

      {/* Main layout */}
      <div className="flex min-h-screen bg-purple-100 text-purple-900 font-sans">
        <Navbar />

        <main className="flex-1 py-10 px-0 overflow-y-auto">
          <div className="max-w-full mx-auto px-10">
            <h2 className="text-3xl font-bold mb-6">NoPoint Esolang Example Programs</h2>
            <p className="mb-6">
              This section provides example programs for the NoPoint esolang, demonstrating its syntax and features. Each example is annotated for clarity and includes additional cases beyond the reference file.
            </p>

            <hr className="my-6 border-purple-400" />

            {[
              {
                title: "1. Basic Program Structure",
                code: `function main SEMICOLON
    integer a EQUALS 2 END
    integer b EQUALS 3 END
    double pi EQUALS 3.14 END
    string msg EQUALS QUOTE Starting program... QUOTE END

    PRINT msg END
    PRINT a PLUS b END
    PRINT pi END

    callMath SEMICOLON
    callString SEMICOLON
    callNested SEMICOLON
    SPACE
main SEMICOLON`,
              },
              {
                title: "2. Math Operations",
                code: `function callMath SEMICOLON
    integer x EQUALS 10 END
    integer y EQUALS 4 END
    string msg EQUALS QUOTE This is a math test! QUOTE END

    PRINT x SUBTRACT y END
    PRINT x MULTIPLY y END
    PRINT x DIVIDE y END
    PRINT msg MULTIPLY y END
    PRINT QUOTE YOU CAN DO THAT ^ !?!?!?!??!!? QUOTE END
callMath SEMICOLON`,
                sub: `function advancedMath SEMICOLON
    double root EQUALS 16 SQRT END
    PRINT root END
    integer modTest EQUALS 10 MOD 3 END
    PRINT modTest END
advancedMath SEMICOLON`,
              },
              {
                title: "3. String Operations",
                code: `function callString SEMICOLON
    string greet EQUALS QUOTE Hello QUOTE END
    string target EQUALS QUOTE NoPoint! QUOTE END

    PRINT greet END
    PRINT target END
    SPACE
callString SEMICOLON`,
                sub: `function concatString SEMICOLON
    string part1 EQUALS QUOTE No QUOTE END
    string part2 EQUALS QUOTE Point QUOTE END
    PRINT part1 END
    PRINT part2 END
concatString SEMICOLON`,
              },
              {
                title: "4. Nested Functions",
                code: `function callNested SEMICOLON
    string intro EQUALS QUOTE Calling subfunction... QUOTE END
    PRINT intro END
    subPrint SEMICOLON
callNested SEMICOLON

function subPrint SEMICOLON
    string echo EQUALS QUOTE I am inside subPrint! QUOTE END
    PRINT echo END
subPrint SEMICOLON`,
              },
              {
                title: "5. Boolean and Comparison Operations",
                code: `function doescheck SEMICOLON
    integer a EQUALS 5 END
    integer b EQUALS 5 END
    integer c EQUALS 7 END

    PRINT QUOTE Checking if a EQUALS b: QUOTE END
    DOES a EQUALS b END

    PRINT QUOTE Checking if a EQUALS c: QUOTE END
    DOES a EQUALS c END

    PRINT QUOTE Checking if c GREATER b: QUOTE END
    DOES c GREATER b END

    double d EQUALS 10 POWER 2.2 END
    PRINT d END
doescheck SEMICOLON`,
                sub: `function compareTest SEMICOLON
    integer x EQUALS 8 END
    integer y EQUALS 3 END
    PRINT QUOTE Is x LESS y? QUOTE END
    DOES x LESS y END
compareTest SEMICOLON`,
              },
              {
                title: "6. Volume and Area Calculations",
                code: `function storeVolume SEMICOLON
    PRINT VOLUME CUBE 5 5 5 METERS END
storeVolume SEMICOLON

function storeArea SEMICOLON
    PRINT AREA RECTANGLE 5 10 METERS END
storeArea SEMICOLON`,
                sub: `function moreGeometry SEMICOLON
    PRINT VOLUME SPHERE 3 METERS END
    PRINT AREA CIRCLE 7 METERS END
moreGeometry SEMICOLON`,
              },
              {
                title: "7. Miscellaneous",
                code: `SPACE
COMMENT This is a comment END`,
              },
              {
                title: "8. Full Program Example",
                code: `function main SEMICOLON
    integer a EQUALS 2 END
    integer b EQUALS 3 END
    double pi EQUALS 3.14 END
    string msg EQUALS QUOTE Starting program... QUOTE END

    PRINT msg END
    PRINT a PLUS b END
    PRINT pi END

    callMath SEMICOLON
    callString SEMICOLON
    callNested SEMICOLON
    doescheck SEMICOLON
    storeVolume SEMICOLON
    storeArea SEMICOLON
    moreGeometry SEMICOLON
    SPACE
main SEMICOLON`,
              },
            ].map((section, i) => (
              <section key={i} className="mb-10">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
                  {section.code}
                </pre>
                {section.sub && (
                  <>
                    <h4 className="text-md font-semibold mt-4 mb-1">Additional Example</h4>
                    <pre className="bg-purple-800 text-white p-4 rounded text-sm overflow-x-auto">
                      {section.sub}
                    </pre>
                  </>
                )}
              </section>
            ))}

            <p className="text-sm mt-10">
              These examples demonstrate the main features and syntax of the NoPoint esolang. You can mix and match these constructs to build more complex programs!
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
