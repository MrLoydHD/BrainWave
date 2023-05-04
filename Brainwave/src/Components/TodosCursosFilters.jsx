import React from 'react';

function TodosCursosFilters() {
  return (
    <div>
        <div className='flex justify-center'>
            <h2 className="text-2xl font-bold mb-4">Filtros</h2>
        </div>
        <div className="flex items-center mb-4 mt-4">
            <label className="mr-20">Disciplina:</label>
            <select id="categoria" name="categoria" className="border border-gray-300 rounded-lg px-4 py-2">
            <option value="">Todas as categorias</option>
            <option value="Categoria A">Matemática</option>
            <option value="Categoria B">Fisico-Química</option>
            <option value="Categoria C">Biologia e Geologia</option>
            </select>
        </div>
        <div className="flex items-center mb-4">
            <label htmlFor="precoMaximo" className="mr-12">Preço máximo:</label>
            <input id="precoMaximo" name="precoMaximo" type="number" className="border border-gray-300 rounded-lg px-4 py-2" />
        </div>
        </div>
  );
}

export default TodosCursosFilters;