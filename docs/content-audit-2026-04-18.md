# Innehållsgranskning för graviddoktor.se

Datum: 2026-04-18

Syfte: Detta dokument sammanfattar prioriterade innehållsproblem på sajten och föreslår nya formuleringar som minskar risken för fel, motsägelser eller vilseledande tolkning.

## Prioritering

### Kritisk

1. AD 2025 nr 57 beskrivs för brett och med fel rättslig innebörd.
   Berörda filer:
   - `src/pages/FAQ.jsx`
   Problem:
   - Texten tillskriver domen att den i sig ger retroaktiv kompensation inklusive jour- och beredskapsersättning för perioden 2015-08-19 till 2025-08-19.
   - Det är missvisande. Domen gällde två gravida lärare hos offentliga arbetsgivare. Retroaktiv ersättning i kommun- och regionsektorn följer av senare partsöverenskommelser och facklig tillämpning, inte av själva domens ordalydelse.
   Ny formulering:
   - "Du kan få graviditetspenning från Försäkringskassan vid arbetsförbud på grund av arbetsmiljörisk. För offentliga arbetsgivare har AD 2025 nr 57 stärkt argumentet för att den gravida inte ska förlora inkomst vid sådana förbud. I kommun- och regionsektorn har frågan därefter också hanterats genom partsöverenskommelser om kompletterande ersättning. Kontrollera därför alltid vad som gäller hos just din arbetsgivare och under vilken tidsperiod."

2. Omvänd bevisbörda kopplas till fel paragraf i föräldraledighetslagen.
   Berörda filer:
   - `src/pages/Foraldra.jsx`
   - `src/pages/FAQ.jsx`
   - `src/pages/Resurser.jsx`
   Problem:
   - Sajten kopplar omvänd bevisbörda till `16 § FLL`.
   - `16 §` reglerar missgynnandeförbudet. Bevislättnadsregeln finns i `24 §`.
   Ny formulering:
   - "16 § föräldraledighetslagen förbjuder missgynnande av skäl som har samband med föräldraledighet. Om det uppstår tvist gäller bevislättnadsregeln i 24 §: om arbetstagaren visar omständigheter som ger anledning att anta ett sådant samband, måste arbetsgivaren visa att missgynnande inte skett eller att åtgärden varit en nödvändig följd av ledigheten."

3. Nattarbete i jourverksamhet sägs vara explicit upptaget i AFS 2023:2 bilaga 1.
   Berörda filer:
   - `src/pages/Arbetsmiljo.jsx`
   - `src/pages/FAQ.jsx`
   Problem:
   - Jag hittar inte denna exakta formulering i bilaga 1.
   - AFS 2023:2 innehåller däremot en uttrycklig regel om nattarbete när läkarintyg anger att det skulle vara skadligt.
   Ny formulering:
   - "Nattarbete kan vara en central del av den individuella riskbedömningen under graviditet. Enligt AFS 2023:2 får arbetsgivaren inte sysselsätta en gravid i nattarbete om läkarintyg anger att det skulle vara skadligt för arbetstagarens hälsa eller säkerhet. Därutöver kan jour- och nattbelastning behöva anpassas tidigare, men det bygger då på individuell riskbedömning och lokal tillämpning snarare än en generell automatik."

4. CAMM beskrivs för generellt som remissfri resurs för alla gravida i Region Stockholm.
   Berörda filer:
   - `src/pages/Kontakt.jsx`
   - `src/pages/Resurser.jsx`
   - `src/pages/Arbetsmiljo.jsx`
   Problem:
   - CAMM:s egen information är mer begränsad än sajtens formulering.
   Ny formulering:
   - "CAMM ger kostnadsfri rådgivning till gravida som är skrivna i Region Stockholm eller Gotland. För gravida som saknar tillgång till företagshälsovård behövs ingen remiss. I andra fall bör arbetsgivaren i första hand koppla in företagshälsovården."

### Viktig

5. "Utan anmälan — inget särskilt skydd" är för kategoriskt.
   Berörda filer:
   - `src/pages/Arbetsmiljo.jsx`
   - `src/pages/FAQ.jsx`
   Problem:
   - Formuleringen kan tolkas som att arbetsgivaren saknar ansvar tills skriftlig anmälan gjorts.
   Ny formulering:
   - "De individuella graviditetsspecifika åtgärderna aktualiseras i praktiken när arbetsgivaren fått besked om graviditeten. Därför är det klokt att meddela arbetsgivaren tidigt, särskilt i riskmiljöer. Samtidigt ska arbetsgivaren redan i förväg ha kartlagt risker för gravida i verksamheten."

6. Sajten framstår som allmängiltig för "läkare i Stockholm" men innehållet gäller främst regionanställda läkare.
   Berörda filer:
   - `src/pages/Hero.jsx`
   Problem:
   - Avgränsningen är för otydlig.
   Ny formulering:
   - "Den här guiden är i första hand skriven för läkare som är anställda i Region Stockholm. För privata arbetsgivare, bemanningsanställningar, kombinationsanställningar och arbete utanför regionens avtalsområde kan villkor och processer skilja sig."

7. Flera råd presenteras som bindande regler trots att källorna beskriver praxis eller försiktighetslinje.
   Berörda filer:
   - `src/pages/Arbetsmiljo.jsx`
   Problemområden:
   - CMV
   - parvovirus B19
   - varicella/mässling och FFP3
   - formalin
   - bencement
   - hot och våld
   Ny princip för omskrivning:
   - Byt "ska" mot "bör", "kan behöva", "är ofta en rimlig åtgärd", "kräver individuell bedömning".
   Exempel:
   - Nuvarande typ: "Gravid patolog ska inte utföra makroskopiska snittningar."
   - Föreslagen typ: "Vid arbete med formalin eller annan reproduktionstoxisk exponering bör gravid patolog få en tydlig individuell bedömning; i praktiken innebär det ofta att makroskopiska moment och arbete vid fixeringsbänk tas bort."

8. Pensionspåståenden är onödigt absoluta.
   Berörda filer:
   - `src/pages/Foraldra.jsx`
   - `src/pages/FAQ.jsx`
   Problem:
   - "under hela föräldraledigheten" låter mer kategoriskt än källstödet motiverar.
   Ny formulering:
   - "Region Stockholm anger att tjänstepensionsavsättning normalt fortsätter även under föräldraledighet. Exakta villkor bör dock kontrolleras mot aktuell pensionslösning och arbetsgivarens information."

9. "Primärkällor" används om en blandning av primärkällor och sekundärkällor.
   Berörda filer:
   - `src/pages/Resurser.jsx`
   Problem:
   - Fackliga guider och myndighetssidor blandas ihop med lagtext och föreskrift.
   Ny formulering:
   - "Källor och vidare läsning: lagtext, föreskrifter, myndighetsinformation och fackliga guider."

10. FAQ lovar källhänvisning men visar inte källor.
   Berörda filer:
   - `src/pages/FAQ.jsx`
   Problem:
   - Det signalerar högre verifieringsgrad än användaren faktiskt ser.
   Ny formulering:
   - "Frågor som läkarföreningar, skyddsombud och studierektorer får återkommande — sammanställda utifrån lag, föreskrifter, kollektivavtal och offentliga vägledningar."

### Förbättring

11. Tidslinje- och processdelarna anger många exakta tidsfrister som ser lagstadgade ut.
   Berörda filer:
   - `src/pages/Arbetsmiljo.jsx`
   - `src/pages/Tidslinje.jsx`
   Problem:
   - Exempel: möte "inom en vecka", revidering "per trimester", ny riskbedömning "minst 2–4 veckor före".
   Ny princip:
   - Märk detta som rekommenderad arbetsgång, inte som bindande rätt.
   Ny formulering:
   - "En praktisk och rättssäker arbetsgång är att..."

12. Ord som "absolut", "ovillkorlig", "inget skydd", "hela", "måste" används för ofta.
   Berörda filer:
   - hela sajten, särskilt `Arbetsmiljo.jsx` och `Foraldra.jsx`
   Ny princip:
   - Reservera absoluta ord för ren lagtext med klart stöd.
   Ersättningar:
   - `absolut förbud` -> `uttryckligt förbud enligt föreskrift`
   - `ovillkorlig rätt` -> `stark rätt enligt lag`
   - `inget särskilt skydd` -> `svårare att utlösa de individuella skyddsåtgärderna`
   - `hela föräldraledigheten` -> `normalt även under föräldraledigheten`

## Föreslagna nya ingress- och disclaimertrexter

### Startsidans manifest

Nuvarande problem:
- Sajten låter som en slutlig auktoritativ rättskälla.

Föreslagen text:

"Det är ofta svårt att få en tydlig bild av vad som gäller vid graviditet och föräldraskap i läkaryrket. Den här guiden samlar lagregler, myndighetsinformation, kollektivavtal och praktiska erfarenheter för läkare som i första hand är anställda i Region Stockholm. Där rättsläget är lokalt, avtalsbundet eller beroende av individuell riskbedömning försöker guiden ange det uttryckligen."

### Kort disclaimer i anslutning till startsidan eller sidfoten

Föreslagen text:

"Guiden är ett arbetsmaterial och inte juridisk rådgivning eller medicinsk individuell bedömning. Uppgifter om arbetsmiljö, ersättning och lokala rutiner bör kontrolleras mot aktuell lagtext, arbetsgivare, Försäkringskassan, facklig rådgivning och vid behov företagshälsovård eller arbets- och miljömedicinsk expertis."

## Omskrivningsförslag per sida

### `src/pages/Hero.jsx`

Nuvarande kärnproblem:
- För bred målgrupp.

Föreslagen huvudtext:

"Det är svårt att hitta samlad och tillförlitlig information om vad som gäller när man är gravid eller nybliven förälder i läkaryrket. Den här guiden samlar regler, vägledningar och praktiska frågor för läkare som framför allt är anställda i Region Stockholm: från riskbedömning och arbetsanpassning till föräldraledighet, ersättning och återgång i arbete."

Tillägg direkt under:

"För privata arbetsgivare, bemanningsanställningar, kombinationsanställningar och andra regioner kan delar av innehållet skilja sig."

### `src/pages/Arbetsmiljo.jsx`

#### Om anmälan

Föreslagen text:

"När arbetsgivaren fått besked om graviditeten ska en individuell riskbedömning göras skyndsamt. Därför är det klokt att meddela graviditeten tidigt, särskilt i miljöer med strålning, smittrisk, kemikalier eller tung jourbelastning. Samtidigt ska arbetsgivaren redan i förväg ha kartlagt risker för gravida i verksamheten."

#### Om biologiska risker

Föreslagen ingress:

"Vissa smittämnen omfattas av uttryckliga förbud i föreskriften, medan andra kräver individuell bedömning utifrån exponeringens art, grad och varaktighet. I klinisk vardag bör därför både immunitetsstatus, arbetsmoment och lokala skyddsrutiner vägas in."

#### Om varicella/mässling

Föreslagen text:

"Vid misstänkt eller känd exponering för mässling eller vattkoppor hos icke-immun gravid personal är försiktighetslinjen i praktiken ofta mycket restriktiv. Även om skyddsutrustning minskar risk bör arbetsgivaren normalt planera bort sådan exponering snarare än förlita sig enbart på FFP3."

#### Om strålning

Föreslagen text:

"Strålskyddslagen ger ett starkt skydd. Efter att graviditeten anmälts ska arbetet planeras så att fosterdosen blir så låg som möjligt och inte förväntas överstiga 1 mSv under återstoden av graviditeten. Om den gravida begär det ska arbetsgivaren erbjuda arbetsuppgifter som inte innebär exponering utöver allmänhetens nivåer."

#### Om nattarbete

Föreslagen text:

"Nattarbete bör vara en central fråga i riskbedömningen för gravida läkare med jour eller nattpass. Enligt AFS 2023:2 får arbetsgivaren inte sysselsätta en gravid i nattarbete om läkarintyg anger att det skulle vara skadligt för hälsa eller säkerhet. Även utan ett sådant intyg kan jour- och nattbelastning behöva anpassas utifrån den individuella riskbedömningen."

#### Om jourbefrielse i Region Stockholm

Föreslagen text:

"Läkarförbundet beskriver att det finns lokala kollektivavtal som kan ge tidigare jourbefrielse än de centrala reglerna. För Region Stockholm bör detta därför beskrivas som ett lokalt avtals- och tillämpningsspår som ska verifieras med lokal läkarförening eller HR, inte som en universell regel utan kontroll."

### `src/pages/Foraldra.jsx`

#### Om ersättningsnivå

Föreslagen ingress:

"För regionanställda läkare kan kombinationen av föräldrapenning, föräldrapenningtillägg och föräldralön i många fall ge en ersättningsnivå nära 90 procent under delar av ledigheten. Den faktiska nivån beror dock på lön, uttag, kollektivavtal och arbetsgivarens tillämpning."

#### Om pension

Föreslagen text:

"Region Stockholm anger att tjänstepensionsavsättning normalt fortsätter även under föräldraledighet. Eftersom villkoren kan bero på pensionsavtal och anställningsform bör uppgiften kontrolleras mot aktuell pensionsinformation."

#### Om återgång och missgynnande

Föreslagen text:

"Efter föräldraledigheten har du rätt att återgå till samma arbete eller ett likvärdigt arbete. Missgynnande av skäl som har samband med föräldraledighet är förbjudet enligt 16 § föräldraledighetslagen. Om en tvist uppstår gäller bevislättnadsregeln i 24 §."

#### Om lokala variationer

Föreslagen text:

"Grundreglerna är i huvudsak gemensamma, men offentligt publicerad information från olika verksamheter är inte alltid harmoniserad. Därför bör uppgifter om kvalifikationstid, föräldralön och lokala rutiner verifieras med HR eller lokalförening innan de används för ekonomisk planering."

### `src/pages/FAQ.jsx`

Redaktionell princip:
- FAQ ska vara kortare, mindre kategorisk och ange när svar bygger på lokal praxis.

Exempel på omskrivet svar om nattarbete:

"Du kan ofta få nattarbete borttaget eller minskat under graviditeten, men grunden ser olika ut beroende på situation. Om läkarintyg visar att nattarbete är skadligt får arbetsgivaren inte sysselsätta dig i nattarbete. Även utan intyg kan natt- och jourbelastning behöva anpassas inom ramen för den individuella riskbedömningen."

Exempel på omskrivet svar om arbetsförbudsersättning:

"Vid arbetsförbud på grund av arbetsmiljörisk kan du få graviditetspenning från Försäkringskassan. För offentliga arbetsgivare har rättsläget stärkts genom AD 2025 nr 57, och i kommun- och regionsektorn finns dessutom senare överenskommelser om kompletterande ersättning i vissa situationer. Kontrollera därför alltid vad som gäller hos just din arbetsgivare och för vilken period."

Exempel på omskrivet svar om mödravårdsbesök:

"I kommun- och regionsektorn finns kollektivavtalsregler om ledighet med lön för ett begränsat antal besök på barnmorskemottagning. Kontrollera den exakta lokala tillämpningen och om förmånen gäller dig och den andra föräldern i din anställningsform."

### `src/pages/Resurser.jsx`

Ny rubriktext:

"Källor och vidare läsning: lagtext, föreskrifter, myndighetsinformation och fackliga guider."

Ny gruppering rekommenderas:
- Lag och föreskrift
- Myndighetsinformation
- Facklig vägledning
- Regionala stödresurser

## Praktisk åtgärdslista för publicering

1. Rätta de kritiska sakfelen först.
2. Lägg in tydlig avgränsning på startsidan.
3. Lägg in en kort disclaimer i sidfot eller nära ingress.
4. Märk vad som är lag, vad som är avtal och vad som är praxis.
5. Lägg källmarkering direkt vid högriskpåståenden.
6. Gå igenom texten och byt ut överdrivet absoluta ord.
7. Gör en sista kontroll av alla lokala Region Stockholm-uppgifter mot aktuell offentlig eller intern källa.

## Rekommenderad redaktionell standard framåt

- Skriv "enligt lag/föreskrift" endast när påståendet är direkt verifierat.
- Skriv "enligt kollektivavtal" endast när avtalsstöd finns.
- Skriv "i praktiken", "ofta", "kan", "bör" när det handlar om praxis eller försiktighetslinje.
- Undvik medicinskt tvärsäkra formuleringar utan tydlig källa.
- Sätt datum på lokalt känsliga uppgifter.
- Ange när en uppgift behöver verifieras med HR, fack eller Försäkringskassan.
