document.addEventListener('DOMContentLoaded', function () {

  let $ = document.querySelector.bind(document);
  let $$ = document.querySelectorAll.bind(document);





  // Banner Slider First
  let list = document.querySelector('.list');
  console.log(list);
  let items = document.querySelectorAll('.item');
  console.log(items);
  let dots = document.querySelectorAll('.dots li');
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  console.log(next, "Next");

  let active = 0;
  let lengthItems = items.length - 1;

  if (lengthItems < 0) {
    console.error('No items found for the banner slider');
    return; // Ngừng thực thi nếu không tìm thấy item
  }

  var refesh = setInterval(() => {
    next.click();
  }, 3000);

  next.onclick = function () {
    active = (active === lengthItems) ? 0 : active + 1;
    handle();
  };

  prev.onclick = function () {
    active = (active === 0) ? lengthItems : active - 1;
    handle();
  };

  function handle() {
    let removeLastActive = document.querySelector('.dots .active');
    if (removeLastActive) {
      removeLastActive.classList.remove('active');
    }
    if (dots[active]) {
      dots[active].classList.add('active');
    }
    list.style.left = `${-items[active].offsetLeft}px`;
    clearInterval(refesh);
    refesh = setInterval(() => { next.click(); }, 3000);
  }

  dots.forEach((dot, index) => {
    dot.onclick = function () {
      active = index;
      handle();
    };
  });

  // End Banner Slider First

  // Start Slider Banner Sales
  let activeBanner = 0;
  let banners = Array.from($$('.banner'));
  let listBanner = $('.sale-banner');

  if (banners.length > 0) {
    let bannerWidth = banners[0].offsetWidth; // Lấy width sau khi DOM đã tải
    let intervalID;

    function updateSlider() {
      listBanner.style.transform = `translateX(-${(activeBanner * bannerWidth)}px)`;
    }

    function nextBanner() {
      activeBanner = (activeBanner + 1) % banners.length;
      updateSlider();
    }

    function startAutoSlide() {
      intervalID = setInterval(nextBanner, 2000); // Tự động lướt mỗi 2 giây
    }

    function stopInterval() {
      clearInterval(intervalID); // Dừng tự động lướt
    }

    updateSlider();
    startAutoSlide();
  } else {
    console.error('No banners found');
  }

  // End Slider Banner Sales



  // Cart2 (First)
  // const listProduct = document.querySelector('.list-products2');
  // console.log(listProduct, "SSS");
  // const products = listProduct.querySelectorAll('.product2');
  // console.log(products.length, 'length');
  // let nextCart2 = document.querySelector('.next')
  // let prevCart2 = document.querySelector('.prev')

  // if (products.length === 0) {
  //   console.error('No products found');
  //   return; // Ngừng thực thi nếu không tìm thấy sản phẩm
  // }

  // let itemWidth = products[0].offsetWidth + 20;
  // let currentIndex = 0;

  // nextCart2.onclick = function () {
  //   if (currentIndex < products.length - 2) {
  //     console.log("Thanh ne")
  //     currentIndex++;
  //   } else {
  //     currentIndex = 0; // Quay lại từ đầu nếu đã ở cuối danh sách
  //   }
  //   listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  // };

  // prevCart2.addEventListener('click', function () {
  //   if (currentIndex > 0) {
  //     currentIndex--;
  //   } else {
  //     currentIndex = products.length - 1; // Quay lại cuối danh sách nếu đã ở đầu
  //   }
  //   listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  // });
  // // End Cart 2
});
