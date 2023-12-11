from django.urls import path
from . import views

app_name = 'work'  # 这里设置了应用程序的命名空间

urlpatterns = [
    path('', views.show_work, name='show_work'),  # 将路径改为根路径
    # 添加其他应用程序的URL模式，如果有的话
]