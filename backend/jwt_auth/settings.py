"""
Django settings for jwt_auth project.

Generated by 'django-admin startproject' using Django 5.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%+72fpx2)&ss3chu7=r^fmif0qnav4yuafwd)2qwwe&8@!b)i3'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'users'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'jwt_auth.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'jwt_auth.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

CORS_ALLOW_ALL_ORIGINS = True

# Configuración de djangorestframework_simplejwt
SIMPLE_JWT = {
    # Tiempo de vida del token de acceso
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    
    # Tiempo de vida del token de refresco
    'REFRESH_TOKEN_LIFETIME': timedelta(days=50),
    
    # Rotar tokens de refresco después de su uso
    'ROTATE_REFRESH_TOKENS': True,
    
    # Agregar tokens antiguos a la lista negra después de la rotación
    'BLACKLIST_AFTER_ROTATION': True,
    
    # No actualizar el último inicio de sesión del usuario al emitir un nuevo token
    'UPDATE_LAST_LOGIN': False,
    
    # Algoritmo de cifrado para la firma de tokens
    'ALGORITHM': 'HS256',
    
    # Clave de verificación (ninguna en este caso)
    'VERIFYING_KEY': None,
    
    # Audiencia del token (ninguna en este caso)
    'AUDIENCE': None,
    
    # Emisor del token (ninguno en este caso)
    'ISSUER': None,
    
    # URL para obtener claves JWK (ninguna en este caso)
    'JWK_URL': None,
    
    # Tiempo de margen (ninguno en este caso)
    'LEEWAY': 0,
    
    # Tipos de encabezados de autenticación válidos
    'AUTH_HEADER_TYPES': ('Bearer',),
    
    # Nombre del encabezado de autenticación
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    
    # Campo utilizado para identificar al usuario
    'USER_ID_FIELD': 'id',
    
    # Reclamo en el token JWT que identifica al usuario
    'USER_ID_CLAIM': 'user_id',
    
    # Regla de autenticación del usuario
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',
    
    # Clases de tokens de autenticación
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    
    # Reclamo en el token JWT que indica el tipo de token
    'TOKEN_TYPE_CLAIM': 'token_type',
    
    # Clase utilizada para representar al usuario asociado con un token
    'TOKEN_USER_CLASS': 'rest_framework_simplejwt.models.TokenUser',
    
    # Reclamo en el token JWT que indica el identificador único del token
    'JTI_CLAIM': 'jti',
    
    # Reclamo en el token JWT que indica la hora de vencimiento del token de refresco
    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    
    # Tiempo de vida del token de acceso deslizante
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    
    # Tiempo de vida del token de refresco deslizante
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}