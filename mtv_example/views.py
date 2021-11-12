from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
# Create your views here.

def index(request):
    return HttpResponse(render(request, 'index_mtv.html', {}))
def get_time(request):
    return HttpResponse(render(request=request, template_name='time.html', context = { "time": datetime.now().time() }))
