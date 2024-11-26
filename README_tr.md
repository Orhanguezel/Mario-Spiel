# **DOM Klavye Olayları ile Mario'yu Yürüt**

Klavye tuşlarını kullanarak Mario'yu yürütelim!

![Mario Yürü](assets/mario-walk.gif)

---

## **Görevler**

### **Görev 1**

`script.js` dosyasını oluşturun ve verilen [index.html](./index.html) dosyasına bağlayın.

---

### **Görev 2**

`script.js` içinde:

- `id` değeri `mario` olan HTML öğesini seçin ve `mario` adlı bir değişkene kaydedin.
- `<img />` etiketini seçin ve `imgMario` adlı bir değişkene kaydedin.
- `<img />` etiketinin `src` özelliğini `assets/mario-stand.gif` değerine ayarlayın.

---

### **Görev 3**

`stopMario` adında bir fonksiyon oluşturun;

- Bu fonksiyon, `imgMario` öğesinin `src` özelliğini `./assets/mario-stand.gif` değerine ayarlamalıdır.

---

### **Görev 4**

`moveMario` adında bir fonksiyon oluşturun;

- Bu fonksiyon, `imgMario` öğesinin `src` özelliğini kontrol etmelidir;
  - Eğer `src` özelliği `mario-walk.gif` ile eşleşiyorsa hiçbir şey yapmamalıdır.
  - Aksi takdirde, `src` özelliğini `mario-walk.gif` olarak ayarlamalıdır.

---

### **Görev 5**

`moveMario` fonksiyonunu güncelleyin;

- `document` nesnesinde bir `keydown` (tuşa basma) olay dinleyicisi oluşturun.
- Bu dinleyici, `moveMario` fonksiyonunu çalıştırmalıdır.
- `moveMario`, olay dinleyicisinden gelen `event` nesnesini bir parametre olarak alacak şekilde güncellenmelidir.

---

### **Görev 6**

`moveMario` fonksiyonunu güncelleyin;

- Eğer `event` parametresinin `key` özelliği `ArrowLeft` ise:
  - Mario, 10 piksel sola hareket etmelidir.
- Eğer `event` parametresinin `key` özelliği `ArrowRight` ise:
  - Mario, 10 piksel sağa hareket etmelidir.

> **İpucu:** Bunu başarmak için Mario'nun **CSS `left` özelliğini** değiştirmeniz gerekecek.

---

### **Görev 7**

Mario'nun yürüdüğü yöne dönmesini sağlayalım. `moveMario` fonksiyonunu güncelleyin;

- Mario sola yürümek istediğinde, CSS `transform` özelliğini kullanarak -180 derece döndürün.
- Mario sağa yürümek istediğinde, CSS `transform` özelliğini kullanarak 0 derece döndürün.

---

### **Görev 8**

Tuşa basmayı bıraktığımızda Mario'nun animasyonunun durmasını istiyoruz.

- `document` nesnesinde bir `keyup` (tuş bırakma) olay dinleyicisi oluşturun.
- Bu dinleyici, `stopMario` fonksiyonunu çalıştırmalıdır.

---

Bu görevleri tamamladıktan sonra Mario'yu klavyenizle hareket ettirebileceksiniz! 😊