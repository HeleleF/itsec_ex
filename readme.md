** Hier gehen die Übungen zu IT Security rein. **

Der gesamte Ordner itsec_ex ist eigentlich ein Git-Repo, welches auf dem FB4-Studi-Projekte-Server liegt.

# IT Security WS18/19 - Aufgaben

- alltests: Alle JS-Testdateien (eigene und generierte)
- tasks: Die Aufgabenblätter
- MyBigInt: Aufgaben 1 und 2
    - questions.js enthält die Primzahlstatistiken
- MyRSA: Aufgabe 3
- MyBBS: Aufgabe 4
    - bbsStats.js enthält die statistik berechnung für die bits, dauert aber sehr lange!
- MySHA256: Aufgabe 5
- MyAES128: Aufgabe 6
- server.js, index.js und index.html: Zum Testen im Browser.
- .vscode: enthält automatische generierte Dateien von VS Code
- diese README
- noch ein paar git/npm - spezifische Dateien


## System

Entwickelt wurde unter **Windows 10 (64bit)**  mit **NodeJS 11.6.0** und **Chrome 71.0**. Als IDE wurde **Visual Studio Code** in der jeweils aktuellsten Version verwendet.
Zum Testen wurden die Frameworks **Mocha** und **Chai** verwendet. **Express** wurde verwendet, um möglichst unkompliziert einen Webserver laufen zu haben.

Alle Javascript Dateien enthalten jeweils ausführliche Kommentare im JSDoc-Style. Hauptaugenmerk bei der Implementierung war es nicht, eine schöne Klassenstruktur aufzubauen,
wo die einzelnene Klassen schön übersichtlich klein gehalten sind (könnte man noch umsetzen, ES6 unterstützt **extends**, wurde hier aber aus Zeitgründen weggelassen.)

Alle Funktionalitäten wurden in teils mühseliger Kleinstarbeit (als "Beweis" siehe die Commit-History via `git log`) selbst entwickelt.


## Testen

Die Unterordner `mytests/` enthalten jeweils die zur Verfügung gestellten txt-Dateien mit den Tests.
Die `x.test.js` Dateien werden aus diesen mittels `node ./testCreatorX.js` erzeugt und in `./alltests/` abgelegt.
Um dies zu automatisieren, sind diese Aufgaben in `./.vscode/tasks.json` definiert und können über Terminal -> Aufgabe ausführen -> direkt gestartet werden (sollte man denn VS Code verwenden).


#### per Kommandozeile (NodeJS)

Entwickelt und getestet wurden alle Funktionen und Tests mit NodeJS Version 11.6.0 unter Win10 (64bit).

Generell muss unter NodeJS zunächst `npm install` im Hauptverzeichnis ausgeführt werden, um die dependencies
zu installieren. Diese befinden sich dann unter `./node_modules`.

Dann in das Verzeichnis von mocha wechseln (nicht nötig, wenn `mocha` global installiert ist):
`cd ./node_modules/.bin/`.

Dann können die Tests ausgeführt werden mit:

`mocha -u bdd --timeout 60s --colors ../../alltests/ --grep "TASKx"`

- `-u bdd` legt das Aussehen der Testergbenisse fest, ist nicht weiter von Bedeutung
- `--timeout 60s` wurde hier als Stadardwert genommen, Tests die länger dauern gelten als "Nicht Bestanden".
(Anmerkung: Für bestimmte Tests muss dieser Wert höher gesetzt werden, z.b. bei Primzahltests oder BBS)
- `--colors` forciert einfach nur die farbliche Ausgabe.
- Dann wird der Pfad zu den Testdaten angegeben. In diesem Fall liegen alle generierten und eigenen Tests im Hauptverzeichnis unter `alltests/`.
Sollen nur einzelne Tests ausgeführt werden, kann mittels `--grep` ein Pattern/Ausdruck angegeben werden. Hier bietet sich z.B. an, entsprechend der Aufgabenblätter
nach TASK1 bis TASK6 zu filtern.


Alternativ dazu können alle Tests auch im Hauptverzeichnis direkt mit `npm test` gestartet werden. Soll hier gefiltert werden, lautet die Syntax:
`npm test -- --grep="TASKx"` (zweimal die doppelten Bindestriche!)

Bevor die Tests anfangen durchzulaufen kann es etwas dauern, da mocha zunächst alle Testfälle parst und anscheinend einige Dinge im Vorneherein berechnet (wie hier z.B. die RSA Module für die RSA Tests).
Das passiert leider auch wenn man die RSA Tests gar nicht laufen lässt...

Allerdings sollte, gerade wenn man `npm test` ohne das `grep` direkt loslaufen lässt, sowieso eine MENGE ZEIT mitgebracht werden ;)


#### per Browser

Getestet wurden alle Funktionen und Tests ausschließlich mit der aktuellsten Version von Chrome (71.0) unter Win10 (64bit). Aktuelle Browser wie Firefox etc. sollten aber ebenfalls laufen, solange es nicht IE ist ;)

Im Hauptverzeichnis mittels `npm start` den Server starten.
Dann einen Browser öffnen und zu `http://localhost:4200/` wechseln (Kann etwas dauern, bis alle Testdateien geladen sind).
Hier können die Tests mit Klick auf den Run Button ausgeführt werden. Dazu muss in der Inputbox jeweils der Testtitel o.Ä. eingegeben werden.
Eignet sich auch wunderbar als Spielwiese zum Testen von den Klassen direkt, da diese in der Devtools-Konsole (erreichbar über F12) als globale Variablen vorhanden sind.

*Testen per Browser wurde eher aus Bequemlichkeitsgründen hinzugefügt und funktioniert nicht immer komplett einwandfrei. Wenn einfach überprüft werden soll, ob die Tests erfolgreich durchlaufen, ist die Nutzung von
npm test sinnvoller.*


## Finden von Blum-Primzahlen

A blum prime is a prime `p` with `p = 3 (mod 4)`. To find the next blum prime after a given integer:

- Set p = input.
- If p is even, increment by one.
- Else (p is odd), increment by two. (1)
- If p divided by four has a remainder of one, increment by two. (2)
- While p is not prime, increment by four. (3)

(1) p is now the smallest odd integer greater than input. (This was necessary because inputting an integer which already is a blum prime would just return it.)

(2) p is now the smallest odd integer greater than input with `p = 3 (mod 4)`, because:

Every positive odd integer `n` can be written as `n = 2k + 1` with `k >= 0`.
If `k` itself is even, this becomes `n = 2(2j) + 1 = 4j + 1`. In this case, `n = 1 (mod 4)`.
If `k` is odd, `n = 2(2j + 1) + 1 = 4j + 3`. Here, `n = 3 (mod 4)`.

(3) p is now the smallest blum prime greater than input.

Since `p + 4 (mod 4) = p (mod 4) + 4 (mod 4) = 3 + 0 = 3`,
we can increment `p` by 4 in each iteration and always satisfy `p = 3 (mod 4)`.
This way the generation is faster than incrementing only by 2 and checking both conditions each loop.