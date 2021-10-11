from django.contrib import admin
from .models import Guests


class GuestAdmin(admin.ModelAdmin):
  list_display = ('name', 'email', 'phone', 'number_of_members')


admin.site.register(Guests, GuestAdmin)