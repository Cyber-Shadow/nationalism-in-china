from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'webapp/main.html')
    
def hanyuan(request):
    return render(request, 'webapp/hanyuan.html')