from flask import Blueprint, request, jsonify, render_template
from app.cep_service import CepService

api_bp = Blueprint("api", __name__)


@api_bp.route("/")
def index():
    return render_template("index.html")


@api_bp.route("/api/cep")
def api_cep():
    cep = request.args.get("cep", "")
    try:
        dados = CepService.consultar_cep(cep)
        return jsonify({"success": True, "data": dados})
    except ValueError as e:
        return jsonify({"success": False, "error": str(e)}), 400
