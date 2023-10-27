from django.urls import include, path
from drf_spectacular.views import SpectacularSwaggerView

from .views import RecipesView, CategoryView
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'recipes', RecipesView, basename='recipes')
router.register(r'category', CategoryView, basename='category')

urlpatterns = [
   path('', include(router.urls)),
]
