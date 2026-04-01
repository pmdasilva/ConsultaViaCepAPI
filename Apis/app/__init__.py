from flask import Flask
from app.routes import api_bp
import os


def create_app():
    template_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "templates")
    static_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
    app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)
    app.register_blueprint(api_bp)
    return app
