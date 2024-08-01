"""rabbit_rescue_REST URL Configuration

"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import home


urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/rabbits/', include('rabbits.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
