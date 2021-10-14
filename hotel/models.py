from django.db import models
from guest.models import Guests


class Hotels(models.Model):
  name = models.CharField(max_length=256)
  division = models.CharField(max_length=40, null=True, default=None)
  district = models.CharField(max_length=50)
  address = models.TextField()
  rating = models.FloatField()
  phone = models.CharField(max_length=13)
  image = models.ImageField(upload_to='hotel_image')
  email = models.EmailField(null=True, blank=True)

  def __str__(self) -> str:
    return self.name


class RoomTypes(models.Model):
  hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE, related_name="room_type")
  number_of_bed = models.PositiveIntegerField(default=1)
  max_guest_allow = models.PositiveIntegerField(default=1)
  number_of_rooms = models.PositiveIntegerField(default=1)
  rent = models.PositiveIntegerField(null=True, default=1)


class Reservation(models.Model):
  guest = models.ForeignKey(Guests, on_delete=models.CASCADE)
  check_in = models.DateField()
  check_out = models.DateField()
  hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE)
  room_type = models.ForeignKey(RoomTypes, null=True, on_delete=models.SET_NULL)

  def __str__(self) -> str:
      return self.guest.name