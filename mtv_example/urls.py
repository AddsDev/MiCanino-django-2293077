from django.urls import path 
from . import views
urlpatterns = [
    path('', views.index),
    path('time/', views.get_time)
]