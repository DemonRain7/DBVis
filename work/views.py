from django.shortcuts import render
from .models import *


# python manage.py makemigrations
# python manage.py migrate

# Create your views here.
def show_work(request):
    return render(request, 'dashboard.html')


from .models import Script, Scene


def testdb(request):
    # 从数据库中获取数据
    script = list(Script.objects.values())  # 替换为你的实际查询条件
    scene = list(Scene.objects.filter(script_id=1).values())
    # Convert the QuerySet to a list

    # Create a context dictionary with the data
    context = {'script': script, 'scene': scene}

    # 渲染模板并返回响应
    return render(request, '../templates/test_db.html', context)
