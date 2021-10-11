from django.db.models import fields
from rest_framework import serializers
from .models import Hotels, RoomTypes, Reservation


class HotelSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Hotels
    fields = ['id', 'name', 'district', 'address', 'rating', 'phone', 'image', 'email']