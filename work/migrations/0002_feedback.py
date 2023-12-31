# Generated by Django 4.2.7 on 2023-12-09 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('feedback_id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('user_id', models.BigIntegerField(blank=True, null=True)),
                ('feedback_time', models.DateField(blank=True, null=True)),
                ('feedback_content', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'feedback',
                'managed': False,
            },
        ),
    ]
