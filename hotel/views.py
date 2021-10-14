from rest_framework import viewsets
from .models import Hotels, RoomTypes
from .serializers import HotelSerializer, RoomTypeSerializer


class HotelViewSet(viewsets.ModelViewSet):
  queryset = Hotels.objects.all()
  serializer_class = HotelSerializer


class RoomTypeViewSet(viewsets.ModelViewSet):
  queryset = RoomTypes.objects.all()
  serializer_class = RoomTypeSerializer
