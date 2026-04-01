document.getElementById('consultarBtn').addEventListener('click', async () => {
  const input = document.getElementById('cepInput');
  const resultado = document.getElementById('resultado');
  const cepRaw = input.value.trim();
  const cep = cepRaw.replace(/\D/g, '');

  if (!cep) {
    resultado.innerHTML = '<div class="alert alert-danger">Informe o CEP.</div>';
    return;
  }
  if (!/^\d{8}$/.test(cep)) {
    resultado.innerHTML = '<div class="alert alert-warning">CEP inválido. O formato deve ser 00000-000 ou 00000000.</div>';
    return;
  }

  resultado.innerHTML = '<div class="text-muted">Consultando...</div>';
  try {
    const response = await fetch(`/api/cep?cep=${cep}`);
    const data = await response.json();

    if (!response.ok || !data.success) {
      resultado.innerHTML = `<div class="alert alert-danger">Erro: ${data.error ?? 'Falha na consulta'}</div>`;
      return;
    }

    // Resposta 200 - Sucesso
    const d = data.data;
    resultado.innerHTML = `
      <div class="card border-success">
        <div class="card-header bg-success text-white">
          <strong>✓ Endereço Encontrado</strong>
        </div>
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-md-6">
              <strong>CEP:</strong><br>
              <span>${d.cep}</span>
            </div>
            <div class="col-md-6">
              <strong>UF:</strong><br>
              <span>${d.uf}</span>
            </div>
          </div>
          <div class="mb-2">
            <strong>Logradouro:</strong><br>
            <span>${d.logradouro || '---'}</span>
          </div>
          <div class="mb-2">
            <strong>Bairro:</strong><br>
            <span>${d.bairro || '---'}</span>
          </div>
          <div>
            <strong>Cidade:</strong><br>
            <span>${d.localidade || '---'}</span>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    resultado.innerHTML = `<div class="alert alert-danger">Erro de rede: ${err.message}</div>`;
  }
});

