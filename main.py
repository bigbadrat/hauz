#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2,jinja2
import os, datetime
from google.appengine.api import users
from google.appengine.ext import db
import simplejson as json

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)+"/templates" ))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('home.html')    
        user = users.get_current_user()
        if user:
            values = {}
            values["user"] = user.nickname()
            self.response.out.write(template.render(values))
        else:
            self.redirect(users.create_login_url(self.request.uri))

class DataHandler(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'application/json'
        request_args = json.loads(self.request.get("args"))
        self.response.out.write(json.dumps(["the request is.." , request_args]))



app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/data', DataHandler)
], debug=True)
