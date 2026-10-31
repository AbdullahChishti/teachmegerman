export const replies = [
 [
 ['Zum Mitnehmen oder hier trinken?','To take away or drink here?','Hier trinken, bitte.','To drink here, please.','Or say Zum Mitnehmen, bitte for takeaway.'],
 ['Welche Größe möchten Sie?','What size would you like?','Einen kleinen, bitte.','A small one, please.','Kleinen refers back to the masculine Cappuccino.'],
 ['Sonst noch etwas?','Anything else?','Nein, danke. Das ist alles.','No, thank you. That’s everything.','Or add another item with Und ein Wasser, bitte.']
 ],
 [
 ['Welche Brötchen möchten Sie?','Which bread rolls would you like?','Die da, bitte.','Those there, please.','You can point to the rolls you mean.'],
 ['Darf es sonst noch etwas sein?','Would you like anything else?','Ja, ein Croissant, bitte.','Yes, a croissant, please.','Or politely finish with Nein, danke.'],
 ['Das macht zwei Euro.','That comes to two euros.','Kann ich mit Karte zahlen?','Can I pay by card?','Prices vary; this is an example of a typical payment exchange.']
 ],
 [
 ['Die Milch steht im Kühlregal.','The milk is in the refrigerated section.','Danke! Wo ist das Kühlregal?','Thank you! Where is the refrigerated section?','Ask a follow-up if you still cannot find it.'],
 ['Suchen Sie normale Milch oder Hafermilch?','Are you looking for regular milk or oat milk?','Hafermilch, bitte.','Oat milk, please.','A short answer is perfectly natural here.'],
 ['Dort hinten, auf der linken Seite.','Over there at the back, on the left.','Vielen Dank für Ihre Hilfe!','Thank you very much for your help!','Dort hinten means over there at the back.']
 ],
 [
 ['Ja, der hält am Alexanderplatz.','Yes, it stops at Alexanderplatz.','Danke! Wie viele Stationen sind es?','Thank you! How many stops is it?','Hält comes from halten, meaning to stop.'],
 ['Nein, Sie müssen umsteigen.','No, you need to change trains.','Wo muss ich umsteigen?','Where do I need to change?','Umsteigen means to change trains or other public transport.'],
 ['Das ist die nächste Station.','That is the next stop.','Super, vielen Dank!','Great, thank you very much!','Listen for nächste Station: next stop.']
 ],
 [
 ['Ich heiße Anna. Freut mich!','My name is Anna. Nice to meet you!','Freut mich auch!','Nice to meet you too!','Auch means too or also.'],
 ['Woher kommst du?','Where are you from?','Ich komme aus England. Und du?','I’m from England. And you?','Replace England with the country you are from.'],
 ['Wie lange wohnst du schon hier?','How long have you been living here?','Ich wohne seit Kurzem hier.','I’ve been living here for a short time.','German uses the present tense for this ongoing situation.']
 ],
 [
 ['Ja, natürlich.','Yes, of course.','Vielen Dank.','Thank you very much.','They will usually repeat what they said next.'],
 ['Soll ich langsamer sprechen?','Shall I speak more slowly?','Ja, bitte. Ich lerne noch Deutsch.','Yes, please. I’m still learning German.','Noch means still in this context.'],
 ['Welchen Teil haben Sie nicht verstanden?','Which part didn’t you understand?','Den letzten Satz, bitte.','The last sentence, please.','You can also say Alles noch einmal, bitte: everything once more, please.']
 ],
 [
 ['Das kostet fünf Euro.','That costs five euros.','Gut, ich nehme es.','Okay, I’ll take it.','This is an example price, rather than a real quote.'],
 ['Meinen Sie dieses hier?','Do you mean this one here?','Ja, genau.','Yes, exactly.','Useful when someone checks which item you mean.'],
 ['Es ist gerade im Angebot.','It’s on special offer at the moment.','Wie viel kostet es jetzt?','How much does it cost now?','Im Angebot means on special offer.']
 ],
 [
 ['Haben Sie reserviert?','Have you made a reservation?','Nein. Haben Sie noch etwas frei?','No. Do you still have anything available?','Frei means available in this restaurant context.'],
 ['Drinnen oder draußen?','Inside or outside?','Draußen, bitte.','Outside, please.','Or choose Drinnen, bitte for inside.'],
 ['Einen Moment, bitte. Ich schaue nach.','One moment, please. I’ll check.','Ja, gern. Danke.','Of course. Thank you.','Nachschauen means to check or look something up.']
 ],
 [
 ['Willkommen im Haus!','Welcome to the building!','Vielen Dank! Freut mich, Sie kennenzulernen.','Thank you! Nice to meet you.','Use Sie with a neighbour you are addressing formally.'],
 ['In welcher Wohnung wohnen Sie?','Which apartment do you live in?','Ich wohne im zweiten Stock.','I live on the second floor.','Replace the floor with your own. In Germany, the ground floor is das Erdgeschoss.'],
 ['Wie gefällt es Ihnen hier?','How do you like it here?','Sehr gut, danke. Es ist schön hier.','Very much, thank you. It’s lovely here.','A short, friendly answer keeps the conversation going.']
 ],
 [
 ['Wann hätten Sie Zeit?','When would you be available?','Am Montagvormittag, wenn möglich.','On Monday morning, if possible.','Replace the day or time with one that suits you.'],
 ['Worum geht es?','What is it about?','Es geht um eine Beratung.','It’s about a consultation.','State the real reason for your appointment; this is one example.'],
 ['Wie ist Ihr Name?','What is your name?','Mein Name ist Abdullah.','My name is Abdullah.','Replace Abdullah with your name. You might then be asked to spell it.']
 ]
].map(items=>items.map(([de,en,response,translation,note])=>({de,en,response,translation,note})));
