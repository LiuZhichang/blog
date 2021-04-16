---
uuid: 97103770-9cb8-11eb-b444-81b7cca9a945
tags:
  - 实用
  - 操作系统
categories:
  - 后端 
author: Scope
title: x86通用寄存器
abbrlink: 51299
date: 2021-04-12 18:45:00
sticky: 100
aplayer: true
---

> Regesiter 通用寄存器

```Tex
// Register
%rax return value - caller saved
%rbx			  - callee saved
// 保存函数参数
%rcx Argument 4   - caller saved
%rdx Argument 3	  - caller saved
%rsi Argumnet 2   - caller saved
%rdi Argument 1 -   caller saved

%rbp
%rsp

```
#### 1. x86 下的基本通用寄存器: e前缀 


```Tex
// 32位下的长度是双字的 

%eax // 用来存储结果

%ebx // 通用寄存器，可以根据需要存储任何数据

%ecx // 用来存储第四个参数

%edx // 用来存储第三个参数

%esp // 存储栈顶地址

%ebp //  存储栈帧的起始地址

%esi   // 用来存储第二个参数

%edi  // 用来存储第一个参数
```

#### 2. x86_64下的通用寄存器: r前缀


```Tex
// x86_64 下新增8个寄存器

R8-R15

%r8 // 用来存储第五个参数

%r9 // 用来存储第六个参数

%r11 和 %r12 是通用的寄存器，可以存储任意数据

```

