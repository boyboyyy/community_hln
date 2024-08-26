/*
 * @Author: tianleiyu 
 * @Date: 2024-04-22 16:37:55
 * @LastEditTime: 2024-05-09 14:06:47
 * @LastEditors: tianleiyu
 * @Description: 
 * @FilePath: /organization1/src/model/userData.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export interface ResponseData {
    code: string
    message: string
}

export interface IUserLogin {
    username: string,
    passwd: string,
}
//用户数据接口的传递参数ts类型
export interface userData {
    id: number
    token: string
}
//用户数据接口的返回参数ts类型
export interface userResponseData extends ResponseData {
    data: user
}
export interface loginResponseData extends ResponseData {
    data: {
        token: string,
        user: user
    }
}
export interface user {
    college: number
    grade: string
    id: number
    loginTime: string
    name: string
    professional: string
    role: number
    studentId: string
    username: string
}
//注册的ts类型接口
export interface IUserRegister {
    username: string,
    passwd: string,
    regType: string,
    studentId: string,
    confirmPassword: string

}