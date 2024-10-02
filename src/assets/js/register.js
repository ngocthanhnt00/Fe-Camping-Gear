

// const users = JSON.parse(localStorage.getItem('users')) || [];
// const setUsers = () => {
//     return localStorage.setItem('users', JSON.stringify(users));
// }
// function registerUser() {
//     event.preventDefault();
//     // Lấy dữ liệu từ form
//     let lastname = document.getElementById("lastname").value;
//     let firstname = document.getElementById("firstname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     // Tạo đối tượng user
//     let newUser = {
//       lastname: lastname,
//       firstname: firstname,
//       email: email,
//       password: password,
//       isAuthenticated: false,
//       isAdmin: false,
//     };
//     if(users.length > 0) {
//         console.log("Lot vao day")
//         for (let i = 0; i < users.length; i++) {
//             if(users[i].email === newUser.email) {
//                 alert(`Email ${newUser.email} đã được đăng ký`);
//                 return
//             }
//         }
//     }
//         users.push(newUser)
//         setUsers()
//         // Đưa ra thông báo cho người dùng biết đã đăng kí thành công
//         alert("Đăng ký tài khoản thành công");
//         window.location.href = "/asset/src/login.html";

//         console.log(users)
//     // Thêm user mới vào mảng

//     // Hiển thị danh sách user
//     // displayUsers();
//   }

// //   function displayUsers() {
// //     let userList = document.getElementById("user-list");
// //     userList.innerHTML = "";

// //     for (let i = 0; i < users.length; i++) {
// //       let userElement = document.createElement("div");
// //       userElement.textContent = `Họ: ${users[i].lastname}, Tên: ${users[i].firstname}, Email: ${users[i].email}`;
// //       userList.appendChild(userElement);
// //     }
// //   }

// // export {users, registerUser};



// -----------------------------------


const users = JSON.parse(localStorage.getItem('users')) || [];
const setUsers = () => {
    return localStorage.setItem('users', JSON.stringify(users));
}

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

async function registerUser() {
    event.preventDefault();
    // Lấy dữ liệu từ form
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let avatar = document.getElementById("avatar").files[0];
    var termsCheckbox = document.getElementById('termsCheckbox').checked;

    if (lastname === "" || firstname === "" || email === "" || password === "" || !avatar) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Nhập đúng định dạng email.');
        return;
    }
    // Password validation
    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 kí tự.');
        return;
    }

    // Terms and Privacy Policy validation
    if (!termsCheckbox) {
        alert('You must agree to the Terms and Privacy Policy.');
        return;
    }

    try {
        // Tạo tk bằng cách kết nối firebase và gọi hàm tạo
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // Lay thong tin
        const user = userCredential.user;
        // Luu cau hinh vao storage
        const storageRef = firebase.storage().ref('user_avatars/' + user.uid + '/' + avatar.name);
        // Dua du lieu hinh vao
        const snapshot = await storageRef.put(avatar);
        // Lay link avatar
        const downloadUrl = await snapshot.ref.getDownloadURL();
        // Luu thong tin vao realtime db
        await firebase.database().ref('users/' + user.uid).set({
            displayName: firstname,
            photoURL: downloadUrl
        });

        alert('Đăng kí thành công');
        window.location.href = "login.html";
    } catch (error) {
        alert(`Đã xảy ra lỗi: ${error.message}`);
    }
};
