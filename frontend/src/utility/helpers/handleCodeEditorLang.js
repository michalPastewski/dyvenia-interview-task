import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';

export const getInitialCode = (lang) => {
  switch (lang) {
    case 'python':
      return 'print("Hello from Python")';
    case 'javascript':
      return 'console.log("Hello from JavaScript")';
    case 'cpp':
      return '#include <iostream>\n\nint main() {\n    std::cout << "Hello from C++";';
    case 'java':
      return 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello from Java");';
    default:
      return 'print("Hello from Python")';
  }
};

export const getLanguageExtension = (lang) => {
  switch (lang) {
    case 'python':
      return python();
    case 'javascript':
      return javascript();
    case 'cpp':
      return cpp();
    case 'java':
      return java();
    default:
      return python();
  }
};

export const getFileName = (lang) => {
  switch (lang) {
    case 'python':
      return 'main.py';
    case 'javascript':
      return 'main.js';
    case 'cpp':
      return 'main.cpp';
    case 'java':
      return 'Main.java';
    default:
      return 'main.py';
  }
};
