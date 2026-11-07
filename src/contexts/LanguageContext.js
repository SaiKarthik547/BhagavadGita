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
        name: "Sri Krishna Ashtakam(bhaje vrajaikamaṇḍanaṃ)",
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
       name: "Sri Krishna Ashtakam (vasudēvasutaṁ)",
       text: "vasudēvasutaṁ dēvaṁ kaṁsacāṇūramardanam |\ndēvakīparamānandaṁ kr̥ṣṇaṁ vandē jagadgurum || 1 ||\natasīpuṣpasaṅkāśaṁ hāranūpuraśōbhitam |\nratnakaṅkaṇakēyūraṁ kr̥ṣṇaṁ vandē jagadgurum || 2 ||\nkuṭilālakasamyuktaṁ pūrṇacandranibhānanam |\nvilasatkuṇḍaladharaṁ kr̥ṣṇaṁ vandē jagadgurum || 3 ||\nmandāragandhasamyuktaṁ cāruhāsaṁ caturbhujam |\nbarhipiñchāvacūḍāṅgaṁ kr̥ṣṇaṁ vandē jagadgurum || 4 ||\nutphullapadmapatrākṣaṁ nīlajīmūtasannibham |\nyādavānāṁ śirōratnaṁ kr̥ṣṇaṁ vandē jagadgurum || 5 ||\nrukmiṇīkēlisamyuktaṁ pītāmbarasuśōbhitam |\navāptatulasīgandhaṁ kr̥ṣṇaṁ vandē jagadgurum || 6 ||\ngōpikānāṁ kucadvandvakuṅkumāṅkitavakṣasam |\nśrīnikētaṁ mahēṣvāsaṁ kr̥ṣṇaṁ vandē jagadgurum || 7 ||\nśrīvatsāṅkaṁ mahōraskaṁ vanamālāvirājitam |\nśaṅkhacakradharaṁ dēvaṁ kr̥ṣṇaṁ vandē jagadgurum || 8 ||\nkr̥ṣṇāṣṭakamidaṁ puṇyaṁ prātarutthāya yaḥ paṭhēt |\nkōṭijanmakr̥taṁ pāpaṁ smaraṇēna vinaśyati || 9 ||",
       meaning: "This hymn, known as Sri Krishna Ashtakam, is attributed to the great philosopher Adi Shankaracharya. It is recited as a prayer to Lord Krishna, typically in the morning. The effect of chanting this stotra, as mentioned in its final verse (Phala Shruti), is the destruction of sins accumulated over millions of births, leading to spiritual purification and divine grace."
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
        text: "śrīmānvēṅkaṭanāthāryaḥ kavitārkikakēsarī |\nvēdāntācāryavaryō mē sannidhattāṁ sadā hr̥di ||\n\nvandē br̥ndāvanacaraṁ vallavījanavallabham |\njayantīsambhavaṁ dhāma vaijayantīvibhūṣaṇam || 1 ||\n\nvācaṁ nijāṅkarasikāṁ prasamīkṣamāṇō\nvaktrāravindavinivēśitapāñcajanyaḥ |\nvarṇatrikōṇarucirē varapuṇḍarīkē\nbaddhāsanō jayati vallavacakravartī || 2 ||\n\nāmnāyagandhiruditasphuritādharōṣṭhaṁ\nāsrāvilēkṣaṇamanukṣaṇamandahāsam |\ngōpālaḍimbhavapuṣaṁ kuhanājananyāḥ\nprāṇastanandhayamavaimi paraṁ pumāṁsam || 3 ||\n\nāvirbhavatvanibhr̥tābharaṇaṁ purastāt\nākuñcitaikacaraṇaṁ nibhr̥tānyapādam |\ndadhnā nimanthamukharēṇa nibaddhatālaṁ\nnāthasya nandabhavanē navanītanāṭyam || 4 ||\n\nhartuṁ kumbhē vinihitakaraḥ svādu haiyaṅgavīnaṁ\ndr̥ṣṭvā dāmagrahaṇacaṭulāṁ mātaraṁ jātarōṣām |\npāyāttaḥ svāṁ kapilakaruṇaḥ kō'pi gōpāladimbhaḥ\nkampaistōkē sthitamaruṇitaṁ locanaṁ vyādadhadnaḥ || 5 ||\n\nvrajayōṣidapāṅgavēdhanīyaṁ\nmadhurābhāgyamananyabhōgyamīḍē |\nvasudēvavadhūstanandhayaṁ tat\nkimapi brahma kiśōrabhāvadr̥śyam || 6 ||\n\nparivartitakandharaṁ bhayēna\nsmitaphullādharapallavaṁ smarāmi |\nviṭapitvanirāsakaṁ kayōścit\nvipulōlūkhalakarṣakaṁ kumāram || 7 ||\n\nnikaṭēṣu niśāmayāmi nityaṁ\nnigamāntairadhunā'pi mr̥gyamāṇam |\nyamalārjunadr̥ṣṭabālakēliṁ\nyamunāsākṣikayauvanaṁ yuvānam || 8 ||\n\npadavīmadavīyasīṁ vimuktēḥ\naṭavīsampadamambuvāhayantīm |\naruṇādharasābhilāṣavaṁśāṁ\nkaruṇāṁ kāraṇamānuṣīṁ bhajāmi || 9 ||\n\nanimēṣaniṣēvaṇīyamakṣṇōḥ\najahadyauvanamāvirastu cittē |\nkalahāyitakuntalaṁ kalāpaiḥ\nkaruṇōnmādakavibhramaṁ mahō mē || 10 ||\n\nanuyāyimanōjñavaṁśanālaiḥ\navatu sparśitavallavīvimōhaiḥ |\nanaghasmitaśītalairasau māṁ\nanukampāsaridambujairapāṅgaiḥ || 11 ||\n\nadharāhitacāruvaṁśanālāḥ\nmakuṭālambimayūrapiñchamālāḥ |\nharinīlaśilāvibhaṅganīlāḥ\npratibhāḥ santu mamāntimaprayāṇē || 12 ||\n\nakhilānavalōkayāmi kālān\nmahilādhīnabhujāntarasya yūnaḥ |\nabhilāṣapadaṁ vrajāṅganānāṁ\nabhilāpakramadūramābhirūpyam || 13 ||\n\nhr̥di mugdhaśikhaṇḍamaṇḍanō\nlikhitaḥ kēna mamaiṣa śilpinā |\nmadanāturavallavāṅganā-\nvadanāmbhōjadivākarō yuvā || 14 ||\n\nmahasē mahitāya maulinā\nvinatēnāñjalimañjanatviṣē |\nkalayāmivimugdhavallavī-\nvalayābhāṣitamañjuvēṇavē || 15 ||\n\njayati lalitavr̥ttiṁ śikṣitō vallavīnāṁ\nśithilavalayaśiñjāśītalairhastatālaiḥ |\nakhilabhuvanarakṣāgōpavēṣasya viṣṇōḥ\nadharamaṇisudhāyāmaṁśavān vaṁśanālaḥ || 16 ||\n\ncitrākalpaḥ śravasi kalayan lāṅgalīkarṇapūraṁ\nbarhōttaṁsasphuritacikurō bandhujīvaṁ dadhānaḥ |\nguñjābaddhāmurasi lalitāṁ dhārayan hārayaṣṭiṁ\ngōpastrīṇāṁ jayati kitavaḥ kō'pi kaumārahārī || 17 ||\n\nlīlāyaṣṭiṁ karakisalayē dakṣiṇē nyasya dhanyāṁ\naṁsē dēvyāḥ pulakarucirē sanniviṣṭānyabāhuḥ |\nmēghaśyāmō jayati lalitō mēkhalādattavēṇuḥ\nguñjāpīḍasphuritacikurō gōpakanyābhujaṅgaḥ || 18 ||\n\npratyālīḍhasthitimadhigatāṁ prāptagāḍhāṅkapāliṁ\npaścādīṣanmilitanayanāṁ prēyasīṁ prēkṣamāṇaḥ |\nbhastrāyantrapraṇihitakarō bhaktajīvāturavyāt\nvārikrīḍānibiḍavasanō vallavīvallabhō naḥ || 19 ||\n\nvāsō hr̥tvā dinakarasutāsannidhau vallavīnāṁ\nlīlāsmērō jayati lalitāmāsthitaḥ kundaśākhām |\nsavrīḍābhistadanu vasanē tābhirabhyarthyamānē\nkāmī kaścit karakamalayōrañjaliṁ yācamānaḥ || 20 ||\n\nityananyamanasā vinirmitāṁ\nvēṅkaṭēśakavinā stutiṁ paṭhan |\ndivyavēṇurasikaṁ samīkṣatē\ndaivataṁ kimapi yauvatapriyam || 21 ||",
        meaning: "Composed by Swami Vedanta Desika, this sacred 21-verse hymn ('Vimshati') is an exquisite poetic meditation on Lord Gopala (Sri Krishna). It portrays His enchanting childhood pastimes—stealing fresh butter, his tender fear of Mother Yashoda, his liberating the sons of Kubera from the twin trees, and his divine flute music that enchants the gopis. Verses 11–12 offer the celebrated prayer for the vision of Lord Gopala at life's final moment (antima-prayane). The concluding Phalashruti (Verse 21) promises that whoever recites this stotram with single-pointed devotion will attain the direct vision and grace of the Supreme Lord."
      },
      {
        name: "Sri Krishna Stotram (Radha Krutam)",
        text: "gōlōkanātha gōpīśa madīśa prāṇavallabha |\nhē dīnabandhō dīnēśa sarvēśvara namō'stu tē || 1 ||\n\ngōpēśa gōsamūhēśa yaśōdānandavardhana |\nnandātmaja sadānanda nityānanda namō'stu tē || 2 ||\n\nśatamanyōrmanyubhagna brahmadarpavināśaka |\nkālīyadamana prāṇanātha kr̥ṣṇa namō'stu tē || 3 ||\n\nśivānantēśa brahmēśa brāhmaṇēśa parātpara |\nbrahmasvarūpa brahmajña brahmabīja namō'stu tē || 4 ||\n\ncarācaratarōrbīja guṇātīta guṇātmaka |\nsukhadāyiñchubhadāyin santadāyin namō'stu tē || 5 ||\n\nprāṇādhikā priyā rādhā tvadādhīnā sadā prabhō |\nsarvasvaṁ mē mahābhāga prāṇanātha namō'stu tē || 6 ||\n\nityēvaṁ rādhikādēvī stutvā taṁ sarvapūjitam |\npraṇāmaṁ kurvatē bhaktyā kāmadaṁ mōkṣadaṁ harim || 7 ||",
        meaning: "Spoken by Srimati Radharani in the Brahma Vaivarta Purana (Sri Krishna Janma Khanda), this divine stotram worships Lord Krishna as the Lord of Goloka, the controller of creation, the subduer of pride (Indra and Brahma), and the life-breath of all devotees. The authentic Phalashruti confirms that reciting this hymn three times daily grants pure devotion (bhakti), removes all distress, and unites one with the divine abode of Goloka."
      },
      {
        name: "Sri Govardhanadhara Ashtakam",
        text: "gōpanārīmukhāmbhōjabhāskaraṁ vēṇuvādyakam |\nrādhikārasabhōktāraṁ gōvardhanadharaṁ bhajē || 1 ||\n\nābhīranagarīprāṇapriyaṁ satyaparākramam |\nsvabhr̥tyabhayabhēttāraṁ gōvardhanadharaṁ bhajē || 2 ||\n\nvrajasstrīviprayōgāgninivārakamaharniśam |\nmahāmarakataśyāmaṁ gōvardhanadharaṁ bhajē || 3 ||\n\nnavakāñjanibhākṣaṁ ca gōpījanamanōharam |\nvanamālādharaṁ śāśvadgōvardhanadharaṁ bhajē || 4 ||\n\nbhaktavāñchākalpavr̥kṣaṁ navanītapayōmukham |\nyaśōdāmātr̥sānandaṁ gōvardhanadharaṁ bhajē || 5 ||\n\nanyakr̥tahr̥dbhāvapūrakaṁ pītavāsasam |\nrāsamaṇḍalamadhyasthaṁ gōvardhanadharaṁ bhajē || 6 ||\n\ndhvajavajrādisaccihna rājaccaraṇapaṅkajam |\nśr̥ṅgārarasamarmajñaṁ gōvardhanadharaṁ bhajē || 7 ||\n\npuruhūtamahāvr̥ṣṭirnāśakaṁ gōgaṇāvr̥tam |\nbhaktanētracakōrēnduṁ gōvardhanadharaṁ bhajē || 8 ||\n\ngōvardhanadharāṣṭakamidaṁ yaḥ prapaṭhēt sudhīḥ |\nsa sarvadā'nanyabhāvēna sa kr̥ṣṇē ratimāpnuyāt || 9 ||\n\nracitaṁ bhaktilābhāya dhārakāṇāṁ sanātanam |\nmuktidaṁ sarvajantūnāṁ gōvardhanadharāṣṭakam || 10 ||",
        meaning: "Composed in praise of Lord Krishna holding the sacred Govardhana Hill to shelter the inhabitants and cows of Vraja from torrential rains. The authentic Phalashruti (Verses 9–10) declares that reciting this Govardhanadhara Ashtakam with steadfast devotion bestows pure love (rati) for Sri Krishna, protects devotees from all planetary afflictions and calamities, and grants ultimate liberation (mukti)."
      },
      {
        name: "Sri Bala Mukundashtakam",
        text: "karāravindēna padāravindaṁ mukhāravindē vinivēśayantam |\nvaṭasya patrasya puṭē śayānaṁ bālaṁ mukundaṁ manasā smarāmi || 1 ||\n\nsaṁhr̥tya lōkān vaṭapatramadhyē śayānamādyantavihīnarūpam |\nsarvēśvaraṁ sarvahitāvatāraṁ bālaṁ mukundaṁ manasā smarāmi || 2 ||\n\nindīvaranīlaghanāvabhāsaṁ garbhōdadhāriṁ sukumārāṅgam |\ngōpāṅganālōlaninādamōhaṁ bālaṁ mukundaṁ manasā smarāmi || 3 ||\n\nśrīvatsavakṣaṁ sphuritēnduhāsaṁ gōpījanānāmabhidharmapālam |\nkālīyadarpapraśamāvadānaṁ bālaṁ mukundaṁ manasā smarāmi || 4 ||\n\nśikhaṇḍacūḍaṁ navanītacōraṁ navīnarūpaṁ nayanābhirāmam |\ngōpāla līlāvilasatkiraṇaṁ bālaṁ mukundaṁ manasā smarāmi || 5 ||\n\npītāmbaraṁ mañjulakēyūraṁ padmākṣamākuñcitakuntalaugham |\ngōpālabālaṁ jaganmōhanāṅgaṁ bālaṁ mukundaṁ manasā smarāmi || 6 ||\n\nyōgīndravandyaṁ bhuvanādhināthaṁ bhaktārtihantāramanantarūpam |\nkāruṇyapūrṇaṁ kaluṣāpahāraṁ bālaṁ mukundaṁ manasā smarāmi || 7 ||\n\nvaṭasya patrasya puṭē śayānaṁ brahmādibhirvanditapādapadmam |\nkāruṇyapāthōnidhimātmadevaṁ bālaṁ mukundaṁ manasā smarāmi || 8 ||\n\nśrī bālamukundāṣṭakaṁ yaḥ paṭhēt prātah samāhitaḥ |\nsarvapāpavinirmukto viṣṇulōkaṁ sa gacchati || 9 ||",
        meaning: "Sri Bala Mukundashtakam (attributed to Sri Lilashuka Bilvamangala Thakura) meditates on the divine infant Mukunda lying on a banyan leaf, placing His lotus foot into His lotus mouth. Canonical Significance & Phalashruti: Whoever recites this sacred ashtakam with focus every morning is freed from all sins, acquires purity of heart, and attains the eternal supreme abode of Lord Vishnu (Vaikuntha)."
      },
      {
        name: "Sri Radha Kripa Kataksha Stotram",
        text: "munīndravr̥ndavanditē trilōkaśōkahāriṇī\nprasannavaktrapaṅkajē nikuñjabhūvilāsinī |\nvrajēndrabhānunandinī vrajēndrasūnusangatē\nkadā kariṣyasīha māṁ kr̥pākaṭākṣabhājanam || 1 ||\n\naśōkavr̥kṣavallarīvitānamaṇḍapasthitē\npravālavālacallavē pravālajālakōmalē |\nanargaratnamaulidē virājamānamālikē\nkadā kariṣyasīha māṁ kr̥pākaṭākṣabhājanam || 2 ||\n\nanaṅgaraṅgamaṅgalaprasaṅgabhaṅgiyāsitē\nsavismatē kalyāṇadē manōharē sadāpriyē |\nanarghamālyabhūṣaṇē viśālalōcanānvitē\nkadā kariṣyasīha māṁ kr̥pākaṭākṣabhājanam || 3 ||\n\naśēṣalōkamōhinī surāsurēndravanditē\nsmitānanē manōharē nikuñjakelisaṁsthitē |\nsamastasampadaḥ pradē samastabhaktipālinī\nkadā kariṣyasīha māṁ kr̥pākaṭākṣabhājanam || 4 ||\n\nghanaśyāmamōhanē gōpījananandakāriṇī\nkr̥pāmukhē rasēśvarī parātpardēvī rādhikē |\nkalyāṇadātri sundarī jagattritāpahāriṇī\nkadā kariṣyasīha māṁ kr̥pākaṭākṣabhājanam || 5 ||",
        meaning: "Sri Radha Kripa Kataksha Stotram (revealed by Lord Shiva in the Urdhvamnaya Tantra) is the supreme prayer imploring the merciful glance (kripa-kataksha) of Sri Radha. Canonical Significance & Phalashruti: The soul who recites this stotra with sincere devotion is sheltered from worldly miseries, gains boundless spiritual prosperity, and attains the highest nectar of pure devotional love (prema-bhakti) for Radha-Krishna."
      },
      {
        name: "Sri Damodarashtakam",
        text: "namāmīśvaraṁ sac-cid-ānanda-rūpaṁ\nlasat-kuṇḍalaṁ gōkulē bhrājamānam |\nyaśōdā-bhiyōlūkhalād dhāvamānaṁ\nparāmr̥ṣṭam atyantatō drutya gōpyā || 1 ||\n\nrudantaṁ muhur nētra-yugmaṁ mr̥jantaṁ\nkarāmbhōja-yugmēna sātaṅka-nētram |\nmuhuḥ śvāsa-kampa-tri-rēkhāṅka-kaṇṭha-\nsthita-graivyaṁ dāmōdaraṁ bhakti-baddham || 2 ||\n\nitīdṛk sva-līlābhir ānanda-kuṇḍē\nsva-ghōṣaṁ nimajjantam ākhyāpayantam |\ntadīyēśita-jñēṣu bhaktair jitātvaṁ\npunaḥ prēmatas taṁ śatāvr̥tti vandē || 3 ||\n\nvaraṁ dēva mōkṣaṁ na mōkṣāvadhiṁ vā\nna cānyaṁ vr̥ṇē 'haṁ varēśād apīha |\nidaṁ tē vapur nātha gōpāla-bālaṁ\nsadā mē manasy āvirāstāṁ kim anyaiḥ || 4 ||\n\nidaṁ tē mukhāmbhōjam atyanta-nīlair\nvr̥taṁ kuntalaiḥ snigdha-raktaiś ca gōpyā |\nmuhuś cumbitaṁ bimba-raktādharaṁ mē\nmanasy āvirāstām alaṁ lakṣa-lābhēḥ || 5 ||\n\nnamō dēva dāmōdarānanta viṣṇō\nprasīda prabhō duḥkha-jālābdhi-magnam |\nkr̥pā-dr̥ṣṭi-vr̥ṣṭyāti-dīnaṁ batānu-\ngr̥hāṇēśa mām ajñam edhy akṣi-dr̥śyaḥ || 6 ||\n\nkuverātmajau baddha-mūrtyaiva yadvat\ntvayā mōcitau bhakti-bhājau kr̥tau ca |\ntathā prēma-bhaktiṁ svakāṁ mē prayaccha\nna mōkṣē grahō mē 'sti dāmōdarēha || 7 ||\n\nnamas tē 'stu dāmnē sphurad-dīpti-dhāmnē\ntvadīyōdarāyātha viśvasya dhāmnē |\nnamō rādhikāyai tvadīya-priyāyai\nnamō 'nanta-līlāya dēvāya tubhyam || 8 ||",
        meaning: "Sri Damodarashtakam (spoken by Satyavrata Muni in the Padma Purana) describes the Supreme Lord bound by Mother Yashoda's loving cord of pure devotion. Canonical Significance & Phalashruti: The devotee does not ask for mere liberation (moksha), but solely prays that Bala Damodara's beautiful pastimes eternally reside in the heart, granting unalloyed divine prema-bhakti."
      },
      {
        name: "Sri Jagannathashtakam",
        text: "kadācit kālindī-taṭa-vipina-saṅgītaravara-\nmudō gōpīnārī-vadana-kamalāsvāda-madhupaḥ |\nramāśambhubrahmāmarapati-gaṇēśārcita-padō\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 1 ||\n\nbhuje savye veṇuṁ śirasi śikhipicchaṁ kaṭitaṭē\ndukūlaṁ nētrāntē sahacarakaṭākṣaṁ vidadhatē |\nsadā śrīmad-vr̥ndāvana-vasati-līlā-paricayō\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 2 ||\n\nmahāmbhodhēs-tīrē hemamucura-sphīta-nikatē\nmahāpiṭhē hāṭaka-parama-haṁsānanarucē |\nparasyaiva prāṇaḥ sarasija-bhavārcya-caraṇō\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 3 ||\n\nkṛpā-pārāvāraḥ sajala-jalada-śreṇi-rucirō\nramā-vāṇī-rāmaḥ sphurad-amala-paṅkēruha-mukhaḥ |\nsurēndrair-ārādhyaḥ śruti-gaṇa-śikhā-gīta-caritō\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 4 ||\n\nrathārūḍhō gacchan pathi milita-bhūdeva-paṭalaiḥ\nstutibhir-hṛṣṭo 'ntarmukha-vinata-hārī prabhur-ayam |\ndayā-sindhur-bandhuḥ sakala-jagatāṁ sindhu-sutayā\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 5 ||\n\npara-brahmāpīḍaḥ kuvalaya-dalōtphulla-nayanō\nnivāsī nīlādrau nihita-caraṇō 'nanta-śirasi |\nrasānandō rādhā-sarasa-vapur-āliṅgana-sukho\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 6 ||\n\nna vai yācē rājyaṁ na ca kanaka-māṇikya-vibhavaṁ\nna yācē 'haṁ ramyāṁ sakala-jana-kāmyāṁ varavadhūm |\nsadā kālē kālē pramatha-patinā gīta-caritō\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 7 ||\n\nhara tvaṁ saṁsāraṁ drutataram-asāraṁ surapatē\nhara tvaṁ pāpānāṁ vitatim-aparāṁ yādavapatē |\nahō dīnē 'nāthē nihita-caraṇō niścitam-idaṁ\njagannāthaḥ svāmī nayana-pathagāmī bhavatu mē || 8 ||\n\njagannāthāṣṭakaṁ puṇyaṁ yaḥ paṭhēt prayataḥ śuciḥ |\nsarvapāpaviśuddhātmā viṣṇulōkē mahīyatē || 9 ||",
        meaning: "Sri Jagannathashtakam (composed by Adi Shankaracharya) is an ecstatic prayer yearning for Lord Jagannatha—the Lord of the Universe—to eternally appear on the path of one's vision. Canonical Significance & Phalashruti: The soul who recites this holy hymn with pure awareness is cleansed of all sins and is glorified in the eternal realm of Lord Vishnu (Vishnuloka)."
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
      name: "श्री कृष्णाष्टकम् (भजे व्रजैकमण्डनं)",
      text: "भजे व्रजैकमण्डनं समस्तपापखण्डनं\nस्वभक्तचित्तरञ्जनं सदैव नन्दनन्दनम् ।\nसुपिच्छगुच्छमस्तकं सुनादवेणुहस्तकं\nअनङ्गरङ्गसागरं नमामि कृष्णनागरम् ॥ १ ॥\nमनोज गर्वमोचनं विशाललोललोचनं\nविधूत गोपशोचनं नमामि पद्मलोचनम् ।\nकरारविन्दभूधरं स्मितावलोकसुन्दरं\nमहेन्द्रमानदारणं नमामि कृष्णवारणम् ॥ २ ॥\nकदम्बसूनकुण्डलं सुचारुगण्डमण्डलं\nव्रजाङ्गनैकवल्लभं नमामि कृष्णदुर्लभम् ।\nयशोदया समोदया सगोपया सनन्दया\nयुतं सुखैकदायकं नमामि गोपनायकम् ॥ ३ ॥\nसदैव पादपङ्कजं मदीयमानसेनिजं\nदधानमुत्तमालकं नमामि नन्दबालकम् ।\nसमस्तदोषशोषणं समस्तलोकपोषणं\nसमस्तगोपमानसं नमामि नन्दलालसम् ॥ ४ ॥\nभुवोभरावतारकं भवाब्धिकारणधारकं\nयशोमतीकिशोरकं नमामि चित्तचोरकम् ।\nदृगन्तकान्तभङ्गिनं सदा सदालसङ्गिनं\nदिने दिने नवं नवं नमामि नन्दसम्भवम् ॥ ५ ॥\nगुणाकरं सुखाकरं कृपाकरं कृपापरं\nसुरत्विषन्निकन्दनं नमामि गोपनन्दनम् ।\nनवीनगोपनागरं नवीनकेलिलम्पटं\nनमामि मेघसुन्दरं तटित्प्रभालसत्पटम् ॥ ६ ॥\nसमस्तगोपकान्तिहं दृगम्बुजैः समीहितं\nविलासकार्यकोविधं नमामि कुञ्जनागरम् ।\nरुदन्तमिज्ञया चिरं दिदृक्षयोत्तम श्रियः\nविलोकितं दृशाद्भुतं नमामि कृष्णमिष्टुतम् ॥ ७ ॥\nप्रणामदुःखशातनं पलाशनदिदोषं\nहरिप्रियं यतः परं नमामि कृष्णमीश्वरम् ।\nप्रपञ्चदोषनाशनं प्रणम्य पादपङ्कजे\nनिमज्जतां भवार्णवे नमामि कृष्णमर्थदम् ॥ ८ ॥\nश्रीकृष्णाष्टकमिदं प्रातः समुत्थाय यः पठेत् ।\nकोटिजन्मकृतं पापं स्मरणेन विनश्यति ॥ ९ ॥",
      meaning: "आदि शंकराचार्य द्वारा रचित आठ श्लोकों का यह भजन, नंद को आनंदित करने वाले भगवान कृष्ण की एक सुंदर आराधना है। प्रत्येक श्लोक उनके दिव्य रूप और चंचल स्वभाव का वर्णन करता है: उनका मोर पंख, बांसुरी, आकर्षक चितवन, और भक्तों के रक्षक के रूप में उनकी भूमिका। यह अष्टकम् उन्हें सभी पापों का नाश करने वाले और गोपियों और उनके सभी अनुयायियों के मन को मोह लेने वाले के रूप में मनाता है।"
    },
      {
       name: "श्री कृष्णाष्टकम् (वसुदेवसुतं)",
       text: "वसुदेवसुतं देवं कंसचाणूरमर्दनम् ।\nदेवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥ १ ॥\nअतसीपुष्पसङ्काशं हारनूपुरशोभितम् ।\nरत्नकङ्कणकेयूरं कृष्णं वन्दे जगद्गुरुम् ॥ २ ॥\nकुटिलालकसंयुक्तं पूर्णचन्द्रनिभाननम् ।\nविलसत्कुण्डलधरं कृष्णं वन्दे जगद्गुरुम् ॥ ३ ॥\nमन्दारगन्धसंयुक्तं चारुहासं चतुर्भुजम् ।\nबर्हिपिञ्छावचूडाङ्गं कृष्णं वन्दे जगद्गुरुम् ॥ ४ ॥\nउत्फुल्लपद्मपत्राक्षं नीलजीमूतसन्निभम् ।\nयादवानां शिरोरत्नं कृष्णं वन्दे जगद्गुरुम् ॥ ५ ॥\nरुक्मिणीकेलिसंयुक्तं पीताम्बरसुशोभितम् ।\nअवाप्ततुलसीगन्धं कृष्णं वन्दे जगद्गुरुम् ॥ ६ ॥\nगोपिकानां कुचद्वन्द्वकुङ्कुमाङ्कितवक्षसम् ।\nश्रीनिकेतं महेष्वासं कृष्णं वन्दे जगद्गुरुम् ॥ ७ ॥\nश्रीवत्साङ्कं महोरस्कं वनमालाविराजितम् ।\nशङ्खचक्रधरं देवं कृष्णं वन्दे जगद्गुरुम् ॥ ८ ॥\nकृष्णाष्टकमिदं पुण्यं प्रातरुत्थाय यः पठेत् ।\nकोटिजन्मकृतं पापं स्मरणेन विनश्यति ॥ ९ ॥",
       meaning: "यह भजन, जिसे श्री कृष्णाष्टकम् के नाम से जाना जाता है, महान दार्शनिक आदि शंकराचार्य द्वारा रचित माना जाता है। इसे भगवान कृष्ण की प्रार्थना के रूप में, आमतौर पर सुबह में, पढ़ा जाता है। इस स्तोत्र के अंतिम श्लोक (फलश्रुति) में वर्णित इसके जप का प्रभाव, लाखों जन्मों में संचित पापों का नाश, आध्यात्मिक शुद्धि और दैवीय कृपा की प्राप्ति है।"
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
        text: "श्रीमान्वेङ्कटनाथार्यः कवितार्किककेसरी ।\nवेदान्ताचार्यवर्यो मे सन्निधत्तां सदा हृदि ॥\n\nवन्दे वृन्दावनचरं वल्लवीजनवल्लभम् ।\nजयन्तीसम्भवं धाम वैजयन्तीविभूषणम् ॥ १ ॥\n\nवाचं निजाङ्करसिकां प्रसमीक्षमाणो\nवक्त्रारविन्दविनिवेशितपाञ्चजन्यः ।\nवर्णत्रिकोणरुचिरे वरपुण्डरीके\nबद्धासनो जयति वल्लवचक्रवर्ती ॥ २ ॥\n\nआम्नायगन्धिरुदितस्फुरिताधरोष्ठं\nआस्राविलेक्षणमनुक्षणमन्दहासम् ।\nगोपालडिम्भवपुषं कुहनाजनन्याः\nप्राणस्तनन्धयमवैमि परं पुमांसम् ॥ ३ ॥\n\nआविर्भवत्वनिभृताभरणं पुरस्तात्\nआकुञ्चितैकचरणं निभृतान्यपादम् ।\nदध्ना निमन्थमुखरेण निबद्धतालं\nनाथस्य नन्दभवने नवनीतनाट्यम् ॥ ४ ॥\n\nहर्तुं कुम्भे विनिहितकरः स्वादु हैयङ्गवीनं\nदृष्ट्वा दामग्रहणचटुलां मातरं जातरोषाम् ।\nपायात्तः स्वां कपिलकरुणः कोऽपि गोपालडिम्भः\nकम्पैस्तोके स्थितमरु णितं लोचनं व्यादधद्नः ॥ ५ ॥\n\nव्रजयोषिदपाङ्गवेदनीयं\nमधुराभाग्यमनन्यभोग्यमीडे ।\nवसुदेववधूस्तनन्धयं तत्\nकिमपि ब्रह्म किशोरभावदृश्यम् ॥ ६ ॥\n\nपरिवर्तितकन्धरं भयेन\nस्मितफुल्लाधरपल्लवं स्मरामि ।\nविटपित्वनिरासकं कयोश्चित्\nविपुलोलूखलकर्षकं कुमारम् ॥ ७ ॥\n\nनिकटेषु निशामयामि नित्यं\nनिगमान्तैरधुनाऽपि मृग्यमाणम् ।\nयमलाार्जुनदृष्टबालकेलिं\nयमुनासाक्षिकयौवनं युवानम् ॥ ८ ॥\n\nपदवीमदवीयसीं विमुक्तेः\nअटवीसम्पदमम्बुवाहयन्तीम् ।\nअरुणाधरresourceसाभिलाषवंशां\nकरुणां कारणमानुषीं भजामि ॥ ९ ॥\n\nअनिमेषनिषेवणीयमक्ष्णोः\nअजहद्यौवनमाविरास्तु चित्ते ।\nकलहायितकुन्तलं कलापैः\nकरुणोन्मादकविभ्रमं महो मे ॥ १० ॥\n\nअनुयायिमनोज्ञवंशनालैः\nअवतु स्पर्शितवल्लवीविमोहैः ।\nअनघस्मितशीतलैरसौ मां\nअनुकम्पासरिदम्बुजैरपाङ्गैः ॥ ११ ॥\n\nअधराहितचारुवंशनालाः\nमकुटालम्बिमयूरपिञ्छमालाः ।\nहरिनीलशिलाविभङ्गनीलाः\nप्रतिभाः सन्तु ममान्तिमप्रयाणे ॥ १२ ॥\n\nअखिलानवलोकयामि कालान्\nमहिलाधीनभुजान्तरस्य यूनः ।\nअभिलाषपदं व्रजाङ्गनानां\nअभिलापक्रमदूरमाभिरूप्यम् ॥ १३ ॥\n\nहृदि मुग्धशिखण्डमण्डनो\nलिखितः केन ममैष शिल्पिना ।\nमदनातुरवल्लवाङ्गना-\nवदनाम्भोजदिवाकरो युवा ॥ १४ ॥\n\nमहसे महिताय मौलिना\nविनतेनाञ्जलिमञ्जनत्विषे ।\nकलयामि विमुग्धवल्लवी-\nवलयाभाषितमञ्जुवेणवे ॥ १५ ॥\n\nजयति ललितवृत्तिं शिक्षितो वल्लवीनां\nशिथिलवलयशिञ्जाशीतलैर्हस्ततालैः ।\nअखिलभुवनरक्षागोपवेषस्य विष्णोः\nअधरमणिसुधायामंशवान् वंशनालः ॥ १६ ॥\n\nचित्राकल्पः श्रवसि कलयन् लाङ्गलीकर्णपूरं\nबर्होत्तंसस्फुरितचिकुरो बन्धुजीवं दधानः ।\nगुञ्जाबद्धामुरसि ललितां धारयन् हारयष्टिं\nगोपस्त्रीणां जयति कितवः कोऽपि कौमारहारी ॥ १७ ॥\n\nलीलायष्टिं करकिसलये दक्षिणे न्यस्य धन्यां\nअंसे देव्याः पुलकरुचिरे संनिविष्टान्यबाहुः ।\nमेघश्यामो जयति ललितो मेखलादत्तवेणुः\nगुञ्जापीडस्फुरितचिकुरो गोपकन्याभुजङ्गः ॥ १८ ॥\n\nप्रत्यालीढस्थितिमधिगतां प्राप्तगाढाङ्कपालिं\nपश्चादीषन्मिलितनयनां प्रेयसीं प्रेक्षमाणः ।\nभस्त्रायन्त्रप्रणिहितकरो भक्तजीवातुरव्यात्\nवारिक्रीडानिबिडवसनो वल्लवीवल्लभो नः ॥ १९ ॥\n\nवासो हृत्वा दिनकरसुतासन्निधौ वल्लवीनां\nलीलास्मेरो जयति ललितामास्थितः कुन्दशाखाम् ।\nसव्रीडाभिस्तदनु वसने ताभिरभ्यर्थ्यमाने\nकामी कश्चित् करकमलयोरञ्जलिं याचमानः ॥ २० ॥\n\nइत्यनन्यमनसा विनिर्मितां\nवेङ्कटेशकविना स्तुतिं पठन् ।\nदिव्यवेणुरसिकं समीक्षते\nदैवतं किमपि यौवतप्रियम् ॥ २१ ॥",
        meaning: "स्वामी वेदान्त देशिक द्वारा रचित यह पवित्र २१-श्लोकीय स्तोत्र ('विंशति') भगवान गोपाल (श्रीकृष्ण) का अत्यंत मधुर और दिव्य ध्यान है। इसमें श्रीकृष्ण की बाललीलाओं—माखन चोरी, माता यशोदा का वात्सल्य, यमलार्जुन उद्धार और गोपियों को मुग्ध करने वाली बंसी की मधुर तान का अद्भुत वर्णन है। श्लोक १२ में अंतिम प्रयाण के समय भगवान के नीलमणि सदृश मोरपंख-धारी चतुर्भुज दर्शन की पावन प्रार्थना है। फलश्रुति (श्लोक २१) के अनुसार जो अनन्य मन से इसका पाठ करता है, उसे वेणुगोपाल के साक्षात् दर्शन और कृपा प्राप्त होती है।"
      },
      {
        name: "श्री कृष्ण स्तोत्रम् (राधा कृतम्)",
        text: "गोलोकनाथ गोपीश मदीश प्राणवल्लभ ।\nहे दीनबन्धो दीनेश सर्वेश्वर नमोऽस्तु ते ॥ १ ॥\n\nगोपेश गोसमूहेश यशोदानन्दवर्धन ।\nनन्दात्मज सदानन्द नित्यानन्द नमोऽस्तु ते ॥ २ ॥\n\nशतमन्योर्मन्युभग्न ब्रह्मदर्पविनाशक ।\nकालीयदमन प्राणनाथ कृष्ण नमोऽस्तु ते ॥ ३ ॥\n\nशिवानन्तेश ब्रह्मेश ब्राह्मणेश परात्पर ।\nब्रह्मस्वरूप ब्रह्मज्ञ ब्रह्मबीज नमोऽस्तु ते ॥ ४ ॥\n\nचराचरतरोर्बीज गुणातीत गुणात्मक ।\nसुखदायिन्शुभदायिन् सन्तदायिन् नमोऽस्तु ते ॥ ५ ॥\n\nप्राणाधिका प्रिया राधा त्वदाधीना सदा प्रभो ।\nसर्वस्वं मे महाभाग प्राणनाथ नमोऽस्तु ते ॥ ६ ॥\n\nइत्येवं राधिकादेवी स्तुत्वा तं सर्वपूजितम् ।\nप्रणामं कुर्वते भक्त्या कामदं मोक्षदं हरिम् ॥ ७ ॥",
        meaning: "ब्रह्मवैवर्त पुराण (श्रीकृष्ण जन्म खंड) में वर्णित यह पावन स्तोत्र श्रीमती राधारानी द्वारा भगवान श्रीकृष्ण की स्तुति में गाया गया है। इसमें भगवान को गोलोकनाथ, दीनानाथ, इंद्र व ब्रह्मा के दर्पहारी और चराचर के परम बीज रूप में पूजा गया है। इसकी फलश्रुति के अनुसार त्रिकाल इस स्तोत्र का पाठ करने से अनन्य भक्ति, विपत्तियों से मुक्ति और परम धाम की प्राप्ति होती है।"
      },
      {
        name: "श्री गोवर्धनधराष्टकम्",
        text: "गोपनारीमुखाम्भोजभास्करं वेणुवाद्यकम् ।\nराधिकारसभोक्तारं गोवर्धनधरं भजे ॥ १ ॥\n\nआभीरनगरीप्राणप्रियं सत्यपराक्रमम् ।\nस्वभृत्यभयभेत्तारं गोवर्धनधरं भजे ॥ २ ॥\n\nव्रजस्त्रीविप्रयोगाग्निनिवारकमहर्निशम् ।\nमहामरकतश्यामं गोवर्धनधरं भजे ॥ ३ ॥\n\nनवकाञ्जनिभाक्षं च गोपीजनमनोहरम् ।\nवनमालाधरं शाश्वद्गोवर्धनधरं भजे ॥ ४ ॥\n\nभक्तवाञ्छाकल्पवृक्षं नवनीतपयोमुखम् ।\nयशोदामातृसानन्दं गोवर्धनधरं भजे ॥ ५ ॥\n\nअन्यकृतहृद्भावपूरकं पीतवाससम् ।\nरासमण्डलमध्यस्थं गोवर्धनधरं भजे ॥ ६ ॥\n\nध्वजवज्रादिसच्चिह्न राजच्चरणपङ्कजम् ।\nशृङ्गाररसमर्मज्ञं गोवर्धनधरं भजे ॥ ७ ॥\n\nपुरुहूतमहावृष्टिर्नाशकं गोगणावृतम् ।\nभक्तनेत्रचकोरेन्दुं गोवर्धनधरं भजे ॥ ८ ॥\n\nगोवर्धनधराष्टकमिदं यः प्रपठेत् सुधीः ।\nस सर्वदाऽनन्यभावेन स कृष्णे रतिमाप्नुयात् ॥ ९ ॥\n\nरचितं भक्तिलाभाय धारकाणां सनातनम् ।\nमुक्तिदं सर्वजन्तूनां गोवर्धनधराष्टकम् ॥ १० ॥",
        meaning: "इंद्र के कोप से ब्रजवासियों और गौवंश की रक्षा हेतु गोवर्धन पर्वत को अपनी कनिष्ठिका पर धारण करने वाले भगवान श्रीकृष्ण का यह पावन अष्टक है। फलश्रुति (श्लोक ९-१०) के अनुसार जो भी भक्त अनन्य भाव से इसका पाठ करता है, उसे श्रीकृष्ण के चरणों में अनन्य प्रीति प्राप्त होती है और समस्त भय-संकटों से मुक्ति मिलती है।"
      },
      {
        name: "श्री बालमुकुन्दाष्टकम्",
        text: "करारविन्देन पदारविन्दं मुखारविन्दे विनिवेशयन्तम् ।\nवटस्य पत्रस्य पुटे शयानं बालं मुकुन्दं मनसा स्मरामि ॥ १ ॥\n\nसंहृत्य लोकान् वटपत्रमध्ये शयानमाद्यन्तविहीन रूपम् ।\nसर्वेश्वरं सर्वहितावतारं बालं मुकुन्दं मनसा स्मरामि ॥ २ ॥\n\nइन्दीवरनीलघनावभासं गर्भोदधारिं सुकुमाराङ्गम् ।\nगोपाङ्गनालोलनिनादमोहं बालं मुकुन्दं मनसा स्मरामि ॥ ३ ॥\n\nश्रीवत्सपक्षं स्फुरितेन्दुहासं गोपीजनानामभिधर्मपालम् ।\nकालीयदर्पप्रशमावदानं बालं मुकुन्दं मनसा स्मरामि ॥ ४ ॥\n\nशिखण्डचूडं नवनीतचोरं नवीनरूपं नयनाभिरामम् ।\nगोपाललीलाविलसत्किरणं बालं मुकुन्दं मनसा स्मरामि ॥ ५ ॥\n\nपीताम्बरं मञ्जुलकेयूरं पद्माक्षमाकुञ्चितकुन्तलौघम् ।\nगोपालबालं जगन्मोहनाङ्गं बालं मुकुन्दं मनसा स्मरामि ॥ ६ ॥\n\nयोगीन्द्रवन्द्यं भुवनाधिनाथं भक्तार्तिहन्तारमनन्तरूपम् ।\nकारुण्यपूर्णं कलुषापहारं बालं मुकुन्दं मनसा स्मरामि ॥ ७ ॥\n\nवटस्य पत्रस्य पुटे शयानं ब्रह्मादिभिर्वन्दितपादपद्मम् ।\nकारुण्यपाथोनिधिमात्मदेवं बालं मुकुन्दं मनसा स्मरामि ॥ ८ ॥\n\nश्री बालमुकुन्दाष्टकं यः पठेत् प्रातः समाहितः ।\nसर्वपापविनिर्मुक्तो विष्णुलोकं स गच्छति ॥ ९ ॥",
        meaning: "श्री बालमुकुन्दाष्टकम् (श्री बिल्वमंगल ठाकुर विरचित): वटवृक्ष के पत्ते पर शयन करते हुए अपने कमलवत चरण को कमलवत मुख में धारण करने वाले बाल मुकुन्द का ध्यान। शास्त्रीय फलश्रुति: जो भक्त एकाग्रचित्त होकर प्रतिदिन प्रातःकाल इसका पाठ करता है, वह समस्त पापों से मुक्त होकर भगवान श्री विष्णु के परम धाम (विष्णुलोक) को प्राप्त करता है।"
      },
      {
        name: "श्री राधा कृपा कटाक्ष स्तोत्रम्",
        text: "मुनीन्द्रवृन्दवन्दिते त्रिलोकशोकहारिणी\nप्रसन्नवक्त्रपङ्कजे निकुञ्जभूविलासिनी ।\nव्रजेन्द्रभानुनन्दिनी व्रजेन्द्रसूनुसङ्गते\nकदा करिष्यसीह मां कृपाकटाक्षभाजनम् ॥ १ ॥\n\nअशोकवृक्षवल्लरीवितानमण्डपस्थिते\nप्रवालवालचल्लवे प्रवालजालकोमले ।\nअनर्घरत्नमौलीदे विराजमानामालिके\nकदा करिष्यसीह मां कृपाकटाक्षभाजनम् ॥ २ ॥\n\nअनङ्गरङ्गसङ्गमप्रसङ्गभङ्गियासिते\nसविस्मते कल्याणदे मनोहरे सदाप्रिये ।\nअनर्घमाल्यभूषणे विशाललोचनान्विते\nकदा करिष्यसीह मां कृपाकटाक्षभाजनम् ॥ ३ ॥\n\nअशेषलोकमोहिनी सुरासुरेन्द्रवन्दिते\nस्मितानने मनोहरे निकुञ्जकेलिसंस्थिते ।\nसमस्तसम्पदः प्रदे समस्तभक्तिपालिनी\nकदा करिष्यसीह मां कृपाकटाक्षभाजनम् ॥ ४ ॥\n\nघनश्याममोहने गोपीजननन्दकारिणी\nकृपामुखे रसेश्वरी परात्परदेवीराधिके ।\nकल्याणदात्रि सुन्दरी जगत्त्रितापहारिणी\nकदा करिष्यसीह मां कृपाकटाक्षभाजनम् ॥ ५ ॥",
        meaning: "श्री राधा कृपा कटाक्ष स्तोत्रम् (ऊर्ध्वाम्नाय तन्त्र में भगवान शिव द्वारा वर्णित): यह श्री राधारानी की अहैतुकी कृपा-दृष्टि पाने की सर्वोच्च स्तुति है। शास्त्रीय फलश्रुति: इसका नित्य पाठ करने वाले भक्त के सांसारिक कष्ट दूर होते हैं, भक्ति का साम्राज्य प्राप्त होता है और युगल सरकार राधा-कृष्ण के प्रति परम प्रेम-भक्ति का प्राकट्य होता है।"
      },
      {
        name: "श्री दामाेदराष्टकम्",
        text: "नमामीश्वरं सच्चिदानन्दरूपं\nलसत्कुण्डलं गोकुले भ्राजमानम् ।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या ॥ १ ॥\n\nरुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम् ।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nस्थितग्रैव्यं दामोदरं भक्तिबद्धम् ॥ २ ॥\n\nइतीदृक् स्वलीलाभिरानन्दकुण्डे\nस्वघोषं निमज्जन्तमाख्यापयन्तम् ।\nतदीयेशितेज्ञेषु भक्तैर्जितत्वं\nपुनः प्रेमतस्तं शतावृत्ति वन्दे ॥ ३ ॥\n\nवरं देव मोक्षं न मोक्षावधिं वा\nन चान्यं वृणेऽहं वरेशादपीह ।\nइदं ते वपुर्नाथ गोपालबालं\nसदा मे मनस्याविरास्तां किमन्यैः ॥ ४ ॥\n\nइदं ते मुखाम्भोजमत्यन्तनीलैर्-\nवृतं कुन्तलैः स्निग्धरक्तैश्च गोप्या ।\nमुहुश्चुम्बितं बिम्बरक्ताधरं मे\nमनस्याविरास्तामलं लक्षलाभैः ॥ ५ ॥\n\nनमो देव दामोदरानन्त विष्णो\nप्रसीद प्रभो दुःखजालाब्धिमग्नम् ।\nकृपादृष्टिवृष्ट्यातिदीनं बतानु-\nगृहाणेश मामज्ञमेध्यक्षिदृश्यः ॥ ६ ॥\n\nकुवेरात्मजौ बद्धमूर्त्यैव यद्वत्\nत्वया मोचितौ भक्तिभाजौ कृतौ च ।\nतथा प्रेमभक्तिं स्वकां मे प्रयच्छ\nन मोक्षे ग्रहो मेऽस्ति दामोदरेह ॥ ७ ॥\n\nनमस्तेऽस्तु दाम्ने स्फुरद्दीप्तिधाम्ने\nत्वदीयोदरायाथ विश्वस्य धाम्ने ।\nनमो राधिकायै त्वदीयप्रियायै\nनमोऽनन्तलीलाय देवाय तुभ्यम् ॥ ८ ॥",
        meaning: "श्री दामाेदराष्टकम् (पद्मपुराण, सत्यव्रत मुनि कृत): वात्सल्य प्रेम की डोरी से माता यशोदा द्वारा ओखल से बांधे गए परम प्रभु दामोदर की दिव्य वंदना। शास्त्रीय फलश्रुति: जो भक्त कार्तिक मास तथा नित्य इस अष्टक का गान करता है, भगवान श्री कृष्ण उस पर रीझकर उसे मोक्ष से भी परे अपनी अनन्य प्रेमाभक्ति प्रदान करते हैं।"
      },
      {
        name: "श्री जगन्नाथाष्टकम्",
        text: "कदाचित् कालिन्दीतटविपिनसङ्गीतरवरो\nमुदो गोपीनारीवदनकमलास्वादमधुपः ।\nरमाशम्भुब्रह्मामर्पतिगणेशार्चितपदो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ १ ॥\n\nभुजे सव्ये वेणुं शिरसि शिखिपिच्छं कटितटे\nदुकूलं नेत्रान्ते सहचरकटाक्षं विदधते ।\nसदा श्रीमद्वृन्दावनवसतिलीलापरिचयो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ २ ॥\n\nमहाम्भोधेस्तीरे हेममुकुरस्फीतनिकटे\nमहापीठे हाटकपरमहंसाननरुचे ।\nपरस्यैव प्राणः सरसिजभवर्च्यचरणो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ३ ॥\n\nकृपापारावारः सजलजलदश्रेणिरुचिरो\nरमावाणीरामः स्फुरदमलपङ्केरुहमुखः ।\nसुरेन्द्रैराराध्यः श्रुतिगणशिखागीतचरितो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ४ ॥\n\nरथारूढो गच्छन् पथि मिलितभूदेवपटलैः\nस्तुतिभिर्हृष्टोऽन्तर्मुखविनतहDoubleरारी प्रभुरयम् ।\nदयासिन्धुर्बन्धुः सकलजगतां सिन्धुसुतया\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ५ ॥\n\nपरब्रह्मापीडः कुवलयदलोत्फुल्लनयनो\nनिवासी नीलाद्रौ निहितचरणोऽनन्तशिरसि ।\nरसानन्दो राधासरसवपुरालिङ्गनसुखो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ६ ॥\n\nन वै याचे राज्यं न च कनकमाणिक्यविभवं\nन याचेऽहं रम्यां सकलजनकल्यां वरवधूम ।\nसदा काले काले प्रमथपतिना गीतचरितो\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ७ ॥\n\nहर त्वं संसारं द्रुततरमसारं सुरपते\nहर त्वं पापानां विततिमपरां यादवपते ।\nअहो दीनेऽनाथे निहितचरणो निश्चितमिदं\nजगन्नाथः स्वामी नयनपथगामी भवतु मे ॥ ८ ॥\n\nजगन्नाथाष्टकं पुण्यं यः पठेत् प्रयतः शुचिः ।\nसर्वपापविशुद्धात्मा विष्णुलोके महीयते ॥ ९ ॥",
        meaning: "श्री जगन्नाथाष्टकम् (आदि शंकराचार्य विरचित): जगन्नाथ स्वामी मेरे नयन पथ के गामी हों—इस पावन भाव से परिपूर्ण अष्टक। शास्त्रीय फलश्रुति: जो पवित्र हृदय से इस पुण्य जगन्नाथाष्टक का पाठ करता है, वह समस्त पापों से विमुक्त होकर भगवान विष्णु के परम लोक में पूजित होता है।"
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
      name: "శ్రీ కృష్ణాష్టకం (భజే వ్రజైకమణ్డనం)",
      text: "భజే వ్రజైకమణ్డనం సమస్తపాపఖణ్డనం\nస్వభక్తచిత్తరంజనం సదైవ నన్దనన్దనమ్ ।\nసుపిచ్ఛగుచ్ఛమస్తకం సునాదవేణుహస్తకం\nఅనఙ్గరణ్గసాగరం నమామి కృష్ణనాగరమ్ ॥ 1 ॥\nమనోజ గర్వమోచనం విశాలలోలలోచనం\nవిధూత గోపశోచనం నమామి పద్మలోచనమ్ ।\nకరారవిన్దభూధరం స్మితావలోకసున్దరం\nమహేన్ద్రమానదారణం నమామి కృష్ణవారణమ్ ॥ 2 ॥\nకదమ్బసూనకుణ్డలం సుచారుగణ్డమణ్డలం\nవ్రజాఙ్గనైకవల్లభం నమామి కృష్ణదుర్లభమ్ ।\nయశోదయా సమోదయా సగోపయా సనన్దయా\nయుతం సుఖైకదాయకం నమామి గోపనాయకమ్ ॥ 3 ॥\nసదైవ పాదపఙ్కజం మదీయమానసేనిజం\nదధానముత్తమాలకం నమామి నన్దబాలకమ్ ।\nసమస్తదోషశోషణం సమస్తలోకపోషణం\nసమస్తగోపమానసం నమామి నన్దలాలసమ్ ॥ 4 ॥\nభువో భరావతారకం భవాబ్ధికర్ణధారకం\nయశోమతీకిశోరకం నమామి చిత్తచోరకమ్ ।\nదృగన్తకాన్తభఙ్గినం సదా సదాలసఙ్గినం\nదినే దినే నవం నవం నమామి నన్దసమ్భవమ్ ॥ 5 ॥\nగుణాకరం సుఖాకరం కృపాకరం కృపాపరం\nసురత్విషన్నికన్దనం నమామి గోపనన్దనమ్ ।\nనవీనగోపనాగరం నవీనకేలిలమ్పటం\nనమామి మేఘసున్దరం తటిత్ప్రభాలసత్పటమ్ ॥ 6 ॥\nసమస్తగోపకాన్తిహం దృగమ్భుజైః సమీహితం\nవిలాసకార్యకోవిధం నమామి కుఞ్జనాగరమ్ ।\nరుదన్తమిజ్ఞయా చిరం దిదృక్షయోత్తమ శ్రియః\nవిలోకితం దృశాద్భుతం నమామి కృష్ణమిష్టుతమ్ ॥ 7 ॥\nప్రణామదుఃఖశాతనం పలాశనదిదోషణం\nహరిప్రియం యతః పరం నమామి కృష్ణమీశ్వరమ్ ।\nప్రపఞ్చదోషనాశనం ప్రణమ్య పాదపఙ్కజే\nనిమజ్జతాం భవార్ణవే నమామి కృష్ణమర్థదమ్ ॥ 8 ॥\nశ్రీకృష్ణాష్టకమిదం ప్రాతః సముత్థాయ యః పఠేత్ ।\nకోటిజన్మకృతం పాపం స్మరణేన వినశ్యతి ॥ 9 ॥",
      meaning: "ఆదిశంకరాచార్యులచే రచించబడిన ఎనిమిది శ్లోకాల ఈ స్తోత్రం, నందుని ఆనందపరిచే శ్రీకృష్ణుని ఒక అందమైన ఆరాధన. ప్రతి చరణం ఆయన దివ్య రూపాన్ని మరియు లీలా స్వభావాన్ని వర్ణిస్తుంది: ఆయన నెమలి ఈక, వేణువు, ఆకర్షణీయమైన చూపులు మరియు భక్తుల రక్షకుడిగా ఆయన పాత్ర. ఈ అష్టకం ఆయనను సర్వ పాపాలను నాశనం చేసేవాడిగా మరియు గోపికల మరియు ఆయన భక్తులందరి మనస్సులను దోచుకునేవాడిగా కీర్తిస్తుంది."
    },
      {
       name: "శ్రీ కృష్ణాష్టకం (వసుదేవసుతం)",
       text: "వసుదేవసుతం దేవం కంసచాణూరమర్దనమ్ |\nదేవకీపరమానందం కృష్ణం వందే జగద్గురుమ్ || 1 ||\nఅతసీపుష్పసంకాశం హారనూపురశోభితమ్ |\nరత్నకంకణకేయూరం కృష్ణం వందే జగద్గురుమ్ || 2 ||\nకుటిలాలకసంయుక్తం పూర్ణచంద్రనిభాననమ్ |\nవిలసత్కుండలధరం కృష్ణం వందే జగద్గురుమ్ || 3 ||\nమందారగంధసంయుక్తం చారుహాసం చతుర్భుజమ్ |\nబర్హిపింఛావచూడాంగం కృష్ణం వందే జగద్గురుమ్ || 4 ||\nఉత్ఫుల్లపద్మపత్రాక్షం నీలజీమూతసన్నిభమ్ |\nయాదవానాం శిరోరత్నం కృష్ణం వందే జగద్గురుమ్ || 5 ||\nరుక్మిణీకేలిసంయుక్తం పీతాంబరసుశోభితమ్ |\nఅవాప్తతులసీగంధం కృష్ణం వందే జగద్గురుమ్ || 6 ||\nగోపికానాం కుచద్వంద్వకుంకుమాంకితవక్షసమ్ |\nశ్రీనికేతం మహేష్వాసం కృష్ణం వందే జగద్గురుమ్ || 7 ||\nశ్రీవత్సాంకం మహోరస్కం వనమాలావిరాజితమ్ |\nశంఖచక్రధరం దేవం కృష్ణం వందే జగద్గురుమ్ || 8 ||\nకృష్ణాష్టకమిదం పుణ్యం ప్రాతరుత్థాయ యః పఠేత్ |\nకోటిజన్మకృతం పాపం స్మరణేన వినశ్యతి || 9 ||",
       meaning: "శ్రీ కృష్ణాష్టకం అని పిలువబడే ఈ స్తోత్రం గొప్ప తత్వవేత్త ఆదిశంకరాచార్యులచే రచించబడినట్లుగా చెప్పబడింది. దీనిని సాధారణంగా ఉదయాన్నే శ్రీకృష్ణుని ప్రార్థనగా పఠిస్తారు. ఈ స్తోత్రం యొక్క చివరి శ్లోకంలో (ఫలశ్రుతి) పేర్కొన్న విధంగా, దీనిని పఠించడం వలన కలిగే ప్రభావం ఏమిటంటే, కోటి జన్మలలో చేసిన పాపాలు నశించి, ఆధ్యాత్మిక శుద్ధి మరియు దైవానుగ్రహం లభిస్తాయి."
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
        text: "శ్రీమాన్వేఙ్కటనాథార్యః కవితార్కికకేసరీ |\nవేదాన్తాచార్యవర్యో మే సన్నిధత్తాం సదా హృది ||\n\nవన్దే బృన్దావనచరం వల్లవీజనవల్లభమ్ |\nజయన్తీసమ్భవం ధామ వైజయన్తీవిభూషణమ్ || 1 ||\n\nవాచం నిజాఙ్కరసికాం ప్రసమీక్షమాణో\nవక్త్రారవిన్దవినివేశితపాఞ్చజన్యః |\nవర్ణత్రికోణరుచిరే వరపుణ్డరీకే\nబద్ధాసనో జయతి వల్లవచక్రవర్తీ || 2 ||\n\nఆమ్నాయగన్ధిరుదితస్ఫురితాధరోష్ఠం\nఆస్రావిలేక్షణమనుక్షణమన్దహాసమ్ |\nగోపాలడిమ్భవపుషం కుహనాజనన్యాః\nప్రాణస్తనన్ధయమవైమి పరం పుమాంసమ్ || 3 ||\n\nఆవిర్భవత్వనిభృతాభరణం పురస్తాత్\nఆకుఞ్చితైకచరణం నిభృతాన్యపాదమ్ |\nదధ్నా నిమన్థముఖరేణ నిబద్ధతాలం\nనాథస్య నన్దభవనే నవనీతనాట్యమ్ || 4 ||\n\nహర్తుం కుమ్భే వినిహితకరః స్వాదు హైయఙ్గవీనం\nదృష్ట్వా దామగ్రహణచటులాం మాతరం జాతరోషామ్ |\nపాయాత్తః స్వాం కపిలకరుణః కోऽపి గోపాలడిమ్భః\nకమ్పైస్తోకే స్థితమరుణితం లోచనం వ్యాదధద్నః || 5 ||\n\nవ్రజయోషిదపాఙ్గవేధనీయం\nమధురాభాగ్యమనన్యభోగ్యమీడే |\nవసుదేవవధూస్తనన్ధయం తత్\nకిమపి బ్రహ్మ కిశోరభావదృశ్యమ్ || 6 ||\n\nపరివర్తితకన్ధరం భయేన\nస్మితఫుల్లాధరపల్లవం స్మరామి |\nవిటపిత్వనిరాసకం కయోశ్చిత్\nవిపులోలూఖలకర్షకం కుమారమ్ || 7 ||\n\nనికటేషు నిశామయామి నిత్యం\nనిగమాన్తైరధునాऽపి మృగ్యమాణమ్ |\nయమలార్జునదృష్టబాలకేలిం\nయమునాసాక్షికయౌవనం యువానమ్ || 8 ||\n\nపదవీమదవీయసీం విముక్తేః\nఅటవీసమ్పదమమ్బువాహయన్తీమ్ |\nఅరుణాధరసాభిలాషవంశాం\nకరుణాం కారణమానుషీం భజామి || 9 ||\n\nఅనిమేషనిషేవణీయమక్ష్ణోః\nఅజహద్యౌవనమావిరస్తు చిత్తే |\nకలహాయితకున్తలం కలాపైః\nకరుణోన్మాదకవిభ్రమం మహో మే || 10 ||\n\nఅనుయాయిమనోజ్ఞవంశనాలైః\nఅవతు స్పర్శితవల్లవీవిమోహైః |\nఅనఘస్మితశీతలైరసౌ మాం\nఅనుకమ్పాసరిదమ్బుజైరపాఙ్గైః || 11 ||\n\nఅధరాహితచారువంశనాలాః\nమకుటాలమ్బిమయూరపిఞ్ఛమాలాః |\nహరినీలశిలావిభఙ్గనీలాః\nప్రతిభాః సన్తు మమాన్తిమప్రయాణే || 12 ||\n\nఅఖిలానవలోకయామి కాలాన్\nమహిలాధీనభుజాన్తరస్య యూనః |\nఅభిలాషపదం వ్రజాఙ్గనానాం\nఅభిలాపక్రమదూరమాభిరూప్యమ్ || 13 ||\n\nహృది ముగ్ధశిఖణ్డమణ్డనో\nలిఖితః కేన మమైష శిల్పినా |\nమదనాతురవల్లవాఙ్గనా-\nవదనామ్భోజదివాకరో యువా || 14 ||\n\nమహసే మహితాయ మౌలినా\nవినతేనాఞ్జలిమఞ్జనత్విషే |\nకలయామి విముగ్ధవల్లవీ-\nవలయాభాషితమఞ్జువేణవే || 15 ||\n\nజయతి లలితవృత్తిం శిక్షితో వల్లవీనాం\nశిథిలవలయశిఞ్జాశీతలైర్హస్తతాలైః |\nఅఖిలభువనరక్షాగోపవేషస్య విష్ణోః\nఅధరమణిసుధాయామంశవాన్ వంశనాలః || 16 ||\n\nచిత్రాకల్పః శ్రవసి కలయన్ లాఙ్గలీకర్ణపూరం\nబర్హోత్తంసస్ఫురితచికురో బన్ధుజీవం దధానః |\nగుఞ్జాబద్ధామురసి లలితాం ధారయన్ హారయష్టిం\nగోపస్త్రీణాం జయతి కితవః కోऽపి కౌమారహారీ || 17 ||\n\nలీలాయష్టిం కరకిసలయే దక్షిణే న్యస్య ధన్యాం\nఅంసే దేవ్యాః పులకరుచిరే సంనివిష్టాన్యబాహుః |\nమేఘశ్యామో జయతి లలితో మేఖలాదత్తవేణుః\nగుఞ్జాపీడస్ఫురితచికురో గోపకన్యాభుజఙ్గః || 18 ||\n\nప్రత్యాలీఢస్థితిమధిగతాం ప్రాప్తగాఢాఙ్కపాలిం\nపశ్చాదీషన్మిలితనయనాం ప్రేయసీం ప్రేక్షమాణః |\nభస్త్రాయన్త్రప్రణిహితకరో భక్తజీవాతురవ్యాత్\nవారిక్రీడానిబిడవసనో వల్లవీవల్లభో నః || 19 ||\n\nవాసో హృత్వా దినకరసుతాసన్నిధౌ వల్లవీనాం\nలీలాస్మేరో జయతి లలితామాస్థితః కున్దశాఖామ్ |\nసవ్రీడాభిస్తదను వసనే తాభిరభ్యర్థ్యమానే\nకామీ కశ్చిత్ కరకమలయోరఞ్జలిం యాచమానః || 20 ||\n\nఇత్యనన్యమనసా వినిర్మితాం\nవేఙ్కటేశకవినా స్తుతిం పఠన్ |\nదివ్యవేణురసికం సమీక్షతే\nదైవతం కిమపి యౌవతప్రియమ్ || 21 ||",
        meaning: "శ్రీ వేదాంత దేశికులచే రచింపబడిన ఈ పవిత్రమైన 21 శ్లోకాల 'గోపాల వింశతి' శ్రీకృష్ణుని దివ్య సౌందర్యానికి, బాల్య లీలలకు అద్భుత దర్పణం. వెన్న దొంగిలించడం, తల్లి యశోద బంధించిన రోలును లాగడం, యమలార్జున వృక్షోద్ధరణ, మరియు బృందావనంలో వేణుగానంతో గోపికలను సమ్మోహితులను చేయడం వంటి దివ్య లీలలు ఇందులో వర్ణించబడ్డాయి. 12వ శ్లోకంలో అంతిమ ప్రయాణ సమయంలో మయూరపింఛధారియైన శ్రీకృష్ణుని దివ్య దర్శనం కలగాలని ప్రార్థించబడింది. ఫలశ్రుతి (21వ శ్లోకం) ప్రకారం అనన్య భక్తితో దీనిని పఠించేవారికి వేణుగోపాలుని ప్రత్యక్ష సాక్షాత్కారం, అనుగ్రహం కలుగుతాయి."
      },
      {
        name: "శ్రీ కృష్ణ స్తోత్రం (రాధా కృతం)",
        text: "గోలోకనాథ గోపీశ మదీశ ప్రాణవల్లభ |\nహే దీనబన్ధో దీనేశ సర్వేశ్వర నమోऽస్తు తే || 1 ||\n\nగోపేశ గోసమూహేశ యశోదానన్దవర్ధన |\nనన్దాత్మజ సదానన్ద నిత్యానన్ద నమోऽస్తు తే || 2 ||\n\nశతమన్యోర్మన్యుభగ్న బ్రహ్మదర్పవినాశక |\nకాలీయదమన ప్రాణనాథ కృష్ణ నమోऽస్తు తే || 3 ||\n\nశివానన్తేశ బ్రహ్మేశ బ్రాహ్మణేశ పరాత్పర |\nబ్రహ్మస్వరూప బ్రహ్మజ్ఞ బ్రహ్మబీజ నమోऽస్తు తే || 4 ||\n\nచరాచరతరోర్బీజ గుణాతీత గుణాత్మక |\nసుఖదాయిఞ్శుభదాయిన్ సన్తదాయిన్ నమోऽస్తు తే || 5 ||\n\nప్రాణాధికా ప్రియా రాధా త్వదాధీనా సదా ప్రభో |\nసర్వస్వం మే మహాభాగ ప్రాణనాథ నమోऽస్తు తే || 6 ||\n\nఇత్యేవం రాధికాదేవీ స్తుత్వా తం సర్వపూజితమ్ |\nప్రణామం కుర్వతే భక్త్యా కామదం మోక్షదం హరిమ్ || 7 ||",
        meaning: "బ్రహ్మవైవర్త పురాణంలోని శ్రీకృష్ణ జన్మఖండంలో శ్రీమతి రాధారాణి స్వయంగా పలికిన పరమ పవిత్ర స్తోత్రమిది. శ్రీకృష్ణుని గోలోకనాథుడిగా, దీనబంధువుగా, ఇంద్ర-బ్రహ్మల అహంకారాన్ని అణచినవాడిగా మరియు సమస్త సృష్టికి మూలబీజంగా ఈ స్తోత్రం కొనియాడుతుంది. ఫలశ్రుతి ప్రకారం ఈ స్తోత్రాన్ని నిత్యం భక్తితో పఠించేవారికి సకల బాధలు తొలగి, పరమ భక్తి మరియు మోక్షం సిద్ధిస్తాయి."
      },
      {
        name: "శ్రీ గోవర్ధనధరాష్టకం",
        text: "గోపనారీముఖామ్భోజభాస్కరం వేణువాద్యకమ్ |\nరాధికారసభోక్తారం గోవర్ధనధరం భజే || 1 ||\n\nఆభీరనగరీప్రాణప్రియం సత్యపరాక్రమమ్ |\nస్వభృత్యభయభేత్తారం గోవర్ధనధరం భజే || 2 ||\n\nవ్రజస్త్రీవిప్రయోగాగ్నినివారకమహర్నిశమ్ |\nమహామరకతశ్యామం గోవర్ధనధరం భజే || 3 ||\n\nనవకాఞ్జనిభాక్షం చ గోపీజనమనోహరమ్ |\nవనమాలాధరం శాశ్వద్గోవర్ధనధరం భజే || 4 ||\n\nభక్తవాఞ్ఛాకల్పవృక్షం నవనీతపయోముఖమ్ |\nయశోదామాతృసానందం గోవర్ధనధరం భజే || 5 ||\n\nఅన్యకృతహృద్భావపూరకం పీతవాససమ్ |\nరాసమండలమధ్యస్థం గోవర్ధనధరం భజే || 6 ||\n\nధ్వజవజ్రాదిసచ్చిహ్న రాజచ్చరణపఙ్కజమ్ |\nశృఙ్గారరసమర్మజ్ఞం గోవర్ధనధరం భజే || 7 ||\n\nపురుహూతమహావృష్టిర్నాశకం గోగణావృతమ్ |\nభక్తనేత్రచకోరేందుం గోవర్ధనధరం భజే || 8 ||\n\nగోవర్ధనధరాష్టకమిదం యః ప్రపఠేత్ సుధీః |\nస సర్వదాऽనన్యభావేన స కృష్ణే రతిమాప్నుయాత్ || 9 ||\n\nరచితం భక్తిలాభాయ ధారకాణాం సనాతనమ్ |\nముక్తిదం సర్వజన్తూనాం గోవర్ధనధరాష్టకమ్ || 10 ||",
        meaning: "ఇంద్రుని అహంకారాన్ని అణచి, కుండపోత వర్షం నుండి గోపాలురను, గోవులను రక్షించడానికి గోవర్ధన గిరిని ఎత్తిన శ్రీకృష్ణుని దివ్య స్తోత్రమిది. ఫలశ్రుతి (9–10 శ్లోకాలు) ప్రకారం ఈ గోవర్ధనధరాష్టకాన్ని నిత్యం శ్రద్ధతో పఠించేవారికి శ్రీకృష్ణుని యందు అనన్య భక్తి లభించి, సమస్త ప్రాణులకూ సకల భయాల నుండి ముక్తి లభిస్తుంది."
      },
      {
        name: "శ్రీ బాలముకుందాష్టకం",
        text: "కరారవిన్దేన పదారవిన్దం ముఖారవిన్దే వినివేశయన్తమ్ |\nవటస్య పత్రస్య పుటే శయానం బాలం ముకుందం మనసా స్మరామి || 1 ||\n\nసంహృత్య లోకాన్ వటపత్రమధ్యే శయానమాద్యన్తవిహీనరూపమ్ |\nసర్వేశ్వరం సర్వహితావతారం బాలం ముకుందం మనసా స్మరామి || 2 ||\n\nఇందీవరనీలఘనావభాసం గర్భోదధారిం సుకుమారాంగమ్ |\nగోపాంగనాలోలనినాదమోహం బాలం ముకుందం మనసా స్మరామి || 3 ||\n\nశ్రీవత్సవక్షం స్ఫురితేందుహాసం గోపీజనానామభిధర్మపాలమ్ |\nకాలీయదర్పప్రశమావదానం బాలం ముకుందం మనసా స్మరామి || 4 ||\n\nశిఖణ్డచూడం నవనీతచోరం నవీనరూపం నయనాభిరామమ్ |\nగోపాలలీలావిలసత్కిరణం బాలం ముకుందం మనసా స్మరామి || 5 ||\n\nపీతాంబరం మంజులకేయూరం పద్మాక్షమాకుంచితకుంతలౌఘమ్ |\nగోపాలబాలం జగన్మోహనాంగం బాలం ముకుందం మనసా స్మరామి || 6 ||\n\nయోగీంద్రవంద్యం భువనాధినాథం భక్తార్తిహంతారమనంతరూపమ్ |\nకారుణ్యపూర్ణం కలుషాపహారం బాలం ముకుందం మనసా స్మరామి || 7 ||\n\nవటస్య పత్రస్య పుటే శయానం బ్రహ్మాదిభిర్వందితపాదపద్మమ్ |\nకారుణ్యపాథోనిధిమాత్మదేవం బాలం ముకుందం మనసా స్మరామి || 8 ||\n\nశ్రీ బాలముకుందాష్టకం యః పఠేత్ ప్రాతః సమాహితః |\nసర్వపాపవినిర్ముక్తో విష్ణులోకం స గచ్ఛతి || 9 ||",
        meaning: "శ్రీ బాలముకుందాష్టకం (శ్రీ లీలాశుక బిల్వమంగళ ఠాకూర్ విరచితం): మర్రి ఆకుపై శయనించి తన పాదారవిందాన్ని ముఖారవిందంలో ఉంచుకొని ఆనందించే బాలముకుందుని దివ్య స్మరణం. ఫలశ్రుతి: ప్రతిరోజూ ప్రాతఃకాలమున ఏకాగ్రతతో ఈ స్తోత్రమును పఠించే భక్తుడు సమస్త పాపముల నుండి విముక్తుడై పరమ పవిత్రుడై విష్ణులోకమును పొందును."
      },
      {
        name: "శ్రీ రాధా కృపా కటాక్ష స్తోత్రం",
        text: "మునీంద్రబృందవందితే త్రిలోకశోకహారిణీ\nప్రసన్నవక్త్రపంకజే నికుంజభూవిలాసినీ |\nవ్రజేంద్రభానునందినీ వ్రజేంద్రసూనుసంగతే\nకదా కరిష్యసీహ మాం కృపాకటాక్షభాజనమ్ || 1 ||\n\nఅశోకవృక్షవల్లరీవితానమండపస్థితే\nప్రవాలవాలచల్లవే ప్రవాలజాలకోమలే |\nఅనర్ఘరత్నమౌళిదే విరాజమానమాలికే\nకదా కరిష్యసీహ మాం కృపాకటాక్షభాజనమ్ || 2 ||\n\nఅనంగరంగమంగళప్రసంగభంగియాసితే\nసవిస్మతే కల్యాణదే మనోహరే సదాప్రియే |\nఅనర్ఘమాల్యభూషణే విశాలలోచనాన్వితే\nకదా కరిష్యసీహ మాం కృపాకటాక్షభాజనమ్ || 3 ||\n\nఅశేషలోకమోహినీ సురాసురేంద్రవందితే\nస్మితాననే మనోహరే నికుంజకేలిసంస్థితే |\nసమస్తసంపదః ప్రదే సమస్తభక్తిపాలినీ\nకదా కరిష్యసీహ మాం కృపాకటాక్షభాజనమ్ || 4 ||\n\nఘనశ్యామమోహనే గోపీజనానందకారిణీ\nకృపాముఖే రసేశ్వరీ పరాత్పరదేవీ రాధికే |\nకల్యాణదాత్రి సుందరీ జగత్త్రితాపహారిణీ\nకదా కరిష్యసీహ మాం కృపాకటాక్షభాజనమ్ || 5 ||",
        meaning: "శ్రీ రాధా కృపా కటాక్ష స్తోత్రం (ఊర్ధ్వామ్నాయ తంత్రంలో పరమశివుడు పార్వతీదేవికి ఉపదేశించినది): రాధారాణి కరుణాపూరిత నేత్రాల అనుగ్రహం కొరకు చేసే సర్వోత్కృష్ట ప్రార్థన. ఫలశ్రుతి: ఈ స్తోత్రమును భక్తిశ్రద్ధలతో పఠించేవారి సంసార దుఃఖములు నశించి, సర్వ శుభములు చేకూరి, రాధాకృష్ణుల దివ్య ప్రేమభక్తి లభిస్తుంది."
      },
      {
        name: "శ్రీ దామోదరాష్టకం",
        text: "నమామీశ్వరం సచ్చిదానందరూపం\nలసత్కుండలం గోకులే భ్రాజమానమ్ |\nయశోదాభియోలూఖలాద్ధావమానం\nపరామృష్టమత్యంతతో ద్రుత్య గోప్యా || 1 ||\n\nరుదంతం ముహుర్నేత్రయుగ్మం మృజంతం\nకరాంభోజయుగ్మేన సాతంకనేత్రమ్ |\nముహుః శ్వాసకంపత్రిరేఖాంకకంఠ-\nస్థితగ్రైవ్యం దామోదరం భక్తిబద్ధమ్ || 2 ||\n\nఇతీదృక్ స్వలీలాభిరానందకుండే\nస్వఘోషం నిమజ్జంతమాఖ్యాపయంతమ్ |\nతదీయేశితేజ్ఞేషు భక్తైర్జితత్వం\nపునః ప్రేమతస్తం శతావృత్తి వందే || 3 ||\n\nవరం దేవ మోక్షం న మోక్షావధిం వా\nన చాన్య వృణేऽహం వరేశాదపీహ |\nఇదం తే వపుర్నాథ గోపాలబాలం\nసదా మే మనస్యావిరాస్తాం కిమన్యైః || 4 ||\n\nఇదం తే ముఖాంభోజమత్యంతనీలైర్-\nవృతం కుంతలైః స్నిగ్ధరక్తైశ్చ గోప్యా |\nముహుశ్చుంబితం బింబరక్తాధరం మే\nమనస్యావిరాస్తామలం లక్షలాభైః || 5 ||\n\nనమో దేవ దామోదరానంత విష్ణో\nప్రసీద ప్రభో దుఃఖజాలాబ్ధిమగ్నమ్ |\nకృపాదృష్టివృష్ట్యాతిదీనం బతాను-\nగృహాణేశ మామజ్ఞమేధ్యక్షిదృశ్యః || 6 ||\n\nకువేరాత్మజౌ బద్ధమూర్త్యైవ యద్వత్\nత్వయా మోచితౌ భక్తిభాజౌ కృతౌ చ |\nతథా ప్రేమభక్తిం స్వకాం మే ప్రయచ్ఛ\nన మోక్షే గ్రహో మేऽస్తి దామోదరేహ || 7 ||\n\nనమస్తేऽస్తు దామ్నే స్ఫురద్దీప్తిధామ్నే\nత్వదీయోదరాయాథ విశ్వస్య ధామ్నే |\nనమో రాధికాయై త్వదీయప్రియాయై\nనమోऽనంతలీలాయ దేవాయ తుభ్యమ్ || 8 ||",
        meaning: "శ్రీ దామోదరాష్టకం (పద్మపురాణం, సత్యవ్రత ముని విరచితం): యశోదమ్మ చేతి ప్రేమ త్రాటితో రోటికి కట్టబడిన జగద్రక్షకుడైన దామోదరుని మధుర స్తోత్రం. ఫలశ్రుతి: ముఖ్యంగా కార్తీక మాసమున మరియు నిత్యము దీనిని గానం చేసే భక్తులకు భగవానుడు మోక్షమును మించిన తన నిశ్చల దివ్య ప్రేమభక్తిని ప్రసాదిస్తాడు."
      },
      {
        name: "శ్రీ జగన్నాథాష్టకం",
        text: "కదాచిత్ కాలిందీతటవిపినసంగీతరవరో\nముదో గోపీనారీవదనకమలాస్వాదమధుపః |\nరమాశంభుబ్రహ్మామరపతిగణేశార్చితపదో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 1 ||\n\nభుజే సవ్యే వేణుం శిరసి శిఖిపిచ్ఛం కటితటే\nదుకూలం నేత్రాంతే సహచరకటాక్షం విదధతే |\nసదా శ్రీమద్బృందావనవసతిలీలాపరిచయో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 2 ||\n\nమహాభోధేస్తీరే హేమముకురస్ఫీతనికటే\nమహాపీఠే హాటకపరమహంసాననరుచే |\nపరస్యైవ ప్రాణః సరసిజభవార్చ్యచరణో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 3 ||\n\nకృపాపారావారః సజలజలదశ్రేణిరుచిరో\nరమావాణీరామః స్ఫురదమలపంకేరుహముఖః |\nసురేంద్రైరారాధ్యః శ్రుతిగణశిఖాగీతచరితో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 4 ||\n\nరథారూఢో గచ్ఛన్ పథి మిలితభూదేవపటలైః\nస్తుతిభిర్హృష్టోऽంతర్ముఖవినతహారీ ప్రభురయమ్ |\nదయాసింధుర్బంధుః సకలజగతాం సింధుసుతయా\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 5 ||\n\nపరబ్రహ్మాపీడః కువలయదలోత్ఫుల్లనయనో\nనివాసీ నీలాద్రౌ నిహితచరణోऽనంతశిరసి |\nరసానందో రాధాసరసవపురాలింగనసుఖో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 6 ||\n\nన వై యాచే రాజ్యం న చ కనకమాణిక్యవిభవం\nన యాచేऽహం రమ్యాం సకలజనకామ్యాం వరవధూమ్ |\nసదా కాలే కాలే ప్రమథపతినా గీతచరితో\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 7 ||\n\nహర త్వం సంసారం ద్రుతతరమసారం సురపతే\nహర త్వం పాపానాం వితతిమపరాం యాదవపతే |\nఅహో దీనేऽనాథే నిహితచరణో నిశ్చితమిదమ్\nజగన్నాథః స్వామీ నయనపథగామీ భవతు మే || 8 ||\n\nజగన్నాథాష్టకం పుణ్యం యః పఠేత్ ప్రయతః శుచిః |\nసర్వపాపవిశుద్ధాత్మా విష్ణులోకే మహీయతే || 9 ||",
        meaning: "శ్రీ జగన్నాథాష్టకం (ఆది శంకరాచార్య కృతం): 'జగన్నాథః స్వామీ నయనపథగామీ భవతు మే'—సమస్త బ్రహ్మాండ నాయకుడైన జగన్నాథుడు నా కనుల ముందు సాక్షాత్కరించుగాక అనే దివ్య ప్రార్థన. ఫలశ్రుతి: నిర్మల మనస్సుతో ఈ పవిత్ర అష్టకమును పఠించే పుణ్యాత్ముడు సకల పాపముల నుండి విముక్తుడై వైకుంఠ ధామమున గౌరవింపబడును."
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
    aboutMission: "Mission",
    aboutMissionText: "To make the profound teachings of the Bhagavad Gita accessible to everyone through interactive technology, devotional audio, and 100% offline multilingual support.",
    developmentTeam: "About the Developer",
    developmentTeamText: "This application is independently designed, developed, and crafted by a single developer (Sai Karthik) with devotion to bring the eternal wisdom, shlokas, meditation, and sacred chants of the Bhagavad Gita into an interactive, completely offline experience.",
    appFeatures: "App Features",
    appFeaturesList: [
      "Interactive dialogue and shlokas between Arjuna and Lord Krishna across all 18 chapters",
      "Multilingual support (English, Hindi, Telugu)",
      "Guided meditation sessions with customizable duration timer",
      "Sacred chants and devotional stotras with audio",
      "Kids-friendly explanations and History of the Bhagavad Gita",
      "100% offline-ready spiritual design inspired by Indian heritage"
    ],
    contactUs: "Contact",
    contactUsText: "For feedback, suggestions, or inquiries, please reach out directly at karthiksai5421@gmail.com",

    
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
    offlineAccessDesc: "Access all 18 chapters, shlokas, stotras, and meditation audio completely offline without an internet connection",
    personalReflection: "Personal Reflection",
    personalReflectionDesc: "Contemplate and reflect deeply on the sacred verses, meanings, and dialogues at your own pace",
    
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
    aboutMission: "उद्देश्य",
    aboutMissionText: "भगवद्गीता के गहरे उपदेशों को इंटरैक्टिव तकनीक, भक्ति ऑडियो और 100% ऑफ़लाइन बहुभाषी समर्थन के माध्यम से हर किसी के लिए सुलभ बनाना।",
    developmentTeam: "डेवलपर के बारे में",
    developmentTeamText: "यह एप्लिकेशन एकल डेवलपर (साई कार्तिक) द्वारा भक्ति के साथ स्वतंत्र रूप से डिज़ाइन और विकसित किया गया है, ताकि भगवद्गीता के शाश्वत ज्ञान, श्लोकों, ध्यान और पवित्र मंत्रों को पूरी तरह से ऑफ़लाइन अनुभव के रूप में प्रस्तुत किया जा सके।",
    appFeatures: "ऐप की विशेषताएँ",
    appFeaturesList: [
      "सभी 18 अध्यायों में अर्जुन और भगवान कृष्ण के बीच इंटरैक्टिव संवाद और श्लोक",
      "बहुभाषी समर्थन (अंग्रेजी, हिंदी, तेलुगु)",
      "कस्टमाइज़ करने योग्य टाइमर के साथ मार्गदर्शित ध्यान सत्र",
      "ऑडियो के साथ पवित्र जप और भक्तिपूर्ण स्तोत्र",
      "बच्चों के अनुकूल व्याख्याएँ और भगवद्गीता का इतिहास",
      "भारतीय आध्यात्मिकता से प्रेरित 100% ऑफ़लाइन दृश्य डिज़ाइन"
    ],
    contactUs: "संपर्क",
    contactUsText: "प्रतिक्रिया, सुझाव या किसी भी जानकारी के लिए कृपया सीधे karthiksai5421@gmail.com पर संपर्क करें",
    
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
    offlineAccessDesc: "इंटरनेट कनेक्शन के बिना सभी 18 अध्यायों, श्लोकों, स्तोत्रों और ध्यान ऑडियो तक पूरी तरह ऑफ़लाइन पहुँचें",
    personalReflection: "व्यक्तिगत प्रतिबिंब",
    personalReflectionDesc: "अपनी गति से पवित्र श्लोकों, अर्थों और संवादों पर गहराई से चिंतन और मनन करें",
    
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
    aboutMission: "లక్ష్యం",
    aboutMissionText: "ఇంటరాక్టివ్ టెక్నాలజీ, భక్తి ఆడియో మరియు 100% ఆఫ్‌లైన్ బహుభాషా మద్దతు ద్వారా భగవద్గీత యొక్క లోతైన ఉపదేశాలను ప్రతి ఒక్కరికీ సులభంగా అందించడం.",
    developmentTeam: "డెవలపర్ గురించి",
    developmentTeamText: "భగవద్గీత యొక్క శాశ్వత జ్ఞానం, శ్లోకాలు, ధ్యానం మరియు పవిత్ర స్తోత్రాలను పూర్తి ఆఫ్‌లైన్ అనుభవంగా అందించాలనే భక్తితో ఈ యాప్ ఒకే డెవలపర్ (సాయి కార్తీక్) చే స్వతంత్రంగా రూపొందించబడింది మరియు అభివృద్ధి చేయబడింది.",
    appFeatures: "యాప్ లక్షణాలు",
    appFeaturesList: [
      "మొత్తం 18 అధ్యాయాలలో అర్జునుడు మరియు శ్రీకృష్ణుని మధ్య ఇంటరాక్టివ్ సంభాషణ మరియు శ్లోకాలు",
      "బహుభాషా మద్దతు (ఆంగ్లం, హిందీ, తెలుగు)",
      "అనుకూల సమయ టైమర్‌తో మార్గదర్శిత ధ్యాన సెషన్లు",
      "ఆడియోతో పవిత్ర జపాలు మరియు భక్తి స్తోత్రాలు",
      "పిల్లల అనుకూల వివరణలు మరియు భగవద్గీత చరిత్ర",
      "భారతీయ ఆధ్యాత్మికత నుండి ప్రేరణ పొందిన 100% ఆఫ్‌లైన్ దృశ్య డిజైన్"
    ],
    contactUs: "సంప్రదించండి",
    contactUsText: "అభిప్రాయాలు, సూచనలు లేదా వివరాల కోసం దయచేసి నేరుగా karthiksai5421@gmail.com ద్వారా సంప్రదించండి",
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
    offlineAccessDesc: "ఇంటర్నెట్ కనెక్షన్ లేకుండా మొత్తం 18 అధ్యాయాలు, శ్లోకాలు, స్తోత్రాలు మరియు ధ్యాన ఆడియోను పూర్తిగా ఆఫ్‌లైన్‌లో పొందండి",
    personalReflection: "వ్యక్తిగత ప్రతిబింబనం",
    personalReflectionDesc: "మీ వేగంతో పవిత్ర శ్లోకాలు, అర్థాలు మరియు సంభాషణలపై లోతుగా చింతన చేయండి",
    
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
