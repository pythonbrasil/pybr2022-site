#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import os
import sys

sys.path.append(os.curdir)

from eventconf import *

AUTHOR = (
    'Organização do Congresso Nacional de Meio Ambiente de Ceará-Mirim 2022'
)
SITENAME = EVENTNAME

PORT = 8081
SITEURL = 'http://localhost:{}'.format(PORT)

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'pt'
THEME = 'themes/pybr'
DEFAULT_BG = 'images/logo/pythonmao_1.png'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('Pelican', 'https://getpelican.com/'),
    ('Python.org', 'https://www.python.org/'),
    ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
    ('You can modify those links in your config file', '#'),
)

# Social widget
SOCIAL = (
    ('You can add links in your config file', '#'),
    ('Another social link', '#'),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
