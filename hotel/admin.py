from django.contrib import admin
from hotel.models import Hotels, RoomTypes, Reservation


class HotelAdmin(admin.ModelAdmin):
  list_display = ('name', 'rating', 'phone', 'email', 'image')


class RoomTypeAdmin(admin.ModelAdmin):
  list_display = ('hotel', 'number_of_rooms', 'number_of_bed', 'max_guest_allow', 'rent')


class ReservationAdmin(admin.ModelAdmin):
  list_display = ('guest', 'hotel', 'room_type', 'check_in', 'check_out')


admin.site.register(Hotels, HotelAdmin)
admin.site.register(RoomTypes, RoomTypeAdmin)
admin.site.register(Reservation, ReservationAdmin)