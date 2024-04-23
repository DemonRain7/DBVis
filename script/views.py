from django.shortcuts import render

# Create your views here.
def show_script(request):
    return render(request, 'script.html')