from django import template
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return HttpResponse(render(request, 'rastreador/actividad_2.html',{}))

def login(request):
    return HttpResponse("Login")