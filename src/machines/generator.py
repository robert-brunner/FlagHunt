import random
import string

# Generate random string of given length
def random_string(length):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))

# Generate random ID with given number included
def random_id(num):
    if num == 11:
        prefix = random.choice(string.ascii_lowercase) + str(num)
        length = 9
    elif num == 22:
        prefix = random_string(2) + str(num)
        length = 10
    elif num == 33:
        prefix = random_string(2) + str(num)
        length = 6
    else:
        prefix = ""
        length = 0
    suffix = random_string(length)
    return prefix + suffix

# Generate 42 HTML snippets
for i in range(42):
    section_id = random_id(11)
    main_id = random_id(22)
    article_id = random_id(33)

    html = f'<section class="rabbit" value="{random_string(10)}" id="{section_id}">'
    html += f'<summary class="rabbit" value="{random_string(10)}" id="{random_id(0)}"></summary>'
    html += f'<main class="rabbit" value="{random_string(10)}" id="{main_id}">'
    html += f'<article class="rabbit" value="{random_string(10)}" id="{article_id}">'
    html += '<p class="rabbit flag" nonsenseValue=""></p>'
    html += '<nav></nav>'
    html += '</article>'
    html += '</main>'
    html += '</section>'

    print(html)