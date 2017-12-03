from django.db import models

# Create your models here.
class Addrs(models.Model):
    ip = models.GenericIPAddressField()
    timestamp = models.DateTimeField(auto_now_add=True)