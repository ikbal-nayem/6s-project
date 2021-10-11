from django.db import models

# Create your models here.

class Guests(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(null=True, blank=True)
  phone = models.CharField(max_length=13)
  address = models.TextField()
  number_of_members = models.PositiveIntegerField(default=1)

  def __str__(self) -> str:
    return self.name
