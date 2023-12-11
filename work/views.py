from django.shortcuts import render
from .models import *
from django.utils.safestring import mark_safe
# python manage.py makemigrations
# python manage.py migrate
# python manage.py inspectdb > models.py

# Create your views here.
def show_work(request):
    scp_id = 0
    scripts = list(Script.objects.filter(script_id=scp_id).values())
    scenes = list(Scene.objects.filter(script_id=scp_id).values())
    feedbacks = list(Feedback.objects.filter(feedback_script_id=scp_id).values())
    characters = list(Characters.objects.filter(script_id=scp_id).values())
    comments = list(Comment.objects.filter(script_id=scp_id).values())
    highfreqwords = list(Highfreqword.objects.filter(script_id=scp_id).values())
    interactions = list(Interaction.objects.filter(script_id=scp_id).values())
    emotions = list(EmoAnalysis.objects.filter(script_id=scp_id).values())

    # Define a custom sorting function for scene_id
    def custom_sort(scene):
        # Split the scene_id and convert the second part to an integer
        return int(scene['scene_id'].split('_')[1])

    # Sort the scenes using the custom sorting function
    sorted_scenes = sorted(scenes, key=custom_sort)


    def character_sort(character):
        # Split the scene_id and convert the second part to an integer
        return int(character['character_id'].split('_')[1])

    # Sort the scenes using the custom sorting function
    sorted_characters = sorted(characters, key=character_sort)

    processed_scenes = []
    for scene in sorted_scenes:
        scene_content = scene['scene_content'].strip('"')
        processed_scenes.append({'script_id': scene['script_id'], 'scene_id': scene['scene_id'],
                                 'scene_content': scene_content, 'scene_name': scene['scene_name'],
                                 'scene_time': scene['scene_time']})

    processed_characters = []
    for character in sorted_characters:
    # 你需要根据你的数据结构来修改下面的代码
        character_id = character['character_id'].split('_')[1]
        script_id = character['script_id']
        character_name = character['character_name']
        character_scene = character['character_scene']

    # 将处理后的信息添加到 processed_characters 列表中
        processed_characters.append({
            'script_id': script_id,
            'character_id': character_id,
            'character_name': character_name,
            'character_scene': character_scene
        })


    # Convert the QuerySet to a list
    # Create a context dictionary with the processed data
    context = {'scripts': scripts, 'scenes': processed_scenes, 'feedbacks': feedbacks, 'characters': processed_characters,
               'comments': comments, 'highfreqwords': highfreqwords, 'interactions': interactions, 'emotions': emotions}

    return render(request, 'dashboard.html', context)






# 你们可以在这里测试观察控制台输出的结果
def testdb(request):
    scp_id = 0
    scripts = list(Script.objects.filter(script_id=scp_id).values())
    scenes = list(Scene.objects.filter(script_id=scp_id).values())
    feedbacks = list(Feedback.objects.filter(feedback_script_id=scp_id).values())
    characters = list(Characters.objects.filter(script_id=scp_id).values())
    comments = list(Comment.objects.filter(script_id=scp_id).values())
    highfreqwords = list(Highfreqword.objects.filter(script_id=scp_id).values())
    interactions = list(Interaction.objects.filter(script_id=scp_id).values())


    # DIYs
    def custom_sort(scene):
        # Split the scene_id and convert the second part to an integer
        return int(scene['scene_id'].split('_')[1])

    # Sort the scenes using the custom sorting function
    sorted_scenes = sorted(scenes, key=custom_sort)
    def character_sort(character):
        # Split the scene_id and convert the second part to an integer
        return int(character['character_id'].split('_')[1])

    # Sort the scenes using the custom sorting function
    sorted_characters = sorted(characters, key=character_sort)

    processed_scenes = []
    for scene in sorted_scenes:
        scene_content = scene['scene_content'].strip('"')
        processed_scenes.append({'script_id': scene['script_id'], 'scene_id': scene['scene_id'], 'scene_content': scene_content, 'scene_name': scene['scene_name'], 'scene_time': scene['scene_time']})

    processed_characters = []
    for character in sorted_characters:
    # 你需要根据你的数据结构来修改下面的代码
        character_id = character['character_id']
        script_id = character['script_id']
        character_name = character['character_name']
        character_scene = character['character_scene']

    # 将处理后的信息添加到 processed_characters 列表中
        processed_characters.append({
            'script_id': script_id,
            'character_id': character_id,
            'character_name': character_name,
            'character_scene': character_scene
        })

    # Convert the QuerySet to a list
    # Create a context dictionary with the processed data
    context = {'scripts': scripts, 'scenes': processed_scenes, 'feedbacks': feedbacks, 'characters': processed_characters,
               'comments': comments, 'highfreqwords': highfreqwords, 'interactions': interactions}


    # 渲染模板并返回响应
    return render(request, '../templates/test_db.html', context)
