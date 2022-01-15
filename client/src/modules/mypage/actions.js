import * as ActionType from "./action-type.js";

export const getCartlist = ()=> ({ type: ActionType.CART_ASYNC_GETLIST})
export const CartUpdate = ()=> ({ type: ActionType.CART_ASYNC_ITEMUPDATE})
export const CartDelete = ()=> ({ type: ActionType.CART_ASYNC_DELETE})


export const getDMlist = ()=> ({ type: ActionType.DIRECTMSG_ASYNC_GETLIST})
export const DMUpdate = ()=> ({ type: ActionType.DIRECTMSG_ASYNC_ITEMUPDATE})
export const DMDelete = ()=> ({ type: ActionType.DIRECTMSG_ASYNC_DELETE})


export const getAddress = ()=> ({ type: ActionType.ADDRESS_ASYNC_GETLIST})
export const addrUpdate = ()=> ({ type: ActionType.ADDRESS_ASYNC_ITEMUPDATE})



export const PasswordChange = ()=> ({ type: ActionType.PASSWORD_ASYNC_ITEMUPDATE})

export const PayinfoUpdate = ()=> ({ type: ActionType.PAYINFO_ASYNC_ITEMUPDATE})

export const Seccession = ()=> ({ type: ActionType.SECESSION_ASYNC_OUT})