# Generated by Django 2.0 on 2017-12-03 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addrs',
            name='timestamp',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
