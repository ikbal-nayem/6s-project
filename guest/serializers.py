from rest_framework import serializers
from .models import Guests
# from django.core.mail import send_mail


class GuestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Guests
        fields = '__all__'

    # def create(self, validated_data):
    #     print(self.initial_data)
    #     return super().create(validated_data)