from django.db import models
from django.utils import timezone
from datetime import datetime, timedelta, date
from django.dispatch import receiver
from django.db.models.signals import post_save
from phone_field import PhoneField

# Create your models here.

class Guest(models.Model):
    name = models.CharField(max_length=200)
    age=models.IntegerField(default=20)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    # phone=models.CharField(max_length=10, blank=True, null=True)

    def __str__(self):
        return self.name

class Emenities(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    def __str__(self,):
        return self.name


class RoomType(models.Model):
    roomtype = models.CharField(max_length=100, blank=True, null=True)
    is_available=models.BooleanField(default=True)
    
    def __str__(self):
        return self.roomtype

class Hotels(models.Model):
    
    
    hotel_name = models.CharField(max_length=100, null=True, blank=True)
    hotel_description = models.TextField(null=True, blank=True)
    hotel_image = models.ImageField(upload_to='media',
                                    blank=True,
                                    null=True,
                                    max_length=254)
    types_of_room = models.ManyToManyField(RoomType, blank=True)
    price = models.IntegerField(null=True, blank=True)
    types_of_room = models.ManyToManyField(RoomType, blank=True)
    emenities = models.ManyToManyField(Emenities, blank=True)
    city= models.CharField(max_length=200, blank=True, null=True)
    manager_info= models.CharField(max_length=200, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.hotel_name
    
class Reservation(models.Model):
    guest=models.ForeignKey(Guest,on_delete=models.CASCADE)
    room=models.ForeignKey(RoomType,on_delete=models.CASCADE)

    # check_in = models.DateField(default=timezone.now)
    checkin_date=models.DateTimeField(default=datetime.now())
    checkout_date=models.DateTimeField(default=datetime.now() + timedelta(days=1))
    check_out=models.BooleanField(default=False)
    no_of_guests=models.IntegerField(default=1, blank=True, null=True)
    
    def __str__(self):
        return self.guest.name
    
    def charge(self):
        if self.check_out:
            if self.checkin_date==self.checkout_date:
                return self.room.price
            else:
                time_delta = self.checkout_date - self.checkin_date
                total_time = time_delta.days
                total_cost =total_time*self.room.price
                # return total_cost
                return total_cost
        else:
            return 'calculated when checked out' 



@receiver(post_save,sender=Reservation)
def  RType(sender, instance, created, **kwargs):
    room = instance.room
    if created:
        room.is_available = False
    room.save()
    if instance.check_out ==True:
        room.is_available=True
    room.save() 
