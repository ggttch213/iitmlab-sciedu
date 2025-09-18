document.addEventListener("DOMContentLoaded", function() {
    // 讀取相片名稱的文件
    fetch('./image/科普市集/科普市集.txt')
        .then(response => response.text())
        .then(data => {
            // 分割文件中的相片名稱
            const photoNames = data.split('\n').filter(name => name.trim() !== '');

            // 取得相片集的容器
            const galleryContainer = document.getElementById('photo-gallery');

            // 遍歷相片名稱，將每張相片顯示在網頁上
            photoNames.forEach(photoName => {
                const imgElement = document.createElement('img');
                imgElement.src = photoName; // 假設相片名稱就是相片的路徑
                imgElement.alt = '相片'; // 可以自訂替代文字

                // 將相片元素添加到相片集容器中
                galleryContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching photo filenames:', error));
});