a = 12
b = 23
print(f"a-5 = {a-5}\nb-3 = {b-3}")
# On veut aller de a-5 exclut et b-3 exclut
print(list(range(a-4, b-3)))

"""
range(a, b, c)
a = nombre de début (inclut)
b = nombre de fin (exclut)
c = pas
"""