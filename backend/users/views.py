from django.shortcuts import render  # Importa la función render de django.shortcuts
from .models import Profile, User  # Importa los modelos Profile y User del archivo models.py en el mismo directorio
from .serializers import UserSerializer, TokenSerializer, RegisterSerializer  # Importa los serializadores del archivo serializers.py en el mismo directorio
from rest_framework.response import Response  # Importa la clase Response de rest_framework.response
from rest_framework.decorators import api_view, permission_classes  # Importa los decoradores api_view y permission_classes de rest_framework.decorators
from rest_framework_simplejwt.views import TokenObtainPairView  # Importa TokenObtainPairView de rest_framework_simplejwt.views
from rest_framework import generics, status  # Importa generics y status de rest_framework
from rest_framework.permissions import AllowAny, IsAuthenticated  # Importa AllowAny e IsAuthenticated de rest_framework.permissions

# Vista para obtener el par de tokens JWT
class TokenPairView(TokenObtainPairView):
    serializer_class = TokenSerializer  # Utiliza TokenSerializer para serializar los tokens

# Vista para el registro de nuevos usuarios
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()  # Obtiene todos los usuarios existentes
    permission_classes = ([AllowAny])  # Permite a cualquier usuario realizar una solicitud de registro
    serializer_class = RegisterSerializer  # Utiliza RegisterSerializer para serializar los datos de registro

# Vista para el panel de control (dashboard)
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])  # Requiere que el usuario esté autenticado para acceder al panel de control
def dashboard(req):
    if req.method == 'GET':
        response = f"Hola {req.user}, método GET."  # Crea un mensaje de respuesta para el método GET
        return Response({'response': response}, status=status.HTTP_200_OK)  # Devuelve una respuesta con el mensaje y el estado HTTP 200 OK
    elif req.method == 'POST':
        text = req.POST.get('text')  # Obtiene el texto enviado en la solicitud POST
        response = f"Hola {req.user}, método POST. Texto: {text}"  # Crea un mensaje de respuesta para el método POST
        return Response({'response': response}, status=status.HTTP_200_OK)  # Devuelve una respuesta con el mensaje y el estado HTTP 200 OK
    return Response({}, status=status.HTTP_400_BAD_REQUEST)  # Devuelve una respuesta vacía y el estado HTTP 400 BAD REQUEST si no se proporciona un método válido
