# Generated by Django 5.0.2 on 2024-02-11 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='verified',
        ),
        migrations.AlterField(
            model_name='profile',
            name='bio',
            field=models.TextField(),
        ),
    ]
