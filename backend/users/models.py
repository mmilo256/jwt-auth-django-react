from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Define el modelo de usuario personalizado
class User(AbstractUser):
    # Campos adicionales al modelo AbstractUser
    username = models.CharField(max_length=200)
    email = models.EmailField(unique=True)

    # Establece 'email' como el campo de inicio de sesión
    USERNAME_FIELD = 'email'
    # Especifica que 'username' es un campo obligatorio
    REQUIRED_FIELDS = ['username']

    # Método para representar el objeto como una cadena
    def __str__(self):
        return self.username

# Define el modelo de perfil de usuario
class Profile(models.Model):
    # Relación uno a uno con el modelo User
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Campos adicionales del perfil
    full_name = models.CharField(max_length=1000)
    bio = models.TextField()

    # Método para representar el objeto como una cadena
    def __str__(self):
        return self.full_name

# Función para crear automáticamente un perfil al crear un usuario
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        # Crea un perfil asociado al usuario recién creado
        Profile.objects.create(user=instance)

# Función para guardar automáticamente el perfil cada vez que se guarda un usuario
def save_user_profile(sender, instance, **kwargs):
    # Guarda el perfil asociado al usuario
    instance.profile.save()

# Conecta la señal post_save al evento de crear un perfil para cada usuario creado
post_save.connect(create_user_profile, sender=User)
# Conecta la señal post_save al evento de guardar el perfil cada vez que se guarda un usuario
post_save.connect(save_user_profile, sender=User)


""" Clase User:
    La clase User es un modelo que define la estructura de los usuarios en la aplicación Django.
    En este caso, la clase User se define mediante la herencia de AbstractUser, que es una clase base proporcionada por Django para la gestión de usuarios. Esta clase base ya contiene campos comunes de usuario como username, email, password, entre otros.
    Se agregan campos adicionales a la clase User, como email, que se define como único (no puede haber dos usuarios con el mismo correo electrónico), y username, que se redefine con una longitud máxima de 200 caracteres.
    Se establece el campo email como el campo de inicio de sesión mediante USERNAME_FIELD, lo que significa que los usuarios iniciarán sesión utilizando su dirección de correo electrónico en lugar de su nombre de usuario.
    Además, se especifica que username es un campo requerido (REQUIRED_FIELDS), lo que significa que se solicitará al crear un nuevo usuario.
    La función __str__ se sobrescribe para devolver una representación legible de la instancia de usuario, que en este caso es el nombre de usuario (username).

Clase Profile:
    La clase Profile es un modelo adicional que se utiliza para almacenar información adicional sobre los usuarios que no está cubierta por el modelo de usuario estándar.
    En este caso, la clase Profile contiene campos como full_name, bio y verified, que pueden utilizarse para almacenar información como el nombre completo del usuario, una biografía personal o un estado de verificación de la cuenta, respectivamente.
    La clase Profile está vinculada al modelo de usuario a través de una relación uno a uno (OneToOneField). Esto significa que cada instancia de Profile está asociada a exactamente una instancia de User.
    La función __str__ se define para devolver una representación legible del perfil, en este caso, el nombre completo (full_name) del usuario. """
