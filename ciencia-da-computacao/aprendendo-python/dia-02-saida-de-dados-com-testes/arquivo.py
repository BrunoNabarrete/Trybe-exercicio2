import sys


if __name__ == '__main__':
    for argument in sys.argv:
        print("Received ->", argument)


print("O resultado é", 42)  # saída: O resultado é 42
print("Os resultados são", 6, 23, 42)  # saída: Os resultados são 6 23 42


print("Em duas ")
print("linhas.")


print("Na mesma", end=" ")
print("linha.")


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


user_input = input("Digite uma mensagem: ")
for letter in user_input:
    print(letter)


nums = input("Digite uma sequência de números, separados por espaço: ")

num_arr = nums.split(" ")

sum = 0

for num in num_arr:
    if not num.isdigit():
        print("A sequência contém um valor inválido!")
    else:
        sum += int(num)

print("A soma dos números é:", sum)
