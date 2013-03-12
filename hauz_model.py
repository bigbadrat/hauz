
from google.appengine.ext import db

class HauzComment(db.Model):
    created_at = db.DateTimeProperty(auto_now_add=True)
    created_by = db.UserProperty(auto_current_user_add=True)
    last_updated = db.DateTimeProperty(auto_now=True)



class Hauz(db.Model):
    location = db.StringProperty(required=True)
    gps_location = db.GeoPtProperty( )
    created_at = db.DateTimeProperty(auto_now_add=True)
    created_by = db.UserProperty( auto_current_user_add=True)
    last_updated = db.DateTimeProperty(auto_now=True)
    comments = db.ListProperty(db.Key)





