from django.contrib import admin
from .models import Rabbit, RabbitGroup, RabbitImage

class RabbitInline(admin.TabularInline):
    model = Rabbit
    extra = 0  # Number of extra forms to display

class RabbitImageInline(admin.TabularInline):
    model = RabbitImage
    extra = 0

class RabbitGroupAdmin(admin.ModelAdmin):
    inlines = [
        RabbitInline,
        RabbitImageInline,
    ]

admin.site.register(RabbitGroup, RabbitGroupAdmin)
