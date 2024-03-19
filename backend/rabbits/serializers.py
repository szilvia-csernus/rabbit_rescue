from rest_framework import serializers
from .models import Rabbit, RabbitGroup, RabbitImage

class RabbitSerializer(serializers.ModelSerializer):
    sex = serializers.SerializerMethodField()
    class Meta:
        model = Rabbit
        fields = ['name', 'breed', 'sex', 'date_of_birth', 'description', 'neutered', 'vaccinated']

    def get_sex(self, obj):
        return obj.get_sex_display()

class RabbitImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RabbitImage
        fields = ['image']

class RabbitGroupSerializer(serializers.ModelSerializer):
    rabbits = RabbitSerializer(many=True, read_only=True)
    images = RabbitImageSerializer(many=True, read_only=True)
    group_name = serializers.SerializerMethodField()
    rabbits_count = serializers.SerializerMethodField()

    class Meta:
        model = RabbitGroup
        fields = [
            'id',
            'group_name',
            'images',
            'rabbits_count',
            'rabbits']

    def get_group_name(self, obj):
        return str(obj)

    def get_rabbits_count(self, obj):
        return obj.get_rabbits_count()