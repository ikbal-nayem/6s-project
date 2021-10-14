from rest_framework import serializers
from .models import Hotels, RoomTypes


class HotelSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Hotels
    fields = ['id', 'name', 'district', 'address', 'rating', 'phone', 'image', 'email']


class RoomTypeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = RoomTypes
    fields = '__all__'
    depth = 1