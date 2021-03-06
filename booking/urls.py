from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from hotel.views import HotelViewSet, RoomTypeViewSet
from guest.views import GuestView


router = routers.DefaultRouter()
router.register(r'hotels', HotelViewSet)
router.register(r'rooms', RoomTypeViewSet)
router.register(r'guests', GuestView)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)