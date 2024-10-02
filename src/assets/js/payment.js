const arrayProduct = JSON.parse(localStorage.getItem("product")) || [];
const pageCheckOut = document.querySelector(".pagecheckout");
console.log(pageCheckOut, "SSS")
const total = arrayProduct.reduce((acc, curr) => acc += curr.total, 0)
const div = document.createElement("div");
div.innerHTML = `  <table cellpadding="0" cellspacing="0" cols="1" bgcolor="#d7d7d7" align="center" style="max-width: 600px;">
<tr bgcolor="#d7d7d7">
    <td height="50"
        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
    </td>
</tr>

<!-- This encapsulation is required to ensure correct rendering on Windows 10 Mail app. -->
<tr bgcolor="#d7d7d7">
    <td
        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
        <!-- Seperator Start -->
        <table cellpadding="0" cellspacing="0" cols="1" bgcolor="#d7d7d7" align="center"
            style="max-width: 600px; width: 100%;">
            <tr bgcolor="#d7d7d7">
                <td height="30"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
        </table>
        <!-- Seperator End -->

        <!-- Generic Pod Left Aligned with Price breakdown Start -->
        <table align="center" cellpadding="0" cellspacing="0" cols="3" bgcolor="white"
            class="bordered-left-right"
            style="border-left: 10px solid #d7d7d7; border-right: 10px solid #d7d7d7; max-width: 600px; width: 100%;">
            <tr height="50">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr align="center">
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td class="text-primary"
                    style="color: #F16522; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                    <img src="http://dgtlmrktng.s3.amazonaws.com/go/emails/generic-email-template/tick.png"
                        alt="GO" width="50"
                        style="border: 0; font-size: 0; margin: 0; max-width: 100%; padding: 0;">
                </td>
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr height="17">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr align="center">
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td class="text-primary"
                    style="color: #F16522; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                    <h1
                        style="color: #F16522; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 30px; font-weight: 700; line-height: 34px; margin-bottom: 0; margin-top: 0;">
                        Payment received</h1>
                </td>
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr height="30">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr align="left">
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                        Hi [Thanh],
                    </p>
                </td>
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr height="10">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr align="left">
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                        Your transaction was successful!</p>
                    <br>


                    <p
                        style="color: #464646; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0; ">
                        <strong>Payment Details:</strong><br />

                        Amount: <br />
                        Account: ${total.toLocaleString()}đ.<br />
                    </p>


                    <br>
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                        We advise to keep this email for future reference.&nbsp;&nbsp;&nbsp;&nbsp;<br /></p>
                </td>
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr height="30">
                <td
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td
                    style="border-bottom: 1px solid #D3D1D1; color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr height="30">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
            <tr align="center">
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
                <td
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                        <strong>Transaction reference: dsa</strong>
                    </p>
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                        Order date: [time] [date]</p>
                    <p
                        style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 22px; margin: 0;">
                    </p>
                </td>
                <td width="36"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>

            <tr height="50">
                <td colspan="3"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>

        </table>
        <!-- Generic Pod Left Aligned with Price breakdown End -->

        <!-- Seperator Start -->
        <table cellpadding="0" cellspacing="0" cols="1" bgcolor="#d7d7d7" align="center"
            style="max-width: 600px; width: 100%;">
            <tr bgcolor="#d7d7d7">
                <td height="50"
                    style="color: #464646; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 16px; vertical-align: top;">
                </td>
            </tr>
        </table>
        <!-- Seperator End -->

    </td>
</tr>
</table>`
pageCheckOut.prepend(div)