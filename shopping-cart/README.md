# Data Structure - Shopping Cart

## Task:

Buat sebuah `Software Library` Shopping Cart yang harus memilik fungsi:

1. `void tambahProduk(string kodeProduk, int kuantitas)`

- Menambahkan produk dengan kuantitas yang ditentukan.
- Apabila produk sudah ada di dalam Cart, tambahkan kuantitasnya.

2. `void hapusProduk(string kodeProduk)`

- Menghapus produk dari Cart.

3. `void tampilkanCart()`

- Menampilkan isi Cart dengan format `{kodeProduk}` (`{kuantitas}`)

Buatlah class `Cart` berikut feature code dan unit testnya.

---

Sebagai contoh gunakan skenario di bawah:

```
Cart keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
```

Output:

```
Pisang Hijau (2)
Apel Merah (7)
```

<br>

## Finished with Javascript

Running on **Node Js** :

```
node cart.js
```

Result:

```
Pisang Hijau (2)
Apel Merah (7)
```

<!-- Program harap di upload ke PRIVATE GitHub repository dan tambahkan/invite fandywie sebagai Collaborator.
Apabila ada pertanyaan dapat menghubungi tech.career@sirclo.co.id  -->
