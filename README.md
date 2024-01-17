# websrv1-2324-testprov

## Setup
1. Klicka på gubben och signa in med ditt konto för Setting sync
2. Terminalen: 
    npm install
    npm install -g nodemon (ifall du vill arbeta med nodemon)
3. Skriv mongosh i terminalen
4. Kopiera och klistra in från prov-setup.js i terminalen när mongosh körs. Du avbryter med ctrl+c efter.
5. Klicka på Mongosymbolen, alltså bladet som är nr6 i ordningen. Välj den högra, Open Form. Connect. Du ska nu se databasen prov.
6. Du kan nu börja koda. Strängen för att ansluta till MongoDB med mongoose finns redan i index.js


## QuickRef
De ENDA hjälpmedel du får använda är nedanstående
- Inbyggda hjälpmedel i VS Code (utom AI, ex GitHub Copilot)
- https://quickref.me/javascript
- https://quickref.me/es6
- https://quickref.me/express.html
- https://quickref.me/json


## Uppgift 1
Sätt upp en webbserver som lyssnar på en lämplig port och som skriver ut "Hej NAMN. Din ip-adress är: IP" till den som surfar till /basic/NAMN. IP ska vara det riktiga IP för besökaren. NAMN ska kunna vara vilket namn som helst, så att om man surfar till /basic/greta så ska Hej greta skrivas ut. 

## Uppgift 2
Koda så att man möts av en sida med namnet i en rubrik och ip-adressen i en p-tagg när man surfar till /stylish/NAMN. Namnet ska fortfarande gå att ändra. Använd Pug.

## Uppgift 3
Koda så att man får all data om alla produkter som json när man surfar till /json/. Du behöver alltså hämta all data i den collection som heter prov. Strukturen för datan hittar du i prov-setup.js.

## Uppgift 4
Visa alla produkter med vettig html, alltså en div för varje och sedan rubriker och text. Lägg in bilden för varje. 
För att använda statiska filer från mappen public behöver du lägga till: app.use(express.static('public')) 

