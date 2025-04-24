from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_mensagem():
    response = client.get('/msg')
    assert response.status_code == 200
    assert response.json() == {"msg": "FastAPI na Geek University"}