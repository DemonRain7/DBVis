from django.shortcuts import render

# Create your views here.
def show_work(request):
    return render(request, 'dashboard.html')