import random

# Define the HTML pattern
html_pattern = '''
<section class="rabbit" value="{value1}" id="{id1}">
    <summary class="rabbit" value="{value2}" id="{id2}"></summary>
    <main class="rabbit" value="{value3}" id="{id3}">
        <article class="rabbit" value="{value4}" id="{id4}">
            <p class="rabbit flag" value="{letter}"></p>
            <nav></nav>
        </article>
    </main>
</section>
'''

# Define the list of letters to insert into the <p> tags
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

# Define the function to generate the HTML code with random values and ids, and user-defined letters
def generate_html():
    # Generate random values and ids
    value1 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=10))
    id1 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=8))
    value2 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=10))
    id2 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=8))
    value3 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=10))
    id3 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=8))
    value4 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=10))
    id4 = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz0123456789', k=8))
    letter = random.choice(letters)
    # Fill in the HTML pattern with the generated values and ids, and the user-defined letter
    html = html_pattern.format(value1=value1, id1=id1, value2=value2, id2=id2, value3=value3, id3=id3, value4=value4, id4=id4, letter=letter)
    return html

# Test the generator by printing 5 variations of the HTML code
for i in range(5):
    print(generate_html())
