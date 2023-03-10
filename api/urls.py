from .views import RegisterAPI
from django.urls import path
from knox import views as knox_views
from .views import LoginAPI



urlpatterns = [
    path(r'register/', RegisterAPI.as_view(), name='register'),
    path(r'login/', LoginAPI.as_view(), name='login'),
    path(r'logout', knox_views.LogoutView.as_view(), name='logout'),
    path(r'logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]