from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import serializers
from .models import Rabbit, RabbitGroup, RabbitImage
from .serializers import RabbitSerializer, RabbitGroupSerializer, RabbitImageSerializer
from datetime import date

class RabbitSerializerTest(APITestCase):
    def setUp(self):
        self.rabbit = Rabbit.objects.create(
            name='Test Rabbit',
            breed='Test Breed',
            sex='F',
            date_of_birth=date(2020, 1, 1),
            description='Test Description',
            neutered=False,
            vaccinated=False
        )
        self.serializer = RabbitSerializer(instance=self.rabbit)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertCountEqual(data.keys(), ['name', 'breed', 'sex', 'age', 'description', 'neutered', 'vaccinated'])

    def test_sex_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['sex'], 'Doe (Female)')


class RabbitImageSerializerTest(APITestCase):
    def setUp(self):
        self.rabbit_group = RabbitGroup.objects.create()
        self.rabbit_image = RabbitImage.objects.create(
            rabbit_group=self.rabbit_group,
            image='rabbits/test.jpg'
        )
        self.serializer = RabbitImageSerializer(instance=self.rabbit_image)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertCountEqual(data.keys(), ['image'])


class RabbitGroupSerializerTest(APITestCase):
    def setUp(self):
        self.rabbit_group = RabbitGroup.objects.create()
        self.rabbit = Rabbit.objects.create(
            name='Test Rabbit',
            breed='Test Breed',
            sex='F',
            date_of_birth=date(2020, 1, 1),
            description='Test Description',
            neutered=False,
            vaccinated=False,
            group=self.rabbit_group
        )
        self.serializer = RabbitGroupSerializer(instance=self.rabbit_group)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertCountEqual(data.keys(), ['id', 'group_name', 'images', 'rabbits_count', 'rabbits'])

    def test_group_name_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['group_name'], 'Test Rabbit')

    def test_rabbits_count_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['rabbits_count'], 1)