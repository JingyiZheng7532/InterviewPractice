// 1. 手写call
Function.prototype.myCall = function (context, ...args) {
  // 如果没传默认指向window
  context = context || window;

  // 给context创建一个唯一的属性，把当前函数(this)挂载上去
  // 使用Symbol 是为了防止覆盖对象原本的属性

  const fnKey = Symbol();
  context[fnKey] = this;

  // 执行函数并获取结果
  // 在JS中obj.fn()和obj['fn']是完全等价的
  const result = context[fnKey](...args);
  // 这一步发生两件事： 1=> 寻找函数：去context对象里找到刚才存进去的那个函数
  //                 2=> 触发绑定：因为是通过 context.xxx() 的形式调用的，浏览器会自动把该函数内部的 this 绑定到 context 上

  // 关于这部分 本来my是挂载在Function的prototype上
  // 如果直接运行this(...args)， this是函数本身 如果没有调用者会指向undefind或者全局
  // context[fnKey] = this; 把函数塞进context里

  // 删掉临时属性
  delete context[fnKey];
  return result;
};

// 2. 手写Apply
Function.prototype.myApply = function (context, argsArray) {
  context = context || window;
  const fnKey = Symbol();
  context[fnKey] = this;

  let result;
  if (!argsArray) {
    result = context[fnKey]();
  } else {
    result = context[fnKey](...Array.from(argsArray));
  }

  delete context[fnKey];
  return result;
};

// 3. 手写bind
Function.prototype.myBind = function (context, ...args1) {
  const _this = this; //保存原函数

  return function (...args2) {
    return _this.apply(context, [...args1, ...args2]);
  };
};

// 不套用apply
Function.prototype.myBind1 = function (context, ...args1) {
  const _this = this;
  context = context || window;

  return function (...args2) {
    const fnKey = Symbol();
    context[fnKey] = _this;
    const result = context[fnKey](...args1, ...args2);
    delete context[fnKey];
    return result;
  };
};
