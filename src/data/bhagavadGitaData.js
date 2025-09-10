
const bhagavadGitaData = {
    en: {
        ui: {
            dialogueTitle: 'Sacred Dialogue',
            krishnaName: 'Lord Krishna',
            arjunaName: 'Arjuna',
            askQuestionBtn: 'Ask Question',
            answerBtn: 'Divine Answer',
            summaryTitle: 'Chapter Summary',
            teachingsTitle: 'Key Teachings',
            progressText: 'Choose a Chapter to Begin Your Journey!',
            welcomeMessage: {
                title: '🙏 Welcome to the Sacred Dialogue 🙏',
                subtitle: 'Select a chapter above to begin the divine conversation between Krishna and Arjuna'
            }
        },

        // Chapter Data
        chapters: {
            1: {
                title: "Arjuna's Dilemma",
                subtitle: "Observing the Armies",
                description: "The opening chapter where Arjuna, standing on the battlefield of Kurukshetra, is overcome with despair upon seeing his relatives and teachers in the opposing army, leading to his moral crisis.",
                dialogue: [
                    { speaker: 'Arjuna', text: 'O Krishna, please draw my chariot between the two armies so I may see those who stand here eager for war.', emotion: 'resolute' },
                    { speaker: 'Krishna', text: 'Behold, O Partha, all the Kurus gathered here.', emotion: 'calm' },
                    { speaker: 'Arjuna', text: 'I see my own kinsmen, my teachers, uncles, and brothers. My limbs grow weak, my mouth is dry, my body trembles.', emotion: 'despondent' },
                    { speaker: 'Krishna', text: 'Observe them, Arjuna, for you must understand what you face.', emotion: 'observant' },
                    { speaker: 'Arjuna', text: 'I do not desire victory, kingdom, or happiness, O Krishna! What use is a kingdom, or even life itself, when those for whom we desire them are gathered here for battle?', emotion: 'anguished' },
                    { speaker: 'Krishna', text: 'This weakness of heart is unbecoming of a noble warrior like you, Arjuna.', emotion: 'chiding' },
                    { speaker: 'Arjuna', text: 'How can I fight against Bhishma and Drona, who are worthy of my worship? It would be better to live by begging than to slay these great souls.', emotion: 'conflicted' },
                    { speaker: 'Krishna', text: '(Silently listening, allowing Arjuna to express his turmoil)', emotion: 'patient' },
                    { speaker: 'Arjuna', text: 'If we kill our own kinsmen, sin will overcome us. With the destruction of the family, ancient traditions will perish, and lawlessness will prevail.', emotion: 'fearful' },
                    { speaker: 'Krishna', text: '(His expression remains calm, a silent anchor in Arjuna\'s storm of grief)', emotion: 'serene' },
                    { speaker: 'Arjuna', text: 'When lawlessness is prominent, the women of the family become corrupted, and from this, unwanted progeny are born, leading the family and its destroyers to hell.', emotion: 'distraught' },
                    { speaker: 'Krishna', text: 'Think beyond the immediate consequences, Arjuna. Consider the eternal law of Dharma.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'Alas, how strange it is that we are preparing to commit a great sin, driven by the desire for royal enjoyment.', emotion: 'lamenting' },
                    { speaker: 'Krishna', text: '(A compassionate gaze, understanding the depth of Arjuna\'s sorrow)', emotion: 'compassionate' },
                    { speaker: 'Arjuna', text: 'It would be better for me if the sons of Dhritarashtra, with weapons in hand, were to slay me, unarmed and unresisting, on the battlefield.', emotion: 'surrendered' },
                    { speaker: 'Krishna', text: 'Your grief clouds your judgment. This is not the path of a warrior.', emotion: 'firm' },
                    { speaker: 'Arjuna', text: 'I see no good in killing my own kinsmen in battle. I shall not fight.', emotion: 'resolved' },
                    { speaker: 'Krishna', text: 'Clarity will come. First, you must see the depth of your confusion.', emotion: 'wise' },
                    { speaker: 'Host', text: '(Casting aside his bow and arrows, Arjuna sinks down on the seat of the chariot, his mind overwhelmed with grief)', emotion: 'overwhelmed' },
                    { speaker: 'Krishna', text: 'Arise from this petty weakness of heart and stand up, O vanquisher of foes!', emotion: 'commanding' }
                ],
                summary: "In this episode, Arjuna stands on the battlefield, overwhelmed with grief at the thought of fighting his own family. He expresses his profound moral dilemma to Krishna, who begins to teach him about the nature of the soul and the importance of duty.",
                teachings: "The first chapter introduces the concepts of dharma (duty) and the eternal nature of the soul. Krishna urges Arjuna to overcome his emotional weakness and fulfill his duty as a warrior.",
                moralLesson: "It is important to face our duties with courage, even when they are difficult. True wisdom lies in understanding the difference between the temporary body and the eternal soul.",
                kidsVersion: "Imagine you have to play a game against your best friends. You feel sad and don't want to play. Krishna tells Arjuna that sometimes we have to do hard things because it's the right thing to do. He reminds Arjuna to be brave and strong."
            },
            
            2: {
                title: "The Eternal Soul",
                subtitle: "Sankhya Yoga - The Yoga of Knowledge",
                description: "Arjuna's surrender and Krishna's teachings on the immortal soul",
                dialogue: [
                    { speaker: 'Krishna', text: 'Why has this despondency come upon you at this critical moment? It is not befitting a noble person. It leads not to heaven, but to infamy.', emotion: 'chiding' },
                    { speaker: 'Arjuna', text: 'But how can I strike down Bhishma and Drona with arrows in battle? They are worthy of my worship!', emotion: 'conflicted' },
                    { speaker: 'Krishna', text: 'You grieve for those who are not worthy of grief, yet you speak words of wisdom. The wise lament neither for the living nor for the dead.', emotion: 'wise' },
                    { speaker: 'Arjuna', text: 'I am confused about my duty. I surrender to you as your disciple. Please instruct me on what is best for me.', emotion: 'surrendering' },
                    { speaker: 'Krishna', text: 'There was never a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.', emotion: 'enlightening' },
                    { speaker: 'Arjuna', text: 'How is that possible? Bodies are born and they die.', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'But the feelings of happiness and distress are very real, Krishna.', emotion: 'pained' },
                    { speaker: 'Krishna', text: 'These are temporary appearances, arising from sense perception. One must learn to tolerate them without being disturbed.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'So, the soul itself is never harmed?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'The soul is never born nor dies. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.', emotion: 'reassuring' },
                    { speaker: 'Arjuna', text: 'Can you explain this further? How can I grasp this truth?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.', emotion: 'illustrative' },
                    { speaker: 'Arjuna', text: 'If the soul is eternal, why should I fight? What is the purpose of this action?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Considering your specific duty as a kshatriya, you should know that there is no better engagement for you than fighting on religious principles. If you do not perform your religious duty of fighting, you will certainly incur sins for neglecting your duties and thus lose your reputation as a fighter.', emotion: 'commanding' },
                    { speaker: 'Arjuna', text: 'But what about the outcome? The sin of killing?', emotion: 'worried' },
                    { speaker: 'Krishna', text: 'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'What is the nature of a person whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'He is one who has given up all desires for sense gratification, who is free from attachment, fear, and anger. His mind is steady and not agitated by the threefold miseries.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'This state seems so peaceful. How does one control the powerful senses?', emotion: 'inspired' },
                    { speaker: 'Krishna', text: 'One who restrains his senses, keeping them under full control, and fixes his consciousness upon Me, is known as a man of steady intelligence.', emotion: 'conclusive' }
                ],
                summary: 'Arjuna surrenders to Krishna, who begins his teachings by explaining the fundamental difference between the temporary material body and the eternal spiritual soul.',
                teachings: 'The soul is immortal, birthless, and deathless. We should perform our prescribed duties without attachment to the results, maintaining equanimity in both success and failure.',
                moralLesson: 'Focus on doing your best in every situation without being overly attached to the outcome. True peace comes from performing your duty with a steady mind.',
                kidsVersion: 'Krishna told Arjuna not to be sad because even though our bodies get old, our soul is like a superhero that lives forever! He said we should always do our best, like in a game, but not worry too much about winning or losing.'
            },
            
            3: {
                title: "The Path of Action",
                subtitle: "Karma Yoga - Selfless Service",
                description: "Krishna teaches about selfless action and controlling desire",
                dialogue: [
                    { speaker: 'Arjuna', text: 'O Krishna, if you believe intelligence is better than fruitive action, then why do you urge me to engage in this ghastly warfare?', emotion: 'confused' },
                    { speaker: 'Krishna', text: 'I have already explained two paths, Arjuna: the path of knowledge for the contemplative, and the path of action for the active.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'Your words seem contradictory. I am bewildered. Please tell me definitively which path is more beneficial.', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'Not by merely abstaining from work can one achieve freedom from reaction, nor by renunciation alone can one attain perfection.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'Is it even possible to remain completely inactive?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Everyone is forced to act helplessly according to the qualities he has acquired from the modes of material nature; therefore no one can refrain from doing something, not even for a moment.', emotion: 'wise' },
                    { speaker: 'Arjuna', text: 'So, one must act. But how should one act to avoid entanglement?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'Perform your work as a sacrifice for the Supreme. Otherwise, work causes bondage in this material world. Therefore, perform your prescribed duties for His satisfaction, and in that way you will always remain free from bondage.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'What is the cycle of sacrifice you speak of?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'All living bodies subsist on food grains, which are produced from rains. Rains are produced by performance of yajña [sacrifice], and yajña is born of prescribed duties.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'Even the wise must act? I thought they were beyond all duties.', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'Even a self-realized man, who has no personal gain to achieve, continues to perform his duties to set an example for the world and maintain social order.', emotion: 'exemplary' },
                    { speaker: 'Arjuna', text: 'This makes sense. But what is it that impels one to sinful acts, even unwillingly, as if engaged by force?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'It is lust alone, Arjuna, which is born of contact with the material mode of passion and later transformed into wrath, and which is the all-devouring sinful enemy of this world.', emotion: 'warning' },
                    { speaker: 'Arjuna', text: 'Where does this enemy reside? How can we conquer it?', emotion: 'determined' },
                    { speaker: 'Krishna', text: 'The senses, the mind and the intelligence are its sitting places. By controlling the senses first, you can curb this great emblem of sin.', emotion: 'strategic' },
                    { speaker: 'Arjuna', text: 'So, I must control my senses and then my mind?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Yes. The senses are superior to dull matter; mind is higher than the senses; intelligence is still higher than the mind; and he [the soul] is even higher than the intelligence.', emotion: 'hierarchical' },
                    { speaker: 'Arjuna', text: 'I see. I must use my intelligence to control my mind and senses.', emotion: 'enlightened' },
                    { speaker: 'Krishna', text: 'Thus knowing oneself to be transcendental to the material senses, mind and intelligence, O mighty-armed Arjuna, one should steady the mind by deliberate spiritual intelligence and thus—by spiritual strength—conquer this insatiable enemy known as lust.', emotion: 'conclusive' }
                ],
                summary: 'Krishna elaborates on karma-yoga, explaining how to control desire and anger while performing selfless duties for the welfare of all.',
                teachings: 'Selfless action purifies the mind and leads to spiritual growth. We should offer all actions to God and work as His instruments without attachment. Lust and anger are the greatest enemies that cloud wisdom.',
                moralLesson: 'Do your best work and help others without expecting anything in return. This makes you happy and peaceful. Control your anger and desires.',
                kidsVersion: 'Krishna said we should do our work like helping others and studying without being greedy. When we help without wanting anything back, it makes us feel good inside.'
            },
            
            4: {
                title: "Divine Knowledge",
                subtitle: "Jnana Yoga - Transcendental Knowledge",
                description: "Krishna reveals His divine nature and ancient wisdom tradition",
                dialogue: [
                    { speaker: 'Krishna', text: 'I instructed this imperishable science of yoga to the sun-god, Vivasvan, and Vivasvan instructed it to Manu, and Manu in turn instructed it to Iksvaku.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'The sun-god Vivasvan is senior by birth to you. How am I to understand that in the beginning you instructed this science to him?', emotion: 'puzzled' },
                    { speaker: 'Krishna', text: 'Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of the enemy!', emotion: 'wise' },
                    { speaker: 'Arjuna', text: 'Why do you appear in this world, O Lord?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I Myself appear, millennium after millennium.', emotion: 'authoritative' },
                    { speaker: 'Arjuna', text: 'How does knowing the truth of Your appearance help one?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'One who knows the transcendental nature of My appearance and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'People worship you in different ways. How do you respond to them?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pritha.', emotion: 'all-encompassing' },
                    { speaker: 'Arjuna', text: 'You created the four divisions of society. Is this based on birth?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'The four divisions of human society were created by Me according to the three modes of material nature and the work associated with them. Although I am the creator of this system, you should know that I am yet the non-doer, being unchangeable.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'How can one act without being entangled by karma?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'So, true action is that which is performed without attachment to its fruits?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Yes. Abandoning all attachment to the results of his activities, ever satisfied and independent, he performs no fruitive action, although engaged in all kinds of undertakings.', emotion: 'enlightening' },
                    { speaker: 'Arjuna', 'text': 'How does one acquire this transcendental knowledge?', 'emotion': 'seeking' },
                    { speaker: 'Krishna', 'text': 'Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.', 'emotion': 'guiding' },
                    { speaker: 'Arjuna', 'text': 'What is the power of this knowledge?', 'emotion': 'awestruck' },
                    { speaker: 'Krishna', 'text': 'As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities.', 'emotion': 'powerful' },
                    { speaker: 'Arjuna', 'text': 'So, I must cut down my doubts with this knowledge?', 'emotion': 'resolved' },
                    { speaker: 'Krishna', 'text': 'Therefore the doubts which have arisen in your heart out of ignorance should be slashed by the weapon of knowledge. Armed with yoga, O Bharata, stand and fight.', 'emotion': 'commanding' }
                ],
                summary: "In this chapter, Krishna reveals the profound history and purpose of His divine appearances. He explains that He descends to Earth to restore dharma (righteousness) whenever it declines. Krishna emphasizes that true liberation comes from understanding the transcendental nature of His birth and activities. The core of the chapter revolves around Jnana Yoga, the yoga of knowledge. Krishna explains that knowledge is the ultimate purifier, capable of burning away all karmic reactions. He instructs Arjuna on how to attain this knowledge through a bona fide spiritual master, submissive inquiry, and service. The chapter beautifully distinguishes between action and inaction, showing how one can act in the material world without being entangled by its results.",
                teachings: "The Lord's divine mission is to protect the righteous and reestablish dharma. Understanding the Lord's transcendental nature leads to liberation from the cycle of birth and death. True knowledge is the most powerful purifier and is attained through a spiritual master. One can achieve freedom from karma by acting without attachment and dedicating the fruits of labor to the Divine.",
                moralLesson: "The pursuit of genuine knowledge is the noblest path. Wisdom has the power to burn away our past mistakes and lead us to peace. Seek out a true teacher, ask questions with humility, and serve them with an open heart to find the ultimate truth.",
                kidsVersion: "Krishna is like a superhero who comes to Earth to fix things when they go wrong. He told Arjuna that if we learn about God from a wise teacher, it's like having a super-powerful fire that can burn up all our mistakes. The best way to learn is to be a good student, listen carefully, and help your teacher. This makes you super smart and super peaceful!"
            },
            
            
            5: {
                title: "Renunciation in Action",
                subtitle: "Karma Sannyasa Yoga - True Freedom",
                description: "Understanding the balance between action and renunciation",
                dialogue: [
                    { speaker: 'Arjuna', text: 'O Krishna, first you ask me to renounce work, and then again you recommend work with devotion. Now will you please tell me definitely which of the two is more beneficial?', emotion: 'confused' },
                    { speaker: 'Krishna', text: 'Renunciation of work and work in devotion are both good for liberation. But of the two, work in devotional service is better than the mere renunciation of work.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'How can that be? It seems renouncing all action would bring peace.', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Merely renouncing all activities yet not engaging in the devotional service of the Lord cannot make one happy. But a thoughtful person engaged in devotional service can achieve the Supreme without delay.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'So, the key is to act without attachment?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water.', emotion: 'illustrative' },
                    { speaker: 'Arjuna', text: 'How does such a person see the world?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater [outcaste].', emotion: 'enlightening' },
                    { speaker: 'Arjuna', text: 'They see the divine in everyone?', emotion: 'awestruck' },
                    { speaker: 'Krishna', text: 'Those whose minds are established in sameness and equanimity have already conquered the conditions of birth and death. They are flawless like Brahman, and thus they are already situated in Brahman.', emotion: 'affirming' },
                    { speaker: 'Arjuna', text: 'How do they experience happiness?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'Such a liberated person is not attracted to material sense pleasure but is always in trance, enjoying the pleasure within. In this way the self-realized person enjoys unlimited happiness, for he concentrates on the Supreme.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'So external pleasures eventually lead to misery?', emotion: 'realizing' },
                    { speaker: 'Krishna', text: 'An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. O son of Kunti, such pleasures have a beginning and an end, and so the wise man does not delight in them.', emotion: 'wise' },
                    { speaker: 'Arjuna', text: 'What is the nature of the peace they attain?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries.', emotion: 'conclusive' },
                    { speaker: 'Arjuna', text: 'Is it the mind or the self that is truly acting?', emotion: 'philosophical' },
                    { speaker: 'Krishna', text: 'When the embodied living being controls his nature and mentally renounces all actions, he resides happily in the city of nine gates [the material body], neither working nor causing work to be done.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'So true renunciation is an internal state, not just an external show?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Exactly. One who is wise understands that the soul is aloof from the activities of the senses. He dedicates his actions to the divine and finds peace.', emotion: 'confirming' },
                    { speaker: 'Arjuna', text: 'This path of selfless action seems superior and more practical.', emotion: 'resolved' },
                    { speaker: 'Krishna', text: 'Indeed, it is. Engage in action, Arjuna, but with your mind fixed on the Supreme. This is the secret of true renunciation and lasting peace.', emotion: 'encouraging' }
                ],
                summary: "In this chapter, Arjuna asks Krishna to clarify which path is superior: the renunciation of work (Sannyasa) or work in devotion (Karma Yoga). Krishna explains that while both paths lead to liberation, Karma Yoga is more practical and effective for most people. He reveals that true renunciation is not the cessation of action, but the renunciation of attachment to the fruits of action. A person who acts without selfish desire, offering the results to the Supreme, is untouched by karma, like a lotus leaf in water. Krishna emphasizes that a self-realized soul sees all beings with equal vision and, by controlling the mind and senses, finds true happiness within.",
                teachings: "Work in devotional service (Karma Yoga) is superior to the mere renunciation of work. True renunciation means giving up attachment to the fruits of labor, not the labor itself. A person who acts for the Supreme is not entangled in karmic reactions. The wise see all beings with an equal eye, recognizing the divine presence in everyone. Lasting peace and happiness are found not in external sense pleasures, but in the inner joy of the Self.",
                moralLesson: "The secret to a happy and meaningful life is not to run away from your responsibilities, but to perform them with a selfless spirit. When you dedicate your actions to a higher purpose, you find freedom and peace, no matter what you do. True wisdom lies in seeing the divine in all and treating everyone with kindness and respect.",
                kidsVersion: "Krishna teaches us that being a true hero isn't about quitting the game, but about playing with a good heart. Instead of always thinking, 'What's in it for me?', we should think about how we can help others. When we do our work to make the world a better place, we feel happy inside, and we don't get upset if things don't go our way. It's like being a superhero who finds joy in helping, not just in winning prizes!"
            },
            
            6: {
                title: "The Science of Self-Realization",
                subtitle: "Dhyana Yoga - The Yoga of Meditation",
                description: "The process of meditation and the discipline of the mind",
                dialogue: [
                    { speaker: 'Krishna', text: 'One who is unattached to the fruits of his work and who works as he is obligated is in the renounced order of life, and he is the true mystic.', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'How does one elevate oneself through the mind?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'For whom is the mind a friend, and for whom is it an enemy?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'How does one practice yoga meditation?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'To practice yoga, one should go to a secluded place, lay a seat of kusa grass, deerskin and a soft cloth, and then, with a tranquil mind, practice yoga to purify the heart.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'This seems very difficult. What about eating and sleeping?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'He who is regulated in his habits of eating, sleeping, recreation and work can mitigate all material pains by practicing the yoga system.', emotion: 'balanced' },
                    { speaker: 'Arjuna', text: 'O Krishna, the mind is restless, turbulent, obstinate and very strong. To subdue it, I think, is more difficult than controlling the wind.', emotion: 'frustrated' },
                    { speaker: 'Krishna', text: 'O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by suitable practice and by detachment.', emotion: 'encouraging' },
                    { speaker: 'Arjuna', text: 'What is the destination of the unsuccessful yogi who begins with faith but then desists due to worldly-mindedness?', emotion: 'worried' },
                    { speaker: 'Krishna', text: 'A transcendentalist engaged in auspicious activities does not meet with destruction either in this world or in the spiritual world; one who does good, My friend, is never overcome by evil.', emotion: 'reassuring' },
                    { speaker: 'Arjuna', text: 'Where does he go after death?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'The unsuccessful yogi, after many, many years of enjoyment on the planets of the pious, is born into a family of righteous people, or into a family of rich aristocracy. By virtue of the divine consciousness of his previous life, he again revives the consciousness of his past life and tries to make further progress.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'So, no spiritual effort is ever wasted?', emotion: 'hopeful' },
                    { speaker: 'Krishna', text: 'Indeed. And when the yogi engages himself with sincere endeavor in making further progress, being washed of all contaminations, then ultimately, achieving perfection after many, many births of practice, he attains the supreme goal.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'Who is the highest among all yogis?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'And of all yogis, the one with great faith who always abides in Me, thinks of Me within himself, and renders transcendental loving service to Me—he is the most intimately united with Me in yoga and is the highest of all. That is My opinion.', emotion: 'conclusive' },
                    { speaker: 'Arjuna', text: 'I understand. The path is difficult, but with practice, detachment, and devotion, it is possible.', emotion: 'resolved' },
                    { speaker: 'Krishna', text: 'Yes, Arjuna. A true yogi sees Me in all beings and all beings in Me. For such a person, I am never lost, nor are they ever lost to Me.', emotion: 'unifying' }
                ],
                summary: "In this chapter, Krishna teaches Arjuna about Dhyana Yoga, the yoga of meditation. He explains that controlling the restless mind is indeed challenging but achievable through consistent practice and detachment. Krishna describes the proper way to practice meditation, including the physical setup and mental discipline required. He reassures Arjuna that even an unsuccessful yogi does not face destruction but is reborn in favorable circumstances to continue their spiritual journey. The chapter emphasizes that true yoga is attained when the mind is completely restrained from material activities and focused on the Supreme. Krishna reveals that the greatest yogi is one who worships Him with loving devotion.",
                teachings: "Meditation requires a disciplined approach with proper physical setup and mental focus. Consistency in practice and detachment from material desires are essential for success in yoga. Even unsuccessful attempts at yoga bear fruit in future lives. True yoga is achieved when the mind is completely focused on the Supreme and free from material distractions. The highest form of yoga is devotional service to the Supreme Lord.",
                moralLesson: "Self-discipline and perseverance are key to achieving any goal, especially spiritual ones. Even if we don't succeed completely in this lifetime, our efforts are never wasted. The practice of meditation and mindfulness helps us develop inner strength and equanimity that benefits us in all aspects of life. True success comes from dedication to a higher purpose rather than personal gain.",
                kidsVersion: "Krishna teaches us that controlling our mind is like training a puppy. It's hard at first, but with practice, it gets easier. Even if we don't become perfect meditators right away, we're still learning something valuable. The best way to meditate is to think about God and how we can help others. When our mind wanders away (like when we get distracted during class), we should gently bring it back to our practice. It's like exercising - the more we do it, the stronger our mind becomes!"
            },
            
            7: {
                title: "Knowledge of the Absolute",
                subtitle: "Jnana Vijnana Yoga - Complete Knowledge",
                description: "Krishna reveals His supreme nature and different types of devotees",
                dialogue: [
                    { speaker: 'Krishna', text: 'Now hear, O son of Pritha, how by practicing yoga in full consciousness of Me, with your mind attached to Me, you can know Me in full, free from doubt.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'Please tell me this knowledge in full. Knowing this, what else remains to be known?', emotion: 'eager' },
                    { speaker: 'Krishna', text: 'Out of many thousands among men, one may endeavor for perfection, and of those who have achieved perfection, hardly one knows Me in truth.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'What is the nature of Your energies?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'Earth, water, fire, air, ether, mind, intelligence and false ego—all together these eight constitute My separated material energies. Besides this, there is another, superior energy of Mine, which comprises the living entities.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'So all that exists originates from You?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Of all that is material and all that is spiritual in this world, know for certain that I am both the origin and the dissolution. There is no truth superior to Me. Everything rests upon Me, as pearls are strung on a thread.', emotion: 'foundational' },
                    { speaker: 'Arjuna', text: 'How can I perceive you in my daily life?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'I am the taste of water, the light of the sun and the moon, the sound in ether and ability in man.', emotion: 'all-pervading' },
                    { speaker: 'Arjuna', text: 'Why then do most people not see You?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Deluded by the three modes of nature, the whole world does not know Me. This divine energy of Mine, consisting of the three modes, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it.', emotion: 'wise' },
                    { speaker: 'Arjuna', text: 'Who are the pious who worship you?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'Four kinds of pious men begin to render devotional service unto Me—the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute.', emotion: 'categorizing' },
                    { speaker: 'Arjuna', text: 'Which of them is the best?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to Me.', emotion: 'loving' },
                    { speaker: 'Arjuna', text: 'What about those who worship demigods?', emotion: 'inquiring' },
                    { speaker: 'Krishna', text: 'Men of small intelligence worship the demigods, and their fruits are limited and temporary. But My devotees ultimately reach My supreme planet.', emotion: 'discerning' },
                    { speaker: 'Arjuna', text: 'Why can the unintelligent not understand Your supreme nature?', emotion: 'puzzled' },
                    { speaker: 'Krishna', text: 'I am never manifest to the foolish and unintelligent. For them I am covered by My internal potency, and therefore they do not know that I am unborn and infallible.', emotion: 'mysterious' },
                    { speaker: 'Arjuna', text: 'How can one be freed from this delusion?', emotion: 'hopeful' },
                    { speaker: 'Krishna', text: 'Persons who have acted piously in previous lives and in this life and whose sinful actions are completely eradicated are freed from the dualities of delusion, and they engage themselves in My service with determination.', emotion: 'conclusive' }
                ],
                summary: "Krishna explains the nature of absolute truth, revealing Himself as the origin of both the material and spiritual energies. He describes how everything in existence is a manifestation of His energy. He details the four types of people who come to Him and the four who do not, emphasizing that the one who knows Him in truth and serves Him with pure devotion is the most dear to Him. The chapter highlights that true knowledge (jnana) combined with realized knowledge (vijnana) leads to complete understanding and surrender.",
                teachings: "The Supreme Lord is the source of all material and spiritual existence. The material world operates under the three modes of nature, which create illusion (maya). Surrendering to the Supreme Lord is the only way to overcome maya. There are four types of pious people who worship God, but the one who worships out of pure knowledge and love is the highest. True wisdom lies in recognizing the divine in all of creation.",
                moralLesson: "Look for the divine spark in everything and everyone. True knowledge isn't just about knowing facts; it's about realizing the deep connection between yourself, the world, and the divine source of all. When you act with this understanding, you find true purpose and a love that is unconditional.",
                kidsVersion: "Krishna teaches Arjuna that He is the secret ingredient in everything! He's the yummy taste in water, the bright light of the sun, and the sweet smell of a flower. Some people get distracted by shiny toys and forget about Krishna, but others, like the curious explorers and those who need help, always look for Him. Krishna says the best explorers are the ones who not only look for Him but also understand that He is in everything and everyone. They become His best friends forever!"
            },
            
            8: {
                title: "Attaining the Supreme",
                subtitle: "Akshara Brahma Yoga - The Imperishable Absolute",
                description: "Krishna answers Arjuna's questions about the ultimate reality and death",
                dialogue: [
                    { speaker: 'Arjuna', text: 'O my Lord, what is Brahman? What is the self? What are fruitive activities? What is this material manifestation? And how can I know You at the time of death?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'The indestructible, transcendental living entity is called Brahman. Action pertaining to the development of material bodies is called karma.', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'How is it possible to remember You at the moment of death?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'Whoever, at the end of his life, quits his body remembering Me alone, at once attains My nature. Of this there is no doubt.', emotion: 'reassuring' },
                    { speaker: 'Arjuna', text: 'What determines our state of being at death?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Whatever state of being one remembers when he quits his body, O son of Kunti, that state he will attain without fail.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'So I must always think of you?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Therefore, Arjuna, you should always think of Me and at the same time carry out your prescribed duty of fighting. With your activities dedicated to Me, you will attain Me without doubt.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'How should one meditate to reach You?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'He who meditates on Me as the Supreme Person, his mind constantly engaged in remembering Me, undeviated from the path, he is sure to reach Me.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'What is the nature of Your supreme abode?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to My abode never takes birth again.', emotion: 'liberating' },
                    { speaker: 'Arjuna', text: 'Is there a world beyond this material one?', emotion: 'awestruck' },
                    { speaker: 'Krishna', text: 'Yet there is another unmanifest nature, which is eternal and is transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. That is My supreme abode.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'How can one reach that abode?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'The Supreme Personality of Godhead, who is greater than all, is attainable by unalloyed devotion. Although He is present in His abode, He is all-pervading, and everything is situated within Him.', emotion: 'devotional' },
                    { speaker: 'Arjuna', text: 'Are there auspicious times to leave the body?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'Those who know the Supreme Brahman attain that Supreme by passing away from the world during the influence of the fiery god, in the light, at an auspicious moment of the day, during the fortnight of the waxing moon, or during the six months when the sun travels in the north.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'And inauspicious times?', emotion: 'contrasting' },
                    { speaker: 'Krishna', text: 'The mystic who passes away from this world during the smoke, the night, the fortnight of the waning moon, or the six months when the sun passes to the south, reaches the moon planet but again comes back.', emotion: 'warning' },
                    { speaker: 'Arjuna', text: 'Must a devotee worry about these calculations?', emotion: 'worried' },
                    { speaker: 'Krishna', text: 'Although the devotees know these two paths, they are never bewildered. Therefore be always fixed in devotion.', emotion: 'reassuring' },
                    { speaker: 'Arjuna', text: 'So, devotion is the key that unlocks all doors?', emotion: 'enlightened' },
                    { speaker: 'Krishna', text: 'A person who accepts the path of devotional service is not bereft of any results. Simply by performing devotional service, he attains all these, and at the end he reaches the supreme eternal abode.', emotion: 'conclusive' }
                ],
                summary: "In this chapter, Arjuna asks Krishna a series of fundamental questions about the nature of reality: What is Brahman, karma, the self, and the divine? Krishna answers these, explaining the concepts of the imperishable soul (Akshara) and the Supreme Lord (Brahma). The core of the chapter focuses on the importance of the state of mind at the time of death. Krishna emphasizes that whatever one remembers at the end of life determines their next destination. Therefore, He advises Arjuna to practice constant remembrance of Him (Bhakti Yoga) even while performing worldly duties. This ensures that one will attain the supreme abode and be freed from the cycle of birth and death.",
                teachings: "The consciousness at the time of death is critical in determining the soul's next journey. Consistent spiritual practice (sadhana) throughout life is the key to remembering the Divine at the final moment. Devotional service (Bhakti Yoga) is the most effective means to purify the consciousness and fix the mind on the Supreme. The material world is temporary and a place of suffering, while the spiritual world is eternal and blissful. A true devotee transcends the dualities of auspicious and inauspicious times, as their destination is assured by their devotion.",
                moralLesson: "What you fill your mind with today determines who you become tomorrow, and ultimately, where you go in the great journey of life. Practice remembering what is truly important—love, truth, and the divine—so that in the final exam of life, you pass with flying colors and reach a state of eternal peace.",
                kidsVersion: "Krishna tells Arjuna a secret: whatever you think about the most is what you'll remember when it's time to go on a big journey to the next life. So, if you think about your favorite toys, you might dream of toys. But if you think about God, you get to go to God's super-duper happy home! Krishna says the best way to remember God is to be like a superhero who always thinks about helping others and being good, even while playing and having fun. That way, you're always connected to the best and happiest place in the whole universe!"
            },
            
            9: {
                title: "The Most Confidential Knowledge",
                subtitle: "Raja Vidya Raja Guhya Yoga - The King of Knowledge",
                description: "Krishna reveals the most confidential knowledge of devotional service",
                dialogue: [
                    { speaker: 'Krishna', text: 'My dear Arjuna, because you are never envious of Me, I shall impart to you this most confidential knowledge and realization, knowing which you shall be relieved of the miseries of material existence.', emotion: 'gracious' },
                    { speaker: 'Arjuna', text: 'I am eager to hear this supreme knowledge, O Lord.', emotion: 'receptive' },
                    { speaker: 'Krishna', text: 'This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion.', emotion: 'emphatic' },
                    { speaker: 'Arjuna', text: 'Why do those without faith fail to attain You?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Those who are not faithful in this devotional service cannot attain Me, O conqueror of enemies. Therefore they return to the path of birth and death in this material world.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'How do you pervade this universe?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.', emotion: 'mysterious' },
                    { speaker: 'Arjuna', text: 'That is a paradox. How can everything be in you, but you are not in them?', emotion: 'puzzled' },
                    { speaker: 'Krishna', text: 'And yet everything that is created does not rest in Me. Behold My mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for My Self is the very source of creation.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'Who are the ones who recognize your divine nature?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'The great souls, the mahatmas, are not deluded. They are under the protection of the divine nature and are fully engaged in devotional service because they know Me as the Supreme Person, original and inexhaustible.', emotion: 'praising' },
                    { speaker: 'Arjuna', text: 'How should I worship You to attain this state?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it.', emotion: 'accepting' },
                    { speaker: 'Arjuna', text: 'Is the offering itself important, or the devotion behind it?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'The devotion is what matters. Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that as an offering to Me.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'What is the result of such offering?', emotion: 'hopeful' },
                    { speaker: 'Krishna', text: 'In this way you will be freed from bondage to work and its auspicious and inauspicious results. With your mind fixed on Me in this principle of renunciation, you will be liberated and come to Me.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'Do you favor some devotees over others?', emotion: 'inquiring' },
                    { speaker: 'Krishna', text: 'I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him.', emotion: 'impartial' },
                    { speaker: 'Arjuna', text: 'What is your final instruction in this most confidential knowledge?', emotion: 'attentive' },
                    { speaker: 'Krishna', text: 'Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend.', emotion: 'loving' }
                ],
                summary: "In this chapter, Krishna reveals the most confidential knowledge of pure devotional service (bhakti yoga). He explains that this knowledge is the king of all education and the most secret of all secrets. Krishna describes the different types of devotees and emphasizes that those who engage in pure devotional service with love and faith are most dear to Him. He explains that even simple offerings made with devotion are accepted by Him. The chapter highlights that this knowledge leads to liberation from the cycle of birth and death and enables one to attain Krishna's eternal abode.",
                teachings: "Pure devotional service is the highest form of spiritual practice. Krishna accepts even simple offerings made with love and devotion. Those who engage in devotional service with faith and love are very dear to Krishna. This most confidential knowledge leads to liberation and the attainment of Krishna's eternal abode. Devotion is more important than the opulence of offerings.",
                moralLesson: "True devotion is not about how much we give, but about the love and sincerity with which we give. Even the simplest offering made with a pure heart is more valuable than the most elaborate gift given without love. Developing a personal relationship with the divine through devotion brings the highest fulfillment.",
                kidsVersion: "Krishna tells Arjuna that the best secret in the whole world is how to be His best friend forever! It's not about giving Him expensive gifts, but about loving Him with all your heart. Even if you give Him just a simple flower or a leaf, He's super happy if you give it with love. Krishna says that the most important thing is to think about Him, be His friend, and do everything for Him. That way, you become His very special friend and get to live with Him in the happiest place ever!"
            },
            10: {
                title: 'The Opulence of the Absolute',
                subtitle: 'Vibhuti Yoga - The Divine Glories',
                description: 'Krishna reveals His divine manifestations in the material and spiritual worlds',
                dialogue: [
                    { speaker: 'Krishna', text: 'Listen again, O mighty-armed Arjuna. Because you are My dear friend, for your benefit I shall speak to you further, giving knowledge that is better than what I have already explained.', emotion: 'affectionate' },
                    { speaker: 'Arjuna', text: 'You are the Supreme Lord, the origin of all. Neither the hosts of demigods nor the great sages know Your origin. Please describe in detail Your divine opulences by which You pervade all these worlds.', emotion: 'devotional' },
                    { speaker: 'Krishna', text: 'I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts.', emotion: 'foundational' },
                    { speaker: 'Arjuna', text: 'How shall I constantly think of You and how shall I know You? In what various forms are You to be remembered, O Supreme Person?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'I will tell you of My splendorous manifestations, but only of those which are prominent, O Arjuna, for My opulence is limitless.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'I am listening with rapt attention.', emotion: 'attentive' },
                    { speaker: 'Krishna', text: 'I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings.', emotion: 'immanent' },
                    { speaker: 'Arjuna', text: 'And among the divine beings?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'Of the Adityas I am Vishnu, of lights I am the radiant sun, of the Maruts I am Marici, and among the stars I am the moon.', emotion: 'illustrious' },
                    { speaker: 'Arjuna', text: 'In the Vedas and senses?', emotion: 'exploring' },
                    { speaker: 'Krishna', text: 'Of the Vedas I am the Sama Veda; of the demigods I am Indra, the king of heaven; of the senses I am the mind; and in living beings I am the living force [consciousness].', emotion: 'essential' },
                    { speaker: 'Arjuna', text: 'Among the great forces and beings?', emotion: 'awestruck' },
                    { speaker: 'Krishna', text: 'Of the Rudras I am Lord Shiva, of the Yaksas and Raksasas I am the Lord of wealth [Kuvera], of the Vasus I am fire [Agni], and of mountains I am Meru.', emotion: 'majestic' },
                    { speaker: 'Arjuna', text: 'Among priests and generals?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'Of priests, O Arjuna, know Me to be the chief, Brhaspati. Of generals I am Kartikeya, and of bodies of water I am the ocean.', emotion: 'preeminent' },
                    { speaker: 'Arjuna', text: 'Your manifestations are truly the best of everything.', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Among the great sages I am Bhrgu; among vibrations I am the transcendental om. Of sacrifices I am the chanting of the holy names [japa], and of immovable things I am the Himalayas.', emotion: 'supreme' },
                    { speaker: 'Arjuna', text: 'Among all trees and celestial beings?', emotion: 'wondering' },
                    { speaker: 'Krishna', text: 'Of all trees I am the banyan tree, and of the sages among the demigods I am Narada. Of the Gandharvas I am Citraratha, and among perfected beings I am the sage Kapila.', emotion: 'omnipresent' },
                    { speaker: 'Arjuna', text: 'It is impossible to comprehend all your opulences.', emotion: 'overwhelmed' },
                    { speaker: 'Krishna', text: 'Know that all opulent, beautiful and glorious creations spring from but a spark of My splendor. But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of Myself I pervade and support this entire universe.', emotion: 'conclusive' }
                ],
                summary: "In this chapter, Krishna explains that He is the source of all creation and that all opulent, beautiful, and glorious things are but a spark of His divine splendor. He provides numerous examples of His manifestations in the world, encouraging Arjuna to see Him everywhere.",
                teachings: "The entire universe is a manifestation of the Divine. We can connect with God by recognizing His presence in the excellence of the world around us. True wisdom lies in understanding that a single fragment of the Divine pervades and supports all of existence.",
                moralLesson: "Look for the best in everything and everyone, and you will see a reflection of the Divine. Cultivating an awareness of God's presence in the world can transform our perception and fill our lives with reverence and wonder.",
                kidsVersion: "Imagine the best of everything: the strongest lion, the brightest star, the tallest mountain. Krishna explains that He is the 'best' in every group. So, whenever you see something amazing, you're seeing a little piece of God's magic!"
            },
            
            11: {
                title: 'The Universal Form',
                subtitle: 'Vishvarupa Darshana Yoga - The Cosmic Vision',
                description: 'Krishna grants Arjuna divine vision and reveals His spectacular, terrifying universal form',
                dialogue: [
                    { speaker: 'Arjuna', text: 'My illusion is now gone. I have heard from You in detail about the appearance and disappearance of every living entity. O greatest of all personalities, O supreme form, though I see You here before me in Your actual position, as You have described Yourself, I wish to see how You have entered into this cosmic manifestation. I want to see that form of Yours.', emotion: 'reverent' },
                    { speaker: 'Krishna', text: 'My dear Arjuna, you cannot see Me with your present eyes. Therefore I give you divine eyes. Behold My mystic opulence!', emotion: 'granting' },
                    { speaker: 'Arjuna', text: 'O Lord of the universe, O universal form, I see in Your body many, many arms, bellies, mouths and eyes, expanded everywhere, without limit. I see in You no end, no middle and no beginning.', emotion: 'awestruck' },
                    { speaker: 'Krishna', text: 'Behold My hundreds of thousands of varied divine and multicolored forms.', emotion: 'magnificent' },
                    { speaker: 'Arjuna', text: 'I see all the demigods and various other living entities assembled in Your body. I see Lord Brahma sitting on the lotus flower, as well as Lord Shiva and all the sages and divine serpents.', emotion: 'overwhelmed' },
                    { speaker: 'Krishna', text: 'Whatever you wish to see, behold at once in this body of Mine! You can see whatever you may wish to see in the future. Everything—moving and nonmoving—is here completely, in one place.', emotion: 'all-encompassing' },
                    { speaker: 'Arjuna', text: 'O Lord, your form is difficult to see because of its glaring effulgence, spreading on all sides, like blazing fire or the immeasurable radiance of the sun. Yet I see this glowing form everywhere.', emotion: 'dazzled' },
                    { speaker: 'Krishna', text: 'I am the original source, the inexhaustible, the oldest; I am the maintainer of eternal religion, the Personality of Godhead.', emotion: 'foundational' },
                    { speaker: 'Arjuna', text: 'I see all the sons of Dhrtarastra, along with their allied kings, and Bhisma, Drona, Karna—and our chief soldiers as well—rushing into Your fearful mouths. And some I see trapped with heads smashed between Your teeth.', emotion: 'terrified' },
                    { speaker: 'Krishna', text: 'Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasaci, can be but an instrument in the fight.', emotion: 'commanding' },
                    { speaker: 'Arjuna', text: 'O Lord of lords, so fierce of form, please tell me who You are.', emotion: 'fearful' },
                    { speaker: 'Krishna', text: 'I am the Supreme Personality of Godhead, the Absolute Truth, the source of all creation. I am the eternal, the imperishable, the beginning and the end of all beings. I am time, the great destroyer of worlds, and I have come here to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.', emotion: 'reveling' },
                    { speaker: 'Arjuna', text: 'After seeing this universal form, which I have never seen before, I am gladdened, but at the same time my mind is disturbed with fear. Please bestow Your grace upon me and reveal again Your form as the Personality of Godhead.', emotion: 'pleading' },
                    { speaker: 'Krishna', text: 'It is only by unalloyed devotional service that I can be understood as I am, standing before you, and can be seen directly.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'O Krishna, seeing this beautiful human-like form of Yours, I am now pacified and have returned to my normal state of mind.', emotion: 'relieved' },
                    { speaker: 'Krishna', text: 'My dear Arjuna, he who engages in My pure devotional service, free from the contaminations of fruitive activities and mental speculation, he who works for Me, who makes Me the supreme goal of his life, and who is friendly to every living being—he certainly comes to Me.', emotion: 'conclusive' },
                    { speaker: 'Arjuna', text: 'My illusion is gone. I am now firm and free from doubt. I am prepared to act according to your instructions.', emotion: 'resolved' },
                    { speaker: 'Krishna', text: 'Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality.', emotion: 'promising' }
                ],
                summary: "Arjuna asks to see Krishna's universal form. Krishna grants him divine vision and reveals a terrifying, all-encompassing cosmic manifestation. This vision shows Krishna as Time, the destroyer of all, confirming that the outcome of the war is already determined by divine will.",
                teachings: "The universal form reveals the absolute power and all-encompassing nature of the Divine. It teaches that we are all instruments in a larger cosmic plan. True understanding of God comes not from intellectual study but from pure devotion.",
                moralLesson: "Sometimes, facing the raw power of reality can be terrifying, but it helps us understand our place in the universe. True strength comes from surrendering to a higher purpose and acting as an instrument for good.",
                kidsVersion: "Arjuna asked Krishna to show him his super-duper, all-powerful form. Krishna showed him a giant vision with everything in the universe inside it! It was a bit scary, like a big thunderstorm, but it showed Arjuna that Krishna was in charge of everything and that he shouldn't be afraid to do the right thing."
            },
            
            12: {
                title: 'Devotional Service',
                subtitle: 'Bhakti Yoga - The Path of Love',
                description: 'Krishna explains the supreme path of devotional service and the qualities of His devotees',
                dialogue: [
                    { speaker: 'Arjuna', text: 'Which are considered to be more perfect, those who are always properly engaged in Your devotional service or those who worship the impersonal Brahman, the unmanifested?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Those who fix their minds on My personal form and are always engaged in worshiping Me with great and transcendental faith are considered by Me to be most perfect.', emotion: 'affirming' },
                    { speaker: 'Arjuna', text: 'What about those who worship the unmanifested?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'For those whose minds are attached to the unmanifested, impersonal feature of the Supreme, advancement is very troublesome. To make progress in that discipline is always difficult for those who are embodied.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'So devotion to your personal form is the easier path?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Just fix your mind upon Me, and engage all your intelligence in Me. Thus you will live in Me always, without a doubt.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'What if I cannot fix my mind upon you without deviation?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'If you cannot, then follow the regulative principles of bhakti-yoga. In this way develop a desire to attain Me.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'And if I cannot follow the regulative principles?', emotion: 'hopeful' },
                    { speaker: 'Krishna', text: 'If you cannot, then try to work for Me; because by working for Me you will come to the perfect stage.', emotion: 'accommodating' },
                    { speaker: 'Arjuna', text: 'And if even that is not possible?', emotion: 'desperate' },
                    { speaker: 'Krishna', text: 'If, however, you are unable to work in this consciousness of Me, then try to act giving up all results of your work and try to be self-situated.', emotion: 'merciful' },
                    { speaker: 'Arjuna', text: 'What are the qualities of a devotee who is dear to you?', emotion: 'devotional' },
                    { speaker: 'Krishna', text: 'One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, tolerant, and always satisfied.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'Please tell me more qualities.', emotion: 'eager' },
                    { speaker: 'Krishna', text: 'A devotee who is self-controlled, engaged in devotional service with determination, his mind and intelligence fixed on Me—such a devotee of Mine is very dear to Me.', emotion: 'praising' },
                    { speaker: 'Arjuna', text: 'How do they interact with the world?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'He by whom no one is put into difficulty and who is not disturbed by anyone, who is equipoised in happiness and distress, fear and anxiety, is very dear to Me.', emotion: 'serene' },
                    { speaker: 'Arjuna', text: 'What is their attitude towards worldly things?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'My devotee who is not dependent on the ordinary course of activities, who is pure, expert, without cares, free from all pains, and not striving for some result, is very dear to Me.', emotion: 'detached' },
                    { speaker: 'Arjuna', text: 'How do they handle praise and blame?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'One who is equal to friends and enemies, who is equipoised in honor and dishonor, heat and cold, happiness and distress, fame and infamy, who is free from contaminating association, always silent and satisfied with anything, is very dear to me.', emotion: 'equanimous' },
                    { speaker: 'Arjuna', text: 'It is a high standard to achieve.', emotion: 'humbled' },
                    { speaker: 'Krishna', text: 'Those who follow this imperishable path of devotional service and who completely engage themselves with faith, making Me the supreme goal, are very, very dear to Me.', emotion: 'conclusive' }
                ],
                summary: "Arjuna asks whether it is better to worship God in a personal form or as the formless Absolute. Krishna declares that while both paths lead to Him, the path of loving devotion (Bhakti Yoga) to His personal form is the most direct and suitable for most people. He then describes the wonderful qualities of a true devotee.",
                teachings: "Devotion to a personal form of God is the easiest and most effective path for spiritual realization. God is accessible to all, and we can start our journey from wherever we are. Cultivating qualities like kindness, tolerance, and equanimity is a key part of spiritual life.",
                moralLesson: "It's easier to love a person than an idea. Connecting with God through a personal relationship, filled with love and service, can make the spiritual journey joyful and fulfilling. The goal is not just to know about God, but to love God.",
                kidsVersion: "Arjuna asked, 'What's the best way to love God?' Krishna said, 'Imagine God is your best friend. It's easier to love a friend you can picture and talk to, right?' He also said that the best devotees are kind to everyone, don't get upset easily, and are happy to share."
            },
            
            13: {
                title: 'The Field and its Knower',
                subtitle: 'Kshetra Kshetrajna Vibhaga Yoga - Matter and Spirit',
                description: 'Understanding the difference between the field (body) and knower of the field (soul)',
                dialogue: [
                    { speaker: 'Arjuna', text: 'O my dear Krishna, I wish to know about nature [prakrti], the enjoyer [purusa], and the field and the knower of the field, and of knowledge and the end of knowledge.', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'This body, O son of Kunti, is called the field, and one who knows this body is called the knower of the field.', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'Who is the knower of the field in all bodies?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'O scion of Bharata, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'What constitutes this field of activities?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects, desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions—all these are considered, in summary, to be the field of activities and its interactions.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'What is the process of gaining knowledge?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'Humility; pridelessness; nonviolence; tolerance; simplicity; approaching a bona fide spiritual master; cleanliness; steadiness; self-control; these I declare to be knowledge.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'And what is the object of knowledge?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'I shall now explain the knowable, knowing which you will taste the eternal. Brahman, the spirit, beginningless and subordinate to Me, lies beyond the cause and effect of this material world.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'How does the soul interact with material nature?', emotion: 'philosophical' },
                    { speaker: 'Krishna', text: 'Material nature and the living entities should be understood to be beginningless. Their transformations and the modes of matter are products of material nature. Nature is said to be the cause of all material causes and effects, whereas the living entity is the cause of the various sufferings and enjoyments in this world.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'So the soul experiences life due to its contact with nature?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'The living entity in material nature thus follows the ways of life, enjoying the three modes of nature. This is due to his association with that material nature. Thus he meets with good and evil among various species.', emotion: 'explanatory' },
                    { speaker: 'Arjuna', text: 'Is there a witness to all this?', emotion: 'speculative' },
                    { speaker: 'Krishna', text: 'Yet in this body there is another, a transcendental enjoyer, who is the Lord, the supreme proprietor, who exists as the overseer and permitter, and who is known as the Supersoul.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'How can one realize this truth?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'Some perceive the Supersoul within themselves through meditation, others through the cultivation of knowledge, and still others through working without fruitive desires.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'And what about those who are not so advanced?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'Again there are those who, although not conversant in spiritual knowledge, begin to worship the Supreme Person upon hearing about Him from others. Because of their tendency to hear from authorities, they also transcend the path of birth and death.', emotion: 'inclusive' },
                    { speaker: 'Arjuna', text: 'What is the vision of one who truly sees?', emotion: 'visionary' },
                    { speaker: 'Krishna', text: 'One who sees the Supersoul accompanying the individual soul in all bodies, and who understands that neither the soul nor the Supersoul within the destructible body is ever destroyed, actually sees.', emotion: 'enlightening' },
                    { speaker: 'Arjuna', text: 'So the soul itself does not act?', emotion: 'realizing' },
                    { speaker: 'Krishna', text: 'One who can see that all activities are performed by the body, which is created of material nature, and sees that the self does nothing, actually sees.', emotion: 'confirming' },
                    { speaker: 'Arjuna', text: 'This knowledge seems to be the key to freedom.', emotion: 'resolved' },
                    { speaker: 'Krishna', text: 'Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal.', emotion: 'conclusive' }
                ],
                summary: 'Krishna explains the distinction between matter and spirit, the field of activities and its knower, and how knowledge leads to liberation.',
                teachings: 'The body is the field of activities, and the soul is the knower. The Supersoul is present in every heart. By understanding this knowledge and serving the Divine, one transcends material conditioning.',
                moralLesson: 'We are not our bodies but eternal souls. Understanding this helps us treat everyone equally and not be too attached to temporary things.',
                kidsVersion: 'Krishna taught that we are not our body but the soul inside. Just like we are not our clothes, we are not our body. God lives in everyone\'s heart as a friend.'
            },
            
            
            14: {
                title: 'The Three Modes of Nature',
                subtitle: 'Gunatraya Vibhaga Yoga - Transcending the Gunas',
                description: 'A conversation about the three modes of material nature: goodness, passion, and ignorance.',
                dialogue: [
                    { speaker: 'Krishna', text: 'I shall again declare to you this supreme wisdom, the best of all knowledge, knowing which all the sages have attained to the supreme perfection.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'Please explain the three modes of material nature. How do they bind the living entity?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'Material nature consists of three modes—goodness, passion and ignorance. When the eternal living entity comes in contact with nature, O mighty-armed Arjuna, he becomes conditioned by these modes.', emotion: 'foundational' },
                    { speaker: 'Arjuna', text: 'What is the nature of the mode of goodness?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'O sinless one, the mode of goodness, being purer than the others, is illuminating, and it frees one from all sinful reactions. Those situated in that mode become conditioned by a sense of happiness and knowledge.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'And the mode of passion?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'The mode of passion is born of unlimited desires and longings, O son of Kunti, and because of this the embodied living entity is bound to material fruitive activities.', emotion: 'analytical' },
                    { speaker: 'Arjuna', text: 'What about the mode of ignorance?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'O son of Bharata, know that the mode of darkness, born of ignorance, is the delusion of all embodied living entities. The results of this mode are madness, indolence and sleep, which bind the conditioned soul.', emotion: 'warning' },
                    { speaker: 'Arjuna', text: 'How do these modes compete with each other?', emotion: 'observant' },
                    { speaker: 'Krishna', text: 'Sometimes the mode of goodness becomes prominent, defeating the modes of passion and ignorance. Sometimes the mode of passion defeats goodness and ignorance. And at other times ignorance defeats goodness and passion.', emotion: 'explanatory' },
                    { speaker: 'Arjuna', text: 'What happens to one who dies in each of these modes?', emotion: 'consequential' },
                    { speaker: 'Krishna', text: 'When one dies in the mode of goodness, he attains to the pure higher planets of the great sages. When one dies in the mode of passion, he takes birth among those engaged in fruitive activities; and when one dies in the mode of ignorance, he takes birth in the animal kingdom.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'How can one transcend these modes?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'When one is able to overcome these three modes of nature, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life.', emotion: 'liberating' },
                    { speaker: 'Arjuna', text: 'What are the characteristics of one who has transcended the modes?', emotion: 'discerning' },
                    { speaker: 'Krishna', text: 'He who does not hate illumination, attachment and delusion when they are present or long for them when they disappear; who is unwavering and undisturbed through all these reactions of the material qualities, remaining neutral and transcendental.', emotion: 'describing' },
                    { speaker: 'Arjuna', text: 'How does such a person behave?', emotion: 'behavioral' },
                    { speaker: 'Krishna', text: 'He who is situated in the self and regards alike happiness and distress; who looks upon a clod of earth, a stone and a piece of gold with an equal eye; who is equal toward the desirable and the undesirable; who is steady, situated equally well in praise and blame.', emotion: 'equanimous' },
                    { speaker: 'Arjuna', text: 'What is the means to achieve this transcendental state?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman.', emotion: 'conclusive' }
                ],
                summary: 'Krishna explains the three modes of material nature—goodness, passion, and ignorance—that influence all living beings. He describes how these modes bind the soul and how one can transcend them through devotional service.',
                teachings: 'The three modes of nature condition our existence. Goodness leads to happiness and knowledge, passion to intense activity and desire, and ignorance to delusion. By engaging in devotional service, we can rise above these modes and achieve spiritual realization.',
                moralLesson: 'Our actions and attitudes are influenced by the modes of nature. By striving for goodness and engaging in spiritual practices, we can overcome the lower modes and move towards a life of purpose and clarity.',
                kidsVersion: 'Imagine you have three types of glasses. One makes everything look happy and bright (goodness), one makes you want to run around and do a million things (passion), and one makes you feel sleepy and confused (ignorance). Krishna teaches us how to take off all these glasses and see things as they really are.'
            },
            
            
            15: {
                title: 'The Supreme Person',
                subtitle: 'Purushottama Yoga - The Yoga of the Supreme Person',
                description: 'Krishna describes the material world as an upside-down banyan tree and reveals His identity as the Supreme Person.',
                dialogue: [
                    { speaker: 'Krishna', text: 'It is said that there is an imperishable banyan tree that has its roots upward and its branches down and whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.', emotion: 'metaphorical' },
                    { speaker: 'Arjuna', text: 'An upside-down tree? What does this represent?', emotion: 'puzzled' },
                    { speaker: 'Krishna', text: 'This tree represents the material world. Its branches extend downwards and upwards, nourished by the three modes of material nature. Its roots, which are the fruitive actions of human society, are bound to this world.', emotion: 'explanatory' },
                    { speaker: 'Arjuna', text: 'How can one get free from this entanglement?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'The real form of this tree cannot be perceived in this world. One must cut down this firmly rooted tree with the weapon of detachment. Thereafter, one must seek a place from which, having gone, one never returns.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'What is the nature of the soul within this material world?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.', emotion: 'revealing' },
                    { speaker: 'Arjuna', text: 'How does the soul travel from one body to another?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'The living entity in the material world carries his different conceptions of life from one body to another as the air carries aromas. Thus he takes one kind of body and again quits it to take another.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'Why can most people not perceive this?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'The foolish cannot understand how a living entity can quit his body, nor can they understand what sort of body he enjoys under the spell of the modes of nature. But one whose eyes are trained in knowledge can see all this.', emotion: 'discerning' },
                    { speaker: 'Arjuna', text: 'From where does the light of the sun and moon come?', emotion: 'cosmic' },
                    { speaker: 'Krishna', text: 'The splendor of the sun, which illuminates the whole world, the splendor of the moon and the splendor of fire are all from Me.', emotion: 'source' },
                    { speaker: 'Arjuna', text: 'How do you sustain all life?', emotion: 'wondering' },
                    { speaker: 'Krishna', text: 'I enter into each planet, and by My energy they stay in orbit. I become the moon and thereby supply the juice of life to all vegetables. I am the fire of digestion in the bodies of all living entities.', emotion: 'sustaining' },
                    { speaker: 'Arjuna', text: 'Where do knowledge and forgetfulness come from?', emotion: 'philosophical' },
                    { speaker: 'Krishna', text: 'I am seated in everyone’s heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.', emotion: 'omniscient' },
                    { speaker: 'Arjuna', text: 'Who is the Supreme Person you speak of?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'There are two classes of beings, the fallible and the infallible. In the material world every living entity is fallible, and in the spiritual world every living entity is called infallible. Besides these two, there is the greatest living personality, the Supreme Soul, the imperishable Lord Himself.', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'And that Supreme Person is you?', emotion: 'realizing' },
                    { speaker: 'Krishna', text: 'Because I am transcendental, beyond both the fallible and the infallible, and because I am the greatest, I am celebrated both in the world and in the Vedas as that Supreme Person.', emotion: 'conclusive' }
                ],
                summary: 'Krishna uses the metaphor of an upside-down banyan tree to describe the material world and explains that He is the Supreme Person, Purushottama, who is beyond the fallible and infallible.',
                teachings: 'The material world is a temporary and illusory reality. By cultivating detachment and surrendering to the Supreme Person, one can attain liberation. Krishna is the ultimate reality, the source and sustainer of everything.',
                moralLesson: 'We should not get too attached to the things of this world, as they are temporary. By focusing on our spiritual growth and connection to the Supreme, we can find true and lasting happiness.',
                kidsVersion: 'Krishna says the world is like a giant, upside-down tree. We can get tangled in its branches, but if we have a map (spiritual knowledge) and a sharp axe (detachment), we can find our way out and back to the real world of light and happiness with Him.'
            },
            
            
            16: {
                title: 'Divine and Demonic Natures',
                subtitle: 'Daivasura Sampad Vibhaga Yoga - The Two Paths',
                description: 'Krishna describes divine and demonic qualities and their consequences',
                dialogue: [
                    { speaker: 'Krishna', text: 'Fearlessness, purification of one\'s existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice—these transcendental qualities belong to godly men endowed with divine nature.', emotion: 'listing_virtues' },
                    { speaker: 'Arjuna', text: 'What are the other divine qualities?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'Nonviolence, truthfulness, freedom from anger, renunciation, tranquility, aversion to faultfinding, compassion for all living entities, freedom from covetousness, gentleness, modesty, steady determination.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'And what are the demonic qualities, O Krishna?', emotion: 'contrasting' },
                    { speaker: 'Krishna', text: 'Pride, arrogance, conceit, anger, harshness and ignorance—these qualities belong to those of demonic nature.', emotion: 'warning' },
                    { speaker: 'Arjuna', text: 'What do these two natures lead to?', emotion: 'consequential' },
                    { speaker: 'Krishna', text: 'The transcendental qualities are conducive to liberation, whereas the demonic qualities make for bondage. Do not worry, O son of Pandu, for you are born with the divine qualities.', emotion: 'reassuring' },
                    { speaker: 'Arjuna', text: 'How do those of demonic nature view the world?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'They say that this world is unreal, with no foundation, no God in control. They say it is produced of sex desire and has no cause other than lust.', emotion: 'explanatory' },
                    { speaker: 'Arjuna', text: 'What is their approach to life?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'They believe that to gratify the senses is the prime necessity of human civilization. Thus until the end of life their anxiety is immeasurable. Bound by a network of hundreds of thousands of desires and absorbed in lust and anger, they secure money by illegal means for sense gratification.', emotion: 'critical' },
                    { speaker: 'Arjuna', text: 'This sounds like a miserable existence.', emotion: 'observant' },
                    { speaker: 'Krishna', text: 'Bewildered by all these anxieties and bound by a network of illusions, they become too strongly attached to sense enjoyment and fall down into hell.', emotion: 'confirming' },
                    { speaker: 'Arjuna', text: 'Do such people ever attain You?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'Those who are envious and mischievous, who are the lowest among men, I perpetually cast into the ocean of material existence, into various demonic species of life.', emotion: 'just' },
                    { speaker: 'Arjuna', text: 'What are the gateways to this hellish life?', emotion: 'cautious' },
                    { speaker: 'Krishna', text: 'There are three gates leading to this hell—lust, anger, and greed. Every sane man should give these up, for they lead to the degradation of the soul.', emotion: 'warning_seriously' },
                    { speaker: 'Arjuna', text: 'And one who avoids these three gates?', emotion: 'hopeful' },
                    { speaker: 'Krishna', text: 'The man who has escaped these three gates of hell, O son of Kunti, performs acts conducive to self-realization and thus gradually attains the supreme destination.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'How should one know what to do and what not to do?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'He who discards scriptural injunctions and acts according to his own whims attains neither perfection, nor happiness, nor the supreme destination. One should therefore understand what is duty and what is not duty by the regulations of the scriptures.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'So the scriptures must be my guide in all actions?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Yes, knowing the scriptural rules, you should act so that you may gradually be elevated.', emotion: 'conclusive' },
                    { speaker: 'Arjuna', text: 'Your words have given me clarity on the path of righteousness.', emotion: 'enlightened' },
                    { speaker: 'Krishna', text: 'Follow the path of the divine, Arjuna, for it leads to me. Shun the demonic, for it leads only to bondage and suffering.', emotion: 'blessing' }
                ],
                summary: 'Krishna describes divine and demonic qualities, their consequences, and emphasizes following scriptural guidance for spiritual development.',
                teachings: 'Divine qualities like fearlessness, purity, and honesty lead to liberation. Demonic qualities like pride, anger, and greed lead to bondage. Scriptures provide guidance for proper conduct.',
                moralLesson: 'We should develop good qualities like kindness, honesty, and self-control, and avoid bad qualities like anger, greed, and pride.',
                kidsVersion: 'Krishna taught about good and bad qualities. Good people are kind, honest, and helpful. Bad people are angry, greedy, and mean. We should always try to be good.'
            },
            
            
            17: {
                title: 'The Divisions of Faith',
                subtitle: 'Shraddha Traya Vibhaga Yoga - The Three Types of Faith',
                description: 'An exploration of the three types of faith—goodness, passion, and ignorance—and how they manifest in worship, food, and charity.',
                dialogue: [
                    { speaker: 'Arjuna', text: 'O Krishna, what is the situation of those who do not follow the principles of scripture but worship according to their own imagination? Are they in goodness, in passion or in ignorance?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'According to the modes of nature acquired by the embodied soul, one’s faith can be of three kinds—in goodness, in passion or in ignorance. Now hear about this.', emotion: 'categorizing' },
                    { speaker: 'Arjuna', text: 'How does faith determine one\'s character?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'O son of Bharata, according to one’s existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired.', emotion: 'explanatory' },
                    { speaker: 'Arjuna', text: 'How do these different types of faith manifest in worship?', emotion: 'inquiring' },
                    { speaker: 'Krishna', text: 'Men in the mode of goodness worship the demigods; those in the mode of passion worship the demons; and those in the mode of ignorance worship ghosts and spirits.', emotion: 'differentiating' },
                    { speaker: 'Arjuna', text: 'And how does this apply to the food we eat?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'Foods dear to those in the mode of goodness increase the duration of life, purify one’s existence and give strength, health, happiness and satisfaction. Such foods are juicy, fatty, wholesome, and pleasing to the heart.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'What about foods in passion and ignorance?', emotion: 'contrasting' },
                    { speaker: 'Krishna', text: 'Foods that are too bitter, too sour, salty, hot, pungent, dry and burning are dear to those in the mode of passion. Such foods cause distress, misery and disease. Food prepared more than three hours before being eaten, food that is tasteless, decomposed and putrid, and food consisting of remnants and untouchable things is dear to those in the mode of darkness.', emotion: 'warning' },
                    { speaker: 'Arjuna', text: 'How do the modes affect sacrifice?', emotion: 'analytical' },
                    { speaker: 'Krishna', text: 'Sacrifice performed according to the directions of scripture, as a matter of duty, by those who desire no reward, is of the nature of goodness.', emotion: 'evaluating' },
                    { speaker: 'Arjuna', text: 'And austerity?', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'Austerity of the body consists in worship of the Supreme Lord, the brahmanas, the spiritual master, and superiors like the father and mother, and in cleanliness, simplicity, celibacy and nonviolence.', emotion: 'instructive' },
                    { speaker: 'Arjuna', text: 'What about charity in the different modes?', emotion: 'discerning' },
                    { speaker: 'Krishna', text: 'Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person is considered to be in the mode of goodness.', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'What is the significance of "Om Tat Sat"?', emotion: 'sacred' },
                    { speaker: 'Krishna', text: 'From the beginning of creation, the three words om, tat and sat were used to indicate the Supreme Absolute Truth. Therefore, acts of sacrifice, charity and penance, performed with faith, are always begun with "Om" to attain the Supreme.', emotion: 'profound' },
                    { speaker: 'Arjuna', text: 'What if these acts are performed without faith?', emotion: 'concerned' },
                    { speaker: 'Krishna', text: 'Anything done as sacrifice, charity or penance without faith in the Supreme is impermanent. It is called "asat" and is useless both in this life and the next.', emotion: 'definitive' },
                    { speaker: 'Arjuna', text: 'So faith is the most essential ingredient?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'Yes, Arjuna. Faith, when situated in the mode of goodness and guided by scripture, elevates one to the highest perfection.', emotion: 'conclusive' }
                ],
                summary: 'Krishna explains that faith can be in one of three modes: goodness, passion, or ignorance. This influences one’s worship, food, austerities, and charity. He emphasizes that any spiritual practice performed without faith is ultimately useless.',
                teachings: 'Align your faith with the mode of goodness by choosing wholesome food, worshiping respectably, and giving charity without expectation. The phrase “Om Tat Sat” signifies the Absolute Truth. Faith is the essential ingredient in all spiritual practices.',
                moralLesson: 'The quality of your faith determines the quality of your life. Strive to act in goodness, with pure intentions and without selfish desires. This will lead to spiritual growth and happiness.',
                kidsVersion: 'Imagine you have three types of glasses: clear, red, and gray. When you wear the clear glasses (goodness), you see everything nicely. When you wear the red glasses (passion), everything looks fiery and you want more. When you wear the gray glasses (ignorance), everything is dark and confusing. Krishna teaches us to always use the clear glasses by believing in good things, eating healthy food, and being kind to others.'
            },
            
            
            18: {
                title: 'The Perfection of Renunciation',
                subtitle: 'Moksha Sannyasa Yoga - Liberation Through Surrender',
                description: 'Krishna provides his ultimate teachings on renunciation, selfless action, and the path to liberation through complete surrender.',
                dialogue: [
                    { speaker: 'Arjuna', text: 'O mighty-armed one, I wish to understand the purpose of renunciation [tyaga] and of the renounced order of life [sannyasa].', emotion: 'seeking' },
                    { speaker: 'Krishna', text: 'The giving up of activities that are based on material desire is what great learned men call the renounced order of life [sannyasa]. And giving up the results of all activities is what the wise call renunciation [tyaga].', emotion: 'defining' },
                    { speaker: 'Arjuna', text: 'Should all acts be given up?', emotion: 'questioning' },
                    { speaker: 'Krishna', text: 'Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.', emotion: 'clarifying' },
                    { speaker: 'Arjuna', text: 'What are the five causes for the accomplishment of all action?', emotion: 'inquisitive' },
                    { speaker: 'Krishna', text: 'The place of action [the body], the performer, the various senses, the many different kinds of endeavor, and ultimately the Supersoul—these are the five factors of action.', emotion: 'analytical' },
                    { speaker: 'Arjuna', text: 'How do the modes of nature relate to different types of work?', emotion: 'curious' },
                    { speaker: 'Krishna', text: 'The work of a brahmana, kshatriya, vaishya, and shudra are different, as are the qualities of their work, O chastiser of the enemy.', emotion: 'descriptive' },
                    { speaker: 'Arjuna', text: 'How can one achieve perfection by performing their own work?', emotion: 'practical' },
                    { speaker: 'Krishna', text: 'By following his qualities of work, every man can become perfect. By worship of the Lord, who is the source of all beings and who is all-pervading, a man can attain perfection through performing his own work.', emotion: 'guiding' },
                    { speaker: 'Arjuna', text: 'So it is better to do my own duty, even if imperfectly?', emotion: 'understanding' },
                    { speaker: 'Krishna', text: 'It is better to engage in one’s own occupation, even though one may perform it imperfectly, than to accept another’s occupation and perform it perfectly. Duties prescribed according to one’s nature are never affected by sinful reactions.', emotion: 'confirming' },
                    { speaker: 'Arjuna', text: 'How does one who has achieved this perfection act?', emotion: 'observant' },
                    { speaker: 'Krishna', text: 'One who is self-controlled and unattached and who disregards all material enjoyments can obtain, by practice of renunciation, the highest perfect stage of freedom from reaction.', emotion: 'describing' },
                    { speaker: 'Arjuna', text: 'What is the most confidential of all knowledge?', emotion: 'eager' },
                    { speaker: 'Krishna', text: 'Because you are My very dear friend, I am speaking to you My supreme instruction, the most confidential knowledge of all. Hear this from Me, for it is for your benefit.', emotion: 'loving' },
                    { speaker: 'Arjuna', text: 'I am ready to hear, Krishna.', emotion: 'attentive' },
                    { speaker: 'Krishna', text: 'Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend.', emotion: 'promising' },
                    { speaker: 'Arjuna', text: 'And the ultimate instruction?', emotion: 'anticipating' },
                    { speaker: 'Krishna', text: 'Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.', emotion: 'ultimate' },
                    { speaker: 'Arjuna', text: 'My dear Krishna, O infallible one, my illusion is now gone. I have regained my memory by Your mercy. I am now firm and free from doubt and am prepared to act according to Your instructions.', emotion: 'resolved' }
                ],
                summary: 'In this final chapter, Krishna teaches that true renunciation is performing one’s duties without attachment to the results. The ultimate path to liberation is to surrender completely to God, who promises to free His devotees from all sins and fears.',
                teachings: 'Perform your duties without attachment. The highest spiritual practice is to think of God always, become His devotee, and surrender to Him. This path leads to ultimate freedom and peace.',
                moralLesson: 'The greatest act of courage and wisdom is to trust in a higher power and surrender your life to it. When you let go of control, you find true freedom and purpose.',
                kidsVersion: 'Imagine you are on a big ship, and the captain is God. The best thing to do is to trust the captain and follow his instructions. Krishna told Arjuna to trust Him completely, and He would take care of everything. When we trust God, we don’t have to worry about anything.'
            },
        }
    },

    // Hindi translations
    hi: {
        ui: {
            dialogueTitle: 'पवित्र संवाद',
            krishnaName: 'भगवान कृष्ण',
            arjunaName: 'अर्जुन',
            askQuestionBtn: 'प्रश्न पूछें',
            answerBtn: 'दिव्य उत्तर',
            summaryTitle: 'अध्याय सार',
            teachingsTitle: 'मुख्य शिक्षाएं',
            progressText: 'अपनी यात्रा शुरू करने के लिए एक अध्याय चुनें!',
            welcomeMessage: {
                title: '🙏 पवित्र संवाद में आपका स्वागत है 🙏',
                subtitle: 'कृष्ण और अर्जुन के बीच दिव्य वार्तालाप शुरू करने के लिए ऊपर से एक अध्याय चुनें'
            }
        },
        chapters: {
            1: {
                title: 'अर्जुन विषाद योग',
                subtitle: 'सेनाओं का निरीक्षण',
                description: 'पहला अध्याय जहाँ अर्जुन, कुरुक्षेत्र के युद्ध के मैदान में खड़ा है, विरोधी सेना में अपने रिश्तेदारों और शिक्षकों को देखकर निराशा से भर जाता है, जो उसके नैतिक संकट का कारण बनता है।',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, कृपया मेरा रथ दोनों सेनाओं के बीच में ले चलिए ताकि मैं उन लोगों को देख सकूँ जो यहाँ युद्ध के लिए उत्सुक खड़े हैं।', emotion: 'दृढ़' },
                    { speaker: 'कृष्ण', text: 'देखो, हे पार्थ, यहाँ एकत्रित सभी कुरुओं को।', emotion: 'शांत' },
                    { speaker: 'अर्जुन', text: 'मैं अपने ही परिजनों, गुरुओं, चाचाओं और भाइयों को देख रहा हूँ। मेरे अंग शिथिल हो रहे हैं, मेरा मुँह सूख रहा है, मेरा शरीर कांप रहा है।', emotion: 'विषादग्रस्त' },
                    { speaker: 'कृष्ण', text: 'उन्हें देखो, अर्जुन, क्योंकि तुम्हें यह समझना होगा कि तुम किसका सामना कर रहे हो।', emotion: 'अवलोकनशील' },
                    { speaker: 'अर्जुन', text: 'हे कृष्ण! मैं विजय, राज्य या सुख नहीं चाहता! राज्य का, या जीवन का भी क्या उपयोग है, जब वे लोग जिनके लिए हम यह सब चाहते हैं, वे ही यहाँ युद्ध के लिए एकत्रित हुए हैं?', emotion: 'व्यथित' },
                    { speaker: 'कृष्ण', text: 'हृदय की यह दुर्बलता तुम जैसे श्रेष्ठ योद्धा के लिए अशोभनीय है, अर्जुन।', emotion: 'झिड़कते हुए' },
                    { speaker: 'अर्जुन', text: 'मैं भीष्म और द्रोण के विरुद्ध कैसे लड़ सकता हूँ, जो मेरी पूजा के योग्य हैं? इन महान आत्माओं का वध करने से तो भीख मांगकर जीना बेहतर है।', emotion: 'संघर्षरत' },
                    { speaker: 'होस्ट', text: '(चुपचाप सुनते हुए, अर्जुन को अपनी उथल-पुथल व्यक्त करने दे रहे हैं)', emotion: 'धैर्यवान' },
                    { speaker: 'अर्जुन', text: 'यदि हम अपने ही परिजनों का वध करेंगे, तो हम पर पाप चढ़ेगा। कुल के नाश से सनातन कुल-धर्म नष्ट हो जाएंगे, और अधर्म फैल जाएगा।', emotion: 'भयभीत' },
                    { speaker: 'कृष्ण', text: '(उनकी अभिव्यक्ति शांत बनी हुई है, अर्जुन के दुःख के तूफान में एक मूक लंगर)', emotion: 'स्थिर' },
                    { speaker: 'अर्जुन', text: 'जब अधर्म प्रमुख हो जाता है, तो कुल की स्त्रियाँ दूषित हो जाती हैं, और इससे अवांछित संतानें उत्पन्न होती हैं, जो कुल और उसके नाश करने वालों को नरक की ओर ले जाती हैं।', emotion: 'व्याकुल' },
                    { speaker: 'कृष्ण', text: 'तत्काल परिणामों से परे सोचो, अर्जुन। धर्म के शाश्वत नियम पर विचार करो।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'हाय, यह कितनी अजीब बात है कि हम राजकीय सुख की इच्छा से प्रेरित होकर एक बड़ा पाप करने की तैयारी कर रहे हैं।', emotion: 'विलाप करते हुए' },
                    { speaker: 'होस्ट', text: '(एक करुणामयी दृष्टि, अर्जुन के दुःख की गहराई को समझते हुए)', emotion: 'करुणामय' },
                    { speaker: 'अर्जुन', text: 'मेरे लिए यह बेहतर होगा यदि धृतराष्ट्र के पुत्र, हाथों में हथियार लिए, मुझे युद्ध के मैदान में निहत्थे और अप्रतिरोधी का वध कर दें।', emotion: 'समर्पित' },
                    { speaker: 'कृष्ण', text: 'तुम्हारा दुःख तुम्हारे विवेक पर पर्दा डाल रहा है। यह एक योद्धा का मार्ग नहीं है।', emotion: 'दृढ़' },
                    { speaker: 'अर्जुन', text: 'मुझे युद्ध में अपने ही परिजनों का वध करने में कोई भलाई नहीं दिखती। मैं युद्ध नहीं करूँगा।', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'स्पष्टता आएगी। पहले, तुम्हें अपने भ्रम की गहराई को देखना होगा।', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: '(अपना धनुष-बाण एक ओर रखकर, अर्जुन रथ के आसन पर बैठ जाता है, उसका मन दुःख से अभिभूत है)', emotion: 'अभिभूत' },
                    { speaker: 'कृष्ण', text: 'हृदय की इस तुच्छ दुर्बलता को त्याग कर उठो, हे शत्रुओं के विजेता!', emotion: 'आदेशात्मक' }
                ],
                summary: 'अर्जुन अपने रिश्तेदारों और गुरुओं को युद्ध के लिए तैयार देखकर नैतिक भ्रम में पड़ जाता है।',
                teachings: 'कृष्ण धर्म की अवधारणा और आत्मा की अमरता का परिचय देते हैं।',
                moralLesson: 'कभी-कभी जीवन में कठिन निर्णय लेने पड़ते हैं। भ्रम में पड़ने पर हमें बुद्धिमान गुरुओं से मार्गदर्शन लेना चाहिए।',
                kidsVersion: 'अर्जुन को अपने परिवार को युद्ध में देखकर दुख हुआ। कृष्ण ने कहा कि कभी-कभी सही काम करना कठिन होता है।'
            },
            2: {
                title: 'सांख्य योग',
                subtitle: 'ज्ञान का योग',
                description: 'अर्जुन का समर्पण और कृष्ण द्वारा अमर आत्मा पर उपदेश',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'इस संकट की घड़ी में यह निराशा तुम्हारे मन में क्यों आई? यह एक श्रेष्ठ व्यक्ति के लिए उचित नहीं है। यह स्वर्ग की ओर नहीं, बल्कि अपयश की ओर ले जाती है।', emotion: 'झिड़कते हुए' },
                    { speaker: 'अर्जुन', text: 'परन्तु मैं युद्ध में भीष्म और द्रोण पर बाणों से कैसे प्रहार कर सकता हूँ? वे तो मेरी पूजा के योग्य हैं!', emotion: 'संघर्षरत' },
                    { speaker: 'कृष्ण', text: 'तुम उनके लिए शोक कर रहे हो जो शोक के योग्य नहीं हैं, फिर भी ज्ञान की बातें कर रहे हो। ज्ञानी न तो जीवितों के लिए शोक करते हैं और न ही मृतकों के लिए।', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: 'मैं अपने कर्तव्य के बारे में भ्रमित हूँ। मैं आपके शिष्य के रूप में आत्मसमर्पण करता हूँ। कृपया मुझे बताएं कि मेरे लिए सबसे अच्छा क्या है।', emotion: 'समर्पित' },
                    { speaker: 'कृष्ण', text: 'ऐसा कोई समय नहीं था जब मैं नहीं था, न तुम, न ये सभी राजा; और न ही भविष्य में हममें से कोई भी अस्तित्व में नहीं रहेगा।', emotion: 'प्रबुद्ध' },
                    { speaker: 'अर्जुन', text: 'यह कैसे संभव है? शरीर जन्म लेते हैं और मर जाते हैं।', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'जैसे देहधारी आत्मा इस शरीर में बाल्यावस्था से युवावस्था और वृद्धावस्था में निरंतर गुजरती है, वैसे ही मृत्यु पर आत्मा दूसरे शरीर में चली जाती है। एक धीर व्यक्ति ऐसे परिवर्तन से मोहित नहीं होता।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'लेकिन सुख और दुःख की भावनाएँ बहुत वास्तविक हैं, कृष्ण।', emotion: 'दुखी' },
                    { speaker: 'कृष्ण', text: 'ये अस्थायी अभिव्यक्तियाँ हैं, जो इन्द्रिय बोध से उत्पन्न होती हैं। व्यक्ति को विचलित हुए बिना उन्हें सहन करना सीखना चाहिए।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'तो, आत्मा को कभी कोई हानि नहीं होती?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'आत्मा न कभी जन्म लेती है और न कभी मरती है। यह अजन्मा, शाश्वत, सदा-विद्यमान और सनातन है। शरीर के मारे जाने पर यह मारी नहीं जाती।', emotion: 'आश्वस्त' },
                    { speaker: 'अर्जुन', text: 'क्या आप इसे और समझा सकते हैं? मैं इस सत्य को कैसे समझ सकता हूँ?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'जैसे कोई व्यक्ति पुराने वस्त्रों को त्यागकर नए वस्त्र धारण करता है, उसी प्रकार आत्मा पुराने और अनुपयोगी शरीरों को त्यागकर नए भौतिक शरीर धारण करती है।', emotion: 'दृष्टांतात्मक' },
                    { speaker: 'अर्जुन', text: 'यदि आत्मा शाश्वत है, तो मुझे क्यों लड़ना चाहिए? इस कर्म का उद्देश्य क्या है?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'एक क्षत्रिय के रूप में अपने विशिष्ट कर्तव्य को ध्यान में रखते हुए, तुम्हें जानना चाहिए कि धार्मिक सिद्धांतों पर लड़ने से बेहतर कोई कार्य नहीं है। यदि तुम लड़ने का अपना धार्मिक कर्तव्य नहीं निभाते हो, तो तुम निश्चित रूप से अपने कर्तव्यों की उपेक्षा करने के पाप में पड़ोगे और इस प्रकार एक योद्धा के रूप में अपनी प्रतिष्ठा खो दोगे।', emotion: 'आदेशात्मक' },
                    { speaker: 'अर्जुन', text: 'लेकिन परिणाम के बारे में क्या? हत्या का पाप?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'तुम्हें अपने निर्धारित कर्तव्य का पालन करने का अधिकार है, लेकिन तुम कर्म के फलों के हकदार नहीं हो। अपने आपको अपनी गतिविधियों के परिणामों का कारण कभी मत समझो, और न ही अपने कर्तव्य को न करने में आसक्त हो।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'उस व्यक्ति की प्रकृति क्या है जिसकी चेतना इस प्रकार पारलौकिकता में विलीन हो जाती है? वह कैसे बोलता है, और उसकी भाषा क्या है? वह कैसे बैठता है, और कैसे चलता है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'वह वह है जिसने इन्द्रिय सुख की सभी इच्छाओं को त्याग दिया है, जो आसक्ति, भय और क्रोध से मुक्त है। उसका मन स्थिर है और त्रिविध दुखों से विचलित नहीं होता।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'यह अवस्था बहुत शांतिपूर्ण लगती है। शक्तिशाली इंद्रियों को कैसे नियंत्रित किया जा सकता है?', emotion: 'प्रेरित' },
                    { speaker: 'कृष्ण', text: 'जो अपनी इंद्रियों को संयमित रखता है, उन्हें पूर्ण नियंत्रण में रखता है, और अपनी चेतना को मुझ पर स्थिर करता है, उसे स्थिर बुद्धि वाला व्यक्ति कहा जाता है।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण आत्मा की अमरता और निष्काम कर्म की शिक्षा देते हैं।',
                teachings: 'आत्मा अमर है। निष्काम कर्म करना ही सच्चा ज्ञान है।',
                moralLesson: 'हम केवल शरीर नहीं बल्कि अमर आत्मा हैं।',
                kidsVersion: 'कृष्ण ने सिखाया कि हमारी आत्मा कभी नहीं मरती, जैसे हम पुराने कपड़े बदलते हैं।'
            },
            3: {
                title: 'कर्म योग',
                subtitle: 'निःस्वार्थ सेवा',
                description: 'कृष्ण निःस्वार्थ कर्म और इच्छा पर नियंत्रण के बारे में सिखाते हैं',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, यदि आप मानते हैं कि बुद्धि फलदायी कर्म से बेहतर है, तो आप मुझे इस भयंकर युद्ध में क्यों धकेल रहे हैं?', emotion: 'भ्रमित' },
                    { speaker: 'कृष्ण', text: 'मैंने पहले ही दो मार्ग बताए हैं, अर्जुन: चिंतनशील के लिए ज्ञान का मार्ग, और सक्रिय के लिए कर्म का मार्ग।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'आपके शब्द विरोधाभासी लगते हैं। मैं भ्रमित हूँ। कृपया मुझे निश्चित रूप से बताएं कि कौन सा मार्ग अधिक लाभकारी है।', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'केवल कर्म से विरत रहने से कोई प्रतिक्रिया से मुक्ति प्राप्त नहीं कर सकता, न ही केवल त्याग से कोई पूर्णता प्राप्त कर सकता है।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'क्या पूरी तरह से निष्क्रिय रहना भी संभव है?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'प्रत्येक व्यक्ति भौतिक प्रकृति के गुणों के अनुसार असहाय रूप से कार्य करने के लिए मजबूर है; इसलिए कोई भी एक क्षण के लिए भी कुछ करने से বিরত नहीं रह सकता।', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: 'तो, व्यक्ति को कार्य करना ही होगा। लेकिन उलझन से बचने के लिए व्यक्ति को कैसे कार्य करना चाहिए?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'अपना कार्य परमात्मा के लिए यज्ञ के रूप में करो। अन्यथा, कर्म इस भौतिक संसार में बंधन का कारण बनता है। इसलिए, अपने निर्धारित कर्तव्यों को उसकी संतुष्टि के लिए करो, और इस तरह तुम हमेशा बंधन से मुक्त रहोगे।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'आप जिस यज्ञ चक्र की बात करते हैं, वह क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'सभी जीवित शरीर अन्न पर निर्भर हैं, जो वर्षा से उत्पन्न होते हैं। वर्षा यज्ञ के अनुष्ठान से उत्पन्न होती है, और यज्ञ निर्धारित कर्तव्यों से उत्पन्न होता है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'क्या ज्ञानियों को भी कार्य करना पड़ता है? मैंने सोचा था कि वे सभी कर्तव्यों से परे हैं।', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'एक आत्म-साक्षात्कारी व्यक्ति भी, जिसका कोई व्यक्तिगत लाभ प्राप्त करने का नहीं होता, दुनिया के लिए एक उदाहरण स्थापित करने और सामाजिक व्यवस्था बनाए रखने के लिए अपने कर्तव्यों का पालन करता रहता है।', emotion: 'उदाहरणात्मक' },
                    { speaker: 'अर्जुन', text: 'यह समझ में आता है। लेकिन वह क्या है जो व्यक्ति को अनिच्छा से भी पापी कार्यों के लिए प्रेरित करता है, जैसे कि बल द्वारा लगाया गया हो?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'यह केवल काम है, अर्जुन, जो भौतिक रजोगुण के संपर्क से पैदा होता है और बाद में क्रोध में बदल जाता है, और जो इस दुनिया का सर्व-भक्षी पापी शत्रु है।', emotion: 'चेतावनी' },
                    { speaker: 'अर्जुन', text: 'यह शत्रु कहाँ रहता है? हम इसे कैसे जीत सकते हैं?', emotion: 'दृढ़' },
                    { speaker: 'कृष्ण', text: 'इंद्रियाँ, मन और बुद्धि इसके बैठने के स्थान हैं। पहले इंद्रियों को नियंत्रित करके, तुम इस पाप के महान प्रतीक को रोक सकते हो।', emotion: 'रणनीतिक' },
                    { speaker: 'अर्जुन', text: 'तो, मुझे अपनी इंद्रियों और फिर अपने मन को नियंत्रित करना होगा?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'हाँ। इंद्रियाँ जड़ पदार्थ से श्रेष्ठ हैं; मन इंद्रियों से ऊँचा है; बुद्धि मन से भी ऊँची है; और वह [आत्मा] बुद्धि से भी ऊँचा है।', emotion: 'पदानुक्रमित' },
                    { speaker: 'अर्जुन', text: 'मैं समझ गया। मुझे अपने मन और इंद्रियों को नियंत्रित करने के लिए अपनी बुद्धि का उपयोग करना चाहिए।', emotion: 'प्रबुद्ध' },
                    { speaker: 'कृष्ण', text: 'इस प्रकार अपने आपको भौतिक इंद्रियों, मन और बुद्धि से पार जानकर, हे महाबाहु अर्जुन, व्यक्ति को सचेत आध्यात्मिक बुद्धि से मन को स्थिर करना चाहिए और इस प्रकार - आध्यात्मिक शक्ति से - काम के रूप में जाने जाने वाले इस अतृप्त शत्रु को जीतना चाहिए।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण कर्म योग की विस्तृत व्याख्या करते हैं।',
                teachings: 'निःस्वार्थ कर्म मन को शुद्ध करता है।',
                moralLesson: 'बिना फल की इच्छा के अच्छे काम करने चाहिए।',
                kidsVersion: 'कृष्ण ने कहा कि बिना लालच के अच्छे काम करने से मन खुश रहता है।'
            },
            4: {
                title: 'ज्ञान कर्म संन्यास योग',
                subtitle: 'दिव्य ज्ञान',
                description: 'कृष्ण अपनी दिव्य प्रकृति और प्राचीन ज्ञान परंपरा का खुलासा करते हैं',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'मैंने इस अविनाशी योग विज्ञान का उपदेश सूर्य-देव विवस्वान को दिया, और विवस्वान ने इसे मनु को सिखाया, और मनु ने इसे इक्ष्वाकु को सिखाया।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'सूर्य-देव विवस्वान जन्म से आपसे बड़े हैं। मैं यह कैसे समझूँ कि आपने आरंभ में उन्हें यह विज्ञान सिखाया?', emotion: 'उलझन में' },
                    { speaker: 'कृष्ण', text: 'तुम और मैं दोनों ने कई-कई जन्म लिए हैं। मुझे वे सब याद हैं, लेकिन तुम्हें नहीं, हे शत्रु-विजेता!', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: 'हे प्रभु, आप इस संसार में क्यों प्रकट होते हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'साधुओं का उद्धार करने, दुष्टों का विनाश करने और धर्म के सिद्धांतों को फिर से स्थापित करने के लिए, मैं हर युग में स्वयं प्रकट होता हूँ।', emotion: 'आधिकारिक' },
                    { speaker: 'अर्जुन', text: 'आपके प्राकट्य का सत्य जानने से किसी को कैसे मदद मिलती है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'जो मेरे प्राकट्य और कर्मों की दिव्य प्रकृति को जानता है, वह शरीर छोड़ने पर इस भौतिक संसार में फिर से जन्म नहीं लेता, बल्कि मेरे शाश्वत धाम को प्राप्त करता है, हे अर्जुन।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'लोग आपकी अलग-अलग तरीकों से पूजा करते हैं। आप उन्हें कैसे प्रतिसाद देते हैं?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'जैसे सभी मेरे प्रति समर्पण करते हैं, मैं उन्हें उसी के अनुसार पुरस्कृत करता हूँ। हे पृथापुत्र, सभी हर तरह से मेरे मार्ग का अनुसरण करते हैं।', emotion: 'सर्व-व्यापी' },
                    { speaker: 'अर्जुन', text: 'आपने समाज के चार वर्ण बनाए। क्या यह जन्म पर आधारित है?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'मानव समाज के चार वर्ण मेरे द्वारा भौतिक प्रकृति के तीन गुणों और उनसे जुड़े कार्यों के अनुसार बनाए गए थे। यद्यपि मैं इस प्रणाली का निर्माता हूँ, तुम्हें जानना चाहिए कि मैं फिर भी अकर्ता हूँ, अपरिवर्तनीय हूँ।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'कर्म में उलझे बिना कोई कैसे कर्म कर सकता है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'जो कर्म में अकर्म और अकर्म में कर्म देखता है, वह मनुष्यों में बुद्धिमान है, और वह सभी प्रकार के कार्यों में लगे रहने पर भी दिव्य स्थिति में है।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'तो, सच्चा कर्म वह है जो उसके फलों की आसक्ति के बिना किया जाता है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'हाँ। अपने कर्मों के फलों की सभी आसक्ति को त्यागकर, सदा संतुष्ट और स्वतंत्र रहकर, वह सभी प्रकार के उपक्रमों में लगे रहने पर भी कोई फलदायी कर्म नहीं करता।', emotion: 'प्रबुद्ध' },
                    { speaker: 'अर्जुन', text: 'यह दिव्य ज्ञान कैसे प्राप्त होता है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'एक आध्यात्मिक गुरु के पास जाकर सत्य जानने का प्रयास करो। उनसे विनम्रतापूर्वक पूछो और उनकी सेवा करो। आत्म-साक्षात्कारी आत्माएं तुम्हें ज्ञान प्रदान कर सकती हैं क्योंकि उन्होंने सत्य को देखा है।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'इस ज्ञान की शक्ति क्या है?', emotion: 'चकित' },
                    { speaker: 'कृष्ण', text: 'जैसे धधकती आग लकड़ी को राख कर देती है, हे अर्जुन, वैसे ही ज्ञान की अग्नि भौतिक गतिविधियों की सभी प्रतिक्रियाओं को भस्म कर देती है।', emotion: 'शक्तिशाली' },
                    { speaker: 'अर्जुन', text: 'तो, मुझे इस ज्ञान से अपने संदेहों को काटना होगा?', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'इसलिए अज्ञानता से तुम्हारे हृदय में उत्पन्न हुए संदेहों को ज्ञान के हथियार से काट देना चाहिए। योग से सुसज्जित होकर, हे भरत, उठो और लड़ो।', emotion: 'आदेशात्मक' }
                ],
                summary: 'कृष्ण धर्म की पुनर्स्थापना के लिए अपने दिव्य अवतारों का रहस्य बताते हैं और ज्ञान की अग्नि से कर्म के बंधनों को काटने का मार्ग दिखाते हैं।',
                teachings: 'सच्चा ज्ञान आध्यात्मिक गुरु की सेवा और विनम्र पूछताछ से प्राप्त होता है। ज्ञान सभी कर्म फलों को भस्म कर देता है।',
                moralLesson: 'वास्तविक ज्ञान की खोज जीवन का सर्वोच्च लक्ष्य है। विनम्रता और सेवा भाव से ही इसे प्राप्त किया जा सकता है।',
                kidsVersion: 'कृष्ण ने बताया कि वह एक सुपरहीरो की तरह हैं जो धर्म की रक्षा के लिए आते हैं। उन्होंने कहा कि सच्चा ज्ञान एक जादुई आग की तरह है जो हमारी सारी गलतियों को जला देता है।'
            },
            5: {
                title: 'कर्म संन्यास योग',
                subtitle: 'कर्म में त्याग',
                description: 'कर्म और त्याग के बीच संतुलन को समझना',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, पहले आप मुझसे कर्म का त्याग करने को कहते हैं, और फिर भक्ति के साथ कर्म करने की सलाह देते हैं। अब कृपया मुझे निश्चित रूप से बताएं कि दोनों में से कौन अधिक लाभकारी है?', emotion: 'भ्रमित' },
                    { speaker: 'कृष्ण', text: 'कर्म का त्याग और भक्ति में कर्म दोनों ही मुक्ति के लिए अच्छे हैं। लेकिन दोनों में से, भक्ति सेवा में कर्म केवल कर्म के त्याग से बेहतर है।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'यह कैसे हो सकता है? ऐसा लगता है कि सभी कर्मों का त्याग करने से शांति मिलेगी।', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'केवल सभी गतिविधियों का त्याग करके और भगवान की भक्ति सेवा में संलग्न न होकर कोई सुखी नहीं हो सकता। लेकिन भक्ति सेवा में लगा एक विचारशील व्यक्ति बिना देर किए परमात्मा को प्राप्त कर सकता है।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'तो, कुंजी आसक्ति के बिना कार्य करना है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'जो व्यक्ति आसक्ति के बिना अपना कर्तव्य निभाता है, परिणामों को परमात्मा को समर्पित करता है, वह पाप कर्म से अप्रभावित रहता है, जैसे कमल का पत्ता पानी से अछूता रहता है।', emotion: 'दृष्टांतात्मक' },
                    { speaker: 'अर्जुन', text: 'ऐसा व्यक्ति दुनिया को कैसे देखता है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'विनम्र संत, सच्चे ज्ञान के आधार पर, एक विद्वान और सौम्य ब्राह्मण, एक गाय, एक हाथी, एक कुत्ता और एक चांडाल को समान दृष्टि से देखते हैं।', emotion: 'प्रबुद्ध' },
                    { speaker: 'अर्जुन', text: 'वे सब में दिव्यता देखते हैं?', emotion: 'चकित' },
                    { speaker: 'कृष्ण', text: 'जिनके मन समानता और समभाव में स्थापित हैं, उन्होंने जन्म और मृत्यु की स्थितियों को पहले ही जीत लिया है। वे ब्रह्म की तरह निर्दोष हैं, और इस प्रकार वे पहले से ही ब्रह्म में स्थित हैं।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'वे सुख का अनुभव कैसे करते हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'ऐसा मुक्त व्यक्ति भौतिक इंद्रिय सुख के प्रति आकर्षित नहीं होता, बल्कि हमेशा समाधि में रहकर भीतर के सुख का आनंद लेता है। इस तरह आत्म-साक्षात्कारी व्यक्ति असीम सुख का आनंद लेता है, क्योंकि वह परमात्मा पर ध्यान केंद्रित करता है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'तो बाहरी सुख अंततः दुख का कारण बनते हैं?', emotion: 'समझ रहा है' },
                    { speaker: 'कृष्ण', text: 'एक बुद्धिमान व्यक्ति दुख के स्रोतों में भाग नहीं लेता, जो भौतिक इंद्रियों के संपर्क के कारण होते हैं। हे कुंतीपुत्र, ऐसे सुखों का एक आरंभ और एक अंत होता है, और इसलिए ज्ञानी व्यक्ति उनमें आनंद नहीं लेता।', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: 'वे जो शांति प्राप्त करते हैं, उसकी प्रकृति क्या है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'जो व्यक्ति मेरी पूर्ण चेतना में है, मुझे सभी यज्ञों और तपस्याओं का अंतिम लाभार्थी, सभी ग्रहों और देवताओं का परम स्वामी, और सभी जीवित प्राणियों का हितैषी और शुभचिंतक जानता है, वह भौतिक दुखों की पीड़ा से शांति प्राप्त करता है।', emotion: 'निर्णायक' },
                    { speaker: 'अर्जुन', text: 'वास्तव में मन या आत्मा कार्य कर रही है?', emotion: 'दार्शनिक' },
                    { speaker: 'कृष्ण', text: 'जब देहधारी जीव अपनी प्रकृति को नियंत्रित करता है और मानसिक रूप से सभी कर्मों का त्याग करता है, तो वह नौ द्वारों वाले नगर [भौतिक शरीर] में सुखपूर्वक रहता है, न तो काम करता है और न ही काम करवाता है।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'तो सच्चा त्याग एक आंतरिक अवस्था है, न कि केवल एक बाहरी दिखावा?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'बिल्कुल। जो ज्ञानी है वह समझता है कि आत्मा इंद्रियों की गतिविधियों से अलग है। वह अपने कर्मों को दिव्य को समर्पित करता है और शांति पाता है।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'निःस्वार्थ कर्म का यह मार्ग श्रेष्ठ और अधिक व्यावहारिक लगता है।', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'वास्तव में, यह है। कर्म में संलग्न हो, अर्जुन, लेकिन अपने मन को परमात्मा में स्थिर करके। यही सच्चे त्याग और स्थायी शांति का रहस्य है।', emotion: 'प्रोत्साहित करते हुए' }
                ],
                summary: 'कृष्ण बताते हैं कि कर्मयोग (निःस्वार्थ कर्म) कर्म संन्यास (कर्मों का त्याग) से श्रेष्ठ है। सच्चा त्यागी वह है जो कर्म के फल का त्याग करता है, न कि कर्म का।',
                teachings: 'फल की आसक्ति के बिना अपने कर्तव्यों का पालन करना ही सच्चा त्याग है। ज्ञानी व्यक्ति सभी प्राणियों में एक ही दिव्यता को देखता है।',
                moralLesson: 'सच्ची शांति जिम्मेदारियों से भागने में नहीं, बल्कि उन्हें निःस्वार्थ भाव से निभाने में है।',
                kidsVersion: 'कृष्ण ने सिखाया कि असली हीरो काम छोड़ने वाला नहीं, बल्कि अच्छे दिल से काम करने वाला होता है। जब हम बदले में कुछ चाहे बिना मदद करते हैं, तो हमें असली खुशी मिलती है।'
            },
            6: {
                title: 'ध्यान योग',
                subtitle: 'आत्म-संयम का विज्ञान',
                description: 'ध्यान की प्रक्रिया और मन का अनुशासन',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'जो अपने कर्म के फलों से अनासक्त है और जो अपने कर्तव्य के अनुसार कर्म करता है, वह संन्यासी और सच्चा योगी है।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: 'मन के द्वारा स्वयं को कैसे उन्नत किया जा सकता है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'मनुष्य को अपने मन की सहायता से अपना उद्धार करना चाहिए, और अपने को नीचे नहीं गिराना चाहिए। मन बद्ध जीव का मित्र भी है और शत्रु भी।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'किसके लिए मन मित्र है, और किसके लिए शत्रु?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'जिसने मन को जीत लिया है, उसके लिए मन सबसे अच्छा मित्र है; लेकिन जो ऐसा करने में असफल रहा है, उसके लिए उसका मन सबसे बड़ा शत्रु बना रहेगा।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'योग ध्यान का अभ्यास कैसे किया जाता है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'योग का अभ्यास करने के लिए, व्यक्ति को एक एकांत स्थान पर जाना चाहिए, कुश घास, मृगचर्म और एक मुलायम कपड़े का आसन बिछाना चाहिए, और फिर, शांत मन से, हृदय को शुद्ध करने के लिए योग का अभ्यास करना चाहिए।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'यह बहुत कठिन लगता है। खाने और सोने के बारे में क्या?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'जो अपने खाने, सोने, मनोरंजन और काम की आदतों में नियमित है, वह योग प्रणाली का अभ्यास करके सभी भौतिक पीड़ाओं को कम कर सकता है।', emotion: 'संतुलित' },
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, मन चंचल, उपद्रवी, हठी और बहुत बलवान है। इसे वश में करना, मुझे लगता है, हवा को नियंत्रित करने से भी अधिक कठिन है।', emotion: 'निराश' },
                    { speaker: 'कृष्ण', text: 'हे महाबाहु कुंतीपुत्र, निःसंदेह चंचल मन को वश में करना बहुत कठिन है, लेकिन उपयुक्त अभ्यास और वैराग्य से यह संभव है।', emotion: 'प्रोत्साहित करते हुए' },
                    { speaker: 'अर्जुन', text: 'उस असफल योगी का गंतव्य क्या है जो श्रद्धा से शुरू करता है लेकिन फिर सांसारिक मन के कारण रुक जाता है?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'शुभ कार्यों में लगा एक योगी न तो इस लोक में और न ही आध्यात्मिक लोक में विनाश को प्राप्त होता है; जो अच्छा करता है, मेरे मित्र, वह कभी बुराई से पराजित नहीं होता।', emotion: 'आश्वस्त' },
                    { speaker: 'अर्जुन', text: 'मृत्यु के बाद वह कहाँ जाता है?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'असफल योगी, पुण्यवानों के लोकों पर कई-कई वर्षों तक आनंद लेने के बाद, धर्मी लोगों के परिवार में, या अमीर अभिजात वर्ग के परिवार में जन्म लेता है। अपने पिछले जीवन की दिव्य चेतना के आधार पर, वह फिर से अपने पिछले जीवन की चेतना को पुनर्जीवित करता है और आगे की प्रगति करने का प्रयास करता है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'तो, कोई भी आध्यात्मिक प्रयास कभी व्यर्थ नहीं जाता?', emotion: 'आशावान' },
                    { speaker: 'कृष्ण', text: 'निश्चित रूप से। और जब योगी आगे की प्रगति करने में ईमानदारी से प्रयास करता है, सभी अशुद्धियों से धुल जाता है, तो अंततः, कई-कई जन्मों के अभ्यास के बाद पूर्णता प्राप्त करके, वह परम लक्ष्य को प्राप्त करता है।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'सभी योगियों में सर्वोच्च कौन है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'और सभी योगियों में, जो बड़ी श्रद्धा के साथ हमेशा मुझमें रहता है, अपने भीतर मेरे बारे में सोचता है, और मुझे दिव्य प्रेममयी सेवा प्रदान करता है - वह योग में मुझसे सबसे अधिक घनिष्ठ रूप से जुड़ा हुआ है और सभी में सर्वोच्च है। यह मेरा मत है।', emotion: 'निर्णायक' },
                    { speaker: 'अर्जुन', text: 'मैं समझ गया। मार्ग कठिन है, लेकिन अभ्यास, वैराग्य और भक्ति से यह संभव है।', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'हाँ, अर्जुन। एक सच्चा योगी मुझे सभी प्राणियों में और सभी प्राणियों को मुझमें देखता है। ऐसे व्यक्ति के लिए, मैं कभी खोता नहीं, न ही वे कभी मुझसे खोते हैं।', emotion: 'एकीकृत' }
                ],
                summary: 'कृष्ण ध्यान के अभ्यास और मन को नियंत्रित करने की विधि बताते हैं। वह आश्वासन देते हैं कि आध्यात्मिक मार्ग पर किया गया कोई भी प्रयास व्यर्थ नहीं जाता।',
                teachings: 'मनुष्य का मन ही उसका मित्र और शत्रु है। अभ्यास और वैराग्य से मन को वश में किया जा सकता है। सभी योगियों में, भक्तियोगी श्रेष्ठ है।',
                moralLesson: 'आत्म-नियंत्रण और निरंतर अभ्यास से किसी भी लक्ष्य को प्राप्त किया जा सकता है। आध्यात्मिक प्रयास कभी निष्फल नहीं होते।',
                kidsVersion: 'कृष्ण ने कहा कि हमारे मन को नियंत्रित करना एक शरारती बंदर को प्रशिक्षित करने जैसा है। यह मुश्किल है, लेकिन अभ्यास से हम इसे अपना सबसे अच्छा दोस्त बना सकते हैं।'
            },
            7: {
                title: 'ज्ञान विज्ञान योग',
                subtitle: 'परम सत्य का ज्ञान',
                description: 'कृष्ण अपनी सर्वोच्च प्रकृति और विभिन्न प्रकार के भक्तों का खुलासा करते हैं',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'अब सुनो, हे पृथापुत्र, कैसे मेरी पूर्ण चेतना में योग का अभ्यास करके, अपने मन को मुझसे जोड़कर, तुम मुझे पूर्ण रूप से, संदेह से मुक्त होकर जान सकते हो।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'कृपया मुझे यह ज्ञान पूर्ण रूप से बताएं। इसे जानने के बाद, और क्या जानने को शेष रहता है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'मनुष्यों में हजारों में से कोई एक पूर्णता के लिए प्रयास कर सकता है, और जिन्होंने पूर्णता प्राप्त कर ली है, उनमें से शायद ही कोई मुझे वास्तव में जानता है।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'आपकी शक्तियों की प्रकृति क्या है?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'पृथ्वी, जल, अग्नि, वायु, आकाश, मन, बुद्धि और मिथ्या अहंकार—ये आठ मिलकर मेरी पृथक भौतिक शक्तियाँ हैं। इसके अलावा, मेरी एक और, श्रेष्ठ शक्ति है, जिसमें जीव शामिल हैं।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'तो जो कुछ भी मौजूद है वह आपसे ही उत्पन्न होता है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'इस संसार में जो कुछ भी भौतिक और जो कुछ भी आध्यात्मिक है, निश्चित रूप से जान लो कि मैं ही उत्पत्ति और प्रलय दोनों हूँ। मुझसे श्रेष्ठ कोई सत्य नहीं है। सब कुछ मुझ पर टिका है, जैसे मोती धागे पर पिरोए जाते हैं।', emotion: 'आधारभूत' },
                    { speaker: 'अर्जुन', text: 'मैं आपको अपने दैनिक जीवन में कैसे देख सकता हूँ?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'मैं जल का स्वाद हूँ, सूर्य और चंद्रमा का प्रकाश हूँ, आकाश में ध्वनि और मनुष्य में क्षमता हूँ।', emotion: 'सर्व-व्यापी' },
                    { speaker: 'अर्जुन', text: 'तो फिर अधिकांश लोग आपको क्यों नहीं देख पाते?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'प्रकृति के तीन गुणों से मोहित होकर, सारा संसार मुझे नहीं जानता। मेरी यह दिव्य शक्ति, तीन गुणों से युक्त, पार करना कठिन है। लेकिन जिन्होंने मेरे प्रति आत्मसमर्पण कर दिया है, वे इसे आसानी से पार कर सकते हैं।', emotion: 'ज्ञानी' },
                    { speaker: 'अर्जुन', text: 'आपकी पूजा करने वाले पुण्यात्मा कौन हैं?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'चार प्रकार के पुण्यात्मा मेरी भक्ति सेवा करना शुरू करते हैं—दुखी, धन की इच्छा रखने वाला, जिज्ञासु, और जो परम सत्य का ज्ञान खोज रहा है।', emotion: 'वर्गीकृत करते हुए' },
                    { speaker: 'अर्जुन', text: 'इनमें से सबसे अच्छा कौन है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'इनमें से, जो पूर्ण ज्ञान में है और जो हमेशा शुद्ध भक्ति सेवा में लगा रहता है, वह सबसे अच्छा है। क्योंकि मैं उसे बहुत प्रिय हूँ, और वह मुझे प्रिय है।', emotion: 'प्रेममय' },
                    { speaker: 'अर्जुन', text: 'देवताओं की पूजा करने वालों के बारे में क्या?', emotion: 'पूछताछ' },
                    { speaker: 'कृष्ण', text: 'कम बुद्धि वाले लोग देवताओं की पूजा करते हैं, और उनके फल सीमित और अस्थायी होते हैं। लेकिन मेरे भक्त अंततः मेरे परम लोक को प्राप्त करते हैं।', emotion: 'विवेकपूर्ण' },
                    { speaker: 'अर्जुन', text: 'बुद्धिहीन लोग आपकी सर्वोच्च प्रकृति को क्यों नहीं समझ सकते?', emotion: 'उलझन में' },
                    { speaker: 'कृष्ण', text: 'मैं मूर्खों और बुद्धिहीनों के लिए कभी प्रकट नहीं होता। उनके लिए मैं अपनी आंतरिक शक्ति से ढका रहता हूँ, और इसलिए वे नहीं जानते कि मैं अजन्मा और अच्युत हूँ।', emotion: 'रहस्यमय' },
                    { speaker: 'अर्जुन', text: 'इस भ्रम से कैसे मुक्त हुआ जा सकता है?', emotion: 'आशावान' },
                    { speaker: 'कृष्ण', text: 'जिन व्यक्तियों ने पिछले जन्मों में और इस जीवन में पुण्य कर्म किए हैं और जिनके पाप कर्म पूरी तरह से समाप्त हो गए हैं, वे भ्रम के द्वंद्वों से मुक्त हो जाते हैं, और वे दृढ़ संकल्प के साथ मेरी सेवा में लग जाते हैं।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण स्वयं को सभी भौतिक और आध्यात्मिक जगत का स्रोत बताते हैं। वह बताते हैं कि कैसे उनकी माया को पार करना कठिन है, लेकिन जो उनकी शरण लेते हैं वे इसे पार कर जाते हैं।',
                teachings: 'भगवान ही सब कुछ का मूल हैं। शुद्ध भक्ति से ही उन्हें जाना जा सकता है। चार प्रकार के लोग उनकी पूजा करते हैं।',
                moralLesson: 'हर चीज में दिव्यता को देखने का प्रयास करें। सच्चा ज्ञान ईश्वर के प्रति समर्पण से आता है।',
                kidsVersion: 'कृष्ण ने बताया कि वह हर चीज में मौजूद हैं - पानी के स्वाद में, सूरज की रोशनी में। जो लोग उन्हें सच्चे दिल से याद करते हैं, वे उनके सबसे अच्छे दोस्त बन जाते हैं।'
            },
            8: {
                title: 'अक्षर ब्रह्म योग',
                subtitle: 'परम की प्राप्ति',
                description: 'कृष्ण अर्जुन के परम वास्तविकता और मृत्यु के बारे में प्रश्नों का उत्तर देते हैं',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे मेरे प्रभु, ब्रह्म क्या है? आत्मा क्या है? सकाम कर्म क्या हैं? यह भौतिक अभिव्यक्ति क्या है? और मृत्यु के समय मैं आपको कैसे जान सकता हूँ?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'अविनाशी, दिव्य जीव को ब्रह्म कहा जाता है। भौतिक शरीरों के विकास से संबंधित कर्म को कर्म कहा जाता है।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: 'मृत्यु के क्षण में आपको याद रखना कैसे संभव है?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'जो कोई भी, अपने जीवन के अंत में, केवल मुझे याद करते हुए अपना शरीर छोड़ता है, वह तुरंत मेरी प्रकृति को प्राप्त करता है। इसमें कोई संदेह नहीं है।', emotion: 'आश्वस्त' },
                    { speaker: 'अर्जुन', text: 'मृत्यु के समय हमारी स्थिति क्या निर्धारित करती है?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'जब कोई अपना शरीर छोड़ता है तो वह जिस भी अवस्था को याद करता है, हे कुंतीपुत्र, वह उस अवस्था को बिना चूके प्राप्त करेगा।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'तो मुझे हमेशा आपके बारे में सोचना चाहिए?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'इसलिए, अर्जुन, तुम्हें हमेशा मेरे बारे में सोचना चाहिए और साथ ही लड़ने का अपना निर्धारित कर्तव्य पूरा करना चाहिए। अपनी गतिविधियों को मुझे समर्पित करके, तुम मुझे बिना किसी संदेह के प्राप्त करोगे।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'आप तक पहुँचने के लिए कैसे ध्यान करना चाहिए?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'जो मुझ पर परम पुरुष के रूप में ध्यान करता है, उसका मन लगातार मुझे याद करने में लगा रहता है, पथ से विचलित नहीं होता, वह निश्चित रूप से मुझ तक पहुँचता है।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'आपके परम धाम की प्रकृति क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'भौतिक संसार में उच्चतम ग्रह से लेकर निम्नतम तक, सभी दुख के स्थान हैं जहाँ बार-बार जन्म और मृत्यु होती है। लेकिन जो मेरे धाम को प्राप्त करता है वह फिर कभी जन्म नहीं लेता।', emotion: 'मुक्तिदायक' },
                    { speaker: 'अर्जुन', text: 'क्या इस भौतिक संसार से परे कोई दुनिया है?', emotion: 'चकित' },
                    { speaker: 'कृष्ण', text: 'फिर भी एक और अव्यक्त प्रकृति है, जो शाश्वत है और इस व्यक्त और अव्यक्त पदार्थ से परे है। यह सर्वोच्च है और कभी नष्ट नहीं होती। वह मेरा परम धाम है।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'उस धाम तक कैसे पहुँचा जा सकता है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'परम पुरुषोत्तम भगवान, जो सबसे महान हैं, को अनन्य भक्ति द्वारा प्राप्त किया जा सकता है। यद्यपि वह अपने धाम में मौजूद हैं, वह सर्वव्यापी हैं, और सब कुछ उनके भीतर स्थित है।', emotion: 'भक्तिमय' },
                    { speaker: 'अर्जुन', text: 'क्या शरीर छोड़ने के लिए शुभ समय होते हैं?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'जो परम ब्रह्म को जानते हैं, वे अग्नि देव के प्रभाव में, प्रकाश में, दिन के एक शुभ क्षण में, शुक्ल पक्ष के पखवाड़े के दौरान, या जब सूर्य उत्तर में यात्रा करता है, उन छह महीनों के दौरान दुनिया से गुजरकर उस परम को प्राप्त करते हैं।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'और अशुभ समय?', emotion: 'विपरीत' },
                    { speaker: 'कृष्ण', text: 'जो योगी धुएं, रात, कृष्ण पक्ष के पखवाड़े, या जब सूर्य दक्षिण की ओर जाता है, उन छह महीनों के दौरान इस दुनिया से गुजरता है, वह चंद्र लोक तक पहुँचता है लेकिन फिर वापस आ जाता है।', emotion: 'चेतावनी' },
                    { speaker: 'अर्जुन', text: 'क्या एक भक्त को इन गणनाओं के बारे में चिंता करनी चाहिए?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'यद्यपि भक्त इन दो मार्गों को जानते हैं, वे कभी भ्रमित नहीं होते। इसलिए हमेशा भक्ति में स्थिर रहो।', emotion: 'आश्वस्त' },
                    { speaker: 'अर्जुन', text: 'तो, भक्ति ही वह कुंजी है जो सभी दरवाजे खोलती है?', emotion: 'प्रबुद्ध' },
                    { speaker: 'कृष्ण', text: 'जो व्यक्ति भक्ति सेवा का मार्ग स्वीकार करता है, वह किसी भी परिणाम से वंचित नहीं रहता। केवल भक्ति सेवा करने से, वह यह सब प्राप्त करता है, और अंत में वह परम शाश्वत धाम पहुँचता है।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण बताते हैं कि मृत्यु के समय व्यक्ति की चेतना उसके अगले गंतव्य को निर्धारित करती है। जीवन भर ईश्वर का स्मरण करने से अंत समय में भी उनकी याद बनी रहती है।',
                teachings: 'मृत्यु के समय की चेतना महत्वपूर्ण है। जीवन भर भक्ति का अभ्यास करने से अंत समय में भगवान की प्राप्ति होती है।',
                moralLesson: 'हम आज अपने मन को जिससे भरते हैं, वही हमारा भविष्य और अंतिम गति निर्धारित करता है।',
                kidsVersion: 'कृष्ण ने बताया कि हम जीवन के अंत में जिसके बारे में सोचते हैं, हम वहीं जाते हैं। इसलिए हमें हमेशा अच्छी और भगवान की बातें सोचनी चाहिए ताकि हम उनके पास जा सकें।'
            },
            9: {
                title: 'राज विद्या राज गुह्य योग',
                subtitle: 'सबसे गोपनीय ज्ञान',
                description: 'कृष्ण भक्ति सेवा के सबसे गोपनीय ज्ञान का खुलासा करते हैं',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'मेरे प्रिय अर्जुन, क्योंकि तुम मुझसे कभी ईर्ष्या नहीं करते, मैं तुम्हें यह सबसे गोपनीय ज्ञान और अनुभूति प्रदान करूँगा, जिसे जानकर तुम भौतिक अस्तित्व के दुखों से मुक्त हो जाओगे।', emotion: 'कृपालु' },
                    { speaker: 'अर्जुन', text: 'हे प्रभु, मैं इस सर्वोच्च ज्ञान को सुनने के लिए उत्सुक हूँ।', emotion: 'ग्रहणशील' },
                    { speaker: 'कृष्ण', text: 'यह ज्ञान शिक्षा का राजा, सभी रहस्यों में सबसे गुप्त है। यह सबसे शुद्ध ज्ञान है, और क्योंकि यह अनुभूति द्वारा आत्मा का प्रत्यक्ष बोध कराता है, यह धर्म की पूर्णता है।', emotion: 'जोरदार' },
                    { speaker: 'अर्जुन', text: 'श्रद्धाहीन लोग आपको क्यों नहीं प्राप्त कर पाते?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'जो इस भक्ति सेवा में श्रद्धा नहीं रखते, वे मुझे प्राप्त नहीं कर सकते, हे शत्रुओं के विजेता। इसलिए वे इस भौतिक संसार में जन्म और मृत्यु के मार्ग पर लौट आते हैं।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'आप इस ब्रह्मांड में कैसे व्याप्त हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'मेरे द्वारा, मेरे अव्यक्त रूप में, यह संपूर्ण ब्रह्मांड व्याप्त है। सभी प्राणी मुझमें हैं, लेकिन मैं उनमें नहीं हूँ।', emotion: 'रहस्यमय' },
                    { speaker: 'अर्जुन', text: 'यह एक विरोधाभास है। सब कुछ आप में कैसे हो सकता है, लेकिन आप उनमें नहीं हैं?', emotion: 'उलझन में' },
                    { speaker: 'कृष्ण', text: 'और फिर भी जो कुछ भी बनाया गया है वह मुझमें नहीं रहता। मेरे रहस्यमय ऐश्वर्य को देखो! यद्यपि मैं सभी जीवित प्राणियों का पालक हूँ और यद्यपि मैं हर जगह हूँ, मैं इस ब्रह्मांडीय अभिव्यक्ति का हिस्सा नहीं हूँ, क्योंकि मेरी आत्मा ही सृष्टि का स्रोत है।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'आपकी दिव्य प्रकृति को पहचानने वाले कौन हैं?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'महान आत्माएं, महात्मा, भ्रमित नहीं होते। वे दिव्य प्रकृति की सुरक्षा में हैं और पूरी तरह से भक्ति सेवा में लगे हुए हैं क्योंकि वे मुझे परम पुरुष, मूल और अविनाशी के रूप में जानते हैं।', emotion: 'प्रशंसा करते हुए' },
                    { speaker: 'अर्जुन', text: 'इस अवस्था को प्राप्त करने के लिए मुझे आपकी पूजा कैसे करनी चाहिए?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'यदि कोई मुझे प्रेम और भक्ति के साथ एक पत्ता, एक फूल, फल या जल अर्पित करता है, तो मैं उसे स्वीकार करूँगा।', emotion: 'स्वीकार करते हुए' },
                    { speaker: 'अर्जुन', text: 'अर्पण स्वयं महत्वपूर्ण है, या उसके पीछे की भक्ति?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'भक्ति ही मायने रखती है। तुम जो कुछ भी करते हो, जो कुछ भी खाते हो, जो कुछ भी अर्पित करते हो या देते हो, और जो भी तपस्या करते हो—उसे मुझे एक अर्पण के रूप में करो।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'ऐसे अर्पण का परिणाम क्या होता है?', emotion: 'आशावान' },
                    { speaker: 'कृष्ण', text: 'इस तरह तुम कर्म के बंधन और उसके शुभ और अशुभ परिणामों से मुक्त हो जाओगे। अपने मन को त्याग के इस सिद्धांत में मुझ पर स्थिर करके, तुम मुक्त हो जाओगे और मेरे पास आओगे।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'क्या आप कुछ भक्तों का दूसरों पर पक्षपात करते हैं?', emotion: 'पूछताछ' },
                    { speaker: 'कृष्ण', text: 'मैं किसी से ईर्ष्या नहीं करता, न ही मैं किसी के प्रति पक्षपाती हूँ। मैं सभी के लिए समान हूँ। लेकिन जो कोई भी भक्ति में मेरी सेवा करता है वह एक मित्र है, मुझमें है, और मैं भी उसका मित्र हूँ।', emotion: 'निष्पक्ष' },
                    { speaker: 'अर्जुन', text: 'इस सबसे गोपनीय ज्ञान में आपका अंतिम निर्देश क्या है?', emotion: 'ध्यान से' },
                    { speaker: 'कृष्ण', text: 'हमेशा मेरे बारे में सोचो, मेरे भक्त बनो, मेरी पूजा करो और मुझे अपना प्रणाम अर्पित करो। इस प्रकार तुम बिना चूके मेरे पास आओगे। मैं तुम्हें यह वचन देता हूँ क्योंकि तुम मेरे बहुत प्रिय मित्र हो।', emotion: 'प्रेममय' }
                ],
                summary: 'कृष्ण भक्ति के गोपनीय ज्ञान को प्रकट करते हैं। वह बताते हैं कि प्रेम और श्रद्धा से की गई छोटी से छोटी भेंट भी उन्हें स्वीकार्य है।',
                teachings: 'शुद्ध भक्ति ही सर्वोच्च ज्ञान है। ईश्वर के प्रति पूर्ण समर्पण से ही उन्हें प्राप्त किया जा सकता है।',
                moralLesson: 'महत्वपूर्ण यह नहीं है कि हम क्या देते हैं, बल्कि यह है कि हम किस भाव से देते हैं। प्रेम से की गई सेवा ही सच्ची भक्ति है।',
                kidsVersion: 'कृष्ण ने बताया कि उनका सबसे अच्छा दोस्त कैसे बनें। इसके लिए महंगे तोहफे नहीं, बल्कि सच्चा प्यार चाहिए। अगर तुम उन्हें प्यार से एक फूल भी दोगे, तो वह बहुत खुश होंगे।'
            },
            10: {
                title: 'विभूति योग',
                subtitle: 'भगवान का ऐश्वर्य',
                description: 'कृष्ण भौतिक और आध्यात्मिक जगत में अपने दिव्य स्वरूपों को प्रकट करते हैं',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'फिर से सुनो, हे महाबाहु अर्जुन। क्योंकि तुम मेरे प्रिय मित्र हो, तुम्हारे लाभ के लिए मैं आगे बोलूँगा, जो ज्ञान मैंने पहले ही समझाया है उससे बेहतर ज्ञान दूँगा।', emotion: 'स्नेही' },
                    { speaker: 'अर्जुन', text: 'आप परम भगवान हैं, सभी के मूल हैं। न तो देवताओं के समूह और न ही महान संत आपके मूल को जानते हैं। कृपया अपने दिव्य ऐश्वर्यों का विस्तार से वर्णन करें जिनके द्वारा आप इन सभी लोकों में व्याप्त हैं।', emotion: 'भक्तिमय' },
                    { speaker: 'कृष्ण', text: 'मैं सभी आध्यात्मिक और भौतिक जगत का स्रोत हूँ। सब कुछ मुझसे ही निकलता है। जो बुद्धिमान इसे पूरी तरह से जानते हैं, वे मेरी भक्ति सेवा में लगते हैं और पूरे हृदय से मेरी पूजा करते हैं।', emotion: 'आधारभूत' },
                    { speaker: 'अर्जुन', text: 'मैं लगातार आपके बारे में कैसे सोचूँ और आपको कैसे जानूँ? हे परम पुरुष, आपको किन विभिन्न रूपों में याद किया जाना चाहिए?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'मैं तुम्हें अपनी शानदार अभिव्यक्तियों के बारे में बताऊँगा, लेकिन केवल उन्हीं के बारे में जो प्रमुख हैं, हे अर्जुन, क्योंकि मेरा ऐश्वर्य असीम है।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'मैं ध्यान से सुन रहा हूँ।', emotion: 'ध्यान से' },
                    { speaker: 'कृष्ण', text: 'मैं आत्मा हूँ, हे गुडाकेश, सभी प्राणियों के हृदय में विराजमान हूँ। मैं सभी प्राणियों का आदि, मध्य और अंत हूँ।', emotion: 'अंतर्निहित' },
                    { speaker: 'अर्जुन', text: 'और दिव्य प्राणियों में?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'आदित्यों में मैं विष्णु हूँ, प्रकाशों में मैं दीप्तिमान सूर्य हूँ, मरुतों में मैं मरीचि हूँ, और तारों में मैं चंद्रमा हूँ।', emotion: 'शानदार' },
                    { speaker: 'अर्जुन', text: 'वेदों और इंद्रियों में?', emotion: 'खोज' },
                    { speaker: 'कृष्ण', text: 'वेदों में मैं सामवेद हूँ; देवताओं में मैं इंद्र, स्वर्ग का राजा हूँ; इंद्रियों में मैं मन हूँ; और जीवित प्राणियों में मैं जीवन शक्ति [चेतना] हूँ।', emotion: 'आवश्यक' },
                    { speaker: 'अर्जुन', text: 'महान शक्तियों और प्राणियों में?', emotion: 'चकित' },
                    { speaker: 'कृष्ण', text: 'रुद्रों में मैं भगवान शिव हूँ, यक्षों और राक्षसों में मैं धन का स्वामी [कुबेर] हूँ, वसुओं में मैं अग्नि हूँ, और पर्वतों में मैं मेरु हूँ।', emotion: 'राजसी' },
                    { speaker: 'अर्जुन', text: 'पुरोहितों और सेनापतियों में?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'पुरोहितों में, हे अर्जुन, मुझे मुख्य, बृहस्पति जानो। सेनापतियों में मैं कार्तिकेय हूँ, और जल निकायों में मैं समुद्र हूँ।', emotion: 'सर्वोपरि' },
                    { speaker: 'अर्जुन', text: 'आपकी अभिव्यक्तियाँ वास्तव में हर चीज में सर्वश्रेष्ठ हैं।', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'महान संतों में मैं भृगु हूँ; कंपनों में मैं दिव्य ॐ हूँ। यज्ञों में मैं पवित्र नामों का जप [जप] हूँ, और अचल चीजों में मैं हिमालय हूँ।', emotion: 'सर्वोच्च' },
                    { speaker: 'अर्जुन', text: 'सभी पेड़ों और दिव्य प्राणियों में?', emotion: 'आश्चर्य' },
                    { speaker: 'कृष्ण', text: 'सभी पेड़ों में मैं बरगद का पेड़ हूँ, और देवताओं के बीच संतों में मैं नारद हूँ। गंधर्वों में मैं चित्ररथ हूँ, और सिद्ध प्राणियों में मैं ऋषि कपिल हूँ।', emotion: 'सर्वव्यापी' },
                    { speaker: 'अर्जुन', text: 'आपके सभी ऐश्वर्यों को समझना असंभव है।', emotion: 'अभिभूत' },
                    { speaker: 'कृष्ण', text: 'जान लो कि सभी ऐश्वर्यशाली, सुंदर और गौरवशाली सृष्टियाँ मेरे तेज की एक चिंगारी से ही निकलती हैं। लेकिन इस सब विस्तृत ज्ञान की क्या आवश्यकता है, अर्जुन? मेरे एक ही अंश से मैं इस पूरे ब्रह्मांड में व्याप्त हूँ और इसका समर्थन करता हूँ।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण बताते हैं कि वे ही समस्त सृष्टि के स्रोत हैं और सभी ऐश्वर्यशाली, सुंदर और गौरवशाली वस्तुएं उनके दिव्य तेज की एक चिंगारी मात्र हैं। वे अर्जुन को हर जगह उन्हें देखने के लिए प्रोत्साहित करते हैं।',
                teachings: 'संपूर्ण ब्रह्मांड परमात्मा की एक अभिव्यक्ति है। हम अपने आस-पास की दुनिया की उत्कृष्टता में उनकी उपस्थिति को पहचानकर ईश्वर से जुड़ सकते हैं। सच्चा ज्ञान यह समझने में निहित है कि परमात्मा का एक ही अंश संपूर्ण अस्तित्व में व्याप्त है और उसका समर्थन करता है।',
                moralLesson: 'हर चीज और हर किसी में सर्वश्रेष्ठ की तलाश करें, और आप परमात्मा का प्रतिबिंब देखेंगे। दुनिया में ईश्वर की उपस्थिति के प्रति जागरूकता पैदा करने से हमारी धारणा बदल सकती है और हमारे जीवन को श्रद्धा और आश्चर्य से भर सकती है।',
                kidsVersion: 'कल्पना कीजिए कि हर चीज में सबसे अच्छा: सबसे मजबूत शेर, सबसे चमकीला तारा, सबसे ऊँचा पहाड़। कृष्ण बताते हैं कि वे हर समूह में "सर्वश्रेष्ठ" हैं। इसलिए, जब भी आप कुछ अद्भुत देखते हैं, तो आप ईश्वर के जादू का एक छोटा सा टुकड़ा देख रहे होते हैं!'
            },
            11: {
                title: 'विश्वरूप दर्शन योग',
                subtitle: 'ब्रह्मांडीय दृष्टि',
                description: 'कृष्ण अर्जुन को दिव्य दृष्टि प्रदान करते हैं और अपने शानदार, भयानक सार्वभौमिक रूप को प्रकट करते हैं',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'मेरा भ्रम अब दूर हो गया है। मैंने आपसे प्रत्येक जीव के प्रकट होने और गायब होने के बारे में विस्तार से सुना है। हे सभी व्यक्तित्वों में सबसे महान, हे सर्वोच्च रूप, यद्यपि मैं आपको यहाँ अपने सामने आपकी वास्तविक स्थिति में देख रहा हूँ, जैसा कि आपने स्वयं का वर्णन किया है, मैं यह देखना चाहता हूँ कि आप इस ब्रह्मांडीय अभिव्यक्ति में कैसे प्रवेश कर चुके हैं। मैं आपके उस रूप को देखना चाहता हूँ।', emotion: 'श्रद्धावान' },
                    { speaker: 'कृष्ण', text: 'मेरे प्रिय अर्जुन, तुम मुझे अपनी वर्तमान आँखों से नहीं देख सकते। इसलिए मैं तुम्हें दिव्य आँखें देता हूँ। मेरे रहस्यमय ऐश्वर्य को देखो!', emotion: 'प्रदान करते हुए' },
                    { speaker: 'अर्जुन', text: 'हे ब्रह्मांड के स्वामी, हे सार्वभौमिक रूप, मैं आपके शरीर में कई-कई भुजाएं, पेट, मुँह और आँखें देख रहा हूँ, जो हर जगह बिना किसी सीमा के फैली हुई हैं। मैं आप में कोई अंत, कोई मध्य और कोई शुरुआत नहीं देख रहा हूँ।', emotion: 'चकित' },
                    { speaker: 'कृष्ण', text: 'मेरे सैकड़ों-हजारों विविध दिव्य और बहुरंगी रूपों को देखो।', emotion: 'शानदार' },
                    { speaker: 'अर्जुन', text: 'मैं सभी देवताओं और विभिन्न अन्य जीवित प्राणियों को आपके शरीर में एकत्रित देख रहा हूँ। मैं भगवान ब्रह्मा को कमल के फूल पर बैठे हुए देख रहा हूँ, साथ ही भगवान शिव और सभी संतों और दिव्य नागों को भी।', emotion: 'अभिभूत' },
                    { speaker: 'कृष्ण', text: 'तुम जो कुछ भी देखना चाहते हो, उसे मेरे इस शरीर में तुरंत देखो! तुम भविष्य में जो कुछ भी देखना चाहो, देख सकते हो। सब कुछ—चल और अचल—यहाँ पूरी तरह से, एक ही स्थान पर है।', emotion: 'सर्व-व्यापी' },
                    { speaker: 'अर्जुन', text: 'हे प्रभु, आपका रूप देखना कठिन है क्योंकि इसकी चमकदार प्रभा, चारों ओर फैल रही है, जैसे धधकती आग या सूर्य की अथाह चमक। फिर भी मैं इस चमकते हुए रूप को हर जगह देख रहा हूँ।', emotion: 'चकाचौंध' },
                    { speaker: 'कृष्ण', text: 'मैं मूल स्रोत हूँ, अविनाशी, सबसे पुराना; मैं शाश्वत धर्म का पालक, भगवान का व्यक्तित्व हूँ।', emotion: 'आधारभूत' },
                    { speaker: 'अर्जुन', text: 'मैं धृतराष्ट्र के सभी पुत्रों को, उनके मित्र राजाओं के साथ, और भीष्म, द्रोण, कर्ण—और हमारे मुख्य सैनिकों को भी—आपके भयानक मुँह में तेजी से प्रवेश करते हुए देख रहा हूँ। और कुछ को मैं आपके दाँतों के बीच सिर कुचले हुए फँसे हुए देख रहा हूँ।', emotion: 'भयभीत' },
                    { speaker: 'कृष्ण', text: 'इसलिए उठो। लड़ने की तैयारी करो और गौरव जीतो। अपने शत्रुओं को जीतो और एक समृद्ध राज्य का आनंद लो। वे पहले से ही मेरी व्यवस्था द्वारा मारे जा चुके हैं, और तुम, हे सव्यसाची, लड़ाई में केवल एक साधन हो सकते हो।', emotion: 'आदेशात्मक' },
                    { speaker: 'अर्जुन', text: 'हे प्रभुओं के प्रभु, इतने भयंकर रूप वाले, कृपया मुझे बताएं कि आप कौन हैं।', emotion: 'भयभीत' },
                    { speaker: 'कृष्ण', text: 'मैं भगवान का सर्वोच्च व्यक्तित्व हूँ, परम सत्य, समस्त सृष्टि का स्रोत। मैं शाश्वत हूँ, अविनाशी, सभी प्राणियों की शुरुआत और अंत। मैं काल हूँ, दुनिया का महान संहारक, और मैं यहाँ सभी लोगों को नष्ट करने आया हूँ। तुम्हारे [पांडवों] अलावा, यहाँ दोनों तरफ के सभी सैनिक मारे जाएँगे।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'हे सभी प्राणियों के स्वामी, मुझे क्षमा करें। आपको अपना मित्र समझकर, मैंने आपकी महिमा को न जानते हुए, जल्दबाजी में आपको "हे कृष्ण," "हे यादव," "हे मेरे मित्र" कहकर संबोधित किया है। कृपया मैंने जो कुछ भी पागलपन में या प्रेम में किया हो, उसे क्षमा करें।', emotion: 'क्षमाप्रार्थी' },
                    { speaker: 'कृष्ण', text: 'मेरा यह रूप जिसे तुम देख रहे हो, देखना बहुत कठिन है। देवता भी इस रूप को देखने का अवसर हमेशा खोजते रहते हैं।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'इस सार्वभौमिक रूप को देखने के बाद, जिसे मैंने पहले कभी नहीं देखा, मैं प्रसन्न हूँ, लेकिन साथ ही मेरा मन भय से व्याकुल है। कृपया मुझ पर अपनी कृपा करें और फिर से भगवान के व्यक्तित्व के रूप में अपना रूप प्रकट करें।', emotion: 'याचना' },
                    { speaker: 'कृष्ण', text: 'केवल अनन्य भक्ति सेवा से ही मुझे समझा जा सकता है जैसा मैं हूँ, तुम्हारे सामने खड़ा हूँ, और सीधे देखा जा सकता है।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, आपके इस सुंदर मानव-जैसे रूप को देखकर, मैं अब शांत हो गया हूँ और अपने सामान्य मन की स्थिति में लौट आया हूँ।', emotion: 'राहत' },
                    { speaker: 'कृष्ण', text: 'मेरे प्रिय अर्जुन, जो मेरी शुद्ध भक्ति सेवा में संलग्न है, सकाम कर्मों और मानसिक अटकलों के प्रदूषण से मुक्त है, जो मेरे लिए काम करता है, जो मुझे अपने जीवन का सर्वोच्च लक्ष्य बनाता है, और जो प्रत्येक जीवित प्राणी का मित्र है—वह निश्चित रूप से मेरे पास आता है।', emotion: 'निर्णायक' },
                    { speaker: 'अर्जुन', text: 'मेरा भ्रम दूर हो गया है। मैं अब दृढ़ और संदेह से मुक्त हूँ। मैं आपके निर्देशों के अनुसार कार्य करने के लिए तैयार हूँ।', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'जहाँ कृष्ण हैं, सभी योगियों के स्वामी, और जहाँ अर्जुन हैं, सर्वोच्च धनुर्धर, वहाँ निश्चित रूप से ऐश्वर्य, विजय, असाधारण शक्ति और नैतिकता होगी।', emotion: 'वचन देते हुए' }
                ],
                summary: 'अर्जुन कृष्ण के सार्वभौमिक रूप को देखने के लिए कहते हैं। कृष्ण उसे दिव्य दृष्टि प्रदान करते हैं और एक भयानक, सर्व-व्यापी ब्रह्मांडीय रूप प्रकट करते हैं। यह दृष्टि कृष्ण को काल, सभी का संहारक के रूप में दिखाती है, यह पुष्टि करते हुए कि युद्ध का परिणाम पहले से ही दैवीय इच्छा द्वारा निर्धारित है।',
                teachings: 'सार्वभौमिक रूप परमात्मा की पूर्ण शक्ति और सर्व-व्यापी प्रकृति को प्रकट करता है। यह सिखाता है कि हम सभी एक बड़े ब्रह्मांडीय योजना में साधन हैं। ईश्वर की सच्ची समझ बौद्धिक अध्ययन से नहीं बल्कि शुद्ध भक्ति से आती है।',
                moralLesson: 'कभी-कभी, वास्तविकता की कच्ची शक्ति का सामना करना भयानक हो सकता है, लेकिन यह हमें ब्रह्मांड में अपनी जगह समझने में मदद करता है। सच्ची ताकत एक उच्च उद्देश्य के प्रति समर्पण और अच्छे के लिए एक साधन के रूप में कार्य करने से आती है।',
                kidsVersion: 'अर्जुन ने कृष्ण से अपना सुपर-डुपर, सर्व-शक्तिशाली रूप दिखाने के लिए कहा। कृष्ण ने उसे एक विशाल दृष्टि दिखाई जिसमें ब्रह्मांड में सब कुछ था! यह थोड़ा डरावना था, जैसे एक बड़ा तूफान, लेकिन इसने अर्जुन को दिखाया कि कृष्ण सब कुछ के प्रभारी थे और उसे सही काम करने से डरना नहीं चाहिए।'
            },
            12: {
                title: 'भक्ति योग',
                subtitle: 'प्रेम का मार्ग',
                description: 'कृष्ण भक्ति सेवा के सर्वोच्च मार्ग और अपने भक्तों के गुणों की व्याख्या करते हैं',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'कौन अधिक पूर्ण माने जाते हैं, जो हमेशा आपकी भक्ति सेवा में ठीक से लगे रहते हैं या जो निर्गुण ब्रह्म, अव्यक्त की पूजा करते हैं?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'जो अपने मन को मेरे व्यक्तिगत रूप पर स्थिर करते हैं और हमेशा बड़ी और दिव्य श्रद्धा के साथ मेरी पूजा करने में लगे रहते हैं, वे मेरे द्वारा सबसे पूर्ण माने जाते हैं।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'अव्यक्त की पूजा करने वालों के बारे में क्या?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'जिनके मन परमात्मा के अव्यक्त, निर्गुण स्वरूप से जुड़े हुए हैं, उनके लिए उन्नति बहुत कष्टदायक है। उस अनुशासन में प्रगति करना उन लोगों के लिए हमेशा कठिन होता है जो देहधारी हैं।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'तो आपके व्यक्तिगत रूप की भक्ति आसान मार्ग है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'बस अपने मन को मुझ पर स्थिर करो, और अपनी सारी बुद्धि को मुझमें लगाओ। इस प्रकार तुम हमेशा मुझमें रहोगे, इसमें कोई संदेह नहीं।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'यदि मैं अपने मन को बिना विचलित हुए आप पर स्थिर नहीं कर सकता तो क्या होगा?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'यदि तुम नहीं कर सकते, तो भक्ति-योग के नियामक सिद्धांतों का पालन करो। इस तरह मुझे प्राप्त करने की इच्छा विकसित करो।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'और यदि मैं नियामक सिद्धांतों का पालन नहीं कर सकता?', emotion: 'आशावान' },
                    { speaker: 'कृष्ण', text: 'यदि तुम नहीं कर सकते, तो मेरे लिए काम करने का प्रयास करो; क्योंकि मेरे लिए काम करके तुम पूर्ण अवस्था में आ जाओगे।', emotion: 'समायोजित' },
                    { speaker: 'अर्जुन', text: 'और यदि वह भी संभव नहीं है?', emotion: 'हताश' },
                    { speaker: 'कृष्ण', text: 'यदि, तथापि, तुम मेरी इस चेतना में काम करने में असमर्थ हो, तो अपने काम के सभी परिणामों को त्यागने का प्रयास करो और आत्म-स्थित होने का प्रयास करो।', emotion: 'दयालु' },
                    { speaker: 'अर्जुन', text: 'आपको प्रिय एक भक्त के गुण क्या हैं?', emotion: 'भक्तिमय' },
                    { speaker: 'कृष्ण', text: 'जो ईर्ष्यालु नहीं है, बल्कि सभी जीवित प्राणियों का दयालु मित्र है, जो अपने को स्वामी नहीं समझता और मिथ्या अहंकार से मुक्त है, जो सुख और दुख दोनों में समान है, सहिष्णु है, और हमेशा संतुष्ट है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'कृपया मुझे और गुण बताएं।', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'एक भक्त जो आत्म-नियंत्रित है, दृढ़ संकल्प के साथ भक्ति सेवा में लगा हुआ है, उसका मन और बुद्धि मुझ पर स्थिर है—मेरा ऐसा भक्त मुझे बहुत प्रिय है।', emotion: 'प्रशंसा करते हुए' },
                    { speaker: 'अर्जुन', text: 'वे दुनिया के साथ कैसे बातचीत करते हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'जिससे किसी को कोई कठिनाई नहीं होती और जो किसी से परेशान नहीं होता, जो सुख और दुख, भय और चिंता में समभाव रखता है, वह मुझे बहुत प्रिय है।', emotion: 'शांत' },
                    { speaker: 'अर्जुन', text: 'सांसारिक चीजों के प्रति उनका दृष्टिकोण क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'मेरा भक्त जो सामान्य गतिविधियों पर निर्भर नहीं है, जो शुद्ध, विशेषज्ञ, चिंताओं के बिना, सभी पीड़ाओं से मुक्त है, और किसी परिणाम के लिए प्रयास नहीं कर रहा है, वह मुझे बहुत प्रिय है।', emotion: 'अनासक्त' },
                    { speaker: 'अर्जुन', text: 'वे प्रशंसा और निंदा को कैसे संभालते हैं?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'जो मित्रों और शत्रुओं के प्रति समान है, जो सम्मान और अपमान, गर्मी और सर्दी, सुख और दुख, प्रसिद्धि और बदनामी में समभाव रखता है, जो दूषित संगति से मुक्त है, हमेशा चुप रहता है और किसी भी चीज से संतुष्ट रहता है, वह मुझे बहुत प्रिय है।', emotion: 'समभाव' },
                    { speaker: 'अर्जुन', text: 'यह प्राप्त करने के लिए एक उच्च मानक है।', emotion: 'विनम्र' },
                    { speaker: 'कृष्ण', text: 'जो भक्ति सेवा के इस अविनाशी मार्ग का पालन करते हैं और जो पूरी तरह से श्रद्धा के साथ खुद को संलग्न करते हैं, मुझे सर्वोच्च लक्ष्य बनाते हुए, वे मुझे बहुत, बहुत प्रिय हैं।', emotion: 'निर्णायक' }
                ],
                summary: 'अर्जुन पूछते हैं कि क्या ईश्वर को व्यक्तिगत रूप में पूजना बेहतर है या निराकार ब्रह्म के रूप में। कृष्ण घोषित करते हैं कि यद्यपि दोनों मार्ग उन तक ले जाते हैं, उनके व्यक्तिगत रूप के प्रति प्रेमपूर्ण भक्ति (भक्ति योग) का मार्ग अधिकांश लोगों के लिए सबसे सीधा और उपयुक्त है। फिर वे एक सच्चे भक्त के अद्भुत गुणों का वर्णन करते हैं।',
                teachings: 'ईश्वर के व्यक्तिगत रूप की भक्ति आध्यात्मिक प्राप्ति के लिए सबसे आसान और सबसे प्रभावी मार्ग है। ईश्वर सभी के लिए सुलभ है, और हम जहाँ भी हैं वहाँ से अपनी यात्रा शुरू कर सकते हैं। दया, सहिष्णुता और समभाव जैसे गुणों का विकास करना आध्यात्मिक जीवन का एक महत्वपूर्ण हिस्सा है।',
                moralLesson: 'एक विचार से प्रेम करने की तुलना में एक व्यक्ति से प्रेम करना आसान है। व्यक्तिगत संबंध, प्रेम और सेवा से भरे ईश्वर से जुड़ना, आध्यात्मिक यात्रा को आनंदमय और पूर्ण बना सकता है। लक्ष्य केवल ईश्वर के बारे में जानना नहीं है, बल्कि ईश्वर से प्रेम करना है।',
                kidsVersion: 'अर्जुन ने पूछा, "ईश्वर से प्रेम करने का सबसे अच्छा तरीका क्या है?" कृष्ण ने कहा, "कल्पना करो कि ईश्वर तुम्हारा सबसे अच्छा दोस्त है। जिस दोस्त को तुम चित्रित कर सकते हो और बात कर सकते हो, उससे प्रेम करना आसान है, है ना?" उन्होंने यह भी कहा कि सबसे अच्छे भक्त सभी के प्रति दयालु होते हैं, आसानी से परेशान नहीं होते, और साझा करने में खुश रहते हैं।'
            },
            13: {
                title: 'क्षेत्र-क्षेत्रज्ञ विभाग योग',
                subtitle: 'पदार्थ और आत्मा',
                description: 'क्षेत्र (शरीर) और क्षेत्र के ज्ञाता (आत्मा) के बीच के अंतर को समझना',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे मेरे प्रिय कृष्ण, मैं प्रकृति [प्रकृति], भोक्ता [पुरुष], और क्षेत्र और क्षेत्र के ज्ञाता, और ज्ञान और ज्ञान के अंत के बारे में जानना चाहता हूँ।', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'यह शरीर, हे कुंतीपुत्र, क्षेत्र कहलाता है, और जो इस शरीर को जानता है उसे क्षेत्र का ज्ञाता कहा जाता है।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: 'सभी शरीरों में क्षेत्र का ज्ञाता कौन है?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'हे भरतवंशी, तुम्हें समझना चाहिए कि मैं भी सभी शरीरों में ज्ञाता हूँ, और इस शरीर और इसके ज्ञाता को समझना ज्ञान कहलाता है।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'गतिविधियों का यह क्षेत्र क्या है?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'पाँच महाभूत, मिथ्या अहंकार, बुद्धि, अव्यक्त, दस इंद्रियाँ और मन, पाँच इंद्रिय विषय, इच्छा, घृणा, सुख, दुख, समुच्चय, जीवन के लक्षण, और दृढ़ विश्वास—इन सभी को, संक्षेप में, गतिविधियों का क्षेत्र और उसकी अंतःक्रिया माना जाता है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'ज्ञान प्राप्त करने की प्रक्रिया क्या है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'विनम्रता; अभिमानहीनता; अहिंसा; सहिष्णुता; सरलता; एक प्रामाणिक आध्यात्मिक गुरु के पास जाना; स्वच्छता; स्थिरता; आत्म-नियंत्रण; इन्हें मैं ज्ञान घोषित करता हूँ।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'और ज्ञान का उद्देश्य क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'मैं अब ज्ञेय की व्याख्या करूँगा, जिसे जानकर तुम शाश्वत का स्वाद चखोगे। ब्रह्म, आत्मा, जो अनादि और मेरे अधीन है, इस भौतिक संसार के कारण और प्रभाव से परे है।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'आत्मा भौतिक प्रकृति के साथ कैसे अंतःक्रिया करती है?', emotion: 'दार्शनिक' },
                    { speaker: 'कृष्ण', text: 'भौतिक प्रकृति और जीवों को अनादि समझना चाहिए। उनके परिवर्तन और पदार्थ के गुण भौतिक प्रकृति के उत्पाद हैं। प्रकृति को सभी भौतिक कारणों और प्रभावों का कारण कहा जाता है, जबकि जीव इस संसार में विभिन्न कष्टों और भोगों का कारण है।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'तो आत्मा प्रकृति के संपर्क के कारण जीवन का अनुभव करती है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'भौतिक प्रकृति में जीव इस प्रकार जीवन के तरीकों का पालन करता है, प्रकृति के तीन गुणों का आनंद लेता है। यह उस भौतिक प्रकृति के साथ उसके जुड़ाव के कारण है। इस प्रकार वह विभिन्न प्रजातियों के बीच अच्छे और बुरे से मिलता है।', emotion: 'व्याख्यात्मक' },
                    { speaker: 'अर्जुन', text: 'क्या इस सब का कोई साक्षी है?', emotion: 'अनुमान' },
                    { speaker: 'कृष्ण', text: 'फिर भी इस शरीर में एक और है, एक दिव्य भोक्ता, जो भगवान है, सर्वोच्च स्वामी है, जो पर्यवेक्षक और अनुमति देने वाले के रूप में मौजूद है, और जिसे परमात्मा के रूप में जाना जाता है।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'इस सत्य का साक्षात्कार कैसे किया जा सकता है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'कुछ लोग ध्यान के माध्यम से अपने भीतर परमात्मा को देखते हैं, अन्य ज्ञान की खेती के माध्यम से, और फिर भी अन्य फल की इच्छा के बिना काम करके।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'और जो इतने उन्नत नहीं हैं, उनके बारे में क्या?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'फिर से वे भी हैं जो, यद्यपि आध्यात्मिक ज्ञान में पारंगत नहीं हैं, दूसरों से उनके बारे में सुनकर परम पुरुष की पूजा करना शुरू कर देते हैं। अधिकारियों से सुनने की उनकी प्रवृत्ति के कारण, वे भी जन्म और मृत्यु के मार्ग को पार कर जाते हैं।', emotion: 'समावेशी' },
                    { speaker: 'अर्जुन', text: 'जो वास्तव में देखता है उसकी दृष्टि क्या है?', emotion: 'दूरदर्शी' },
                    { speaker: 'कृष्ण', text: 'जो सभी शरीरों में व्यक्तिगत आत्मा के साथ परमात्मा को देखता है, और जो समझता है कि न तो आत्मा और न ही नश्वर शरीर के भीतर का परमात्मा कभी नष्ट होता है, वह वास्तव में देखता है।', emotion: 'प्रबुद्ध' },
                    { speaker: 'अर्जुन', text: 'तो आत्मा स्वयं कार्य नहीं करती?', emotion: 'समझ रहा है' },
                    { speaker: 'कृष्ण', text: 'जो देख सकता है कि सभी गतिविधियाँ शरीर द्वारा की जाती हैं, जो भौतिक प्रकृति से बना है, और देखता है कि आत्मा कुछ भी नहीं करती, वह वास्तव में देखता है।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'यह ज्ञान स्वतंत्रता की कुंजी लगता है।', emotion: 'संकल्पित' },
                    { speaker: 'कृष्ण', text: 'जो ज्ञान की आँखों से शरीर और शरीर के ज्ञाता के बीच का अंतर देखते हैं, और भौतिक प्रकृति में बंधन से मुक्ति की प्रक्रिया को भी समझ सकते हैं, वे परम लक्ष्य को प्राप्त करते हैं।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण पदार्थ और आत्मा, गतिविधियों के क्षेत्र और उसके ज्ञाता के बीच के अंतर की व्याख्या करते हैं, और कैसे ज्ञान मुक्ति की ओर ले जाता है।',
                teachings: 'शरीर गतिविधियों का क्षेत्र है, और आत्मा ज्ञाता है। परमात्मा हर हृदय में मौजूद है। इस ज्ञान को समझकर और परमात्मा की सेवा करके, व्यक्ति भौतिक कंडीशनिंग को पार कर जाता है।',
                moralLesson: 'हम अपने शरीर नहीं बल्कि शाश्वत आत्माएं हैं। इसे समझने से हमें सभी के साथ समान व्यवहार करने और अस्थायी चीजों से बहुत अधिक लगाव न रखने में मदद मिलती है।',
                kidsVersion: 'कृष्ण ने सिखाया कि हम अपना शरीर नहीं बल्कि अंदर की आत्मा हैं। जैसे हम अपने कपड़े नहीं हैं, वैसे ही हम अपना शरीर नहीं हैं। भगवान एक मित्र के रूप में सभी के हृदय में रहते हैं।'
            },
            14: {
                title: 'गुणत्रय विभाग योग',
                subtitle: 'प्रकृति के तीन गुण',
                description: 'भौतिक प्रकृति के तीन गुणों के बारे में एक बातचीत: अच्छाई, जुनून, और अज्ञान।',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'मैं तुम्हें फिर से इस सर्वोच्च ज्ञान, सभी ज्ञानों में सर्वश्रेष्ठ, की घोषणा करूँगा, जिसे जानकर सभी संतों ने परम सिद्धि प्राप्त की है।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'कृपया भौतिक प्रकृति के तीन गुणों की व्याख्या करें। वे जीव को कैसे बांधते हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'भौतिक प्रकृति में तीन गुण होते हैं—सत्त्व, रज और तम। जब शाश्वत जीव प्रकृति के संपर्क में आता है, हे महाबाहु अर्जुन, तो वह इन गुणों से बंध जाता है।', emotion: 'आधारभूत' },
                    { speaker: 'अर्जुन', text: 'सत्त्व गुण की प्रकृति क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'हे पापरहित, सत्त्व गुण, दूसरों से अधिक शुद्ध होने के कारण, प्रकाशमान है, और यह सभी पापपूर्ण प्रतिक्रियाओं से मुक्त करता है। उस गुण में स्थित लोग सुख और ज्ञान की भावना से बंध जाते हैं।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'और रज गुण?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'रज गुण असीमित इच्छाओं और लालसाओं से उत्पन्न होता है, हे कुंतीपुत्र, और इस कारण देहधारी जीव भौतिक सकाम कर्मों से बंधा होता है।', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'अर्जुन', text: 'तम गुण के बारे में क्या?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'हे भरतपुत्र, जान लो कि अज्ञान से उत्पन्न तम गुण, सभी देहधारी जीवों का मोह है। इस गुण के परिणाम पागलपन, आलस्य और नींद हैं, जो बद्ध आत्मा को बांधते हैं।', emotion: 'चेतावनी' },
                    { speaker: 'अर्जुन', text: 'ये गुण एक दूसरे के साथ कैसे प्रतिस्पर्धा करते हैं?', emotion: 'अवलोकनशील' },
                    { speaker: 'कृष्ण', text: 'कभी-कभी सत्त्व गुण प्रमुख हो जाता है, रज और तम गुणों को पराजित करता है। कभी-कभी रज गुण सत्त्व और तम को पराजित करता है। और अन्य समयों में तम गुण सत्त्व और रज को पराजित करता है।', emotion: 'व्याख्यात्मक' },
                    { speaker: 'अर्जुन', text: 'इनमें से प्रत्येक गुण में मरने वाले का क्या होता है?', emotion: 'परिणामी' },
                    { speaker: 'कृष्ण', text: 'जब कोई सत्त्व गुण में मरता है, तो वह महान संतों के शुद्ध उच्च लोकों को प्राप्त करता है। जब कोई रज गुण में मरता है, तो वह सकाम कर्मों में लगे लोगों के बीच जन्म लेता है; और जब कोई तम गुण में मरता है, तो वह पशु योनि में जन्म लेता है।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'इन गुणों को कैसे पार किया जा सकता है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'जब कोई इन तीन गुणों को पार करने में सक्षम होता है, तो वह जन्म, मृत्यु, वृद्धावस्था और उनके कष्टों से मुक्त हो सकता है और इस जीवन में भी अमृत का आनंद ले सकता है।', emotion: 'मुक्तिदायक' },
                    { speaker: 'अर्जुन', text: 'गुणों को पार कर चुके व्यक्ति के लक्षण क्या हैं?', emotion: 'विवेकी' },
                    { speaker: 'कृष्ण', text: 'जो प्रकाश, आसक्ति और मोह के उपस्थित होने पर घृणा नहीं करता या उनके गायब होने पर उनकी लालसा नहीं करता; जो भौतिक गुणों की इन सभी प्रतिक्रियाओं के माध्यम से अटूट और अविचलित रहता है, तटस्थ और दिव्य बना रहता है।', emotion: 'वर्णन करते हुए' },
                    { speaker: 'अर्जुन', text: 'ऐसा व्यक्ति कैसा व्यवहार करता है?', emotion: 'व्यवहारिक' },
                    { speaker: 'कृष्ण', text: 'जो आत्मा में स्थित है और सुख-दुख को समान मानता है; जो मिट्टी के ढेले, पत्थर और सोने के टुकड़े को समान दृष्टि से देखता है; जो वांछनीय और अवांछनीय के प्रति समान है; जो स्थिर है, प्रशंसा और निंदा में समान रूप से स्थित है।', emotion: 'समभाव' },
                    { speaker: 'अर्जुन', text: 'इस दिव्य अवस्था को प्राप्त करने का साधन क्या है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'जो सभी परिस्थितियों में अटूट, पूर्ण भक्ति सेवा में संलग्न होता है, वह तुरंत भौतिक प्रकृति के गुणों को पार कर जाता है और इस प्रकार ब्रह्म के स्तर पर आ जाता है।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण भौतिक प्रकृति के तीन गुणों—सत्त्व, रज, और तम—की व्याख्या करते हैं जो सभी जीवों को प्रभावित करते हैं। वे वर्णन करते हैं कि ये गुण आत्मा को कैसे बांधते हैं और कैसे कोई भक्ति सेवा के माध्यम से उन्हें पार कर सकता है।',
                teachings: 'प्रकृति के तीन गुण हमारे अस्तित्व को प्रभावित करते हैं। सत्त्व सुख और ज्ञान की ओर ले जाता है, रज तीव्र गतिविधि और इच्छा की ओर, और तम मोह की ओर। भक्ति सेवा में संलग्न होकर, हम इन गुणों से ऊपर उठ सकते हैं और आध्यात्मिक प्राप्ति कर सकते हैं।',
                moralLesson: 'हमारे कार्य और दृष्टिकोण प्रकृति के गुणों से प्रभावित होते हैं। अच्छाई के लिए प्रयास करके और आध्यात्मिक प्रथाओं में संलग्न होकर, हम निचले गुणों को दूर कर सकते हैं और उद्देश्य और स्पष्टता के जीवन की ओर बढ़ सकते हैं।',
                kidsVersion: 'कल्पना कीजिए कि आपके पास तीन तरह के चश्मे हैं। एक से सब कुछ खुश और उज्ज्वल दिखता है (सत्त्व), एक आपको दौड़ने और लाखों काम करने के लिए प्रेरित करता है (रज), और एक आपको नींद और भ्रमित महसूस कराता है (तम)। कृष्ण हमें सिखाते हैं कि कैसे इन सभी चश्मों को उतारकर चीजों को वैसे ही देखें जैसे वे वास्तव में हैं।'
            },

            15: {
                title: 'पुरुषोत्तम योग',
                subtitle: 'परम पुरुष का योग',
                description: 'कृष्ण भौतिक संसार को एक उल्टे बरगद के पेड़ के रूप में वर्णित करते हैं और अपनी पहचान परम पुरुष के रूप में प्रकट करते हैं।',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'कहा जाता है कि एक अविनाशी बरगद का पेड़ है जिसकी जड़ें ऊपर और शाखाएँ नीचे हैं और जिसके पत्ते वैदिक भजन हैं। जो इस पेड़ को जानता है वह वेदों का ज्ञाता है।', emotion: 'रूपक' },
                    { speaker: 'अर्जुन', text: 'एक उल्टा पेड़? यह क्या दर्शाता है?', emotion: 'उलझन में' },
                    { speaker: 'कृष्ण', text: 'यह पेड़ भौतिक संसार का प्रतिनिधित्व करता है। इसकी शाखाएँ नीचे और ऊपर फैली हुई हैं, जो भौतिक प्रकृति के तीन गुणों से पोषित होती हैं। इसकी जड़ें, जो मानव समाज के सकाम कर्म हैं, इस संसार से बंधी हुई हैं।', emotion: 'व्याख्यात्मक' },
                    { speaker: 'अर्जुन', text: 'इस उलझन से कैसे मुक्त हुआ जा सकता है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'इस पेड़ का वास्तविक रूप इस संसार में नहीं देखा जा सकता। वैराग्य के हथियार से इस दृढ़ता से जमे हुए पेड़ को काटना होगा। उसके बाद, एक ऐसे स्थान की तलाश करनी चाहिए जहाँ से जाने के बाद, कोई कभी वापस नहीं लौटता।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'इस भौतिक संसार के भीतर आत्मा की प्रकृति क्या है?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'इस बद्ध संसार में जीव मेरे शाश्वत आंशिक अंश हैं। बद्ध जीवन के कारण, वे मन सहित छह इंद्रियों के साथ बहुत कठिन संघर्ष कर रहे हैं।', emotion: 'प्रकट करते हुए' },
                    { speaker: 'अर्जुन', text: 'आत्मा एक शरीर से दूसरे शरीर में कैसे यात्रा करती है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'भौतिक संसार में जीव अपनी विभिन्न जीवन conceptions को एक शरीर से दूसरे शरीर में ले जाता है जैसे हवा सुगंध ले जाती है। इस प्रकार वह एक प्रकार का शरीर लेता है और फिर उसे छोड़कर दूसरा ले लेता है।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'अधिकांश लोग इसे क्यों नहीं देख सकते?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'मूर्ख यह नहीं समझ सकते कि एक जीव अपना शरीर कैसे छोड़ सकता है, न ही वे यह समझ सकते हैं कि वह प्रकृति के गुणों के प्रभाव में किस प्रकार का शरीर भोगता है। लेकिन जिसकी आँखें ज्ञान में प्रशिक्षित हैं वह यह सब देख सकता है।', emotion: 'विवेकी' },
                    { speaker: 'अर्जुन', text: 'सूर्य और चंद्रमा का प्रकाश कहाँ से आता है?', emotion: 'ब्रह्मांडीय' },
                    { speaker: 'कृष्ण', text: 'सूर्य की जो चमक पूरे संसार को रोशन करती है, चंद्रमा की चमक और अग्नि की चमक सब मुझसे ही हैं।', emotion: 'स्रोत' },
                    { speaker: 'अर्जुन', text: 'आप सभी जीवन को कैसे बनाए रखते हैं?', emotion: 'आश्चर्य' },
                    { speaker: 'कृष्ण', text: 'मैं प्रत्येक ग्रह में प्रवेश करता हूँ, और मेरी ऊर्जा से वे कक्षा में रहते हैं। मैं चंद्रमा बनता हूँ और इस प्रकार सभी सब्जियों को जीवन का रस प्रदान करता हूँ। मैं सभी जीवों के शरीरों में पाचन की अग्नि हूँ।', emotion: 'बनाए रखने वाला' },
                    { speaker: 'अर्जुन', text: 'ज्ञान और विस्मृति कहाँ से आते हैं?', emotion: 'दार्शनिक' },
                    { speaker: 'कृष्ण', text: 'मैं सभी के हृदय में बैठा हूँ, और मुझसे ही स्मृति, ज्ञान और विस्मृति आती है। सभी वेदों द्वारा, मैं ही जानने योग्य हूँ। वास्तव में, मैं वेदांत का संकलक हूँ, और मैं वेदों का ज्ञाता हूँ।', emotion: 'सर्वज्ञ' },
                    { speaker: 'अर्जुन', text: 'आप जिस परम पुरुष की बात करते हैं वह कौन है?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'दो प्रकार के प्राणी हैं, नश्वर और अविनाशी। भौतिक संसार में प्रत्येक जीव नश्वर है, और आध्यात्मिक संसार में प्रत्येक जीव अविनाशी कहलाता है। इन दोनों के अलावा, सबसे बड़ा जीवित व्यक्तित्व, परम आत्मा, अविनाशी भगवान स्वयं हैं।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: 'और वह परम पुरुष आप हैं?', emotion: 'समझ रहा है' },
                    { speaker: 'कृष्ण', text: 'क्योंकि मैं दिव्य हूँ, नश्वर और अविनाशी दोनों से परे, और क्योंकि मैं सबसे महान हूँ, मैं संसार और वेदों दोनों में उस परम पुरुष के रूप में प्रसिद्ध हूँ।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण भौतिक संसार का वर्णन एक उल्टे बरगद के पेड़ के रूप में करते हैं और बताते हैं कि वे ही परम पुरुष, पुरुषोत्तम हैं, जो नश्वर और अविनाशी दोनों से परे हैं।',
                teachings: 'भौतिक संसार एक अस्थायी और भ्रामक वास्तविकता है। वैराग्य विकसित करके और परम पुरुष के प्रति समर्पण करके, व्यक्ति मुक्ति प्राप्त कर सकता है। कृष्ण ही अंतिम वास्तविकता, हर चीज के स्रोत और पालक हैं।',
                moralLesson: 'हमें इस संसार की चीजों से बहुत अधिक लगाव नहीं रखना चाहिए, क्योंकि वे अस्थायी हैं। अपने आध्यात्मिक विकास और परम से संबंध पर ध्यान केंद्रित करके, हम सच्चा और स्थायी सुख पा सकते हैं।',
                kidsVersion: 'कृष्ण कहते हैं कि दुनिया एक विशाल, उल्टे पेड़ की तरह है। हम इसकी शाखाओं में उलझ सकते हैं, लेकिन अगर हमारे पास एक नक्शा (आध्यात्मिक ज्ञान) और एक तेज कुल्हाड़ी (वैराग्य) है, तो हम बाहर का रास्ता खोज सकते हैं और उनके साथ प्रकाश और खुशी की असली दुनिया में वापस आ सकते हैं।'
            },
            16: {
                title: 'दैवासुर संपद् विभाग योग',
                subtitle: 'दिव्य और आसुरी स्वभाव',
                description: 'कृष्ण दिव्य और आसुरी गुणों और उनके परिणामों का वर्णन करते हैं',
                dialogue: [
                    { speaker: 'कृष्ण', text: 'निर्भयता, अपने अस्तित्व की शुद्धि, आध्यात्मिक ज्ञान की साधना, दान, आत्म-नियंत्रण, यज्ञ का अनुष्ठान—ये दिव्य गुण दिव्य प्रकृति से संपन्न ईश्वरीय पुरुषों के हैं।', emotion: 'गुणों की सूची' },
                    { speaker: 'अर्जुन', text: 'अन्य दिव्य गुण क्या हैं?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'अहिंसा, सत्यता, क्रोध से मुक्ति, त्याग, शांति, दोषारोपण से विरक्ति, सभी जीवों के प्रति दया, लोभ से मुक्ति, सौम्यता, विनय, स्थिर संकल्प।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'और आसुरी गुण क्या हैं, हे कृष्ण?', emotion: 'विपरीत' },
                    { speaker: 'कृष्ण', text: 'अभिमान, दंभ, अहंकार, क्रोध, कठोरता और अज्ञान—ये गुण आसुरी प्रकृति वालों के हैं।', emotion: 'चेतावनी' },
                    { speaker: 'अर्जुन', text: 'ये दोनों स्वभाव कहाँ ले जाते हैं?', emotion: 'परिणामी' },
                    { speaker: 'कृष्ण', text: 'दिव्य गुण मुक्ति के लिए अनुकूल हैं, जबकि आसुरी गुण बंधन के लिए हैं। चिंता मत करो, हे पांडुपुत्र, क्योंकि तुम दिव्य गुणों के साथ पैदा हुए हो।', emotion: 'आश्वस्त' },
                    { speaker: 'अर्जुन', text: 'आसुरी प्रकृति वाले संसार को कैसे देखते हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'वे कहते हैं कि यह संसार असत्य है, बिना किसी आधार के, बिना किसी ईश्वर के नियंत्रण के। वे कहते हैं कि यह यौन इच्छा से उत्पन्न होता है और इसका कारण काम के अलावा कुछ नहीं है।', emotion: 'व्याख्यात्मक' },
                    { speaker: 'अर्जुन', text: 'जीवन के प्रति उनका दृष्टिकोण क्या है?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'वे मानते हैं कि इंद्रियों को संतुष्ट करना मानव सभ्यता की प्रमुख आवश्यकता है। इस प्रकार जीवन के अंत तक उनकी चिंता अथाह है। सैकड़ों-हजारों इच्छाओं के जाल में बंधे और काम और क्रोध में डूबे हुए, वे इंद्रिय भोग के लिए अवैध तरीकों से धन सुरक्षित करते हैं।', emotion: 'आलोचनात्मक' },
                    { speaker: 'अर्जुन', text: 'यह एक दयनीय अस्तित्व लगता है।', emotion: 'अवलोकनशील' },
                    { speaker: 'कृष्ण', text: 'इन सभी चिंताओं से भ्रमित और भ्रम के जाल में बंधे हुए, वे इंद्रिय भोग से बहुत अधिक जुड़ जाते हैं और नरक में गिर जाते हैं।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'क्या ऐसे लोग कभी आपको प्राप्त करते हैं?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'जो ईर्ष्यालु और शरारती हैं, जो मनुष्यों में सबसे नीचे हैं, मैं उन्हें लगातार भौतिक अस्तित्व के सागर में, विभिन्न आसुरी प्रजातियों में डालता हूँ।', emotion: 'न्याय' },
                    { speaker: 'अर्जुन', text: 'इस नारकीय जीवन के द्वार क्या हैं?', emotion: 'सावधान' },
                    { speaker: 'कृष्ण', text: 'इस नरक के तीन द्वार हैं—काम, क्रोध, और लोभ। हर समझदार व्यक्ति को इन्हें छोड़ देना चाहिए, क्योंकि वे आत्मा के पतन की ओर ले जाते हैं।', emotion: 'गंभीर चेतावनी' },
                    { speaker: 'अर्जुन', text: 'और जो इन तीन द्वारों से बचता है?', emotion: 'आशावान' },
                    { speaker: 'कृष्ण', text: 'जो नरक के इन तीन द्वारों से बच गया है, हे कुंतीपुत्र, वह आत्म-साक्षात्कार के लिए अनुकूल कार्य करता है और इस प्रकार धीरे-धीरे परम गंतव्य को प्राप्त करता है।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'किसी को क्या करना चाहिए और क्या नहीं करना चाहिए, यह कैसे जानना चाहिए?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'जो शास्त्रीय आदेशों को त्याग देता है और अपनी मनमर्जी के अनुसार कार्य करता है, वह न तो सिद्धि, न सुख, और न ही परम गंतव्य को प्राप्त करता है। इसलिए व्यक्ति को शास्त्रों के नियमों द्वारा समझना चाहिए कि कर्तव्य क्या है और क्या नहीं।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'तो शास्त्र ही सभी कार्यों में मेरे मार्गदर्शक होने चाहिए?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'हाँ, शास्त्रीय नियमों को जानकर, तुम्हें इस तरह से कार्य करना चाहिए कि तुम धीरे-धीरे उन्नत हो सको।', emotion: 'निर्णायक' },
                    { speaker: 'अर्जुन', text: 'आपके शब्दों ने मुझे धर्म के मार्ग पर स्पष्टता दी है।', emotion: 'प्रबुद्ध' },
                    { speaker: 'कृष्ण', text: 'दिव्य मार्ग का अनुसरण करो, अर्जुन, क्योंकि यह मुझ तक ले जाता है। आसुरी को त्यागो, क्योंकि यह केवल बंधन और दुख की ओर ले जाता है।', emotion: 'आशीर्वाद' }
                ],
                summary: 'कृष्ण दिव्य और आसुरी गुणों, उनके परिणामों का वर्णन करते हैं, और आध्यात्मिक विकास के लिए शास्त्रीय मार्गदर्शन का पालन करने पर जोर देते हैं।',
                teachings: 'निर्भयता, पवित्रता, और ईमानदारी जैसे दिव्य गुण मुक्ति की ओर ले जाते हैं। अभिमान, क्रोध, और लोभ जैसे आसुरी गुण बंधन की ओर ले जाते हैं। शास्त्र उचित आचरण के लिए मार्गदर्शन प्रदान करते हैं।',
                moralLesson: 'हमें दया, ईमानदारी और आत्म-नियंत्रण जैसे अच्छे गुण विकसित करने चाहिए, और क्रोध, लोभ और अभिमान जैसे बुरे गुणों से बचना चाहिए।',
                kidsVersion: 'कृष्ण ने अच्छे और बुरे गुणों के बारे में सिखाया। अच्छे लोग दयालु, ईमानदार और मददगार होते हैं। बुरे लोग गुस्सैल, लालची और मतलबी होते हैं। हमें हमेशा अच्छा बनने की कोशिश करनी चाहिए।'
            },
            17: {
                title: 'श्रद्धात्रय विभाग योग',
                subtitle: 'श्रद्धा के तीन विभाग',
                description: 'श्रद्धा के तीन प्रकारों—सत्त्व, रज, और तम—और वे पूजा, भोजन, और दान में कैसे प्रकट होते हैं, इसका अन्वेषण।',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे कृष्ण, उन लोगों की स्थिति क्या है जो शास्त्र के सिद्धांतों का पालन नहीं करते लेकिन अपनी कल्पना के अनुसार पूजा करते हैं? क्या वे सत्त्व में हैं, रज में या तम में?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'देहधारी आत्मा द्वारा अर्जित प्रकृति के गुणों के अनुसार, किसी की श्रद्धा तीन प्रकार की हो सकती है—सत्त्व में, रज में या तम में। अब इसके बारे में सुनो।', emotion: 'वर्गीकृत करते हुए' },
                    { speaker: 'अर्जुन', text: 'श्रद्धा किसी के चरित्र को कैसे निर्धारित करती है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'हे भरतपुत्र, प्रकृति के विभिन्न गुणों के तहत किसी के अस्तित्व के अनुसार, व्यक्ति एक विशेष प्रकार की श्रद्धा विकसित करता है। जीव को उसके द्वारा अर्जित गुणों के अनुसार एक विशेष श्रद्धा का कहा जाता है।', emotion: 'व्याख्यात्मक' },
                    { speaker: 'अर्जुन', text: 'ये विभिन्न प्रकार की श्रद्धा पूजा में कैसे प्रकट होती हैं?', emotion: 'पूछताछ' },
                    { speaker: 'कृष्ण', text: 'सत्त्व गुण वाले लोग देवताओं की पूजा करते हैं; रज गुण वाले राक्षसों की पूजा करते हैं; और तम गुण वाले भूत-प्रेतों की पूजा करते हैं।', emotion: 'अंतर' },
                    { speaker: 'अर्जुन', text: 'और यह हमारे द्वारा खाए जाने वाले भोजन पर कैसे लागू होता है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'सत्त्व गुण वालों को प्रिय भोजन जीवन की अवधि बढ़ाते हैं, किसी के अस्तित्व को शुद्ध करते हैं और शक्ति, स्वास्थ्य, सुख और संतोष देते हैं। ऐसे भोजन रसदार, वसायुक्त, पौष्टिक और हृदय को प्रिय होते हैं।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'रज और तम में भोजन के बारे में क्या?', emotion: 'विपरीत' },
                    { speaker: 'कृष्ण', text: 'जो भोजन बहुत कड़वे, बहुत खट्टे, नमकीन, गर्म, तीखे, सूखे और जलने वाले होते हैं, वे रज गुण वालों को प्रिय होते हैं। ऐसे भोजन दुख, कष्ट और बीमारी का कारण बनते हैं। खाने से तीन घंटे से अधिक पहले तैयार किया गया भोजन, जो बेस्वाद, सड़ा हुआ और दुर्गंधयुक्त हो, और अवशेषों और अछूत चीजों से युक्त भोजन तम गुण वालों को प्रिय होता है।', emotion: 'चेतावनी' },
                    { speaker: 'अर्जुन', text: 'गुण यज्ञ को कैसे प्रभावित करते हैं?', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'कृष्ण', text: 'शास्त्र के निर्देशों के अनुसार, कर्तव्य के रूप में, जो कोई फल की इच्छा नहीं रखते, उनके द्वारा किया गया यज्ञ सत्त्व गुण का होता है।', emotion: 'मूल्यांकन' },
                    { speaker: 'अर्जुन', text: 'और तपस्या?', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'शरीर की तपस्या में परम भगवान, ब्राह्मणों, आध्यात्मिक गुरु, और पिता और माता जैसे वरिष्ठों की पूजा, और स्वच्छता, सरलता, ब्रह्मचर्य और अहिंसा शामिल हैं।', emotion: 'शिक्षाप्रद' },
                    { speaker: 'अर्जुन', text: 'विभिन्न गुणों में दान के बारे में क्या?', emotion: 'विवेकी' },
                    { speaker: 'कृष्ण', text: 'कर्तव्य के रूप में, वापसी की उम्मीद के बिना, उचित समय और स्थान पर, और एक योग्य व्यक्ति को दिया गया दान सत्त्व गुण में माना जाता है।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: '"ॐ तत् सत्" का क्या महत्व है?', emotion: 'पवित्र' },
                    { speaker: 'कृष्ण', text: 'सृष्टि की शुरुआत से, तीन शब्द ॐ, तत् और सत् का उपयोग परम सत्य को इंगित करने के लिए किया गया था। इसलिए, श्रद्धा के साथ किए गए यज्ञ, दान और तपस्या के कार्य हमेशा "ॐ" के साथ शुरू होते हैं ताकि परम को प्राप्त किया जा सके।', emotion: 'गहन' },
                    { speaker: 'अर्जुन', text: 'यदि ये कार्य बिना श्रद्धा के किए जाएं तो क्या होगा?', emotion: 'चिंतित' },
                    { speaker: 'कृष्ण', text: 'परम में श्रद्धा के बिना यज्ञ, दान या तपस्या के रूप में किया गया कुछ भी अस्थायी है। इसे "असत्" कहा जाता है और यह इस जीवन और अगले दोनों में बेकार है।', emotion: 'निश्चित' },
                    { speaker: 'अर्जुन', text: 'तो श्रद्धा सबसे आवश्यक घटक है?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'हाँ, अर्जुन। श्रद्धा, जब सत्त्व गुण में स्थित हो और शास्त्र द्वारा निर्देशित हो, तो व्यक्ति को उच्चतम पूर्णता तक पहुँचाती है।', emotion: 'निर्णायक' }
                ],
                summary: 'कृष्ण बताते हैं कि श्रद्धा तीन गुणों में से एक हो सकती है: सत्त्व, रज, या तम। यह किसी की पूजा, भोजन, तपस्या, और दान को प्रभावित करता है। वे इस बात पर जोर देते हैं कि बिना श्रद्धा के किया गया कोई भी आध्यात्मिक अभ्यास अंततः बेकार है।',
                teachings: 'पौष्टिक भोजन चुनकर, सम्मानपूर्वक पूजा करके, और बिना किसी अपेक्षा के दान देकर अपनी श्रद्धा को सत्त्व गुण के साथ संरेखित करें। वाक्यांश "ॐ तत् सत्" परम सत्य को दर्शाता है। श्रद्धा सभी आध्यात्मिक प्रथाओं में आवश्यक घटक है।',
                moralLesson: 'आपकी श्रद्धा की गुणवत्ता आपके जीवन की गुणवत्ता को निर्धारित करती है। शुद्ध इरादों और बिना स्वार्थी इच्छाओं के सत्त्व में कार्य करने का प्रयास करें। यह आध्यात्मिक विकास और खुशी की ओर ले जाएगा।',
                kidsVersion: 'कल्पना कीजिए कि आपके पास तीन तरह के चश्मे हैं: साफ, लाल, और ग्रे। जब आप साफ चश्मा (सत्त्व) पहनते हैं, तो आप सब कुछ अच्छी तरह से देखते हैं। जब आप लाल चश्मा (रज) पहनते हैं, तो सब कुछ उग्र दिखता है और आप और अधिक चाहते हैं। जब आप ग्रे चश्मा (तम) पहनते हैं, तो सब कुछ अंधेरा और भ्रमित करने वाला होता है। कृष्ण हमें हमेशा अच्छी चीजों में विश्वास करके, स्वस्थ भोजन खाकर, और दूसरों के प्रति दयालु होकर साफ चश्मे का उपयोग करना सिखाते हैं।'
            },
            18: {
                title: 'मोक्ष संन्यास योग',
                subtitle: 'त्याग की पूर्णता',
                description: 'कृष्ण त्याग, निःस्वार्थ कर्म, और पूर्ण समर्पण के माध्यम से मुक्ति के मार्ग पर अपने अंतिम उपदेश प्रदान करते हैं।',
                dialogue: [
                    { speaker: 'अर्जुन', text: 'हे महाबाहु, मैं त्याग [त्याग] और संन्यास [संन्यास] के उद्देश्य को समझना चाहता हूँ।', emotion: 'अन्वेषी' },
                    { speaker: 'कृष्ण', text: 'भौतिक इच्छा पर आधारित गतिविधियों का त्याग करना ही महान विद्वान पुरुष संन्यास कहते हैं। और सभी गतिविधियों के परिणामों का त्याग करना ही बुद्धिमान त्याग कहते हैं।', emotion: 'परिभाषित करते हुए' },
                    { speaker: 'अर्जुन', text: 'क्या सभी कर्मों का त्याग कर देना चाहिए?', emotion: 'प्रश्नवाचक' },
                    { speaker: 'कृष्ण', text: 'यज्ञ, दान और तपस्या के कार्य नहीं छोड़ने चाहिए; उन्हें करना ही चाहिए। वास्तव में, यज्ञ, दान और तपस्या महान आत्माओं को भी शुद्ध करते हैं।', emotion: 'स्पष्ट करते हुए' },
                    { speaker: 'अर्जुन', text: 'सभी कर्मों की सिद्धि के लिए पाँच कारण क्या हैं?', emotion: 'जिज्ञासु' },
                    { speaker: 'कृष्ण', text: 'कर्म का स्थान [शरीर], कर्ता, विभिन्न इंद्रियाँ, कई अलग-अलग प्रकार के प्रयास, और अंततः परमात्मा—ये कर्म के पाँच कारक हैं।', emotion: 'विश्लेषणात्मक' },
                    { speaker: 'अर्जुन', text: 'प्रकृति के गुण विभिन्न प्रकार के कार्यों से कैसे संबंधित हैं?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'एक ब्राह्मण, क्षत्रिय, वैश्य, और शूद्र का कार्य अलग-अलग होता है, जैसे उनके काम के गुण भी, हे शत्रु का दमन करने वाले।', emotion: 'वर्णनात्मक' },
                    { speaker: 'अर्जुन', text: 'कोई अपना काम करके पूर्णता कैसे प्राप्त कर सकता है?', emotion: 'व्यावहारिक' },
                    { speaker: 'कृष्ण', text: 'अपने काम के गुणों का पालन करके, प्रत्येक व्यक्ति पूर्ण हो सकता है। भगवान की पूजा करके, जो सभी प्राणियों का स्रोत है और जो सर्वव्यापी है, एक व्यक्ति अपना काम करके पूर्णता प्राप्त कर सकता है।', emotion: 'मार्गदर्शक' },
                    { speaker: 'अर्जुन', text: 'तो अपना कर्तव्य करना बेहतर है, भले ही अपूर्ण रूप से?', emotion: 'समझ' },
                    { speaker: 'कृष्ण', text: 'दूसरे के व्यवसाय को स्वीकार करने और उसे पूरी तरह से करने की तुलना में अपने व्यवसाय में संलग्न होना बेहतर है, भले ही कोई उसे अपूर्ण रूप से करे। किसी की प्रकृति के अनुसार निर्धारित कर्तव्य कभी भी पापपूर्ण प्रतिक्रियाओं से प्रभावित नहीं होते हैं।', emotion: 'पुष्टि करते हुए' },
                    { speaker: 'अर्जुन', text: 'जिसने यह पूर्णता प्राप्त कर ली है वह कैसे कार्य करता है?', emotion: 'अवलोकनशील' },
                    { speaker: 'कृष्ण', text: 'जो आत्म-नियंत्रित और अनासक्त है और जो सभी भौतिक भोगों की उपेक्षा करता है, वह त्याग के अभ्यास से, प्रतिक्रिया से मुक्ति की उच्चतम पूर्ण अवस्था प्राप्त कर सकता है।', emotion: 'वर्णन करते हुए' },
                    { speaker: 'अर्जुन', text: 'सभी ज्ञानों में सबसे गोपनीय क्या है?', emotion: 'उत्सुक' },
                    { speaker: 'कृष्ण', text: 'क्योंकि तुम मेरे बहुत प्रिय मित्र हो, मैं तुमसे अपना सर्वोच्च निर्देश, सभी का सबसे गोपनीय ज्ञान कह रहा हूँ। इसे मुझसे सुनो, क्योंकि यह तुम्हारे लाभ के लिए है।', emotion: 'प्रेममय' },
                    { speaker: 'अर्जुन', text: 'मैं सुनने के लिए तैयार हूँ, कृष्ण।', emotion: 'ध्यान से' },
                    { speaker: 'कृष्ण', text: 'हमेशा मेरे बारे में सोचो, मेरे भक्त बनो, मेरी पूजा करो और मुझे अपना प्रणाम अर्पित करो। इस प्रकार तुम बिना चूके मेरे पास आओगे। मैं तुम्हें यह वचन देता हूँ क्योंकि तुम मेरे बहुत प्रिय मित्र हो।', emotion: 'वचन देते हुए' },
                    { speaker: 'अर्जुन', text: 'और अंतिम निर्देश?', emotion: 'प्रतीक्षारत' },
                    { speaker: 'कृष्ण', text: 'सभी प्रकार के धर्मों को त्याग दो और केवल मेरी शरण में आओ। मैं तुम्हें सभी पापपूर्ण प्रतिक्रियाओं से मुक्त कर दूँगा। डरो मत।', emotion: 'परम' },
                    { speaker: 'अर्जुन', text: 'मेरे प्रिय कृष्ण, हे अच्युत, मेरा भ्रम अब दूर हो गया है। आपकी कृपा से मैंने अपनी स्मृति पुनः प्राप्त कर ली है। मैं अब दृढ़ और संदेह से मुक्त हूँ और आपके निर्देशों के अनुसार कार्य करने के लिए तैयार हूँ।', emotion: 'संकल्पित' }
                ],
                summary: 'इस अंतिम अध्याय में, कृष्ण सिखाते हैं कि सच्चा त्याग परिणामों के प्रति आसक्ति के बिना अपने कर्तव्यों का पालन करना है। मुक्ति का अंतिम मार्ग पूरी तरह से ईश्वर के प्रति समर्पण करना है, जो अपने भक्तों को सभी पापों और भयों से मुक्त करने का वचन देते हैं।',
                teachings: 'अपने कर्तव्यों का पालन बिना आसक्ति के करें। उच्चतम आध्यात्मिक अभ्यास हमेशा ईश्वर के बारे में सोचना, उनका भक्त बनना, और उनके प्रति समर्पण करना है। यह मार्ग अंतिम स्वतंत्रता और शांति की ओर ले जाता है।',
                moralLesson: 'सबसे बड़ा साहस और ज्ञान का कार्य एक उच्च शक्ति में विश्वास करना और अपना जीवन उसे समर्पित करना है। जब आप नियंत्रण छोड़ देते हैं, तो आप सच्ची स्वतंत्रता और उद्देश्य पाते हैं।',
                kidsVersion: 'कल्पना कीजिए कि आप एक बड़े जहाज पर हैं, और कप्तान ईश्वर है। सबसे अच्छी बात यह है कि कप्तान पर भरोसा करें और उसके निर्देशों का पालन करें। कृष्ण ने अर्जुन से कहा कि वह उन पर पूरी तरह से भरोसा करे, और वह सब कुछ संभाल लेंगे। जब हम ईश्वर पर भरोसा करते हैं, तो हमें किसी भी चीज के बारे में चिंता करने की ज़रूरत नहीं है।'
            }
        }
    },
    // Telugu translations
    te: {
        ui: {
            dialogueTitle: 'పవిత్ర సంభాషణ',
            krishnaName: 'శ్రీకృష్ణుడు',
            arjunaName: 'అర్జునుడు',
            askQuestionBtn: 'ప్రశ్న అడగండి',
            answerBtn: 'దివ్య జవాబు',
            summaryTitle: 'అధ్యాయ సారాంశం',
            teachingsTitle: 'ముఖ్య బోధనలు',
            progressText: 'మీ యాత్రను ప్రారంభించడానికి ఒక అధ్యాయాన్ని ఎంచుకోండి!',
            welcomeMessage: {
                title: '🙏 పవిత్ర సంభాషణకు స్వాగతం 🙏',
                subtitle: 'కృష్ణ మరియు అర్జునుడి మధ్య దివ్య సంభాషణను ప్రారంభించడానికి పైన నుండి ఒక అధ్యాయాన్ని ఎంచుకోండి'
            }
        },
        chapters: {
            1: {
                title: 'అర్జున విషాద యోగం',
                subtitle: 'సైన్యాలను గమనించడం',
                description: 'కురుక్షేత్ర యుద్ధభూమిలో నిలబడిన అర్జునుడు, ఎదుటి సైన్యంలో తన బంధువులను, గురువులను చూసి నిరాశకు లోనై, అతని నైతిక సంక్షోభానికి దారితీసే ప్రారంభ అధ్యాయం.',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా, దయచేసి నా రథాన్ని రెండు సైన్యాల మధ్యకు నడుపు, తద్వారా ఇక్కడ యుద్ధానికి ఆసక్తిగా నిలబడిన వారిని నేను చూడగలను.', emotion: 'నిశ్చయం' },
                    { speaker: 'కృష్ణుడు', text: 'చూడు, ఓ పార్థా, ఇక్కడ సమావేశమైన కురులందరినీ.', emotion: 'శాంతం' },
                    { speaker: 'అర్జునుడు', text: 'నా సొంత బంధువులను, గురువులను, మామలను, సోదరులను చూస్తున్నాను. నా అవయవాలు బలహీనపడుతున్నాయి, నోరు పొడిబారిపోతోంది, నా శరీరం వణుకుతోంది.', emotion: 'విషాదంలో' },
                    { speaker: 'కృష్ణుడు', text: 'వారిని గమనించు, అర్జునా, ఎందుకంటే నువ్వు ఎవరిని ఎదుర్కొంటున్నావో అర్థం చేసుకోవాలి.', emotion: 'గమనిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా! నాకు విజయం, రాజ్యం, లేదా సంతోషం వద్దు! రాజ్యం, లేదా జీవితం కూడా ఏమి ప్రయోజనం, ఎవరి కోసం మనం వాటిని కోరుకుంటున్నామో వారే ఇక్కడ యుద్ధానికి గుమిగూడినప్పుడు?', emotion: 'వేదన' },
                    { speaker: 'కృష్ణుడు', text: 'హృదయపు ఈ బలహీనత నీలాంటి గొప్ప యోధునికి తగదు, అర్జునా.', emotion: 'గద్దిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'నాకు పూజనీయులైన భీష్ముడు, ద్రోణుడులకు వ్యతిరేకంగా నేను ఎలా పోరాడగలను? ఈ గొప్ప ఆత్మలను చంపడం కన్నా భిక్షాటనతో జీవించడం మేలు.', emotion: 'సంఘర్షణ' },
                    { speaker: 'కృష్ణుడు', text: '(నిశ్శబ్దంగా వింటూ, అర్జునుడు తన గందరగోళాన్ని వ్యక్తం చేయడానికి అనుమతిస్తున్నాడు)', emotion: 'ఓపిక' },
                    { speaker: 'అర్జునుడు', text: 'మనం మన సొంత బంధువులను చంపితే, పాపం మనల్ని ఆవరిస్తుంది. కుటుంబ నాశనంతో, ప్రాచీన సంప్రదాయాలు నశించిపోతాయి, మరియు అరాచకం ప్రబలుతుంది.', emotion: 'భయంతో' },
                    { speaker: 'కృష్ణుడు', text: '(అతని ముఖభావం ప్రశాంతంగా ఉంది, అర్జునుడి దుఃఖపు తుఫానులో నిశ్శబ్ద లంగరు)', emotion: 'ప్రశాంతం' },
                    { speaker: 'అర్జునుడు', text: 'అరాచకం ప్రబలంగా ఉన్నప్పుడు, కుటుంబంలోని స్త్రీలు భ్రష్టుపట్టిపోతారు, దీనివల్ల అవాంఛిత సంతానం పుడుతుంది, ఇది కుటుంబాన్ని, దాని నాశకులను నరకానికి దారి తీస్తుంది.', emotion: 'వ్యాకులం' },
                    { speaker: 'కృష్ణుడు', text: 'తక్షణ పరిణామాలకు అతీతంగా ఆలోచించు, అర్జునా. ధర్మం యొక్క శాశ్వత నియమాన్ని పరిగణనలోకి తీసుకో.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'అయ్యో, ఎంత విచిత్రం, మనం రాజభోగాల కోరికతో ప్రేరేపించబడి ఒక గొప్ప పాపం చేయడానికి సిద్ధమవుతున్నాము.', emotion: 'విలపిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: '(ఒక కారుణ్య దృక్కు, అర్జునుడి దుఃఖం యొక్క లోతును అర్థం చేసుకుంటున్నాడు)', emotion: 'కరుణ' },
                    { speaker: 'అర్జునుడు', text: 'నాకు ఇది మేలు, ధృతరాష్ట్రుని కుమారులు, ఆయుధాలతో, నన్ను నిరాయుధుడిగా, ప్రతిఘటించకుండా యుద్ధభూమిలో చంపితే.', emotion: 'శరణాగతి' },
                    { speaker: 'కృష్ణుడు', text: 'నీ దుఃఖం నీ వివేకాన్ని కప్పివేస్తోంది. ఇది యోధుని మార్గం కాదు.', emotion: 'దృఢంగా' },
                    { speaker: 'అర్జునుడు', text: 'యుద్ధంలో నా సొంత బంధువులను చంపడంలో నాకు ఏ మంచీ కనిపించడం లేదు. నేను పోరాడను.', emotion: 'నిర్ణయించుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'స్పష్టత వస్తుంది. మొదట, నీవు నీ గందరగోళం యొక్క లోతును చూడాలి.', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: '(తన ధనుర్భాణాలను పక్కన పెట్టి, అర్జునుడు రథం మీద కూర్చుంటాడు, అతని మనస్సు దుఃఖంతో నిండిపోయింది)', emotion: 'నిండిపోయిన' },
                    { speaker: 'కృష్ణుడు', text: 'హృదయం యొక్క ఈ చిన్న బలహీనతను విడిచిపెట్టి లేచి నిలబడు, ఓ శత్రువులను జయించేవాడా!', emotion: 'ఆదేశిస్తున్న' }
                ],
                summary: 'అర్జునుడు తన బంధువులను మరియు గురువులను యుద్ధానికి సిద్ధంగా చూసి నైతిక గందరగోళంలో పడతాడు.',
                teachings: 'కృష్ణుడు ధర్మం యొక్క భావనను మరియు ఆత్మ యొక్క అమరత్వాన్ని పరిచయం చేస్తాడు.',
                moralLesson: 'కొన్నిసార్లు జీవితంలో కఠినమైన నిర్ణయాలు తీసుకోవలసి ఉంటుంది. గందరగోళంలో ఉన్నప్పుడు, మనం తెలివైన గురువుల నుండి మార్గదర్శకత్వం కోరాలి.',
                kidsVersion: 'అర్జునుడు తన కుటుంబాన్ని యుద్ధంలో చూసి బాధపడ్డాడు. కృష్ణుడు చెప్పాడు, కొన్నిసార్లు సరైన పని చేయడం కష్టంగా ఉంటుంది.'
            },
            2: {
                title: 'సాంఖ్య యోగం',
                subtitle: 'జ్ఞాన యోగం',
                description: 'అర్జునుడి శరణాగతి మరియు కృష్ణుడు అమర ఆత్మపై ఉపదేశం',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'ఈ క్లిష్ట సమయంలో నీకు ఈ నిరాశ ఎందుకు కలిగింది? ఇది ఒక గొప్ప వ్యక్తికి తగినది కాదు. ఇది స్వర్గానికి దారితీయదు, అపకీర్తికి దారితీస్తుంది.', emotion: 'గద్దిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'కానీ నేను యుద్ధంలో భీష్ముడు మరియు ద్రోణుడిపై బాణాలతో ఎలా దాడి చేయగలను? వారు నా పూజకు అర్హులు!', emotion: 'సంఘర్షణ' },
                    { speaker: 'కృష్ణుడు', text: 'నీవు శోకానికి అర్హులు కాని వారి కోసం శోకిస్తున్నావు, అయినప్పటికీ జ్ఞానం యొక్క మాటలు మాట్లాడుతున్నావు. జ్ఞానులు జీవించి ఉన్నవారి కోసం లేదా మరణించిన వారి కోసం విలపించరు.', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: 'నా కర్తవ్యం గురించి నేను గందరగోళంలో ఉన్నాను. నేను నీ శిష్యుడిగా శరణు వేడుతున్నాను. దయచేసి నాకు ఏది ఉత్తమమో బోధించు.', emotion: 'శరణాగతి' },
                    { speaker: 'కృష్ణుడు', text: 'నేను లేని సమయం ఎప్పుడూ లేదు, నీవు, లేదా ఈ రాజులందరూ; భవిష్యత్తులో కూడా మనలో ఎవరూ ఉనికిలో లేకుండా పోరు.', emotion: 'ప్రకాశిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అది ఎలా సాధ్యం? శరీరాలు పుడతాయి మరియు చనిపోతాయి.', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'దేహధారి ఆత్మ ఈ శరీరంలో బాల్యం నుండి యవ్వనానికి మరియు వృద్ధాప్యానికి నిరంతరం వెళుతున్నట్లే, మరణం వద్ద ఆత్మ మరొక శరీరంలోకి వెళుతుంది. గంభీరమైన వ్యక్తి అటువంటి మార్పుతో కలవరపడడు.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'కానీ ఆనందం మరియు దుఃఖం యొక్క అనుభూతులు చాలా నిజమైనవి, కృష్ణా.', emotion: 'బాధతో' },
                    { speaker: 'కృష్ణుడు', text: 'ఇవి తాత్కాలికమైనవి, ఇంద్రియ జ్ఞానం నుండి ఉత్పన్నమవుతాయి. కలవరపడకుండా వాటిని సహించడం నేర్చుకోవాలి.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, ఆత్మకు ఎప్పుడూ హాని జరగదా?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఆత్మ ఎప్పుడూ పుట్టదు లేదా చనిపోదు. అది పుట్టనిది, శాశ్వతమైనది, ఎల్లప్పుడూ ఉనికిలో ఉన్నది మరియు ఆదిమమైనది. శరీరం చంపబడినప్పుడు అది చంపబడదు.', emotion: 'భరోసా' },
                    { speaker: 'అర్జునుడు', text: 'దీనిని మరింత వివరించగలరా? నేను ఈ సత్యాన్ని ఎలా గ్రహించగలను?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'ఒక వ్యక్తి పాత బట్టలను విడిచిపెట్టి కొత్తవి ధరించినట్లే, ఆత్మ పాత మరియు పనికిరాని శరీరాలను విడిచిపెట్టి కొత్త భౌతిక శరీరాలను స్వీకరిస్తుంది.', emotion: 'ఉదాహరణ' },
                    { speaker: 'అర్జునుడు', text: 'ఆత్మ శాశ్వతమైనది అయితే, నేను ఎందుకు పోరాడాలి? ఈ చర్య యొక్క ప్రయోజనం ఏమిటి?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'క్షత్రియుడిగా నీ నిర్దిష్ట కర్తవ్యాన్ని పరిగణనలోకి తీసుకుంటే, ధార్మిక సూత్రాలపై పోరాడటం కంటే నీకు మంచి పని మరొకటి లేదని తెలుసుకోవాలి. నీవు పోరాడే నీ ధార్మిక కర్తవ్యాన్ని నిర్వర్తించకపోతే, నీవు ఖచ్చితంగా నీ విధులను నిర్లక్ష్యం చేసిన పాపానికి గురవుతావు మరియు తద్వారా యోధుడిగా నీ కీర్తిని కోల్పోతావు.', emotion: 'ఆదేశిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'కానీ ఫలితం సంగతేంటి? చంపిన పాపం?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'నీకు నీ నిర్దేశిత కర్తవ్యాన్ని నిర్వర్తించే హక్కు ఉంది, కానీ కర్మ ఫలాలకు నీవు అర్హుడు కాదు. నీ కార్యకలాపాల ఫలితాలకు నిన్ను ఎప్పుడూ కారణంగా భావించకు, మరియు నీ కర్తవ్యాన్ని చేయకుండా ఉండటానికి ఎప్పుడూ ఆసక్తి చూపకు.', emotion: 'గంభీరమైన' },
                    { speaker: 'అర్జునుడు', text: 'ఎవరి చైతన్యం ఇలా దివ్యత్వంలో లీనమై ఉంటుందో ఆ వ్యక్తి స్వభావం ఏమిటి? అతను ఎలా మాట్లాడతాడు, అతని భాష ఏమిటి? అతను ఎలా కూర్చుంటాడు, మరియు ఎలా నడుస్తాడు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'అతను ఇంద్రియ సుఖాల కోసం అన్ని కోరికలను విడిచిపెట్టినవాడు, ఆసక్తి, భయం మరియు కోపం నుండి విముక్తుడైనవాడు. అతని మనస్సు స్థిరంగా ఉంటుంది మరియు త్రివిధ దుఃఖాలచే కలవరపడదు.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'ఈ స్థితి చాలా శాంతియుతంగా అనిపిస్తుంది. శక్తివంతమైన ఇంద్రియాలను ఎలా నియంత్రించాలి?', emotion: 'ప్రేరణ' },
                    { speaker: 'కృష్ణుడు', text: 'ఎవరైతే తన ఇంద్రియాలను నిగ్రహించి, వాటిని పూర్తి నియంత్రణలో ఉంచుకుని, తన చైతన్యాన్ని నాపై స్థిరపరుస్తారో, అతను స్థిరమైన ప్రజ్ఞ కలవాడిగా పిలువబడతాడు.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'కృష్ణుడు ఆత్మ యొక్క అమరత్వం మరియు నిష్కామ కర్మ గురించి బోధిస్తాడు.',
                teachings: 'ఆత్మ అమరమైనది. నిష్కామ కర్మను ఆచరించడమే నిజమైన జ్ఞానం.',
                moralLesson: 'మనం కేవలం శరీరం కాదు, అమర ఆత్మలం.',
                kidsVersion: 'కృష్ణుడు మన ఆత్మ ఎప్పటికీ చనిపోదని, మనం పాత బట్టలు మార్చినట్లుగా ఉంటుందని బోధించాడు.'
            },
            3: {
                title: 'కర్మ యోగం',
                subtitle: 'నిస్వార్థ సేవ',
                description: 'కృష్ణుడు నిస్వార్థ కర్మ మరియు కోరికను నియంత్రించడం గురించి బోధిస్తాడు',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా, ఫలవంతమైన కర్మ కంటే జ్ఞానం ఉత్తమమని మీరు భావిస్తే, నన్ను ఈ ఘోరమైన యుద్ధంలోకి ఎందుకు నెట్టివేస్తున్నారు?', emotion: 'గందరగోళం' },
                    { speaker: 'కృష్ణుడు', text: 'నేను ఇప్పటికే రెండు మార్గాలను వివరించాను, అర్జునా: ధ్యానపరులకు జ్ఞాన మార్గం, మరియు క్రియాశీలురకు కర్మ మార్గం.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'మీ మాటలు పరస్పర విరుద్ధంగా ఉన్నాయి. నేను గందరగోళంలో ఉన్నాను. దయచేసి ఏ మార్గం ఎక్కువ ప్రయోజనకరమో ఖచ్చితంగా చెప్పండి.', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'కేవలం పని నుండి విరమించుకోవడం ద్వారా ప్రతిచర్య నుండి విముక్తి పొందలేరు, లేదా కేవలం త్యాగంతో పరిపూర్ణతను సాధించలేరు.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'పూర్తిగా నిష్క్రియంగా ఉండటం సాధ్యమేనా?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ప్రతి ఒక్కరూ భౌతిక ప్రకృతి గుణాల ప్రకారం నిస్సహాయంగా పనిచేయవలసి వస్తుంది; కాబట్టి ఎవరూ ఒక్క క్షణం కూడా ఏమీ చేయకుండా ఉండలేరు.', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, పని చేయాలి. కానీ చిక్కుకోకుండా ఎలా పని చేయాలి?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'నీ పనిని పరమాత్మకు యజ్ఞంగా చెయ్యి. లేకపోతే, ఈ భౌతిక ప్రపంచంలో కర్మ బంధానికి కారణమవుతుంది. కాబట్టి, అతని సంతృప్తి కోసం నీ నిర్దేశిత విధులను నిర్వర్తించు, ఆ విధంగా నీవు ఎల్లప్పుడూ బంధం నుండి విముక్తుడవై ఉంటావు.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'మీరు చెప్పే యజ్ఞ చక్రం ఏమిటి?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'అన్ని జీవులు ఆహార ధాన్యాలపై ఆధారపడి ఉంటాయి, అవి వర్షాల నుండి ఉత్పత్తి అవుతాయి. వర్షాలు యజ్ఞం చేయడం ద్వారా ఉత్పత్తి అవుతాయి, మరియు యజ్ఞం నిర్దేశిత విధుల నుండి పుడుతుంది.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'జ్ఞానులు కూడా పని చేయాలా? నేను వారు అన్ని విధులకు అతీతులు అని అనుకున్నాను.', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'ఆత్మ-సాక్షాత్కారం పొందిన వ్యక్తి కూడా, వ్యక్తిగత లాభం ఏమీ లేనప్పటికీ, ప్రపంచానికి ఒక ఉదాహరణగా నిలవడానికి మరియు సామాజిక క్రమాన్ని నిర్వహించడానికి తన విధులను కొనసాగిస్తాడు.', emotion: 'ఉదాహరణ' },
                    { speaker: 'అర్జునుడు', text: 'ఇది అర్థవంతంగా ఉంది. కానీ ఒక వ్యక్తిని ఇష్టం లేకపోయినా, బలవంతంగా పాప కార్యాలకు ప్రేరేపించేది ఏమిటి?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'అది కేవలం కామమే, అర్జునా, భౌతిక రజో గుణంతో సంబంధం వల్ల పుట్టి, తరువాత క్రోధంగా మారుతుంది, మరియు ఈ ప్రపంచానికి సర్వ-భక్షక పాప శత్రువు అదే.', emotion: 'హెచ్చరిక' },
                    { speaker: 'అర్జునుడు', text: 'ఈ శత్రువు ఎక్కడ నివసిస్తాడు? మనం దానిని ఎలా జయించగలం?', emotion: 'నిశ్చయం' },
                    { speaker: 'కృష్ణుడు', text: 'ఇంద్రియాలు, మనస్సు మరియు బుద్ధి దాని నివాస స్థానాలు. మొదట ఇంద్రియాలను నియంత్రించడం ద్వారా, నీవు ఈ గొప్ప పాప చిహ్నాన్ని అరికట్టగలవు.', emotion: 'వ్యూహాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, నేను నా ఇంద్రియాలను, ఆపై నా మనస్సును నియంత్రించాలా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అవును. ఇంద్రియాలు జడ పదార్థం కంటే ఉన్నతమైనవి; మనస్సు ఇంద్రియాల కంటే ఉన్నతమైనది; బుద్ధి మనస్సు కంటే ఉన్నతమైనది; మరియు అతను [ఆత్మ] బుద్ధి కంటే కూడా ఉన్నతమైనవాడు.', emotion: 'ప్రాధాన్యత' },
                    { speaker: 'అర్జునుడు', text: 'నాకు అర్థమైంది. నా మనస్సును, ఇంద్రియాలను నియంత్రించడానికి నా బుద్ధిని ఉపయోగించాలి.', emotion: 'జ్ఞానోదయం' },
                    { speaker: 'కృష్ణుడు', text: 'అందుకే, ఓ మహాబాహు అర్జునా, తనను తాను భౌతిక ఇంద్రియాలు, మనస్సు మరియు బుద్ధికి అతీతుడని తెలుసుకుని, ఆధ్యాత్మిక బుద్ధితో మనస్సును స్థిరపరచుకుని, ఆధ్యాత్మిక బలంతో కామమనే ఈ అతృప్త శత్రువును జయించాలి.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'కృష్ణుడు కర్మ యోగాన్ని వివరిస్తాడు.',
                teachings: 'నిస్వార్థ కర్మ మనస్సును శుద్ధి చేస్తుంది.',
                moralLesson: 'ఫలితం ఆశించకుండా మంచి పనులు చేయాలి.',
                kidsVersion: 'కృష్ణుడు చెప్పాడు, అత్యాశ లేకుండా మంచి పనులు చేయడం వల్ల మనస్సు సంతోషంగా ఉంటుంది.'
            },
            4: {
                title: 'జ్ఞాన కర్మ సన్యాస యోగం',
                subtitle: 'దివ్య జ్ఞానం',
                description: 'కృష్ణుడు తన దివ్య స్వభావాన్ని మరియు ప్రాచీన జ్ఞాన సంప్రదాయాన్ని వెల్లడిస్తాడు',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'నేను ఈ శాశ్వతమైన యోగ విజ్ఞానాన్ని సూర్యదేవుడైన వివస్వంతునికి ఉపదేశించాను, వివస్వంతుడు దానిని మనువుకు బోధించాడు, మరియు మనువు దానిని ఇక్ష్వాకునికి బోధించాడు.', emotion: 'వెల్లడిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'సూర్యదేవుడు వివస్వంతుడు పుట్టుకతో నీకంటే పెద్దవాడు. మొదట నీవు అతనికి ఈ విజ్ఞానాన్ని బోధించావని నేను ఎలా అర్థం చేసుకోవాలి?', emotion: 'గందరగోళం' },
                    { speaker: 'కృష్ణుడు', text: 'నీవు మరియు నేను ఎన్నో జన్మలు గడిపాము. నాకు అవన్నీ గుర్తున్నాయి, కానీ నీకు గుర్తులేవు, ఓ శత్రువులను జయించేవాడా!', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: 'ఓ ప్రభూ, మీరు ఈ ప్రపంచంలో ఎందుకు అవతరిస్తారు?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'సాధువులను రక్షించడానికి, దుష్టులను నాశనం చేయడానికి, అలాగే ధర్మ సూత్రాలను పునఃస్థాపించడానికి, నేను యుగయుగాలుగా స్వయంగా అవతరిస్తాను.', emotion: 'అధికారిక' },
                    { speaker: 'అర్జునుడు', text: 'మీ అవతార సత్యాన్ని తెలుసుకోవడం ఒకరికి ఎలా సహాయపడుతుంది?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'నా అవతారం మరియు కార్యకలాపాల దివ్య స్వభావాన్ని తెలిసినవాడు, శరీరాన్ని విడిచిపెట్టిన తర్వాత ఈ భౌతిక ప్రపంచంలో మళ్ళీ జన్మించడు, కానీ నా శాశ్వత ధామాన్ని పొందుతాడు, ఓ అర్జునా.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'ప్రజలు మిమ్మల్ని వివిధ మార్గాలలో పూజిస్తారు. మీరు వారికి ఎలా ప్రతిస్పందిస్తారు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'అందరూ నాకు ఎలా శరణుజొచ్చితే, నేను వారిని అలాగే అనుగ్రహిస్తాను. ఓ పృథా పుత్రుడా, ప్రతి ఒక్కరూ అన్ని విధాలా నా మార్గాన్నే అనుసరిస్తారు.', emotion: 'సర్వవ్యాపి' },
                    { speaker: 'అర్జునుడు', text: 'మీరు సమాజంలోని నాలుగు వర్ణాలను సృష్టించారు. ఇది పుట్టుకపై ఆధారపడి ఉందా?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'మానవ సమాజంలోని నాలుగు వర్ణాలు భౌతిక ప్రకృతి యొక్క మూడు గుణాలు మరియు వాటితో సంబంధం ఉన్న పనుల ప్రకారం నాచే సృష్టించబడ్డాయి. నేను ఈ వ్యవస్థకు సృష్టికర్తనైనప్పటికీ, నేను అకర్తను, మార్పులేనివాడినని నీవు తెలుసుకోవాలి.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'కర్మలో చిక్కుకోకుండా ఎలా పని చేయగలరు?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'కర్మలో అకర్మను, అకర్మలో కర్మను చూసేవాడు మనుషులలో తెలివైనవాడు, మరియు అతను అన్ని రకాల కార్యకలాపాలలో నిమగ్నమైనప్పటికీ దివ్య స్థితిలో ఉంటాడు.', emotion: 'గంభీరమైన' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, నిజమైన కర్మ దాని ఫలాలపై ఆసక్తి లేకుండా చేసేదా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అవును. తన కార్యకలాపాల ఫలితాలపై అన్ని ఆసక్తులను విడిచిపెట్టి, ఎల్లప్పుడూ సంతృప్తిగా మరియు స్వతంత్రంగా ఉండి, అతను అన్ని రకాల పనులలో నిమగ్నమైనప్పటికీ ఏ ఫలవంతమైన చర్య చేయడు.', emotion: 'జ్ఞానోదయం' },
                    { speaker: 'అర్జునుడు', text: 'ఈ దివ్య జ్ఞానాన్ని ఎలా పొందగలరు?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఆధ్యాత్మిక గురువును ఆశ్రయించి సత్యాన్ని తెలుసుకోవడానికి ప్రయత్నించు. వారిని వినయంగా అడుగు మరియు వారికి సేవ చెయ్యి. ఆత్మ-సాక్షాత్కారం పొందిన ఆత్మలు నీకు జ్ఞానాన్ని అందించగలరు ఎందుకంటే వారు సత్యాన్ని చూశారు.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'ఈ జ్ఞానం యొక్క శక్తి ఏమిటి?', emotion: 'ఆశ్చర్యం' },
                    { speaker: 'కృష్ణుడు', text: 'మండుతున్న అగ్ని కట్టెలను బూడిద చేసినట్లే, ఓ అర్జునా, జ్ఞానమనే అగ్ని భౌతిక కార్యకలాపాలకు సంబంధించిన అన్ని ప్రతిచర్యలను బూడిద చేస్తుంది.', emotion: 'శక్తివంతమైన' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, నేను ఈ జ్ఞానంతో నా సందేహాలను ఛేదించాలా?', emotion: 'నిశ్చయం' },
                    { speaker: 'కృష్ణుడు', text: 'అందువల్ల అజ్ఞానం వల్ల నీ హృదయంలో తలెత్తిన సందేహాలను జ్ఞానమనే ఆయుధంతో ఛేదించాలి. యోగంతో సాయుధుడవై, ఓ భారతా, నిలబడి పోరాడు.', emotion: 'ఆదేశిస్తున్న' }
                ],
                summary: 'కృష్ణుడు ధర్మాన్ని పునఃస్థాపించడానికి తన దివ్య అవతారాల రహస్యాన్ని వివరిస్తాడు మరియు జ్ఞానమనే అగ్నితో కర్మ బంధాలను ఎలా ఛేదించాలో మార్గాన్ని చూపిస్తాడు.',
                teachings: 'నిజమైన జ్ఞానం ఆధ్యాత్మిక గురువు సేవ మరియు వినయపూర్వకమైన ప్రశ్నల ద్వారా లభిస్తుంది. జ్ఞానం అన్ని కర్మ ఫలాలను దహించివేస్తుంది.',
                moralLesson: 'నిజమైన జ్ఞానాన్ని అన్వేషించడం జీవితంలో అత్యున్నత లక్ష్యం. వినయం మరియు సేవా భావంతో మాత్రమే దానిని సాధించగలం.',
                kidsVersion: 'కృష్ణుడు తాను ధర్మాన్ని రక్షించడానికి వచ్చే ఒక సూపర్‌హీరోలాంటి వాడినని చెప్పాడు. నిజమైన జ్ఞానం ఒక మాయా అగ్నిలాంటిదని, అది మన తప్పులన్నింటినీ కాల్చివేస్తుందని ఆయన అన్నాడు.'
            },
            5: {
                title: 'కర్మ సన్యాస యోగం',
                subtitle: 'కర్మలో త్యాగం',
                description: 'కర్మ మరియు త్యాగం మధ్య సమతుల్యతను అర్థం చేసుకోవడం',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా, మొదట నన్ను కర్మను త్యజించమంటారు, ఆపై భక్తితో కర్మ చేయాలని సిఫార్సు చేస్తారు. ఇప్పుడు దయచేసి ఈ రెండింటిలో ఏది ఎక్కువ ప్రయోజనకరమో ఖచ్చితంగా చెప్పండి?', emotion: 'గందరగోళం' },
                    { speaker: 'కృష్ణుడు', text: 'కర్మ త్యాగం మరియు భక్తిలో కర్మ రెండూ ముక్తికి మంచివే. కానీ ఈ రెండింటిలో, కేవలం కర్మ త్యాగం కంటే భక్తి సేవలో కర్మ ఉత్తమం.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అది ఎలా సాధ్యం? అన్ని కర్మలను త్యజించడం శాంతిని తెస్తుందని అనిపిస్తుంది.', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'కేవలం అన్ని కార్యకలాపాలను త్యజించి, భగవంతుని భక్తి సేవలో నిమగ్నం కాకపోవడం ఒకరిని సంతోషపెట్టదు. కానీ భక్తి సేవలో నిమగ్నమైన ఆలోచనాపరుడు ఆలస్యం లేకుండా పరమాత్మను సాధించగలడు.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, ముఖ్యం ఆసక్తి లేకుండా పని చేయడమా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఫలితాలను పరమాత్మకు అర్పించి, ఆసక్తి లేకుండా తన కర్తవ్యాన్ని నిర్వర్తించేవాడు, తామరాకు నీటితో తడవనట్లుగా పాప కర్మలచే ప్రభావితం కాడు.', emotion: 'ఉదాహరణ' },
                    { speaker: 'అర్జునుడు', text: 'అలాంటి వ్యక్తి ప్రపంచాన్ని ఎలా చూస్తాడు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'వినయశీలురైన ఋషులు, నిజమైన జ్ఞానం ద్వారా, విద్యావంతుడు మరియు సౌమ్యుడైన బ్రాహ్మణుడిని, ఆవును, ఏనుగును, కుక్కను మరియు చండాలుడిని సమాన దృష్టితో చూస్తారు.', emotion: 'జ్ఞానోదయం' },
                    { speaker: 'అర్జునుడు', text: 'వారు అందరిలో దైవత్వాన్ని చూస్తారా?', emotion: 'ఆశ్చర్యం' },
                    { speaker: 'కృష్ణుడు', text: 'ఎవరి మనస్సులు సమానత్వంలో మరియు సమచిత్తతలో స్థిరపడి ఉన్నాయో, వారు ఇప్పటికే జనన మరణ పరిస్థితులను జయించారు. వారు బ్రహ్మం వలె దోషరహితులు, మరియు అందువల్ల వారు ఇప్పటికే బ్రహ్మంలో స్థిరపడి ఉన్నారు.', emotion: 'ధృవీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'వారు ఆనందాన్ని ఎలా అనుభవిస్తారు?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'అలాంటి విముక్తుడైన వ్యక్తి భౌతిక ఇంద్రియ సుఖాలకు ఆకర్షితుడు కాడు, కానీ ఎల్లప్పుడూ సమాధిలో ఉండి, లోపలి ఆనందాన్ని అనుభవిస్తాడు. ఈ విధంగా ఆత్మ-సాక్షాత్కారం పొందిన వ్యక్తి అపరిమితమైన ఆనందాన్ని అనుభవిస్తాడు, ఎందుకంటే అతను పరమాత్మపై దృష్టి కేంద్రీకరిస్తాడు.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'అంటే బాహ్య సుఖాలు చివరికి దుఃఖానికి దారితీస్తాయా?', emotion: 'గ్రహిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'తెలివైన వ్యక్తి దుఃఖానికి కారణాలైన భౌతిక ఇంద్రియాలతో సంబంధం వల్ల కలిగే వాటిలో పాల్గొనడు. ఓ కుంతీ పుత్రుడా, అటువంటి సుఖాలకు ఒక ప్రారంభం మరియు ముగింపు ఉంటుంది, కాబట్టి జ్ఞాని వాటిలో ఆనందించడు.', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: 'వారు పొందే శాంతి స్వభావం ఏమిటి?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'నా పూర్తి చైతన్యంలో ఉండి, నన్ను అన్ని యజ్ఞాలు మరియు తపస్సుల అంతిమ లబ్ధిదారుడిగా, అన్ని గ్రహాలు మరియు దేవతల పరమ ప్రభువుగా, మరియు అన్ని జీవుల శ్రేయోభిలాషిగా మరియు శ్రేయోభిలాషిగా తెలిసిన వ్యక్తి, భౌతిక దుఃఖాల బాధల నుండి శాంతిని పొందుతాడు.', emotion: 'నిర్ణయాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'నిజంగా పని చేసేది మనస్సా లేక ఆత్మా?', emotion: 'తాత్విక' },
                    { speaker: 'కృష్ణుడు', text: 'దేహధారి జీవి తన స్వభావాన్ని నియంత్రించి, మానసికంగా అన్ని కర్మలను త్యజించినప్పుడు, అతను తొమ్మిది ద్వారాల నగరంలో [భౌతిక శరీరం] సంతోషంగా నివసిస్తాడు, పని చేయకుండా లేదా పని చేయించకుండా.', emotion: 'గంభీరమైన' },
                    { speaker: 'అర్జునుడు', text: 'అంటే నిజమైన త్యాగం అనేది కేవలం బాహ్య ప్రదర్శన కాకుండా అంతర్గత స్థితా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఖచ్చితంగా. జ్ఞాని అయినవాడు ఆత్మ ఇంద్రియాల కార్యకలాపాలకు అతీతమని అర్థం చేసుకుంటాడు. అతను తన కర్మలను దైవానికి అంకితం చేసి శాంతిని పొందుతాడు.', emotion: 'ధృవీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'ఈ నిస్వార్థ కర్మ మార్గం ఉన్నతమైనది మరియు మరింత ఆచరణాత్మకమైనదిగా అనిపిస్తుంది.', emotion: 'నిశ్చయం' },
                    { speaker: 'కృష్ణుడు', text: 'నిజానికి, అది అంతే. కర్మలో నిమగ్నమవ్వు, అర్జునా, కానీ నీ మనస్సును పరమాత్మపై నిలిపి. ఇదే నిజమైన త్యాగం మరియు శాశ్వత శాంతి యొక్క రహస్యం.', emotion: 'ప్రోత్సాహిస్తున్న' }
                ],
                summary: 'కృష్ణుడు కర్మయోగం (నిస్వార్థ కర్మ) కర్మ సన్యాసం (కర్మల త్యాగం) కంటే శ్రేష్ఠమైనదని వివరిస్తాడు. నిజమైన త్యాగి కర్మ ఫలాన్ని త్యజించేవాడే కానీ కర్మను కాదు.',
                teachings: 'ఫలితంపై ఆసక్తి లేకుండా తన విధులను నిర్వర్తించడమే నిజమైన త్యాగం. జ్ఞాని అయిన వ్యక్తి అన్ని జీవులలో ఒకే దివ్యత్వాన్ని చూస్తాడు.',
                moralLesson: 'నిజమైన శాంతి బాధ్యతల నుండి పారిపోవడంలో లేదు, కానీ వాటిని నిస్వార్థ భావంతో నిర్వర్తించడంలో ఉంది.',
                kidsVersion: 'కృష్ణుడు నిజమైన హీరో పనిని వదిలిపెట్టేవాడు కాదని, మంచి హృదయంతో పని చేసేవాడని బోధించాడు. మనం ప్రతిఫలం ఆశించకుండా సహాయం చేసినప్పుడు, మనకు నిజమైన ఆనందం లభిస్తుంది.'
            },
            6: {
                title: 'ధ్యాన యోగం',
                subtitle: 'ఆత్మ-సంయమ యోగం',
                description: 'ధ్యాన ప్రక్రియ మరియు మనస్సు యొక్క క్రమశిక్షణ',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'తన కర్మ ఫలాలకు అంటిపెట్టుకోనివాడు మరియు తన కర్తవ్యాన్ని నిర్వర్తించేవాడు సన్యాసి మరియు నిజమైన యోగి.', emotion: 'నిర్వచిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'మనస్సు ద్వారా తనను తాను ఎలా ఉన్నత స్థితికి తీసుకువెళ్ళగలరు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'తన మనస్సు సహాయంతో తనను తాను ఉద్ధరించుకోవాలి, మరియు తనను తాను కించపరచుకోకూడదు. మనస్సే బంధిత ఆత్మకు మిత్రుడు, మరియు శత్రువు కూడా.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'ఎవరికి మనస్సు మిత్రుడు, మరియు ఎవరికి శత్రువు?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'మనస్సును జయించిన వానికి, మనస్సు ఉత్తమ మిత్రుడు; కానీ అలా చేయడంలో విఫలమైన వానికి, అతని మనస్సు గొప్ప శత్రువుగా మిగిలిపోతుంది.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'యోగ ధ్యానాన్ని ఎలా అభ్యసించాలి?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'యోగం అభ్యసించడానికి, ఏకాంత ప్రదేశానికి వెళ్ళి, కుశ గడ్డి, జింక చర్మం మరియు మెత్తని వస్త్రంతో ఆసనం వేసుకుని, అప్పుడు, ప్రశాంతమైన మనస్సుతో, హృదయాన్ని శుద్ధి చేయడానికి యోగాన్ని అభ్యసించాలి.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'ఇది చాలా కష్టంగా అనిపిస్తుంది. తినడం మరియు నిద్రపోవడం గురించి ఏమిటి?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'తినడం, నిద్రించడం, వినోదం మరియు పని అలవాట్లలో నియంత్రణ ఉన్నవాడు యోగ విధానాన్ని అభ్యసించడం ద్వారా అన్ని భౌతిక బాధలను తగ్గించుకోగలడు.', emotion: 'సమతుల్యం' },
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా, మనస్సు చంచలమైనది, కల్లోలమైనది, మొండిది మరియు చాలా బలమైనది. దానిని అణచివేయడం, గాలిని నియంత్రించడం కంటే కష్టమని నేను భావిస్తున్నాను.', emotion: 'నిరాశ' },
                    { speaker: 'కృష్ణుడు', text: 'ఓ మహాబాహు కుంతీ పుత్రుడా, చంచలమైన మనస్సును అరికట్టడం నిస్సందేహంగా చాలా కష్టం, కానీ తగిన అభ్యాసం మరియు వైరాగ్యం ద్వారా ఇది సాధ్యమే.', emotion: 'ప్రోత్సాహిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'విశ్వాసంతో ప్రారంభించి, ఆపై ప్రాపంచిక ಮನಸ್ಥಿತಿ కారణంగా విరమించుకునే విఫల యోగి గమ్యం ఏమిటి?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'శుభ కార్యాలలో నిమగ్నమైన యోగి ఈ ప్రపంచంలో లేదా ఆధ్యాత్మిక ప్రపంచంలో నాశనాన్ని ఎదుర్కోడు; మంచి చేసేవాడు, నా మిత్రుడా, ఎప్పుడూ చెడు చేత ఓడిపోడు.', emotion: 'భరోసా' },
                    { speaker: 'అర్జునుడు', text: 'మరణం తర్వాత అతను ఎక్కడికి వెళతాడు?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'విఫల యోగి, పుణ్యాత్ముల గ్రహాలపై చాలా సంవత్సరాల ఆనందం తర్వాత, ధర్మపరుల కుటుంబంలో లేదా ధనిక కులీనుల కుటుంబంలో జన్మిస్తాడు. తన మునుపటి జీవితపు దైవిక చైతన్యం వల్ల, అతను మళ్ళీ తన గత జీవితపు చైతన్యాన్ని పునరుజ్జీవింపజేసుకుని, మరింత పురోగతి సాధించడానికి ప్రయత్నిస్తాడు.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, ఏ ఆధ్యాత్మిక ప్రయత్నం ఎప్పుడూ వృధా కాదా?', emotion: 'ఆశావాది' },
                    { speaker: 'కృష్ణుడు', text: 'నిజానికి. మరియు యోగి మరింత పురోగతి సాధించడంలో చిత్తశుద్ధితో నిమగ్నమైనప్పుడు, అన్ని కల్మషాల నుండి కడిగివేయబడినప్పుడు, చివరికి, చాలా జన్మల అభ్యాసం తర్వాత పరిపూర్ణతను సాధించి, అతను పరమ గమ్యాన్ని పొందుతాడు.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'యోగులందరిలో అత్యున్నతుడు ఎవరు?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'మరియు యోగులందరిలో, గొప్ప విశ్వాసంతో ఎల్లప్పుడూ నాలో నివసించేవాడు, తనలో నన్ను తలచుకునేవాడు, మరియు నాకు దివ్య ప్రేమ సేవను అందించేవాడు—అతను యోగంలో నాతో అత్యంత సన్నిహితంగా ఐక్యమై ఉన్నాడు మరియు అందరిలో అత్యున్నతుడు. ఇది నా అభిప్రాయం.', emotion: 'నిర్ణయాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'నాకు అర్థమైంది. మార్గం కష్టమైనది, కానీ అభ్యాసం, వైరాగ్యం మరియు భక్తితో ఇది సాధ్యమే.', emotion: 'నిశ్చయం' },
                    { speaker: 'కృష్ణుడు', text: 'అవును, అర్జునా. నిజమైన యోగి నన్ను అన్ని జీవులలో మరియు అన్ని జీవులను నాలో చూస్తాడు. అలాంటి వ్యక్తికి, నేను ఎప్పుడూ దూరం కాను, వారు ఎప్పుడూ నాకు దూరం కారు.', emotion: 'ఐక్యత' }
                ],
                summary: 'కృష్ణుడు ధ్యాన అభ్యాసం మరియు మనస్సును నియంత్రించే పద్ధతిని వివరిస్తాడు. ఆధ్యాత్మిక మార్గంలో చేసిన ఏ ప్రయత్నమైనా వృధా కాదని ఆయన హామీ ఇస్తాడు.',
                teachings: 'మానవుని మనస్సే అతనికి మిత్రుడు మరియు శత్రువు. అభ్యాసం మరియు వైరాగ్యంతో మనస్సును వశం చేసుకోవచ్చు. యోగులందరిలో, భక్తి యోగి శ్రేష్ఠుడు.',
                moralLesson: 'ఆత్మ-నియంత్రణ మరియు నిరంతర అభ్యాసంతో ఏ లక్ష్యాన్నైనా సాధించవచ్చు. ఆధ్యాత్మిక ప్రయత్నాలు ఎప్పుడూ విఫలం కావు.',
                kidsVersion: 'కృష్ణుడు మన మనస్సును నియంత్రించడం ఒక అల్లరి కోతికి శిక్షణ ఇవ్వడం లాంటిదని చెప్పాడు. ఇది కష్టమే, కానీ అభ్యాసంతో మనం దానిని మన ఉత్తమ స్నేహితుడిగా చేసుకోవచ్చు.'
            },
            7: {
                title: 'జ్ఞాన విజ్ఞాన యోగం',
                subtitle: 'పరమ సత్య జ్ఞానం',
                description: 'కృష్ణుడు తన పరమ స్వభావాన్ని మరియు వివిధ రకాల భక్తులను వెల్లడిస్తాడు',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'ఇప్పుడు విను, ఓ పృథా పుత్రుడా, నాపై మనస్సు నిలిపి, నా పూర్తి చైతన్యంలో యోగాన్ని అభ్యసించడం ద్వారా నన్ను పూర్తిగా, సందేహం లేకుండా ఎలా తెలుసుకోగలవో.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'దయచేసి ఈ జ్ఞానాన్ని పూర్తిగా చెప్పండి. ఇది తెలిసిన తర్వాత, ఇంకేమి తెలుసుకోవలసింది ఉంటుంది?', emotion: 'ఆత్రుత' },
                    { speaker: 'కృష్ణుడు', text: 'వేలమందిలో ఒకడు పరిపూర్ణత కోసం ప్రయత్నించవచ్చు, మరియు పరిపూర్ణతను సాధించిన వారిలో, అరుదుగా ఒకడు నన్ను నిజంగా తెలుసుకుంటాడు.', emotion: 'వెల్లడిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'మీ శక్తుల స్వభావం ఏమిటి?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'భూమి, నీరు, అగ్ని, గాలి, ఆకాశం, మనస్సు, బుద్ధి మరియు మిథ్యా అహంకారం—ఈ ఎనిమిది కలిసి నా వేరుపడిన భౌతిక శక్తులు. ఇది కాకుండా, జీవులను కలిగి ఉన్న నా మరొక, ఉన్నతమైన శక్తి ఉంది.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'అంటే ఉన్నదంతా మీ నుండే ఉద్భవించిందా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ ప్రపంచంలో భౌతికమైన మరియు ఆధ్యాత్మికమైనదంతా, నేను పుట్టుక మరియు వినాశనం రెండూ అని ఖచ్చితంగా తెలుసుకో. నాకంటే గొప్ప సత్యం లేదు. ముత్యాలు దారంలో గుచ్చబడినట్లుగా, అంతా నాపై ఆధారపడి ఉంది.', emotion: 'పునాది' },
                    { speaker: 'అర్జునుడు', text: 'నా రోజువారీ జీవితంలో మిమ్మల్ని ఎలా గ్రహించగలను?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'నేను నీటి రుచిని, సూర్యచంద్రుల కాంతిని, ఆకాశంలో శబ్దాన్ని మరియు మనిషిలో సామర్థ్యాన్ని.', emotion: 'సర్వవ్యాపి' },
                    { speaker: 'అర్జునుడు', text: 'మరి చాలా మంది మిమ్మల్ని ఎందుకు చూడలేరు?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ప్రకృతి యొక్క మూడు గుణాలచే మోహితులై, ప్రపంచమంతా నన్ను తెలుసుకోలేదు. మూడు గుణాలతో కూడిన నా ఈ దైవిక శక్తిని అధిగమించడం కష్టం. కానీ నాకు శరణుజొచ్చిన వారు దానిని సులభంగా దాటగలరు.', emotion: 'జ్ఞాని' },
                    { speaker: 'అర్జునుడు', text: 'మిమ్మల్ని పూజించే పుణ్యాత్ములు ఎవరు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'నాలుగు రకాల పుణ్యాత్ములు నాకు భక్తి సేవ చేయడం ప్రారంభిస్తారు—దుఃఖితులు, సంపద కోరుకునేవారు, జిజ్ఞాసువులు, మరియు పరమ సత్య జ్ఞానం కోసం వెతుకుతున్నవారు.', emotion: 'వర్గీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'వారిలో ఉత్తముడు ఎవరు?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'వీరిలో, పూర్తి జ్ఞానంలో ఉండి, ఎల్లప్పుడూ స్వచ్ఛమైన భక్తి సేవలో నిమగ్నమైనవాడు ఉత్తముడు. ఎందుకంటే నేను అతనికి చాలా ప్రియుడిని, మరియు అతను నాకు ప్రియుడు.', emotion: 'ప్రేమ' },
                    { speaker: 'అర్జునుడు', text: 'దేవతలను పూజించే వారి గురించి ఏమిటి?', emotion: 'విచారిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'చిన్న బుద్ధి గలవారు దేవతలను పూజిస్తారు, మరియు వారి ఫలాలు పరిమితమైనవి మరియు తాత్కాలికమైనవి. కానీ నా భక్తులు చివరికి నా పరమ లోకాన్ని చేరతారు.', emotion: 'వివేచన' },
                    { speaker: 'అర్జునుడు', text: 'తెలివి తక్కువ వారు మీ పరమ స్వభావాన్ని ఎందుకు అర్థం చేసుకోలేరు?', emotion: 'గందరగోళం' },
                    { speaker: 'కృష్ణుడు', text: 'నేను మూర్ఖులకు మరియు తెలివి తక్కువ వారికి ఎప్పుడూ కనిపించను. వారికి నేను నా అంతర్గత శక్తిచే కప్పబడి ఉంటాను, కాబట్టి నేను పుట్టనివాడినని మరియు దోషరహితుడినని వారు తెలుసుకోలేరు.', emotion: 'రహస్యమైన' },
                    { speaker: 'అర్జునుడు', text: 'ఈ భ్రమ నుండి ఎలా విముక్తి పొందగలరు?', emotion: 'ఆశావాది' },
                    { speaker: 'కృష్ణుడు', text: 'మునుపటి జన్మలలో మరియు ఈ జీవితంలో పుణ్య కార్యాలు చేసి, పాప కర్మలు పూర్తిగా నిర్మూలించబడిన వ్యక్తులు భ్రమ ద్వంద్వాల నుండి విముక్తులై, దృఢ సంకల్పంతో నా సేవలో నిమగ్నమవుతారు.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'కృష్ణుడు తనను తాను అన్ని భౌతిక మరియు ఆధ్యాత్మిక ప్రపంచాలకు మూలం అని వివరిస్తాడు. తన మాయను దాటడం కష్టమని, కానీ తనను శరణు పొందిన వారు దానిని దాటగలరని వివరిస్తాడు.',
                teachings: 'భగవంతుడే అన్నింటికీ మూలం. స్వచ్ఛమైన భక్తితో మాత్రమే ఆయనను తెలుసుకోగలం. నాలుగు రకాల ప్రజలు ఆయనను పూజిస్తారు.',
                moralLesson: 'ప్రతిదానిలో దైవత్వాన్ని చూడటానికి ప్రయత్నించండి. నిజమైన జ్ఞానం భగవంతుని పట్ల శరణాగతితో వస్తుంది.',
                kidsVersion: 'కృష్ణుడు తాను ప్రతిదానిలో ఉన్నానని చెప్పాడు - నీటి రుచిలో, సూర్యకాంతిలో. ఎవరైతే ఆయనను నిజమైన హృదయంతో స్మరిస్తారో, వారు ఆయనకు ఉత్తమ స్నేహితులు అవుతారు.'
            },
            8: {
                title: 'అక్షర బ్రహ్మ యోగం',
                subtitle: 'పరమాత్మను పొందడం',
                description: 'కృష్ణుడు అర్జునుడి పరమ వాస్తవికత మరియు మరణం గురించిన ప్రశ్నలకు సమాధానమిస్తాడు',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ నా ప్రభూ, బ్రహ్మం అంటే ఏమిటి? ఆత్మ అంటే ఏమిటి? ఫలవంతమైన కార్యకలాపాలు ఏమిటి? ఈ భౌతిక స్వరూపం ఏమిటి? మరియు మరణ సమయంలో మిమ్మల్ని ఎలా తెలుసుకోగలను?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'అవినాశి, అతీంద్రియ జీవిని బ్రహ్మం అంటారు. భౌతిక శరీరాల అభివృద్ధికి సంబంధించిన చర్యను కర్మ అంటారు.', emotion: 'నిర్వచిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'మరణ సమయంలో మిమ్మల్ని గుర్తుంచుకోవడం ఎలా సాధ్యం?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'ఎవరైతే, తన జీవితం చివరలో, నన్ను మాత్రమే స్మరిస్తూ తన శరీరాన్ని విడిచిపెడతారో, వారు వెంటనే నా స్వభావాన్ని పొందుతారు. ఇందులో సందేహం లేదు.', emotion: 'భరోసా' },
                    { speaker: 'అర్జునుడు', text: 'మరణ సమయంలో మన స్థితిని ఏది నిర్ణయిస్తుంది?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఓ కుంతీ పుత్రుడా, తన శరీరాన్ని విడిచిపెట్టేటప్పుడు ఏ స్థితిని స్మరించుకుంటాడో, ఆ స్థితిని అతను తప్పకుండా పొందుతాడు.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'అంటే నేను ఎల్లప్పుడూ మీ గురించే ఆలోచించాలా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అందువల్ల, అర్జునా, నీవు ఎల్లప్పుడూ నా గురించి ఆలోచించాలి మరియు అదే సమయంలో పోరాడాలనే నీ నిర్దేశిత కర్తవ్యాన్ని నిర్వర్తించాలి. నీ కార్యకలాపాలను నాకు అంకితం చేయడంతో, నీవు నన్ను నిస్సందేహంగా పొందుతావు.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'మిమ్మల్ని చేరడానికి ఎలా ధ్యానం చేయాలి?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'పరమ పురుషుడిగా నన్ను ధ్యానించేవాడు, అతని మనస్సు నిరంతరం నన్ను స్మరించడంలో నిమగ్నమై, మార్గం నుండి తప్పకుండా, అతను నన్ను ఖచ్చితంగా చేరతాడు.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'మీ పరమ నివాసం యొక్క స్వభావం ఏమిటి?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'భౌతిక ప్రపంచంలోని అత్యున్నత గ్రహం నుండి అత్యల్ప గ్రహం వరకు, అన్నీ పునరావృత జనన మరణాలు జరిగే దుఃఖ స్థలాలే. కానీ నా నివాసాన్ని పొందినవాడు మళ్ళీ జన్మించడు.', emotion: 'విముక్తి' },
                    { speaker: 'అర్జునుడు', text: 'ఈ భౌతిక ప్రపంచానికి అతీతంగా ఒక ప్రపంచం ఉందా?', emotion: 'ఆశ్చర్యం' },
                    { speaker: 'కృష్ణుడు', text: 'అయినప్పటికీ, మరొక అవ్యక్త స్వభావం ఉంది, అది శాశ్వతమైనది మరియు ఈ వ్యక్త మరియు అవ్యక్త పదార్థానికి అతీతమైనది. అది సర్వోన్నతమైనది మరియు ఎప్పటికీ నాశనం కాదు. అదే నా పరమ నివాసం.', emotion: 'వెల్లడిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'ఆ నివాసాన్ని ఎలా చేరగలరు?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అందరికంటే గొప్పవాడైన పరమ పురుషోత్తముడిని స్వచ్ఛమైన భక్తి ద్వారా పొందవచ్చు. అతను తన నివాసంలో ఉన్నప్పటికీ, అతను సర్వవ్యాపి, మరియు అంతా అతనిలోనే ఉంది.', emotion: 'భక్తి' },
                    { speaker: 'అర్జునుడు', text: 'శరీరాన్ని విడిచిపెట్టడానికి శుభ సమయాలు ఉన్నాయా?', emotion: 'విశ్లేషణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'పరమ బ్రహ్మాన్ని తెలిసినవారు, అగ్నిదేవుని ప్రభావంలో, వెలుగులో, పగటి శుభ సమయంలో, శుక్లపక్షంలో, లేదా సూర్యుడు ఉత్తరాయణంలో ప్రయాణించే ఆరు నెలల కాలంలో ప్రపంచం నుండి నిష్క్రమించడం ద్వారా ఆ పరమాత్మను పొందుతారు.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'మరి అశుభ సమయాలు?', emotion: 'వ్యతిరేకం' },
                    { speaker: 'కృష్ణుడు', text: 'పొగ, రాత్రి, కృష్ణపక్షంలో, లేదా సూర్యుడు దక్షిణాయణంలో ప్రయాణించే ఆరు నెలల కాలంలో ఈ ప్రపంచం నుండి నిష్క్రమించే యోగి, చంద్రలోకాన్ని చేరతాడు కానీ మళ్ళీ తిరిగి వస్తాడు.', emotion: 'హెచ్చరిక' },
                    { speaker: 'అర్జునుడు', text: 'భక్తుడు ఈ లెక్కల గురించి ఆందోళన చెందాలా?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'భక్తులు ఈ రెండు మార్గాలను తెలిసినప్పటికీ, వారు ఎప్పుడూ గందరగోళపడరు. అందువల్ల ఎల్లప్పుడూ భక్తిలో స్థిరంగా ఉండు.', emotion: 'భరోసా' },
                    { speaker: 'అర్జునుడు', text: 'అంటే, భక్తే అన్ని తలుపులను తెరిచే తాళం చెవియా?', emotion: 'జ్ఞానోదయం' },
                    { speaker: 'కృష్ణుడు', text: 'భక్తి సేవ మార్గాన్ని అంగీకరించిన వ్యక్తి ఏ ఫలాలనూ కోల్పోడు. కేవలం భక్తి సేవ చేయడం ద్వారా, అతను ఇవన్నీ పొందుతాడు, మరియు చివరికి అతను పరమ శాశ్వత నివాసాన్ని చేరతాడు.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'కృష్ణుడు వివరిస్తాడు, మరణ సమయంలో ఒక వ్యక్తి యొక్క చేతన అతని తదుపరి గమ్యాన్ని నిర్ధారిస్తుంది. జీవితాంతం దేవుణ్ణి స్మరించడం వల్ల చివరి క్షణంలో కూడా ఆయన జ్ఞాపకం ఉంటుంది.',
                teachings: 'మరణ సమయంలో చేతన చాలా ముఖ్యం. జీవితాంతం భక్తి సాధన చేయడం వల్ల చివరి క్షణంలో దేవుణ్ణి పొందవచ్చు.',
                moralLesson: 'ఈ రోజు మనం మన మనస్సును దేనితో నింపుతామో, అదే మన భవిష్యత్తును మరియు చివరి గమ్యాన్ని నిర్ధారిస్తుంది.',
                kidsVersion: 'కృష్ణుడు ఒక రహస్యం చెప్పాడు: మనం దేని గురించి ఎక్కువగా ఆలోచిస్తామో, అదే మనకు తదుపరి జీవితానికి వెళ్ళేటప్పుడు గుర్తుంటుంది. కాబట్టి, మనం దేవుడి గురించి ఆలోచిస్తే, మనం దేవుడి సంతోషకరమైన ఇంటికి వెళ్తాము!'
            },
            9: {
                title: 'రాజ విద్యా రాజ గుహ్య యోగం',
                subtitle: 'అత్యంత రహస్య జ్ఞానం',
                description: 'కృష్ణుడు భక్తి సేవ యొక్క అత్యంత రహస్య జ్ఞానాన్ని వెల్లడిస్తాడు',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'నా ప్రియమైన అర్జునా, నీవు నా పట్ల ఎప్పుడూ అసూయపడవు కాబట్టి, నేను నీకు ఈ అత్యంత రహస్య జ్ఞానాన్ని మరియు అనుభూతిని అందిస్తాను, దీనిని తెలుసుకుంటే నీవు భౌతిక అస్తిత్వపు దుఃఖాల నుండి విముక్తుడవుతావు.', emotion: 'దయ' },
                    { speaker: 'అర్జునుడు', text: 'ఓ ప్రభూ, ఈ పరమ జ్ఞానాన్ని వినడానికి నేను ఆసక్తిగా ఉన్నాను.', emotion: 'స్వీకారం' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ జ్ఞానం విద్యలకు రాజు, అన్ని రహస్యాలలోకెల్లా అత్యంత రహస్యమైనది. ఇది అత్యంత స్వచ్ఛమైన జ్ఞానం, మరియు ఇది అనుభూతి ద్వారా ఆత్మ యొక్క ప్రత్యక్ష దర్శనాన్ని ఇస్తుంది కాబట్టి, ఇది ధర్మం యొక్క పరిపూర్ణత.', emotion: 'నొక్కిచెప్పడం' },
                    { speaker: 'అర్జునుడు', text: 'విశ్వాసం లేనివారు మిమ్మల్ని ఎందుకు పొందలేరు?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ భక్తి సేవలో విశ్వాసం లేనివారు నన్ను పొందలేరు, ఓ శత్రువులను జయించేవాడా. కాబట్టి వారు ఈ భౌతిక ప్రపంచంలో జనన మరణాల మార్గానికి తిరిగి వస్తారు.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'మీరు ఈ విశ్వంలో ఎలా వ్యాపించి ఉన్నారు?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'నా అవ్యక్త రూపంలో, ఈ విశ్వమంతా నాచే వ్యాపించబడి ఉంది. అన్ని జీవులు నాలో ఉన్నాయి, కానీ నేను వాటిలో లేను.', emotion: 'రహస్యమైన' },
                    { speaker: 'అర్జునుడు', text: 'అది ఒక విరోధాభాసం. అంతా మీలో ఎలా ఉంటుంది, కానీ మీరు వాటిలో లేరు?', emotion: 'గందరగోళం' },
                    { speaker: 'కృష్ణుడు', text: 'అయినప్పటికీ సృష్టించబడినదంతా నాలో నిలవదు. నా దివ్య ఐశ్వర్యాన్ని చూడు! నేను అన్ని జీవులను పోషించేవాడినైనా మరియు నేను సర్వత్రా ఉన్నా, నేను ఈ విశ్వ సృష్టిలో భాగం కాను, ఎందుకంటే నా ఆత్మయే సృష్టికి మూలం.', emotion: 'గంభీరమైన' },
                    { speaker: 'అర్జునుడు', text: 'మీ దివ్య స్వభావాన్ని గుర్తించేవారు ఎవరు?', emotion: 'ఆసక్తిగల' },
                    { speaker: 'కృష్ణుడు', text: 'గొప్ప ఆత్మలు, మహాత్ములు, భ్రమపడరు. వారు దైవిక ప్రకృతి రక్షణలో ఉంటారు మరియు పూర్తిగా భక్తి సేవలో నిమగ్నమై ఉంటారు ఎందుకంటే వారు నన్ను పరమ పురుషుడిగా, ఆది మరియు అక్షయుడిగా తెలుసుకుంటారు.', emotion: 'ప్రశంసిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'ఈ స్థితిని పొందడానికి నేను మిమ్మల్ని ఎలా పూజించాలి?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఎవరైనా నాకు ప్రేమ మరియు భక్తితో ఒక ఆకు, ఒక పువ్వు, పండు లేదా నీరు సమర్పిస్తే, నేను దానిని స్వీకరిస్తాను.', emotion: 'స్వీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'సమర్పణ ముఖ్యమా, లేక దాని వెనుక ఉన్న భక్తి ముఖ్యమా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'భక్తియే ముఖ్యం. నీవు ఏది చేసినా, ఏది తిన్నా, ఏది సమర్పించినా లేదా దానం చేసినా, మరియు ఏ తపస్సు చేసినా—అది నాకు సమర్పణగా చెయ్యి.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'అటువంటి సమర్పణ ఫలితం ఏమిటి?', emotion: 'ఆశావాది' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ విధంగా నీవు కర్మ బంధం మరియు దాని శుభ మరియు అశుభ ఫలితాల నుండి విముక్తుడవుతావు. ఈ త్యాగ సూత్రంలో నీ మనస్సును నాపై నిలిపితే, నీవు విముక్తుడవై నా వద్దకు వస్తావు.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'మీరు కొందరు భక్తుల పట్ల పక్షపాతం చూపుతారా?', emotion: 'విచారిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'నేను ఎవరి పట్ల అసూయపడను, లేదా ఎవరి పట్ల పక్షపాతం చూపను. నేను అందరికీ సమానుడిని. కానీ ఎవరైతే భక్తితో నాకు సేవ చేస్తారో వారు నా మిత్రులు, నాలో ఉన్నారు, మరియు నేను కూడా వారికి మిత్రుడిని.', emotion: 'నిష్పక్షపాతం' },
                    { speaker: 'అర్జునుడు', text: 'ఈ అత్యంత రహస్య జ్ఞానంలో మీ చివరి ఉపదేశం ఏమిటి?', emotion: 'శ్రద్ధగా' },
                    { speaker: 'కృష్ణుడు', text: 'ఎల్లప్పుడూ నన్నే తలచుకో, నా భక్తుడవు కమ్ము, నన్ను పూజించు మరియు నాకు నమస్కరించు. అప్పుడు నీవు తప్పకుండా నా వద్దకు వస్తావు. నేను నీకు ఈ వాగ్దానం చేస్తున్నాను ఎందుకంటే నీవు నా అత్యంత ప్రియమైన మిత్రుడివి.', emotion: 'ప్రేమ' }
                ],
                summary: 'కృష్ణుడు భక్తి యొక్క రహస్య జ్ఞానాన్ని వెల్లడిస్తాడు. ప్రేమ మరియు శ్రద్ధతో చేసిన చిన్న కానుక కూడా తనకు ఆమోదయోగ్యమని ఆయన వివరిస్తాడు.',
                teachings: 'స్వచ్ఛమైన భక్తియే అత్యున్నత జ్ఞానం. భగవంతుని పట్ల పూర్తి శరణాగతితో మాత్రమే ఆయనను పొందవచ్చు.',
                moralLesson: 'మనం ఏమి ఇస్తామనేది ముఖ్యం కాదు, ఏ భావంతో ఇస్తామనేదే ముఖ్యం. ప్రేమతో చేసే సేవే నిజమైన భక్తి.',
                kidsVersion: 'కృష్ణుడు తన ఉత్తమ స్నేహితుడిగా ఎలా ఉండాలో చెప్పాడు. దీనికి ఖరీదైన బహుమతులు అవసరం లేదు, నిజమైన ప్రేమ కావాలి. నీవు ఆయనకు ప్రేమతో ఒక పువ్వు ఇచ్చినా, ఆయన చాలా సంతోషిస్తాడు.'
            },
            10: {
        title: 'విభూతి యోగం',
        subtitle: 'భగవంతుని ఐశ్వర్యం',
        description: 'కృష్ణుడు భౌతిక మరియు ఆధ్యాత్మిక ప్రపంచాలలో తన దివ్య స్వరూపాలను వెల్లడిస్తాడు',
        dialogue: [{
          speaker: 'కృష్ణుడు',
          text: 'మరల వినుము, ఓ మహాబాహు అర్జునా. నీవు నా ప్రియ మిత్రుడవు కాబట్టి, నీ మేలు కొరకు నేను ఇంకనూ మాట్లాడెదను, నేను ఇదివరకే వివరించిన దానికంటే శ్రేష్ఠమైన జ్ఞానమును ఇచ్చెదను.',
          emotion: 'ఆప్యాయత'
        }, {
          speaker: 'అర్జునుడు',
          text: 'నీవే పరమేశ్వరుడవు, సకలమునకు మూలము. దేవతల సమూహములు గానీ, మహర్షులు గానీ నీ పుట్టుకను ఎరుగరు. దయచేసి ఈ లోకాలన్నిటిలో నీవు వ్యాపించియున్న నీ దివ్య ఐశ్వర్యములను వివరముగా వర్ణించుము.',
          emotion: 'భక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'సమస్త ఆధ్యాత్మిక, భౌతిక జగత్తులకు నేనే మూలము. అంతయూ నా నుండియే వెలువడుచున్నది. ఈ విషయమును సంపూర్ణముగా తెలిసిన జ్ఞానులు నా భక్తి సేవలో నిమగ్నులై, తమ పూర్ణ హృదయముతో నన్ను పూజింతురు.',
          emotion: 'పునాది'
        }, {
          speaker: 'అర్జునుడు',
          text: 'నిన్ను నేను నిరంతరము ఎలా స్మరించాలి మరియు ఎలా తెలుసుకోవాలి? ఓ పరమ పురుషా, నిన్ను ఏయే వివిధ రూపాలలో స్మరించుకోవాలి?',
          emotion: 'జిజ్ఞాస'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నా ప్రకాశవంతమైన అభివ్యక్తులను నీకు చెప్పెదను, కానీ వాటిలో ముఖ్యమైనవి మాత్రమే, ఓ అర్జునా, ఎందుకంటే నా ఐశ్వర్యము అపరిమితమైనది.',
          emotion: 'వెల్లడిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'శ్రద్ధగా వింటున్నాను.',
          emotion: 'శ్రద్ధ'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేనే ఆత్మను, ఓ గుడాకేశా, సర్వ ప్రాణుల హృదయాలలో ఆసీనుడనై ఉన్నాను. నేనే సర్వ జీవులకు ఆది, మధ్యము మరియు అంతము.',
          emotion: 'అంతర్లీనం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరియు దైవిక జీవులలో?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఆదిత్యులలో నేను విష్ణువును, కాంతులలో నేను ప్రకాశవంతమైన సూర్యుడిని, మరుత్తులలో నేను మరీచిని, మరియు నక్షత్రాలలో నేను చంద్రుడిని.',
          emotion: 'ప్రసిద్ధం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'వేదాలలో మరియు ఇంద్రియాలలో?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'వేదాలలో నేను సామవేదాన్ని; దేవతలలో నేను స్వర్గాధిపతియైన ఇంద్రుడిని; ఇంద్రియాలలో నేను మనస్సును; మరియు జీవులలో నేను జీవశక్తిని [చైతన్యం].',
          emotion: 'అవసరం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'గొప్ప శక్తులు మరియు జీవులలో?',
          emotion: 'ఆశ్చర్యం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'రుద్రులలో నేను శివుడిని, యక్షులు మరియు రాక్షసులలో నేను సంపదకు ప్రభువును [కుబేరుడు], వసువులలో నేను అగ్నిని, మరియు పర్వతాలలో నేను మేరువును.',
          emotion: 'గంభీరం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'పురోహితులు మరియు సేనాపతులలో?',
          emotion: 'విశ్లేషణాత్మక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'పురోహితులలో, ఓ అర్జునా, నన్ను ముఖ్యుడైన బృహస్పతిగా తెలుసుకో. సేనాపతులలో నేను కార్తికేయుడిని, మరియు జలాశయాలలో నేను సముద్రుడిని.',
          emotion: 'అగ్రగామి'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మీ అభివ్యక్తులు నిజంగా అన్నింటిలోనూ ఉత్తమమైనవి.',
          emotion: 'అర్థం చేసుకున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'మహర్షులలో నేను భృగువును; శబ్దములలో నేను దివ్యమైన ఓంకారమును. యజ్ఞములలో నేను పవిత్ర నామ జపమును [జపము], మరియు స్థిరమైన వస్తువులలో నేను హిమాలయములను.',
          emotion: 'సర్వోన్నతం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అన్ని వృక్షాలు మరియు దివ్య జీవులలో?',
          emotion: 'ఆశ్చర్యపోతున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'అన్ని వృక్షాలలో నేను మర్రి చెట్టును, మరియు దేవతలలోని ఋషులలో నేను నారదుడిని. గంధర్వులలో నేను చిత్రరథుడిని, మరియు సిద్ధ పురుషులలో నేను కపిల మునిని.',
          emotion: 'సర్వవ్యాపి'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మీ ఐశ్వర్యములన్నిటినీ గ్రహించటం అసాధ్యం.',
          emotion: 'అభిభూతం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'సమస్త ఐశ్వర్యవంతమైన, అందమైన మరియు మహిమాన్వితమైన సృష్టులు నా తేజస్సు యొక్క ఒక చిన్న మెరుపు నుండి ఉద్భవించాయని తెలుసుకో. కానీ ఈ వివరణాత్మక జ్ఞానంతో పనేమి, అర్జునా? నా యొక్క ఒక్క అంశతో నేను ఈ సమస్త విశ్వాన్ని వ్యాపించి, పోషిస్తున్నాను.',
          emotion: 'నిర్ణయాత్మక'
        }],
        summary: 'ఈ అధ్యాయంలో, కృష్ణుడు తానే సమస్త సృష్టికి మూలం అని మరియు ఐశ్వర్యవంతమైన, అందమైన, మరియు మహిమాన్వితమైనవన్నీ తన దివ్య తేజస్సు యొక్క ఒక మెరుపు మాత్రమేనని వివరిస్తాడు. తనను ప్రతిచోటా చూడమని అర్జునుడిని ప్రోత్సహిస్తాడు.',
        teachings: 'ఈ విశ్వమంతా దైవ స్వరూపమే. మన చుట్టూ ఉన్న ప్రపంచంలోని శ్రేష్ఠతలో భగవంతుని ఉనికిని గుర్తించడం ద్వారా మనం ఆయనతో అనుసంధానం కావచ్చు. దైవం యొక్క ఒకే ఒక్క అంశం సమస్త అస్తిత్వాన్ని వ్యాపించి పోషిస్తుందని అర్థం చేసుకోవడమే నిజమైన జ్ఞానం.',
        moralLesson: 'ప్రతి దానిలో మరియు ప్రతి ఒక్కరిలో శ్రేష్ఠమైన దానిని చూడండి, అప్పుడు మీరు దైవ ప్రతిబింబాన్ని చూస్తారు. ప్రపంచంలో భగవంతుని ఉనికిని గురించిన అవగాహనను పెంపొందించుకోవడం మన అవగాహనను మార్చి, మన జీవితాలను భక్తి మరియు అద్భుతంతో నింపుతుంది.',
        kidsVersion: 'ప్రతిదానిలో ఉత్తమమైనదాన్ని ఊహించుకోండి: బలమైన సింహం, ప్రకాశవంతమైన నక్షత్రం, ఎత్తైన పర్వతం. కృష్ణుడు ప్రతి సమూహంలో తానే "శ్రేష్ఠుడను" అని వివరిస్తాడు. కాబట్టి, మీరు అద్భుతమైనది చూసినప్పుడల్లా, మీరు భగవంతుని మాయ యొక్క ఒక చిన్న భాగాన్ని చూస్తున్నారు!'
      },
      11: {
        title: 'విశ్వరూప సందర్శన యోగం',
        subtitle: 'బ్రహ్మాండ దర్శనం',
        description: 'కృష్ణుడు అర్జునునికి దివ్య దృష్టిని ప్రసాదించి తన అద్భుతమైన, భయంకరమైన విశ్వరూపాన్ని వెల్లడిస్తాడు',
        dialogue: [{
          speaker: 'అర్జునుడు',
          text: 'నా భ్రమ ఇప్పుడు తొలగిపోయింది. ప్రతి జీవి యొక్క ఆవిర్భావం మరియు తిరోభావం గురించి మీ నుండి వివరంగా విన్నాను. ఓ మహోన్నత వ్యక్తిత్వమా, ఓ పరమ రూపా, మీరు వర్ణించుకున్నట్లుగా మీ వాస్తవ రూపంలో మిమ్మల్ని ఇక్కడ నా ముందు చూస్తున్నప్పటికీ, మీరు ఈ బ్రహ్మాండ సృష్టిలోకి ఎలా ప్రవేశించారో నేను చూడాలనుకుంటున్నాను. మీ ఆ రూపాన్ని నేను చూడాలనుకుంటున్నాను.',
          emotion: 'భక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నా ప్రియమైన అర్జునా, నీవు నన్ను నీ ప్రస్తుత కళ్లతో చూడలేవు. అందువల్ల నేను నీకు దివ్య చక్షువులను ఇస్తున్నాను. నా దివ్య ఐశ్వర్యాన్ని చూడు!',
          emotion: 'ప్రసాదిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఓ విశ్వ ప్రభువా, ఓ విశ్వరూపా, మీ శరీరంలో ఎన్నో, ఎన్నెన్నో చేతులు, కడుపులు, నోళ్ళు మరియు కళ్ళు, అంతటా అపరిమితంగా విస్తరించి ఉండటం నేను చూస్తున్నాను. మీలో నాకు అంతం, మధ్యం, మరియు ప్రారంభం కనిపించడం లేదు.',
          emotion: 'ఆశ్చర్యం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నా వందల వేల వైవిధ్యమైన, దివ్యమైన మరియు బహుళ వర్ణ రూపాలను చూడు.',
          emotion: 'అద్భుతం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'దేవతలందరినీ మరియు ఇతర వివిధ జీవులను మీ శరీరంలో సమావేశమై ఉండటం నేను చూస్తున్నాను. పద్మంపై కూర్చున్న బ్రహ్మదేవుడిని, అలాగే శివుడిని మరియు ఋషులందరినీ, దివ్య సర్పాలను చూస్తున్నాను.',
          emotion: 'అభిభూతం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నీవు ఏది చూడాలనుకున్నా, నా ఈ శరీరంలో తక్షణమే చూడు! భవిష్యత్తులో నీవు ఏది చూడాలనుకున్నా చూడవచ్చు. అంతా—చరాచరములు—ఇక్కడ పూర్తిగా, ఒకే చోట ఉన్నాయి.',
          emotion: 'సర్వవ్యాపి'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఓ ప్రభూ, మీ రూపం దాని మిరుమిట్లు గొలిపే తేజస్సు వల్ల చూడటానికి కష్టంగా ఉంది, అది నలుదిక్కులా వ్యాపిస్తోంది, మండుతున్న అగ్నిలా లేదా సూర్యుని అపారమైన ప్రకాశంలా. అయినప్పటికీ నేను ఈ ప్రకాశవంతమైన రూపాన్ని ప్రతిచోటా చూస్తున్నాను.',
          emotion: 'చకితుడైన'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేను ఆది మూలాన్ని, అక్షయుడను, పురాతనుడను; నేను శాశ్వత ధర్మాన్ని పరిరక్షించేవాడిని, పరమ పురుషుడిని.',
          emotion: 'పునాది'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ధృతరాష్ట్రుని కుమారులందరినీ, వారి మిత్ర రాజులతో పాటు, మరియు భీష్ముడు, ద్రోణుడు, కర్ణుడు—మరియు మన ముఖ్య సైనికులను కూడా—మీ భయంకరమైన నోళ్లలోకి దూసుకుపోవడం నేను చూస్తున్నాను. మరియు కొందరిని మీ పళ్ల మధ్య తలలు నలిగిపోయి చిక్కుకుపోవడం చూస్తున్నాను.',
          emotion: 'భయంతో'
        },{
          speaker: 'కృష్ణుడు',
          text: 'అందువల్ల లేచి పోరాడడానికి సిద్ధం అవ్వండి మరియు గౌరవాన్ని గెలుచుకోండి. మీ శత్రువులను ఓడించండి మరియు సమృద్ధిగా ఉన్న రాజ్యాన్ని ఆస్వాదించండి. వారు ఇప్పటికే నా ఏర్పాటు ద్వారా చంపబడ్డారు, మరియు మీరు, ఓ సవ్యసాచి, యుద్ధంలో కేవలం ఒక సాధనమే కాగలరు.',
          emotion: 'ఆదేశిస్తున్న'
        },
        {
          speaker: 'అర్జునుడు',
          text: 'ఓ దేవదేవా, ఇంత భయంకర రూపం గలవాడా, దయచేసి నీవు ఎవరో చెప్పు.',
          emotion: 'భయభీతుడైన'
        },
        {
          speaker: 'కృష్ణుడు',
          text: 'నేను భగవంతుని పరమ వ్యక్తిత్వం, పరమ సత్యం, సమస్త సృష్టికి మూలం. నేను శాశ్వతుడను, అవినాశి, అన్ని ప్రాణుల ప్రారంభం మరియు అంత్యం. నేను కాలం, లోకాలను నాశనం చేసే మహానుబావుడను మరియు నేను ఇక్కడికి ప్రజలందరినీ నాశనం చేయడానికి వచ్చాను. నీవు [పాండవులు] తప్ప, ఇరువైపులా ఉన్న సైనికులందరూ వధించబడతారు.',
          emotion: 'వెల్లడిస్తున్న'
        },
        {
          speaker: 'అర్జునుడు',
          text: 'ఓ సర్వ జీవుల స్వామీ, నన్ను క్షమించు. మిమ్మల్ని నా స్నేహితుడిగా భావించి, మీ మహిమలను అరియక, నేను మిమ్మల్ని "ఓ కృష్ణా," "ఓ యాదవా," "ఓ నా మిత్రమా," అని తొందరపడి సంబోధించాను. దయచేసి నేను ఉన్మాదంలో కానీ, ప్రేమలో కానీ చేసినదానిని క్షమించండి.',
          emotion: 'క్షమాపణ'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నీవు చూస్తున్న నా ఈ రూపం దర్శించడం చాలా కష్టం. దేవతలు కూడా ఈ రూపాన్ని చూడటానికి నిరంతరం అవకాశం కోసం చూస్తుంటారు.',
          emotion: 'వెల్లడిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'నేను ఇంతకు ముందు ఎన్నడూ చూడని ఈ విశ్వరూపాన్ని చూసిన తర్వాత, నేను సంతోషంగా ఉన్నాను, కానీ అదే సమయంలో నా మనస్సు భయంతో కలత చెందింది. దయచేసి మీ దయను నాపై కురిపించి, మీ పురుషోత్తమ రూపాన్ని మళ్ళీ వెల్లడించండి.',
          emotion: 'ప్రార్థన'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నిష్కల్మషమైన భక్తి సేవ ద్వారా మాత్రమే నేను ఉన్నట్లుగా, నీ ముందు నిలబడి ఉన్నట్లుగా అర్థం చేసుకోబడతాను, మరియు నేరుగా చూడబడతాను.',
          emotion: 'బోధనాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఓ కృష్ణా, మీ ఈ అందమైన మానవ రూపం చూసి, నేను ఇప్పుడు శాంతించాను మరియు నా సాధారణ మనస్థితికి తిరిగి వచ్చాను.',
          emotion: 'ఉపశమనం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నా ప్రియమైన అర్జునా, ఎవరైతే నా స్వచ్ఛమైన భక్తి సేవలో నిమగ్నమై, ఫలవంతమైన కార్యకలాపాలు మరియు మానసిక ఊహాగానాల కల్మషాల నుండి విముక్తుడై, నా కోసం పనిచేస్తాడో, నన్ను తన జీవిత పరమ లక్ష్యంగా చేసుకుంటాడో, మరియు ప్రతి జీవికి మిత్రుడిగా ఉంటాడో—అతను నిశ్చయంగా నా వద్దకు వస్తాడు.',
          emotion: 'నిర్ణయాత్మక'
        },],
        summary: 'అర్జునుడు కృష్ణుని విశ్వరూపాన్ని చూడాలని కోరతాడు. కృష్ణుడు అతనికి దివ్య దృష్టిని ప్రసాదించి, భయంకరమైన, సర్వవ్యాప్తమైన బ్రహ్మాండ రూపాన్ని వెల్లడిస్తాడు. ఈ దర్శనం కృష్ణుడిని కాలంగా, సర్వనాశకుడిగా చూపుతుంది, యుద్ధ ఫలితం దైవిక సంకల్పం ద్వారా ముందే నిర్ణయించబడిందని నిర్ధారిస్తుంది.',
        teachings: 'విశ్వరూపం దైవం యొక్క సంపూర్ణ శక్తిని మరియు సర్వవ్యాప్త స్వభావాన్ని వెల్లడిస్తుంది. మనమందరం ఒక పెద్ద బ్రహ్మాండ ప్రణాళికలో సాధనాలమని ఇది బోధిస్తుంది. భగవంతుని గురించిన నిజమైన అవగాహన మేధోపరమైన అధ్యయనం నుండి కాకుండా స్వచ్ఛమైన భక్తి నుండి వస్తుంది.',
        moralLesson: 'కొన్నిసార్లు, వాస్తవికత యొక్క పచ్చి శక్తిని ఎదుర్కోవడం భయానకంగా ఉంటుంది, కానీ అది విశ్వంలో మన స్థానాన్ని అర్థం చేసుకోవడానికి సహాయపడుతుంది. నిజమైన బలం ఉన్నత ప్రయోజనానికి శరణాగతి పొందడం మరియు మంచి కోసం ఒక సాధనంగా పనిచేయడం నుండి వస్తుంది.',
        kidsVersion: 'అర్జునుడు కృష్ణుడిని తన అద్భుతమైన, సర్వశక్తివంతమైన రూపాన్ని చూపించమని అడిగాడు. కృష్ణుడు అతనికి విశ్వంలోని ప్రతిదీ ఉన్న ఒక భారీ దర్శనాన్ని చూపించాడు! అది ఒక పెద్ద ఉరుములా కొంచెం భయానకంగా ఉంది, కానీ అది కృష్ణుడే అన్నింటికీ అధిపతి అని మరియు సరైన పని చేయడానికి అతను భయపడకూడదని అర్జునుడికి చూపించింది.'
      },
      12: {
        title: 'భక్తి యోగం',
        subtitle: 'ప్రేమ మార్గం',
        description: 'కృష్ణుడు భక్తి సేవ యొక్క సర్వోన్నత మార్గాన్ని మరియు తన భక్తుల లక్షణాలను వివరిస్తాడు',
        dialogue: [{
          speaker: 'అర్జునుడు',
          text: 'ఎవరు మరింత పరిపూర్ణులుగా పరిగణించబడతారు, ఎల్లప్పుడూ మీ భక్తి సేవలో సరిగ్గా నిమగ్నమై ఉన్నవారా లేక నిరాకార బ్రహ్మాన్ని, అవ్యక్తాన్ని పూజించేవారా?',
          emotion: 'ప్రశ్నిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఎవరైతే తమ మనస్సులను నా వ్యక్తిగత రూపంపై నిలిపి, గొప్ప మరియు అతీంద్రియ విశ్వాసంతో నన్ను ఎల్లప్పుడూ పూజించడంలో నిమగ్నమై ఉంటారో, వారు నాచే అత్యంత పరిపూర్ణులుగా పరిగణించబడతారు.',
          emotion: 'ధృవీకరిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరి అవ్యక్తాన్ని పూజించేవారి గురించి?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఎవరి మనస్సులు పరమాత్మ యొక్క అవ్యక్త, నిరాకార లక్షణానికి అంటిపెట్టుకుని ఉంటాయో, వారికి పురోగతి చాలా కష్టతరం. దేహధారులైన వారికి ఆ క్రమశిక్షణలో పురోగతి సాధించడం ఎల్లప్పుడూ కష్టం.',
          emotion: 'వివరిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అంటే మీ వ్యక్తిగత రూపంపై భక్తి సులభమైన మార్గమా?',
          emotion: 'అర్థం చేసుకున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నీ మనస్సును నాపై నిలుపు, మరియు నీ బుద్ధిని అంతా నాలో నియోగించు. అప్పుడు నీవు ఎల్లప్పుడూ నాలోనే జీవిస్తావు, సందేహం లేదు.',
          emotion: 'బోధనాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఒకవేళ నేను నా మనస్సును చలించకుండా మీపై నిలపలేకపోతే?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నీవు అలా చేయలేకపోతే, భక్తి-యోగం యొక్క నియమాలను అనుసరించు. ఈ విధంగా నన్ను పొందే కోరికను పెంపొందించుకో.',
          emotion: 'మార్గదర్శనం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఒకవేళ నేను నియమాలను కూడా పాటించలేకపోతే?',
          emotion: 'ఆశావాది'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నీవు అలా చేయలేకపోతే, నా కోసం పనిచేయడానికి ప్రయత్నించు; ఎందుకంటే నా కోసం పనిచేయడం ద్వారా నీవు పరిపూర్ణ దశకు చేరుకుంటావు.',
          emotion: 'అనుకూలం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అది కూడా సాధ్యం కాకపోతే?',
          emotion: 'నిరాశ'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'అయితే, నీవు నా ఈ చైతన్యంలో పనిచేయలేకపోతే, నీ పని యొక్క అన్ని ఫలితాలను వదిలివేసి, ఆత్మ-స్థితుడవు కావడానికి ప్రయత్నించు.',
          emotion: 'కరుణ'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మీకు ప్రియమైన భక్తుని లక్షణాలు ఏమిటి?',
          emotion: 'భక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఎవరైతే అసూయపడకుండా, సర్వ జీవులకు దయగల మిత్రుడిగా ఉంటాడో, తనను తాను యజమానిగా భావించడో మరియు మిథ్యా అహంకారం నుండి విముక్తుడై ఉంటాడో, సుఖ దుఃఖాలలో సమానంగా ఉంటాడో, సహనశీలి మరియు ఎల్లప్పుడూ సంతృప్తిగా ఉంటాడో.',
          emotion: 'వివరణ'
        }, {
          speaker: 'అర్జునుడు',
          text: 'దయచేసి మరిన్ని లక్షణాలను చెప్పండి.',
          emotion: 'ఆత్రుత'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఆత్మ-నియంత్రణ కలిగిన, దృఢ సంకల్పంతో భక్తి సేవలో నిమగ్నమైన, మనస్సు మరియు బుద్ధిని నాపై నిలిపిన భక్తుడు—అటువంటి నా భక్తుడు నాకు చాలా ప్రియమైనవాడు.',
          emotion: 'ప్రశంసిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'వారు ప్రపంచంతో ఎలా ప్రవర్తిస్తారు?',
          emotion: 'జిజ్ఞాస'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఎవరి వల్ల ఎవరికీ ఇబ్బంది కలగదో మరియు ఎవరి చేత కలత చెందడో, సుఖ దుఃఖాలలో, భయాందోళనలలో సమచిత్తంతో ఉంటాడో, అతడు నాకు చాలా ప్రియమైనవాడు.',
          emotion: 'ప్రశాంతం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ప్రాపంచిక విషయాల పట్ల వారి వైఖరి ఏమిటి?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'సాధారణ కార్యకలాపాలపై ఆధారపడని, స్వచ్ఛమైన, నిపుణుడైన, చింతలు లేని, అన్ని బాధల నుండి విముక్తుడైన, మరియు ఏ ఫలితం కోసం ప్రయత్నించని నా భక్తుడు నాకు చాలా ప్రియమైనవాడు.',
          emotion: 'అనాసక్తి'
        }, {
          speaker: 'అర్జునుడు',
          text: 'వారు ప్రశంసలు మరియు నిందలను ఎలా నిర్వహిస్తారు?',
          emotion: 'విశ్లేషణాత్మక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'మిత్రులు మరియు శత్రువుల పట్ల సమానంగా ఉండేవాడు, గౌరవావమానాలలో, శీతోష్ణాలలో, సుఖ దుఃఖాలలో, కీర్తి అపకీర్తులలో సమచిత్తంతో ఉండేవాడు, కలుషిత సాంగత్యం నుండి విముక్తుడై, ఎల్లప్పుడూ మౌనంగా మరియు దేనితోనైనా సంతృప్తి చెందేవాడు, నాకు చాలా ప్రియమైనవాడు.',
          emotion: 'సమచిత్తం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఇది సాధించడానికి ఒక ఉన్నత ప్రమాణం.',
          emotion: 'వినయం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఈ అక్షయమైన భక్తి సేవా మార్గాన్ని అనుసరించి, నన్ను పరమ లక్ష్యంగా చేసుకుని, విశ్వాసంతో పూర్తిగా నిమగ్నమయ్యేవారు, నాకు చాలా చాలా ప్రియమైనవారు.',
          emotion: 'నిర్ణయాత్మక'
        }],
        summary: 'భగవంతుడిని వ్యక్తిగత రూపంలో పూజించడం మంచిదా లేదా నిరాకార పరబ్రహ్మంగా పూజించడం మంచిదా అని అర్జునుడు అడుగుతాడు. రెండు మార్గాలూ తన వద్దకే దారితీస్తాయని కృష్ణుడు ప్రకటించినప్పటికీ, తన వ్యక్తిగత రూపం పట్ల ప్రేమపూర్వక భక్తి (భక్తి యోగం) మార్గం చాలా మందికి అత్యంత ప్రత్యక్షమైనది మరియు అనువైనది అని చెబుతాడు. ఆ తర్వాత అతను నిజమైన భక్తుడి అద్భుతమైన లక్షణాలను వివరిస్తాడు.',
        teachings: 'భగవంతుని వ్యక్తిగత రూపం పట్ల భక్తి ఆధ్యాత్మిక సాక్షాత్కారానికి సులభమైన మరియు అత్యంత ప్రభావవంతమైన మార్గం. భగవంతుడు అందరికీ అందుబాటులో ఉంటాడు, మరియు మనం ఎక్కడ ఉన్నా మన ప్రయాణాన్ని ప్రారంభించవచ్చు. దయ, సహనం మరియు సమచిత్తం వంటి లక్షణాలను పెంపొందించుకోవడం ఆధ్యాత్మిక జీవితంలో కీలక భాగం.',
        moralLesson: 'ఒక ఆలోచనను ప్రేమించడం కంటే ఒక వ్యక్తిని ప్రేమించడం సులభం. ప్రేమ మరియు సేవతో నిండిన వ్యక్తిగత సంబంధం ద్వారా భగవంతునితో అనుసంధానం కావడం ఆధ్యాత్మిక ప్రయాణాన్ని ఆనందదాయకంగా మరియు సంతృప్తికరంగా చేస్తుంది. లక్ష్యం కేవలం భగవంతుడి గురించి తెలుసుకోవడం కాదు, భగవంతుడిని ప్రేమించడం.',
        kidsVersion: 'అర్జునుడు అడిగాడు, "భగవంతుడిని ప్రేమించడానికి ఉత్తమ మార్గం ఏది?" కృష్ణుడు అన్నాడు, "భగవంతుడు నీ ఉత్తమ స్నేహితుడని ఊహించుకో. నీవు చిత్రించుకోగల మరియు మాట్లాడగల స్నేహితుడిని ప్రేమించడం సులభం, కదా?" ఉత్తమ భక్తులు అందరి పట్ల దయతో ఉంటారని, సులభంగా కలత చెందరు మరియు పంచుకోవడానికి సంతోషిస్తారని కూడా ఆయన అన్నాడు.'
      },
      13: {
        title: 'క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగం',
        subtitle: 'ప్రకృతి మరియు పురుషుడు',
        description: 'క్షేత్రం (శరీరం) మరియు క్షేత్రజ్ఞుడు (ఆత్మ) మధ్య వ్యత్యాసాన్ని అర్థం చేసుకోవడం',
        dialogue: [{
          speaker: 'అర్జునుడు',
          text: 'ఓ నా ప్రియమైన కృష్ణా, నేను ప్రకృతి, పురుషుడు, మరియు క్షేత్రం మరియు క్షేత్రజ్ఞుడు, మరియు జ్ఞానం మరియు జ్ఞానం యొక్క అంతం గురించి తెలుసుకోవాలనుకుంటున్నాను.',
          emotion: 'జిజ్ఞాస'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఈ శరీరం, ఓ కుంతీ పుత్రుడా, క్షేత్రం అని పిలువబడుతుంది, మరియు ఈ శరీరాన్ని తెలిసినవాడు క్షేత్రజ్ఞుడు అని పిలువబడతాడు.',
          emotion: 'నిర్వచిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అన్ని శరీరాలలో క్షేత్రజ్ఞుడు ఎవరు?',
          emotion: 'ప్రశ్నిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఓ భరతవంశీయుడా, నేను కూడా అన్ని శరీరాలలో క్షేత్రజ్ఞుడనని నీవు అర్థం చేసుకోవాలి, మరియు ఈ శరీరాన్ని, దాని క్షేత్రజ్ఞుడిని అర్థం చేసుకోవడమే జ్ఞానం అని పిలువబడుతుంది.',
          emotion: 'వెల్లడిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ కార్యకలాపాల క్షేత్రం దేనితో కూడి ఉంటుంది?',
          emotion: 'విశ్లేషణాత్మక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'పంచ మహాభూతాలు, మిథ్యా అహంకారం, బుద్ధి, అవ్యక్తం, పది ఇంద్రియాలు మరియు మనస్సు, ఐదు ఇంద్రియార్థాలు, కోరిక, ద్వేషం, సుఖం, దుఃఖం, సమూహం, జీవ లక్షణాలు, మరియు నమ్మకాలు—ఇవన్నీ, సంగ్రహంగా, కార్యకలాపాల క్షేత్రం మరియు దాని పరస్పర చర్యలుగా పరిగణించబడతాయి.',
          emotion: 'వివరణ'
        }, {
          speaker: 'అర్జునుడు',
          text: 'జ్ఞానం పొందే ప్రక్రియ ఏమిటి?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'వినయం; గర్వరాహిత్యం; అహింస; సహనం; సరళత; ప్రామాణిక ఆధ్యాత్మిక గురువును ఆశ్రయించడం; శుభ్రత; స్థిరత్వం; ఆత్మ-నియంత్రణ; వీటిని నేను జ్ఞానంగా ప్రకటిస్తున్నాను.',
          emotion: 'బోధనాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరియు జ్ఞానం యొక్క వస్తువు ఏమిటి?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేను ఇప్పుడు జ్ఞేయాన్ని వివరిస్తాను, దానిని తెలుసుకోవడం ద్వారా నీవు శాశ్వతాన్ని రుచి చూస్తావు. బ్రహ్మం, ఆత్మ, అనాది మరియు నాకు అధీనమైనది, ఈ భౌతిక ప్రపంచం యొక్క కారణం మరియు ప్రభావానికి అతీతంగా ఉంటుంది.',
          emotion: 'గంభీరమైన'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఆత్మ భౌతిక ప్రకృతితో ఎలా సంకర్షణ చెందుతుంది?',
          emotion: 'తాత్విక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'భౌతిక ప్రకృతి మరియు జీవులు అనాది అని అర్థం చేసుకోవాలి. వాటి పరివర్తనలు మరియు పదార్థ గుణాలు భౌతిక ప్రకృతి యొక్క ఉత్పత్తులు. ప్రకృతి అన్ని భౌతిక కారణాలు మరియు ప్రభావాలకు కారణమని చెప్పబడింది, అయితే జీవి ఈ ప్రపంచంలోని వివిధ బాధలు మరియు ఆనందాలకు కారణం.',
          emotion: 'వివరిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అంటే ఆత్మ ప్రకృతితో సంబంధం కారణంగా జీవితాన్ని అనుభవిస్తుందా?',
          emotion: 'అర్థం చేసుకున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'భౌతిక ప్రకృతిలో ఉన్న జీవి ఈ విధంగా జీవిత మార్గాలను అనుసరిస్తుంది, ప్రకృతి యొక్క మూడు గుణాలను అనుభవిస్తుంది. ఇది ఆ భౌతిక ప్రకృతితో దాని అనుబంధం కారణంగా జరుగుతుంది. ఈ విధంగా అది వివిధ జాతుల మధ్య మంచి మరియు చెడులను ఎదుర్కొంటుంది.',
          emotion: 'వివరణాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'వీటన్నింటికీ సాక్షి ఎవరైనా ఉన్నారా?',
          emotion: 'ఊహాజనితం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'అయినప్పటికీ ఈ శరీరంలో మరొకరు ఉన్నారు, ఒక అతీంద్రియ భోక్త, ఆయనే ప్రభువు, పరమ యజమాని, పర్యవేక్షకుడిగా మరియు అనుమతించేవాడిగా ఉంటాడు, మరియు ఆయనను పరమాత్మ అని పిలుస్తారు.',
          emotion: 'వెల్లడిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ సత్యాన్ని ఎలా గ్రహించగలరు?',
          emotion: 'ఆచరణాత్మక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'కొందరు ధ్యానం ద్వారా తమలో పరమాత్మను గ్రహిస్తారు, మరికొందరు జ్ఞాన సాగు ద్వారా, ఇంకొందరు ఫలరహితంగా పనిచేయడం ద్వారా గ్రహిస్తారు.',
          emotion: 'మార్గదర్శనం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరి అంతగా పురోగమించని వారి సంగతేమిటి?',
          emotion: 'ఆందోళన'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'మళ్ళీ, ఆధ్యాత్మిక జ్ఞానంలో ప్రావీణ్యం లేనప్పటికీ, ఇతరుల నుండి ఆయన గురించి విని పరమ పురుషుడిని పూజించడం ప్రారంభించేవారు ఉన్నారు. అధికారులు నుండి వినే వారి ప్రవృత్తి కారణంగా, వారు కూడా జనన మరణాల మార్గాన్ని దాటుతారు.',
          emotion: 'సమగ్ర'
        }, {
          speaker: 'అర్జునుడు',
          text: 'నిజంగా చూసేవాడి దృష్టి ఎలా ఉంటుంది?',
          emotion: 'దార్శనిక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'అన్ని శరీరాలలో వ్యక్తిగత ఆత్మతో పాటు పరమాత్మను చూసేవాడు, మరియు నశించే శరీరంలోని ఆత్మ గానీ, పరమాత్మ గానీ ఎప్పటికీ నాశనం కాదని అర్థం చేసుకున్నవాడు, నిజంగా చూస్తాడు.',
          emotion: 'జ్ఞానోదయం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అంటే ఆత్మ స్వయంగా పనిచేయదా?',
          emotion: 'గ్రహిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'భౌతిక ప్రకృతితో సృష్టించబడిన శరీరం చేత అన్ని కార్యకలాపాలు నిర్వహించబడుతున్నాయని, మరియు ఆత్మ ఏమీ చేయదని చూడగలవాడు, నిజంగా చూస్తాడు.',
          emotion: 'ధృవీకరిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ జ్ఞానం స్వేచ్ఛకు తాళం చెవిలా అనిపిస్తుంది.',
          emotion: 'నిశ్చయం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'జ్ఞాన చక్షువులతో శరీరం మరియు శరీర జ్ఞానికి మధ్య వ్యత్యాసాన్ని చూసేవారు, మరియు భౌతిక ప్రకృతి బంధం నుండి విముక్తి పొందే ప్రక్రియను కూడా అర్థం చేసుకోగలవారు, పరమ గమ్యాన్ని పొందుతారు.',
          emotion: 'నిర్ణయాత్మక'
        }],
        summary: 'కృష్ణుడు పదార్థం మరియు ఆత్మ, కార్యకలాపాల క్షేత్రం మరియు దానిని తెలిసినవాడు మధ్య వ్యత్యాసాన్ని మరియు జ్ఞానం ఎలా విముక్తికి దారితీస్తుందో వివరిస్తాడు.',
        teachings: 'శరీరం కార్యకలాపాల క్షేత్రం, మరియు ఆత్మ తెలిసినవాడు. పరమాత్మ ప్రతి హృదయంలోనూ ఉన్నాడు. ఈ జ్ఞానాన్ని అర్థం చేసుకుని, భగవంతునికి సేవ చేయడం ద్వారా, భౌతిక బంధాలను అధిగమించవచ్చు.',
        moralLesson: 'మనం మన శరీరాలు కాదు, శాశ్వతమైన ఆత్మలం. ఇది అర్థం చేసుకోవడం మనకు అందరినీ సమానంగా చూడటానికి మరియు తాత్కాలిక విషయాలపై ఎక్కువగా ఆసక్తి చూపకుండా ఉండటానికి సహాయపడుతుంది.',
        kidsVersion: 'కృష్ణుడు మనం మన శరీరం కాదు, లోపల ఉన్న ఆత్మ అని బోధించాడు. మనం మన బట్టలు కానట్లే, మనం మన శరీరం కాదు. భగవంతుడు ప్రతిఒక్కరి హృదయంలో స్నేహితుడిగా నివసిస్తాడు.'
      },
      14: {
        title: 'గుణత్రయ విభాగ యోగం',
        subtitle: 'ప్రకృతి యొక్క మూడు గుణాలు',
        description: 'భౌతిక ప్రకృతి యొక్క మూడు గుణాల గురించి ఒక సంభాషణ: సత్త్వ, రజో, మరియు తమో గుణాలు.',
        dialogue: [{
          speaker: 'కృష్ణుడు',
          text: 'నేను నీకు మరల ఈ పరమ జ్ఞానాన్ని, సర్వ జ్ఞానాలలో ఉత్తమమైనదానిని ప్రకటించెదను, దీనిని తెలుసుకుని ఋషులందరూ పరమ సిద్ధిని పొందారు.',
          emotion: 'వాగ్దానం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'దయచేసి భౌతిక ప్రకృతి యొక్క మూడు గుణాలను వివరించండి. అవి జీవిని ఎలా బంధిస్తాయి?',
          emotion: 'జిజ్ఞాస'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'భౌతిక ప్రకృతి సత్త్వ, రజో మరియు తమో గుణాలతో కూడి ఉంటుంది. శాశ్వత జీవి ప్రకృతితో సంబంధంలోకి వచ్చినప్పుడు, ఓ మహాబాహు అర్జునా, అతను ఈ గుణాలచే బంధించబడతాడు.',
          emotion: 'పునాది'
        }, {
          speaker: 'అర్జునుడు',
          text: 'సత్త్వ గుణం యొక్క స్వభావం ఏమిటి?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఓ పాపరహితుడా, సత్త్వ గుణం, ఇతరుల కంటే స్వచ్ఛమైనది, ప్రకాశవంతమైనది, మరియు అది అన్ని పాప కర్మల నుండి విముక్తినిస్తుంది. ఆ గుణంలో ఉన్నవారు సుఖం మరియు జ్ఞానం యొక్క భావనతో బంధించబడతారు.',
          emotion: 'వివరణ'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరియు రజో గుణం?',
          emotion: 'ప్రశ్నిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'రజో గుణం అపరిమితమైన కోరికలు మరియు ఆకాంక్షల నుండి పుడుతుంది, ఓ కుంతీ పుత్రుడా, మరియు దీని కారణంగా దేహధారి జీవి భౌతిక ఫలవంతమైన కార్యకలాపాలకు బంధించబడతాడు.',
          emotion: 'విశ్లేషణాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'తమో గుణం గురించి ఏమిటి?',
          emotion: 'ఆందోళన'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఓ భరత పుత్రుడా, అజ్ఞానం నుండి పుట్టిన తమో గుణం, సర్వ దేహధారి జీవుల భ్రమ అని తెలుసుకో. ఈ గుణం యొక్క ఫలితాలు ఉన్మాదం, సోమరితనం మరియు నిద్ర, ఇవి బంధిత ఆత్మను బంధిస్తాయి.',
          emotion: 'హెచ్చరిక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ గుణాలు ఒకదానితో ఒకటి ఎలా పోటీపడతాయి?',
          emotion: 'గమనిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'కొన్నిసార్లు సత్త్వ గుణం ప్రబలంగా ఉండి, రజో మరియు తమో గుణాలను ఓడిస్తుంది. కొన్నిసార్లు రజో గుణం సత్త్వ మరియు తమో గుణాలను ఓడిస్తుంది. మరియు ఇతర సమయాల్లో తమో గుణం సత్త్వ మరియు రజో గుణాలను ఓడిస్తుంది.',
          emotion: 'వివరణాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ ప్రతి గుణంలో మరణించినవారికి ఏమి జరుగుతుంది?',
          emotion: 'పర్యవసానం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'సత్త్వ గుణంలో మరణించినప్పుడు, అతను మహర్షుల స్వచ్ఛమైన ఉన్నత లోకాలను పొందుతాడు. రజో గుణంలో మరణించినప్పుడు, అతను ఫలవంతమైన కార్యకలాపాలలో నిమగ్నమైన వారి మధ్య జన్మిస్తాడు; మరియు తమో గుణంలో మరణించినప్పుడు, అతను జంతు రాజ్యంలో జన్మిస్తాడు.',
          emotion: 'బోధనాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ గుణాలను ఎలా అధిగమించవచ్చు?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఒకరు ఈ మూడు గుణాలను అధిగమించగలిగినప్పుడు, అతను జనన, మరణ, వృద్ధాప్యం మరియు వాటి బాధల నుండి విముక్తుడై, ఈ జీవితంలో కూడా అమృతాన్ని ఆస్వాదించగలడు.',
          emotion: 'విముక్తి'
        }, {
          speaker: 'అర్జునుడు',
          text: 'గుణాలను అధిగమించిన వ్యక్తి యొక్క లక్షణాలు ఏమిటి?',
          emotion: 'వివేచన'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ప్రకాశం, ఆసక్తి మరియు భ్రమ ఉన్నప్పుడు ద్వేషించనివాడు లేదా అవి అదృశ్యమైనప్పుడు వాటి కోసం ఆరాటపడనివాడు; ఈ భౌతిక గుణాల అన్ని ప్రతిచర్యల ద్వారా అచంచలంగా మరియు కలత చెందకుండా, తటస్థంగా మరియు అతీతంగా ఉండేవాడు.',
          emotion: 'వర్ణిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'అటువంటి వ్యక్తి ఎలా ప్రవర్తిస్తాడు?',
          emotion: 'ప్రవర్తనా'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఆత్మలో స్థితుడై, సుఖ దుఃఖాలను సమానంగా పరిగణించేవాడు; మట్టి గడ్డ, రాయి మరియు బంగారు ముక్కను సమాన దృష్టితో చూసేవాడు; ఇష్టమైన మరియు అయిష్టమైన వాటి పట్ల సమానంగా ఉండేవాడు; స్థిరమైనవాడు, ప్రశంసలు మరియు నిందలలో సమానంగా స్థితుడై ఉండేవాడు.',
          emotion: 'సమచిత్తం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ అతీంద్రియ స్థితిని సాధించే సాధనం ఏమిటి?',
          emotion: 'ఆచరణాత్మక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'అన్ని పరిస్థితులలోనూ తప్పకుండా, పూర్తి భక్తి సేవలో నిమగ్నమైనవాడు, వెంటనే భౌతిక ప్రకృతి గుణాలను అధిగమించి, బ్రహ్మ స్థాయికి చేరుకుంటాడు.',
          emotion: 'నిర్ణయాత్మక'
        }],
        summary: 'కృష్ణుడు సమస్త జీవులను ప్రభావితం చేసే సత్త్వ, రజో, తమో గుణాలనే భౌతిక ప్రకృతి యొక్క మూడు గుణాలను వివరిస్తాడు. ఈ గుణాలు ఆత్మను ఎలా బంధిస్తాయో మరియు భక్తి సేవ ద్వారా వాటిని ఎలా అధిగమించవచ్చో వివరిస్తాడు.',
        teachings: 'ప్రకృతి యొక్క మూడు గుణాలు మన అస్తిత్వాన్ని నిర్దేశిస్తాయి. సత్త్వగుణం సుఖానికి మరియు జ్ఞానానికి, రజోగుణం తీవ్రమైన కార్యకలాపాలకు మరియు కోరికలకు, మరియు తమోగుణం భ్రమకు దారితీస్తుంది. భక్తి సేవలో నిమగ్నం కావడం ద్వారా, మనం ఈ గుణాలను అధిగమించి ఆధ్యాత్మిక సాక్షాత్కారాన్ని సాధించవచ్చు.',
        moralLesson: 'మన చర్యలు మరియు వైఖరులు ప్రకృతి గుణాలచే ప్రభావితమవుతాయి. సత్త్వగుణం కోసం ప్రయత్నించి, ఆధ్యాత్మిక అభ్యాసాలలో నిమగ్నం కావడం ద్వారా, మనం తక్కువ గుణాలను అధిగమించి, ఉద్దేశ్యం మరియు స్పష్టత గల జీవితం వైపు పయనించవచ్చు.',
        kidsVersion: 'మీ దగ్గర మూడు రకాల కళ్ళద్దాలు ఉన్నాయని ఊహించుకోండి. ఒకటి ప్రతిదీ సంతోషంగా మరియు ప్రకాశవంతంగా కనిపించేలా చేస్తుంది (సత్త్వం), ఒకటి మిమ్మల్ని చుట్టూ పరుగెత్తి లక్ష పనులు చేయాలనిపిస్తుంది (రజస్సు), మరియు ఒకటి మీకు నిద్ర మరియు గందరగోళాన్ని కలిగిస్తుంది (తమస్సు). కృష్ణుడు ఈ కళ్ళద్దాలన్నింటినీ తీసివేసి, వస్తువులను యథాతథంగా ఎలా చూడాలో మనకు బోధిస్తాడు.'
      },
      15: {
        title: 'పురుషోత్తమ యోగం',
        subtitle: 'పరమ పురుషుని యోగం',
        description: 'కృష్ణుడు భౌతిక ప్రపంచాన్ని ఒక తలక్రిందులుగా ఉన్న మర్రి చెట్టుగా వర్ణించి, తనను తాను పరమ పురుషుడిగా వెల్లడిస్తాడు.',
        dialogue: [{
          speaker: 'కృష్ణుడు',
          text: 'ఒక శాశ్వతమైన మర్రి చెట్టు ఉందని చెప్పబడింది, దాని వేర్లు పైకి మరియు కొమ్మలు కిందికి ఉంటాయి మరియు దాని ఆకులు వేద మంత్రాలు. ఈ చెట్టును తెలిసినవాడు వేదాలను తెలిసినవాడు.',
          emotion: 'రూపకం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'తలక్రిందులుగా ఉన్న చెట్టా? ఇది దేనికి ప్రతీక?',
          emotion: 'గందరగోళం'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఈ చెట్టు భౌతిక ప్రపంచాన్ని సూచిస్తుంది. దాని కొమ్మలు కిందికి మరియు పైకి విస్తరించి, భౌతిక ప్రకృతి యొక్క మూడు గుణాలచే పోషించబడతాయి. దాని వేర్లు, మానవ సమాజం యొక్క ఫలవంతమైన చర్యలు, ఈ ప్రపంచానికి బంధించబడి ఉంటాయి.',
          emotion: 'వివరణాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ చిక్కు నుండి ఎలా విముక్తి పొందగలరు?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఈ చెట్టు యొక్క నిజమైన రూపం ఈ ప్రపంచంలో గ్రహించబడదు. వైరాగ్యమనే ఆయుధంతో ఈ గట్టిగా పాతుకుపోయిన చెట్టును నరికివేయాలి. ఆ తర్వాత, ఒకసారి వెళ్ళిన తర్వాత తిరిగి రాని స్థలాన్ని వెతకాలి.',
          emotion: 'బోధనాత్మక'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఈ భౌతిక ప్రపంచంలోని ఆత్మ యొక్క స్వభావం ఏమిటి?',
          emotion: 'జిజ్ఞాస'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఈ బంధిత ప్రపంచంలోని జీవులు నా శాశ్వతమైన అంశాలు. బంధిత జీవితం కారణంగా, వారు మనస్సుతో సహా ఆరు ఇంద్రియాలతో చాలా కష్టపడి పోరాడుతున్నారు.',
          emotion: 'వెల్లడిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'ఆత్మ ఒక శరీరం నుండి మరొక శరీరానికి ఎలా ప్రయాణిస్తుంది?',
          emotion: 'ఆసక్తి'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'భౌతిక ప్రపంచంలోని జీవి, గాలి సువాసనలను మోసుకెళ్ళినట్లుగా, తన వివిధ జీవిత భావనలను ఒక శరీరం నుండి మరొక శరీరానికి మోసుకెళ్తాడు. ఈ విధంగా అతను ఒక రకమైన శరీరాన్ని తీసుకుని, మళ్ళీ దానిని విడిచిపెట్టి మరొకటి తీసుకుంటాడు.',
          emotion: 'వివరణ'
        }, {
          speaker: 'అర్జునుడు',
          text: 'చాలా మంది దీనిని ఎందుకు గ్రహించలేరు?',
          emotion: 'ప్రశ్నిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ఒక జీవి తన శరీరాన్ని ఎలా విడిచిపెట్టగలడో మూర్ఖులు అర్థం చేసుకోలేరు, లేదా ప్రకృతి గుణాల మాయలో అతను ఏ రకమైన శరీరాన్ని అనుభవిస్తాడో కూడా వారు అర్థం చేసుకోలేరు. కానీ జ్ఞానంలో శిక్షణ పొందిన కళ్ళు ఉన్నవాడు ఇదంతా చూడగలడు.',
          emotion: 'వివేచన'
        }, {
          speaker: 'అర్జునుడు',
          text: 'సూర్యచంద్రుల కాంతి ఎక్కడ నుండి వస్తుంది?',
          emotion: 'బ్రహ్మాండ'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'ప్రపంచమంతటినీ ప్రకాశింపజేసే సూర్యుని తేజస్సు, చంద్రుని తేజస్సు మరియు అగ్ని తేజస్సు అన్నీ నా నుండే వస్తాయి.',
          emotion: 'మూలం'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మీరు సమస్త జీవనాన్ని ఎలా పోషిస్తారు?',
          emotion: 'ఆశ్చర్యపోతున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేను ప్రతి గ్రహంలోకి ప్రవేశిస్తాను, మరియు నా శక్తితో అవి కక్ష్యలో ఉంటాయి. నేను చంద్రుడినై, తద్వారా అన్ని కూరగాయలకు జీవ రసాన్ని సరఫరా చేస్తాను. నేను సర్వ జీవుల శరీరాలలో జీర్ణశక్తి అనే అగ్నిని.',
          emotion: 'పోషించేవాడు'
        }, {
          speaker: 'అర్జునుడు',
          text: 'జ్ఞానం మరియు విస్మృతి ఎక్కడ నుండి వస్తాయి?',
          emotion: 'తాత్విక'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేను ప్రతిఒక్కరి హృదయంలో ఆసీనుడనై ఉన్నాను, మరియు నా నుండే స్మృతి, జ్ఞానం మరియు విస్మృతి వస్తాయి. వేదాలన్నిటి ద్వారా, నేను తెలుసుకోదగినవాడిని. నిజానికి, నేను వేదాంతాన్ని సంకలనం చేసినవాడిని, మరియు నేను వేదాలను తెలిసినవాడిని.',
          emotion: 'సర్వజ్ఞుడు'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మీరు చెప్పే పరమ పురుషుడు ఎవరు?',
          emotion: 'అన్వేషిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'రెండు రకాల జీవులు ఉన్నారు, నశించేవారు మరియు నశించనివారు. భౌతిక ప్రపంచంలో ప్రతి జీవి నశించేది, మరియు ఆధ్యాత్మిక ప్రపంచంలో ప్రతి జీవి నశించనిది అని పిలువబడుతుంది. ఈ రెండింటితో పాటు, గొప్ప జీవ వ్యక్తిత్వం, పరమాత్మ, అవినాశి అయిన ప్రభువు స్వయంగా ఉన్నాడు.',
          emotion: 'నిర్వచిస్తున్న'
        }, {
          speaker: 'అర్జునుడు',
          text: 'మరియు ఆ పరమ పురుషుడు మీరేనా?',
          emotion: 'గ్రహిస్తున్న'
        }, {
          speaker: 'కృష్ణుడు',
          text: 'నేను అతీతుడను కాబట్టి, నశించే మరియు నశించని రెండింటికీ అతీతుడను కాబట్టి, మరియు నేను గొప్పవాడిని కాబట్టి, నేను ప్రపంచంలో మరియు వేదాలలో ఆ పరమ పురుషుడిగా కీర్తించబడతాను.',
          emotion: 'నిర్ణయాత్మక'
        }],
        summary: 'కృష్ణుడు భౌతిక ప్రపంచాన్ని ఒక తలక్రిందులుగా ఉన్న మర్రి చెట్టు యొక్క రూపకాలం ద్వారా వివరిస్తాడు మరియు తాను నశించే మరియు నశించని వారికి అతీతుడైన పరమ పురుషుడు, పురుషోత్తముడని వివరిస్తాడు.',
        teachings: 'భౌతిక ప్రపంచం ఒక తాత్కాలిక మరియు భ్రాంతికరమైన వాస్తవికత. వైరాగ్యాన్ని పెంపొందించుకుని, పరమ పురుషుడికి శరణాగతి పొందడం ద్వారా, విముక్తిని పొందవచ్చు. కృష్ణుడు అంతిమ వాస్తవికత, అన్నింటికీ మూలం మరియు పోషకుడు.',
        moralLesson: 'మనం ఈ ప్రపంచంలోని వస్తువులకు ఎక్కువగా అంటిపెట్టుకోకూడదు, ఎందుకంటే అవి తాత్కాలికమైనవి. మన ఆధ్యాత్మిక అభివృద్ధి మరియు పరమాత్మతో అనుబంధంపై దృష్టి పెట్టడం ద్వారా, మనం నిజమైన మరియు శాశ్వతమైన ఆనందాన్ని పొందవచ్చు.',
        kidsVersion: 'కృష్ణుడు ప్రపంచం ఒక పెద్ద, తలక్రిందులుగా ఉన్న చెట్టు లాంటిదని చెబుతాడు. మనం దాని కొమ్మలలో చిక్కుకుపోవచ్చు, కానీ మన దగ్గర ఒక పటం (ఆధ్యాత్మిక జ్ఞానం) మరియు పదునైన గొడ్డలి (వైరాగ్యం) ఉంటే, మనం బయటపడి ఆయనతో పాటు కాంతి మరియు ఆనందం యొక్క నిజమైన ప్రపంచానికి తిరిగి రావచ్చు.'
      },
      16: {
                title: 'దైవాసుర సంపద్విభాగ యోగం',
                subtitle: 'దైవ మరియు అసుర స్వభావాలు',
                description: 'కృష్ణుడు దైవ మరియు అసుర గుణాలను మరియు వాటి పరిణామాలను వివరిస్తాడు',
                dialogue: [
                    { speaker: 'కృష్ణుడు', text: 'నిర్భయత్వం, తన అస్తిత్వాన్ని శుద్ధి చేసుకోవడం, ఆధ్యాత్మిక జ్ఞానాన్ని పెంపొందించుకోవడం, దానం, ఆత్మ-నియంత్రణ, యజ్ఞం చేయడం—ఈ అతీంద్రియ లక్షణాలు దైవిక స్వభావం గల దైవ పురుషులకు చెందినవి.', emotion: 'సద్గుణాల జాబితా' },
                    { speaker: 'అర్జునుడు', text: 'ఇతర దైవిక లక్షణాలు ఏమిటి?', emotion: 'ఆసక్తి' },
                    { speaker: 'కృష్ణుడు', text: 'అహింస, సత్యం, క్రోధం నుండి విముక్తి, త్యాగం, శాంతి, దోషారోపణల పట్ల విరక్తి, సర్వ జీవుల పట్ల దయ, లోభం నుండి విముక్తి, సౌమ్యత, వినయం, స్థిరమైన సంకల్పం.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'మరియు అసుర లక్షణాలు ఏమిటి, ఓ కృష్ణా?', emotion: 'వ్యతిరేకం' },
                    { speaker: 'కృష్ణుడు', text: 'గర్వం, అహంకారం, పొగరు, క్రోధం, కఠినత్వం మరియు అజ్ఞానం—ఈ లక్షణాలు అసుర స్వభావం కలవారికి చెందినవి.', emotion: 'హెచ్చరిక' },
                    { speaker: 'అర్జునుడు', text: 'ఈ రెండు స్వభావాలు దేనికి దారితీస్తాయి?', emotion: 'పర్యవసానం' },
                    { speaker: 'కృష్ణుడు', text: 'దైవ గుణాలు ముక్తికి దోహదం చేస్తాయి, అయితే అసుర గుణాలు బంధానికి కారణమవుతాయి. చింతించకు, ఓ పాండుపుత్రుడా, నీవు దైవ గుణాలతో జన్మించావు.', emotion: 'భరోసా' },
                    { speaker: 'అర్జునుడు', text: 'అసుర స్వభావం కలవారు ప్రపంచాన్ని ఎలా చూస్తారు?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ ప్రపంచం అవాస్తవమని, ఆధారరహితమని, దేవుని నియంత్రణలో లేదని వారు అంటారు. ఇది కామవాంఛ నుండి పుట్టిందని, కామం తప్ప మరే కారణం లేదని వారు అంటారు.', emotion: 'వివరణాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'జీవితం పట్ల వారి దృక్పథం ఏమిటి?', emotion: 'విశ్లేషణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'ఇంద్రియాలను తృప్తిపరచడమే మానవ నాగరికత యొక్క ప్రధాన అవసరమని వారు నమ్ముతారు. జీవితాంతం వరకు వారి ఆందోళన అపరిమితంగా ఉంటుంది. వందల వేల కోరికల వలలో చిక్కుకుని, కామక్రోధాలలో మునిగి, ఇంద్రియ సుఖాల కోసం అక్రమ మార్గాల్లో డబ్బు సంపాదిస్తారు.', emotion: 'విమర్శనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'ఇది ఒక దయనీయమైన జీవితంలా అనిపిస్తుంది.', emotion: 'గమనిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ ఆందోళనలన్నిటితో కలవరపడి, భ్రమల వలలో చిక్కుకుని, వారు ఇంద్రియ భోగాలకు చాలా బలంగా అంటుకుపోయి నరకంలో పడతారు.', emotion: 'ధృవీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అలాంటి వారు మిమ్మల్ని ఎప్పుడైనా పొందుతారా?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అసూయపరులు మరియు దుష్టులు, మనుషులలో అధములు అయిన వారిని నేను నిరంతరం భౌతిక అస్తిత్వపు సముద్రంలో, వివిధ అసుర జాతుల జీవితంలోకి పడవేస్తాను.', emotion: 'న్యాయం' },
                    { speaker: 'అర్జునుడు', text: 'ఈ నరక జీవితానికి ద్వారాలు ఏవి?', emotion: 'జాగ్రత్త' },
                    { speaker: 'కృష్ణుడు', text: 'ఈ నరకానికి మూడు ద్వారాలు ఉన్నాయి—కామం, క్రోధం మరియు లోభం. ప్రతి వివేకవంతుడు వీటిని విడిచిపెట్టాలి, ఎందుకంటే అవి ఆత్మ పతనానికి దారితీస్తాయి.', emotion: 'తీవ్ర హెచ్చరిక' },
                    { speaker: 'అర్జునుడు', text: 'మరియు ఈ మూడు ద్వారాల నుండి తప్పించుకున్నవాడు?', emotion: 'ఆశావాది' },
                    { speaker: 'కృష్ణుడు', text: 'నరకం యొక్క ఈ మూడు ద్వారాల నుండి తప్పించుకున్నవాడు, ఓ కుంతీ పుత్రుడా, ఆత్మ-సాక్షాత్కారానికి అనుకూలమైన కార్యాలు చేసి, క్రమంగా పరమ గమ్యాన్ని పొందుతాడు.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'ఏది చేయాలో, ఏది చేయకూడదో ఎలా తెలుసుకోవాలి?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'శాస్త్ర విధులను విస్మరించి, తన ఇష్టానుసారం ప్రవర్తించేవాడు పరిపూర్ణతను, సుఖాన్ని, లేదా పరమ గమ్యాన్ని పొందడు. అందువల్ల శాస్త్ర నిబంధనల ద్వారా ఏది కర్తవ్యమో, ఏది కాదో అర్థం చేసుకోవాలి.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'అంటే అన్ని పనులలో శాస్త్రాలే నాకు మార్గదర్శకమా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అవును, శాస్త్ర నియమాలను తెలుసుకుని, నీవు క్రమంగా ఉన్నతి పొందేలా ప్రవర్తించాలి.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'కృష్ణుడు దైవ మరియు అసుర గుణాలను, వాటి పరిణామాలను వివరిస్తాడు మరియు ఆధ్యాత్మిక అభివృద్ధికి శాస్త్ర మార్గదర్శకాలను అనుసరించడంపై నొక్కి చెబుతాడు.',
                teachings: 'నిర్భయత్వం, పవిత్రత మరియు నిజాయితీ వంటి దైవ గుణాలు ముక్తికి దారితీస్తాయి. గర్వం, క్రోధం మరియు లోభం వంటి అసుర గుణాలు బంధానికి దారితీస్తాయి. సరైన ప్రవర్తనకు శాస్త్రాలు మార్గనిర్దేశం చేస్తాయి.',
                moralLesson: 'మనం దయ, నిజాయితీ మరియు ఆత్మ-నియంత్రణ వంటి మంచి లక్షణాలను పెంపొందించుకోవాలి మరియు క్రోధం, లోభం మరియు గర్వం వంటి చెడు లక్షణాలకు దూరంగా ఉండాలి.',
                kidsVersion: 'కృష్ణుడు మంచి మరియు చెడు గుణాల గురించి బోధించాడు. మంచి వాళ్ళు దయ, నిజాయితీ మరియు సహాయం చేసే గుణం కలిగి ఉంటారు. చెడ్డవాళ్ళు కోపిష్ఠులుగా, అత్యాశపరులుగా మరియు క్రూరంగా ఉంటారు. మనం ఎప్పుడూ మంచిగా ఉండటానికి ప్రయత్నించాలి.'
            },
            17: {
                title: 'శ్రద్ధాత్రయ విభాగ యోగం',
                subtitle: 'శ్రద్ధ యొక్క మూడు రకాలు',
                description: 'శ్రద్ధ యొక్క మూడు రకాలు—సత్త్వ, రజో, మరియు తమో—మరియు అవి ఆరాధన, ఆహారం మరియు దానంలో ఎలా వ్యక్తమవుతాయో అన్వేషణ.',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ కృష్ణా, శాస్త్ర సూత్రాలను పాటించకుండా తమ స్వంత కల్పన ప్రకారం పూజలు చేసేవారి పరిస్థితి ఏమిటి? వారు సత్త్వంలో ఉన్నారా, రజస్సులోనా లేక తమస్సులోనా?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'దేహధారి ఆత్మ పొందిన ప్రకృతి గుణాల ప్రకారం, వారి శ్రద్ధ మూడు రకాలుగా ఉంటుంది—సత్త్వంలో, రజస్సులో లేదా తమస్సులో. ఇప్పుడు దాని గురించి విను.', emotion: 'వర్గీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'శ్రద్ధ ఒకరి స్వభావాన్ని ఎలా నిర్ధారిస్తుంది?', emotion: 'ఆసక్తి' },
                    { speaker: 'కృష్ణుడు', text: 'ఓ భరతపుత్రుడా, ప్రకృతి యొక్క వివిధ గుణాల క్రింద వారి ఉనికి ప్రకారం, ఒకరు ఒక ప్రత్యేక రకమైన శ్రద్ధను పెంపొందించుకుంటారు. జీవి తాను పొందిన గుణాల ప్రకారం ఒక ప్రత్యేక శ్రద్ధ కలవాడని చెప్పబడింది.', emotion: 'వివరణాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'ఈ వివిధ రకాల శ్రద్ధ పూజలో ఎలా వ్యక్తమవుతుంది?', emotion: 'విచారిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'సత్త్వ గుణంలో ఉన్నవారు దేవతలను పూజిస్తారు; రజో గుణంలో ఉన్నవారు యక్షరాక్షసులను పూజిస్తారు; మరియు తమో గుణంలో ఉన్నవారు భూతప్రేతాలను పూజిస్తారు.', emotion: 'భేదం చూపుతున్న' },
                    { speaker: 'అర్జునుడు', text: 'మరియు ఇది మనం తినే ఆహారానికి ఎలా వర్తిస్తుంది?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'సత్త్వ గుణంలో ఉన్నవారికి ప్రియమైన ఆహారాలు ఆయుష్షును పెంచుతాయి, ఉనికిని శుద్ధి చేస్తాయి మరియు బలం, ఆరోగ్యం, ఆనందం మరియు సంతృప్తిని ఇస్తాయి. అటువంటి ఆహారాలు రసవంతమైనవి, కొవ్వు పదార్థాలు కలిగినవి, ఆరోగ్యకరమైనవి మరియు హృదయానికి ఆహ్లాదకరమైనవి.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'రజో మరియు తమో గుణాలలోని ఆహారాల గురించి ఏమిటి?', emotion: 'వ్యతిరేకం' },
                    { speaker: 'కృష్ణుడు', text: 'అత్యంత చేదుగా, పుల్లగా, ఉప్పగా, వేడిగా, ఘాటుగా, పొడిగా మరియు మండే స్వభావం గల ఆహారాలు రజో గుణంలో ఉన్నవారికి ప్రియమైనవి. అటువంటి ఆహారాలు దుఃఖం, కష్టం మరియు వ్యాధిని కలిగిస్తాయి. వండిన మూడు గంటల తర్వాత తినే ఆహారం, రుచిలేని, కుళ్ళిన మరియు దుర్గంధమైన ఆహారం, మరియు మిగిలిపోయిన మరియు అంటరాని వస్తువులతో కూడిన ఆహారం తమో గుణంలో ఉన్నవారికి ప్రియమైనది.', emotion: 'హెచ్చరిక' },
                    { speaker: 'అర్జునుడు', text: 'గుణాలు యజ్ఞాన్ని ఎలా ప్రభావితం చేస్తాయి?', emotion: 'విశ్లేషణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'శాస్త్ర నిర్దేశాల ప్రకారం, కర్తవ్యంగా, ప్రతిఫలం కోరని వారిచే చేయబడిన యజ్ఞం సత్త్వ గుణ స్వభావం కలది.', emotion: 'మూల్యాంకనం' },
                    { speaker: 'అర్జునుడు', text: 'మరియు తపస్సు?', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'శరీర తపస్సు అంటే పరమాత్మ, బ్రాహ్మణులు, ఆధ్యాత్మిక గురువు మరియు తల్లిదండ్రుల వంటి పెద్దలను పూజించడం, మరియు శుభ్రత, సరళత, బ్రహ్మచర్యం మరియు అహింస పాటించడం.', emotion: 'బోధనాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'వివిధ గుణాలలో దానం గురించి ఏమిటి?', emotion: 'వివేచన' },
                    { speaker: 'కృష్ణుడు', text: 'కర్తవ్యంగా, ప్రతిఫలం ఆశించకుండా, సరైన సమయంలో మరియు ప్రదేశంలో, మరియు యోగ్యుడైన వ్యక్తికి ఇవ్వబడిన దానం సత్త్వ గుణంలో ఉన్నట్లుగా పరిగణించబడుతుంది.', emotion: 'నిర్వచిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: '"ఓం తత్ సత్" యొక్క ప్రాముఖ్యత ఏమిటి?', emotion: 'పవిత్రమైన' },
                    { speaker: 'కృష్ణుడు', text: 'సృష్టి ప్రారంభం నుండి, ఓం, తత్ మరియు సత్ అనే మూడు పదాలు పరమ సత్యాన్ని సూచించడానికి ఉపయోగించబడ్డాయి. అందువల్ల, శ్రద్ధతో చేయబడిన యజ్ఞ, దాన మరియు తపస్సు కర్మలు ఎల్లప్పుడూ పరమాత్మను పొందడానికి "ఓం" తో ప్రారంభించబడతాయి.', emotion: 'గంభీరమైన' },
                    { speaker: 'అర్జునుడు', text: 'ఈ కర్మలు శ్రద్ధ లేకుండా చేస్తే ఏమిటి?', emotion: 'ఆందోళన' },
                    { speaker: 'కృష్ణుడు', text: 'పరమాత్మపై శ్రద్ధ లేకుండా యజ్ఞం, దానం లేదా తపస్సుగా చేయబడిన ఏదైనా అశాశ్వతమైనది. దానిని "అసత్" అని పిలుస్తారు మరియు అది ఈ జీవితంలో మరియు తదుపరి జీవితంలో నిరుపయోగం.', emotion: 'నిశ్చయాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'అంటే శ్రద్ధ అత్యంత ఆవశ్యకమైన అంశమా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అవును, అర్జునా. శ్రద్ధ, సత్త్వ గుణంలో ఉండి, శాస్త్రాలచే మార్గనిర్దేశం చేయబడినప్పుడు, ఒకరిని అత్యున్నత పరిపూర్ణతకు తీసుకువెళుతుంది.', emotion: 'నిర్ణయాత్మక' }
                ],
                summary: 'శ్రద్ధ మూడు గుణాలలో ఒకటిగా ఉండవచ్చని కృష్ణుడు వివరిస్తాడు: సత్త్వం, రజస్సు, లేదా తమస్సు. ఇది ఒకరి పూజ, ఆహారం, తపస్సు మరియు దానాన్ని ప్రభావితం చేస్తుంది. శ్రద్ధ లేకుండా చేసే ఏ ఆధ్యాత్మిక అభ్యాసమైనా చివరికి నిరుపయోగమని ఆయన నొక్కి చెబుతాడు.',
                teachings: 'ఆరోగ్యకరమైన ఆహారాన్ని ఎంచుకోవడం, గౌరవప్రదంగా పూజించడం మరియు అపేక్ష లేకుండా దానం చేయడం ద్వారా మీ శ్రద్ధను సత్త్వ గుణంతో సమలేఖనం చేసుకోండి. "ఓం తత్ సత్" అనే పదబంధం పరమ సత్యాన్ని సూచిస్తుంది. అన్ని ఆధ్యాత్మిక అభ్యాసాలలో శ్రద్ధ అత్యంత అవసరమైన అంశం.',
                moralLesson: 'మీ శ్రద్ధ యొక్క నాణ్యత మీ జీవితం యొక్క నాణ్యతను నిర్ధారిస్తుంది. స్వచ్ఛమైన ఉద్దేశ్యాలతో మరియు స్వార్థపూరిత కోరికలు లేకుండా సత్త్వంలో పనిచేయడానికి ప్రయత్నించండి. ఇది ఆధ్యాత్మిక అభివృద్ధికి మరియు ఆనందానికి దారితీస్తుంది.',
                kidsVersion: 'మీకు మూడు రకాల కళ్ళద్దాలు ఉన్నాయని ఊహించుకోండి: స్పష్టమైనవి, ఎర్రటివి మరియు బూడిద రంగువి. మీరు స్పష్టమైన కళ్ళద్దాలు (సత్త్వం) ధరించినప్పుడు, మీరు ప్రతిదీ చక్కగా చూస్తారు. మీరు ఎర్రటి కళ్ళద్దాలు (రజస్సు) ధరించినప్పుడు, ప్రతిదీ ఉద్రేకంగా కనిపిస్తుంది మరియు మీరు ఇంకా ఎక్కువ కోరుకుంటారు. మీరు బూడిద రంగు కళ్ళద్దాలు (తమస్సు) ధరించినప్పుడు, ప్రతిదీ చీకటిగా మరియు గందరగోళంగా ఉంటుంది. మంచి విషయాలపై విశ్వాసం ఉంచడం, ఆరోగ్యకరమైన ఆహారం తినడం మరియు ఇతరుల పట్ల దయగా ఉండటం ద్వారా ఎల్లప్పుడూ స్పష్టమైన కళ్ళద్దాలను ఉపయోగించాలని కృష్ణుడు మనకు బోధిస్తాడు.'
            },
            18: {
                title: 'మోక్ష సన్యాస యోగం',
                subtitle: 'శరణాగతి ద్వారా విముక్తి',
                description: 'కృష్ణుడు త్యాగం, నిస్వార్థ కర్మ మరియు సంపూర్ణ శరణాగతి ద్వారా విముక్తి మార్గంపై తన అంతిమ బోధనలను అందిస్తాడు.',
                dialogue: [
                    { speaker: 'అర్జునుడు', text: 'ఓ మహాబాహు, నేను త్యాగం [త్యాగ] మరియు సన్యాసం [సన్న్యాస] యొక్క ఉద్దేశ్యాన్ని అర్థం చేసుకోవాలనుకుంటున్నాను.', emotion: 'అన్వేషిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'భౌతిక కోరికపై ఆధారపడిన కార్యకలాపాలను విడిచిపెట్టడాన్ని గొప్ప పండితులు సన్యాసం అని పిలుస్తారు. మరియు అన్ని కార్యకలాపాల ఫలితాలను విడిచిపెట్టడాన్ని జ్ఞానులు త్యాగం అని పిలుస్తారు.', emotion: 'నిర్వచిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అన్ని పనులను విడిచిపెట్టాలా?', emotion: 'ప్రశ్నిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'యజ్ఞ, దాన మరియు తపస్సు కార్యాలను విడిచిపెట్టకూడదు; వాటిని తప్పక చేయాలి. నిజానికి, యజ్ఞం, దానం మరియు తపస్సు గొప్ప ఆత్మలను కూడా శుద్ధి చేస్తాయి.', emotion: 'వివరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అన్ని కర్మల సాధనకు ఐదు కారణాలు ఏమిటి?', emotion: 'జిజ్ఞాస' },
                    { speaker: 'కృష్ణుడు', text: 'కర్మ స్థానం [శరీరం], కర్త, వివిధ ఇంద్రియాలు, అనేక రకాల ప్రయత్నాలు, మరియు చివరికి పరమాత్మ—ఇవి కర్మ యొక్క ఐదు కారకాలు.', emotion: 'విశ్లేషణాత్మక' },
                    { speaker: 'అర్జునుడు', text: 'ప్రకృతి గుణాలు వివిధ రకాల పనులకు ఎలా సంబంధం కలిగి ఉంటాయి?', emotion: 'ఆసక్తి' },
                    { speaker: 'కృష్ణుడు', text: 'బ్రాహ్మణ, క్షత్రియ, వైశ్య మరియు శూద్రుల పనులు విభిన్నంగా ఉంటాయి, అలాగే వారి పని యొక్క గుణాలు కూడా, ఓ శత్రువులను శిక్షించేవాడా.', emotion: 'వివరణ' },
                    { speaker: 'అర్జునుడు', text: 'ఒకరు తమ స్వంత పనిని చేయడం ద్వారా పరిపూర్ణతను ఎలా సాధించగలరు?', emotion: 'ఆచరణాత్మక' },
                    { speaker: 'కృష్ణుడు', text: 'తన పని యొక్క గుణాలను అనుసరించడం ద్వారా, ప్రతి వ్యక్తి పరిపూర్ణుడు కాగలడు. సర్వ జీవుల మూలమైన మరియు సర్వవ్యాపి అయిన భగవంతుని ఆరాధన ద్వారా, ఒక వ్యక్తి తన స్వంత పనిని చేయడం ద్వారా పరిపూర్ణతను సాధించగలడు.', emotion: 'మార్గదర్శనం' },
                    { speaker: 'అర్జునుడు', text: 'అంటే నా స్వంత కర్తవ్యాన్ని చేయడం, అసంపూర్ణంగా చేసినా, మేలైనదా?', emotion: 'అర్థం చేసుకున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఒకరి స్వంత వృత్తిలో నిమగ్నమవడం, దానిని అసంపూర్ణంగా చేసినప్పటికీ, మరొకరి వృత్తిని స్వీకరించి దానిని పరిపూర్ణంగా చేయడం కంటే మేలు. ఒకరి స్వభావం ప్రకారం నిర్దేశించబడిన విధులు ఎప్పుడూ పాపపు ప్రతిచర్యలచే ప్రభావితం కావు.', emotion: 'ధృవీకరిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'ఈ పరిపూర్ణతను సాధించినవాడు ఎలా ప్రవర్తిస్తాడు?', emotion: 'గమనిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'ఆత్మ-నియంత్రణ మరియు అనాసక్తి కలిగి, అన్ని భౌతిక సుఖాలను విస్మరించేవాడు, త్యాగ అభ్యాసం ద్వారా, ప్రతిచర్య నుండి విముక్తి యొక్క అత్యున్నత పరిపూర్ణ దశను పొందగలడు.', emotion: 'వర్ణిస్తున్న' },
                    { speaker: 'అర్జునుడు', text: 'అన్ని జ్ఞానాలలో అత్యంత రహస్యమైనది ఏమిటి?', emotion: 'ఆత్రుత' },
                    { speaker: 'కృష్ణుడు', text: 'నీవు నా అత్యంత ప్రియమైన మిత్రుడివి కాబట్టి, నేను నీకు నా పరమ ఉపదేశం, అన్నిటికంటే అత్యంత రహస్య జ్ఞానం చెబుతున్నాను. ఇది నీ మేలు కోసమే, నా నుండి విను.', emotion: 'ప్రేమ' },
                    { speaker: 'అర్జునుడు', text: 'నేను వినడానికి సిద్ధంగా ఉన్నాను, కృష్ణా.', emotion: 'శ్రద్ధగా' },
                    { speaker: 'కృష్ణుడు', text: 'ఎల్లప్పుడూ నన్నే తలచుకో, నా భక్తుడవు కమ్ము, నన్ను పూజించు మరియు నాకు నమస్కరించు. అప్పుడు నీవు తప్పకుండా నా వద్దకు వస్తావు. నేను నీకు ఈ వాగ్దానం చేస్తున్నాను ఎందుకంటే నీవు నా అత్యంత ప్రియమైన మిత్రుడివి.', emotion: 'వాగ్దానం' },
                    { speaker: 'అర్జునుడు', text: 'మరియు అంతిమ ఉపదేశం?', emotion: 'నిరీక్షిస్తున్న' },
                    { speaker: 'కృష్ణుడు', text: 'అన్ని రకాల ధర్మాలను విడిచిపెట్టి, కేవలం నన్నే శరణు పొందు. నేను నిన్ను అన్ని పాపపు ప్రతిచర్యల నుండి విముక్తుడిని చేస్తాను. భయపడకు.', emotion: 'అంతిమ' },
                    { speaker: 'అర్జునుడు', text: 'నా ప్రియమైన కృష్ణా, ఓ అచ్యుతా, నా భ్రమ ఇప్పుడు తొలగిపోయింది. మీ దయవల్ల నా స్మృతిని తిరిగి పొందాను. నేను ఇప్పుడు స్థిరంగా, సందేహ రహితుడనై మీ ఆదేశాల ప్రకారం నడుచుకోవడానికి సిద్ధంగా ఉన్నాను.', emotion: 'నిశ్చయం' }
                ],
                summary: 'ఈ చివరి అధ్యాయంలో, కృష్ణుడు నిజమైన త్యాగం అంటే ఫలితాలపై ఆసక్తి లేకుండా తన విధులను నిర్వర్తించడమని బోధిస్తాడు. విముక్తికి అంతిమ మార్గం పూర్తిగా భగవంతునికి శరణాగతి పొందడం, ఆయన తన భక్తులను అన్ని పాపాలు మరియు భయాల నుండి విముక్తులను చేస్తానని వాగ్దానం చేస్తాడు.',
                teachings: 'ఫలితాలపై ఆసక్తి లేకుండా మీ విధులను నిర్వర్తించండి. అత్యున్నత ఆధ్యాత్మిక అభ్యాసం ఎల్లప్పుడూ భగవంతుని గురించి ఆలోచించడం, ఆయన భక్తుడు కావడం మరియు ఆయనకు శరణాగతి పొందడం. ఈ మార్గం అంతిమ స్వేచ్ఛ మరియు శాంతికి దారితీస్తుంది.',
                moralLesson: 'గొప్ప శక్తిపై విశ్వాసం ఉంచి, మీ జీవితాన్ని దానికి అర్పించడమే గొప్ప ధైర్యం మరియు జ్ఞానం యొక్క చర్య. మీరు నియంత్రణను వదిలివేసినప్పుడు, మీరు నిజమైన స్వేచ్ఛ మరియు ఉద్దేశ్యాన్ని కనుగొంటారు.',
                kidsVersion: 'మీరు ఒక పెద్ద ఓడలో ఉన్నారని ఊహించుకోండి, మరియు కెప్టెన్ భగవంతుడు. ఉత్తమమైన పని కెప్టెన్‌ను నమ్మి, అతని సూచనలను పాటించడం. కృష్ణుడు అర్జునుడిని పూర్తిగా తనను నమ్మమని చెప్పాడు, మరియు ఆయన అన్నీ చూసుకుంటాడు. మనం భగవంతునిపై విశ్వాసం ఉంచినప్పుడు, మనం దేని గురించి చింతించాల్సిన అవసరం లేదు.'
            }
            
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bhagavadGitaData;
} else {
    window.bhagavadGitaData = bhagavadGitaData;
}

export default bhagavadGitaData;