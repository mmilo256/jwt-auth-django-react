from django.contrib import admin
from users.models import User, Profile  # Importa los modelos User y Profile definidos en users.models

# Define las clases de administración para los modelos User y Profile
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']  # Define los campos que se mostrarán en la lista de usuarios en el panel de administración

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'full_name', 'bio']  # Define los campos que se mostrarán en la lista de perfiles en el panel de administración

# Registra las clases de administración para los modelos User y Profile
admin.site.register(User, UserAdmin)  # Registra el modelo User con su respectiva clase de administración
admin.site.register(Profile, ProfileAdmin)  # Registra el modelo Profile con su respectiva clase de administración
