from typing import List, Optional

from fastapi.responses import JSONResponse
from fastapi import Response
from fastapi import Path
from fastapi import Query
from fastapi import Header
from fastapi import FastAPI
from fastapi import HTTPException
from starlette import status

from models import Curso



app = FastAPI()


cursos = {
    1: {id
    "titulo": "Programação para Leigos",
    "aulas": 112,
    "horas": 58
    },
    2: {
    "titulo": "Algoritmos e Lógica de Programação",
    "aulas": 87,
    "horas": 67
    }
}

@app.get("/cursos")
async def get_cursos():
    return cursos

@app.get("/cursos/{curso_id}")
async def get_curso(curso_id: int = Path(default= None, title="ID do curso", description="Deve ser entre 1 e 2", gt=0, lt=3)):
    try:
    curso = cursos[curso_id]
    return curso
    except KeyError:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Curso não encontrado.")

@app.post("/cursos",status_code=status.HTTP_201_CREATED)
async def post_curso(curso: Curso):
    next_id = len(cursos) + 1
    cursos[next_id] = curso
    del curso.id
       return curso
   else:
       raise HTTPException(status_code=status.HTTP_409_CONFLICT, defail=f"Já existe um curso com ID {curso.id}.")
    

@app.put("/curso/{curso_id}")   
async def put_curso(curso_id: int, curso: Curso):
    if curso_id in cursos:
        cursos [curso.id] = curso
        del curso.id

        return curso
   
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Não existe um id {curso_id}.")

@app.delete("/cursos/{curso_id}")
async def delete_curso(curso_id: int):
    if curso_id in cursos:
        del cursos[curso_id]
        #return JSPONRespomse{status_code.status.HTTP_204_NO CONTENT."}
        return Response(status_code=status.HTTP_204_NO_CONTENT)
        return {"message": "Curso excluído com sucesso."}
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Curso não encontrado.")
    

@app.get('/calculadora')
async def calculadora(a: int = Query(default=None, gt= 5), b: int = Query(default=None, gt=10), x_geek: str = Headr(default=None), c: Optional[int] = None):
   soma: int = a + b
   if c:
        soma = soma + c 

   return {"resultado": soma}

    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(main:app, host="0.0.0.0", port=8000, debug=True, reload=True)