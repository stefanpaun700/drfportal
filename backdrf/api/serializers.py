from rest_framework import serializers



class DeshboardSerializer(serializers.Serializer):
    ticker = serializers.CharField(max_length=20)
