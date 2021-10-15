from rest_framework import viewsets
from .models import Hotels, RoomTypes
from .serializers import HotelSerializer, RoomTypeSerializer


class HotelViewSet(viewsets.ModelViewSet):
  queryset = Hotels.objects.all()
  serializer_class = HotelSerializer


class RoomTypeViewSet(viewsets.ModelViewSet):
  queryset = RoomTypes.objects.all()
  serializer_class = RoomTypeSerializer

  def get_queryset(self):
    place = self.request.query_params.get('place')
    place = [st.strip() for st in place.split(',')] if place else []
    check_in = self.request.query_params.get('check_in')
    check_out = self.request.query_params.get('check_out')
    rent_range = self.request.query_params.get('rent_range')
    rent_range = [int(r) for r in rent_range.split(',')] if rent_range else [100, 10000]
    query_data = self.queryset.filter(rent__range=rent_range, hotel__division=place[0]).order_by('rent')
    return query_data
