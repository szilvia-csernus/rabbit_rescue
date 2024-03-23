from django.test import TestCase
from rabbits.models import Rabbit, RabbitGroup, RabbitImage
from datetime import date

class RabbitModelTest(TestCase):
    def setUp(self):
        self.rabbit_group = RabbitGroup.objects.create()
        self.rabbit = Rabbit.objects.create(
            name='Test Rabbit',
            breed='Test Breed',
            sex='F',
            date_of_birth=date(2020, 1, 1),
            description='A test rabbit',
            neutered=True,
            vaccinated=True,
            group=self.rabbit_group
        )

    def test_rabbit_creation(self):
        self.assertTrue(isinstance(self.rabbit, Rabbit))
        self.assertEqual(self.rabbit.__str__(), 'Test Rabbit')

    def test_rabbit_age(self):
        self.assertEqual(self.rabbit.age(), "4 years old")

    def test_rabbit_str(self):
        self.assertEqual(str(self.rabbit), 'Test Rabbit')


class RabbitGroupModelTest(TestCase):
    def setUp(self):
        self.rabbit_group = RabbitGroup.objects.create()
        self.rabbit = Rabbit.objects.create(
            name='Test Rabbit',
            breed='Test Breed',
            sex='F',
            date_of_birth=date(2020, 1, 1),
            description='A test rabbit',
            neutered=True,
            vaccinated=True,
            group=self.rabbit_group
        )

    def test_rabbit_group_creation(self):
        self.assertTrue(isinstance(self.rabbit_group, RabbitGroup))

    def test_get_rabbits(self):
        self.assertEqual(list(self.rabbit_group.get_rabbits()), [self.rabbit])

    def test_get_rabbits_count(self):
        self.assertEqual(self.rabbit_group.get_rabbits_count(), 1)

    def test_rabbit_group_str(self):
        self.assertEqual(str(self.rabbit_group), 'Test Rabbit')


class RabbitImageModelTest(TestCase):
    def setUp(self):
        self.rabbit_group = RabbitGroup.objects.create()
        self.rabbit = Rabbit.objects.create(
            name='Test Rabbit',
            breed='Test Breed',
            
            date_of_birth=date(2020, 1, 1),
            description='A test rabbit',
            neutered=True,
            vaccinated=True,
            group=self.rabbit_group
        )
        self.rabbit_image = RabbitImage.objects.create(
            rabbit_group=self.rabbit_group,
            image='rabbits/test_image.jpg'
        )

    def test_rabbit_image_creation(self):
        self.assertTrue(isinstance(self.rabbit_image, RabbitImage))
        self.assertEqual(self.rabbit_image.__str__(), 'Test Rabbit Image')

    def test_rabbit_image_str(self):
        self.assertEqual(str(self.rabbit_image), 'Test Rabbit Image')