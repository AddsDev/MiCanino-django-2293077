from django.http import HttpResponse

def index(request):
    return HttpResponse({'hola':1,'como':2,'estas':3})