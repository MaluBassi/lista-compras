function ItemLista({ texto, comprado, onRemover, onAlternarComprado }) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2 bg-white shadow-xs">
      {/* Clicar no texto alterna o riscado */}
      <span 
        onClick={onAlternarComprado} 
        className={`cursor-pointer select-none flex-1 ${comprado ? "line-through text-gray-400" : "text-gray-800"}`}
      >
        {texto}
      </span>
      
      <button 
        onClick={onRemover} 
        className="text-red-600 text-sm font-medium hover:text-red-800 transition-colors ml-2"
      >
        Remover
      </button>
    </div>
  );
}

export default ItemLista;

