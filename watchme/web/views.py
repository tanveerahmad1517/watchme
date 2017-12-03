from django.shortcuts import render

from web.models import *

# Create your views here.
def index(request):
    context = dict()
    context['new_guest'] = True
    context['prev_visit'] = None

    ip = request.META['REMOTE_ADDR']
    if Addrs.objects.filter(ip=ip).all():
        context['new_guest'] = False
        context['prev_visit'] = Addrs.objects.filter(ip=ip).all()[0].timestamp.strftime('%m %B %Y @ %-I:%M:%S%p')
        
        # update the timestamp
        Addrs.objects.filter(ip=ip).all()[0].save()
    else:
        # save this 'user' to the database
        Addrs(ip=ip).save()
    
    context['data'] = request.META

    print(request.session)
    return render(request, 'index.html', context=context)