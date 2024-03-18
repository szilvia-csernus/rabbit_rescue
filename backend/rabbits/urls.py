from django.urls import path
from .views import RabbitGroupListView

urlpatterns = [
    path('', RabbitGroupListView.as_view()),
]