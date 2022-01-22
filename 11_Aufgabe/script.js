const circle = document.getElementById("circle");
const text = document.getElementById("text");
const input = document.getElementById("input");
let isTalking = false;

const artyom = new Artyom();

artyom.fatality();

const myGroup = [
  {
    indexes: ["Hallo", "Hi", "Hey"],
    action: function () {
      artyom.say(
        "Hallo! Möchtest du dich über vom Aussterben bedrohte Tiere informieren? Welches Gebiet interessiert dich?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Gebe mir Details zu Europa",
      "Gib mir Details zu Europa",
      "Europa",
    ],
    action: function () {
      artyom.say(
        "Die Länder mit den meisten vom Aussterben bedrohten Tieren in Europa sind Spanien Deutschland und Italien. Über welches Land möchtest du mehr wissen?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Welche weiteren Länder gibt es in Europa",
      "Welche weiteren Länder gibt es",
    ],
    action: function () {
      artyom.say(
        "Weitere Länder in Europa sind Portugal Großbritannien und Polen. Möchtest du zu einem Land mehr erfahren?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Gebe mir Informationen zu Deutschland",
      "Gib mir Informationen zu Deutschland",
      "Dein Zufalls-Land ist Deutschland",
      "Deutschland",
    ],
    action: function () {
      artyom.say(
        "In Deutschland sind momentan 55 Tiere vom Aussterben bedroht. Weltweit steht Deutschland hiermit auf Platz 159. Möchtest du mehr über die einzelnen Tiere erfahren oder die Statistiken hören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Erzähle mir mehr über die Tiere",
      "Erzähl mir mehr über die Tiere",
      "Erzähle mir mehr über die einzelnen Tiere",
      "Erzähl mir mehr über die einzelnen Tiere",
      "Erzähle mir mehr über die Tiere in Deutschland",
      "Erzähl mir mehr über die Tiere in Deutschland",
      "Erzähle mir mehr über die einzelnen Tiere in Deutschland",
      "Erzähl mir mehr über die einzelnen Tiere in Deutschland",
      "Tiere",
    ],
    action: function () {
      artyom.say(
        "Die 5 Tiere die in Deutschland am meisten vom Aussterben bedroht sind, sind der Feldhase, der Fischotter, die Alpenspitzmaus, der rote Apollo und der große Eichenbock. Möchtest du mehr über ein Tier wissen?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Erzähle mir mehr über den Feldhase",
      "Erzähle mir mehr über den Feldhasen",
      "Erzähl mir mehr über den Feldhase",
      "Erzähl mir mehr über den Feldhasen",
      "Feldhase",
    ],
    action: function () {
      artyom.say(
        "Es gibt ca 3.000.000 Feldhasen in Deutschland. Betrachtet man die Bevölkerungszahl Deutschlands kommen 27 Menschen auf einen Hasen. Durch die Intensivierung in der Landwirtschaft verliert der Feldhase an Lebensraum und Nahrungsangebot. Neue Gewerbe- und Siedlungsgebiete sowie das zunehmende Zerschneiden von Landschaften durch zum Beispiel Straßenbau machen ihm das Leben zusätzlich schwer. Möchtest du mehr über ein anderes Tier wissen oder die Statistiken anhören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: ["Zeige mir die Statistiken", "Weitere Statistik", "Statistiken"],
    action: function () {
      artyom.say(
        "Welche Statistik möchtest du anhören? Erstens, Artenvergleich, Zweitens, Ländervergleich, Drittens, Entwicklung über die Jahre",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Arten Vergleich",
      "Erstens",
      "1",
      "1.",
      "eins",
      "Artenvergleich",
    ],
    action: function () {
      artyom.say(
        "43.6% aller bedrohten Arten sind Fische, 20% Vögel und 18.2% Säugetiere. Den Rest bilden die Amphibien und die Reptilien mit jeweils 9.1%. Möchtest du mehr über die Tiere erfahren oder eine andere Statistik anhören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: [
      "Länder Vergleich",
      "Ländervergleich",
      "Zweitens",
      "2",
      "2.",
      "zwei",
    ],
    action: function () {
      artyom.say(
        "Während In Deutschland 55 Arten vom Aussterben bedroht sind, sind es in Großbritannien nur 30 und in Luxemburg sogar nur 10. In Polen ist die Anzahl höher als in Deutschland, hier sind es 70 und in Frankreich beträgt die Anzahl sogar 80. Möchtest du mehr über die Tiere erfahren oder eine andere Statistik hören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: ["Entwicklung über die Jahre", "Drittens", "3", "3.", "drei"],
    action: function () {
      artyom.say(
        "Die Anzahl der bedrohten Tiere steigt in Deutschland stetig. So waren 2012 nur 37 Arten vom Aussterben bedroht während es 2016 schon 47 waren und 2020 schließlich 55. Möchtest du mehr über die Tiere erfahren oder eine andere Statistik hören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: ["Erzähle mir mehr über ein zufälliges Land"],
    action: function () {
      artyom.say(
        "Dein Zufalls-Land ist Deutschland. In Deutschland sind momentan 55 Tiere vom Aussterben bedroht. Weltweit steht Deutschland hiermit auf Platz 159. Möchtest du mehr über die einzelnen Tiere erfahren oder die Statistiken hören?",
        {
          onEnd() {
            artyom.ArtyomWebkitSpeechRecognition.abort();
          },
        }
      );
    },
  },
  {
    indexes: ["Wiederhole", "Nochmal", "Was", "Wiederholen", "Noch mal"],
    action: function () {
      artyom.repeatLastSay();
    },
  },
];

artyom.addCommands(myGroup);

setTimeout(() => {
  artyom.initialize({
    continuous: true,
    lang: "de-DE",
    listen: true,
    debug: true,
  });
}, 250);

artyom.redirectRecognizedTextOutput((recognized, isFinal) => {
  if (this.input) {
    if (isFinal || isTalking) {
      this.input.innerHTML = "";
    } else {
      this.input.innerHTML = recognized;
    }
  }
});

function listening() {
  if (this.circle && this.text) {
    isTalking = false;
    this.circle.style.backgroundColor = "#a4deff";
    this.text.style.color = "black";
    this.text.innerHTML = "Listening...";
  }
}

artyom.when("SPEECH_SYNTHESIS_START", function () {
  if (this.circle && this.text) {
    isTalking = true;
    this.circle.style.backgroundColor = "rgb(61, 113, 255)";
    this.text.style.color = "white";
    this.text.innerHTML = "Talking...";
  }
});

artyom.when("SPEECH_SYNTHESIS_END", function () {
  this.listening();
});

artyom.when("NOT_COMMAND_MATCHED", function () {
  if (this.circle && this.text) {
    this.text.innerHTML = "Kein gültiger Befehl";
    this.text.style.color = "rgb(255, 2, 2)";

    setTimeout(() => {
      this.listening();
    }, 3000);
  }
});
