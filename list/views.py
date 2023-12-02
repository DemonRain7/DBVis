from django.shortcuts import render

# Create your views here.
def show_list(request):
    return render(request, 'table.html')