from rest_framework.generics import ListAPIView
from .models import RabbitGroup
from .serializers import RabbitGroupSerializer

class RabbitGroupListView(ListAPIView):
    queryset = RabbitGroup.objects.all()
    serializer_class = RabbitGroupSerializer
