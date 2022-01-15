import React, { useEffect} from "react"; 
const Payment = (effect, deps) => { useEffect(() => 
    { const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"; 
    const iamport = document.createElement("script"); 
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
        document.head.removeChild(jquery);
        document.head.removeChild(iamport);
    }
},[]); 

    // const onClickPayment = () => { 
    //     const { IMP } = window;
    //     IMP.init("imp31715307");
    //     //결제 데이터 정의
    //     const data = 
    //     { pg: "html_inicis",
    //       pay_method: "card",
    //       merchant_uid:`mid_${new Date().getTime()}`,
    //       name: "변정현",
    //       amount: "100",
    //       custom_data: {
    //           name: "부가정보",
    //           desc: "세부 부가정보"
    //       },
    //       buyer_name: "변정현",
    //       buyer_tel: "01065512902",
    //       buyer_email: "wjdgus2903@naver.com",
    //       buyer_addr: "강동구 천호",
    //       buyer_postalcode: "05258"
    // };

    // IMP.request_pay(data,callback);
    // }
    // const callback = (response) => {
    //     const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
    //     if (success) { alert('결제 성공');}
    //     else { alert(`결제 실패 : ${error_msg}`);}
    // }

    // return( 
    //     <>
    //     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    //     <button onClick={onClickPayment}>결제하기</button>
    //     </>
    // );
}

export default Payment;