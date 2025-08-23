import math

class Interpreter:
    def __init__(self):
        # === System Constants === #
        self.constants = {
            "PI": math.pi,
            "EULER": math.e,
            "TAU": 2 * math.pi,
            "INFINITY": math.inf,
            "NEGATIVEINFINITY": -math.inf,
            "SQRT2": math.sqrt(2),
            "SQRT3": math.sqrt(3),
            "DEGREESTORADIANS": math.pi / 180,
            "NOTANUMBER": math.nan,
            "TRUE": 1,
            "FALSE": 0
        }
        # Volume formulas
        self.volume_formulas = {
            "CUBE": lambda a: a[0] * a[1] * a[2],
            "SPHERE": lambda a: (4/3) * math.pi * (a[0] ** 3),
            "CYLINDER": lambda a: math.pi * (a[0] ** 2) * a[1],
            "PYRAMID": lambda a: (1/3) * a[0] * a[1] * a[2],
        }
        # Area formulas
        self.area_formulas = {
            "RECTANGLE": lambda a: a[0] * a[1],
            "SQUARE": lambda a: a[0] ** 2,
            "TRIANGLE": lambda a: 0.5 * a[0] * a[1],
            "CIRCLE": lambda a: math.pi * a[0] ** 2,
            "TRAPEZOID": lambda a: 0.5 * (a[0] + a[1]) * a[2],
        }
        self.variables = dict(self.constants)
        self.functions = {}

    # Handle variable declarations and assignments
    def parse_types(self, line):
        parts = line.strip().split()
        if parts[0] in ["integer", "double"]:
            name = parts[1]
            if name in self.constants:
                return
            if parts[2] == "EQUALS":
                try:
                    end_index = parts.index("END")
                except ValueError:
                    end_index = len(parts)
                expr_tokens = parts[3:end_index]
                if expr_tokens[0] == "VOLUME":
                    value = self._handle_calc(expr_tokens[1:], self.volume_formulas, 3, return_numeric=True)
                elif expr_tokens[0] == "AREA":
                    value = self._handle_calc(expr_tokens[1:], self.area_formulas, 2, return_numeric=True)
                elif expr_tokens[0] == "SQRT":
                    value = math.sqrt(self.resolve_value(expr_tokens[1]))
                else:
                    value = self.evaluate_expression(expr_tokens)
                self.variables[name] = value
        elif parts[0] == "string":
            name = parts[1]
            if name in self.constants:
                return
            start = line.find("QUOTE") + len("QUOTE")
            if line[start] == " ":
                start += 1
            end = line.find("QUOTE", start)
            self.variables[name] = line[start:end]

    # Execute a named function
    def execute_function(self, fname):
        lines = self.functions.get(fname, [])
        for line in lines:
            line = line.strip()
            if line.startswith(("integer", "double", "string")):
                self.parse_types(line)
            elif line.startswith("PRINT"):
                self.handle_print(line)
            elif line.startswith("DOES"):
                self.handle_does(line)
            elif line == "SPACE":
                print()
            elif line == "COMMENT":
                pass
            elif line.endswith("SEMICOLON"):
                parts = line.split()
                if len(parts) > 1 and parts[1] == "SEMICOLON":
                    self.execute_function(parts[0])

    # Main code runner
    def run_esolang(self, code):
        lines = code.strip().split("\n")
        self.variables = dict(self.constants)
        self.functions = {}
        current_func = None
        body_lines = []
        function_definitions = set()

        # First pass: collect function definitions
        for line in lines:
            stripped = line.strip()
            if stripped.startswith("function"):
                parts = stripped.split()
                function_name = parts[1]
                function_definitions.add(function_name)
                current_func = function_name
                body_lines = []
            elif stripped.endswith("SEMICOLON") and current_func is not None:
                self.functions[current_func] = body_lines[:]
                current_func = None
            elif current_func is not None and (line.startswith("    ") or line.startswith("\t")):
                body_lines.append(stripped)

        # Second pass: execute all top-level lines
        for line in lines:
            stripped = line.strip()
            if stripped.startswith(("integer", "double", "string")):
                self.parse_types(stripped)
            elif stripped.startswith("PRINT"):
                self.handle_print(stripped)
            elif stripped.startswith("DOES"):
                self.handle_does(stripped)
            elif stripped == "SPACE":
                print()
            elif stripped == "COMMENT":
                pass
            elif len(stripped.split()) == 2 and stripped.split()[1] == "SEMICOLON":
                func_name = stripped.split()[0]
                
                # Only execute if it's a function call, not a function definition
                if func_name not in function_definitions:
                    self.execute_function(func_name)

    # Handle PRINT command
    def handle_print(self, line):
        parts = line.strip().split()
        if parts[1] == "QUOTE":
            start = line.find("QUOTE") + len("QUOTE")
            if line[start] == " ":
                start += 1
            end = line.find("QUOTE", start)
            print(line[start:end])
        elif parts[1] in ["VOLUME", "AREA"]:
            unit_power = 3 if parts[1] == "VOLUME" else 2
            formulas = self.volume_formulas if parts[1] == "VOLUME" else self.area_formulas
            result = self._handle_calc(parts[2:-1], formulas, unit_power)
            print(result)
        elif parts[1] == "SQRT":
            val = self.resolve_value(parts[2])
            print(math.sqrt(val))
        elif len(parts) == 3 and parts[2] == "END":
            varname = parts[1]
            print(self.variables.get(varname, f"Undefined variable: {varname}"))
        else:
            expr = parts[1:-1]
            print(self.evaluate_expression(expr))

    # Handle boolean checks
    def handle_does(self, line):
        parts = line.strip().split()
        expr = parts[1:-1]
        result = self.evaluate_does(expr)
        print(result)

    # Evaluate basic math expressions
    def evaluate_expression(self, parts):
        if len(parts) == 1:
            return self.resolve_value(parts[0])
        elif len(parts) == 2 and parts[0] == "SQRT":
            return math.sqrt(self.resolve_value(parts[1]))
        elif len(parts) == 3:
            left = parts[0]
            operator = parts[1]
            right = parts[2]
            left_val = self.resolve_value(left)
            right_val = self.resolve_value(right)
            if operator == "PLUS":
                return left_val + right_val
            elif operator == "SUBTRACT":
                return left_val - right_val
            elif operator == "MULTIPLY":
                return left_val * right_val
            elif operator == "DIVIDE":
                return left_val / right_val
            elif operator == "POWER":
                return left_val ** right_val
            elif operator == "MOD":
                return left_val % right_val

    # Evaluate boolean expressions
    def evaluate_does(self, parts):
        left = parts[0]
        operator = parts[1]
        right = parts[2]
        left_val = self.resolve_value(left)
        right_val = self.resolve_value(right)
        if operator == "EQUALS":
            return self.variables["TRUE"] if left_val == right_val else self.variables["FALSE"]
        elif operator == "NOTEQUALS":
            return self.variables["TRUE"] if left_val != right_val else self.variables["FALSE"]
        elif operator == "GREATER":
            return self.variables["TRUE"] if left_val > right_val else self.variables["FALSE"]
        elif operator == "LESS":
            return self.variables["TRUE"] if left_val < right_val else self.variables["FALSE"]

    # Lookup variable or convert token to number
    def resolve_value(self, token):
        if token in self.variables:
            return self.variables[token]
        if "." in token:
            return float(token)
        return int(token)

    # Unified volume/area calculator
    def _handle_calc(self, parts, formulas, power, return_numeric=False):
        try:
            shape = parts[0].upper()
            unit = parts[-1].upper()
            args = list(map(float, parts[1:-1]))
            if shape not in formulas:
                return f"Unknown shape: {shape}"
            value = formulas[shape](args)
            if return_numeric:
                return value
            return f"{value} {self._unit_suffix(unit, power)}"
        except Exception as e:
            return f"Error: {e}"

    # Format unit with exponent
    def _unit_suffix(self, unit, power):
        suffix_map = {
            "MILLIMETERS": "mm",
            "MILIMETERS": "mm",
            "CENTIMETERS": "cm",
            "METERS": "m",
            "INCHES": "in",
            "FEET": "ft"
        }
        base = suffix_map.get(unit.upper(), unit.lower())
        return f"{base}^{power}"