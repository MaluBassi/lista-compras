import { useState } from "react";
import ItemLista from "./ItemLista";

function App() {
  // Passo 3 e Bônus: Lista inicial com a propriedade 'comprado'
  const [itens, setItens] = useState([
    { id: 1, texto: "Arroz", comprado: false },
    { id: 2, texto: "Feijão", comprado: false },
    { id: 3, texto: "Leite", comprado: false },
  ]);

  // Passo 4: Estado do campo de texto do novo item
  const [novoItem, setNovoItem] = useState("");

  // Passo 4: Função para adicionar um item à lista
  function adicionarItem() {
    if (!novoItem.trim()) return;
    
    setItens((atual) => [
      ...atual, 
      { id: Date.now(), texto: novoItem, comprado: false }
    ]);
    setNovoItem("");
  }

  // Passo 5: Função para remover um item pelo ID
  function removerItem(id) {
    setItens((atual) => atual.filter((item) => item.id !== id));
  }

  // Bônus: Função para alternar o estado de comprado (riscado)
  function alternarComprado(id) {
    setItens((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-gray-950">Lista de compras</h1>

      {/* Passo 4: Input e Botão de adicionar */}
      <div className="flex gap-2 mb-4">
        <input
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          placeholder="Novo item"
          className="border border-gray-200 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:border-teal-700"
        />
        <button
          onClick={adicionarItem}
          className="bg-teal-700 text-white rounded-lg px-4 py-2 hover:bg-teal-800 transition-colors font-medium"
        >
          Adicionar
        </button>
      </div>

      {/* Passo 6: Mensagem de lista vazia */}
      {itens.length === 0 && (
        <p className="text-gray-500 italic">Sua lista está vazia.</p>
      )}

      {/* Passo 3, 5 e Bônus: Renderização da lista usando .map */}
      <div className="mt-2">
        {itens.map((item) => (
          <ItemLista
            key={item.id}
            texto={item.texto}
            comprado={item.comprado}
            onRemover={() => removerItem(item.id)}
            onAlternarComprado={() => alternarComprado(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
