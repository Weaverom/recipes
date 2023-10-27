# from .models import MyRecipes, Category
# from .serializer import MyRecipesSerializer, CategorySerializer
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
#
#
# @api_view(['GET', 'POST'])
# def recipes_list(request):
#     if request.method == 'GET':
#         data = MyRecipes.objects.all()
#         serializer = MyRecipesSerializer(data, context={'request': request}, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         print('post')
#         serializer = MyRecipesSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# @api_view(['GET', 'POST'])
# def categories_list(request):
#     if request.method == 'GET':
#         data = Category.objects.all()
#         serializer = CategorySerializer(data, context={'request': request}, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         print('post')
#         serializer = CategorySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from rest_framework.viewsets import ModelViewSet
from .models import MyRecipes, Category
from .serializer import MyRecipesSerializer, CategorySerializer
from django_filters.rest_framework import DjangoFilterBackend


class RecipesView(ModelViewSet):
    queryset = MyRecipes.objects.all()
    serializer_class = MyRecipesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'category']


class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
