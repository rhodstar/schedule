##Hola paco rodri :D, por si querias scrapear la pagina de horarias de la facultad :o 

import pandas as pd
listaDeMaterias = ['1645','1644','1562','1686','1413']
Materias = pd.DataFrame()
for materia in listaDeMaterias:
    website = "http://ssa.ingenieria.unam.mx/hrsHtml/{}.html?".format(materia)
    datalist = pd.read_html(website,attrs={"class":"table"})
    Materias = Materias.append(datalist,ignore_index=True)
Materias.set_axis(['clave', 'gpo','profesor','tipo','horario','dias','cupo'], axis='columns', inplace=True)

print(Materias.tail(10))