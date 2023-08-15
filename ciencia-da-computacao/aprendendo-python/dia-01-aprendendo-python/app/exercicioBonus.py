# exercicio bonus 1

def menor_elemento(lista):
    menor = lista[0]
    for i in lista:
        if i < menor:
            menor = i
    return menor


print(menor_elemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


# exercicio bonus 2

def imprime_triangulo(n):
    for i in range(n):
        print("*" * (i + 1))


imprime_triangulo(5)
