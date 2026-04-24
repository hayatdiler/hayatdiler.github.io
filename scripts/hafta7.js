
        // 1. TEMA DEĞİŞTİRME MANTIĞI
        const btnTema = document.getElementById('btnTema');
        const htmlElement = document.documentElement; // <html> etiketini seçer

        btnTema.addEventListener('click', function() {
            // Mevcut temayı kontrol et
            const suAnkiTema = htmlElement.getAttribute('data-bs-theme');
            
            if (suAnkiTema === 'light') {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                btnTema.textContent = 'Açık Temaya Geç';
                btnTema.classList.replace('btn-outline-dark', 'btn-light');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'light');
                btnTema.textContent = 'Koyu Temaya Geç';
                btnTema.classList.replace('btn-light', 'btn-outline-dark');
            }
        });

        // 2. FORM VERİLERİNİ OKUMA VE ÖZET OLUŞTURMA
        const kayitFormu = document.getElementById('kayitFormu');
        const sonucAlani = document.getElementById('sonucAlani');

        kayitFormu.addEventListener('submit', function(event) {
            // Formun sayfayı yenilemesini (varsayılan davranışı) engeller
            event.preventDefault();

            // Inputlardan değerleri alıyoruz
            const ad = document.getElementById('adSoyad').value.trim();
            const mail = document.getElementById('email').value.trim();
            const sinif = document.getElementById('sinif').value;
            const oturum = document.getElementById('oturum').value;
            const katilim = document.getElementById('katilimTuru').value;
            const onay = document.getElementById('onay').checked;

            // Eksik Alan Kontrolü (Zorunlu alanlar)
            if (!ad || !mail) {
                alert("Lütfen Ad Soyad ve E-posta alanlarını doldurunuz!");
                return; // Kodun aşağıya inmesini durdur
            }

            if (!onay) {
                alert("Lütfen aydınlatma metnini (checkbox) onaylayınız!");
                return;
            }

            // Başarılı Senaryo: Sonuç alanını güncelle
            sonucAlani.classList.replace('alert-info', 'alert-success');
            sonucAlani.innerHTML = `
                <h4 class="alert-heading fw-bold mb-3">✅ Başvuru Başarılı!</h4>
                <p>Sayın <strong>${ad}</strong>, kaydınız alınmıştır.</p>
                <hr>
                <ul class="mb-0">
                    <li><strong>E-posta:</strong> ${mail}</li>
                    <li><strong>Sınıf:</strong> ${sinif || 'Belirtilmedi'}</li>
                    <li><strong>Seçilen Oturum:</strong> ${oturum}</li>
                    <li><strong>Katılım Türü:</strong> ${katilim}</li>
                </ul>
            `;
            
            // Kullanıcıyı sonuç alanına doğru hafifçe kaydır
            sonucAlani.scrollIntoView({ behavior: "smooth", block: "center" });
        });

