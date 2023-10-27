from rest_framework import serializers
from .models import MyRecipes, Category


class MyRecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyRecipes
        fields = ['id', 'title', 'text', 'category']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']
