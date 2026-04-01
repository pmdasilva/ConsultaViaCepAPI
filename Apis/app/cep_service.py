import requests
import logging

logger = logging.getLogger(__name__)


class CepService:
    @staticmethod
    def consultar_cep(cep: str) -> dict:
        cep = cep.strip().replace("-", "")
        if not cep:
            raise ValueError("CEP não pode ser vazio.")
        if len(cep) != 8 or not cep.isdigit():
            raise ValueError("O CEP deve conter apenas números e ter 8 dígitos.")

        url = f"https://viacep.com.br/ws/{cep}/json/"
        try:
            resposta = requests.get(url, timeout=10)
            resposta.raise_for_status()
            dados = resposta.json()
            if dados.get("erro"):
                raise ValueError("CEP não encontrado.")
            return {
                "cep": dados.get("cep", ""),
                "logradouro": dados.get("logradouro", ""),
                "bairro": dados.get("bairro", ""),
                "localidade": dados.get("localidade", ""),
                "uf": dados.get("uf", ""),
            }
        except requests.RequestException as e:
            logger.error(f"Erro ao consultar ViaCep: {e}")
            raise ValueError(f"Erro de conexão ao ViaCep: {e}")
