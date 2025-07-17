# NoPoint - The Pointless Language

<div align="center">
   <img src="./DOCS/nopoint-docs/public/DOCS/imgs/NoPoint.png" alt="NoPoint Logo" width="400">
</div>

Live docs: https://no-point-git-master-mnts-projects.vercel.app/docs

Have you ever had your pinky hurt from tapping and untapping shift to get symbols for your code? Now, worry no longer (mostly)! With this new language, all you need to do is tap CAPS once, type out your operators/punctuation, and never (not really) type a semicolon again with the keyword END!

Important: For your code to run correctly, it must be saved in a file named main.nopoint.

Here's some code to bless your eyes of the amazing new future of NoPoint, an esolang that will revolutionize the coding scene!

```
devtools OFF
savetext OFF

function main SEMICOLON
    integer x EQUALS 5 END
    double y EQUALS 3.14 END
    string z EQUALS QUOTE Hello, World! QUOTE END

    PRINT x END
    PRINT y END
    PRINT z END

    PRINT QUOTE Hello, World! (PART 2) QUOTE END

main SEMICOLON

SPACE

COMMENT This is a comment, it does nothing END

function printsomething SEMICOLON
    string something EQUALSQUOTE This is a THING!QUOTE END
    PRINT something END
    COMMENT This is a comment, it does nothing END
printsomething SEMICOLON
```
This is the output from the above example code!

```
5
3.14
Hello, World!
Hello, World! (PART 2)
This is a THING!
```


## How to Use NoPoint

NoPoint is a quirky, CAPS-obsessed language that trades traditional syntax for verbosity with flair:

1. **Caps Lock for Operators**
   Forget symbols, use full words! Write `EQUALS` instead of `=`, and `SEMICOLON` instead of `;`.

2. **No More Semicolons**
   Wrap up statements with `END` and you'll never be confused where your line ends!

3. **String Handling with QUOTE**
   Say goodbye to quotes and hello to `QUOTE` … literally. Wrap your strings like `QUOTE Hello QUOTE`.

4. **Functions with Flair**
   Declare functions with `function name SEMICOLON`.

5. **Dev Settings**
   Customize your environment using keywords like `devtools OFF` and `savetext ON`.

6. **Comments, the NoPoint Way**
   Comments are super simple to use: `COMMENT your message here END`.

   <!-- ## TODO List for NoPoint

   - [ ] Add support for conditional statements (e.g., `IF`, `ELSE`, etc).
   - [ ] Implement loops (e.g., `WHILE`, `FOR`, `ENDLOOP`).
   - [X] Add BOOLEAN type
   - [ ] Write a comprehensive user guide with examples.
   - [ ] Add error handling and debugging tools.
   - [ ] Add a playground on the docs webpage.
   - [X] Add built in constants (e.g., PI, EULER)
   - [ ] Add more environment tools (a gui showing a searchable srollable / travelable variable trees and function trees?!?!!?)
 -->
