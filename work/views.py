from django.shortcuts import render
from .models import *


# Create your views here.
def show_work(request):
    return render(request, 'dashboard.html')


from .models import Script


def testdb(request):
    scripts = Script.objects.all()

    return render(request, '../templates/test_db.html', {'scripts': scripts})
