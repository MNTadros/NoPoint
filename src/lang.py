from Interpreter import Interpreter

with open("main.nopoint", "r") as file:
    esolang_code = file.read()

interpreter = Interpreter()
interpreter.run_esolang(esolang_code)
