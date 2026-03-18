#!/usr/bin/env python3
"""Generate MP3 audio files for DeutschWeg lessons using Microsoft Neural TTS."""
import asyncio
import edge_tts
import os

VOICE = "de-DE-KatjaNeural"  # Female German neural voice
RATE = "-8%"  # Slightly slower for learners
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "audio")

TEXTS = {
    # ── kochen.html Höraufgaben ──
    "kochen-1": "Heute Abend kocht die Familie Müller zusammen. Die Mutter möchte Spaghetti mit Tomatensauce machen. Der Vater schneidet die Zwiebeln und den Knoblauch. Die Kinder helfen beim Salat. Die Mutter sagt: Das wird ein leckeres Abendessen!",
    "kochen-2": "Markus ist Student und wohnt allein. Er kann nicht gut kochen, weil seine Mutter früher immer für ihn gekocht hat. Jetzt muss er alles selbst machen. Er schaut oft Kochvideos im Internet und versucht, einfache Gerichte zu lernen. Gestern hat er zum ersten Mal Pfannkuchen gemacht.",
    "kochen-3": "Lisa geht mit einer Freundin ins Restaurant. Sie schaut die Speisekarte an. Es gibt Fisch, Steak und verschiedene Salate. Lisa ist Vegetarierin, deshalb bestellt sie einen großen Salat mit Käse und Brot. Ihre Freundin nimmt das Steak mit Pommes.",
    "kochen-4": "Frau Weber möchte einen Kuchen backen. Sie hat Mehl, Zucker und Butter. Aber dann merkt sie: Es gibt keine Eier mehr! Sie fragt ihre Nachbarin, ob sie drei Eier haben kann. Die Nachbarin gibt ihr fünf Eier und sagt: Ich möchte gern ein Stück von deinem Kuchen probieren!",
    "kochen-5": "Toms Lieblingsgericht ist Kartoffelsuppe. Seine Großmutter hat sie früher jeden Sonntag gekocht. Die Suppe war immer mit Würstchen und frischen Kräutern. Heute kocht Tom die Suppe selbst, aber er sagt: Sie schmeckt nie so gut wie bei Oma. Trotzdem kocht er sie jede Woche.",
    "kochen-6": "In der Volkshochschule gibt es einen Kochkurs für Anfänger. Dort lernt man, wie man einfache Gerichte kocht: Suppen, Salate und Nudelgerichte. Der Kurs dauert sechs Wochen und findet jeden Mittwoch statt. Am Ende bekommt jeder Teilnehmer ein kleines Kochbuch mit allen Rezepten aus dem Kurs.",

    # ── umwelt.html Höraufgaben ──
    "umwelt-1": "Anna wohnt in einer kleinen Stadt und versucht, umweltfreundlich zu leben. Sie fährt immer mit dem Fahrrad zur Arbeit und kauft keine Plastikflaschen. Aber sie fährt zweimal im Jahr mit dem Flugzeug in den Urlaub. Das findet sie selbst nicht so gut.",
    "umwelt-2": "Maria möchte Wasser sparen. Früher hat sie jeden Tag zwanzig Minuten geduscht. Jetzt duscht sie nur noch jeden zweiten Tag und immer nur fünf Minuten. Ihr Mann findet das manchmal schwierig, aber er versteht es.",
    "umwelt-3": "Thomas hat früher immer Bio-Produkte gekauft, weil er die Umwelt schützen wollte. Aber seit drei Monaten kauft er keine mehr. Bio-Produkte sind sehr teuer, und Thomas hat seinen Job verloren. Er hofft, dass er bald wieder arbeitet.",
    "umwelt-4": "In der Stadt Grünberg gibt es viele Umweltprobleme. Die Luft ist wegen der vielen Autos schlecht. Es gibt auch zu viel Müll auf den Straßen. Das größte Problem ist der Fluss. Die Fabrik wirft seit Jahren alte Chemikalien ins Wasser. Die Fische sind fast alle verschwunden.",
    "umwelt-5": "Familie Müller trennt ihren Müll sehr genau. Die Mutter sortiert Papier, Glas und Plastik. Der Vater bringt die Flaschen zum Container. Aber die Kinder vergessen es oft. Der Sohn wirft manchmal Plastik in den falschen Mülleimer. Die Mutter erklärt ihm, warum das wichtig ist.",
    "umwelt-6": "Die Stadt Grünberg hat einen neuen Plan. Ab nächstem Jahr sollen alle neuen Busse elektrisch fahren. Die Stadt möchte auch mehr Fahrradwege bauen. Autos sollen in der Stadtmitte weniger fahren dürfen. Das Schwimmbad mit Solarenergie kommt erst in fünf Jahren.",

    # ── reisen.html Höraufgaben ──
    "reisen-1": "Letzten Monat ist Emma zum ersten Mal allein nach Spanien gereist. Sie hatte sich schon wochenlang auf die Reise gefreut und sich sehr gut vorbereitet. Am Abend vor dem Flug hat sie ihren Koffer gepackt und alles sorgfältig kontrolliert. Am nächsten Morgen ist sie früh aufgestanden und hat sich schnell fertig gemacht. Am Flughafen hat sie sich sofort am Schalter angemeldet. Der Flug ist pünktlich abgeflogen und Emma hat sich während des Fluges sehr gut erholt.",
    "reisen-2": "Familie Berger ist nach Wien gefahren. Sie haben online ein Hotel in der Stadtmitte gebucht. Als sie angekommen sind, hat sich die Mutter an der Rezeption angemeldet. Das Zimmer war groß, hell und sehr komfortabel. Am Abend haben sie sich im Restaurant des Hotels ein leckeres Abendessen bestellt. Der Vater hat sich über das Wetter geärgert, weil es den ganzen Tag geregnet hat. Aber die Kinder haben sich sehr gefreut, weil sie im Hotelpool schwimmen durften.",
    "reisen-3": "Thomas und seine Freundin Lisa haben sich einen freien Tag in Prag genommen. Sie haben sich um neun Uhr morgens vor dem Hotel getroffen und sind zusammen in die Altstadt gegangen. Dort haben sie sich viele alte Gebäude angesehen. Mittags haben sie sich in einem kleinen Café ausgeruht und Kaffee getrunken. Am Nachmittag haben sie sich an einem Aussichtspunkt fotografiert. Beide haben sich sehr gut unterhalten.",
    "reisen-4": "Nina fährt mit dem Zug von München nach Hamburg. Sie hat sich das Ticket schon gestern online gekauft. Am Bahnhof hat sie sich auf einer Bank ausgeruht, weil sie früh dort angekommen ist. Dann hat sie sich die Abfahrtszeiten auf der Anzeigetafel angesehen. Der Zug hatte leider Verspätung. Nina hat sich über die Verspätung geärgert, weil sie einen wichtigen Termin hatte.",
    "reisen-5": "Anna zeigt ihren Freunden Fotos von ihrer Reise nach Portugal. Sie erinnert sich sehr gern an den Urlaub. Das Wetter war perfekt und fast dreißig Grad warm. Sie hat sich an einem Strand erholt und viel gelesen. Abends hat sie sich in kleinen Restaurants leckere Meeresfrüchte bestellt. Sie hat sich auch mit einheimischen Leuten unterhalten. Nächsten Sommer möchte sie nach Griechenland reisen.",
    "reisen-test": "Hallo! Ich lerne Deutsch. Das macht mir viel Spaß!",
}


async def generate():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    for name, text in TEXTS.items():
        outfile = os.path.join(OUTPUT_DIR, f"{name}.mp3")
        if os.path.exists(outfile):
            print(f"  skip {name}.mp3 (exists)")
            continue
        print(f"  generating {name}.mp3 ...")
        communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
        await communicate.save(outfile)
    print("Done!")


if __name__ == "__main__":
    asyncio.run(generate())
