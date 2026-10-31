export const lessons = [
 ['A coffee, please','At the café','Ich hätte gern einen Cappuccino, bitte.','I’d like a cappuccino, please.','A friendly, polite way to order almost anything.','Cappuccino','Kaffee · coffee|bitte · please|gern · gladly','Guten Morgen! Was darf’s sein?'],
 ['Something fresh','At the bakery','Ich nehme zwei Brötchen, bitte.','I’ll take two bread rolls, please.','Use Ich nehme when you have made your choice.','Brötchen','zwei · two|Brötchen · bread roll|nehmen · to take','Guten Tag! Was möchten Sie?'],
 ['Finding what you need','At the supermarket','Entschuldigung, wo finde ich die Milch?','Excuse me, where can I find the milk?','A little Entschuldigung makes asking for help easy.','Milch','wo · where|Milch · milk|finden · to find','Hallo! Kann ich Ihnen helfen?'],
 ['The right direction','On public transport','Fährt dieser Zug zum Alexanderplatz?','Does this train go to Alexanderplatz?','Fährt works for trains, buses and trams.','Alexanderplatz','Zug · train|fahren · to travel|dieser · this','Guten Tag! Wohin möchten Sie?'],
 ['A new connection','Meeting someone','Hallo, ich heiße Abdullah. Und du?','Hi, my name is Abdullah. And you?','Use du for a relaxed introduction to a peer.','heiße','heißen · to be called|und · and|du · you','Hallo! Ich bin Anna. Wie heißt du?'],
 ['A little slower','Asking for help','Können Sie das bitte wiederholen?','Could you repeat that, please?','You can ask for repetition at any level.','wiederholen','können · can|wiederholen · repeat|langsam · slowly','Die nächste Haltestelle ist am Marktplatz.'],
 ['How much is it?','Paying in a shop','Wie viel kostet das?','How much does that cost?','Point to an item and ask this simple question.','kostet','wie viel · how much|kosten · cost|das · that','Gefällt Ihnen das?'],
 ['A table for two','At a restaurant','Haben Sie einen Tisch für zwei?','Do you have a table for two?','Use Sie when speaking politely to restaurant staff.','Tisch','Tisch · table|für · for|haben · have','Guten Abend! Haben Sie reserviert?'],
 ['Nice to meet you','With a neighbour','Ich wohne seit Kurzem hier.','I’ve been living here for a short time.','A natural way to introduce yourself in your building.','wohne','wohnen · live|hier · here|seit Kurzem · recently','Hallo! Sind Sie neu hier?'],
 ['Making an appointment','On the phone','Ich möchte einen Termin vereinbaren.','I’d like to make an appointment.','A useful opening for an office or practice.','Termin','Termin · appointment|möchten · would like|vereinbaren · arrange','Guten Tag! Was kann ich für Sie tun?'],
].map((x,i)=>({id:i,title:x[0],context:x[1],de:x[2],en:x[3],tip:x[4],keyword:x[5],words:x[6].split('|'),opening:x[7]}));
export const scenarios = [
 {name:'A corner café',place:'EVERYDAY ESSENTIALS',icon:'☕',lesson:0,desc:'A warm welcome. Your usual coffee. A little German.',color:'peach'},
 {name:'The neighbourhood bakery',place:'EVERYDAY ESSENTIALS',icon:'🥐',lesson:1,desc:'Fresh Brötchen and a friendly exchange.',color:'sage'},
 {name:'A quick grocery run',place:'EVERYDAY ESSENTIALS',icon:'🛒',lesson:2,desc:'Find what you need and ask for a little help.',color:'blue'},
 {name:'Your next stop',place:'GETTING AROUND',icon:'🚋',lesson:3,desc:'Find the right train with confidence.',color:'blue'},
 {name:'Someone new',place:'MAKING CONNECTIONS',icon:'👋',lesson:4,desc:'Turn a simple hello into a conversation.',color:'peach'},
];
export type Attempt = {lesson:number;text:string;success:boolean;at:string};
export type Memory = {completed:number[];saved:number[];attempts:Attempt[];reviews:Record<string,{due:string;interval:number;successes:number}>;onboarded:boolean;minutes:number;comfort:string;goal:string};
export const initialMemory:Memory={completed:[],saved:[],attempts:[],reviews:{},onboarded:false,minutes:10,comfort:'Know a few words',goal:'Everyday life'};
export function assess(text:string,keyword:string){return text.toLocaleLowerCase('de').normalize('NFKC').includes(keyword.toLocaleLowerCase('de'));}
export function schedule(previous:Memory['reviews'][string]|undefined,success:boolean,now=new Date()){const interval=success?(previous?Math.min(90,Math.max(1,previous.interval*2)):1):0;return {interval,successes:(previous?.successes??0)+(success?1:0),due:new Date(now.getTime()+(success?interval*86400000:600000)).toISOString()};}
