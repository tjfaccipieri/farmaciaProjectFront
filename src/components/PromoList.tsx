import { ProductCard } from './Produtos/ProductCard';

export function PromoList() {

  const produto = [
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 88.88
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 12.5
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 88.88
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 60.25
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 75
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 88.88
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 60.25
    },
    {
      id: 1,
      imagem: 'https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg',
      nome: 'Buscopan composto 10/250mg com 20 comprimidos',
      fabricante: 'Boehringer',
      preco: 75
    },
  ]

  return (
    <>
      <h2 className="text-2xl font-bold text-slate-700">
        Produtos em destaque
      </h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-5 gap-8 my-4">
          {produto.sort((a, b) => a.preco - b.preco).slice(0,5).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
