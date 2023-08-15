import csv

with open("graduacao_unb.csv", encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=',', quotechar='"')
    hearder, *data = reader

    group_by_departament = {}
    for row in data:
        departament = row[15]
        if departament not in group_by_departament:
            group_by_departament[departament] = 0

        group_by_departament[departament] += 1
with open("departament.csv", "w", encoding='utf-8') as file:
    writer = csv.writer(file, delimiter=',', quotechar='"')

    hearder = ["Departamento", "Total de curso"]
    writer.writerow(hearder)
    for departament, grades in group_by_departament.items():
        writer.writerow([departament, grades])
