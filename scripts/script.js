const app = Vue.createApp({
    el: '#app',
    data() {
        return {
            newText: '',
            currentIndex: 0,
            filterText: '',
            filterMessage: '',
            filteredMessages: [],
            visible: null,
            visible_chat: 0,
            visible_attachments: 0,
            notify: true,
            answer: [
                'Non sono convinto',
                'Sei forte',
                'Che ne so?',
                'Si ma stai calmo!',
                'Brindo alla tua!',
                'Ma chi sei?',
                'Buongiorno',
                'Raccontami',
                'Mi piace questa idea!',
                'Non sono sicuro di capire.',
                'Non so cosa dire...',
                'Ehi, come stai?',
                'Mi fai ridere!',
                'Dimmi di più!',
                'Interessante...',
                'Davvero?',
                'Non posso crederci!',
                'Oh, grazie!',
                'Cosa intendi?',
                'Mi dispiace sentirlo.',
                'Beh, che dire...',
                'Fammi pensare...',
                'Ecco un pensiero...',
                'Mi sto divertendo!',
                'Raccontami di più su di te.',
                'Ti capisco.',
                'Ho bisogno di più dettagli.',
                'Che bella giornata!',
                ':)'
            ],
            contacts: [
                {
                    name: 'Camilla',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '12/02/2020 08:45:30',
                            message: 'Ciao, hai ancora bisogno di aiuto per il progetto?',
                            status: 'sent'
                        },
                        {
                            date: '12/02/2020 09:00:15',
                            message: 'Sì, sarebbe fantastico se potessi darmi una mano.',
                            status: 'received'
                        },
                        {
                            date: '12/02/2020 09:15:40',
                            message: 'Nessun problema, possiamo incontrarci oggi pomeriggio?',
                            status: 'sent'
                        },
                        {
                            date: '12/02/2020 09:30:20',
                            message: 'Va bene, ci vediamo alle 15:00.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:40:25',
                            message: 'Nessun problema, forse un altro giorno.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 16:25:45',
                            message: 'Nessun problema, era divertente!',
                            status: 'sent'
                        },
                        {
                            date: '29/03/2020 09:30:00',
                            message: 'Hai voglia di uscire oggi?',
                            status: 'sent'
                        },
                        {
                            date: '29/03/2020 09:45:00',
                            message: 'Mi dispiace, sono impegnato oggi.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '11/01/2020 14:20:00',
                            message: 'Andiamo al cinema stasera?',
                            status: 'sent'
                        },
                        {
                            date: '11/01/2020 14:35:00',
                            message: 'Mi dispiace, ho altri piani stasera.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },
                        {
                            date: '11/01/2020 10:00:00',
                            message: 'Hai comprato il biglietto per il concerto?',
                            status: 'sent'
                        },
                        {
                            date: '11/01/2020 10:15:00',
                            message: 'Sì, ho il biglietto. Non vedo l ora!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 11:30:00',
                            message: 'Andiamo a fare shopping questo weekend?',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 11:45:00',
                            message: 'Mi dispiace, sono fuori città questo weekend.',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                        {
                            date: '12/01/2020 09:00:00',
                            message: 'Martina ha organizzato una festa a sorpresa. Vuoi unirti?',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 09:15:00',
                            message: 'Sì, sono dentro! Dov è la festa?',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '12/01/2020 20:00:00',
                            message: 'Hai visto il nuovo film al cinema? Dicono sia fantastico!',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 20:15:00',
                            message: 'Non ancora, andiamo a vederlo questo weekend?',
                            status: 'received'
                        },
                    ],
                },
            ]

        };
    },

    methods: {
        setCurrentContact(i) {
            this.currentIndex = i;
        },

        getDate() {
            return dayjs().format('DD/MM/YYYY  HH:mm:ss')
        },

        addNewMessage() {
            let cleanedText = this.newText.trim();
            if (cleanedText != '') {
                this.contacts[this.currentIndex].messages.push({
                    date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: (cleanedText),
                    status: 'sent'
                });
                this.newText = '';
            }
            this.autoReply();
            this.scrollToEnd();
            this.scrollToEnd_2();
        },

        autoReply: function () {
            let rand = Math.floor(Math.random() * this.answer.length);
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: this.answer[rand],
                    status: 'received',
                })
            },
                1000);
        },

        extractTimeFromdate(date) {
            return date.split(' ')[1].slice(0, -3);
        },

        getLastAccess: function (i) {
            let lastMex = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[lastMex].date;
        },

        getLastMessage: function (i) {
            let lastMex = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[lastMex].message;
        },

        openMenu(i) {
            if (this.visible === i) {
                this.visible = false;
            } else {
                this.visible = i;
            }
        },

        openMenuChat() {
            if (this.visible_chat === 0) {
                this.visible_chat = 1;
            } else {
                this.visible_chat = 0;
            }
        },

        openMenuAttachments() {
            if (this.visible_attachments === 0) {
                this.visible_attachments = 1;
            } else {
                this.visible_attachments = 0;
            }
        },

        deleteMex(i) {
            this.contacts[i].messages.splice(this.visible, 1)
            this.visible = null;
        },

        notifyOnOff: function () {
            this.notify = !this.notify
        },

        filterMessages() {
            const filteredContacts = this.contacts[this.currentIndex];
            if (!filteredContacts) return;

            const filterText = this.filterMessage.toLowerCase().trim();

            this.filteredMessages = filteredContacts.messages.filter(message =>
                message.message.toLowerCase().includes(filterText)
            );
        },

        scrollToEnd: function () {
            setTimeout(() => {
                let container = this.$refs.chatMessages;
                if (container) {
                    container.scrollTo(0, container.scrollHeight);
                }
            }, 100);
        },

        scrollToEnd_2: function () {
            setTimeout(() => {
                let container = this.$refs.chatMessages;
                if (container) {
                    container.scrollTo(0, container.scrollHeight);
                }
            }, 1100);
        },
    },

    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.name.includes(this.filterText));
        },
    },

    watch: {
        filterMessage: 'filterMessages',
    },
});

app.mount('#root');