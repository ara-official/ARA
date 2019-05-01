#!/bin/sh
#IP="172.20.10.3"
IP="localhost"
PORT="3005"
python3 manage.py runserver ${IP}:${PORT}
