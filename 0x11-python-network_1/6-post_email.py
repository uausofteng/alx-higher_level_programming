#!/usr/bin/env python3

import requests
import sys

if __name__ == '__main__':
    url = sys.argv[1]
    email = sys.argv[2]

    print(f"Your email is: {email}")

    response = requests.post(url, data={'email': email})

    print(response.text)

