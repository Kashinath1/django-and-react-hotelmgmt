from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from .models import*

class EmenitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emenities
        fields = '__all__'

class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = '__all__'

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields ='__all__'

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model= Guest
        fields = '__all__'