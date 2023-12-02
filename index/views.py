from django.shortcuts import render,HttpResponse

# Create your views here.
def show_index(request):
    return render(request, 'index.html')

