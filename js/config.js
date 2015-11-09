var config = {
    lang: 'de',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Ahaus,Germany',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: '43de1514340bfa4096d38ec09fb74e79'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Guten morgen, eins nicer dude!',
            'Frühes vögeln entspannt den Wurm!',
            'Alles fresh Homie?'
        ],
        afternoon: [
            'Geile sau!',
            'Du siehst geil aus!',
            'Heute mal wieder prächtig!'
        ],
        evening: [
            'Heiß heiß heiß!',
            'Du siehst so unfassbar geil aus!',
            'Hey, sweety!',
            'Sip sip booooy!'
        ]
    },
    news: {
        feed: 'http://t3n.de/news/feed/'
    }
}
