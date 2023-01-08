# from rest_framework.authentication import SessionAuthentication
# from rest_framework.permissions import IsAuthenticated, AllowAny,IsAdminUser, IsAuthenticatedOrReadOnly,DjangoModelPermissions,DjangoModelPermissionsOrAnonReadOnly,TokenAuthentication
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import*
from .models import*
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
# from contextlib import redirect
# Create your views here.
from django.shortcuts import redirect

class EmenitiesViewSet(viewsets.ModelViewSet):
    queryset = Emenities.objects.all()
    serializer_class = EmenitiesSerializer
    
    # permission_classes = [IsAuthenticatedOrReadOnly]
    # permission_classes = [AllowAny]

class HotelsViewSet(viewsets.ModelViewSet):
    queryset = Hotels.objects.all()
    serializer_class = HotelsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['city', 'hotel_name']
    # authentication_classes = [TokenAuthentication]
    # permission_classes = (permissions.AllowAny,)
    # authentication_classes = [SessionAuthentication]
    # permission_classes = [AllowAny]
    
    # def create(self, request, *args, **kwargs):
    #     import pdb;
    #     pdb.set_trace()
    #     return super().create(request, *args, **kwargs)

class RoomTypeViewSet(viewsets.ModelViewSet):
    queryset = RoomType.objects.all()
    serializer_class = RoomTypeSerializer
    
class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class GuestViewSet(viewsets.ModelViewSet):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
        
        
def my_view(request):
    if request.user.is_superuser:
        #your logic here
        return redirect("/admin/")# or your url name
    if request.user.is_staff:
        #your logic here
        # return redirect("/dashboard/")# or your url name
        return redirect("/admin/")# or your url name
        
    


