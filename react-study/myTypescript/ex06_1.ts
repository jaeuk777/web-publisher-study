export interface IEmp {
    empno : number;
    ename : string;
    salary:number;
}
// 회사 인터페이스를 구현하고 export 하세요
export interface ICompany {
    name : string;
    year : number;
    tel? : string;
}