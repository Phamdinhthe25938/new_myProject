let userNameSignUp = document.getElementById('signUp-form-userName--input')
let passwordSignUp= document.getElementById('signUp-form-pass--input')
let passwordAgainSignUp = document.getElementById('signUp-form-passAgain--input')
let emailSignUp = document.getElementById('signUp-form-email--input');
let telephoneSignUp = document.getElementById('signUp-form-number--input')
class SignUp {
    userName
    password
    passwordAgain
    email
    telephone
    constructor(userName,password,passwordAgain,email,telephone) {
        this.userName=userName;
        this.password=password;
        this.passwordAgain= passwordAgain;
        this.email=email;
        this.telephone=telephone;
    }
    checkUserName(){
        if(this.userName.length>=8 && (this.userName[0]===this.userName[0].toUpperCase())){
            return true
        }
        return false
    }
    checkPassword(){
        let valuePassword = this.password;
        let regExpWeak = /[A-Z]/;
        let regNumber = /[0-9]/
        let regExpMedium = /\d+/;
        let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
        if(valuePassword.length>=8 && regExpWeak.test(valuePassword) && regExpMedium.test(valuePassword) && regExpStrong.test(valuePassword) && regNumber.test((valuePassword))){
            return true;
        }
        return false
    }
    checkPasswordAgain(){
        if(this.password===this.passwordAgain){
            return true
        }
        return false
    }
    checkEmail(){
        let regEmail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
        if(regEmail.test(this.email)){
            return true;
        }
        return false
    }
    checkTelephone(){
        // let regNumber = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/
        let regNumber= /[0-9]/
        if(regNumber.test(this.telephone) && this.telephone[0]==0 && this.telephone.length<=11 && this.telephone.length>=10){
            return true
        }
            return false
    }
}
let signUpBtnSign = document.getElementById('signUp-form-btn-sign');
let displayAccountUser = document.getElementById('display_account-user')
signUpBtnSign.onclick= function checkFormSignUp(){
    let signUpMan= document.getElementById('signUpMan');
    let signUpWomen= document.getElementById('signUpWomen')
    let signUp = new SignUp(userNameSignUp.value,passwordSignUp.value,passwordAgainSignUp.value,emailSignUp.value,telephoneSignUp.value)
    if(signUp.checkUserName() && signUp.checkPassword()
        && signUp.checkPasswordAgain() && signUp.checkEmail()
        && signUp.checkTelephone()
        && (signUpMan.checked===true || signUpWomen.checked===true)){
        modal.style.display='none'
        displayAccountUser.innerHTML=
            `<img style="width: 22px;height: 22px;border-radius: 50%;margin: 0 3px" src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg">`+signUp.userName
        signUp.userName=' '
        signUp.password=' '
        signUp.passwordAgain=' '
        signUp.email=' '
        signUp.telephone=' '
    }
    else{
        if(signUp.checkUserName()===false){
            alert('Ki???m tra l???i userName(ch??? c??i ?????u c???n vi???t hoa)!')
        }
        else if(signUp.checkPassword()===false){
            alert('M???t kh???u nh???p ch??a ch??nh x??c( m???t kh???u g???m 1 ch??? in hoa,1 k?? t??? ?????c bi???t,v?? 1 ch??? s???)')
        }
        else if(signUp.checkPasswordAgain()===false){
            alert('M???t kh???u b???n nh???p l???i ch??a ch??nh x??c vui l??ng ki???m tra l???i')
        }
        else if(signUp.checkEmail()===false){
            alert('Email b???n nh???p ch??a ch??nh x??c vui l??ng ki???m tra l???i')
        }
        else if(signUp.checkTelephone()===false){
            alert('S??? ??i???n tho???i b???n nh???p ch??a ch??nh x??c vui l??ng ki???m tra l???i')
        }
        else{
            alert('B???n c???n ??i???n check gi??i t??nh tr?????c khi ????ng k??!')
        }
    }
}
