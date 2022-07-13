import { DeptVO } from "./DeptVO";
// ES6에서 지원하는 import문
// NodeJS에서 지원하는 require('express') - CommonJS

const myDVO = new DeptVO(50, '개발부', '부산');
console.log(myDVO.dname);
console.log(myDVO.loc);
console.log(myDVO.deptno);