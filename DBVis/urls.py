"""
URL configuration for DBVis project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from index import views as indexview
from list import views as listview
from work import views as workview
from filter import views as filterview
from script import views as scriptview

urlpatterns = [
    path('index/', indexview.show_index),
    path('list/', listview.show_list),
    path('filter/', filterview.show_filter),
    path('script/', scriptview.show_script),
    path('work/', include('work.urls', namespace='work')),
    path('testdb/',workview.testdb)
]
