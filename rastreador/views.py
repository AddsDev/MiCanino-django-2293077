from django import template
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

# Create your views here.
def index(request):
    template = loader.get_template('ejemplo/actividad_2.html')
    return HttpResponse(template.render({},request))

def login(request):
    return HttpResponse("Login")