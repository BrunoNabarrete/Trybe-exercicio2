import csv
import json

user_input = input("Enter a name: ")

for i in range(len(user_input), 0, -1):
    print(user_input[:i].upper())


# uma funcao para retornar um json com json.load
def get_json_from_file(file_name):
    with open(file_name) as json_file:
        return json.load(json_file)


def count_books_by_categories(books):
    books = get_json_from_file('books.json')
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    percentages = {}
    for category in book_count_by_category:
        percentages[category] = round(
            (book_count_by_category[category] / total_books) * 100, 2)
    return percentages


def write_csv_file(file_name, percentages):
    with open(file_name, 'w') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(['category', 'percentage'])
        for category in percentages:
            writer.writerow([category, percentages[category]])


if __name__ == '__main__':
    books = get_json_from_file('books.json')
    book_count_by_category = count_books_by_categories(books)
    total_books = len(books)
    percentages = calculate_percentage_by_category(
        book_count_by_category, total_books)
    write_csv_file('books.csv', percentages)


fruit = "banana"
letters = [letter for letter in fruit]
print(letters)
