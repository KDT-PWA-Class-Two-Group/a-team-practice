const students = [
    { name: "이순신", age: 23 },
    { name: "세종대왕", age: 25 },
    { name: "유관순", age: 22 }
  ];
  
  // 동기 처리 함수들
  function first() {
    console.log("첫 번째 작업 시작");
    console.log("첫 번째 작업 완료");
  }
  
  function second() {
    console.log("두 번째 작업 시작");
    console.log("두 번째 작업 완료");
  }
  
  function third() {
    console.log("세 번째 작업 시작");
    console.log("세 번째 작업 완료");
  }
  
  // 동기 실행
  function runSync() {
    console.log(" 동기 실행-");
    first();
    second();
    third();
    console.log("모든 작업 끝!");
  }
  
  // 비동기 처리 함수들 (setTimeout 사용)
  function firstAsync() {
    console.log("첫 번째 작업 시작");
    setTimeout(() => {
      console.log("첫 번째 작업 완료");
    }, 2000);
  }
  
  function secondAsync() {
    console.log("두 번째 작업 시작");
    setTimeout(() => {
      console.log("두 번째 작업 완료");
    }, 1000);
  }
  
  function thirdAsync() {
    console.log("세 번째 작업 시작");
    setTimeout(() => {
      console.log("세 번째 작업 완료");
    }, 3000);
  }
  
  // 비동기 실행
  function runAsync() {
    console.log(" 비동기 실행-");
    firstAsync();
    secondAsync();
    thirdAsync();
    console.log("모든 작업 시작됨!");
  }
  
  // 콜백을 사용한 순차 실행
  function firstWithCallback(callback) {
    console.log("첫 번째 작업 시작");
    setTimeout(() => {
      console.log("첫 번째 작업 완료");
      callback();
    }, 2000);
  }
  
  function secondWithCallback(callback) {
    console.log("두 번째 작업 시작");
    setTimeout(() => {
      console.log("두 번째 작업 완료");
      callback();
    }, 1000);
  }
  
  function thirdWithCallback(callback) {
    console.log("세 번째 작업 시작");
    setTimeout(() => {
      console.log("세 번째 작업 완료");
      callback();
    }, 3000);
  }
  
  // 콜백으로 순차 실행
  function runWithCallback() {
    console.log(" 콜백으로 순차 실행-");
    firstWithCallback(() => {
      secondWithCallback(() => {
        thirdWithCallback(() => {
          console.log("모든 작업 완료!");
        });
      });
    });
  }
  
  // 학생 데이터 처리 예제
  function processStudent(student, callback) {
    console.log(`${student.name} 처리 시작`);
    setTimeout(() => {
      console.log(`${student.name} 처리 완료 (나이: ${student.age})`);
      callback();
    }, 1000);
  }
  
  function processAllStudents() {
    console.log("학생 데이터 처리-");
    
    processStudent(students[0], () => {
      processStudent(students[1], () => {
        processStudent(students[2], () => {
          console.log("모든 학생 처리 완료!");
        });
      });
    });
  }
  
  // 실험용 함수들
  console.log("비동기 처리 실험을 시작합니다!");
  
//   console.log("1. runSync() - 동기 실행");
//   console.log("2. runAsync() - 비동기 실행");  
//   console.log("3. runWithCallback() - 콜백으로 순차 실행");
  console.log("4. processAllStudents() - 학생 데이터 처리");
//   console.log("각 함수를 실행해보고 결과를 비교해보세요!");
  
  // 예시 실행 (주석을 해제하고 하나씩 실험해보세요)
//   runSync();
//   runAsync();
//   runWithCallback();
  processAllStudents();