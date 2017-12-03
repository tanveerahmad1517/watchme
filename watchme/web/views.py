from django.shortcuts import render

from web.models import *

# Create your views here.
def index(request):
    ip = request.META['REMOTE_ADDR']
    print(ip)
    print(request.session)
    return render(request, 'index.html', context={'data': request.META})