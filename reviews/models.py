from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    rating = models.IntegerField(default=5)
    message = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.rating}★"