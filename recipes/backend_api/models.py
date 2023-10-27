from django.db import models


# Create your models here.
class MyRecipes(models.Model):
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=255)
    category = models.ForeignKey("Category", related_name='cat', to_field='title', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=50, unique=True, null=True)

    def __str__(self):
        return self.title
