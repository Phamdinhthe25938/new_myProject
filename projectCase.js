let dateInput = document.querySelector('.header_input-date');
let tem = 1;
let dateInputCalendar = document.querySelector('.header_input-date--calendar')
dateInput.onclick = function () {
    if (tem === 1) {
        dateInputCalendar.style.display = 'flex'
        tem = 2
    } else if (tem === 2) {
        dateInputCalendar.style.display = 'none'
        tem = 1
    }
}
dateInputCalendar.onclick = function () {
    dateInputCalendar.style.display = 'flex'
}
let calendarDayBtns = document.querySelectorAll('.calendar_day-btn')
for (let calendarDayBtn of calendarDayBtns) {
    if (calendarDayBtn.innerHTML === '') {
        calendarDayBtn.style.background = '#fff'
    }
}
// let arrayQuantityChange =new Array();
// let x=0
//     arrayQuantityChange[x]=new Array();
//     arrayQuantityChange[x].push('-',0,'+');
//     x++;
//     let quantityChanges = document.getElementsByClassName('quantity--form-item-change')
// function displayQuantityChange () {
//     let result = ''
//     for (let i = 0; i < 3; i++) {
//         result += `<button class="change_increase-btn">${arrayQuantityChange[i][0]}</button>`
//             + `<p class="value_change" >${arrayQuantityChange[i][1]}</p>`
//             + `<button class="change_reduction-btn" >${arrayQuantityChange[i][2]}</button>`
//         for(let quantityChange of quantityChanges){
//             console.log(quantityChange)
//             quantityChange.innerHTML= result;
//         }
//     }
// }
// displayQuantityChange();
// // phần thân
// //img quang cáo
//  Bat tat modal
// bat tat modal
let modal = document.getElementById('modal-signIn$signUp');
let modalBodySignIn = document.querySelector('.modal__body--signIn')
let modalBodySignUp  = document.querySelector('.modal__body--signUp')
let headerItemSignIn = document.getElementById('header_feature-item-signIn')
let headerItemSignUp = document.getElementById('header_feature-item-signUp');
let signUpCloseBtn = document.querySelector('.modal__body--signUp-close')
headerItemSignUp.onclick= function (){
    modal.style.display='flex';
    modalBodySignUp.style.display='flex'
    modalBodySignIn.style.display='none'
}
signUpCloseBtn.onclick = function (){
    modal.style.display='none'
}
headerItemSignIn.onclick= function (){
    modal.style.display='flex'
    modalBodySignIn.style.display='flex'
    modalBodySignUp.style.display='none'
}
let signInBtn = document.querySelector('.byClassical-submit-btn');
signInBtn.onclick= function (){
    modal.style.display='none'
}
// load anh quang cao
let i=0;
function loadImg1 (){
    let arrayAdverFrirst= ['https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-sieu-xe-lamborghini-dep_094240591.jpg',
        'https://sieunhandaichien.mobi/sieu-xe-tieng-anh-la-gi/imager_893.jpg',
        'https://tapchisieuxe.com/wp-content/uploads/2020/10/van-hoa-do-sieu-xe-o-nhat-ban-doc-dao-va-dien-ro-so-mot-the-gioi-0-1.jpg']
    document.querySelector('.first-adver__content-img').src=arrayAdverFrirst[i];
    i++;
    if(i===arrayAdverFrirst.length){
        i=0
    }
    setTimeout('loadImg1()',2000)
}
loadImg1();
let j=0;
function loadImg2(){
    let arrayAdverFrirst=[' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL3t-Jk_qciBzYp97RNCeQfeZHXWCWtzsjQ&usqp=CAU',
        'https://msmobile.com.vn/upload_images/images/hinh-nen-sieu-xe-cho-may-tinh-3.jpg',
        'https://media.vov.vn/sites/default/files/styles/large/public/2021-07/most-expensive-cars_1.jpg'
     ]
    document.querySelector('.second-adver__content-img').src= arrayAdverFrirst[j]
    j++
    if(j===arrayAdverFrirst.length){
        j=0
    }
    setTimeout('loadImg2()',2000)
}
loadImg2();
let k=0
function loadImg3(){
    let arrayAdverFrirst=['https://cdn.tgdd.vn//GameApp/1343936//1-800x450.jpg',
        'https://xehay.vn/uploads/images/2020/4/3/xehay-Koenigsegg-240420-3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPfDk9jhL_kVBKhoxZRs-QpOEXne_HSLEXA&usqp=CAU'
    ]
    document.querySelector('.third-adver__content-img').src= arrayAdverFrirst[k]
    k++
    if(k===arrayAdverFrirst.length){
        k=0
    }
    setTimeout('loadImg3()',2000)
}
loadImg3();
let t=0
  function loadImg4(){
      let arrayAdverFrirst=['https://msmobile.com.vn/upload_images/images/hinh-nen-sieu-xe-cho-may-tinh-1.jpg',
          'https://storage.googleapis.com/f1-cms/2020/08/b93bd613-20200826_092520.jpg',
          'https://photo-cms-tpo.zadn.vn/460x258/Uploaded/2022/gn-jwcajw/2021_07_25/03b61a3d-2433-4f46-b240-3eb193c1d68c-1-6044.jpg'
      ]
      document.querySelector('.four-adver__content-img').src= arrayAdverFrirst[t]
      t++
      if(t===arrayAdverFrirst.length){
          t=0;
      }
      setTimeout('loadImg4()',2000)
  }
 loadImg4();
let h=0
function loadImg5(){
    let arrayAdverFrirst=['https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-sieu-xe-lamborghini-dep-an-tuong.jpg',
        'https://i.vietgiaitri.com/2020/10/21/bugatti-he-lo-hinh-anh-sieu-xe-moi-342-5315205.jpg',
        'https://welovecar.vn/wp-content/uploads/2018/12/wlc-sieu-xe-ferrari-laferrari-aperta-tin-261218-1-750x478.jpg'
    ]
    document.querySelector('.five-adver__content-img').src= arrayAdverFrirst[h]
    h++
    if(h===arrayAdverFrirst.length){
        h=0;
    }
    setTimeout('loadImg5()',2000)
}
loadImg5();
let v=0
function loadImg6(){
    let arrayAdverFrirst=['https://cms-i.autodaily.vn/du-lieu/2022/04/18/si%C3%AAu%20xe/prop1290.jpg',
        'https://storage.googleapis.com/f1-cms/2020/08/d42cd691-20200826_092716.jpg',
        'http://icdn.dantri.com.vn/zoom/1200_630/oEj8Djn5XzGK0De5Uol4/Image/2013/07/Tuan1/lambo-2-317ea.jpg'
    ]
    document.querySelector('.six-adver__content-img').src= arrayAdverFrirst[v]
    v++
    if(v===arrayAdverFrirst.length){
        v=0;
    }
    setTimeout('loadImg6()',2000)
}
loadImg6();
//gioi thieu
   function introduce(){
       let result=''
       result+=`
           <div class="grid__full-width" style="background: #FDFCF0;margin: 0 5px;"> 
               <div style="min-height: 800px;margin-bottom: 20px"  class="introduce-content">
                    <div style="display: flex" class="img_introduce">
                           <img style="max-width: 50%" src="https://www.cgv.vn/media/wysiwyg/about-1.jpg">
                           <img style="max-width: 50%" src="https://www.cgv.vn//media/wysiwyg/about-3.PNG">                          
                     </div>
                    <p class="introduce-p first"><span>CJ CGV </span> la một trong top 5 cụm rạp chiếu phim lớn nhất toàn cầu và là nhà phát hành, cụm rạp chiếu phim lớn nhất Việt N
                        Mục tiêu của chúng tôi là trở thành hình mẫu công ty điển hình đóng góp cho 
                         sự phát triển không ngừng của ngành công nghiệp điện ảnh Việt Nam.
                     </p>
                    <p class="introduce-p">
                           <span>CJ CGV</span> đã tạo nên khái niệm độc đáo về việc chuyển đổi rạp chiếu phim truyền thống thành tổ hợp văn hóa <span>“Cultureplex”</span>, 
                           nơi khán giả không chỉ đến thưởng thức điện ảnh đa dạng thông qua các công nghệ tiên tiến như <span>SCREENX, IMAX, STARIUM, 4DX, 
                           Dolby Atmos,</span> cũng như thưởng thức ẩm thực hoàn toàn mới và khác biệt trong khi trải nghiệm dịch vụ chất lượng nhất tại <span>CGV.</span>
                     </p>
                    <p class="introduce-p">Thông qua những nỗ lực trong việc xây dựng <span>chương trình Nhà biên kịch tài năng, Dự án phim ngắn CJ, 
                             Lớp học làm phim TOTO, CGV ArtHouse</span> cùng việc tài trợ cho các hoạt động liên hoan phim lớn trong nước như Liên hoan Phim quốc tế Hà Nội,
                            <span>Liên hoan Phim Việt Nam, CJ CGV Việt Nam</span> mong muốn sẽ khám phá và hỗ trợ phát triển cho các nhà làm phim trẻ tài năng của Việt Nam. 
                    </p>
                     <p class="introduce-p">
                           <span>CJ CGV Việt Nam </span>cũng tập trung quan tâm đến đối tượng khán giả ở các khu vực không có điều kiện tiếp cận nhiều với điện ảnh,
                            bằng cách tạo cơ hội để họ có thể thưởng thức những bộ phim chất lượng cao thông qua các chương trình vì cộng đồng 
                           như <span>Trăng cười </span>và <span>Điện ảnh cho mọi người.</span>
                      </p>
                      <p class="introduce-p">
                          <span>CJ CGV Việt Nam</span> sẽ tiếp tục cuộc hành trình bền bỉ trong việc góp phần xây dựng một nền công nghiệp điện ảnh
                          Việt Nam ngày càng vững mạnh hơn cùng các khách hàng tiềm năng, 
                         các nhà làm phim, các đối tác kinh doanh uy tín, và cùng toàn thể xã hội.
                     </p>
                     <p class="introduce-p">
                        <span style="margin-bottom: 10px"> CÔNG TY TNHH CJ CGV VIETNAM</span> <br>
                        Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái,
                          P.14, Q.10, TPHCM.Hotline: 1900 6017COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .
                    </p>
               </div>
           </div>
       `
       document.getElementById('display').innerHTML=result;
   }
document.getElementById('introduce').onclick= function () {
    introduce();
}
// SAN PHAM
class ProductItem {
    id
    img
    nameTicket
    priceTicket
    dateShow
    priceTicketPromo

    constructor(id,img, nameTicket, dateShow, priceTicket, priceTicketPromo) {
        this.id=id
        this.img = img;
        this.nameTicket = nameTicket;
        this.dateShow = dateShow;
        this.priceTicket = priceTicket;
        this.priceTicketPromo = priceTicketPromo;
    }
}
    let productItem=[
        new ProductItem(1,'https://bphimmoi.net/wp-content/uploads/2021/12/ma-tran-hoi-sinh-58788-thumbnail.jpg',
            'Ma trận:hồi sinh', '30/4/2020', '138.000', '112.000'
        ),
        new ProductItem(2,'https://bphimmoi.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-58642-thumbnail-250x350.jpg',
            'NGười nhện :không còn xa nhà', '1/5/2020', '89.000', '76.000'
        ),
        new ProductItem(3,'https://bphimmoi.net/wp-content/uploads/2021/10/venom-2-doi-mat-tu-thu-54064-thumbnail.jpg',
            'VENOM 2 :đối măt tử thù', '27/4/2020', '112.000', '99.000'
        ),
        new ProductItem(4,'https://bphimmoi.net/wp-content/uploads/2022/04/ham-chua-64092-thumbnail-250x350.jpg',
            'Hầm chứa', '21/6/2020', '125.000', '106.000'
        ),
        new ProductItem(5,'https://bphimmoi.net/wp-content/uploads/2022/04/9-vien-dan-64090-thumbnail-250x350.jpg',
            '9 viên đạn', '16/5/2020', '98.000', '80.000'
        ),
        new ProductItem(6,'https://bphimmoi.net/wp-content/uploads/2022/04/quy-du-doi-lot-64102-thumbnail-250x350.jpg',
            'Quỷ dữ đột lốt', '9/5/2020', '147.000', '132.000'
        ),
        new ProductItem(7,'https://bphimmoi.net/wp-content/uploads/2022/04/cuoc-phuc-kich-63951-thumbnail-250x350.jpg',
            'Cuộc phục kích', '9/5/2020', '92.000', '83.000'
        ),
        new ProductItem(8,'https://bphimmoi.net/wp-content/uploads/2022/04/duong-ve-2020-63303-thumbnail-250x350.jpg',
            'Đường về 2020', '2/5/2020', '136.000', '113.000'
        ),
        new ProductItem(9,'https://bphimmoi.net/wp-content/uploads/2022/04/khong-quay-dau-64100-thumbnail-250x350.jpg',
            'Không quay đầu','5/5/2020','127.000','116.000'),
        new ProductItem(10,'https://bphimmoi.net/wp-content/uploads/2022/04/morbius-63298-thumbnail-250x350.jpg',
            'Morbius','8/5/2022','120.000','108.000')
    ]
localStorage.setItem('productItem',JSON.stringify(productItem))
function displayProduct() {
    let result = ''
    for (let i = 0; i < 10; i++) {
        result += ` <div class="grid_colum_2-10">
                       <div class="product-item">
                           <div class="product-item--content">
                           <img width="100%" src="${productItem[i].img}"> 
                           <div class="ticket-item-content">
                               <h3 class="ticket-item--title">${productItem[i].nameTicket}</h3>
                                <span>Ngày khởi chiếu:</span>
                                <p class="ticket-item--dateShow">${productItem[i].dateShow}</p>
                                <div class="ticket-item-price">
                                    <span>Price : </span>
                                   <p class="ticket-item--price-translate">${productItem[i].priceTicket}</p>
                                    -
                                   <p class="ticket-item--pricePromo">${productItem[i].priceTicketPromo}</p>
                                </div>
                                <div class="ticket-item-content_footer">
                                     <button onclick="buyTicket(${i})" class="ticket-item-content--btn">Mua ngay</button>
                                      <a href="javascript:void(0);" class="ticket-item-content--link">Xem thêm</a>
                                 </div>
                            </div>
                           </div>
                       </div>
                    </div>`
    }
    document.getElementById("display").innerHTML = result;
}
displayProduct();
let btnNewFilmNav = document.getElementById('nav-product--btn-newFilm')
btnNewFilmNav.onclick= function (){
    displayProduct();
}
let newArray = [];
function buyTicket(index){
    let date =new Date();
    let result=''
    result += ` <div class="grid_colum_2-10">
                       <div class="product-item">
                           <div class="product-item--content">
                           <img width="100%" src="${productItem[index].img}"> 
                           <div class="ticket-item-content" >
                               <h3 class="ticket-item--title" style="height: 26px">${productItem[index].nameTicket}</h3>
                                <span>Ngày khởi chiếu:</span>
                                <p class="ticket-item--dateShow">${productItem[index].dateShow}</p>
                                <div class="ticket-item-price">
                                    <span>Price : </span>
                                   <p class="ticket-item--price-translate">${productItem[index].priceTicket}</p>
                                    -
                                   <p class="ticket-item--pricePromo">${productItem[index].priceTicketPromo}</p>
                                </div>
                                <i class="time_selct" style="color: chartreuse;font-size: 12px">Giờ mua: ${date.getHours()}h/${date.getMinutes()}p</i>
                                <br>
                                <i class="date_select"style="font-size: 12px;color: aqua;" >Ngày mua: ${date.getDay()+1}/${date.getMonth()+1}/${date.getFullYear()}</i>
                                <div class="ticket-item-content_footer" style="display: flex">                                  
                                    <button style="padding: 3px;margin-top: 3px;background: cornsilk;border: none;margin-bottom: 5px;" onclick="displayModalService(${index})">Chọn dịch vụ</button>                           
                                    <button style="padding: 3px 8px;color:red;margin-right:8px;margin-top: 3px;background: aqua;border: none;margin-bottom: 5px;" onclick="itemProductHistoryDelete(${index})">Xóa</button> 
                                 </div>
                            </div>
                           </div>
                       </div>
                    </div>`
    newArray.push(result)
    // localStorage.setItem('newArray',JSON.stringify(newArray));
}
let historyBuyTicket= document.getElementById('history-buyTicket');
historyBuyTicket.onclick=function (){
    // newArray = JSON.parse(localStorage.getItem("newArray"))
    document.getElementById("display").innerHTML = newArray.join(' ')
}
function itemProductHistoryDelete(v){
    console.log(newArray[v])
    newArray.splice(newArray.indexOf(newArray[v]),1);
   document.getElementById("display").innerHTML = newArray.join(' ')
    // buyTicket()
    // newArray = JSON.parse(localStorage.getItem("newArray"))
}
// Modal Service
let closeModalService = document.getElementById('modal_bodyService--close')
let modalService = document.getElementById('modalService')
function displayModalService (k){
    console.log('hello')
   let result =''
      result +=`<button onclick="displayMessageDialog(${k});modalServiceTurnOff()" id="form-service--btn--confirm" >Xác nhận</button>
                <button onclick="formServiceTotalMoney(${k})" id="form-service--btn--save">Lưu</button>
              `
          document.getElementById('btnSaveFormService').innerHTML=result
          modalService.style.display='flex'
}
closeModalService.onclick = function (){
    modalService.style.display='none'
}
let rowOfSeatsModal = document.getElementById('rowOfSeatsModal');
let SeatsModal = document.getElementById('SeatsModal')
let ticketNumberModal= document.getElementById('ticketNumberModal')
let formServiceSelect=document.getElementById('formServiceSelect');
let totalMoneyNumber = document.getElementById('totalMoneyNumber')
let totalMoneyNumberAfter= document.getElementById('totalMoneyNumberAfter')
class FormService {
    rowOfSeats
    Seats
    ticketNumber
    comboEat

    constructor(rowOfSeats, Seats, ticketNumber, comboEat) {
        this.rowOfSeats = rowOfSeats
        this.Seats = Seats
        this.ticketNumber = ticketNumber
        this.comboEat = comboEat
    }
}
 let totalMoney ;
  function formServiceTotalMoney(x) {
      let formService = new FormService(rowOfSeatsModal.value, SeatsModal.value, ticketNumberModal.value, formServiceSelect.value)
      let regRowOfSeatsVip = /[A-C]/;
      let regRowOfSeats=/[D-I]/;
      if (regRowOfSeatsVip.test(formService.rowOfSeats)) {
          if (formService.comboEat==1) {
              totalMoney = 30000 + Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 189000
          } else if (formService.comboEat==2) {
              totalMoney = 30000 + Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 99000
          } else if (formService.comboEat==3) {
              totalMoney = 30000 + Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 39000

          } else if (formService.comboEat==4) {
              totalMoney = 30000 + Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 32000
          }

      }
      else if(regRowOfSeats.test(formService.rowOfSeats)){
          if(formService.comboEat==1) {
              totalMoney = Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 189000
          } else if (formService.comboEat==2) {
              totalMoney =Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 99000
          } else if (formService.comboEat==3) {
              totalMoney = Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 39000

          } else if (formService.comboEat==4) {
              totalMoney = Number(productItem[x].priceTicketPromo) * Number(formService.ticketNumber) * 1000 + 32000
          }
      }
      totalMoneyNumber.innerHTML = totalMoney;
      if (displayAccountUser.innerHTML === ``) {
          totalMoneyNumberAfter.innerHTML = totalMoney
      } else {
          totalMoney = totalMoney - (5 / 100) * totalMoney
          totalMoneyNumberAfter.innerHTML = totalMoney
      }
  }
  let newArray2 = [];
  function displayMessageDialog(m){
      let result =``
      result+=`
           <div class="MessageDialogList">
            <div class="MessageDialog-itemContent">
                <div class="img_MessageDialog">
                   <img src="${productItem[m].img}" alt="" class="img_MessageDialog--img">
                </div>
                <div class="MessageDialog-itemInfor">
                     <h3 class="MessageDialog-itemInfor--title">${productItem[m].nameTicket}</h3>
                     <div class="MessageDialog-itemInfor-sub1">
                          <p class="MessageDialog-itemInfor-sub-quantity">Số lượng: ${ticketNumberModal.value} vé</p>
                          <p class="MessageDialog-itemInfor-sub-price">Giá: ${totalMoneyNumberAfter.innerHTML}</p>
                     </div>
                     <div class="MessageDialog-itemInfor-sub2">
                          <p class="MessageDialog-itemInfor-sub-date">Show date: ${productItem[m].dateShow}</p>
                          <i onclick="headerItemNotifiDelete(${m})" class="MessageDialog-itemInfor-delete">Xóa</i>
                     </div>                 
                </div>
             </div>                       
           </div>`
          newArray2.unshift(result)
      // let a = newArray2.length
      // document.getElementById('notify').style.color='red'
      document.getElementById('notify-bell-icon').style.color='red'
      document.getElementById('notifyQuantity').innerHTML=newArray2.length;
  }
//  thong bao
let headerItemNotifi= document.getElementById('notify');
let temp=1;
headerItemNotifi.onclick= function (){
       if(temp===1){
           document.getElementById('header_messageDialog').style.display= 'block'
           document.getElementById('header_messageDialog--content').innerHTML=newArray2.join(' ')
           document.getElementById('notify-bell-icon').style.color= '#cccccc'
           document.getElementById('notifyQuantity').innerHTML=' '
           temp=2;
       }
       else if(temp===2){
           document.getElementById('header_messageDialog').style.display= 'none'
           temp=1
       }
}
 function modalServiceTurnOff(){
    modalService.style.display='none';
}
 function headerItemNotifiDelete(n){
      newArray2.splice(newArray2.indexOf(n),1)
     document.getElementById('header_messageDialog--content').innerHTML=newArray2.join(' ')
 }
