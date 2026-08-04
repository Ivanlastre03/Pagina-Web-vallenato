from django.shortcuts import render


def index(request):
    cantantes = [
        "Diomedes Díaz",
        "Poncho Zuleta",
        "Jorge Oñate",
        "Silvestre Dangond",
    ]

    return render(request, "index.html", {"cantantes": cantantes})
