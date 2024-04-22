from django.shortcuts import render

# Create your views here.
def show_filter(request):
    return render(request, 'filter.html')