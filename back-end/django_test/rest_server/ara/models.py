from django.db import models

class Content(models.Model):
    title = models.CharField(max_length=100)
    meeting_date = models.CharField(max_length=30)
    num_of_member = models.IntegerField(default=0)
