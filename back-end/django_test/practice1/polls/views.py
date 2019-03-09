from django.shortcuts import render
from django.http import HttpResponse
from polls.models import Question

def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return render(request, 'polls/index.html', context)

def detail(request, question_id):
    return HttpResponse("This is detail page of Question: %s." % question_id)

def result(request, question_id):
    response = "This is result page of Question: %s." % question_id
    return HttpResponse(response)

def vote(request, question_id):
    return HttpResponse("This is vote page of Question: %s." % question_id)
