# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Characters(models.Model):
    character_id = models.PositiveIntegerField(primary_key=True, db_column='Character_id')
    script = models.OneToOneField('Script', models.DO_NOTHING, db_column='Script_id')
    character_name = models.CharField(db_column='Character_name', max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'characters'


class Comment(models.Model):
    script = models.OneToOneField('Script', models.DO_NOTHING, db_column='Script_id', primary_key=True)  # Field name made lowercase. The composite primary key (Script_id, Comment_id) found, that is not supported. The first column is selected.
    comment_id = models.PositiveBigIntegerField(db_column='Comment_id')  # Field name made lowercase.
    comment_time = models.DateField(db_column='Comment_time', blank=True, null=True)  # Field name made lowercase.
    commentator = models.CharField(db_column='Commentator', max_length=255, blank=True, null=True)  # Field name made lowercase.
    comment_content = models.TextField(db_column='Comment_content', blank=True, null=True)  # Field name made lowercase.
    comment_title = models.CharField(db_column='Comment_title', max_length=255, blank=True, null=True)  # Field name made lowercase.
    comment_type = models.CharField(db_column='Comment_type', max_length=255, blank=True, null=True)  # Field name made lowercase.
    positive_score = models.DecimalField(db_column='Positive_score', max_digits=5, decimal_places=3, blank=True, null=True)  # Field name made lowercase.
    negative_score = models.DecimalField(db_column='Negative_score', max_digits=5, decimal_places=3, blank=True, null=True)  # Field name made lowercase.
    neutral_score = models.DecimalField(db_column='Neutral_score', max_digits=5, decimal_places=3, blank=True, null=True)  # Field name made lowercase.
    compound_score = models.DecimalField(db_column='Compound_score', max_digits=5, decimal_places=3, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'comment'
        unique_together = (('script', 'comment_id'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Highfreqword(models.Model):
    script = models.OneToOneField('Script', models.DO_NOTHING, db_column='Script_id', primary_key=True)  # Field name made lowercase. The composite primary key (Script_id, Word_id) found, that is not supported. The first column is selected.
    word = models.CharField(db_column='Word', max_length=255, blank=True, null=True)  # Field name made lowercase.
    word_id = models.PositiveIntegerField(db_column='Word_id')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'highfreqword'
        unique_together = (('script', 'word_id'),)


class Interaction(models.Model):
    script = models.OneToOneField('Script', models.DO_NOTHING, db_column='Script_id', primary_key=True)
    interaction_id = models.PositiveIntegerField(db_column='Interaction_id')
    character_id_one = models.ForeignKey(Characters, models.DO_NOTHING, db_column='Character_id_one', to_field='character_id', blank=True, null=True)
    character_id_two = models.ForeignKey(Characters, models.DO_NOTHING, db_column='Character_id_two', to_field='character_id', related_name='interaction_character_id_two_set', blank=True, null=True)
    interaction_freqnum = models.PositiveBigIntegerField(db_column='Interaction_freqnum', blank=True, null=True)
    relation = models.CharField(db_column='Relation', max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'interaction'
        unique_together = (('script', 'interaction_id'),)


class Scene(models.Model):
    script = models.OneToOneField('Script', models.DO_NOTHING, db_column='Script_id', primary_key=True)  # Field name made lowercase. The composite primary key (Script_id, Scene_id) found, that is not supported. The first column is selected.
    scene_id = models.PositiveIntegerField(db_column='Scene_id')  # Field name made lowercase.
    scene_content = models.TextField(db_column='Scene_content', blank=True, null=True)  # Field name made lowercase.
    scene_name = models.CharField(db_column='Scene_name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    scene_time = models.DateField(db_column='Scene_time', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'scene'
        unique_together = (('script', 'scene_id'),)


class Script(models.Model):
    script_id = models.PositiveBigIntegerField(db_column='Script_id', primary_key=True)  # Field name made lowercase.
    script_name = models.CharField(db_column='Script_name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    director = models.CharField(db_column='Director', max_length=255, blank=True, null=True)  # Field name made lowercase.
    website = models.CharField(db_column='Website', max_length=255, blank=True, null=True)  # Field name made lowercase.
    score = models.DecimalField(db_column='Score', max_digits=5, decimal_places=2, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'script'
