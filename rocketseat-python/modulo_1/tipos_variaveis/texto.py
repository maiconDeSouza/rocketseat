full_name = "Maicon Souza"
pular_linhas = """Maicon
Souza
"""
pular_linhas2 = "Maicon \
    Souza"

age = 36

print(pular_linhas)
print(pular_linhas2)

print("Nome completo (1° forma ):", full_name)
print("Nome completo (2° forma ): " + full_name)
print(f"Nome completo (3° forma ): {full_name}")
print("Nome completo (4° forma ): %s" % full_name)
print("Nome completo (5° forma ): %s e tenho %s anos" % (full_name, age))
print("Nome completo (6° forma ): {} e tenho {} anos".format(full_name, age))
