import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Stotras data in all three languages with correct traditional names
const stotrasData = {
  en: {
    mantras: [
      {
        name: "Eka Sloki Bhagavadgita",
        text: `yatra yogeśvaraḥ kṛiṣhṇo yatra pārtho dhanurdharaḥ |
tatra śrīrvijayo bhūtirdhruvā nītirmatirmama ||`,
        meaning: "This single verse, the final one of the Gita, encapsulates its core message. It states that wherever there is Krishna, the Lord of Yoga, and Arjuna, the supreme archer (representing the dedicated devotee), there will surely be prosperity, victory, divine glory, and unwavering morality. It is a promise of success for those who align their actions with divine will."
      },
      {
        name: "Eka Sloki Bhagavatam",
        text: `ādau devakīdevigarbhajananaṃ gopīgṛhe vardhanam
māyāpūtanajīvitāpaharaṇaṃ govardhanoddhāraṇam |
kansacchedanakauravādihananaṃ kuntīsutāpālanam
etadbhāgavataṃ purāṇakathitaṃ śrīkṛṣṇalīlāmṛtam ||`,
        meaning: "This verse summarizes the essence of the Srimad Bhagavatam by recounting the key divine plays (lilas) of Lord Krishna. It mentions His birth to Devaki, being raised in the house of the Gopis, taking the life of the demoness Putana, lifting the Govardhan hill, slaying Kamsa, destroying the Kauravas, and protecting the sons of Kunti. It celebrates these acts as the immortal nectar of Krishna's story."
      },
      {
        name: "Eka Sloki Bharatam",
        text: `ādau pāṇḍavadhārtarāṣṭrajananaṃ lākṣāgṛhe dāhanaṃ
dyūte śrīharaṇaṃ vane vicaraṇaṃ tatsaṃkhyāpūraṇam |
paścādbhīṣmavarṇanaṃ ca samare paścācca karṇāhvayaṃ
paścācchalyavimardanaṃ ca subalaputrasya paścādvadham ||`,
        meaning: "This single verse provides a concise summary of the entire Mahabharata epic. It lists the key events in chronological order: the birth of the Pandavas and Kauravas, the burning of the lacquer house, the loss of wealth in the dice game, the exile in the forest, the great war featuring Bhishma and Karna, the defeat of Shalya, and finally, the slaying of Shakuni (son of Subala)."
      },
      {
        name: "Achyutashtakam",
        text: `acyutaṁ keśavaṁ rāmanārāyaṇaṁ
kṛṣṇadāmodaraṁ vāsudevaṁ harim |
śrīdharaṁ mādhavaṁ gopikāvallabhaṁ
jānakīnāyakaṁ rāmacandraṁ bhaje || 1 ||
acyutaṁ keśavaṁ satyabhāmādhavaṁ
mādhavaṁ śrīdharaṁ rādhikārādhitam |
indirāmandiraṁ cetasā sundaraṁ
devakīnandanaṁ nandajaṁ sandadhe || 2 ||
viṣṇave jiṣṇave śaṅkhine cakriṇe
rukmiṇīrāgiṇe jānakījānaye |
ballavīvallabhāyārcitāyātmane
kaṃsavidhvaṃsine vaṃśine te namaḥ || 3 ||
kṛṣṇa govindā he rāma nārāyaṇa
śrīpate vāsudevājita śrīnidhe |
acyutānanta he mādhavādhokṣaja
dvārakānāyaka draupadīrakṣaka || 4 ||
rākṣasākṣobhitaḥ sītayā śobhito
daṇḍakāraṇyabhūpuṇyatākāraṇaḥ |
lakṣmaṇenānvito vānaraiḥ sevito-
'gastasaṃpūjito rāghavaḥ pātu mām || 5 ||
dhenukāriṣṭako'niṣṭakṛddveṣiṇāṃ
keśihā kaṃsahṛdvaṃśikāvādakaḥ |
pūtanākopanaḥ sūrajākhelano
bālagopālakaḥ pātu mām sarvadā || 6 ||
vidyududdyotavatprasphuradvāsasaṃ
prāvṛḍambhodavatprollasadvigraham |
vanyayā mālayā śobhitoraḥsthalaṃ
lohitāṅghridvayaṃ vārijākṣaṃ bhaje || 7 ||
kuñcitaiḥ kuntalairbhrājamānānanaṃ
ratnamauliṃ lasatkuṇḍalaṃ gaṇḍayoḥ |
hārakeūrakaṃ kaṅkaṇaprojjvalaṃ
kiṅkiṇīmañjulaṁ śyāmalaṃ taṃ bhaje || 8 ||
acyutasyāṣṭakaṃ yaḥ paṭhediṣṭadaṃ
premataḥ pratyahaṃ pūruṣaḥ saspṛham |
vṛttataḥ sundaraṁ kartṛviśvambharaṃ
tasya vaśyo harirjāyate satvaram || 9 ||`,
        meaning: "Composed by Adi Shankaracharya, this hymn is a prayer to Lord Vishnu by chanting His various divine names, primarily from His incarnations as Krishna and Rama. Each verse adores names like Achyuta (the infallible), Keshava, Damodara, and Rama, invoking the Lord's divine attributes and seeking His protection and grace. It beautifully merges the worship of both major avatars."
      },
      {
        name: "Madhurashtakam",
        text: `adharaṁ madhuraṁ vadanaṁ madhuraṁ
nayanaṁ madhuraṁ hasitaṁ madhuram |
hṛdayaṁ madhuraṁ gamanaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 1 ||
vacanaṁ madhuraṁ caritaṁ madhuraṁ
vasanaṁ madhuraṁ valitaṁ madhuram |
calitaṁ madhuraṁ bhramitaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 2 ||
veṇurmadhuro reṇurmadhuraḥ
pāṇirmadhuraḥ pādau madhurau |
nṛtyaṁ madhuraṁ sakhyaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 3 ||
gītaṁ madhuraṁ pītaṁ madhuraṁ
bhuktaṁ madhuraṁ suptaṁ madhuram |
rūpaṁ madhuraṁ tilakaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 4 ||
karaṇaṁ madhuraṁ taraṇaṁ madhuraṁ
haraṇaṁ madhuraṁ ramaṇaṁ madhuram |
vamitaṁ madhuraṁ śamitaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 5 ||
guñjā madhurā mālā madhurā
yamunā madhurā vīcī madhurā |
salilaṁ madhuraṁ kamalaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 6 ||
gopī madhurā līlā madhurā
yuktaṁ madhuraṁ muktaṁ madhuram |
dṛṣṭaṁ madhuraṁ śiṣṭaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 7 ||
gopā madhurā gāvō madhurā
yaṣṭirmadhurā sṛṣṭirmadhurā |
dalitaṁ madhuraṁ phalitaṁ madhuraṁ
madhurādhipaterakhilaṁ madhuram || 8 ||`,
        meaning: "This hymn, composed by Sri Vallabhacharya, is a profound meditation on the all-encompassing sweetness of Lord Krishna. Each verse repeats the refrain 'madhurādhipaterakhilaṁ madhuram,' meaning 'everything is sweet about the Lord of Sweetness.' It describes how every aspect of Krishna—His lips, face, eyes, actions, companions, and even the dust on His feet—is imbued with divine sweetness (madhurya)."
      },
      {
        name: "Sri Radha Kavacham",
        text: `pārvatyuvāca –
kailāsaśikharārūḍhaṃ devadevaṃ jagadgurum |
śaṅkaraṃ paripapraccha pārvatī parameśvaram || 1 ||
bhagavan devadeveśa surāsura namaskṛta |
tvattaḥ śrutāni sarvāṇi tantrāṇi bahuśo mayā |
śrotumicchāmi devesa rādhikākavacaṃ prabho || 2 ||
śrī mahādeva uvāca –
śṛṇuṣva parama prītyā pārvatī praṇayāditaḥ |
atiguhyataraṃ devi kavacaṃ devadurlaabham || 3 ||
prāṇebhyo'pi priyataraṃ kavacaṃ manmukhoditam |
yasyāḥ prasādāt kṛṣṇo'pi golokeśvara īśvaraḥ |
yasyāḥ prasādādahamapi trailokyavijayī prabhuḥ || 4 ||
śiraḥ pātu sadā rādhā kṛṣṇaprāṇādhikā priyā |
lalāṭaṃ pātu me rādhā kṛṣṇasaṃmohinī sadā || 5 ||
netre pātu sadā rādhā kṛṣṇānandadāyinī |
karṇau pātu sadā rādhā gokulānandadāyinī || 6 ||
nāsikāṃ pātu me rādhā kṛṣṇabhaktipradāyinī |
gaṇḍaṃ pātu sadā rādhā gokulānandadāyinī || 7 ||
dantān pātu sadā rādhā kṛṣṇacarcitavigrahā |
oṣṭhaṃ pātu sadā rādhā gopikānandadāyinī || 8 ||
jihvāṃ pātu sadā rādhā kṛṣṇavākpravartinī |
cibukaṃ pātu me rādhā yāminīśvarapūjitā || 9 ||
galāṃ pātu sadā rādhā vṛṣabhānusutā priyā |
skandhau pātu sadā rādhā kṛṣṇotsaṅgavihāriṇī || 10 ||
bhujau pātu sadā rādhā kṛṣṇakrīḍāpravartinī |
hastau pātu sadā rādhā haripriyā haripradā || 11 ||
vakṣaḥsthalaṃ ca me pātu rādhā vāmeśa saṃsthitā |
udarāṃ pātu me rādhā kṛṣṇakukṣigṛhasthitā || 12 ||
pṛṣṭhaṃ pātu sadā rādhā vrajamaṅgaladāyinī |
kaṭiṃ pātu sadā rādhā kṛṣṇasaṃmohinī parā || 13 ||
ūrū pātu sadā rādhā kṛṣṇānandadāyinī |
jānunī pātu me rādhā kṛṣṇabhaktipradāyinī || 14 ||
jaṅghe pātu sadā rādhā kṛṣṇacittavinodinī |
gulphau pātu sadā rādhā kṛṣṇānandadadāyinī || 15 ||
pādau pātu sadā rādhā harisaṅginī śobhanā |
sarvāṅgaṃ pātu me rādhā kṛṣṇaprāṇādhikā priyā || 16 ||
idaṃ tu kavacaṃ guhyaṃ mayā tava prakāśitam |
yaḥ paṭhet prātarutthāya trikālaṃ vā samāhitaḥ |
sa bhavet kṛṣṇatulyaśca tejasā rūpayauvanaiḥ |
putravān dhanavān śrīmān kīrtimān manujarājake || 17 ||`,
        meaning: "This stotra is a 'Kavacham' or divine armor, revealed by Lord Shiva to Goddess Parvati. It is a powerful prayer seeking the protection of Sri Radha. Each verse invokes Radha to protect a specific part of the devotee's body, from head to toe. Chanting this Kavacham is believed to bestow divine protection, spiritual strength, and closeness to both Radha and Krishna."
      },
      {
        name: "Sri Krishna Ashtakam",
        text: `bhaje vrajaikamaṇḍanaṃ samastapāpakhaṇḍanaṃ
svabhaktacittarañjanaṃ sadaiva nandanandanam |
supicchagucchamastakaṃ sunādaveṇuhastakaṃ
anaṅgaraṅgasāgaraṃ namāmi kṛṣṇanāgaram || 1 ||
manoja garvamocanaṃ viśālalolalocanaṃ
didhūta gopaśocanaṃ namāmi padmalocanam |
karāravindabhūdharaṃ smitāvalokasundaraṃ
mahendramānadāraṇaṃ namāmi kṛṣṇavāraṇam || 2 ||
kadambasūnakundalaṃ sucārugaṇḍamaṇḍalaṃ
vrajāṅganaikavallabhaṃ namāmi kṛṣṇadurlabham |
yaśodayā samodayā sagopayā sanandayā
yutaṃ sukhaikadāyakaṃ namāmi gopanāyakam || 3 ||
sadaiva pādapaṅkajaṃ madīyamānasenijaṃ
dadhānamuttamālakaṃ namāmi nandabālakam |
samastadoṣaśoṣaṇaṃ samastalokapoṣaṇaṃ
samastagopamānasaṃ namāmi nandalālasam || 4 ||
bhuvobharāvatārakaṃ bhavābdhikarṇadhārakaṃ
yaśomatīkiśorakaṃ namāmi cittacorakam |
dṛgantakāntabhaṅginaṃ sadā sadālasaṅginaṃ
dine dine navaṃ navaṃ namāmi nandasambhavam || 5 ||
guṇākaraṃ sukhākaraṃ kṛpākaraṃ kṛpāparaṃ
suratviṣannikandanaṃ namāmi gopanandanam |
navīnagopanāgaraṃ navīnakelilampaṭaṃ
namāmi meghasundaraṃ taṭitprabhālasatpaṭam || 6 ||
samastagopakāntihaṃ dṛgambhujaiḥ samīhitaṃ
vilāsakāryakovidhaṃ namāmi kuñjanāgaram |
rudantamijñayā ciraṃ didṛkṣayottama śriyaḥ
vilokitaṃ dṛśādbhutaṃ namāmi kṛṣṇamiṣṭutam || 7 ||
praṇāmaduḥkhaśātanaṃ palāśanādidoṣaṇaṃ
haripriyaṃ yataḥ paraṃ namāmi kṛṣṇamīśvaram |
prapañcadoṣanāśanaṃ praṇamya pādapaṅkaje
nimajjatāṃ bhavārṇave namāmi kṛṣṇamarthadam || 8 ||
śrīkṛṣṇāṣṭakamidaṃ prātaḥ samutthāya yaḥ paṭhet |
koṭijanmakṛtaṃ pāpaṃ smaraṇena vinaśyati || 9 ||`,
        meaning: "This hymn in eight verses, composed by Adi Shankaracharya, is a beautiful adoration of Lord Krishna, the delighter of Nanda. Each stanza describes His divine form and playful nature: His peacock feather, flute, charming glances, and His role as the protector of the devotees. The Ashtakam celebrates Him as the one who destroys all sins and captivates the minds of the Gopis and all His followers."
      },
      {
        name: "Santana Gopala Stotram",
        text: `śrīśaṁ kamalapatrākṣaṁ devakīnandanaṁ harim |
sutasamprāptayē kṛṣṇaṁ namāmi madhusūdanam || 1 ||
namāmyahaṁ vāsudevaṁ sutasamprāptayē harim |
yaśodāṅkagataṁ bālaṁ gopālaṁ nandanandanam || 2 ||
asmākaṁ putralābhāya govindaṁ munivanditam |
vandē'haṁ vāsudevaṁ ca putralābhāya bhāvinī || 3 ||
gopālaṁ ḍimbhakaṁ vandē kamalāpatimacyutam |
putrasamprāptayē kr̥ṣṇaṁ namāmi yadupuṅgavam || 4 ||
putrakāmeṣṭiphaladaṁ kañjākṣaṁ kamalāpatim |
devakīnandanaṁ vandē suta samprāptayē mama || 5 ||
rukmṇīvallabhaṁ vande sutasamprāptaye harim |
satyaṁbhāmāpriyaṁ devaṁ devakīnandanaṁ harim || 6 ||
gopikāhṛdayānandaṁ gopālaṁ gopanandanam |
namāmi kṛṣṇagovindaṁ sutalābhāya kāmadam || 7 ||
hareracintyarūpasya dhyāyato me sutapradam |
govindasya priyasyāhaṁ nāmānyuccārayan priye || 8 ||
vāsudeva jagannātha śrīpate puruṣottama |
kṛṣṇa gopālavallēśa dēhi me tanayaṁ prabho || 9 ||
kañjākṣa kamalānātha paramātman janārdana |
dēhi me tanayaṁ kṛṣṇa vāsudeva jagatpate || 10 ||`,
        meaning: "This is a powerful prayer addressed to Lord Krishna in His form as Gopala, specifically seeking the blessing of a child (Santana). Each verse adores Krishna with His various names and attributes, like Devakinandana (son of Devaki) and Vasudeva, and repeatedly makes the appeal 'dehi me tanayam' (grant me a son/child). It is chanted by couples desiring offspring, with faith in Krishna's power to bestow this boon."
      },
      {
        name: "Sri Radha Krishna Stotram (Gandharva Krutam)",
        text: `vande navaghanasyamam pitakauseyavasasam |
sanandam sundaram suddham srikrsnam prakrteh param || 1 ||
radhesam radhikapranavallabham vallavisutam |
radhasevitapadabjam radhavaksahsthalasthitam || 2 ||
radhanugam radhikestam radhapahrtamanasam |
radhadharam bhavadharam sarvadharam namami tam || 3 ||
radhahrtpadmamadhye ca vasantam satatam subham |
radhasahacaram sasvadradhajnaparipalakam || 4 ||
dhyayante yogino yogan siddhah siddhesvarasca yam |
tam dhyayet satatam suddham bhagavantam sanatanam || 5 ||
sevente satatam santo:'sesabrahmessasamjnikah |
sevente nirgunam brahma bhagavantam sanatanam || 6 ||
nirliptam ca niriham ca paramatmanam-isvaram |
nityam satyam ca paramam bhagavantam sanatanam || 7 ||
yam srsteradibhutam ca sarvabijam paratparam |
yoginastam prapadyante bhagavantam sanatanam || 8 ||
bijam nanavatararam sarvakaranakaranam |
vedavedyam vedabijam vedakaranakaranam || 9 ||
yoginastam prapadyante bhagavantam sanatanam |
gandharvena krtam stotram yam pathet prayatah sucih |
ihaiva jivanmuktasca param yati param gatim || 10 ||
haribhaktim harerdasyam golokam ca niramayam |
parsadapravaratvam ca labhate na'tra samsayah || 11 ||`,
        meaning: "This stotram, said to be composed by a Gandharva (a celestial musician), is a beautiful prayer that worships Lord Krishna through his inseparable relationship with Sri Radha. It addresses Him with names like 'Radhesha' (Lord of Radha) and 'Radhika-prana-vallabham' (the beloved of Radha's life-breath). It emphasizes that Krishna resides in Radha's heart and is worshipped by great yogis and saints as the eternal, supreme Lord."
      },
      {
        name: "Gopala Vimshati",
        text: `śrīmānvēṅkaṭanāthāryaḥ kavitārkika kēsarī |
vēdāntācāryavaryō mē sannidhattāṁ sadā hṛdi ||
vandē br̥ndāvanacaraṁ vallavījanavallabham |
jayantīsambhavaṁ dhāma vaijayantīvibhūṣaṇam || 1 ||
vācaṁ nijāṅkarasikāṁ prasamīkṣamāṇō vaktrāravindavinivēśitapāñcajanyaḥ |
varṇatrikōṇarucirē varapuṇḍarīkē baddhāsanō jayati vallavacakravartī || 2 ||
āmnāyagandhiruditasphuritādharōṣṭhaṁ āsrāvilēkṣaṇamanukṣaṇamandahāsam |
gōpālaḍimbhavapuṣaṁ kuhanājananyāḥ prāṇastanandhayamavaimi paraṁ pumāṁsam || 3 ||
āvirbhavatvanibhr̥tābharaṇaṁ purastāt. ākuñcitaikacaraṇaṁ nibhr̥tānyapādam |
dadhnā nimanthamukharēṇa nibaddhatālaṁ nāthasya nandabhavanē navanītanāṭyam || 4 ||
hartuṁ kumbhe vinihitakaraḥ svādu haiyṅgavīnaṁ dṛṣṭvā dāma grahaṇacaṭulāṁ mātaraṁ jātarōṣām |
pāyāt kṛṣṇaḥ kapilakaruṇaḥ kiñcidākuñcitāṅghriḥ gōṣṭhī gōṣṭhē navanavaśiśuḥ kō'pi gōpālabālaḥ || 5 ||
vaktrānte navanītapāyasarasaṁ bāṣpāmbusammōhanaṁ vakṣasyunnatapāṇḍurōjjvalapadaṁ vakṣōjakuṅmāṅkitam |
svairaṁ sundaragōpanandanasudhaṁ dāsyaṁ gatā gōpikā dṛṣṭvā dāmaguṇairbaddhaṁ hariṁ gāyanti || 6 ||
paryāptāsanabandhamañcitapadaṁ bāhu dvayāntargataṁ bāhuṁ savyamupādadhatparikaraṁ vāmaṁ ca vātsalyataḥ |
karṇānte kṛpayā spṛśan jananīṁ krōdhāndhabuddhēḥ paraṁ prītyā pālayituḥ paraṁ puruṣaṁ vande jagatkāraṇam || 7 ||
paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām |
dharmasaṁsthāpanārthāya saṁbhavāmi yuge yuge || 8 ||
ākṛṣṭaḥ karapallavena jananīṁ krōdhāndhayā gōpayā dāmnā bandhamupāgataḥ kamalayā dṛṣṭaḥ smitāsyāmbujaḥ |
dṛṣṭvā vismayarūpamunnatatanuṁ gōvardhanōddhārakaṁ vande nandakumāramāryavapuṣaṁ gōpījanaprāṇadam || 9 ||
ēkaṁ hastamupādadhatparikaraṁ vāmaṁ ca vātsalyataḥ prītyā gōpikayā dṛtaḥ kamalayā dṛṣṭaḥ smitāsyāmbujaḥ |
vande nandakumāramāryavapuṣaṁ gōpījanaprāṇadaṁ bhaktaṁ pālayituṁ paraṁ puruṣaṁ vande jagatkāraṇam || 10 ||
prātaḥ smarāmi dadhimanthanamagnagōpīvaktrāravindamaṇikuṇḍalakāntidīptam |
ānandasāgaramajasramapārameyaṁ dhyeyaṁ sadā munigaṇairharimīśvaraṁ tam || 11 ||
prātarbhajāmi muralīpriyagōpanārīvṛndāvaneṣu viharantamajasramīḍyam |
satsaṅgamadhyagataṁ harimīśvaraṁ taṁ dhyeyaṁ sadā munigaṇairharimīśvaraṁ tam || 12 ||
prātarnamāmi yaśodāyāḥ sutaṁ dāmodaraṁ paraṁ vande gōpālabālaṁ taṁ dhyeyaṁ sadā munigaṇairharimīśvaraṁ tam || 13 ||
prātaruttiṣṭha gōvinda uttiṣṭha garuḍadhvaja |
uttiṣṭha kamalākānta trailokyaṁ maṅgalaṁ kuru || 14 ||
samudravasane devi parvatastanamaṇḍale |
viṣṇupatni namastubhyaṁ pādasparśaṁ kṣamasva me || 15 ||
kṛṣṇāya vāsudevāya haraye paramātmane |
praṇatakleśanāśāya govindāya namo namaḥ || 16 ||
karāravindena padāravindaṁ mukhāravinde viniveśayantam |
vaṭasya patrasya puṭe śayānaṁ bālaṁ mukundaṁ manasā smarāmi || 17 ||
śrīkṛṣṇa govindā hare murāre he nātha nārāyaṇa vāsudeva |
jihve pibasvāmṛtametadeva govindā dāmodara mādhaveti || 18 ||
vasudevasutaṁ devaṁ kaṁsacāṇūramardanam |
devakīparamānandaṁ kṛṣṇaṁ vande jagadgurum || 19 ||
gōpālaviṁśatirmayā paṭhitā yastu paṭhet prītyā sa gōpālasya priyō bhavet || 20 ||`,
        meaning: "Composed by the great philosopher Sri Vedanta Desika, this stotra of twenty verses ('Vimshati') is a sublime poetic description of Lord Gopala (Krishna). It paints vivid pictures of Krishna's childhood lilas, such as stealing butter, being playfully tied up by Mother Yashoda, and his divine beauty. The hymn meditates on both the playful, accessible form of baby Krishna and his supreme nature as the cause of the universe."
      }
    ]
  },
  hi: {
    mantras: [
      {
      name: "एकश्लोकी भगवद्गीता",
      text: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥",
      meaning: "यह एक श्लोक, जो गीता का अंतिम श्लोक है, इसके मूल संदेश को समाहित करता है। यह कहता है कि जहाँ भी योग के स्वामी कृष्ण हैं, और जहाँ परम धनुर्धर अर्जुन (समर्पित भक्त का प्रतीक) हैं, वहाँ निश्चित रूप से समृद्धि, विजय, दिव्य महिमा और अटूट नैतिकता होगी। यह उन लोगों के लिए सफलता का वचन है जो अपने कर्मों को दैवीय इच्छा के साथ जोड़ते हैं।"
    },
    {
      name: "एकश्लोकी भागवतम्",
      text: "आदौ देवकीदेविगर्भजननं गोपीगृहे वर्धनम्\nमायापूतनजीवितापहरणं गोवर्धनोद्धारणम् ।\nकंसच्छेदनकौरवादिहननं कुन्तीसुतापालनम्\nएतद्भागवतं पुराणकथितं श्रीकृष्णलीलामृतम् ॥",
      meaning: "यह श्लोक भगवान कृष्ण की प्रमुख दिव्य लीलाओं का वर्णन करके श्रीमद्भागवतम् के सार को सारांशित करता है। इसमें देवकी से उनके जन्म, गोपियों के घर में पालन-पोषण, राक्षसी पूतना के प्राण हरने, गोवर्धन पर्वत को उठाने, कंस का वध, कौरवों का विनाश और कुंती के पुत्रों की रक्षा का उल्लेख है। यह इन कृत्यों को कृष्ण की कहानी के अमर अमृत के रूप में मनाता है।"
    },
    {
      name: "एकश्लोकी भारतम्",
      text: "आदौ पाण्डवधार्तराष्ट्रजननं लाक्षागृहे दाहनं\nद्यूते श्रीहरणं वने विचरणं तत्संख्यापूरणम् ।\nपश्चाद्भीष्मवर्णनं च समरे पश्चाच्च कर्णाव्हयं\nपश्चाच्छल्यविमर्दनं च सुबलपुत्रस्य पश्चाद्वधम् ॥",
      meaning: "यह एक श्लोक संपूर्ण महाभारत महाकाव्य का संक्षिप्त सारांश प्रदान करता है। यह प्रमुख घटनाओं को कालानुक्रमिक क्रम में सूचीबद्ध करता है: पांडवों और कौरवों का जन्म, लाक्षागृह का दहन, द्यूत में धन की हानि, वन में निर्वासन, भीष्म और कर्ण की विशेषता वाला महान युद्ध, शल्य की हार, और अंत में शकुनि (सुबल के पुत्र) का वध।"
    },
    {
      name: "अच्युताष्टकम्",
      text: "अच्युतं केशवं रामनारायणं\nकृष्णदामोदरं वासुदेवं हरिम् ।\nश्रीधरं माधवं गोपिकावल्लभं\nजानकीनायकं रामचन्द्रं भजे ॥ १ ॥\nअच्युतं केशवं सत्यभामाधवं\nमाधवं श्रीधरं राधिकाराधितम् ।\nइन्दिरामन्दिरं चेतसा सुन्दरं\nदेवकीनन्दनं नन्दजं सन्दधे ॥ २ ॥\nविष्णवे जिष्णवे शङ्खिने चक्रिणे\nरुक्मिणीरागिणे जानकीजानये ।\nबल्लवीवल्लभायार्चितायात्मने\nकंसविध्वंसिने वंशिने ते नमः ॥ ३ ॥\nकृष्ण गोविन्दा हे राम नारायण\nश्रीपते वासुदेवाजित श्रीनिधे ।\nअच्युतानन्त हे माधवाधोक्षज\nद्वारकानायक द्रौपदीरक्षक ॥ ४ ॥\nराक्षसाक्षोभितः सीतया शोभितो\nदण्डकारण्यभूपुण्यताकारणः ।\nलक्ष्मणेनान्वितो वानरैः सेवितो-\nऽगस्तसम्पूजितो राघवः पातु माम् ॥ ५ ॥\nधेनुकारिष्टकोऽनिष्टकृद्द्वेषिणां\nकेशिहा कंसहृद्वंशिकावादकः ।\nपूतनाकोपनः सूरजाखेलनो\nबालगोपालकः पातु माम् सर्वदा ॥ ६ ॥\nविद्युदुद्द्योतवत्प्रस्फुरद्वाससं\nप्रावृडम्भोदवत्प्रोल्लसद्विग्रहम् ।\nवन्यया मालया शोभितोरःस्थलं\nलोहिताङ्घ्रिद्वयं वारिजाक्षं भजे ॥ ७ ॥\nकुञ्चितैः कुन्तलैर्भ्राजमानाननं\nरत्नमौलिं लसत्कुण्डलं गण्डयोः ।\nहारकेयूरकं कङ्कणप्रोज्ज्वलं\nकिङ्किणीमञ्जुलं श्यामलं तं भजे ॥ ८ ॥\nअच्युतस्याष्टकं यः पठेदिष्टदं\nप्रेमतः प्रत्यहं पूरुषः सस्पृहम् ।\nवृत्ततः सुन्दरं कर्तृविश्वम्भरं\nतस्य वश्यो हरिर्जायते सत्वरम् ॥ ९ ॥",
      meaning: "आदि शंकराचार्य द्वारा रचित यह भजन, भगवान विष्णु के विभिन्न दिव्य नामों, मुख्य रूप से उनके कृष्ण और राम के अवतारों के नामों का जप करके उनकी प्रार्थना है। प्रत्येक श्लोक अच्युत (अचूक), केशव, दामोदर और राम जैसे नामों की पूजा करता है, भगवान के दिव्य गुणों का आह्वान करता है और उनकी सुरक्षा और कृपा की मांग करता है। यह दोनों प्रमुख अवतारों की पूजा को खूबसूरती से विलीन करता है।"
    },
    {
      name: "मधुराष्टकम्",
      text: "अधरं मधुरं वदनं मधुरं\nनयनं मधुरं हसितं मधुरम् ।\nहृदयं मधुरं गमनं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ १ ॥\nवचनं मधुरं चरितं मधुरं\nवसनं मधुरं वलितं मधुरम् ।\nचलितं मधुरं भ्रमितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ २ ॥\nवेणुर्मधुरो रेणुर्मधुरः\nपाणिर्मधुरः पादौ मधुरौ ।\nनृत्यं मधुरं सख्यं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ३ ॥\nगीतं मधुरं पीतं मधुरं\nभुक्तं मधुरं सुप्तं मधुरम् ।\nरूपं मधुरं तिलकं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ४ ॥\nकरणं मधुरं तरणं मधुरं\nहरणं मधुरं रमणं मधुरम् ।\nवमितं मधुरं शमितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ५ ॥\nगुञ्जा मधुरा माला मधुरा\nयमुना मधुरा वीची मधुरा ।\nसलिलं मधुरं कमलं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ६ ॥\nगोपी मधुरा लीला मधुरा\nयुक्तं मधुरं मुक्तं मधुरम् ।\nदृष्टं मधुरं शिष्टं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ७ ॥\nगोपा मधुरा गावो मधुरा\nयष्टिर्मधुरा सृष्टिर्मधुरा ।\nदलितं मधुरं फलितं मधुरं\nमधुराधिपतेरखिलं मधुरम् ॥ ८ ॥",
      meaning: "श्री वल्लभाचार्य द्वारा रचित यह भजन, भगवान कृष्ण की सर्वव्यापी मधुरता पर एक गहरा ध्यान है। प्रत्येक श्लोक 'मधुराधिपतेरखिलं मधुरम्' का अनुगान करता है, जिसका अर्थ है 'माधुर्य के स्वामी के बारे में सब कुछ मधुर है।' यह वर्णन करता है कि कृष्ण का हर पहलू - उनके होंठ, चेहरा, आँखें, कर्म, साथी, और यहाँ तक कि उनके चरणों की धूल - दिव्य माधुर्य से ओतप्रोत है।"
    },
    {
      name: "श्री राधा कवचम्",
      text: "पार्वत्युवाच –\nकैलासशिखकारूढं देवदेवं जगद्गुरुम् ।\nशङ्करं परिपप्रच्छ पार्वती परमेश्वरम् ॥ १ ॥\nभगवन् देवदेवेश सुरासुर नमस्कृत ।\nत्वत्तः श्रुतानि सर्वाणि तन्त्राणि बहुशो मया ।\nश्रोतुमिच्छामि देवेस राधिकाकवचं प्रभो ॥ २ ॥\nश्री महादेव उवाच –\nशृणुष्व परम प्रीत्या पार्वती प्रणयादितः ।\nअतिगुह्यतरं देवि कवचं देवदुर्लभम् ॥ ३ ॥\nप्राणेभ्योऽपि प्रियतरं कवचं मन्मुखोदितम् ।\nयस्याः प्रसादात् कृष्णोऽपि गोलोकेश्वर ईश्वरः ।\nयस्याः प्रसादादहमपि त्रैलोक्यविजयी प्रभुः ॥ ४ ॥\nशिरः पातु सदा राधा कृष्णप्राणाधिका प्रिया ।\nललाटं पातु मे राधा कृष्णसम्मोहिनी सदा ॥ ५ ॥\nनेत्रे पातु सदा राधा कृष्णानन्ददायिनी ।\nकर्णौ पातु सदा राधा गोकुलानन्ददायिनी ॥ ६ ॥\nनासिकां पातु मे राधा कृष्णभक्तिप्रदायिनी ।\nगण्डं पातु सदा राधा गोकुलानन्ददायिनी ॥ ७ ॥\nदन्तान् पातु सदा राधा कृष्णचर्चितविग्रहा ।\nओष्ठं पातु सदा राधा गोपिकानन्ददायिनी ॥ ८ ॥\nजिह्वां पातु सदा राधा कृष्णवाक्प्रवर्तिनी ।\nचिबुकं पातु मे राधा यामिनीश्वरपूजिता ॥ ९ ॥\nगलां पातु सदा राधा वृषभानुसुता प्रिया ।\nस्कन्धौ पातु सदा राधा कृष्णोत्सङ्गविहारिणी ॥ १० ॥\nभुजौ पातु सदा राधा कृष्णक्रीडाप्रवर्तिनी ।\nहस्तौ पातु सदा राधा हरिप्रिया हरिप्रदा ॥ ११ ॥\nवक्षःस्थलं च मे पातु राधा वामेश संस्थिता ।\nउदरां पातु मे राधा कृष्णकुक्षिगृहस्थिता ॥ १२ ॥\nपृष्ठं पातु सदा राधा व्रजमङ्गलदायिनी ।\nकटिं पातु सदा राधा कृष्णसम्मोहिनी परा ॥ १३ ॥\nऊरू पातु सदा राधा कृष्णानन्ददायिनी ।\nजानुनी पातु मे राधा कृष्णभक्तिप्रदायिनी ॥ १४ ॥\nजङ्घे पातु सदा राधा कृष्णचित्तविनोदिनी ।\nगुल्फौ पातु सदा राधा कृष्णानन्दददायिनी ॥ १५ ॥\nपादौ पातु सदा राधा हरिसङ्गिनी शोभना ।\nसर्वाङ्गं पातु मे राधा कृष्णप्राणाधिका प्रिया ॥ १६ ॥\nइदं तु कवचं गुह्यं मया तव प्रकाशितम् ।\nयः पठेत् प्रातरुत्थाय त्रिकालं वा समाहितः ।\nस भवेत् कृष्णतुल्यश्च तेजसा रूपयौवनैः ।\nपुत्रवान् धनवान् श्रीमान् कीर्तिमान् मनुजराजके ॥ १७ ॥",
      meaning: "यह स्तोत्र एक 'कवच' या दिव्य कवच है, जिसे भगवान शिव ने देवी पार्वती को प्रकट किया था। यह श्री राधा की सुरक्षा की मांग करने वाली एक शक्तिशाली प्रार्थना है। प्रत्येक श्लोक भक्त के शरीर के एक विशिष्ट हिस्से, सिर से पैर तक, की रक्षा के लिए राधा का आह्वान करता है। माना जाता है कि इस कवच का जाप करने से दिव्य सुरक्षा, आध्यात्मिक शक्ति और राधा और कृष्ण दोनों के प्रति निकटता प्राप्त होती है।"
    },
    {
      name: "श्री कृष्णाष्टकम्",
      text: "भजे व्रजैकमण्डनं समस्तपापखण्डनं\nस्वभक्तचित्तरञ्जनं सदैव नन्दनन्दनम् ।\nसुपिच्छगुच्छमस्तकं सुनादवेणुहस्तकं\nअनङ्गरङ्गसागरं नमामि कृष्णनागरम् ॥ १ ॥\nमनोज गर्वमोचनं विशाललोललोचनं\nविधूत गोपशोचनं नमामि पद्मलोचनम् ।\nकरारविन्दभूधरं स्मितावलोकसुन्दरं\nमहेन्द्रमानदारणं नमामि कृष्णवारणम् ॥ २ ॥\nकदम्बसूनकुण्डलं सुचारुगण्डमण्डलं\nव्रजाङ्गनैकवल्लभं नमामि कृष्णदुर्लभम् ।\nयशोदया समोदया सगोपया सनन्दया\nयुतं सुखैकदायकं नमामि गोपनायकम् ॥ ३ ॥\nसदैव पादपङ्कजं मदीयमानसेनिजं\nदधानमुत्तमालकं नमामि नन्दबालकम् ।\nसमस्तदोषशोषणं समस्तलोकपोषणं\nसमस्तगोपमानसं नमामि नन्दलालसम् ॥ ४ ॥\nभुवोभरावतारकं भवाब्धिकारणधारकं\nयशोमतीकिशोरकं नमामि चित्तचोरकम् ।\nदृगन्तकान्तभङ्गिनं सदा सदालसङ्गिनं\nदिने दिने नवं नवं नमामि नन्दसम्भवम् ॥ ५ ॥\nगुणाकरं सुखाकरं कृपाकरं कृपापरं\nसुरत्विषन्निकन्दनं नमामि गोपनन्दनम् ।\nनवीनगोपनागरं नवीनकेलिलम्पटं\nनमामि मेघसुन्दरं तटित्प्रभालसत्पटम् ॥ ६ ॥\nसमस्तगोपकान्तिहं दृगम्बुजैः समीहितं\nविलासकार्यकोविधं नमामि कुञ्जनागरम् ।\nरुदन्तमिज्ञया चिरं दिदृक्षयोत्तम श्रियः\nविलोकितं दृशाद्भुतं नमामि कृष्णमिष्टुतम् ॥ ७ ॥\nप्रणामदुःखशातनं पलाशनदिदोषं\nहरिप्रियं यतः परं नमामि कृष्णमीश्वरम् ।\nप्रपञ्चदोषनाशनं प्रणम्य पादपङ्कजे\nनिमज्जतां भवार्णवे नमामि कृष्णमर्थदम् ॥ ८ ॥\nश्रीकृष्णाष्टकमिदं प्रातः समुत्थाय यः पठेत् ।\nकोटिजन्मकृतं पापं स्मरणेन विनश्यति ॥ ९ ॥",
      meaning: "आदि शंकराचार्य द्वारा रचित आठ श्लोकों का यह भजन, नंद को आनंदित करने वाले भगवान कृष्ण की एक सुंदर आराधना है। प्रत्येक श्लोक उनके दिव्य रूप और चंचल स्वभाव का वर्णन करता है: उनका मोर पंख, बांसुरी, आकर्षक चितवन, और भक्तों के रक्षक के रूप में उनकी भूमिका। यह अष्टकम् उन्हें सभी पापों का नाश करने वाले और गोपियों और उनके सभी अनुयायियों के मन को मोह लेने वाले के रूप में मनाता है।"
    },
    {
      name: "सन्तान गोपाल स्तोत्रम्",
      text: "श्रीशं कमलपत्राक्षं देवकीनन्दनं हरिम् ।\nसुतसम्प्राप्तये कृष्णं नमामि मधुसूदनम् ॥ १ ॥\nनमाम्यहं वासुदेवं सुतसम्प्राप्तये हरिम् ।\nयशोदाङ्कगतं बालं गोपालं नन्दनन्दनम् ॥ २ ॥\nअस्माकं पुत्रलाभाय गोविन्दं मुनिवन्दितम् ।\nवन्देऽहं वासुदेवं च पुत्रलाभाय भाविनी ॥ ३ ॥\nगोपालं डिम्भकं वन्दे कमलापतिमच्युतम् ।\nपुत्रसम्प्राप्तये कृष्णं नमामि यदुपुङ्गवम् ॥ ४ ॥\nपुत्रकामेष्टिफलदं कञ्जाक्षं कमलापतिम् ।\nदेवकीनन्दनं वन्दे सुतसम्प्राप्तये मम ॥ ५ ॥\nरुक्मणीवल्लभं वन्दे सुतसम्प्राप्तये हरिम् ।\nसत्यंभामाप्रियं देवं देवकीनन्दनं हरिम् ॥ ६ ॥\nगोपिकाहृदयानन्दं गोपालं गोपनन्दनम् ।\nनमामि कृष्णगोविन्दं सुतलाभाय कामदम् ॥ ७ ॥\nहरेरचिन्त्यरूपस्य ध्यायतो मे सुतप्रदम् ।\nगोविन्दस्य प्रियस्याहं नामान्युच्चारयन् प्रिये ॥ ८ ॥\nवासुदेव जगन्नाथ श्रीपते पुरुषोत्तम ।\nकृष्ण गोपालवल्लेश देहि मे तनयं प्रभो ॥ ९ ॥\nकञ्जाक्ष कमलानाथ परमात्मन् जनार्दन ।\nदेहि मे तनयं कृष्ण वासुदेव जगत्पते ॥ १० ॥",
      meaning: "यह भगवान कृष्ण को उनके गोपाल रूप में संबोधित एक शक्तिशाली प्रार्थना है, जिसमें विशेष रूप से संतान (सन्तान) का आशीर्वाद मांगा गया है। प्रत्येक श्लोक कृष्ण को उनके विभिन्न नामों और गुणों, जैसे देवकीनंदन (देवकी के पुत्र) और वासुदेव, से पूजता है, और बार-बार 'देहि मे तनयम्' (मुझे एक पुत्र/संतान प्रदान करें) की अपील करता है। यह संतान की इच्छा रखने वाले जोड़ों द्वारा कृष्ण की इस वरदान को प्रदान करने की शक्ति में विश्वास के साथ जप किया जाता है।"
    },
    {
      name: "श्री राधा कृष्ण स्तोत्रम् (गन्धर्व कृतम्)",
      text: "वन्दे नवघनश्यामं पीतकौशेयवाससम् ।\nसानन्दं सुन्दरं शुद्धं श्रीकृष्णं प्रकृतेः परम् ॥ १ ॥\nराधेशं राधिकाप्राणवल्लभं वल्लवीसुतम् ।\nराधासेवितपादाब्जं राधावक्षःस्थलस्थितम् ॥ २ ॥\nराधानुगं राधिकेष्टं राधापहृतमानसम् ।\nराधाधारं भवाधारं सर्वाधारं नमामि तम् ॥ ३ ॥\nराधा हृत्पद्ममध्ये च वसन्तं सततं शुभम् ।\nराधासहचरं शश्वद्राधाज्ञापरिपालकम् ॥ ४ ॥\nध्यायन्ते योगिनो योगान् सिद्धाः सिद्धेश्वराश्च यम् ।\nतं ध्यायेत् सततं शुद्धं भगवन्तं सनातनम् ॥ ५ ॥\nसेवन्ते सततं सन्तोऽशेषब्रह्मेशसंज्ञिकाः ।\nसेवन्ते निर्गुणं ब्रह्म भगवन्तं सनातनम् ॥ ६ ॥\nनिर्लिप्तं च निरीहं च परमात्मानमीश्वरम् ।\nनित्यं सत्यं च परमं भगवन्तं सनातनम् ॥ ७ ॥\nयं सृष्टेरादिभूतं च सर्वबीजं परात्परम् ।\nयोगिनस्तं प्रपद्यन्ते भगवन्तं सनातनम् ॥ ८ ॥\nबीजं नानावताराणां सर्वकारणकारणम् ।\nवेदवेद्यं वेदबीजं वेदकारणकारणम् ॥ ९ ॥\nयोगिनस्तं प्रपद्यन्ते भगवन्तं सनातनम् ।\nगन्धर्वेण कृतं स्तोत्रं यं पठेत् प्रयतः शुचिः ।\nइहैव जीवन्मुक्तश्च परं याति परां गतिम् ॥ १० ॥\nहरिभक्तिं हरेर्दास्यं गोलोकं च निरामयम् ।\nपार्षदप्रवरत्वं च लभते नात्र संशयः ॥ ११ ॥",
      meaning: "यह स्तोत्र, जिसे एक गंधर्व (एक दिव्य संगीतकार) द्वारा रचा गया कहा जाता है, एक सुंदर प्रार्थना है जो भगवान कृष्ण की पूजा उनके श्री राधा के साथ अविभाज्य संबंध के माध्यम से करती है। यह उन्हें 'राधेश' (राधा के स्वामी) और 'राधिका-प्राण-वल्लभम्' (राधा के प्राणों के प्रिय) जैसे नामों से संबोधित करता है। यह इस बात पर जोर देता है कि कृष्ण राधा के हृदय में निवास करते हैं और महान योगियों और संतों द्वारा शाश्वत, सर्वोच्च भगवान के रूप में पूजे जाते हैं।"
    },
    {
      name: "गोपाल विंशति",
      text: "श्रीमान्वेङ्कटनाथार्यः कवितार्किक केसरी ।\nवेदान्ताचार्यवर्यो मे सन्निधत्तां सदा हृदि ॥\nवन्दे वृन्दावनचरं वल्लवीजनवल्लभम् ।\nजयन्तीसम्भवं धाम वैजयन्तीविभूषणम् ॥ १ ॥\nवाचं निजाङ्करसिकां प्रसमीक्षमाणो वक्त्रारविन्दविनिवेशितपाञ्चजन्यः ।\nवर्णत्रिकोणरुचिरे वरपुण्डरीके बद्धासनो जयति वल्लवचक्रवर्ती ॥ २ ॥\nआम्नायगन्धिरुदितस्फुरिताधरोष्ठं आस्राविलेक्षणमनुक्षणमन्दहासम् ।\nगोपालडिम्भवपुषं कुहनाजनन्याः प्राणस्तनन्धयमवैमि परं पुमांसम् ॥ ३ ॥\nआविर्भवत्वनिभृताभरणं पुरस्तात्। आकुञ्चितैकचरणं निभृतान्यपादम् ।\nदध्ना निमन्थमुखरेण निबद्धतालं नाथस्य नन्दभवने नवनीतनाट्यम् ॥ ४ ॥\nहर्तुं कुम्भे विनिहितकरः स्वादु हैयङ्गवीनं दृष्ट्वा दाम ग्रहणचटुलां मातरं जातरोषाम् ।\nपायात् कृष्णः कपिलकरुणः किञ्चिदाकुञ्चिताङ्घ्रिः गोष्ठी गोष्ठे नवनवशिशुः कोऽपि गोपालबालः ॥ ५ ॥\nवक्त्रान्ते नवनीतपायसरसं बाष्पाम्बुसम्मोहनं वक्षस्युन्नतपाण्डुरोज्ज्वलपदं वक्षोजकुङ्माङ्कितम् ।\nस्वैरं सुन्दरगोपनन्दनसुधं दास्यं गता गोपिका दृष्ट्वा दामगुणैर्बद्धं हरिं गायन्ति ॥ ६ ॥\nपर्याप्तासनबन्धमञ्चितपदं बाहु द्वयान्तर्गतं बाहुं सव्यमुपादधत्परिकरं वामं च वात्सल्यतः ।\nकर्णान्ते कृपया स्पृशन् जननीं क्रोधान्धबुद्धेः परं प्रीत्या पालयितुः परं पुरुषं वन्दे जगत्कारणम् ॥ ७ ॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥ ८ ॥\nआकृष्टः करपल्लवेन जननीं क्रोधान्धया गोपयया दाम्ना बन्धमुपागतः कमलया दृष्टः स्मितास्याम्बुजः ।\nदृष्ट्वा विस्मयरूपमुन्नततनुं गोवर्धनोद्धारकं वन्दे नन्दकुमारमार्यवपुषं गोपीजनप्राणदम् ॥ ९ ॥\nएकं हस्तमुपादधत्परिकरं वामं च वात्सल्यतः प्रीत्या गोपिकया धृतः कमलया दृष्टः स्मितास्याम्बुजः ।\nवन्दे नन्दकुमारमार्यवपुषं गोपीजनप्राणदं भक्तं पालयितुं परं पुरुषं वन्दे जगत्कारणम् ॥ १० ॥\nप्रातः स्मरामि दधिमन्थनग्नगोपीवक्त्रारविन्दमणिकुण्डलकान्तिदीप्तम् ।\nआनन्दसागरमजस्रमपारमेयं ध्येयं सदा मुनिगणैर्हरिमीश्वरं तम् ॥ ११ ॥\nप्रातर्भजामि मुरलीप्रियगोपनारीवृन्दावनेषु विहरन्तमजस्रमीड्यम् ।\nसत्सङ्गमध्यगतं हरिमीश्वरं तं ध्येयं सदा मुनिगणैर्हरिमीश्वरं तम् ॥ १२ ॥\nप्रातर्नमामि यशोदायाः सुतं दामोदरं परं वन्दे गोपालबालं तं ध्येयं सदा मुनिगणैर्हरिमीश्वरं तम् ॥ १३ ॥\nप्रातरुत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज ।\nउत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु ॥ १४ ॥\nसमुद्रवसने देवि पर्वतस्तनमण्डले ।\nविष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे ॥ १५ ॥\nकृष्णाय वासुदेवाय हरये परमात्मने ।\nप्रणतक्लेशनाशाय गोविन्दाय नमो नमः ॥ १६ ॥\nकरारविन्देन पदारविन्दं मुखारविन्दे विनिवेशयन्तम् ।\nवटस्य पत्रस्य पुटे शयानं बालं मुकुन्दं मनसा स्मरामि ॥ १७ ॥\nश्रीकृष्ण गोविन्द हरे मुरारे हे नाथ नारायण वासुदेव ।\nजिह्वे पिबस्वामृतमेतदेव गोविन्द दामोदर माधवेति ॥ १८ ॥\nवसुदेवसुतं देवं कंसचाणूरमर्दनम् ।\nदेवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥ १९ ॥\nगोपालविंशतिर्मया पठिता यस्तु पठेत् प्रीत्या स गोपालस्य प्रियो भवेत् ॥ २० ॥ ",
      meaning: "महान दार्शनिक श्री वेदान्त देशिक द्वारा रचित, बीस श्लोकों ('विंशति') का यह स्तोत्र भगवान गोपाल (कृष्ण) का एक उत्कृष्ट काव्य वर्णन है। यह कृष्ण की बाल लीलाओं, जैसे मक्खन चोरी, माता यशोदा द्वारा खेल-खेल में बांधा जाना, और उनके दिव्य सौंदर्य के जीवंत चित्र प्रस्तुत करता है। यह भजन शिशु कृष्ण के चंचल, सुलभ रूप और ब्रह्मांड के कारण के रूप में उनकी सर्वोच्च प्रकृति दोनों पर ध्यान करता है।"
    }

    ]
  },
  te: {
    mantras: [
      {
      name: "ఏకశ్లోకీ భగవద్గీత",
      text: "యత్ర యోగేశ్వరః కృష్ణో యత్ర పార్థో ధనుర్ధరః |\nతత్ర శ్రీర్విజయో భూతిర్ధ్రువా నీతిర్మతిర్మమ ||",
      meaning: "గీత యొక్క చివరి శ్లోకమైన ఈ ఒక్క శ్లోకం, దాని ప్రధాన సందేశాన్ని సంగ్రహిస్తుంది. యోగేశ్వరుడైన కృష్ణుడు ఎక్కడ ఉంటాడో, మరియు గొప్ప ధనుర్ధారి అయిన అర్జునుడు (అంకితభావంగల భక్తునికి ప్రతీక) ఎక్కడ ఉంటాడో, అక్కడ ఖచ్చితంగా శ్రేయస్సు, విజయం, దివ్యమైన వైభవం మరియు స్థిరమైన నీతి ఉంటాయి అని ఇది చెబుతుంది. తమ కర్మలను దైవిక సంకల్పంతో అనుసంధానించే వారికి ఇది విజయాన్ని వాగ్దానం చేస్తుంది."
    },
    {
      name: "ఏకశ్లోకీ భాగవతమ్",
      text: "ఆదౌ దేవకీదేవిగర్భజననం గోపీగృహే వర్ధనమ్\nమాయాపూతనజీవితాపహరణం గోవర్ధనోద్ధారణమ్ ।\nకంసచ్ఛేదనకౌరవాదిహననం కున్తీసుతాపాలనమ్\nఏతద్భాగవతం పురాణకథితం శ్రీకృష్ణలీలామృతమ్ ॥",
      meaning: "ఈ శ్లోకం శ్రీకృష్ణుని ముఖ్యమైన దివ్య లీలలను వివరించడం ద్వారా శ్రీమద్భాగవతం యొక్క సారాంశాన్ని సంగ్రహిస్తుంది. ఇందులో దేవకికి ఆయన జననం, గోపికల ఇంట పెరగడం, రాక్షసి పూతన ప్రాణాలను తీయడం, గోవర్ధన పర్వతాన్ని ఎత్తడం, కంసుడిని వధించడం, కౌరవులను నాశనం చేయడం మరియు కుంతీ పుత్రులను రక్షించడం వంటివి పేర్కొనబడ్డాయి. ఇది ఈ లీలలను కృష్ణుని కథ యొక్క అమరమైన అమృతంగా కీర్తిస్తుంది."
    },
    {
      name: "ఏకశ్లోకీ భారతమ్",
      text: "ఆదౌ పాణ్డవధార్తరాష్ట్రజననం లాక్షాగృహే దాహనం\nద్యూతే శ్రీహరణం వనే విచరణం తత్సంఖ్యాపూరణమ్ ।\nపశ్చాద్భీష్మవర్ణనం చ సమరే పశ్చాచ్చ కర్ణావ్హయం\nపశ్చాచ్ఛల్యవిమర్దనం చ సుబలపుత్రస్య పశ్చాద్వధమ్ ॥",
      meaning: "ఈ ఒక్క శ్లోకం మొత్తం మహాభారత ఇతిహాసం యొక్క సంక్షిప్త సారాంశాన్ని అందిస్తుంది. ఇది ముఖ్య సంఘటనలను కాలక్రమానుసారంగా జాబితా చేస్తుంది: పాండవులు మరియు కౌరవుల జననం, లక్కగృహ దహనం, జూదంలో సంపదను కోల్పోవడం, అరణ్యవాసం, భీష్ముడు మరియు కర్ణుడు పాల్గొన్న మహా యుద్ధం, శల్యుని ఓటమి, మరియు చివరగా శకుని (సుబలుని కుమారుడు) వధ."
    },
    {
      name: "అచ్యుతాష్టకం",
      text: "అచ్యుతం కేశవం రామనారాయణం\nకృష్ణదామోదరం వాసుదేవం హరిమ్ ।\nశ్రీధరం మాధవం గోపికావల్లభం\nజానకీనాయకం రామచంద్రం భజే ॥ 1 ॥\nఅచ్యుతం కేశవం సత్యభామాధవం\nమాధవం శ్రీధరం రాధికారాధితమ్ ।\nఇందిరామందిరం చేతసా సుందరం\nదేవకీనందనం నందజం సందధే ॥ 2 ॥\nవిష్ణవే జిష్ణవే శంఖినే చక్రిణే\nరుక్మిణీరాగిణే జానకీజానయే ।\nబల్లవీవల్లభాయార్చితాయాత్మనే\nకంసవిధ్వంసినే వంశినే తే నమః ॥ 3 ॥\nకృష్ణ గోవిందా హే రామ నారాయణ\nశ్రీపతే వాసుదేవాజిత శ్రీనిధే ।\nఅచ్యుతానంత హే మాధవాధోక్షజ\nద్వారకానాయక ద్రౌపదీరక్షక ॥ 4 ॥\nరాక్షసాక్షోభితః సీతయా శోభితో\nదండకారణ్యభూపుణ్యతాకారణః ।\nలక్ష్మణేనాన్వితో వానరైః సేవితో-\nऽగస్తసంపూజితో రాఘవః పాతు మామ్ ॥ 5 ॥\nధేనుకారిష్టకోऽనిష్టకృద్ద్వేషిణాం\nకేశిహా కంసహృద్వంశికావాదకః ।\nపూతనాకోపనః సూరజాఖేలనో\nబాలగోపాలకః పాతు మామ్ సర్వదా ॥ 6 ॥\nవిద్యుదుద్ద్యోతవత్ప్రస్ఫురద్వాససం\nప్రావృడమ్భోదవత్ప్రోల్లసద్విగ్రహమ్ ।\nవన్యయా మాలయా శోభితోరఃస్థలం\nలోహితాంఘ్రిద్వయం వారిజాక్షం భజే ॥ 7 ॥\nకుంచితైః కుంతలైర్భ్రాజమానాననం\nరత్నమౌళిం లసత్కుండలం గండయోః ।\nహారకేయూరకం కంకణప్రోజ్జ్వలం\nకింకిణీమంజులం శ్యామలం తం భజే ॥ 8 ॥\nఅచ్యుతస్యాష్టకం యః పఠేదిష్టదం\nప్రేమతః ప్రత్యహం పూరుషః సస్పృహమ్ ।\nవృత్తతః సుందరం కర్తృవిశ్వమ్భరం\nతస్య వశ్యో హరిర్జాయతే సత్వరమ్ ॥ 9 ॥",
      meaning: "ఆదిశంకరాచార్యులచే రచించబడిన ఈ స్తోత్రం, శ్రీమహావిష్ణువు యొక్క వివిధ దివ్య నామాలను, ప్రధానంగా కృష్ణుడు మరియు రాముని అవతారాల నామాలను జపించడం ద్వారా ఆయనకు చేసే ప్రార్థన. ప్రతి శ్లోకం అచ్యుతుడు (పతనము లేనివాడు), కేశవుడు, దామోదరుడు మరియు రాముడు వంటి నామాలను ఆరాధిస్తుంది, భగవంతుని దివ్య లక్షణాలను ఆవాహన చేసి ఆయన రక్షణ మరియు అనుగ్రహాన్ని కోరుకుంటుంది. ఇది రెండు ప్రధాన అవతారాల పూజను అందంగా మిళితం చేస్తుంది."
    },
    {
      name: "మధురాష్టకం",
      text: "అధరం మధురం వదనం మధురం\nనయనం మధురం హసితం మధురమ్ ।\nహృదయం మధురం గమనం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 1 ॥\nవచనం మధురం చరితం మధురం\nవసనం మధురం వలితం మధురమ్ ।\nచలితం మధురం భ్రమితం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 2 ॥\nవేణుర్మధురో రేణుర్మధురః\nపాణిర్మధురః పాదౌ మధురౌ ।\nనృత్యం మధురం సఖ్యం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 3 ॥\nగీతం మధురం పీతం మధురం\nభుక్తం మధురం సుప్తం మధురమ్ ।\nరూపం మధురం తిలకం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 4 ॥\nకరణం మధురం తరణం మధురం\nహరణం మధురం రమణం మధురమ్ ।\nవమితం మధురం శమితం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 5 ॥\nగుంజా మధురా మాలా మధురా\nయమునా మధురా వీచీ మధురా ।\nసలిలం మధురం కమలం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 6 ॥\nగోపీ మధురా లీలా మధురా\nయుక్తం మధురం ముక్తం మధురమ్ ।\nదృష్టం మధురం శిష్టం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 7 ॥\nగోపా మధురా గావో మధురా\nయష్టిర్మధురా సృష్టిర్మధురా ।\nదలితం మధురం ఫలతం మధురం\nమధురాధిపతేరఖిలం మధురమ్ ॥ 8 ॥",
      meaning: "శ్రీ వల్లభాచార్యులచే రచించబడిన ఈ స్తోత్రం, శ్రీకృష్ణుని సర్వవ్యాప్తమైన మాధుర్యంపై ఒక గంభీరమైన ధ్యానం. ప్రతి శ్లోకం 'మధురాధిపతేరఖిలం మధురమ్' అనే పల్లవిని పునరావృతం చేస్తుంది, దీని అర్థం 'మాధుర్యానికి అధిపతి అయిన స్వామి గురించి ప్రతిదీ మధురమే.' ఇది కృష్ణుని ప్రతి అంశం - ఆయన పెదవులు, ముఖం, కళ్ళు, చేష్టలు, సహచరులు మరియు ఆయన పాద ధూళి కూడా - దివ్య మాధుర్యంతో నిండి ఉందని వర్ణిస్తుంది."
    },
    {
      name: "శ్రీ రాధా కవచం",
      text: "పార్వత్యువాచ –\nకైలాసశిఖకారూఢం దేవదేవం జగద్గురుమ్ |\nశఙ్కరం పరిపప్రచ్ఛ పార్వతీ పరమేశ్వరమ్ || 1 ||\nభగవన్ దేవదేవేశ సురాసుర నమస్కృత |\nత్వత్తః శ్రుతాని సర్వాణి తన్త్రాణి బహుశో మయా |\nశ్రోతుమిచ్ఛామి దేవేస రాధికాకవచం ప్రభో || 2 ||\nశ్రీ మహాదేవ ఉవాచ –\nశృణుష్వ పరమ ప్రీత్యా పార్వతీ ప్రణయాదితః |\nఅతిగుహ్యతరం దేవి కవచం దేవదుర్లభమ్ || 3 ||\nప్రాణేభ్యోऽపి ప్రియతరం కవచం మన్ముఖోదితమ్ |\nయస్యాః ప్రసాదాత్ కృష్ణోऽపి గోలోకేశ్వర ఈశ్వరః |\nయస్యాః ప్రసాదాదహమపి త్రైలోక్యవిజయీ ప్రభుః || 4 ||\nశిరః పాతు సదా రాధా కృష్ణప్రాణాధికా ప్రియా |\nలలాటం పాతు మే రాధా కృష్ణసమ్మోహినీ సదా || 5 ||\nనేత్రే పాతు సదా రాధా కృష్ణానందదాయినీ |\nకర్ణౌ పాతు సదా రాధా గోకులానందదాయినీ || 6 ||\nనాసికాం పాతు మే రాధా కృష్ణభక్తిప్రదాయినీ |\nగణ్డం పాతు సదా రాధా గోకులానందదాయినీ || 7 ||\nదన్తాన్ పాతు సదా రాధా కృష్ణచర్చితవిగ్రహా |\nఓష్ఠం పాతు సదా రాధా గోపికానందదాయినీ || 8 ||\nజిహ్వాం పాతు సదా రాధా కృష్ణవాక్ప్రవర్తినీ |\nచిబుకం పాతు మే రాధా యామినీశ్వరపూజితా || 9 ||\nగళాం పాతు సదా రాధా వృషభానుసుతా ప్రియా |\nస్కంధౌ పాతు సదా రాధా కృష్ణోత్సఙ్గవిహారిణీ || 10 ||\nభుజౌ పాతు సదా రాధా కృష్ణక్రీడాప్రవర్తినీ |\nహస్తౌ పాతు సదా రాధా హరిప్రియా హరిప్రదా || 11 ||\nవక్షఃస్థలం చ మే పాతు రాధా వామేశ సంస్థితా |\nఉదరాం పాతు మే రాధా కృష్ణకుక్షిగృహస్థితా || 12 ||\nపృష్ఠం పాతు సదా రాధా వ్రజమఙ్గలదాయినీ |\nకటిం పాతు సదా రాధా కృష్ణసమ్మోహినీ పరా || 13 ||\nఊరూ పాతు సదా రాధా కృష్ణానందదాయినీ |\nజానునీ పాతు మే రాధా కృష్ణభక్తిప్రదాయినీ || 14 ||\nజఙ్ఘే పాతు సదా రాధా కృష్ణచిత్తవినోదినీ |\nగుల్ఫౌ పాతు సదా రాధా కృష్ణానందదదాయినీ || 15 ||\nపాదౌ పాతు సదా రాధా హరిసఙ్గినీ శోభనా |\nసర్వాఙ్గం పాతు మే రాధా కృష్ణప్రాణాధికా ప్రియా || 16 ||\nఇదం తు కవచం గుహ్యం మయా తవ ప్రకాశితమ్ |\nయః పఠేత్ ప్రాతరుత్థాయ త్రికాలం వా సమాహితః |\nస భవేత్ కృష్ణతుల్యశ్చ తేజసా రూపయౌవనైః |\nపుత్రవాన్ ధనవాన్ శ్రీమాన్ కీర్తిమాన్ మనుజరాజకే || 17 ||",
      meaning: "ఈ స్తోత్రం ఒక 'కవచం' లేదా దివ్య కవచం, దీనిని శివుడు పార్వతికి వెల్లడించాడు. ఇది శ్రీ రాధ యొక్క రక్షణను కోరుకునే ఒక శక్తివంతమైన ప్రార్థన. ప్రతి శ్లోకం భక్తుని శరీరం యొక్క ఒక నిర్దిష్ట భాగాన్ని, తల నుండి కాలి వరకు, రక్షించమని రాధను ఆవాహన చేస్తుంది. ఈ కవచాన్ని పఠించడం వల్ల దివ్య రక్షణ, ఆధ్యాత్మిక బలం మరియు రాధాకృష్ణులిద్దరికీ సాన్నిహిత్యం లభిస్తాయని నమ్ముతారు."
    },
    {
      name: "శ్రీ కృష్ణాష్టకం",
      text: "భజే వ్రజైకమణ్డనం సమస్తపాపఖణ్డనం\nస్వభక్తచిత్తరంజనం సదైవ నన్దనన్దనమ్ ।\nసుపిచ్ఛగుచ్ఛమస్తకం సునాదవేణుహస్తకం\nఅనఙ్గరణ్గసాగరం నమామి కృష్ణనాగరమ్ ॥ 1 ॥\nమనోజ గర్వమోచనం విశాలలోలలోచనం\nవిధూత గోపశోచనం నమామి పద్మలోచనమ్ ।\nకరారవిన్దభూధరం స్మితావలోకసున్దరం\nమహేన్ద్రమానదారణం నమామి కృష్ణవారణమ్ ॥ 2 ॥\nకదమ్బసూనకుణ్డలం సుచారుగణ్డమణ్డలం\nవ్రజాఙ్గనైకవల్లభం నమామి కృష్ణదుర్లభమ్ ।\nయశోదయా సమోదయా సగోపయా సనన్దయా\nయుతం సుఖైకదాయకం నమామి గోపనాయకమ్ ॥ 3 ॥\nసదైవ పాదపఙ్కజం మదీయమానసేనిజం\nదధానముత్తమాలకం నమామి నన్దబాలకమ్ ।\nసమస్తదోషశోషణం సమస్తలోకపోషణం\nసమస్తగోపమానసం నమామి నన్దలాలసమ్ ॥ 4 ॥\nభువోభరாவதாரकं భవాబ్ధికర్ణధారకం\nయశోమతీకిశోరకం నమామి చిత్తచోరకమ్ ।\nదృగన్తకాన్తభఙ్గినం సదా సదాలసఙ్గినం\nదినే దినే నవం నవం నమామి నన్దసమ్భవమ్ ॥ 5 ॥\nగుణాకరం సుఖాకరం కృపాకరం కృపాపరం\nసురత్విషన్నికన్దనం నమామి గోపనన్దనమ్ ।\nనవీనగోపనాగరం నవీనకేలిలమ్పటం\nనమామి మేఘసున్దరం తటిత్ప్రభాలసత్పటమ్ ॥ 6 ॥\nసమస్తగోపకాన్తిహం దృగమ్భుజైః సమీహితం\nవిలాసకార్యకోవిధం నమామి కుఞ్జనాగరమ్ ।\nరుదన్తమిజ్ఞయా చిరం దిదృక్షయోత్తమ శ్రియః\nవిలోకితం దృశాద్భుతం నమామి కృష్ణమిష్టుతమ్ ॥ 7 ॥\nప్రణామదుఃఖశాతనం పలాశనదిదోషణం\nహరిప్రియం యతః పరం నమామి కృష్ణమీశ్వరమ్ ।\nప్రపఞ్చదోషనాశనం ప్రణమ్య పాదపఙ్కజే\nనిమజ్జతాం భవార్ణవే నమామి కృష్ణమర్థదమ్ ॥ 8 ॥\nశ్రీకృష్ణాష్టకమిదం ప్రాతః సముత్థాయ యః పఠేత్ ।\nకోటిజన్మకృతం పాపం స్మరణేన వినశ్యతి ॥ 9 ॥",
      meaning: "ఆదిశంకరాచార్యులచే రచించబడిన ఎనిమిది శ్లోకాల ఈ స్తోత్రం, నందుని ఆనందపరిచే శ్రీకృష్ణుని ఒక అందమైన ఆరాధన. ప్రతి చరణం ఆయన దివ్య రూపాన్ని మరియు లీలా స్వభావాన్ని వర్ణిస్తుంది: ఆయన నెమలి ఈక, వేణువు, ఆకర్షణీయమైన చూపులు మరియు భక్తుల రక్షకుడిగా ఆయన పాత్ర. ఈ అష్టకం ఆయనను సర్వ పాపాలను నాశనం చేసేవాడిగా మరియు గోపికల మరియు ఆయన భక్తులందరి మనస్సులను దోచుకునేవాడిగా కీర్తిస్తుంది."
    },
    {
      name: "సంతాన గోపాల స్తోత్రం",
      text: "శ్రీశం కమలపత్రాక్షం దేవకీనందనం హరిమ్ |\nసుతసంప్రాప్తయే కృష్ణం నమామి మధుసూదనమ్ || 1 ||\nనమామ్యహం వాసుదేవం సుతసంప్రాప్తయే హరిమ్ |\nయశోదాంకగతం బాలం గోపాలం నందనందనమ్ || 2 ||\nఅస్మాకం పుత్రలాభాయ గోవిందం మునివందితమ్ |\nవందేऽహం వాసుదేవం చ పుత్రలాభాయ భావినీ || 3 ||\nగోపాలం డింభకం వందే కమలాపతిమచ్యుతమ్ |\nపుత్రసంప్రాప్తయే కృష్ణం నమామి యదుపుంగవమ్ || 4 ||\nపుత్రకామేష్టిఫలదం కంజాక్షం కమలాపతిమ్ |\nదేవకీనందనం వందే సుత సంప్రాప్తయే మమ || 5 ||\nరుక్మణీవల్లభం వందే సుతసంప్రాప్తయే హరిమ్ |\nసత్యంభామాప్రియం దేవం దేవకీనందనం హరిమ్ || 6 ||\nగోపికాహృదయానందం గోపాలం గోపనందనమ్ |\nనమామి కృష్ణగోవిందం సుతలాభాయ కామదమ్ || 7 ||\nహరేరచింత్యరూపస్య ధ్యాయతో మే సుతప్రదమ్ |\nగోవిందస్య ప్రియస్యాహం నామాన్యుచ్చారయన్ ప్రియే || 8 ||\nవాసుదేవ జగన్నాథ శ్రీపతే పురుషోత్తమ |\nకృష్ణ గోపాలవల్లేశ దేహి మే తనయం ప్రభో || 9 ||\nకంజాక్ష కమలానాథ పరమాత్మన్ జనార్దన |\nదేహి మే తనయం కృష్ణ వాసుదేవ జగత్పతే || 10 ||",
      meaning: "ఇది గోపాలుని రూపంలో ఉన్న శ్రీకృష్ణునికి అంకితం చేయబడిన ఒక శక్తివంతమైన ప్రార్థన, ప్రత్యేకంగా సంతానం (సంతాన) ఆశీర్వాదం కోసం. ప్రతి శ్లోకం కృష్ణుడిని దేవకీనందనుడు (దేవకి కుమారుడు) మరియు వాసుదేవుడు వంటి వివిధ నామములు మరియు గుణగణాలతో ఆరాధిస్తుంది, మరియు పదేపదే 'దేహి మే తనయమ్' (నాకు ఒక కుమారుడిని/సంతానాన్ని ప్రసాదించు) అని విజ్ఞప్తి చేస్తుంది. సంతానం కోరుకునే దంపతులు, కృష్ణుడు ఈ వరాన్ని ప్రసాదించగలడనే విశ్వాసంతో దీనిని పఠిస్తారు."
    },
    {
      name: "శ్రీ రాధా కృష్ణ స్తోత్రం (గంధర్వ కృతం)",
      text: "వందే నవఘనశ్యామం పీతకౌశేయవాససమ్ |\nసానందం సుందరం శుద్ధం శ్రీకృష్ణం ప్రకృతేః పరమ్ || 1 ||\nరాధేశం రాధికాప్రాణవల్లభం వల్లవీసుతమ్ |\nరాధాసేవితపాదాబ్జం రాధావక్షఃస్థలస్థితమ్ || 2 ||\nరాధానుగం రాధికేష్టం రాధాపహృతమానసమ్ |\nరాధాధారం భవాధారం సర్వాధారం నమామి తమ్ || 3 ||\nరాధా హృత్పద్మమధ్యే చ వసంతం సతతం శుభమ్ |\nరాధాసహచరం శశ్వద్రాధాజ్ఞాపరిపాలకమ్ || 4 ||\nధ్యాయంతే యోగినో యోగాన్ సిద్ధాః సిద్ధేశ్వరాశ్చ యమ్ |\nతం ధ్యాయేత్ సతతం శుద్ధం భగవంతం సనాతనమ్ || 5 ||\nసేవంతే సతతం సంతోऽశేషబ్రహ్మేశసంజ్ఞికాః |\nసేవంతే నిర్గుణం బ్రహ్మ భగవంతం సనాతనమ్ || 6 ||\nనిర్లిప్తం చ నిరీహం చ పరమాత్మానమీశ్వరమ్ |\nనిత్యం సత్యం చ పరమం భగవంతం సనాతనమ్ || 7 ||\nయం సృష్టేరాదిభూతం చ సర్వబీజం పరాత్పరమ్ |\nయోగినస్తం ప్రపద్యంతే భగవంతం సనాతనమ్ || 8 ||\nబీజం నానావతారాణాం సర్వకారణకారణమ్ |\nవేదవేద్యం వేదబీజం వేదకారణకారణమ్ || 9 ||\nయోగినస్తం ప్రపద్యంతే భగవంతం సనాతనమ్ |\nగంధర్వేణ కృతం స్తోత్రం యం పఠేత్ ప్రయతః శుచిః |\nఇహైవ జీవన్ముక్తశ్చ పరం యాతి పరాం గతిమ్ || 10 ||\nహరిభక్తిం హరేర్దాస్యం గోలోకం చ నిరామయమ్ |\nపార్షదప్రవరత్వం చ లభతే నాऽత్ర సంశయః || 11 ||",
      meaning: "ఈ స్తోత్రం ఒక గంధర్వునిచే (ఒక దివ్య సంగీతకారుడు) రచించబడినట్లు చెప్పబడింది, ఇది శ్రీకృష్ణుడిని శ్రీరాధతో ఆయనకున్న విడదీయరాని సంబంధం ద్వారా పూజించే ఒక అందమైన ప్రార్థన. ఇది ఆయనను 'రాధేశ' (రాధకు ప్రభువు) మరియు 'రాధికా-ప్రాణ-వల్లభమ్' (రాధ ప్రాణానికి ప్రియమైనవాడు) వంటి నామాలతో సంబోధిస్తుంది. కృష్ణుడు రాధ హృదయంలో నివసిస్తాడని మరియు గొప్ప యోగులు మరియు సాధువులచే శాశ్వతమైన, పరమ ప్రభువుగా పూజించబడతాడని ఇది నొక్కి చెబుతుంది."
    },
    {
      name: "గోపాల వింశతి",
      text: "శ్రీమాన్వేంకటనాథార్యః కవితార్కిక కేసరీ |\nవేదాన్తాచార్యవర్యో మే సన్నిధత్తాం సదా హృది ||\nవందే బృందావనచరం వల్లవీజనవల్లభమ్ |\nజయంతీసంభవం ధామ వైజయంతీవిభూషణమ్ ॥ 1 ॥\nవాచం నిజాంకరసికాం ప్రసమీక్షమాణో వక్త్రారవిన్దవినివేశితపాంచజన్యః |\nవర్ణత్రికోణరుచిరే వరపుణ్డరీకే బద్ధాసనో జయతి వల్లవచక్రవర్తీ ॥ 2 ॥\nఆమ్నాయగన్ధిరుదితస్ఫురితాధరోష్ఠం ఆస్రావిలేక్షణమనుక్షణమన్దహాసమ్ |\nగోపాలడిమ్భవపుషం కుహనాజనన్యాః ప్రాణస్తనన్ధయమవైమి పరం పుమాంసమ్ ॥ 3 ॥\nఆవిర్భవత్వనిభృతాభరణం పురస్తాత్। ఆకుంచితైకచరణం నిభృతాన్యపాదమ్ |\nదధ్నా నిమన్థముఖరేణ నిబద్ధతాలం నాథస్య నన్దభవనే నవనీతనాట్యమ్ ॥ 4 ॥\nహర్తుం కుమ్భే వినిహితకరః స్వాదు హైయఙ్గవీనం దృష్ట్వా దామ గ్రహణచటులాం మాతరం జాతరోషామ్ |\nపాయాత్ కృష్ణః కపిలకరుణః కిఞ్చిదాకుఞ్చితాఙ్ఘ్రిః గోష్ఠీ గోష్ఠే నవనవశిశుః కోఽపి గోపాలబాలః ॥ 5 ॥\nవక్త్రాన్తే నవనీతపాయసరసం బాష్పామ్బుసమ్మోహనం వక్షస్యున్నతపాణ్డురోజ్జ్వలపదం వక్షోజకుఙ్మాఙ్కితమ్ |\nస్వైరం సున్దరగోపనన్దనసుధం దాస్యం గతా గోపికా దృష్ట్వా దామగుణైర్బద్ధం హరిం గాయన్తి ॥ 6 ॥\nపర్యాప్తాసనబన్ధమఞ్చితపదం బాహు ద్వయాన్తర్గతం బాహుం సవ్యముపాదధత్పరికరం వామం చ వాత్సల్యతః |\nకర్ణాన్తే కృపయా స్పృశన్ జననీం క్రోధాన్ధబుద్ధేః పరం ప్రీత్యా పాలయితుః పరం పురుషం వన్దే జగత్కారణమ్ ॥ 7 ॥\nపరిత్రాణాయ సాధూనాం వినాశాయ చ దుష్కృతామ్ |\nధర్మసంస్థాపనార్థాయ సంభవామి యుగే యుగే ॥ 8 ॥\nఆకృష్టః కరపల్లవేన జననీం క్రోధాన్ధయా గోపయయా దామ్నా బన్ధముపాగతః కమలయా దృష్టః స్మితాస్యామ్బుజః |\nదృష్ట్వా విస్మయరూపమున్నతతనుం గోవర్ధనోద్ధారకం వన్దే నన్దకుమారమార్యవపుషం గోపీజనప్రాణదమ్ ॥ 9 ॥\nఏకం హస్తముపాదధత్పరికరం వామం చ వాత్సల్యతః ప్రీత్యా గోపికయా ధృతః కమలయా దృష్టః స్మితాస్యామ్బుజః |\nవన్దే నన్దకుమారమార్యవపుషం గోపీజనప్రాణదం భక్తం పాలయితుం పరం పురుషం వన్దే జగత్కారణమ్ ॥ 10 ॥\nప్రాతః స్మరామి దధిమన్థనమగ్నగోపీవక్త్రారవిన్దమణికుణ్డలకాన్తిదీప్తమ్ |\nఆనన్దసాగరమజస్రమపారమేయం ధ్యేయం సదా మునిగణైర్హరిమీశ్వరం తమ్ ॥ 11 ॥\nప్రాతర్భజామి మురళీప్రియగోపనారీవృన్దావనేషు విహరన్తమజస్రమీడ్యమ్ |\nసత్సఙ్గమధ్యగతం హరిమీశ్వరం తం ధ్యేయం సదా మునిగణైర్హరిమీశ్వరం తమ్ ॥ 12 ॥\nప్రాతర్నమామి యశోదాయాః సుతం దామోదరం పరం వన్దే గోపాలబాలం తం ధ్యేయం సదా మునిగణైర్హరిమీశ్వరం తమ్ ॥ 13 ॥\nప్రాతరుత్తిష్ఠ గోవిన్ద ఉత్తిష్ఠ గరుడధ్వజ |\nఉత్తిష్ఠ కమలాకాన్త త్రైలోక్యం మఙ్గలం కురు ॥ 14 ॥\nసముద్రవసనే దేవి పర్వతస్తనమణ్డలే |\nవిష్ణుపత్ని నమస్తుభ్యం పాదస్పర్శం క్షమస్వ మే ॥ 15 ॥\nకృష్ణాయ వాసుదేవాయ హరయే పరమాత్మనే |\nప్రణతక్లేశనాశాయ గోవిన్దాయ నమో నమః ॥ 16 ॥\nకరారవిన్దేన పదారవిన్దం ముఖారవిన్దే వినివేశయన్తమ్ |\nవటస్య పత్రస్య పుటే శయానం బాలం ముకున్దం మనసా స్మరామి ॥ 17 ॥\nశ్రీకృష్ణ గోవిన్ద హరే మురారే హే నాథ నారాయణ వాసుదేవ |\nజిహ్వే పిబస్వామృతమేతదేవ గోవిన్ద దామోదర మాధవేతి ॥ 18 ॥\nవసుదేవసుతం దేవం కంసచాణూరమర్దనమ్ |\nదేవకీపరమానన్దం కృష్ణం వన్దే జగద్గురుమ్ ॥ 19 ॥\nగోపాలవింశతిర్మయా పఠితా యస్తు పఠేత్ ప్రీత్యా స గోపాలస్య ప్రియో భవేత్ ॥ 20 ॥ ",
      meaning: "గొప్ప తత్వవేత్త శ్రీ వేదాంత దేశికులచే రచించబడిన ఇరవై శ్లోకాల ('వింశతి') ఈ స్తోత్రం, శ్రీ గోపాలుని (కృష్ణుని) ఒక అద్భుతమైన కావ్య వర్ణన. ఇది కృష్ణుని బాల్య లీలలను, వెన్న దొంగిలించడం, తల్లి యశోదచే ఆటపట్టించడం, మరియు ఆయన దివ్య సౌందర్యం వంటి స్పష్టమైన చిత్రాలను చిత్రిస్తుంది. ఈ స్తోత్రం బాల కృష్ణుని సరదా, సులభంగా చేరగల రూపాన్ని మరియు విశ్వానికి కారణంగా ఆయన పరమ స్వభావాన్ని రెండింటినీ ధ్యానిస్తుంది."
    }

    ]
  }
};

// Translation data for UI elements - COMPLETE set of translations
const translations = {
  en: {
    // HomePage translations
    heroTitle: "Sacred Teachings of Lord Krishna",
    heroSubtitle: "Experience the divine wisdom of the Bhagavad Gita through interactive learning, meditation, and devotional practices",
    exploreTeachings: "Explore the Teachings",
    completeChapters: "Complete Chapters",
    completeChaptersDesc: "Interactive dialogue between Arjuna and Lord Krishna with detailed explanations",
    meditationFeature: "Sacred Meditation",
    meditationFeatureDesc: "Connect with the divine through guided meditation sessions",
    kidsVersion: "Kids-Friendly Version",
    kidsVersionDesc: "Simplified explanations for younger learners",
    historyOfBhagavadGita: "History of the Bhagavad Gita",
    historyOfBhagavadGitaText: "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a conversation between Lord Krishna and the Pandava prince Arjuna, set on the battlefield of Kurukshetra. The Gita addresses the moral and philosophical dilemmas faced by Arjuna and provides timeless wisdom on duty, righteousness, and the path to spiritual liberation.",
    startLearning: "Start Your Spiritual Journey",
    explore: "Explore Chapters",
    beginMeditation: "Begin Meditation",
    chants: "Sacred Chants",
    exploreShlokas: "Explore Shlokas",
    
    // Navigation translations
    home: "Home",
    chapters: "Chapters",
    meditation: "Meditation",
    chantsNav: "Chants",
    about: "About",
    language: "Language",
    
    // ChaptersPage translations
    chaptersTitle: "Sacred Chapters of the Bhagavad Gita",
    chaptersSubtitle: "Explore the 18 divine chapters with interactive dialogue",
    conversations: "conversations",
    loading: "Loading chapters...",
    
    // PodcastPage translations
    dialogues: "dialogues",
    
    // MeditationPage translations
    sacredMeditation: "Sacred Meditation",
    meditationSubtitle: "Connect with the divine through focused meditation",
    selectDuration: "Select Duration",
    beginMeditationBtn: "Begin Meditation",
    stopMeditation: "Stop Meditation",
    minutes: "minutes",
    // Meditation completion messages
    meditationCompletedTitle: "Meditation Completed",
    meditationCompletedMessage: "You have successfully completed your meditation session. Take a moment to reflect on the peace and clarity you've cultivated.",
    meditationBenefits: "Benefits of Regular Meditation:",
    meditationBenefit1: "Reduces stress and anxiety",
    meditationBenefit2: "Improves focus and concentration",
    meditationBenefit3: "Promotes emotional well-being",
    meditationBenefit4: "Enhances self-awareness",
    meditationBenefit5: "Encourages inner peace and spiritual growth",
    continueMeditation: "Continue Meditation",
    exploreChants: "Explore Chants",
    
    // Missing close translation
    close: "Close",
    
    // ChantsPage translations
    sacredChants: "Sacred Chants",
    chantsSubtitle: "Chant the divine names with devotion",
    startChanting: "Start Chanting",
    stopChanting: "Stop Chanting",
    
    // AboutPage translations
    aboutMission: "Our Mission",
    aboutMissionText: "To make the profound teachings of the Bhagavad Gita accessible to everyone through interactive technology and multilingual support.",
    developmentTeam: "Development Team",
    developmentTeamText: "A dedicated team of developers, spiritual scholars, and designers working together to create an immersive experience.",
    appFeatures: "App Features",
    appFeaturesList: [
      "Interactive dialogue between Arjuna and Lord Krishna",
      "Multilingual support (English, Hindi, Telugu)",
      "Guided meditation sessions",
      "Sacred chants and mantras",
      "Kid-friendly explanations",
      "Audio narration with divine voices",
      "Beautiful visual design inspired by Indian spirituality"
    ],
    contactUs: "Contact Us",
    contactUsText: "For feedback, suggestions, or spiritual guidance, please reach out to us at karthiksai5421@gmail.com",

    
    // New AboutPage translations
    additionalFunctions: "Additional Functions and Uses",
    interactiveLearning: "Interactive Learning",
    interactiveLearningDesc: "Experience the dialogue between Arjuna and Lord Krishna in an engaging, interactive format that brings the teachings to life",
    multilingualSupport: "Multilingual Support",
    multilingualSupportDesc: "Access the teachings in English, Hindi, and Telugu to reach a wider audience",
    
    sacredMeditationDesc: "Connect with the divine through guided meditation sessions based on Gita principles",
    devotionalChants: "Devotional Chants",
    devotionalChantsDesc: "Chant sacred mantras and stotras with audio support for deeper spiritual connection",
    kidsFriendly: "Kids-Friendly Version",
    kidsFriendlyDesc: "Simplified explanations and content designed specifically for younger learners",
    progressiveLearning: "Progressive Learning",
    progressiveLearningDesc: "Structured chapters that guide users from basic concepts to advanced spiritual wisdom",
    emotionalConnection: "Emotional Connection",
    emotionalConnectionDesc: "Visual elements and animations that respond to the emotional context of the dialogue",
    offlineAccess: "Offline Access",
    offlineAccessDesc: "Download and access teachings without an internet connection",
    personalReflection: "Personal Reflection",
    personalReflectionDesc: "Tools for journaling and personal reflection on the teachings",
    
    howToUseApp: "How to Use This App",
    exploreChaptersStep: "1. Explore the Chapters",
    exploreChaptersDesc: "Navigate through the 18 chapters of the Bhagavad Gita with interactive dialogue between Arjuna and Lord Krishna.",
    engageMeditationStep: "2. Engage in Meditation",
    engageMeditationDesc: "Participate in guided meditation sessions to internalize the spiritual teachings and find inner peace.",
    chantMantrasStep: "3. Chant Sacred Mantras",
    chantMantrasDesc: "Connect with the divine through the chanting of sacred names and verses from the Gita and other scriptures.",
    learnAtPaceStep: "4. Learn at Your Pace",
    learnAtPaceDesc: "Use the kids-friendly version or detailed explanations to understand the teachings according to your level.",
    
    spiritualBenefits: "Spiritual Benefits",
    lifePurpose: "Gain clarity on life's purpose and meaning",
    mentalStrength: "Develop mental strength and emotional resilience",
    cultivateDetachment: "Cultivate detachment and equanimity in daily life",
    selfRealization: "Understand the path to self-realization and liberation",
    practicalWisdom: "Learn practical wisdom for decision-making and ethical living",
    innerPeace: "Experience inner peace and spiritual growth",
    ancientWisdom: "Connect with ancient wisdom in a contemporary context",
    dailyPractice: "Build a daily spiritual practice that fits your lifestyle",
    
    spiritualAdvisors: "Our Spiritual Advisors",
    vedicScholars: "Vedic Scholars with deep understanding of Sanskrit texts",
    yogaMasters: "Yoga Masters experienced in practical application of Gita teachings",
    devotionalPractitioners: "Devotional Practitioners who live the teachings daily",
    
    technicalTeam: "Our Technical Team",
    uiUxDesigners: "UI/UX Designers specializing in spiritual applications",
    frontendDevelopers: "Frontend Developers with experience in interactive learning platforms",
    audioEngineers: "Audio Engineers creating immersive sound experiences",
    contentSpecialists: "Content Specialists ensuring accuracy and accessibility",

    
    // ChapterDetailsPage translations
    chapterNotFound: "Chapter not found",
    backToChapters: "Back to Chapters",
    previousChapter: "Previous Chapter",
    nextChapter: "Next Chapter",
    verse: "Verse",
    translation: "Translation",
    meaning: "Meaning",
    speak: "Speak",
    stopSpeaking: "Stop Speaking",
    askQuestion: "Ask Question",
    divineAnswer: "Divine Answer",
    summaryTitle: "Chapter Summary",
    teachingsTitle: "Key Teachings",
    
    // Audio controls
    playMusic: "Play Music",
    muteMusic: "Mute Music",
    volumeControl: "Volume Control"
  },
  hi: {
    // HomePage translations
    heroTitle: "भगवान कृष्ण के पवित्र उपदेश",
    heroSubtitle: "भगवद्गीता की दिव्य ज्ञान का अनुभव इंटरैक्टिव लर्निंग, ध्यान और भक्ति के माध्यम से करें",
    exploreTeachings: "उपदेशों का अन्वेषण करें",
    completeChapters: "पूर्ण अध्याय",
    completeChaptersDesc: "अर्जुन और भगवान कृष्ण के बीच इंटरैक्टिव संवाद विस्तृत व्याख्याओं के साथ",
    meditationFeature: "पवित्र ध्यान",
    meditationFeatureDesc: "मार्गदर्शित ध्यान सत्रों के माध्यम से दिव्य से जुड़ें",
    spiritualWisdom: "आध्यात्मिक ज्ञान",
    spiritualWisdomDesc: "गीता से गहरे उपदेश और जीवन के पाठों तक पहुँचें",
    kidsVersion: "बच्चों के लिए संस्करण",
    kidsVersionDesc: "छोटे शिक्षार्थियों के लिए सरलीकृत व्याख्याएँ",
    historyOfBhagavadGita: "भगवद्गीता का इतिहास",
    historyOfBhagavadGitaText: "भगवद्गीता, जिसे अक्सर गीता कहा जाता है, 700 श्लोकों वाला एक हिंदू ग्रंथ है जो भारतीय महाकाव्य महाभारत का हिस्सा है। यह कुरुक्षेत्र के युद्धभूमि पर स्थित भगवान कृष्ण और पांडव राजकुमार अर्जुन के बीच एक संवाद है। गीता अर्जुन द्वारा सामना किए गए नैतिक और दार्शनिक संकटों को संबोधित करती है और कर्तव्य, धर्म और आध्यात्मिक मुक्ति के मार्ग पर समयरहित ज्ञान प्रदान करती है।",
    startLearning: "अपनी आध्यात्मिक यात्रा शुरू करें",
    explore: "अध्यायों का अन्वेषण करें",
    beginMeditation: "ध्यान शुरू करें",
    chants: "पवित्र मंत्र",
    exploreShlokas: "श्लोकों का अन्वेषण करें",
    
    // Navigation translations
    home: "मुख्य पृष्ठ",
    chapters: "अध्याय",
    meditation: "ध्यान",
    chantsNav: "मंत्र",
    about: "परिचय",
    language: "भाषा",
    
    // ChaptersPage translations
    chaptersTitle: "पवित्र भगवद्गीता के अध्याय",
    chaptersSubtitle: "18 दिव्य अध्यायों का इंटरैक्टिव संवाद के साथ अन्वेषण करें",
    conversations: "संवाद",
    loading: "अध्याय लोड हो रहे हैं...",
    
    // PodcastPage translations
    dialogues: "संवाद",
    
    // MeditationPage translations
    sacredMeditation: "पवित्र ध्यान",
    meditationSubtitle: "केंद्रित ध्यान के माध्यम से दिव्य से जुड़ें",
    selectDuration: "अवधि का चयन करें",
    beginMeditationBtn: "ध्यान शुरू करें",
    stopMeditation: "ध्यान रोकें",
    minutes: "मिनट",
    // Meditation completion messages
    meditationCompletedTitle: "ध्यान पूर्ण",
    meditationCompletedMessage: "आपने अपना ध्यान सत्र सफलतापूर्वक पूरा कर लिया है। शांति और स्पष्टता पर प्रतिबिंबित करने के लिए एक क्षण लें जिसे आपने विकसित किया है।",
    meditationBenefits: "नियमित ध्यान के लाभ:",
    meditationBenefit1: "तनाव और चिंता को कम करता है",
    meditationBenefit2: "ध्यान और एकाग्रता में सुधार करता है",
    meditationBenefit3: "भावनात्मक सुभाव को बढ़ावा देता है",
    meditationBenefit4: "आत्म-जागरूकता को बढ़ाता है",
    meditationBenefit5: "आंतरिक शांति और आध्यात्मिक विकास को प्रोत्साहित करता है",
    continueMeditation: "ध्यान जारी रखें",
    exploreChants: "मंत्रों का अन्वेषण करें",
    
    // ChantsPage translations
    sacredChants: "पवित्र मंत्र",
    chantsSubtitle: "भक्ति के साथ दिव्य नामों का जप करें",
    startChanting: "जप शुरू करें",
    stopChanting: "जप रोकें",
    
    // AboutPage translations
    aboutMission: "हमारा उद्देश्य",
    aboutMissionText: "भगवद्गीता के गहरे उपदेशों को इंटरैक्टिव तकनीक और बहुभाषी समर्थन के माध्यम से हर किसी के लिए सुलभ बनाना।",
    developmentTeam: "विकास टीम",
    developmentTeamText: "विकासकर्ताओं, आध्यात्मिक विद्वानों और डिजाइनरों की एक समर्पित टीम जो एक आकर्षक अनुभव पैदा करने के लिए मिलकर काम कर रही है।",
    appFeatures: "ऐप की विशेषताएँ",
    appFeaturesList: [
      "अर्जुन और भगवान कृष्ण के बीच इंटरैक्टिव संवाद",
      "बहुभाषी समर्थन (अंग्रेजी, हिंदी, तेलुगु)",
      "मार्गदर्शित ध्यान सत्र",
      "पवित्र जप और मंत्र",
      "बच्चों के अनुकूल व्याख्याएँ",
      "दिव्य स्वरों के साथ ऑडियो वर्णन",
      "भारतीय आध्यात्मिकता से प्रेरित सुंदर दृश्य डिज़ाइन"
    ],
    contactUs: "संपर्क करें",
    contactUsText: "प्रतिक्रिया, सुझाव या आध्यात्मिक मार्गदर्शन के लिए, कृपया हमसे संपर्क करें karthiksai5421@gmail.com पर",
    
    // New AboutPage translations
    additionalFunctions: "अतिरिक्त कार्य और उपयोग",
    interactiveLearning: "इंटरैक्टिव लर्निंग",
    interactiveLearningDesc: "अर्जुन और भगवान कृष्ण के बीच संवाद का अनुभव एक आकर्षक, इंटरैक्टिव प्रारूप में जो उपदेशों को जीवंत बनाता है",
    multilingualSupport: "बहुभाषी समर्थन",
    multilingualSupportDesc: "व्यापक दर्शकों तक पहुँचने के लिए अंग्रेजी, हिंदी और तेलुगु में उपदेशों तक पहुँचें",
    
    sacredMeditationDesc: "गीता के सिद्धांतों पर आधारित मार्गदर्शित ध्यान सत्रों के माध्यम से दिव्य से जुड़ें",
    devotionalChants: "भक्तिपूर्ण मंत्र",
    devotionalChantsDesc: "गहरे आध्यात्मिक संबंध के लिए ऑडियो समर्थन के साथ पवित्र मंत्रों और स्तोत्रों का जप करें",
    kidsFriendly: "बच्चों के अनुकूल संस्करण",
    kidsFriendlyDesc: "छोटे शिक्षार्थियों के लिए विशेष रूप से डिज़ाइन किए गए सरलीकृत व्याख्याएँ और सामग्री",
    progressiveLearning: "प्रगतिशील शिक्षण",
    progressiveLearningDesc: "संरचित अध्याय जो उपयोगकर्ताओं को मूल अवधारणाओं से उन्नत आध्यात्मिक ज्ञान की ओर मार्गदर्शन करते हैं",
    emotionalConnection: "भावनात्मक संबंध",
    emotionalConnectionDesc: "दृश्य तत्व और एनीमेशन जो संवाद के भावनात्मक संदर्भ के अनुसार प्रतिक्रिया करते हैं",
    offlineAccess: "ऑफ़लाइन पहुँच",
    offlineAccessDesc: "इंटरनेट कनेक्शन के बिना उपदेशों को डाउनलोड और एक्सेस करें",
    personalReflection: "व्यक्तिगत प्रतिबिंब",
    personalReflectionDesc: "उपदेशों पर नियमित लेखन और व्यक्तिगत प्रतिबिंब के लिए उपकरण",
    
    howToUseApp: "इस ऐप का उपयोग कैसे करें",
    exploreChaptersStep: "1. अध्यायों का अन्वेषण करें",
    exploreChaptersDesc: "अर्जुन और भगवान कृष्ण के बीच इंटरैक्टिव संवाद के साथ भगवद्गीता के 18 अध्यायों के माध्यम से नेविगेट करें।",
    engageMeditationStep: "2. ध्यान में लगें",
    engageMeditationDesc: "आध्यात्मिक उपदेशों को आंतरिक रूप से समझने और आंतरिक शांति पाने के लिए मार्गदर्शित ध्यान सत्रों में भाग लें।",
    chantMantrasStep: "3. पवित्र मंत्रों का जप करें",
    chantMantrasDesc: "गीता और अन्य धार्मिक ग्रंथों के पवित्र नामों और श्लोकों के जप के माध्यम से दिव्य से जुड़ें।",
    learnAtPaceStep: "4. अपनी गति से सीखें",
    learnAtPaceDesc: "अपने स्तर के अनुसार उपदेशों को समझने के लिए बच्चों के अनुकूल संस्करण या विस्तृत व्याख्याओं का उपयोग करें।",
    
    spiritualBenefits: "आध्यात्मिक लाभ",
    lifePurpose: "जीवन के उद्देश्य और अर्थ पर स्पष्टता प्राप्त करें",
    mentalStrength: "मानसिक शक्ति और भावनात्मक लचीलापन विकसित करें",
    cultivateDetachment: "दैनिक जीवन में वैराग्य और समता का पोषण करें",
    selfRealization: "आत्म-साक्षात्कार और मुक्ति के मार्ग को समझें",
    practicalWisdom: "निर्णय लेने और नैतिक जीवन जीने के लिए व्यावहारिक ज्ञान सीखें",
    innerPeace: "आंतरिक शांति और आध्यात्मिक विकास का अनुभव करें",
    ancientWisdom: "समकालीन संदर्भ में प्राचीन ज्ञान से जुड़ें",
    dailyPractice: "अपनी जीवनशैली के अनुरूप एक दैनिक आध्यात्मिक अभ्यास बनाएं",
    
    spiritualAdvisors: "हमारे आध्यात्मिक सलाहकार",
    vedicScholars: "संस्कृत ग्रंथों की गहरी समझ वाले वैदिक विद्वान",
    yogaMasters: "गीता उपदेशों के व्यावहारिक अनुप्रयोग में अनुभवी योग मास्टर",
    devotionalPractitioners: "भक्तिपूर्ण अभ्यासक जो प्रतिदिन उपदेशों को जीते हैं",
    
    technicalTeam: "हमारी तकनीकी टीम",
    uiUxDesigners: "आध्यात्मिक अनुप्रयोगों में विशेषज्ञता रखने वाले UI/UX डिजाइनर",
    frontendDevelopers: "इंटरैक्टिव लर्निंग प्लेटफॉर्म में अनुभव रखने वाले फ्रंटएंड डेवलपर्स",
    audioEngineers: "आकर्षक ध्वनि अनुभव पैदा करने वाले ऑडियो इंजीनियर",
    contentSpecialists: "सटीकता और पहुँच को सुनिश्चित करने वाले सामग्री विशेषज्ञ",
    
    // ChapterDetailsPage translations
    chapterNotFound: "अध्याय नहीं मिला",
    backToChapters: "अध्यायों पर वापस जाएं",
    previousChapter: "पिछला अध्याय",
    nextChapter: "अगला अध्याय",
    verse: "श्लोक",
    translation: "अनुवाद",
    meaning: "अर्थ",
    speak: "बोलें",
    stopSpeaking: "बोलना बंद करें",
    askQuestion: "प्रश्न पूछें",
    divineAnswer: "दिव्य उत्तर",
    summaryTitle: "अध्याय सारांश",
    teachingsTitle: "मुख्य उपदेश",
    
    // Audio controls
    playMusic: "संगीत बजाएं",
    muteMusic: "संगीत म्यूट करें",
    volumeControl: "आवाज नियंत्रण"
  },
  te: {
    // HomePage translations
    heroTitle: " కృష్ణుని పవిత్ర ఉపదేశాలు",
    heroSubtitle: "ఇంటరాక్టివ్ లర్నింగ్, ధ్యానం మరియు భక్తి ద్వారా భగవద్గీత యొక్క దివ్య జ్ఞానాన్ని అనుభవించండి",
    exploreTeachings: "ఉపదేశాలను అన్వేషించండి",
    completeChapters: "పూర్తి అధ్యాయాలు",
    completeChaptersDesc: "వివరణాత్మక వివరణలతో అర్జునుడికి మరియు ప్రభువు కృష్ణునికి మధ్య ఇంటరాక్టివ్ సంభాషణ",
    meditationFeature: "పవిత్ర ధ్యానం",
    meditationFeatureDesc: "మార్గదర్శిత ధ్యాన సెషన్ల ద్వారా దివ్యునితో కలిసి ఉండండి",
    spiritualWisdom: "ఆధ్యాత్మిక జ్ఞానం",
    spiritualWisdomDesc: "గీతల నుండి లోతైన ఉపదేశాలు మరియు జీవిత పాఠాలను పొందండి",
    kidsVersion: "పిల్లల అనుకూల సంస్కరణ",
    kidsVersionDesc: "చిన్న బాలురికి సరళీకృత వివరణలు",
    historyOfBhagavadGita: "భగవద్గీత యొక్క చరిత్ర",
    historyOfBhagavadGitaText: "భగవద్గీత, దీనిని తరచుగా గీత అని పిలుస్తారు, 700 శ్లోకాల హిందూ గ్రంథం అయిన భారతీయ మహాకావ్యం మహాభారతంలో భాగం. ఇది కురుక్షేత్ర యుద్ధభూమిలో ప్రభువు కృష్ణుడికి మరియు పాండవ రాజకుమారుడు అర్జునుడికి మధ్య సంభాషణ. గీత అర్జునుడు ఎదుర్కొంటున్న నైతిక మరియు తత్వశాస్త్రపరమైన సంక్లిష్టతలను పరిష్కరిస్తుంది మరియు కర్తవ్యం, ధర్మం మరియు ఆధ్యాత్మిక విముక్తి మార్గంపై సమయానికి అతీతమైన జ్ఞానాన్ని అందిస్తుంది.",
    startLearning: "మీ ఆధ్యాత్మిక ప్రయాణాన్ని ప్రారంభించండి",
    explore: "అధ్యాయాలను అన్వేషించండి",
    beginMeditation: "ధ్యానం ప్రారంభించండి",
    chants: "పవిత్ర మంత్రాలు",
    exploreShlokas: "శ్లోకాలను అన్వేషించండి",
    
    // Navigation translations
    home: "హోమ్",
    chapters: "అధ్యాయాలు",
    meditation: "ధ్యానం",
    chantsNav: "మంత్రాలు",
    about: "గురించి",
    language: "భాష",
    
    // ChaptersPage translations
    chaptersTitle: "భగవద్గీత యొక్క పవిత్ర అధ్యాయాలు",
    chaptersSubtitle: "ఇంటరాక్టివ్ సంభాషణతో 18 దివ్య అధ్యాయాలను అన్వేషించండి",
    conversations: "సంభాషణలు",
    loading: "అధ్యాయాలు లోడ్ అవుతున్నాయి...",

    // PodcastPage translations
    dialogues: "సంభాషణలు",
    
    // MeditationPage translations
    sacredMeditation: "పవిత్ర ధ్యానం",
    meditationSubtitle: "దృఢపరచిన ధ్యానం ద్వారా దివ్యునితో కలిసి ఉండండి",
    selectDuration: "వ్యవధిని ఎంచుకోండి",
    beginMeditationBtn: "ధ్యానం ప్రారంభించండి",
    stopMeditation: "ధ్యానం ఆపండి",
    minutes: "నిమిషాలు",
    // Meditation completion messages
    meditationCompletedTitle: "ధ్యానం పూర్తయింది",
    meditationCompletedMessage: "మీరు మీ ధ్యాన సెషన్‌ను విజయవంతంగా పూర్తి చేశారు. మీరు పెంపొందించిన శాంతి మరియు స్పష్టతపై ప్రతిబింబించడానికి కొంత సమయం తీసుకోండి.",
    meditationBenefits: "ఉన్నత ధ్యానం యొక్క ప్రయోజనాలు:",
    meditationBenefit1: "ఒత్తిడి మరియు ఆందోళనను తగ్గిస్తుంది",
    meditationBenefit2: "దృష్టి మరియు ఏకాగ్రతను మెరుగుపరుస్తుంది",
    meditationBenefit3: "భావోద్వేగ సుభావాన్ని ప్రోత్సహిస్తుంది",
    meditationBenefit4: "ఆత్మ-అవగాహనను పెంచుతుంది",
    meditationBenefit5: "అంతర్గత శాంతి మరియు ఆధ్యాత్మిక వికాసాన్ని ప్రోత్సహిస్తుంది",
    continueMeditation: "ధ్యానం కొనసాగించండి",
    exploreChants: "మంత్రాలను అన్వేషించండి",
    
    
    
    // ChantsPage translations
    sacredChants: "పవిత్ర మంత్రాలు",
    chantsSubtitle: "భక్తితో దివ్య నామాలను జపించండి",
    startChanting: "జపం ప్రారంభించండి",
    stopChanting: "జపం ఆపండి",
    
    // AboutPage translations
    aboutMission: "మా మిషన్",
    aboutMissionText: "ఇంటరాక్టివ్ టెక్నాలజీ మరియు బహుభాషా మద్దతు ద్వారా భగవద్గీత యొక్క లోతైన ఉపదేశాలను ప్రతి ఒక్కరికీ సులభంగా చేయడం.",
    developmentTeam: "వికాస జట్టు",
    developmentTeamText: "ఒక అంకిత జట్టు అభివృద్ధికారులు, ఆధ్యాత్మిక పండితులు మరియు డిజైనర్లు కలిసి ఒక ఆకర్షకమైన అనుభవాన్ని సృష్టించడానికి పనిచేస్తున్నారు.",
    appFeatures: "యాప్ లక్షణాలు",
    appFeaturesList: [
      "అర్జునుడికి మరియు  కృష్ణునికి మధ్య ఇంటరాక్టివ్ సంభాషణ",
      "బహుభాషా మద్దతు (ఆంగ్లం, హిందీ, తెలుగు)",
      "మార్గదర్శిత ధ్యాన సెషన్లు",
      "పవిత్ర జపాలు మరియు మంత్రాలు",
      "పిల్లల అనుకూల వివరణలు",
      "దివ్య స్వరాలతో ఆడియో వర్ణన",
      "భారతీయ ఆధ్యాత్మికత నుండి ప్రేరితమైన అందమైన దృశ్య డిజైన్"
    ],
    contactUs: "సంప్రదించండి",
    contactUsText: "ప్రతిస్పందన, సూచనలు లేదా ఆధ్యాత్మిక మార్గదర్శనం కోసం, దయచేసి మమ్మల్ని సంప్రదించండి karthiksai5421@gmail.com",
    // New AboutPage translations
    additionalFunctions: "అదనపు ఫంక్షన్లు మరియు ఉపయోగాలు",
    interactiveLearning: "ఇంటరాక్టివ్ లర్నింగ్",
    interactiveLearningDesc: "ఉపదేశాలను జీవంతంగా చేసే ఒక ఆకర్షకమైన, ఇంటరాక్టివ్ ఫార్మాట్ లో అర్జునుడికి మరియు ప్రభువు కృష్ణునికి మధ్య సంభాషణను అనుభవించండి",
    multilingualSupport: "బహుభాషా మద్దతు",
    multilingualSupportDesc: "వ్యాప్తిగల ప్రేక్షకులకు చేరుకోవడానికి ఆంగ్లం, హిందీ మరియు తెలుగులో ఉపదేశాలను పొందండి",
    sacredMeditationDesc: "గీత సూత్రాలపై ఆధారపడిన మార్గదర్శిత ధ్యాన సెషన్ల ద్వారా దివ్యునితో కలిసి ఉండండి",
    devotionalChants: "భక్తిపూర్వక మంత్రాలు",
    devotionalChantsDesc: "లోతైన ఆధ్యాత్మిక సంబంధం కోసం ఆడియో మద్దతుతో పవిత్ర మంత్రాలు మరియు స్తోత్రాలను జపించండి",
    kidsFriendly: "పిల్లల అనుకూల సంస్కరణ",
    kidsFriendlyDesc: "చిన్న బాలురికి ప్రత్యేకంగా రూపొందించబడిన సరళీకృత వివరణలు మరియు సామగ్రి",
    progressiveLearning: "పురోగమిస్తున్న నేర్చుకోవడం",
    progressiveLearningDesc: "ప్రాథమిక భావనల నుండి ఉన్నత ఆధ్యాత్మిక జ్ఞానం వరకు వినియోగదారులను మార్గదర్శకం చేసే నిర్మాణాత్మక అధ్యాయాలు",
    emotionalConnection: "భావోద్వేగ సంబంధం",
    emotionalConnectionDesc: "సంభాషణ యొక్క భావోద్వేగ సందర్భానికి ప్రతిస్పందిస్తాయి దృశ్య అంశాలు మరియు యానిమేషన్లు",
    offlineAccess: "ఆఫ్‌లైన్ యాక్సెస్",
    offlineAccessDesc: "ఇంటర్నెట్ కనెక్షన్ లేకుండా ఉపదేశాలను డౌన్‌లోడ్ చేసి యాక్సెస్ చేయండి",
    personalReflection: "వ్యక్తిగత ప్రతిబింబనం",
    personalReflectionDesc: "ఉపదేశాలపై జర్నలింగ్ మరియు వ్యక్తిగత ప్రతిబింబన కోసం సాధనాలు",
    
    howToUseApp: "ఈ యాప్‌ను ఎలా ఉపయోగించాలి",
    exploreChaptersStep: "1. అధ్యాయాలను అన్వేషించండి",
    exploreChaptersDesc: "అర్జునుడికి మరియు ప్రభువు కృష్ణునికి మధ్య ఇంటరాక్టివ్ సంభాషణతో భగవద్గీత యొక్క 18 అధ్యాయాల ద్వారా మార్గదర్శకం అవ్వండి.",
    engageMeditationStep: "2. ధ్యానంలో పాల్గొనండి",
    engageMeditationDesc: "ఆధ్యాత్మిక ఉపదేశాలను అంతర్గతంగా స్వీకరించడానికి మరియు అంతర్గత శాంతిని కనుగొనడానికి మార్గదర్శిత ధ్యాన సెషన్లలో పాల్గొనండి.",
    chantMantrasStep: "3. పవిత్ర మంత్రాలను జపించండి",
    chantMantrasDesc: "గీత మరియు ఇతర ధార్మిక గ్రంథాల నుండి పవిత్ర పేర్లు మరియు శ్లోకాలను జపించడం ద్వారా దివ్యునితో కలిసి ఉండండి.",
    learnAtPaceStep: "4. మీ వేగంలో నేర్చుకోండి",
    learnAtPaceDesc: "మీ స్థాయికి అనుగుణంగా ఉపదేశాలను అర్థం చేసుకోడానికి పిల్లల అనుకూల సంస్కరణ లేదా వివరణాత్మక వివరణలను ఉపయోగించండి.",
    
    spiritualBenefits: "ఆధ్యాత్మిక ప్రయోజనాలు",
    lifePurpose: "జీవిత ఉద్దేశ్యం మరియు అర్థంపై స్పష్టత పొందండి",
    mentalStrength: "మానసిక బలం మరియు భావోద్వేగ ధైర్యాన్ని అభివృద్ధి చేసుకోండి",
    cultivateDetachment: "దైనిక జీవితంలో వైరాగ్యం మరియు సమత్వాన్ని పెంపొందించుకోండి",
    selfRealization: "ఆత్మ సాక్షాత్కారం మరియు విముక్తి మార్గాన్ని అర్థం చేసుకోండి",
    practicalWisdom: "నిర్ణయాలు తీసుకోవడం మరియు నైతిక జీవితం గడపడం కోసం వ్యావహారిక జ్ఞానాన్ని నేర్చుకోండి",
    innerPeace: "అంతర్గత శాంతి మరియు ఆధ్యాత్మిక వికాసాన్ని అనుభవించండి",
    ancientWisdom: "సమకాలీన సందర్భంలో పురాతన జ్ఞానాన్ని కలపండి",
    dailyPractice: "మీ జీవన శైలికి అనుగుణంగా దైనిక ఆధ్యాత్మిక అభ్యాసాన్ని నిర్మించండి",
    
    spiritualAdvisors: "మా ఆధ్యాత్మిక సలహాదారులు",
    vedicScholars: "సంస్కృత పాఠాలపై లోతైన అర్థం ఉన్న వేద పండితులు",
    yogaMasters: "గీత ఉపదేశాల వ్యావహారిక అనువర్తనంలో అనుభవం ఉన్న యోగ మాస్టర్లు",
    devotionalPractitioners: "ప్రతిరోజూ ఉపదేశాలను జీవిస్తున్న భక్తిపూర్వక అభ్యాసకులు",
    
    technicalTeam: "మా సాంకేతిక జట్టు",
    uiUxDesigners: "ఆధ్యాత్మిక అనువర్తనాలలో ప్రత్యేకత కలిగిన UI/UX డిజైనర్లు",
    frontendDevelopers: "ఇంటరాక్టివ్ లర్నింగ్ ప్లాట్‌ఫారమ్‌లలో అనుభవం ఉన్న ఫ్రంటెండ్ డెవలపర్లు",
    audioEngineers: "ఆకర్షకమైన ధ్వని అనుభవాలను సృష్టిస్తున్న ఆడియో ఇంజనీర్లు",
    contentSpecialists: "ఖచ్చితత్వం మరియు ప్రాప్తతను ఖాయం చేసే కంటెంట్ ప్రత్యేక నిపుణులు",
    
    // ChapterDetailsPage translations
    chapterNotFound: "అధ్యాయం కనబడలేదు",
    backToChapters: "అధ్యాయాలకు తిరిగి వెళ్ళండి",
    previousChapter: "గత అధ్యాయం",
    nextChapter: "తదుపరి అధ్యాయం",
    verse: "శ్లోకం",
    translation: "అనువాదం",
    meaning: "అర్థం",
    speak: "మాట్లాడు",
    stopSpeaking: "మాట్లాడటం ఆపు",
    askQuestion: "ప్రశ్న అడగండి",
    divineAnswer: "దివ్య సమాధానం",
    summaryTitle: "అధ్యాయ సారాంశం",
    teachingsTitle: "ప్రధాన ఉపదేశాలు",
    
    // Audio controls
    playMusic: "సంగీతం ప్లే చేయండి",
    muteMusic: "సంగీతం మ్యూట్ చేయండి",
    volumeControl: "సౌండ్ నియంత్రణ"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  const t = useCallback((key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  }, [language]);

  // Provide the radhaKrishnaMantras data
  const radhaKrishnaMantras = stotrasData;

  return (
    <LanguageContext.Provider value={{ 
      language, 
      switchLanguage, 
      t,
      radhaKrishnaMantras
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
