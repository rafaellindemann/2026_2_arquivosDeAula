   nomes
(7) ['Daniel', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete']
    nomes.push("Lucio Fernando")
8
nomes
(8) ['Daniel', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando']0: "Daniel"1: "Marcos"2: "Jean"3: "Felipe"4: "Astolfo"5: "Gustavo"6: "Dona Bete"7: "Lucio Fernando"length: 8[[Prototype]]: Array(0)
nomes.push("1", "2")
10
nomes
(10) ['Daniel', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2']0: "Daniel"1: "Marcos"2: "Jean"3: "Felipe"4: "Astolfo"5: "Gustavo"6: "Dona Bete"7: "Lucio Fernando"8: "1"9: "2"length: 10[[Prototype]]: Array(0)
nomes.push("1", "2", '3')
13
nomes]
VM3353:1 Uncaught SyntaxError: Unexpected token ']' (at VM3353:1:6)
nomes
(13) ['Daniel', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2', '3']0: "Daniel"1: "Marcos"2: "Jean"3: "Felipe"4: "Astolfo"5: "Gustavo"6: "Dona Bete"7: "Lucio Fernando"8: "1"9: "2"10: "1"11: "2"12: "3"length: 13[[Prototype]]: Array(0)
nomes.pop()
'3'
nomes
(12) ['Daniel', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2']
nomes.shift()
'Daniel'
nomes
(11) ['Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2']
nomes.unshift('a', 'b')
13
nomes
(13) ['a', 'b', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2']0: "Primeiro"1: "a"2: "b"3: "Marcos"4: "Jean"5: "Felipe"6: "Astolfo"7: "Gustavo"8: "Dona Bete"9: "Lucio Fernando"10: "1"11: "2"12: "1"13: "2"length: 14[[Prototype]]: Array(0)
nomes.unshift('Primeiro')
14
nomes
(14) ['Primeiro', 'a', 'b', 'Marcos', 'Jean', 'Felipe', 'Astolfo', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2']0: "Primeiro"1: "a"2: "b"3: "Marcos"4: "Jean"5: "Felipe"6: "Astolfo"7: "Gustavo"8: "Dona Bete"9: "Lucio Fernando"10: "1"11: "2"12: "1"13: "2"length: 14[[Prototype]]: Array(0)
 nomes.splice(6, 1)
['Astolfo']
nomes
(13) ['Primeiro', 'a', 'b', 'Marcos', 'Jean', 'Felipe', 'Gustavo', 'Dona Bete', 'Lucio Fernando', '1', '2', '1', '2']0: "Primeiro"1: "a"2: "b"3: "Marcos"4: "Jean"5: "Felipe"6: "Lucio Fernando"7: "1"8: "2"9: "1"10: "2"length: 11[[Prototype]]: Array(0)
