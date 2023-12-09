from django.db.models import Max
from django.shortcuts import render,HttpResponse
from django.utils import timezone

from .models import *

# Create your views here.
from django.shortcuts import render, HttpResponseRedirect
from .models import Script, Scene, Feedback, Characters, Comment, Highfreqword, Interaction

def show_index(request):
    scp_id = 0
    scripts = list(Script.objects.filter(script_id=scp_id).values())
    scenes = list(Scene.objects.filter(script_id=scp_id).values())
    feedbacks = list(Feedback.objects.filter(feedback_script_id=scp_id).values())
    characters = list(Characters.objects.filter(script_id=scp_id).values())
    comments = list(Comment.objects.filter(script_id=scp_id).values())
    highfreqwords = list(Highfreqword.objects.filter(script_id=scp_id).values())
    interactions = list(Interaction.objects.filter(script_id=scp_id).values())

    def custom_sort(scene):
        return int(scene['scene_id'].split('_')[1])

    sorted_scenes = sorted(scenes, key=custom_sort)

    processed_scenes = []
    for scene in sorted_scenes:
        scene_content = scene['scene_content'].strip('"')
        processed_scenes.append({'script_id': scene['script_id'], 'scene_id': scene['scene_id'], 'scene_content': scene_content, 'scene_name': scene['scene_name'], 'scene_time': scene['scene_time']})

    context = {'scripts': scripts, 'scenes': processed_scenes, 'feedbacks': feedbacks, 'characters': characters,
               'comments': comments, 'highfreqwords': highfreqwords, 'interactions': interactions}


    # 提交反馈部分
    if request.method == 'POST':
        # Handle the form submission here
        email = request.POST.get('email')
        script_id = request.POST.get('script')
        copy = request.POST.get('copy') == 'on'
        message = request.POST.get('message')
        # 获取当前时间
        submission_time = timezone.now()

        # 获取最大的 feedback_id
        max_feedback_id = Feedback.objects.all().aggregate(Max('feedback_id'))['feedback_id__max']

        # 设置 feedback_id
        feedback_id = 0 if max_feedback_id is None else max_feedback_id + 1

        # 创建 Feedback 实例并保存到数据库
        feedback_instance = Feedback.objects.create(
            feedback_id=feedback_id,
            feedback_time=submission_time,
            feedback_script_id=script_id,
            feedback_email=email,
            feedback_content=message,
            is_reply=copy,
        )

        # 添加成功或失败的标志
        success = True if feedback_instance else False

        # 返回到 /work 页面，并传递标志
        return render(request, '../../work/templates/dashboard.html', {'success': success})

    return render(request, 'index.html', context)


