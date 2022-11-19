# Besmislena-Igra-Demo
React practice project. Game based on my first novel Besmišlje

# IDEJA

Priča igre se bazira na mom romanu Besmišlje. To je RPG koji ima malenu mehaniku nekih drugih RPG-ova kao Disco Elysium i D&D . Sama igra se bazira na chose your own adventure tipu igara koja je story driven i ishodi se često baziraju na bacanju kocke i provjere raznih statusa koje lik ima.

Ovo je jako jednostavna igra i izvedba, ali ovo je moj prvi samostalni projekt kojim vježbam Front End vještine koristeći React.js .
Kako se budem razvijao tako ću dorađivati igru, prvo ću je migrirati na Angular, a kasnije dodati i Back End i td. Svaki komentar je dobro došao.

# ŠTO?

## NACRT

1.	Character Selection => Lino, Tomažina, Custom 
2.	Level 1 => Prati prvo poglavlje romana „Loša sudbina“. Igraču se prezentira priča. Postavljena je situacija u kojoj može birati što učiniti. Na temelju odabira i izračuna ishoda (kockice + statusi) dolazi nova priča i nakon toga situacija. Nakon što se sve odabere završava level s rezultatskom pričom
3.	Home => Ima neko vrijeme koje treba proći prije sljedećeg levela i na Home se može raditi određene stvari ovisno o odabranom liku. Svaki odabir akcije umanjuje određeno vrijeme koje je ostalo slobodno. Odabrane radnje mogu podignuti statuse lika ili ih smanjiti. U kakvoj nadogradnji ću dodati više opcija i nove levele iza

## LIKOVI

1.	Lino
2.	Tomažina
3.	Custom

U demo verziji je samo moguće Custom a ostali nisu mogući (trenutno ne postoje). 

### CUSTOM

Kreira se lik s definiranim pullom bodova koji su na raspolaganju igraču. U demo verziji lik može biti samo muškarac s putanjom priče A i posebna vještinom gitara

### Lino

Muški lik s posebnom vještinom gitarom. Putanja priče A.

### Tomažina

Ženski lik s posebnom vještinom klavirom. Putanja priče B.

# KAKO?

## TEHNOLOGIJA

Za ovaj projekt koristim React i react-bootstrap. Glavni koncepi za vježbu iz Reacta koje ću  koristiti su:
1. Komponente
2. Props
3. State
4. Hookovi (useEffect i useState)
5. Context API

U budućnosti planiram implementirati i sljedeće:
1. Redux
2. React Router
3. Više hookova
4. TypeScript

## STRUKTURA

Kako je ovaj projekt single page tako će se koristiti uvjetovano iscrtavanje više komponenti.
Sljedeće komponente se koriste:
1. App.jsx => Vršna komponenta u kojoj se pozivaju sve ostale
2. Character => prva komponenta koja se pokazuje i vodi do sljedećih komponenti
3. Level 1 => Prvi level koji se sastoji od više komponenti
4. Home => Komponenta koja dolazi nakon Level komponenti 
5. Fin => Završna komponenta koja predstavlja kraj DEMO verzije i ispisuje rezultat igrača

## LIKOVI

Statusi su (po ugledu na Disco Elysium): 
1. Intelekt
2. Psiha
3. Fizikalnost
4. Motorika
5. Posebna vještina