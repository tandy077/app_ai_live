import request from '@/utils/request'

const userApi = {
    Login: '/customer/userus/login',
    Logout: '/customer/basic/logout',
    ForgePassword: '/auth/forge-password',
    ChangePassword: '/customer/userus/changepasswordus',
    Register: '/auth/register',
    twoStepCode: '/auth/2step-code',
    SendSms: '/account/sms',
    SendSmsErr: '/account/sms_err',
    // get my info
    UserInfo: '/customer/basic/gettauserinfo',
    UpdateUserInfo: '/customer/basic/updateuserinfo',
    UpdateLanguage: '/customer/basic/updatelang',
    UpdateUserImg: '/customer/basic/UpdateUserImg',
    UserMenu: '/user/nav'
}

export default userApi

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
    return request({
        url: userApi.Login,
        method: 'post',
        data: parameter
    })
}
//修改密码
export function changePassword(parameter) {
    return request({
        url: userApi.ChangePassword,
        method: 'post',
        data: parameter
    })
}
export function getSmsCaptcha(parameter) {
    return request({
        url: userApi.SendSms,
        method: 'post',
        data: parameter
    })
}
//获取当前登录用户信息
export function getInfo() {
    return request({
        url: userApi.UserInfo,
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}
//更新用户信息
export function updateUserInfo(parameter) {
    return request({
        url: userApi.UpdateUserInfo,
        method: 'post',
        data: parameter
    })
}
//更新语言
export function UpdateLanguage(parameter) {
    return request({
        url: userApi.UpdateLanguage,
        method: 'post',
        data: parameter
    })
}

export function UpdateUserImg(parameter) {
    return request({
        url: userApi.UpdateUserImg,
        method: 'post',
        data: parameter
    })
}
export function getCurrentUserNav() {
    return request({
        url: userApi.UserMenu,
        method: 'get'
    })
}
//退出登录
export function logout() {
    return request({
        url: userApi.Logout,
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
    return request({
        url: userApi.twoStepCode,
        method: 'post',
        data: parameter
    })
}
