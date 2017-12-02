from django.shortcuts import render

# Create your views here.
def index(request):
    request.META['host'] = str(request.get_host())
    
    for k in request.META:
        print(k + ': ' + str(request.META[k]))

    return render(request, 'index.html', context={'data': request.META})