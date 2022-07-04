import imp
from multiprocessing import Value
from django.http import JsonResponse
from django.shortcuts import render
from django.views import *
# import json
import urllib.request, json 



class Home(View):
    def get(self,request):
        return render(request,'home.html')
class Showdb(View):
    def get(self,request):
      
        url='http://127.0.0.1:8000/static/js/datatable2.json/'
        with urllib.request.urlopen(f"{url}") as url:
            data = json.loads(url.read().decode())
            
        return JsonResponse({'data':data},safe=False)

class Ageascending(View):
    def get(self,request):
        agelist=[]
        lastlist=[]
        url='http://127.0.0.1:8000/static/js/datatable2.json/'
        with urllib.request.urlopen(f"{url}") as url:
            data = json.loads(url.read().decode())
            for i in range(len(data)):
                val1=data[i]
                val2=data[i+1]
                last=data[-1]
                if val1['id'] == last['id']:
                    lastlist.append(val1)
                    break
                elif val2['id'] == last['id']:
                    lastlist.append(val2)
                    break
                else :
                    if val1['Age']<=val2['Age']:
                        agelist.append(val1)
                    else:
                        agelist.append(val2)
        

            

                
                    
            
        return JsonResponse({'data':data},safe=False)




