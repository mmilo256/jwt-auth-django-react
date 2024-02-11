from django.shortcuts import render

from .models import Profile, User
from .serializers import UserSerializer, TokenSerializer, RegisterSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated

class TokenPairView(TokenObtainPairView):
    serializer_class = TokenSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dashboard(req):
    if req.method == 'GET':
        response = f"Hola {req.user}, método GET."
        return Response({'response': response}, status=status.HTTP_200_OK)
    elif req.method == 'POST':
        text = req.POST.get('text')
        response = f"Hola {req.user}, método POST. Texto: {text}"
        return Response({'response': response}, status=status.HTTP_200_OK)
    return Response({}, status=status.HTTP_400_BAD_REQUEST)



# Create your views here.
