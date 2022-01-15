//import * as ActionType from "./action-type";


//action 장바구니 리스트 && 수정/삭제
export const CART_ASYNC_GETLIST = 'cart-async-getlist';
export const CART_ASYNC_ITEMUPDATE = 'cart-async-update';
export const CART_ASYNC_DELETE = 'directmsg-async-delete';

//action 구매내역 리스트 
export const BUYLIST_ASYNC_GETLIST = 'buylist-async-getlist';

//action 배송지관리
export const ADDRESS_ASYNC_GETLIST = 'address-async-getlist';
export const ADDRESS_ASYNC_ITEMUPDATE = 'address-async-update';

//action 1대1문의 리스트&& 수정/삭제
export const DIRECTMSG_ASYNC_GETLIST = 'directmsg-async-getlist';
export const DIRECTMSG_ASYNC_ITEMUPDATE = 'directmsg-async-update';
export const DIRECTMSG_ASYNC_DELETE = 'directmsg-async-delete';

//action 비번변경 || 비번찾기
export const PASSWORD_ASYNC_ITEMUPDATE = 'password-async-update';

//action 결제정보 수정
export const PAYINFO_ASYNC_ITEMUPDATE = 'payinfo-async-update';
//action 탈퇴
export const SECESSION_ASYNC_ITEMUPDATE = 'seccession-async-update';


export const ASYNCINCREASE = "async-increase";


export const ASYNC_REQUEST = 'async request';
export const ASYNC_RESPONSE = 'async response';



const InitializeState = {
    message : "app init",
}

export function reducer(state = InitializeState, action){

    switch(action.type){
        case ActionType.CART_ASYNC_GETLIST:
            return {...state, list: list};
        case ActionType.CART_ASYNC_ITEMUPDATE:
            return{...state, item: item};
        case ActionType.CART_ASYNC_DELETE:
            return {...state, request: true};
                
        case ActionType.DIRECTMSG_ASYNC_GETLIST:
            return {...state, list: list};
        case ActionType.DIRECTMSG_ASYNC_ITEMUPDATE:
            return{...state, item: item};
        case ActionType.DIRECTMSG_ASYNC_DELETE:
            return {...state, request: true};
                
        case ActionType.BUYLIST_ASYNC_GETLIST:
            return {...state, request: true};
                    
        case ActionType.PASSWORD_ASYNC_ITEMUPDATE:
            return {...state, request: true};
                    
        case ActionType.PAYINFO_ASYNC_ITEMUPDATE:
            return {...state, request: true};
                    
        case ActionType.SECESSION_ASYNC_ITEMUPDATE:
            return {...state, request: true};
                    
                    
        case ActionType.ADDRESS_ASYNC_GETLIST:
            return {...state, list: list};
        case ActionType.ADDRESS_ASYNC_ITEMUPDATE:
            return{...state, item: item};


        case ActionType.ASYNC_REQUEST:
            return {...state, request: true};
        case ActionType.ASYNC_RESPONSE:
            return {...state, request: false};
        
        default:
             return {...state}
    }
}
