const users = [
    {
        name: 'Fabian',
        email: 'fabiankmroh@berkeley.edu',
        password: '4321',
        major: 'Data Science',
        type: 'Member',
        exec: false,
        points: 10,
        grade: 1,
        fog: 'App Dev',
        social_group: 3,
    },
    {
        name: 'Namwook',
        email: 'namwook0921@berkeley.edu',
        password: '1234',
        major: 'Math & CS',
        type: 'Member',
        exec: false,
        points: 30,
        grade: 2,
        fog: 'App Dev',
        social_group: 2,
    }
];

const events = [
    {
        name: 'Banquet',
        type: 'Internal',
        date: new Date("2024-04-28"),
        location: '725 Gilman St',
        points: 0,
        note: 'FOG Presentation + Poker Night',
        register_link: 'https://forms.gle/G6GmfoDCofitvS5Q7',
    },
    {
        name: 'GM 4',
        type: 'General Meeting',
        date: new Date("2024-04-20"),
        location: 'Dwinelle 222',
        points: 10,
        note: 'Wrap Up',
        register_link: 'None',
    },
    {
        name: 'Mingles #9: Chicken + Beer',
        type: 'Mingles',
        date: new Date("2024-04-22"),
        location: '3310 Powell St, Emeryville, CA 94608',
        points: 5,
        note: 'Transportation: Uber', 
        register_link: 'DM to Host',
    }
];

export { users, events };