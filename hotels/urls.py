from rest_framework import routers
from .views import*


router = routers.DefaultRouter()

router.register(r'hotel', HotelsViewSet, basename='hotel'),
router.register(r'emenities', EmenitiesViewSet, basename='emenities'),
router.register(r'RoomType', RoomTypeViewSet, basename='RoomType'),
router.register(r'Reservation', ReservationViewSet, basename='Reservation'),
router.register(r'Guest',GuestViewSet, basename='Guest')





urlpatterns = [
    

]

urlpatterns += router.urls