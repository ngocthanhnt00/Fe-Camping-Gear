function formatNumber(number) {
    const convertNum = parseFloat(number)
    const formattedNumber = new Intl.NumberFormat("vi-VN", {
        useGrouping: true, // Tính năng phân nhóm ở hàng nghìn
        minimumFractionDigits: 0, // 
        // => Chỉ hiển thị phần nguyên, không có chữ số thập phân
        maximumFractionDigits: 0, //
    }).format(convertNum)
    return formattedNumber;
}
// console.log(formatNumber(12000000))
export { formatNumber }