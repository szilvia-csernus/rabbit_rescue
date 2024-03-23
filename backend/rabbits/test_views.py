from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import RabbitGroup
from .serializers import RabbitGroupSerializer

class RabbitGroupListViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_rabbit_group():
        RabbitGroup.objects.create()

    def setUp(self):
        self.create_rabbit_group()

    def test_get_all_rabbit_groups(self):
        response = self.client.get(
            reverse("rabbit-group-list")
        )
        expected = RabbitGroup.objects.all()
        serialized = RabbitGroupSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)