from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from .views import TokenObtainPairView, RegisterView, dashboard

urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('register/', RegisterView.as_view()),
    path('dashboard/', dashboard)
]
