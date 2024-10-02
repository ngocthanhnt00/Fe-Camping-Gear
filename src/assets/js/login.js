// // const accounts = JSON.parse(localStorage.getItem("users")) || [];
// // Refill infor input of user

// const email = document.querySelector(".email input");
// const password = document.querySelector(".password input");
// const finalAccount = accounts[accounts.length - 1];
// console.log(finalAccount, "Sssss")
// if (email && password) {
//     email.value = finalAccount.email;
//     password.value = finalAccount.password;
// }
// const btnLogin = document.querySelector(".button");
// console.log(btnLogin, "btn")
// btnLogin.onclick = (e) => {
//     e.preventDefault();
//     let isAuthenticated = false;

//     accounts.forEach((account) => {
//         if (account.email === email.value && account.password === password.value) {
//             isAuthenticated = true;
//             account.isAuthenticated = true;
//             localStorage.setItem("users", JSON.stringify(accounts))
//         }
//     });


//     if (isAuthenticated) {
//         window.location.href = "/asset/index.html";
//     } else {
//         alert("Thong tin dang nhap khong dung");
//     }
// };

// Đăng nhập
const firebaseConfig = {
    apiKey: "AIzaSyBi5IXV99Oy2t9VWm1_LBM08LzCAKuF8xs",
    authDomain: "authentication-5fb83.firebaseapp.com",
    databaseURL: "https://authentication-5fb83-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authentication-5fb83",
    storageBucket: "authentication-5fb83.appspot.com",
    messagingSenderId: "213389827547",
    appId: "1:213389827547:web:4080a05bc47143783d1bfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const login = async () => {
    // event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const snapshot = await firebase.database().ref('users/' + user.uid).once('value');
        const userData = snapshot.val();
        localStorage.setItem('user', JSON.stringify(userData));
        alert(`${user.email} Đăng nhập thành công`);
        if (user.email === 'admin@gmail.com') {
            window.location.href = "/asset/admin/html/index.html";
        } else {
            alert("Login thanh cong")
            window.location.href = "../index.html";
        }
    } catch (error) {
        alert(`Đăng nhập thất bại: ${error.message}`);
    }
};