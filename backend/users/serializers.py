from rest_framework_simplejwt.tokens import Token  # Importa la clase Token de rest_framework_simplejwt.tokens
from .models import User, Profile  # Importa los modelos User y Profile del archivo models.py en el mismo directorio
from django.contrib.auth.password_validation import validate_password  # Importa la función validate_password para validar contraseñas
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer  # Importa TokenObtainPairSerializer de rest_framework_simplejwt.serializers
from rest_framework import serializers  # Importa serializers de rest_framework

# Serializador para el modelo User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Especifica el modelo asociado
        fields = ['id', 'username', 'email']  # Define los campos que se incluirán en la serialización

# Serializador personalizado para personalizar tokens JWT
class TokenSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: User):
        token = super().get_token(user)  # Obtiene el token JWT utilizando la clase base

        # Agrega información adicional al token JWT generado
        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['bio'] = user.profile.bio
        return token

# Serializador para manejar el proceso de registro de nuevos usuarios
class RegisterSerializer(serializers.ModelSerializer):
    # Campos para el registro de nuevos usuarios
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password]  # Valida la contraseña utilizando la función validate_password
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True
    )

    class Meta:
        model = User  # Especifica el modelo asociado
        fields = ['email', 'username', 'password', 'password2']  # Define los campos que se incluirán en el registro de usuarios

    # Validación personalizada para asegurarse de que las contraseñas coincidan
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Las contraseñas no son iguales"}
            )
        return attrs

    # Método para crear un nuevo usuario en la base de datos utilizando los datos validados
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
