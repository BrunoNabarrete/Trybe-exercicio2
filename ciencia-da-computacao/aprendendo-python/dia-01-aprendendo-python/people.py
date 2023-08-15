import area

PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")

verify = True

if verify:
    print("Sim")
else:
    print("Não")


#o que é REPL?
#Read Eval Print Loop
#é um ambiente de programação interativo que recebe um comando, o executa e retorna o resultado.
#é um ambiente de programação interativo que recebe um comando, o executa e retorna o resultado.
# tipos de dados nativos em python?
#int, float, bool, str, list, tuple, dict, set, frozenset, bytes, bytearray, range, complex, NoneType

#Em Python, o que os tipos de dados list, set, dict e tuple tem em comum?
#são tipos de dados iteráveis


