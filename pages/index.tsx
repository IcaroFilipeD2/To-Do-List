import { useState } from 'react';

export default function Home(){

  const [andamento, setAndamento] = useState([]);
  const [feito, setFeito] = useState([]);
  const [item, setItem] =  useState([]);
  const [onActive, setOnActive] = useState('andamento');

  function adicionarItem(ev) {
    ev.preventDefault();
    const data = new Date().toLocaleString();
    setAndamento([...andamento, {
      date: data,
      task: item
    }])
    setItem('');
  }

  function itemConcluido(addItem) {
    setAndamento([...andamento.filter(item => item !== addItem)])
    setFeito([...feito, addItem])
  }

  function removerItem(removeItem) {
    setAndamento([...andamento.filter(item => item !== removeItem)])
    
  }

  function undoItem(undoItem) {
    setFeito([...feito.filter(item => item !== undoItem)])
    setAndamento([...andamento, undoItem])
  }
  
  return(
    <div className='min-h-screen pt-5 bg-primary'>
      <div className='max-w-xs mx-auto'>
        <h1 className='text-3x1 uppercase text-white font-semibold my-4 text-center'>Todo List</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label className='text-sm text-white font-semibold mb-1'>Adicionar Item</label>
            <form className='flex gap-2' onSubmit={(ev) => adicionarItem(ev)}>
              <input 
                type='text' 
                className='flex-1 px-2 rounded outline-none'
                placeholder='Adicionar item...'
                value={item}
                onChange={(ev) => setItem(ev.target.value)}
              />
              <button className='px-2 py-1 items-center bg-white text-black p-1.5 rounded-md cursor-pointer hover:bg-green-500 transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </form>
          </div>
          <div className='text-white flex gap-2'>
            <button
              className={onActive == 'andamento' ? 'flex-1 border border-orange-500 bg-orange-500 p-2 rounded hover:bg-orange-600 transition-all font-semibold' : 'flex-1 border border-orange-500 bg-orange-500 p-2 rounded hover:bg-orange-600 transition-all font-semibold'}
              onClick={() => setOnActive('andamento')}
            >
              Em andamento
            </button>
            <button
              className={onActive == 'feito' ? 'flex-1 border border-green-500 bg-green-500 p-2 rounded hover:bg-green-600 transition-all font-semibold' : 'flex-1 border border-green-500 bg-green-500 p-2 rounded hover:bg-green-600 transition-all font-semibold'}
              onClick={() => setOnActive('feito')}
            >
              Feito
            </button>
          </div>
          <div className='flex flex-col gap-2 text-white'>
            {onActive == 'andamento' ? (
              andamento.map((item,index) => {
                return (
                  <div key={index} className='bg-secondary rounded-xl p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-semibold'>
                        {item.date}
                      </span>
                      <div className="flex gap-2">
                        <button
                          className='bg-green-500 p-0.5 rounded'
                          onClick={() => itemConcluido(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </button>
                        <button
                          className='bg-red-500 p-0.5 rounded'
                          onClick={() => removerItem(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>
                        {item.task}
                      </p>
                    </div>
                  </div>
                )
              }) 
            ) : (
              feito.map((item,index) => {
                return (
                  <div key={index} className='bg-secondary rounded-xl p-2'>
                    <div className='flex justify-between items-center'>
                      <span className='text-sm font-semibold'>
                        {item.date}
                      </span>
                      <div className="flex gap-2">
                        <button
                          className='bg-orange-500 p-0.5 rounded'
                          onClick={() => undoItem(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>
                        {item.task}
                      </p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}