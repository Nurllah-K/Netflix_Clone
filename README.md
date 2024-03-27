Netflix Clone Uygulaması

Bu proje, React.js kullanılarak Netflix'in benzer bir klonunu oluşturmayı amaçlamaktadır. Uygulamada, kullanıcıların film ve TV şovları arasında gezinmelerini, içerikler hakkında bilgi edinmelerini ve istedikleri içerikleri izlemelerini sağlamak için The Movie Database (TMDb) API'si kullanılmıştır.
Kullanılan Kütüphaneler
react-router-dom: Sayfalar arası geçişler ve yönlendirme için kullanılmıştır.
axios: TMDb API'sine HTTP isteklerini yapmak için kullanılmıştır.
bootstrap: Hızlı ve kolay bir şekilde düzen ve stil eklemek için kullanılmıştır.
redux: Uygulama durumunu yönetmek için kullanılmıştır.
react-redux: Redux ile React uygulamasını entegre etmek için kullanılmıştır.
redux-thunk: Redux üzerinde asenkron işlemleri yönetmek için kullanılmıştır.
@splidejs/react-splide: Karusel bileşenleri oluşturmak için kullanılmıştır.

Netflix Clone Uygulaması

Bu proje, React.js kullanılarak Netflix'in benzer bir klonunu oluşturmayı amaçlamaktadır. Uygulamada, kullanıcıların film ve TV şovları arasında gezinmelerini, içerikler hakkında bilgi edinmelerini ve istedikleri içerikleri izlemelerini sağlamak için The Movie Database (TMDb) API'si kullanılmıştır.

Kullanılan Kütüphaneler
react-router-dom: Sayfalar arası geçişler ve yönlendirme için kullanılmıştır.
axios: TMDb API'sine HTTP isteklerini yapmak için kullanılmıştır.
bootstrap: Hızlı ve kolay bir şekilde düzen ve stil eklemek için kullanılmıştır.
redux: Uygulama durumunu yönetmek için kullanılmıştır.
react-redux: Redux ile React uygulamasını entegre etmek için kullanılmıştır.
redux-thunk: Redux üzerinde asenkron işlemleri yönetmek için kullanılmıştır.
@splidejs/react-splide: Karusel bileşenleri oluşturmak için kullanılmıştır.
Proje Kurulumu
Bu repo'yu klonlayın:

bash
Copy code
git clone <repo-link>
Proje dizinine gidin:

bash
Copy code
cd netflix-clone
Gerekli bağımlılıkları yükleyin:

Copy code
npm install
TMDb API anahtarınızı .env dosyasına ekleyin:

makefile
Copy code
REACT_APP_TMDB_API_KEY=your_api_key_here
Uygulamayı başlatın:

sql
Copy code
npm start
Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyin.

Uygulama Fonksiyonları
Ana Sayfa: Popüler filmler ve TV şovlarının bir listesi ile kullanıcıyı karşılar.
Film/TV Detayları: Seçilen film veya TV şovunun detaylarını içeren bir sayfa.
Arama: Kullanıcının içerikleri aramasına izin verir.
Favorilere Ekleme: Kullanıcıların istedikleri içerikleri favori olarak işaretlemelerini sağlar.
Kategorilere Gözatma: Farklı kategorilerdeki içerikleri gösterir.
Kullanıcı Profili: Kullanıcıların hesap bilgilerini görüntüler.

<img src="./netflixclone.gif"/>
