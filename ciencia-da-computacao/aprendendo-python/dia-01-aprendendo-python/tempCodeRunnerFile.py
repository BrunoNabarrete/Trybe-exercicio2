def maior(a, b):
    if a > b:
        return a
    else:
        return b


print(maior(5, 6))

# calcule a media aritmética dos valores contidos em uma lista


def media(lista):
    soma = 0
    for e in lista:
        soma += e
    return soma / len(lista)


print(media([1, 2, 3, 4, 5]))


# faca um progrmaa que dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n


def quadrado(n):
    for i in range(n):
        print('*' * n)


quadrado(5)
