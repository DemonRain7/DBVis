import os
import django

# 设置 DJANGO_SETTINGS_MODULE 环境变量
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "DBVis.settings")
django.setup()

# 请确保导入了你的 Script 模型
from work.models import Script

def load_data():
    # 替换下面的值为你想要添加的实际数据
    script_data = {
        'script_id': 2,  # 或者任何在数据库中不存在的值
        'script_name': '你的剧本名',
        'director': '导演姓名',
        'website': 'http://example.com',
        'score': 8.5,  # 替换为所需的评分
    }

    # 创建一个新的 Script 实例并保存到数据库
    script_instance = Script.objects.create(**script_data)

    # 可选：打印 script_instance 以验证已创建的数据
    print(script_instance)

# 如果你希望在执行脚本时自动运行该函数，可以添加以下代码
if __name__ == "__main__":
    load_data()
