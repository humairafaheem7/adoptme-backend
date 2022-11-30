// import required essentials
const express = require('express');
// create new router
const router = express.Router();

// create a JSON data for program.
const data = [
    {
        'title': 'Other Program',
        'summary': 'lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores eius provident tempora. Aliquam amet aspernatur earum eos excepturi facere, fugit iure molestias nam optio reprehenderit sapiente similique vero, voluptatibus?em',
        'image': 'friend-in-trouble.png',
    },
    {
        'title': 'Other Program II',
        'summary': 'lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores eius provident tempora. Aliquam amet aspernatur earum eos excepturi facere, fugit iure molestias nam optio reprehenderit sapiente similique vero, voluptatibus?em',
        'image': 'friend-in-trouble.png',
    },
];

// create a JSON data for associate.
const assciate = [
    {
        'summary': 'lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores eius provident tempora. Aliquam amet aspernatur earum eos excepturi facere, fugit iure molestias nam optio reprehenderit sapiente similique vero, voluptatibus?em',
    },
    {
        'summary': 'lorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolores eius provident tempora. Aliquam amet aspernatur earum eos excepturi facere, fugit iure molestias nam optio reprehenderit sapiente similique vero, voluptatibus?em',
    }
]

// Routing to get the program JSON data.
router.get('/programs', function (req, res) {
    res.status(200).json(data);
});

// Routing to get the associate JSON data.
router.get('/associate', function (req, res) {
    res.status(200).json(assciate);
});

module.exports = router;