# I ran this file to generate the 3 json fixtures for the rabbits app.
# Then, I used the following commands to load the fixtures into the database:
# python manage.py loaddata rabbit_groups.json
# python manage.py loaddata rabbits.json
# python manage.py loaddata rabbit_images.json

import random
import json
from datetime import datetime


imgNr1webp = 'andriyko-podilnyk-unsplash.webp'
imgNr2webp = 'chan-swan-unsplash.webp'
imgNr3webp = 'daniel-mccarthy-themccarthy-unsplash.webp'
imgNr4webp = 'gabriel-miklos-unsplash.webp'
imgNr5webp = 'mariya-pexels.webp'
imgNr6webp = 'janan-lagerwall-unsplash.webp'
imgNr7webp = 'li-yan-unsplash.webp'
imgNr8webp = 'matt-pike-unsplash.webp'
imgNr9webp = 'misha-walker-unsplash.webp'
imgNr10webp = 'pablo-martinez-unsplash.webp'
imgNr11webp = 'sandy-millar-unsplash.webp'
imgNr12webp = 'seyma-dalar-pexels.webp'
imgNr13webp = 'pure-julia-unsplash.webp'
imgNr14webp = 'jackob-amson-unsplash.webp'
imgNr15webp = 'tima-miroshnichenko-pexels.webp'
imgNr16webp = 'satyabratasm-unsplash.webp'


def random_date(start_year=2010, end_year=datetime.now().year):
    start_date = datetime(start_year, 1, 1)
    end_date = datetime(end_year, 1, 30)

    return start_date + (end_date - start_date) * random.random()

def random_boolean():
    return bool(random.getrandbits(1))

def random_sex():
    return random.choice(['F', 'M'])

def random_breed():
    breeds = ['Lionhead', 'Dutch', 'Netherland Dwarf', 'Mini Lop', 'English Lop', 'Flemish Giant', 'Angora']
    return random.choice(breeds)

pictures = [
    {
		'srcSetwebp': imgNr1webp,
        'dataName': 'Miffy & Olive',
	},
	{
		'srcSetwebp': imgNr2webp,
        'dataName': 'Thumper',
	},
	{
		'srcSetwebp': imgNr3webp,
        'dataName': 'Cinnabun',
	},
	{
		'srcSetwebp': imgNr4webp,
        'dataName': 'Daisy',
	},
	{
		'srcSetwebp': imgNr5webp,
        'dataName': 'Brno & Tom',
	},
	{
		'srcSetwebp': imgNr6webp,
        'dataName': 'Holly',
	},
	{
		'srcSetwebp': imgNr7webp,
        'dataName': 'Oreo',
	},
	{
		'srcSetwebp': imgNr8webp,
        'dataName': 'Lola',
	},
	{
		'srcSetwebp': imgNr9webp,
        'dataName': 'Chester',
	},
	{
		'srcSetwebp': imgNr10webp,
		'dataName': 'Snowball',
	},
	{
		'srcSetwebp': imgNr11webp,
		'dataName': 'Hopper',
	},
	{
		'srcSetwebp': imgNr12webp,
		'dataName': 'Jack & Jill',
	},
	{
		'srcSetwebp': imgNr13webp,
		'dataName': 'Fish & Chips',
	},
	{
		'srcSetwebp': imgNr14webp,
		'dataName': 'Oliver',
	},
	{
		'srcSetwebp': imgNr15webp,
		'dataName': 'Fluff & Bunbun',
	},
	{
		'srcSetwebp': imgNr16webp,
		'dataName': 'Teddy',
	},
]

rabbit_groups = []
rabbits = []
rabbit_images = []

group_id = 1
rabbit_id = 1
image_id = 1

for picture in pictures:
    group = {
        "model": "rabbits.rabbitgroup",
        "pk": group_id,
        "fields": {
			"created_at": '2024-03-17',
			"updated_at": '2024-03-17'	
		}
    }
    rabbit_groups.append(group)

    image = {
        "model": "rabbits.rabbitimage",
        "pk": image_id,
        "fields": {
            "rabbit_group": group_id,
            "image": picture['srcSetwebp']
        }
    }
    rabbit_images.append(image)

    rabbit_names = picture['dataName'].split(' & ')
    for name in rabbit_names:
        rabbit = {
            "model": "rabbits.rabbit",
            "pk": rabbit_id,
            "fields": {
                "name": name,
                "breed": random_breed(),
                "sex": random_sex(),
                "date_of_birth": random_date().strftime('%Y-%m-%d'),
                "description": "A lovely rabbit",
                "neutered": random_boolean(),
                "vaccinated": True,
                "group": group_id
            }
        }
        rabbits.append(rabbit)
        rabbit_id += 1

    group_id += 1
    image_id += 1

with open('rabbit_groups.json', 'w') as f:
    json.dump(rabbit_groups, f)

with open('rabbits.json', 'w') as f:
    json.dump(rabbits, f)

with open('rabbit_images.json', 'w') as f:
    json.dump(rabbit_images, f)