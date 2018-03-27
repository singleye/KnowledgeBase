from django.urls import re_path
from rest_framework.authtoken import views as drf_views

urlpatterns = [
    re_path(r'^auth$', drf_views.obtain_auth_token, name='auth'),
]
