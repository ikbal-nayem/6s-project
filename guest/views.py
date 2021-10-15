from django.shortcuts import render
from rest_framework import viewsets
from .models import Guests
from .serializers import GuestSerializer


class GuestView(viewsets.ModelViewSet):
    queryset = Guests.objects.all()
    serializer_class = GuestSerializer

    
