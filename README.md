# Consulta CEP ViaCep

Aplicação web para consultar endereços a partir de CEPs usando a API ViaCep.

## Estrutura do Projeto

- `app/`: Código da aplicação Flask
  - `__init__.py`: Factory da aplicação
  - `routes.py`: Rotas da API
  - `cep_service.py`: Lógica de consulta de CEP
- `templates/`: Templates HTML
- `static/`: Arquivos estáticos (CSS, JS)
- `main.py`: Ponto de entrada

## Instalação

1. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

2. Execute a aplicação:
   ```bash
   python main.py
   ```

3. Acesse `http://localhost:8000`

## Uso

Digite um CEP no formulário e clique em "Consultar" para ver os dados do endereço.

<img width="928" height="557" alt="image" src="https://github.com/user-attachments/assets/d4f46fb3-28f2-4cab-a607-07172192a62f" />

