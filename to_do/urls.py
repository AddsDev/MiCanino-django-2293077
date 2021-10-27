from django.urls import path

from MiMascota import urls
from . import views
urlpatterns = [
    path('', views.index)
]

