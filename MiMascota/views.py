from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse(render(request= request, template_name='rastreador/actividad_2.html', context={}))

def index2(request, query):
    return HttpResponse(render(request= request, template_name='rastreador/actividad_2.html', context={"query" : query}))