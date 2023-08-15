# exercicio1


def maior(a, b):
    if a > b:
        return a
    else:
        return b


print(maior(5, 6))

# exercicio 2


def media(lista):
    soma = 0
    for e in lista:
        soma += e
    return soma / len(lista)


print(media([1, 2, 3, 4, 5]))


# exercicio 3


def quadrado(n):
    for i in range(n):
        print('*' * n)


quadrado(5)


# exercicio 4


def maior_nome(lista):
    maior = ''
    for nome in lista:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# exercicio 5


def tinta(m2):
    litros = m2 / 3
    latas = litros / 18
    if litros % 18 != 0:
        latas += 1
    return (latas, latas * 80)


print(tinta(100))


# exercicio 6


def triangulo(a, b, c):
    if a > b + c or b > a + c or c > a + b:
        return 'não é triangulo'
    elif a == b == c:
        return 'equilatero'
    elif a == b or a == c or b == c:
        return 'isosceles'
    else:
        return 'escaleno'


print(triangulo(1, 2, 3))
