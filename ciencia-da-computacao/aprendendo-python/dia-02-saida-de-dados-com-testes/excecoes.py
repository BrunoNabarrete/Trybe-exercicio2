try:
    recovery_students = []
    with open('estudantes.txt', 'r') as file:
        for line in file:
            student = line.split(' ')
            if int(student[1]) < 6:
                recovery_students.append(student[0] + '\n')

    with open('estudantes_recuperacao.txt', 'w') as file:
        file.writelines(recovery_students)
        file.write('teste')
except FileNotFoundError as error:
    print('Ocorreu um erro ao ler o arquivo.')
    print(error)
else:
    print('Arquivo lido com sucesso.')
finally:
    print('Fechando o arquivo.')
    file.close()
    print('Arquivo fechado com sucesso.')
