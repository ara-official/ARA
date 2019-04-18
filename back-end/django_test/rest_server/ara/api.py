from .models import Content
from rest_framework import serializers, viewsets

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
       model = Content
       fields = '__all__'

class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer
