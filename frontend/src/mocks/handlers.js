// This file is used by Vitest to mock the API response.
// Mock Service Worker (MSW) is used to intercept requests and mock the response.
// https://mswjs.io/docs/basics/mocking-responses

import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('/api/rabbits/', () => {
    // We DON'T have to stringify the JSON here! I did it anyway, as I've just copy-pasted the JSON from
    // the real API response.
    return HttpResponse.json(
      [
        {
            "id": 1,
            "group_name": "Miffy & Olive",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/andriyko-podilnyk-unsplash.webp"
                }
            ],
            "rabbits_count": 2,
            "rabbits": [
                {
                    "name": "Miffy",
                    "breed": "Flemish Giant",
                    "sex": "Doe (Female)",
                    "age": "8 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                },
                {
                    "name": "Olive",
                    "breed": "English Lop",
                    "sex": "Doe (Female)",
                    "age": "4 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 2,
            "group_name": "Thumper",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/chan-swan-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Thumper",
                    "breed": "Flemish Giant",
                    "sex": "Doe (Female)",
                    "age": "5 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 3,
            "group_name": "Cinnabun",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/daniel-mccarthy-themccarthy-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Cinnabun",
                    "breed": "Flemish Giant",
                    "sex": "Doe (Female)",
                    "age": "11 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 4,
            "group_name": "Daisy",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/gabriel-miklos-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Daisy",
                    "breed": "Netherland Dwarf",
                    "sex": "Buck (Male)",
                    "age": "7 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 5,
            "group_name": "Tom & Brno",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/mariya-pexels.webp"
                }
            ],
            "rabbits_count": 2,
            "rabbits": [
                {
                    "name": "Tom",
                    "breed": "Lionhead",
                    "sex": "Buck (Male)",
                    "age": "12 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                },
                {
                    "name": "Brno",
                    "breed": "English Lop",
                    "sex": "Doe (Female)",
                    "age": "11 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 6,
            "group_name": "Holly",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/janan-lagerwall-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Holly",
                    "breed": "Angora",
                    "sex": "Doe (Female)",
                    "age": "5 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 7,
            "group_name": "Oreo",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/li-yan-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Oreo",
                    "breed": "Dutch",
                    "sex": "Doe (Female)",
                    "age": "3 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 8,
            "group_name": "Lola",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/matt-pike-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Lola",
                    "breed": "Netherland Dwarf",
                    "sex": "Buck (Male)",
                    "age": "14 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 9,
            "group_name": "Chester",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/misha-walker-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Chester",
                    "breed": "Flemish Giant",
                    "sex": "Doe (Female)",
                    "age": "6 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 10,
            "group_name": "Snowball",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/pablo-martinez-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Snowball",
                    "breed": "Lionhead",
                    "sex": "Buck (Male)",
                    "age": "3 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 11,
            "group_name": "Hopper",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/sandy-millar-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Hopper",
                    "breed": "Flemish Giant",
                    "sex": "Doe (Female)",
                    "age": "13 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 12,
            "group_name": "Jack & Jill",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/seyma-dalar-pexels.webp"
                }
            ],
            "rabbits_count": 2,
            "rabbits": [
                {
                    "name": "Jack",
                    "breed": "Angora",
                    "sex": "Buck (Male)",
                    "age": "13 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                },
                {
                    "name": "Jill",
                    "breed": "Netherland Dwarf",
                    "sex": "Buck (Male)",
                    "age": "4 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 13,
            "group_name": "Fish & Chips",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/pure-julia-unsplash.webp"
                }
            ],
            "rabbits_count": 2,
            "rabbits": [
                {
                    "name": "Fish",
                    "breed": "Lionhead",
                    "sex": "Doe (Female)",
                    "age": "5 years old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                },
                {
                    "name": "Chips",
                    "breed": "English Lop",
                    "sex": "Doe (Female)",
                    "age": "4 months old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 14,
            "group_name": "Oliver",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/jackob-amson-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Oliver",
                    "breed": "Flemish Giant",
                    "sex": "Buck (Male)",
                    "age": "8 years old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 16,
            "group_name": "Teddy",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/satyabratasm-unsplash.webp"
                }
            ],
            "rabbits_count": 1,
            "rabbits": [
                {
                    "name": "Teddy",
                    "breed": "Mini Lop",
                    "sex": "Doe (Female)",
                    "age": null,
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                }
            ]
        },
        {
            "id": 15,
            "group_name": "Fluff & Bunbun",
            "images": [
                {
                    "image": "https://res.cloudinary.com/domjz4dz6/image/upload/v1/rabbits/tima-miroshnichenko-pexels.webp"
                }
            ],
            "rabbits_count": 2,
            "rabbits": [
                {
                    "name": "Fluff",
                    "breed": "Lionhead",
                    "sex": "Buck (Male)",
                    "age": "6 months old",
                    "description": "A lovely rabbit",
                    "neutered": true,
                    "vaccinated": true
                },
                {
                    "name": "Bunbun",
                    "breed": "Netherland Dwarf",
                    "sex": "Buck (Male)",
                    "age": "6 months old",
                    "description": "A lovely rabbit",
                    "neutered": false,
                    "vaccinated": true
                }
            ]
        }
    ]
    )
  }),
]