'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'The Taj Mahal was built by the emperor Shah Jahan in memory of his favourite wife, his third wife, Mumtaz Mahal who died whilst giving birth to their 14th child.',
                'The Taj Mahal is one of the most famous buildings in the world and it is located in Agra, Uttar Pradesh which is in the north of India.',
                "The building's architecture is very special as it is a fine form of Mughal architecture which combines different Indian, Islamic and Persian designs.",
                'The Taj Mahal was constructed during the mid-17th Century, approximately during the years of 1632 to 1653',
                "The construction of the Taj Mahal took more than 22 years to complete. It took the work of more than 22,000 men and 1,000 elephants over the years to finish off this incredible building which would become one of the finest manmade structures the world had ever seen",
                'The original walls of the Taj Mahal included precious stones and intricate carvings of patterns and flowers which are ornately carved into the exterior walls.',
                'Shah Jahan and his wife Mumtaz Jahan were both laid to rest inside the Taj Mahal facing Mecca. Mecca is in Islam, it is considered to be the holiest place on earth to all Muslims',
                "The Taj Mahal derives from the Arabic phrase 'crown of palaces'.",
                "The central reflective pool which is located at the front of the Taj Mahal is called 'al Hawd al-Kawthar' which means the 'Tank of Abundance'.",
                "The inside of the Taj Mahal is beautifully decorated with rich designs - carvings and precious stones embed marbled archways, balconies, columns and walls",
            ],
            SKILL_NAME: 'Taj Mahal Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Taj Mahal Fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'The Taj Mahal was built by the emperor Shah Jahan in memory of his favourite wife, his third wife, Mumtaz Mahal who died whilst giving birth to their 14th child.',
                'The Taj Mahal is one of the most famous buildings in the world and it is located in Agra, Uttar Pradesh which is in the north of India.',
                "The building's architecture is very special as it is a fine form of Mughal architecture which combines different Indian, Islamic and Persian designs.",
                'The Taj Mahal was constructed during the mid-17th Century, approximately during the years of 1632 to 1653',
                "The construction of the Taj Mahal took more than 22 years to complete. It took the work of more than 22,000 men and 1,000 elephants over the years to finish off this incredible building which would become one of the finest manmade structures the world had ever seen",
                'The original walls of the Taj Mahal included precious stones and intricate carvings of patterns and flowers which are ornately carved into the exterior walls.',
                'Shah Jahan and his wife Mumtaz Jahan were both laid to rest inside the Taj Mahal facing Mecca. Mecca is in Islam, it is considered to be the holiest place on earth to all Muslims',
                "The Taj Mahal derives from the Arabic phrase 'crown of palaces'.",
                "The central reflective pool which is located at the front of the Taj Mahal is called 'al Hawd al-Kawthar' which means the 'Tank of Abundance'.",
                "The inside of the Taj Mahal is beautifully decorated with rich designs - carvings and precious stones embed marbled archways, balconies, columns and walls",
            ],
            SKILL_NAME: 'Taj Mahal Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                 'The Taj Mahal was built by the emperor Shah Jahan in memory of his favourite wife, his third wife, Mumtaz Mahal who died whilst giving birth to their 14th child.',
                'The Taj Mahal is one of the most famous buildings in the world and it is located in Agra, Uttar Pradesh which is in the north of India.',
                "The building's architecture is very special as it is a fine form of Mughal architecture which combines different Indian, Islamic and Persian designs.",
                'The Taj Mahal was constructed during the mid-17th Century, approximately during the years of 1632 to 1653',
                "The construction of the Taj Mahal took more than 22 years to complete. It took the work of more than 22,000 men and 1,000 elephants over the years to finish off this incredible building which would become one of the finest manmade structures the world had ever seen",
                'The original walls of the Taj Mahal included precious stones and intricate carvings of patterns and flowers which are ornately carved into the exterior walls.',
                'Shah Jahan and his wife Mumtaz Jahan were both laid to rest inside the Taj Mahal facing Mecca. Mecca is in Islam, it is considered to be the holiest place on earth to all Muslims',
                "The Taj Mahal derives from the Arabic phrase 'crown of palaces'.",
                "The central reflective pool which is located at the front of the Taj Mahal is called 'al Hawd al-Kawthar' which means the 'Tank of Abundance'.",
                "The inside of the Taj Mahal is beautifully decorated with rich designs - carvings and precious stones embed marbled archways, balconies, columns and walls",
            ],
            SKILL_NAME: 'Taj Mahal Facts',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetTajMahalFacts': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Taj Mahal fact from the Taj Mahal list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
